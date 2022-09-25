import { CardCounts, nameToId, UNKNOWN_CARD } from "./collection";


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

export const renderDecklist = (el: Element, source: string, cardCounts: CardCounts): void => {
    const containerEl: Element = document.createElement('div');

    containerEl.addClass('obsidian-plugin-mtg__decklist');

    const lines: string[] = source.split('\n');

    // This means global counts are not available because they are missing or no collection files are present
    let shouldSkipGlobalCounts = !Object.keys(cardCounts).length;

    // count, collection_count, card name, comment
    const parsedLines: Line[] = lines.map((line) => {
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

    // Make elements from parsedLines
    const sectionContainers: Element[] = [];

    sections.forEach((section: string) => {
       // Put the entire deck in containing div for styling
       const sectionContainer = document.createElement('div');
       sectionContainer.addClass('obsidian-plugin-mtg__decklist__section-container')

       // Create a heading
       const sectionHedingEl = document.createElement('h3');
       sectionHedingEl.addClass('obsidian-plugin-mtg__decklist__section-heading');
       sectionContainer.appendChild(sectionHedingEl);

       // Create container for the list items
       const sectionList = document.createElement('ul');
       sectionList.addClass('obsidian-plugin-mtg__decklist__section-list');

       const sectionCardCounts: CardCounts = {};

       // Create line item elements
       linesBySection[section].forEach((line: Line) => {
            const lineEl = document.createElement('li');
            lineEl.addClass('obsidian-plugin-mtg__decklist__section-list-item');

            if (!sectionCardCounts[section]) {
                sectionCardCounts[section] = 0;
            }

            // TODO: handle blank lines more formally?
            if (line.lineType === 'card') {
                // TODO: style this
                const cardCountEl = document.createElement('span');
                cardCountEl.addClass('obsidian-plugin-mtg__count');

                const cardNameEl = document.createElement('span');
                cardNameEl.innerText = `${line.cardName || UNKNOWN_CARD}`;

                const cardErrorsEl = document.createElement('span');
                cardErrorsEl.addClass('obsidian-plugin-mtg__error');
                cardErrorsEl.innerText = line.errors?.join(',') || '';

                const cardCommentsEl = document.createElement('span');
                cardCommentsEl.addClass('obsidian-plugin-mtg__comment');
                cardCommentsEl.innerText = line.comments?.join('#') || '';

                const lineCardCount = (line.cardCount || 0);
                const lineGlobalCount = line.globalCount === null ? -1 : line.globalCount || 0;
                // Show missing card counts
                if (lineGlobalCount !== -1 && lineCardCount > lineGlobalCount) {
                    cardCountEl.innerHTML = [
                        `<span class="obsidian-plugin-mtg__error">${lineCardCount}</span> / `,
                        `<span>${lineGlobalCount}</span>`
                    ].join('');

                    lineEl.addClass('obsidian-plugin-mtg__insufficient-count');
                    // TODO: reconsider whether this needs to be an error
                    // cardErrorsEl.innerText = 'Insufficient cards in collection. ' + cardErrorsEl.innerText;
                } else {
                    lineEl.innerText = `${lineCardCount}`;
                }

                sectionCardCounts[section] = sectionCardCounts[section] + (line.cardCount || 0);

                lineEl.appendChild(cardCountEl);
                lineEl.appendChild(cardNameEl);
                lineEl.appendChild(cardCommentsEl);
                lineEl.appendChild(cardErrorsEl);

                sectionList.appendChild(lineEl);
    
            } else if (line.lineType === 'comment') {
                const cardCommentsEl = document.createElement('span');
                cardCommentsEl.addClass('obsidian-plugin-mtg__comment');
                cardCommentsEl.innerText = line.comments?.join(' ') || '';
                lineEl.appendChild(cardCommentsEl);

                sectionList.appendChild(lineEl);
            }
       });

       sectionHedingEl.innerText = `${section} (${sectionCardCounts[section]} cards)`;

       sectionContainer.appendChild(sectionList);

       sectionContainers.push(sectionContainer);
    });

    sectionContainers.forEach(sectionContainer => containerEl.appendChild(sectionContainer));

    el.appendChild(containerEl);
}