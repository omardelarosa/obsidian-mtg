import { TFile, Vault } from "obsidian"
import { ObsidianPluginMtgSettings } from "./settings";

import { parse } from 'csv-parse/sync';

export type CardCounts = Record<string, number>

export const DEFAULT_COLLECTION_FILE_EXTENSION = 'mtg.collection.csv';
export const DEFAULT_COLLECTION_NAME_COLUMN = 'Name';
export const DEFAULT_COLLECTION_COUNT_COLUMN = 'Count';
export const DEFAULT_COLLECTION_SYNC_INTERVAL = 5000;

export const UNKNOWN_CARD = 'UNKNOWN_CARD';

export const nameToId = (rawName: string | undefined) => {
    return (rawName || "")
        // handle double-faced cards (i.e. "Delver Of Secrets" and "Delver of Secrets // Insectile Aberration")
        .split('//')[0]
        // remove surrounding whitespace
        .trim()
        // normalizing casing
        .toLowerCase()
}

export const checkIfFileIsCollectionFile = (file: TFile, settings: ObsidianPluginMtgSettings): boolean => {
    try {
        return file.name.endsWith(settings.collection.fileExtension);
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const createCardCountsMapping = async (fileContents: string[], settings: ObsidianPluginMtgSettings) => {
    const counts: CardCounts = {};
    const countsColumnName: string = settings.collection.countColumn;
    const nameColumnName: string = settings.collection.nameColumn;

    const recordsList: Record<string, string>[][] = fileContents.map(fileContent => {
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
          });
        return records
    });

    recordsList.forEach(records => {
        records.forEach((record) => {
            const count: number = parseInt(record[countsColumnName] || '0')
            const cardName: string = nameToId(record[nameColumnName]) || UNKNOWN_CARD;

            if (!counts[cardName]) {
                counts[cardName] = count;
            } else {
                counts[cardName] = counts[cardName] + count;
            }
        });
    })

    return counts;
}

export const processCollectionFiles = async (vault: Vault, settings: ObsidianPluginMtgSettings): Promise<string[]> => {
    return (await Promise.all(
       vault.getFiles()
            .filter(f => checkIfFileIsCollectionFile(f, settings))
            .map((fileContents) => {
                try {
                    return vault.cachedRead(fileContents);
                } catch (err) {
                    return '';
                }
            })
    ))
        // remove any unreadable files
        .filter(s => s.length);
}

export const syncCounts = async (vault: Vault, settings: ObsidianPluginMtgSettings): Promise<CardCounts> => {
    // Sync Collection
    const collectionContents: string[] = await processCollectionFiles(vault, settings);

    // Create consolidationed collection dictionary
    return createCardCountsMapping(collectionContents, settings);
}