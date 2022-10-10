import {describe, expect, test} from '@jest/globals';
import { renderDecklist } from './renderer';
import { JSDOM } from 'jsdom';
import { ObsidianPluginMtgSettings } from './settings';
import { EXAMPLE_DECKLIST_CARD_DATA } from '../jest/fixtures/scryfall-data';
import { CardData } from './scryfall';

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
const doc = dom.window.document;

const EXAMPLE_DECK_1: string = `Deck
4 Delver of Secrets // Insectile Aberration
4 Haughty Djinn
3 Tolarian Terror
4 Consider
4 Essence Scatter
4 Fading Hope
4 Make Disappear # consider Negate instead
4 Slip Out the Back
3 Spell Pierce
3 Thirst for Discovery
# Lands
20 Island
1 Otawara, Soaring City
1 Otherworldly Gaze
1 Reckoner Bankbuster

Sideboard:
2 Disdainful Stroke
4 Negate
4 Out of the Way
1 Reckoner Bankbuster
4 Ertai's Scorn`;

const EXAMPLE_DECK_1_HTML = `
<div class=\"obsidian-plugin-mtg__decklist__section-container\"><h3 class=\"obsidian-plugin-mtg__decklist__section-heading\">Deck (60 cards)</h3><ul class=\"obsidian-plugin-mtg__decklist__section-list\"><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">4</span><span> / 3</span></span></span><span>Delver of Secrets // Insectile Aberration</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$1.64</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">4</span><span> / 3</span></span></span><span>Haughty Djinn</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$6.40</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span>Tolarian Terror</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.69</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Consider</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$7.24</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Essence Scatter</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.20</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Fading Hope</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$2.36</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Make Disappear </span><span class=\"obsidian-plugin-mtg__comment\"> consider Negate instead</span><span class=\"obsidian-plugin-mtg__card-price\">$0.44</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">4</span><span> / 0</span></span></span><span>Slip Out the Back</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$6.80</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span>Spell Pierce</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.27</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span>Thirst for Discovery</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.48</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__comment\"></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">20</span><span>Island</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$1.80</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">1</span><span>Otawara, Soaring City</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$12.74</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">1</span><span> / 0</span></span></span><span>Otherworldly Gaze</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.24</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">1</span><span> / 0</span></span></span><span>Reckoner Bankbuster</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$3.93</span></li></ul></div><div class=\"obsidian-plugin-mtg__decklist__section-container\"><h3 class=\"obsidian-plugin-mtg__decklist__section-heading\">Sideboard: (15 cards)</h3><ul class=\"obsidian-plugin-mtg__decklist__section-list\"><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">2</span><span>Disdainful Stroke</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.18</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Negate</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.36</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span>Out of the Way</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.20</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">1</span><span> / 0</span></span></span><span>Reckoner Bankbuster</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$3.93</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">4</span><span> / 0</span></span></span><span>Ertai's Scorn</span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.52</span></li></ul></div><div class=\"obsidian-plugin-mtg__meta-panel\"><div class=\"obsidian-plugin-mtg__buy-buttons-container\"><button class=\"obsidian-plugin-mtg__buy-button\"></button><button class=\"obsidian-plugin-mtg__buy-button\"></button><button class=\"obsidian-plugin-mtg__buy-button\"></button></div><div class=\"obsidian-plugin-mtg__card-image-container\"><img class=\"obsidian-plugin-mtg__card-image\"></div></div>`;

const EXAMPLE_COLLECTION = {
    'delver of secrets': 3,
    'haughty djinn': 3,
    'tolarian terror': 3,
    'consider': 4,
    'essence scatter': 4,
    'fading hope': 4,
    'make disappear': 4,
    'slipe out the back': 4,
    'spell pierce': 3,
    'thirst for discovery': 3,
    'island': 20,
    'otawara, soaring city': 1,
    'otherworldy gaze': 1,
    'recokner bankbuster': 2,
    'disdainful stroke': 2,
    'negate': 4,
    'out of the way': 4,
    'ertain\'s scorn': 4
};

const fakeFetcher = (distinctCardNames: string[]): Promise<Record<string, CardData>> => new Promise((resolve, reject) => {
    resolve(EXAMPLE_DECKLIST_CARD_DATA as Record<string, CardData>);
});

describe('Renderer', () => {
    const settings: ObsidianPluginMtgSettings = {
        collection: {
            fileExtension: 'mtg.collection.csv',
            nameColumn: 'Name',
            countColumn: 'Count',
            syncIntervalMs: 10
        },
        decklist: {
            preferredCurrency: 'usd'
        }
    };

    describe('#renderDecklist', () => {
        test('', async () => {

            const el = await renderDecklist(EXAMPLE_DECK_1, EXAMPLE_COLLECTION, settings, fakeFetcher);
            expect(el.innerHTML.trim()).toEqual(EXAMPLE_DECK_1_HTML.trim());
        });
    });
});