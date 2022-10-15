import { describe, expect, test } from "@jest/globals";
import { renderDecklist } from "./renderer";
import { JSDOM } from "jsdom";
import { ObsidianPluginMtgSettings } from "./settings";
import { EXAMPLE_DECKLIST_CARD_DATA } from "../jest/fixtures/scryfall-data";
import { CardData } from "./scryfall";
import { EXAMPLE_COLLECTION, EXAMPLE_DECK_1, EXAMPLE_DECK_1_HTML } from "../jest/fixtures/content";

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
		},
		decklist: {
			preferredCurrency: "usd",
			showCardNamesAsHyperlinks: true,
			showCardPreviews: true,
			showBuylist: true,
		},
	};

	describe("#renderDecklist", () => {
		test("", async () => {
			const el = await renderDecklist(
                doc.body,
				EXAMPLE_DECK_1,
				EXAMPLE_COLLECTION,
				settings,
				fakeFetcher
			);
			expect(el.innerHTML.trim()).toEqual(EXAMPLE_DECK_1_HTML.trim());
		});
	});
});
