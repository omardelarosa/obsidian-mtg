import { promiseWrappedRequest } from "./http";

const querystring = require("querystring");

export interface RequestOptions {
	url: string;
	method?: string;
	body?: string;
	contentType?: string;
}

export type Request = <T>(options: RequestOptions) => Promise<T>;

// This is the maximum number of cards that can be requested at the same time
export const MAX_SCRYFALL_BATCH_SIZE = 75;

export interface CardFace {
	object?: string; // card_face
	name?: string;
	mana_cost?: string;
	type_line?: string;
	oracle_text?: string;
	colors?: string[];
	power?: string;
	toughness?: string;
	flavor_text?: string;
	flavor_name?: string;
	color_indicator?: string[];
	artist?: string;
	artist_id?: string;
	illustration_id?: string;
	image_uris?: {
		small: string;
		normal: string;
		large: string;
		png: string;
		art_crop: string;
		border_crop: string;
	};
}

export interface CardData {
	object?: string; // card
	id?: string;
	oracle_id?: string;
	multiverse_ids?: number[];
	mtgo_id?: number;
	arena_id?: number;
	tcgplayer_id?: number;
	cardmarket_id?: number;
	name?: string;
	lang?: string;
	released_at?: string;
	uri?: string;
	scryfall_uri?: string;
	layout?: string;
	highres_image?: boolean;
	image_status?: string;
	cmc?: number;
	type_line?: string;
	color_identity?: string[];
	keywords?: string[];
	card_faces?: CardFace[];
	legalities?: Record<string, string>;
	games?: string[];
	reserved?: boolean;
	foil?: boolean;
	nonfoil?: boolean;
	finishes?: string[];
	oversized?: boolean;
	promo?: boolean;
	reprint?: boolean;
	variation?: boolean;
	set_id?: string;
	set: string;
	set_name: string;
	set_type: string;
	set_uri: string;
	set_search_uri: string;
	scryfall_set_uri: string;
	rulings_uri: string;
	prints_search_uri: string;
	collector_number: string;
	digital: boolean;
	rarity: string;
	artist: string;
	artist_ids: string[];
	border_color: string;
	frame?: string;
	frame_effects?: string[];
	full_art?: boolean;
	textless?: boolean;
	booster?: boolean;
	image_uris?: {
		art_crop?: string;
		border_crop?: string;
		large?: string;
		normal?: string;
		png?: string;
		small?: string;
	};
	story_spotlight?: boolean;
	edhrec_rank?: number;
	penny_rank?: number;
	preview?: {
		source?: string;
		source_uri?: string;
		previewed_at?: string;
	};
	prices?: {
		usd?: string | null;
		usd_foil?: string | null;
		usd_etched?: string | null;
		eur?: string | null;
		eur_foil?: string | null;
		tix: string | null;
	};
	related_uris?: {
		gatherer: string;
		tcgplayer_infinite_articles: string;
		tcgplayer_infinite_decks: string;
		edhrec: string;
	};
	purchase_uris?: {
		tcgplayer: string;
		cardmarket: string;
		cardhoarder: string;
	};
}

export interface ScryfallResponse {
	data: CardData[];
	has_more: boolean;
	not_found?: string[];
	object: "list";
	total_cards: number;
}

export const getCardData = async (
	cardName: string,
	request = promiseWrappedRequest
): Promise<ScryfallResponse> => {
	const query: string = querystring.stringify({ q: cardName });
	const params: RequestOptions = {
		url: `https://api.scryfall.com/cards/search?${query}`,
	};
	return request(params);
};

export const getMultipleCardData = async (
	cardNames: string[],
	request = promiseWrappedRequest
): Promise<ScryfallResponse> => {
	const cardIdentifiers = cardNames.map((cardName) => ({
		name: cardName,
	}));

	const postData = JSON.stringify({
		identifiers: cardIdentifiers,
	});

	const params: RequestOptions = {
		url: "https://api.scryfall.com/cards/collection",
		method: "POST",
		body: postData,
		contentType: "application/json",
	};

	return request(params);
};
