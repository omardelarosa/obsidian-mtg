import { describe, expect, test } from "@jest/globals";
import { renderDecklist } from "./renderer";
import { JSDOM } from "jsdom";
import { ObsidianPluginMtgSettings } from "./settings";
import { EXAMPLE_DECKLIST_CARD_DATA } from "../jest/fixtures/scryfall-data";
import { CardData } from "./scryfall";
import {
	EXAMPLE_COLLECTION,
	EXAMPLE_DECK_1,
	EXAMPLE_DECK_1_HTML,
	EXAMPLE_DECK_1_HTML_WITHOUT_PRICES,
} from "../jest/fixtures/content";

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const doc = dom.window.document;

const fakeFetcher = (
	distinctCardNames: string[]
): Promise<Record<string, CardData>> =>
	new Promise((resolve, reject) => {
		resolve(EXAMPLE_DECKLIST_CARD_DATA as Record<string, CardData>);
	});

describe("Renderer", () => {
	const settings: ObsidianPluginMtgSettings = {
		collection: {
			fileExtension: "mtg.collection.csv",
			nameColumn: "Name",
			countColumn: "Count",
			syncIntervalMs: 10,
			syncFileName: "test",
			syncFolder: "mtg/",
		},
		decklist: {
			preferredCurrency: "usd",
			showCardNamesAsHyperlinks: true,
			showCardPreviews: true,
			showBuylist: true,
			hidePrices: false,
		},
	};

	describe("#renderDecklist", () => {
		test("with prices", async () => {
			const el = await renderDecklist(
				doc.body,
				EXAMPLE_DECK_1,
				EXAMPLE_COLLECTION,
				settings,
				undefined,
				fakeFetcher
			);
			expect(el.innerHTML.trim()).toEqual(EXAMPLE_DECK_1_HTML.trim());
		});

		test("witout prices", async () => {
			const el = await renderDecklist(
				doc.body,
				EXAMPLE_DECK_1,
				EXAMPLE_COLLECTION,
				{
					...settings,
					decklist: {
						...settings.decklist,
						hidePrices: true,
					},
				},
				undefined,
				fakeFetcher
			);
			expect(el.innerHTML.trim()).toEqual(
				EXAMPLE_DECK_1_HTML_WITHOUT_PRICES.trim()
			);
		});
	});
});
