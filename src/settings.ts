export interface ObsidianPluginMtgSettings {
	collection: {
		// The file extension used for your collection CSV files
		fileExtension: string;
		// The name of the column where card names are stored
		nameColumn: string;
		// The name of the column in your csv where your counts are stored
		countColumn: string;
		// The number of milliseconds between collection count syncs
		syncIntervalMs: number;
	};
	decklist: {
		// Card Price Currency:
		preferredCurrency: "usd" | "eur" | "tix";
		// Show hyperlinks
		showCardNamesAsHyperlinks: boolean;
		// Show card previews
		showCardPreviews: boolean;
		// Show buylist
		showBuylist: boolean;
	};
}
