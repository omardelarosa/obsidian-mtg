/**
 * Adapted via answer from StackOverflow:
 *
 * https://stackoverflow.com/questions/1293147/how-to-parse-csv-data
 *
 */
export const parseCsvCells = (str: string): string[][] => {
	const arr: string[][] = [];
	var quote = false; // 'true' means we're inside a quoted field

	// Iterate over each character, keep track of current row and column (of the returned array)
	for (var row = 0, col = 0, c = 0; c < str.length; c++) {
		var cc = str[c],
			nc = str[c + 1]; // Current character, next character
		arr[row] = arr[row] || []; // Create a new row if necessary
		arr[row][col] = arr[row][col] || ""; // Create a new column (start with empty string) if necessary

		// If the current character is a quotation mark, and we're inside a
		// quoted field, and the next character is also a quotation mark,
		// add a quotation mark to the current column and skip the next character
		if (cc == '"' && quote && nc == '"') {
			arr[row][col] += cc;
			++c;
			continue;
		}

		// If it's just one quotation mark, begin/end quoted field
		if (cc == '"') {
			quote = !quote;
			continue;
		}

		// If it's a comma and we're not in a quoted field, move on to the next column
		if (cc == "," && !quote) {
			++col;
			continue;
		}

		// If it's a newline (CRLF) and we're not in a quoted field, skip the next character
		// and move on to the next row and move to column 0 of that new row
		if (cc == "\r" && nc == "\n" && !quote) {
			++row;
			col = 0;
			++c;
			continue;
		}

		// If it's a newline (LF or CR) and we're not in a quoted field,
		// move on to the next row and move to column 0 of that new row
		if (cc == "\n" && !quote) {
			++row;
			col = 0;
			continue;
		}
		if (cc == "\r" && !quote) {
			++row;
			col = 0;
			continue;
		}

		// Otherwise, append the current character to the current column
		arr[row][col] += cc;
	}

	return arr;
};

export const parseCsvFile = (
	fileContent: string,
	opts?: { skip_empty_lines?: boolean }
): Record<string, string>[] => {
	// Assumes that there is a columns header
	const lines = fileContent.split("\n");
	const headerRow = lines[0];
	const columnNames = headerRow.split(",").map(removeOuterQuotesFromString);
	const linesOfCells = parseCsvCells(fileContent);
	// Attach the header names to each row
	return linesOfCells.splice(1).map((cells) => {
		const obj: Record<string, string> = {};
		if (cells.length !== 0 || cells.length !== 0) {
			columnNames.forEach((columnName: string, idx: number) => {
				obj[columnName] = cells[idx];
			});
		}
		return obj;
	});
};

export const removeOuterQuotesFromString = (s: string) => {
	if (s.length > 2 && s[0] === '"' && s[s.length - 1] === '"') {
		return s.slice(1, s.length - 1);
	}
	return s;
};
