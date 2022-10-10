import { CardCounts, nameToId, UNKNOWN_CARD } from "./collection";
import { CardData, getMultipleCardData, MAX_SCRYFALL_BATCH_SIZE, ScryfallResponse } from './scryfall';
import { ObsidianPluginMtgSettings } from "./settings";

const DEFAULT_SECTION_NAME = 'Deck:';
const COMMENT_DELIMITER = '#';

interface Line {
    lineType: 'card' | 'section' | 'error' | 'blank' | 'comment';
    cardCount?: number;
    globalCount?: number | null;
    cardName?: string;
    comments?: string[];
    errors?: string[];
    text?: string;
}

const lineMatchRE = /(\d+)\s(.*)/;
const setCodesRE = /(\([A-Za-z0-9]{3}\)\s\d+)/;
const lineWithSetCodes = /(\d+)\s+([\w| ,']*)\s+(\([A-Za-z0-9]{3}\)\s\d+)/;
const blankLineRE = /^\s+$/;
const headingMatchRE = new RegExp('^[^[0-9|' + COMMENT_DELIMITER + ']');

const currencyMapping = {
    'usd': '$',
    'eur': '€',
    'tix': 'Tx'
}

export const getCardPrice = (cardName: string, cardDataById: Record<string, CardData>, settings: ObsidianPluginMtgSettings) => {
    const cardId = nameToId(cardName);
    const cardData = cardDataById[cardId];
    const preferredCurrency = settings.decklist.preferredCurrency;
    if (!cardData) {
        return null;
    } else {
        if (preferredCurrency === 'eur') {
            return cardData.prices?.eur || null;
        } else if (preferredCurrency === 'tix') {
            return cardData.prices?.tix || null;
        } else {
            return cardData.prices?.usd || null;
        }
    }
}

export const parseLines = (rawLines: string[], cardCounts: CardCounts): Line[] => {
    // This means global counts are not available because they are missing or no collection files are present
    let shouldSkipGlobalCounts = !Object.keys(cardCounts).length;

    // count, collection_count, card name, comment
    return rawLines.map((line) => {
        // Handle blank lines
        if (!line.length || line.match(blankLineRE)) {
            return {
                lineType: 'blank'
            };
        }

        // Handle headings
        if (line.match(headingMatchRE)) {
            return {
                lineType: 'section',
                text: line
            }
        }

        // Handle comment lines
        if (line.startsWith(COMMENT_DELIMITER + ' ')) {
            return {
                lineType: 'comment',
                comments: [line]
            }
        }

        let lineWithoutComments: string = line;
        const comments: string[] = [];
        // Handle setcodes, etc
        if (lineWithoutComments.match(lineWithSetCodes)) {
            lineWithoutComments = lineWithoutComments.replace(setCodesRE, '').trim();
        }


        // Handle comments
        if (line.includes(COMMENT_DELIMITER)) {
            const lineAndComments = line.split(COMMENT_DELIMITER);
            lineAndComments.slice(1).forEach(comment => comments.push(comment));
            lineWithoutComments = lineAndComments[0];
        }

        // Handle card lines
        let lineParts = lineWithoutComments.match(lineMatchRE);

        // Handle invalid line
        if (lineParts == null) {
            return {
                lineType: 'error',
                errors: [`invalid line: ${line}`]
            }
        } else {
            const cardCount: number = parseInt(lineParts[1] || '0');
            const cardName: string = lineParts[2];
            const cardId: string = nameToId(cardName)
            const errors: string[] = [];

            let globalCount = null;

            if (!shouldSkipGlobalCounts) {
                globalCount = cardCounts[cardId] || 0;
            }

            if (cardName.length === 0) {
               errors.push(`Unable to parse card name from: ${line}`);
            }

            return {
                lineType: 'card',
                cardCount,
                globalCount,
                cardName,
                comments,
                errors
            };
        }
    });
}

export const buildDistinctCardNamesList = (lines: Line[]): string[] => {
    return Array.from(new Set(
        lines
            .map(line => line.cardName || '')
            // Remove missing values
            .filter(line => line !== '')));
}

export const fetchCardDataFromScryfall = async (distinctCardNames: string[]): Promise<Record<string, CardData>> => {

    // Fetch in batches of 75, since that's the limit of Scryfall batch sizes
    const batches: string[][] = [];
    let currentBatch: string[] = [];
    batches.push(currentBatch);
    distinctCardNames.forEach((cardName: string) => {
        if (currentBatch.length === MAX_SCRYFALL_BATCH_SIZE) {
            batches.push(currentBatch);
            // Make new batch
            currentBatch = [];
        }
        currentBatch.push(nameToId(cardName));
    });

    const cardDataInBatches: ScryfallResponse[] = await Promise.all(batches.map(batch => getMultipleCardData(batch)));
    const cardDataByCardId: Record<string, CardData> = {};
    const cards = [];

    cardDataInBatches.forEach((batch) => {
        batch.data.forEach((card: CardData) => {
            cards.push(card);
            if (card.name) {
                const cardId = nameToId(card.name || '');
                cardDataByCardId[cardId] = card;
            }
        });
    });

    return cardDataByCardId;
}

export const renderDecklist = async (source: string, cardCounts: CardCounts, settings: ObsidianPluginMtgSettings, dataFetcher = fetchCardDataFromScryfall): Promise<Element> => {
    const containerEl: Element = document.createElement('div');
    
    containerEl.classList.add('obsidian-plugin-mtg__decklist');

    const lines: string[] = source.split('\n');

    const parsedLines: Line[] = parseLines(lines, cardCounts);

    const linesBySection: Record<string, Line[]> = {};

    let currentSection = DEFAULT_SECTION_NAME;
    let sections: string[] = [];

    parsedLines.forEach((line, idx) => {
        if (idx == 0 && line.lineType !== 'section') {
            currentSection = `${currentSection}`;
            sections.push(`${currentSection}`);
        }
        if (line.lineType === 'section') {
            currentSection = line.text || DEFAULT_SECTION_NAME;
            sections.push(`${currentSection}`);
        } else {
            if (!linesBySection[currentSection]) {
                linesBySection[currentSection] = [];
            }
            linesBySection[currentSection].push(line);
        }
    });

    // Create list of distinct card names
    const distinctCardNames: string[] = buildDistinctCardNamesList(parsedLines);
    const cardDataByCardId = await dataFetcher(distinctCardNames);

    // Make elements from parsedLines
    const sectionContainers: Element[] = [];

    // Meta Panel Section
    const metaPanel = document.createElement('div');
    metaPanel.classList.add('obsidian-plugin-mtg__meta-panel');

    const imgElContainer = document.createElement('div');
    imgElContainer.classList.add('obsidian-plugin-mtg__card-image-container');
    const imgEl = document.createElement('img');
    imgEl.classList.add('obsidian-plugin-mtg__card-image');
    imgElContainer.appendChild(imgEl);

    sections.forEach((section: string) => {
       // Put the entire deck in containing div for styling
       const sectionContainer = document.createElement('div');
       sectionContainer.classList.add('obsidian-plugin-mtg__decklist__section-container')

       // Create a heading
       const sectionHedingEl = document.createElement('h3');
       sectionHedingEl.classList.add('obsidian-plugin-mtg__decklist__section-heading');
       sectionContainer.appendChild(sectionHedingEl);

       // Create container for the list items
       const sectionList = document.createElement('ul');
       sectionList.classList.add('obsidian-plugin-mtg__decklist__section-list');

       const sectionCardCounts: CardCounts = {};

       // Create line item elements
       linesBySection[section].forEach((line: Line) => {
            const lineEl = document.createElement('li');
            lineEl.classList.add('obsidian-plugin-mtg__decklist__section-list-item');

            if (!sectionCardCounts[section]) {
                sectionCardCounts[section] = 0;
            }

            // TODO: handle blank lines more formally?
            if (line.lineType === 'card') {
                // TODO: style this
                const cardCountEl = document.createElement('span');
                cardCountEl.classList.add('obsidian-plugin-mtg__count');

                const cardNameEl = document.createElement('span');
                cardNameEl.textContent = `${line.cardName || UNKNOWN_CARD}`;

                let cardErrorsEl = null;
                if (line.errors && line.errors.length) {
                    cardErrorsEl = document.createElement('span');
                    cardErrorsEl.classList.add('obsidian-plugin-mtg__error');
                    cardErrorsEl.textContent = line.errors?.join(',') || '';
                }
                
                const cardCommentsEl = document.createElement('span');
                cardCommentsEl.classList.add('obsidian-plugin-mtg__comment');
                cardCommentsEl.textContent = line.comments?.join('#') || '';

                const cardPriceEl = document.createElement('span');
                cardPriceEl.classList.add('obsidian-plugin-mtg__card-price');
                let cardPrice; 
                if (line.cardName) {
                    cardPrice = getCardPrice(line.cardName, cardDataByCardId, settings);
                }
                
                const lineCardCount = (line.cardCount || 0);
                const lineGlobalCount = line.globalCount === null ? -1 : line.globalCount || 0;

                if (cardPrice) {
                    const totalPrice: number = lineCardCount * parseFloat(cardPrice);
                    const displayPrice = `${currencyMapping[settings.decklist.preferredCurrency]}${totalPrice.toFixed(2)}`;
                    cardPriceEl.textContent = displayPrice;
                }

                // Show missing card counts
                if (lineGlobalCount !== -1 && lineCardCount > lineGlobalCount) {
                    const counts = document.createElement('span');
                    const cardRowEl = document.createElement('span');
                    cardRowEl.classList.add("obsidian-plugin-mtg__error");
                    cardRowEl.textContent = `${lineCardCount}`;
                    const cardRowCountEl = document.createElement('span');
                    cardRowCountEl.textContent = ` / ${lineGlobalCount}`;
                    lineEl.classList.add('obsidian-plugin-mtg__insufficient-count');
                    counts.appendChild(cardRowEl);
                    counts.appendChild(cardRowCountEl);
                    cardCountEl.appendChild(counts);
                } else {
                    cardCountEl.textContent = `${lineCardCount}`;
                }

                sectionCardCounts[section] = sectionCardCounts[section] + (line.cardCount || 0);

                lineEl.appendChild(cardCountEl);
                lineEl.appendChild(cardNameEl);
                lineEl.appendChild(cardCommentsEl);
                lineEl.appendChild(cardPriceEl);

                if (cardErrorsEl) {
                    lineEl.appendChild(cardErrorsEl);
                }

                lineEl.addEventListener("mouseenter", () => {
                    const cardId = nameToId(line.cardName || '');
                    const cardInfo = cardDataByCardId[cardId];
                    let imgUri: string | undefined;
                    if (cardInfo) {
                        // For single-faced cards...
                        if (cardInfo.image_uris) {
                            imgUri = cardInfo.image_uris?.large;
                        // For double-faced cards...
                        } else if (cardInfo.card_faces && cardInfo.card_faces.length > 1) {
                            // Use the front-side of the card for preview
                            imgUri = cardInfo.card_faces[0].image_uris?.large;
                        }
                    }
                    if (typeof imgUri !== 'undefined') {
                        imgEl.src = imgUri;
                    }
                });
                
                sectionList.appendChild(lineEl);
    
            } else if (line.lineType === 'comment') {
                const cardCommentsEl = document.createElement('span');
                cardCommentsEl.classList.add('obsidian-plugin-mtg__comment');
                cardCommentsEl.innerText = line.comments?.join(' ') || '';
                lineEl.appendChild(cardCommentsEl);

                sectionList.appendChild(lineEl);
            }
       });

       sectionHedingEl.textContent = `${section} (${sectionCardCounts[section]} cards)`;

       sectionContainer.appendChild(sectionList);

       sectionContainers.push(sectionContainer);
    });

    sectionContainers.forEach(sectionContainer => containerEl.appendChild(sectionContainer));


    // Build buy buttons

    const buyButtons = document.createElement('div');
    buyButtons.classList.add('obsidian-plugin-mtg__buy-buttons-container');

    const buyButton1 = document.createElement('button');
    buyButton1.innerText = 'Buy missing cards from Card Kingdom';
    buyButton1.classList.add('obsidian-plugin-mtg__buy-button');

    const buyButton2 = document.createElement('button');
    buyButton2.innerText = 'Buy missing cards from TCG Player';
    buyButton2.classList.add('obsidian-plugin-mtg__buy-button');
    
    const buyButton3 = document.createElement('button');
    buyButton3.innerText = 'Copy missing cards list to clipboard';
    buyButton3.classList.add('obsidian-plugin-mtg__buy-button');
    
    buyButtons.appendChild(buyButton1);
    buyButtons.appendChild(buyButton2);
    buyButtons.appendChild(buyButton3);
    metaPanel.appendChild(buyButtons);
    metaPanel.appendChild(imgElContainer);

    containerEl.appendChild(metaPanel);

    return containerEl;
}