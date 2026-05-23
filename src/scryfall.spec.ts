import { describe, expect, test, jest } from "@jest/globals";

import { getCardData, getMultipleCardData, RequestOptions } from "./scryfall";
import {
	EXAMPLE_MULTI_CARD_RESPONSE,
	EXAMPLE_SCRYFALL_RESPONSE_1,
} from "../jest/fixtures/scryfall-data";

describe("Scryfall", () => {
	describe("#getCardData()", () => {
		test("for a single card", async () => {
			function httpReq<ScryfallResponse>(
				options: RequestOptions
			): Promise<ScryfallResponse> {
				return new Promise((res) => {
					res(
						EXAMPLE_SCRYFALL_RESPONSE_1 as unknown as ScryfallResponse
					);
				});
			}
			const data = await getCardData("Delver of Secrets", httpReq);
			expect(data).toEqual(EXAMPLE_SCRYFALL_RESPONSE_1);
		});
	});

	describe("#getMultipleCardData()", () => {
		test("for a single card", async () => {
			function httpReq<ScryfallResponse>(
				options: RequestOptions
			): Promise<ScryfallResponse> {
				return new Promise((res) => {
					res(
						EXAMPLE_MULTI_CARD_RESPONSE as unknown as ScryfallResponse
					);
				});
			}
			const data = await getMultipleCardData(
				[
					{ name: "Delver of Secrets" },
					{ name: "Ledger Shredder" },
					{ name: "Dark Ritual" },
				],
				httpReq
			);
			expect(data).toEqual(EXAMPLE_MULTI_CARD_RESPONSE);
		});
	});
});
