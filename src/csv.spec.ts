import { describe, expect, test } from "@jest/globals";
import { removeOuterQuotesFromString } from "./csv";

describe("CSV Parser", () => {
	describe("#removeOuterQuotesFromString()", () => {
		test("it handles empty string", () => {
			expect(removeOuterQuotesFromString("")).toEqual("");
		});
		test("it handles a short string", () => {
			expect(removeOuterQuotesFromString("a")).toEqual("a");
		});
		test("it handles a single quote inside other quotes", () => {
			expect(removeOuterQuotesFromString('"')).toEqual('"');
		});
		test("it handles a string inside quotes", () => {
			expect(removeOuterQuotesFromString('"foo"')).toEqual("foo");
		});
		test("it handles mismatched quotes", () => {
			expect(removeOuterQuotesFromString('"foo')).toEqual('"foo');
		});
		test("it handles nested quotes", () => {
			expect(removeOuterQuotesFromString('""foo" and "foo""')).toEqual(
				'"foo" and "foo"'
			);
		});
	});
});
