import { Vault, Notice } from "obsidian";
import { parseCsvFile } from "./csv";
import { ObsidianPluginMtgSettings } from "./settings";
import {
	CardData,
	getCardDataByCode,
	MAX_SCRYFALL_BATCH_SIZE,
	ScryfallResponse,
} from "./scryfall";
import { fstat } from "fs";
import { stringify } from "querystring";

export const syncFileIntoCollection = async (
	vault: Vault,
	settings: ObsidianPluginMtgSettings,
	listFilePath: string,
	cardList: string
): Promise<null> => {
	const cardStrs: string[] = cardList.split("//");
	var cardCount: Record<string, number> = {};
	var cards: CardData[] = [];
	await Promise.all(
		cardStrs.map(async (cardStr: string) => {
			const [set, number, count] = cardStr.split(":");
			if (set != "" && number != "" && count != "") {
				const data = await getCardDataByCode(set, number);

				if (data && data.id) {
					cards.push(data);
					cardCount[data.id] = Number(count);
				}
			}
		})
	);
	// Create folder and file if not existing
	if (!vault.getFolderByPath(settings.collection.syncFolder)) {
		vault.createFolder(settings.collection.syncFolder);
	}
	const filePath =
		settings.collection.syncFolder +
		settings.collection.syncFileName +
		settings.collection.fileExtension;
	const header: string = `${settings.collection.nameColumn},${settings.collection.countColumn},set,number,scryfall_id,collection_list_note_source`;
	var syncFile = vault.getFileByPath(filePath);
	if (!syncFile) {
		syncFile = await vault.create(filePath, header);
	}
	const fileContents = await vault.read(syncFile);

	var fileLines = parseCsvFile(fileContents);
	var addedEntries: number = 0;
	var deletedEntries: number = 0;

	cards.forEach((card) => {
		if (!card.id || !card.name || !card.id) {
			return;
		}
		const matches = fileLines
			.filter((line) => line[settings.collection.nameColumn] == card.name)
			.filter(
				(line) => line["collection_list_note_source"] == listFilePath
			);
		if (matches.length != 0) {
			return;
		}
		const line: Record<string, string> = {};
		line[settings.collection.nameColumn] = card.name;
		line[settings.collection.countColumn] = cardCount[card.id].toString();
		line["set"] = card.set;
		line["number"] = card.collector_number;
		line["scryfall_id"] = card.id;
		line["collection_list_note_source"] = listFilePath;
		addedEntries++;
		fileLines.push(line);
	});

	var newContents: string = header;
	fileLines.forEach((line) => {
		newContents += `\n"${line[settings.collection.nameColumn]}",${
			line[settings.collection.countColumn]
		},${line["set"]},${line["number"]},${line["scryfall_id"]},${
			line["collection_list_note_source"]
		}`;
	});

	await vault.modify(syncFile, newContents);

	var noticeMsg = `Sync suceeded, added=${addedEntries}`;
	if (deletedEntries > 0) {
		noticeMsg += `,deleted=${deletedEntries}`;
	}
	new Notice(noticeMsg);

	return null;
};

export interface csvCardEntry {
	object?: string; // card
	id?: string;
	name: string;
	count: number;
	set: string;
	number: string;
	scryfallId: string;
	collectionListNoteSource: string;
}
