import { CardCounts, nameToId, UNKNOWN_CARD } from "./collection";


const DEFAULT_SECTION_NAME = 'Deck:';
const COMMENT_DELIMITER = '#';

interface Line {
    lineType: 'card' | 'section' | 'error' | 'blank' | 'comment';
    cardCount?: number;
    globalCount?: number;
    cardName?: string;
    comments?: string[];
    errors?: string[];
    text?: string;
}


const lineMatchRE = /(\d+)\s(.*)/;
const blankLineRE = /^\s+$/;
const headingMatchRE = /^\w+:$/;
const commentLineRE = new RegExp('^' + COMMENT_DELIMITER + '.*$');

export const renderDecklist = (el: Element, source: string, cardCounts: CardCounts): void => {
    const containerEl: Element = document.createElement('div');

    containerEl.addClass('obsidian-plugin-mtg__decklist');

    const lines: string[] = source.split('\n');

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
        if (line.startsWith(COMMENT_DELIMITER)) {
            return {
                lineType: 'comment',
                comments: [line]
            }
        }

        let lineWithoutComments: string = line;
        const comments: string[] = [];

        // Handle comments
        if (line.includes(COMMENT_DELIMITER)) {
            const lineAndComments = line.split(COMMENT_DELIMITER);
            lineAndComments.slice(1).forEach(comment => comments.push(comment));
            lineWithoutComments = lineAndComments[0];
        }

        // Handle card lines
        const lineParts = lineWithoutComments.match(lineMatchRE);

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

            const globalCount = cardCounts[cardId] || 0;

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
    let sections: string[] = [`${currentSection}`];

    parsedLines.forEach(line => {
        if (line.lineType === 'section') {
            currentSection = line.text || DEFAULT_SECTION_NAME;
            if (!sections.includes(currentSection)) {
                sections.push(`${currentSection}`);
            }
        } else {
            if (!linesBySection[currentSection]) {
                linesBySection[currentSection] = [];
            }
            linesBySection[currentSection].push(line);
        }
    });

    // console.log(linesBySection);

    // Make elements from parsedLines
    const sectionContainers: Element[] = [];
    
    sections.forEach((section: string) => {
       // Put the entire deck in containing div for styling
       const sectionContainer = document.createElement('div');
       sectionContainer.addClass('obsidian-plugin-mtg__decklist__section-container')

       // Create a heading
       const sectionHedingEl = document.createElement('h3');
       sectionHedingEl.innerText = section;
       sectionHedingEl.addClass('obsidian-plugin-mtg__decklist__section-heading');
       sectionContainer.appendChild(sectionHedingEl);

       // Create container for the list items
       const sectionList = document.createElement('ul');
       sectionList.addClass('obsidian-plugin-mtg__decklist__section-list');

       // Create line item elements
       linesBySection[section].forEach((line: Line) => {
            const lineEl = document.createElement('li');
            lineEl.addClass('obsidian-plugin-mtg__decklist__section-list-item');

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

                // Show missing card counts
                if ((line.cardCount || 0) > (line.globalCount || 0)) {
                    cardCountEl.innerText =
                    `${line.cardCount || 0} / ${line.globalCount || 0}`;
                    lineEl.addClass('obsidian-plugin-mtg__insufficient-count');
                    // Prepend errors
                    cardErrorsEl.innerText = 'Insufficient cards in collection. ' + cardErrorsEl.innerText;
                } else {
                    lineEl.innerText =
                    `${line.cardCount || 0}`;
                }

                lineEl.appendChild(cardCountEl);
                lineEl.appendChild(cardNameEl);
                lineEl.appendChild(cardCommentsEl);
                lineEl.appendChild(cardErrorsEl);

                sectionList.appendChild(lineEl);
    
            } else if (line.lineType === 'comment') {
                // TODO: style this
                const cardCommentsEl = document.createElement('span');
                cardCommentsEl.addClass('obsidian-plugin-mtg__comment');

                lineEl.appendChild(cardCommentsEl);

                sectionList.appendChild(lineEl);
            }
       });

       sectionContainer.appendChild(sectionList);

       sectionContainers.push(sectionContainer);
    });

    sectionContainers.forEach(sectionContainer => containerEl.appendChild(sectionContainer));

    // console.log('container: ', containerEl);

    // console.log(containerEl.innerHTML);

    el.appendChild(containerEl);
}