import { Workspace } from "obsidian";
import { CardCounts, nameToId, UNKNOWN_CARD } from "./collection";
import {
	CardData,
	getMultipleCardData,
	getMultipleCardDataByID,
	MAX_SCRYFALL_BATCH_SIZE,
	ScryfallResponse,
} from "./scryfall";
import { ObsidianPluginMtgSettings } from "./settings";
import { createDiv, createSpan } from "./dom-utils";
import { error } from "console";
import { stringify } from "querystring";

const DEFAULT_SECTION_NAME = "Deck:";
const COMMENT_DELIMITER = "#";

interface Line {
	lineType: "card" | "section" | "error" | "blank" | "comment" | "number";
	cardCount?: number;
	globalCount?: number | null;
	cardName?: string;
	cardNumber?: string;
	cardSetCode?: string;
	comments?: string[];
	errors?: string[];
	text?: string;
}

const lineMatchRE = /(\d+)\s(.*)/;
const setCodesRE = /(\([A-Za-z0-9]{3}\)\s\d+)/;
const lineWithSetCodes = /(\d+)\s+([\w| ,']*)\s+(\([A-Za-z0-9]{3}\)\s\d+)/;
const blankLineRE = /^\s+$/;
const headingMatchRE = new RegExp("^[^[0-9|" + COMMENT_DELIMITER + "]");
// A card number in a set can be something like "123" but it can always be
// (in the case of the list reprints) "ODY-46", eg. https://scryfall.com/card/plst/ODY-46/shelter
const numberRE = /([a-zA-Z0-9]{0,4}-)*\d+$/;

const currencyMapping = {
	usd: "$",
	eur: "€",
	tix: "Tx",
};

const idToNameMemo: Record<string, string> = {};

export const getCardPrice = (
	cardName: string,
	cardDataById: Record<string, CardData>,
	settings: ObsidianPluginMtgSettings
) => {
	const cardId = nameToId(cardName);
	const cardData = cardDataById[cardId];
	const preferredCurrency = settings.decklist.preferredCurrency;
	const hidePrices = settings.decklist.hidePrices;
	if (!cardData || hidePrices) {
		return null;
	} else {
		if (preferredCurrency === "eur") {
			return cardData.prices?.eur || null;
		} else if (preferredCurrency === "tix") {
			return cardData.prices?.tix || null;
		} else {
			return cardData.prices?.usd || null;
		}
	}
};

export const parseLines = (
	rawLines: string[],
	cardCounts: CardCounts
): Line[] => {
	// This means global counts are not available because they are missing or no collection files are present
	let shouldSkipGlobalCounts = !Object.keys(cardCounts).length;

	let currentSetCode: string = "";
	// count, collection_count, card name, comment
	return rawLines.map((line) => {
		// Handle blank lines
		if (!line.length || line.match(blankLineRE)) {
			return {
				lineType: "blank",
			};
		}
		// Handle comment lines
		if (line.startsWith(COMMENT_DELIMITER + " ")) {
			let setCode: string = extractSetCode(line);
			if (setCode != "") {
				currentSetCode = setCode;
			}
			return {
				lineType: "comment",
				comments: [line],
			};
		}

		// Handle card numbers, the card name will be added in later
		if (line.match(numberRE)) {
			return {
				lineType: "card",
				text: line,
				cardNumber: line.trim(),
				cardSetCode: currentSetCode,
				cardCount: 1,
				globalCount: null,
			};
		}

		// Handle headings
		if (line.match(headingMatchRE)) {
			return {
				lineType: "section",
				text: line,
			};
		}

		let lineWithoutComments: string = line;
		const comments: string[] = [];
		// Handle setcodes, etc
		if (lineWithoutComments.match(lineWithSetCodes)) {
			lineWithoutComments = lineWithoutComments
				.replace(setCodesRE, "")
				.trim();
		}

		// Handle comments
		if (line.includes(COMMENT_DELIMITER)) {
			const lineAndComments = line.split(COMMENT_DELIMITER);
			lineAndComments
				.slice(1)
				.forEach((comment) => comments.push(comment));
			lineWithoutComments = lineAndComments[0];
		}

		// Handle card lines
		let lineParts = lineWithoutComments.match(lineMatchRE);

		// Handle invalid line
		if (lineParts == null) {
			return {
				lineType: "error",
				errors: [`invalid line: ${line}`],
			};
		} else {
			const cardCount: number = parseInt(lineParts[1] || "0");
			const cardName: string = lineParts[2];
			const cardId: string = nameToId(cardName);
			const errors: string[] = [];

			let globalCount = null;

			if (!shouldSkipGlobalCounts) {
				globalCount = cardCounts[cardId] || 0;
			}

			if (cardName.length === 0) {
				errors.push(`Unable to parse card name from: ${line}`);
			}

			return {
				lineType: "card",
				cardCount,
				globalCount,
				cardName,
				comments,
				errors,
			};
		}
	});
};

export const buildDistinctCardNamesList = (lines: Line[]): string[] => {
	return Array.from(
		new Set(
			lines
				.map((line) => line.cardName || "")
				// Remove missing values
				.filter((line) => line !== "")
		)
	);
};

export const buildDistinctCardNumbersBySetList = (
	lines: Line[]
): Record<string, string[]> => {
	let cardNumbersBySet: Record<string, string[]> = {};
	lines.forEach((line) => {
		if (line.cardNumber && line.cardSetCode) {
			if (!cardNumbersBySet[line.cardSetCode]) {
				cardNumbersBySet[line.cardSetCode] = [];
			}
			cardNumbersBySet[line.cardSetCode].push(line.cardNumber);
		}
	});
	return cardNumbersBySet;
};

export const extractSetCode = (value: string): string => {
	let setCode: string = "";
	const parts: string[] = value.slice(1).split(",");
	parts.forEach((setting, i) => {
		const settingParts: string[] = setting.split("=");
		if (settingParts.length == 2) {
			const key: string = settingParts[0].trim();
			const value: string = settingParts[1].trim();
			if (key === "set") {
				setCode = value;
			}
		}
	});
	return setCode;
};

export const fetchCardDataFromScryfall = async (
	distinctCardNames: string[]
): Promise<Record<string, CardData>> => {
	// Fetch in batches of 75, since that's the limit of Scryfall batch sizes
	const batches: string[][] = [];
	let currentBatch: string[] = [];
	batches.push(currentBatch);
	distinctCardNames.forEach((cardName: string, idx: number) => {
		if (currentBatch.length === MAX_SCRYFALL_BATCH_SIZE) {
			batches.push(currentBatch);
			// Make new batch
			currentBatch = [];
		}
		currentBatch.push(nameToId(cardName));
	});
	// Add remaining cards
	batches.push(currentBatch);

	const cardDataInBatches: ScryfallResponse[] = await Promise.all(
		batches.map((batch) => getMultipleCardData(batch))
	);
	const cardDataByCardId: Record<string, CardData> = {};
	const cards = [];

	cardDataInBatches.forEach((batch) => {
		batch.data.forEach((card: CardData) => {
			cards.push(card);
			if (card.name) {
				const cardId = nameToId(card.name);
				cardDataByCardId[cardId] = card;
			}
		});
	});

	return cardDataByCardId;
};

export const fetchCardDataByIDFromScryfall = async (
	distinctCardNumbersBySet: Record<string, string[]>
): Promise<Record<string, Record<string, CardData>>> => {
	let cardDataBySetCodeCardNumber: Record<
		string,
		Record<string, CardData>
	> = {};
	for (const setName in distinctCardNumbersBySet) {
		var cardData: CardData[] = [];
		try {
			cardData = await getMultipleCardDataByID(
				setName,
				distinctCardNumbersBySet[setName]
			);
		} catch {
			console.log("Error: ", error);
		}

		const cards = [];
		cardDataBySetCodeCardNumber[setName] = {};
		cardData.forEach((card) => {
			if (card == null) {
				return;
			}
			cards.push(card);
			if (card.name) {
				const cardId = nameToId(card.name);
				cardDataBySetCodeCardNumber[setName][card.collector_number] =
					card;
			}
		});
	}
	return cardDataBySetCodeCardNumber;
};

export const renderDecklist = async (
	root: Element,
	source: string,
	cardCounts: CardCounts,
	settings: ObsidianPluginMtgSettings,
	workspace: Workspace | undefined,
	dataFetcher = fetchCardDataFromScryfall
): Promise<Element> => {
	const lines: string[] = source.split("\n");

	const parsedLines: Line[] = parseLines(lines, cardCounts);

	// Create list of distinct card names
	const distinctCardNames: string[] = buildDistinctCardNamesList(parsedLines);
	let cardDataByCardId: Record<string, CardData> = {};

	// Try to fetch data from Scryfall
	try {
		cardDataByCardId = await dataFetcher(distinctCardNames);
	} catch (err) {
		console.log("Error fetching card data: ", err);
	}
	return render(
		root,
		cardDataByCardId,
		settings,
		workspace,
		parsedLines,
		false
	);
};

export const renderCollection = async (
	root: Element,
	source: string,
	cardCounts: CardCounts,
	settings: ObsidianPluginMtgSettings,
	workspace: Workspace,
	dataFetcher = fetchCardDataByIDFromScryfall
): Promise<Element> => {
	const lines: string[] = source.split("\n");

	const parsedLines: Line[] = parseLines(lines, cardCounts);

	// Create list of distinct card names
	const distinctCardNumbersBySet: Record<string, string[]> =
		buildDistinctCardNumbersBySetList(parsedLines);
	let cardDataBySetNameByCardNumber: Record<
		string,
		Record<string, CardData>
	> = {};

	// Try to fetch data from Scryfall
	try {
		cardDataBySetNameByCardNumber = await dataFetcher(
			distinctCardNumbersBySet
		);
	} catch (err) {
		console.log("Error fetching card data: ", err);
	}

	// Add found data to parsed lines so render works as it does in the deck list format
	let cardDataByCardId: Record<string, CardData> = {};
	let shouldSkipGlobalCounts = !Object.keys(cardCounts).length;
	parsedLines.forEach((line) => {
		if (line.lineType == "card" && line.cardNumber && line.cardSetCode) {
			let cardData =
				cardDataBySetNameByCardNumber[line.cardSetCode][
					line.cardNumber
				];
			if (cardData == null) {
				line.cardName = `Card not found (${line.cardSetCode}/${line.cardNumber})`;
			} else {
				line.cardName = cardData.name;
			}
			let cardId = nameToId(line.cardName);
			cardDataByCardId[cardId] = cardData;
			if (!shouldSkipGlobalCounts) {
				line.globalCount = cardCounts[cardId] || 0;
			}
		}
	});
	return render(
		root,
		cardDataByCardId,
		settings,
		workspace,
		parsedLines,
		true
	);
};

const render = async (
	root: Element,
	cardDataByCardId: Record<string, CardData>,
	settings: ObsidianPluginMtgSettings,
	workspace: Workspace | undefined,
	parsedLines: Line[],
	isCollection: boolean
): Promise<Element> => {
	const containerEl = createDiv(root, {});
	containerEl.classList.add("decklist");
	// Determines whether any card info was found for the cards on the list
	const hasCardInfo = Object.keys(cardDataByCardId).length > 0;

	const linesBySection: Record<string, Line[]> = {};

	var currentSection = DEFAULT_SECTION_NAME;
	if (isCollection) {
		currentSection = "Collection: ";
	}

	// A reverse mapping for getting names from an id
	const idsToNames: Record<string, string> = {};
	let sections: string[] = [];
	parsedLines.forEach((line, idx) => {
		if (idx == 0 && line.lineType !== "section") {
			currentSection = `${currentSection}`;
			sections.push(`${currentSection}`);
		}
		if (line.lineType === "section") {
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

	// Header section
	const header = createDiv(containerEl, {
		cls: "header",
	});

	const imgElContainer = document.createElement("div");
	imgElContainer.classList.add("card-image-container");
	const imgEl = document.createElement("img");
	imgEl.classList.add("card-image");
	imgElContainer.appendChild(imgEl);

	// Attach image container to header
	header.appendChild(imgElContainer);

	// Footer Section
	const footer = document.createElement("div");
	footer.classList.add("footer");

	const sectionTotalCounts: Record<string, number> = sections.reduce(
		(acc, curr) => ({ ...acc, [curr]: 0 }),
		{}
	);
	const sectionTotalCost: Record<string, number> = sections.reduce(
		(acc, curr) => ({ ...acc, [curr]: 0.0 }),
		{}
	);
	const missingCardCounts: CardCounts = {};

	sections.forEach((section: string) => {
		// Put the entire deck in containing div for styling
		const sectionContainer = document.createElement("div");
		sectionContainer.classList.add("decklist__section-container");

		// Create a heading
		const sectionHedingEl = document.createElement("h3");
		sectionHedingEl.classList.add("decklist__section-heading");
		sectionContainer.appendChild(sectionHedingEl);

		// Create container for the list items
		const sectionList = document.createElement("ul");
		sectionList.classList.add("decklist__section-list");

		const sectionMissingCardCounts: CardCounts = {};

		// Create line item elements
		console.log(linesBySection);
		linesBySection[section].forEach((line: Line) => {
			const lineEl = document.createElement("li");
			lineEl.classList.add("decklist__section-list-item");

			if (line.lineType === "card") {
				const cardCountEl = createSpan(lineEl, {
					cls: "count",
				});

				const cardNameEl = createSpan(lineEl, {
					cls: "card-name",
				});

				// Add hyperlink when possible
				if (line.cardName) {
					const cardId = nameToId(line.cardName);
					const cardInfo = cardDataByCardId[cardId];
					if (
						settings.decklist.showCardNamesAsHyperlinks &&
						cardInfo &&
						cardInfo.scryfall_uri
					) {
						const cardLinkEl = document.createElement("a");
						const purchaseUri = cardInfo.scryfall_uri;
						cardLinkEl.href = purchaseUri;
						cardLinkEl.textContent = `${cardInfo.name}`;
						cardNameEl.appendChild(cardLinkEl);
					} else {
						cardNameEl.textContent = `${
							(cardInfo && cardInfo.name) ||
							line.cardName ||
							UNKNOWN_CARD
						}`;
					}
				}

				let cardErrorsEl = null;
				if (line.errors && line.errors.length) {
					cardErrorsEl = createSpan(lineEl, {
						cls: "error",
						text: line.errors?.join(",") || "",
					});
				}

				const cardCommentsEl = createSpan(lineEl, {
					cls: "comment",
					text: line.comments?.join("#") || "",
				});

				const cardPriceEl = createSpan(lineEl, {
					cls: "card-price",
				});
				let cardPrice;
				if (line.cardName) {
					cardPrice = getCardPrice(
						line.cardName,
						cardDataByCardId,
						settings
					);
				}

				const lineCardCount = line.cardCount || 0;
				const lineGlobalCount =
					line.globalCount === null ? -1 : line.globalCount || 0;

				// Show missing card counts
				if (lineGlobalCount !== -1 && lineCardCount > lineGlobalCount) {
					const counts = createSpan(cardCountEl);
					// Card error element
					createSpan(counts, {
						cls: "error",
						text: `${lineGlobalCount}`,
					});
					// Card counts row element
					createSpan(counts, {
						text: ` / ${lineCardCount}`,
					});
					lineEl.classList.add("insufficient-count");

					const cardId = nameToId(line.cardName);
					missingCardCounts[cardId] =
						(missingCardCounts[cardId] || 0) +
						(lineCardCount - lineGlobalCount);

					sectionMissingCardCounts[cardId] =
						(sectionMissingCardCounts[cardId] || 0) +
						(lineCardCount - lineGlobalCount);

					if (cardPrice) {
						cardPriceEl.classList.add("insufficient-count");

						const totalPrice: number =
							lineCardCount * parseFloat(cardPrice);
						const amountOwned: number =
							lineGlobalCount * parseFloat(cardPrice);

						const amountOwnedEl = createSpan(cardPriceEl, {
							cls: "error",
							text: `${
								currencyMapping[
									settings.decklist.preferredCurrency
								]
							}${amountOwned.toFixed(2)}`,
						});

						// totalPriceEl
						createSpan(cardPriceEl, {
							text: ` / ${
								currencyMapping[
									settings.decklist.preferredCurrency
								]
							}${totalPrice.toFixed(2)}`,
						});

						// Add cost to total
						sectionTotalCost[section] =
							sectionTotalCost[section] + (totalPrice || 0.0);
					}
				} else {
					cardCountEl.textContent = `${lineCardCount}`;

					if (cardPrice) {
						const totalPrice: number =
							lineCardCount * parseFloat(cardPrice);
						const displayPrice = `${
							currencyMapping[settings.decklist.preferredCurrency]
						}${totalPrice.toFixed(2)}`;
						cardPriceEl.textContent = displayPrice;

						// Add cost to total
						sectionTotalCost[section] =
							sectionTotalCost[section] + (totalPrice || 0.0);
					}
				}

				sectionTotalCounts[section] =
					sectionTotalCounts[section] + (line.cardCount || 0);

				if (cardErrorsEl) {
					lineEl.appendChild(cardErrorsEl);
				}

				if (settings.decklist.showCardPreviews) {
					// Event handlers for card artwork popover
					lineEl.addEventListener("mouseenter", () => {
						const cardId = nameToId(line.cardName);
						const cardInfo = cardDataByCardId[cardId];
						let imgUri: string | undefined;
						if (cardInfo) {
							// For single-faced cards...
							if (cardInfo.image_uris) {
								imgUri = cardInfo.image_uris?.large;
								// For double-faced cards...
							} else if (
								cardInfo.card_faces &&
								cardInfo.card_faces.length > 1
							) {
								// Use the front-side of the card for preview
								imgUri =
									cardInfo.card_faces[0].image_uris?.large;
							}
							const offsetPaddingTop = 16;
							imgElContainer.style.top = `${
								lineEl.offsetTop + offsetPaddingTop
							}px`;
							imgElContainer.style.left = `${cardCommentsEl.offsetLeft}px`;
						}
						if (typeof imgUri !== "undefined") {
							imgEl.src = imgUri;
						}
					});

					lineEl.addEventListener("mouseleave", () => {
						imgEl.src = "";
					});
				}

				sectionList.appendChild(lineEl);
			} else if (line.lineType === "comment") {
				// Comments
				createSpan(lineEl, {
					cls: "comment",
					text: line.comments?.join(" ") || "",
				});

				sectionList.appendChild(lineEl);
			}
		});

		sectionHedingEl.textContent = `${section}`;

		sectionContainer.appendChild(sectionList);

		const horizontalDividorEl = document.createElement("hr");
		sectionContainer.appendChild(horizontalDividorEl);

		const totalsEl = createDiv(sectionContainer, {
			cls: "decklist__section-totals",
		});

		const sectionMissingCardIds = Object.keys(sectionMissingCardCounts);

		const totalCardsEl = createSpan(sectionContainer);
		const totalCostEl = createSpan(sectionContainer);

		// When there are missing cards, show fraction
		if (sectionMissingCardIds.length) {
			// Counts
			const totalMissingCountInSection = Object.values(
				sectionMissingCardCounts
			).reduce((acc, v) => acc + v, 0);

			const totalCardsOwned =
				sectionTotalCounts[section] - totalMissingCountInSection;

			// Errors
			createSpan(totalCardsEl, {
				cls: "error",
				text: `${totalCardsOwned}`,
			});

			// Counts
			createSpan(totalCardsEl, {
				cls: "insufficient-count",
				text: ` / ${sectionTotalCounts[section]}`,
			});

			totalCardsEl.classList.add("decklist__section-totals__count");

			const totalMissingCostInSection = Object.keys(
				sectionMissingCardCounts
			).reduce((acc, cardId) => {
				const countNeeded = sectionMissingCardCounts[cardId];
				const cardPrice: number = parseFloat(
					getCardPrice(cardId, cardDataByCardId, settings) || "0.00"
				);
				return acc + cardPrice * countNeeded;
			}, 0.0);

			// Value
			if (hasCardInfo && !settings.decklist.hidePrices) {
				const totalValueOwned =
					sectionTotalCost[section] - totalMissingCostInSection;
				const totalValueOwnedEl = createSpan(totalCostEl, {
					cls: "error",
					text: `${
						currencyMapping[settings.decklist.preferredCurrency]
					}${totalValueOwned.toFixed(2)}`,
				});

				// Total value needed
				createSpan(totalCostEl, {
					cls: "insufficient-count",
					text: ` / ${
						currencyMapping[settings.decklist.preferredCurrency]
					}${sectionTotalCost[section].toFixed(2)}`,
				});
			}

			// Otherwise show simple values
		} else {
			totalCardsEl.classList.add("decklist__section-totals__count");
			totalCardsEl.textContent = `${sectionTotalCounts[section]}`;
			if (!settings.decklist.hidePrices) {
				totalCostEl.textContent = `${
					currencyMapping[settings.decklist.preferredCurrency]
				}${sectionTotalCost[section].toFixed(2)}`;
			}
		}

		totalsEl.appendChild(totalCardsEl);

		const totalCardsUnitEl = createSpan(totalsEl, {
			cls: "card-name",
			text: "cards",
		});

		if (hasCardInfo && !settings.decklist.hidePrices) {
			totalsEl.appendChild(totalCostEl);
		}

		sectionContainer.appendChild(totalsEl);

		sectionContainers.push(sectionContainer);
	});

	sectionContainers.forEach((sectionContainer) =>
		containerEl.appendChild(sectionContainer)
	);

	const buylistCardIds = Object.keys(missingCardCounts);
	const buylistCardCounts = Object.values(missingCardCounts).reduce(
		(acc, val) => acc + val,
		0
	);

	// Only show the buylist element when there are missing cards
	if (buylistCardIds.length && settings.decklist.showBuylist) {
		// Build Buylist
		const buylist = document.createElement("div");
		buylist.classList.add("buylist-container");

		const buylistHeader = document.createElement("h3");
		buylistHeader.classList.add("decklist__section-heading");
		buylistHeader.textContent = "Buylist: ";

		buylist.appendChild(buylistHeader);

		let totalCostOfBuylist = 0.0;

		let buylistLines = "";

		buylistCardIds.forEach((cardId) => {
			const cardInfo = cardDataByCardId[cardId];
			let buylistLine = "";

			const countNeeded = missingCardCounts[cardId];

			// const countEl = createSpan(buylistLineEl, {
			// 	cls: "decklist__section-totals__count",
			// 	text: `${countNeeded}`,
			// });

			// Add count
			buylistLine += `${countNeeded}` + " ";

			if (cardInfo) {
				const cardName = cardInfo.name || "";

				buylistLine += `${cardName}`;

				// Retrieve price
				const cardPrice: number = parseFloat(
					getCardPrice(cardName, cardDataByCardId, settings) || "0.00"
				);

				totalCostOfBuylist =
					totalCostOfBuylist + cardPrice * countNeeded;

				buylistLines += buylistLine + "\n";
			} else {
				// Card name might be unknown
				buylistLines += buylistLine + `${cardId || UNKNOWN_CARD}\n`;
			}
		});

		const buylistPre = document.createElement("pre");
		buylistPre.classList.add("buylist-container");
		buylistPre.textContent = buylistLines;

		buylist.appendChild(buylistPre);

		const horizontalDividorEl = document.createElement("hr");
		buylist.appendChild(horizontalDividorEl);

		const buylistLineEl = document.createElement("div");
		buylistLineEl.classList.add("buylist-line");

		// countEl
		createSpan(buylistLineEl, {
			cls: "decklist__section-totals__count",
			text: `${buylistCardCounts} `,
		});

		// cardNameEl
		createSpan(buylistLineEl, {
			cls: "card-name",
			text: "cards",
		});

		let totalPriceEl = null;
		if (hasCardInfo && !settings.decklist.hidePrices) {
			totalPriceEl = createSpan(buylistLineEl, {
				cls: "decklist__section-totals",
				text: `${
					currencyMapping[settings.decklist.preferredCurrency]
				}${totalCostOfBuylist.toFixed(2)}`,
			});
		}

		buylist.appendChild(buylistLineEl);

		footer.appendChild(buylist);
	}

	containerEl.appendChild(footer);

	// Add a link to sync this collection list into your collection
	if (isCollection && workspace) {
		const actions = document.createElement("div");
		actions.classList.add("actions-container");
		const button = document.createElement("a");
		const file = workspace.getActiveFile();
		button.text = "Sync Collection";

		let params = "file=" + file?.path;
		let cards = "&cards=";
		for (const cardId in cardDataByCardId) {
			const cardData = cardDataByCardId[cardId];
			const count = parsedLines
				.filter((line) => line.lineType === "card")
				// Remove missing values
				.filter((line) => line.cardName === cardData.name).length;
			cards += `${cardData.set}:${cardData.collector_number}:${count}//`;
		}
		params += cards;
		button.href =
			"obsidian://obsidian-mtg-action-sync-from-collection-list?" +
			params;
		actions.appendChild(button);
		footer.appendChild(actions);
	}

	return containerEl;
};
