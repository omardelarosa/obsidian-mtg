import { describe, expect, test } from "@jest/globals";

import { createCardCountsMapping, nameToId } from "./collection";
import { ObsidianPluginMtgSettings } from "./settings";

// Basic example
const EXAMPLE_CSV_1 = `Name,Count,Set
Delver of Secrets // Insectile Aberration,8,MID
"Otawara, Soaring City",4,NEO
"Rona's Vortex",2,DMU
`;

// With some overlapping cards
const EXAMPLE_CSV_2 = `Name,Count,Set
Delver of Secrets // Insectile Aberration,1,MID
"Otawara, Soaring City",6,NEO
"Rona's Vortex",3,DMU
Ledger Shredder,5,SNC
`;

// Empty
const EXAMPLE_CSV_3 = `Name,Count,Set`;

describe("Collection", () => {
	describe("#nameToId()", () => {
		test("handles split cards", () => {
			const result = nameToId(
				"Delver of Secrets // Insectile Aberration"
			);
			expect(result).toEqual("delver of secrets");
		});

		test("handles spacing around name", () => {
			const result = nameToId("  Black Lotus       ");
			expect(result).toEqual("black lotus");
		});

		test("handles commas", () => {
			const result = nameToId("Otawara, Soaring City");
			expect(result).toEqual("otawara, soaring city");
		});

		test("handles apostrophes", () => {
			const result = nameToId("Rona's Vortex");
			expect(result).toEqual("rona's vortex");
		});
	});

	describe("#createCardCountsMapping", () => {
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
		test("handles multiple CSVs", async () => {
			const contents = [EXAMPLE_CSV_1, EXAMPLE_CSV_2];

			const mapping = await createCardCountsMapping(contents, settings);

			expect(mapping).toEqual({
				"delver of secrets": 9,
				"otawara, soaring city": 10,
				"rona's vortex": 5,
				"ledger shredder": 5,
			});
		});
	});
});
