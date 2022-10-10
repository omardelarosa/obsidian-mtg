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
<div class=\"obsidian-plugin-mtg__header\"><div class=\"obsidian-plugin-mtg__card-image-container\"><img class=\"obsidian-plugin-mtg__card-image\"></div></div><div class=\"obsidian-plugin-mtg__decklist__section-container\"><h3 class=\"obsidian-plugin-mtg__decklist__section-heading\">Deck</h3><ul class=\"obsidian-plugin-mtg__decklist__section-list\"><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">3</span><span> / 4</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/mid/47/delver-of-secrets-insectile-aberration?utm_source=api\">Delver of Secrets // Insectile Aberration</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$1.23</span><span> / $1.64</span></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">3</span><span> / 4</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/52/haughty-djinn?utm_source=api\">Haughty Djinn</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$4.80</span><span> / $6.40</span></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/72/tolarian-terror?utm_source=api\">Tolarian Terror</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.69</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/mid/44/consider?utm_source=api\">Consider</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$7.24</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/49/essence-scatter?utm_source=api\">Essence Scatter</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.20</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/mid/51/fading-hope?utm_source=api\">Fading Hope</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$2.36</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/snc/49/make-disappear?utm_source=api\">Make Disappear</a></span><span class=\"obsidian-plugin-mtg__comment\"> consider Negate instead</span><span class=\"obsidian-plugin-mtg__card-price\">$0.44</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">0</span><span> / 4</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/snc/62/slip-out-the-back?utm_source=api\">Slip Out the Back</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$0.00</span><span> / $6.80</span></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/2x2/63/spell-pierce?utm_source=api\">Spell Pierce</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.27</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">3</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/vow/85/thirst-for-discovery?utm_source=api\">Thirst for Discovery</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.48</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__comment\"></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">20</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/265/island?utm_source=api\">Island</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$1.80</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">1</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/neo/271/otawara-soaring-city?utm_source=api\">Otawara, Soaring City</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$12.74</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">0</span><span> / 1</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/mid/67/otherworldly-gaze?utm_source=api\">Otherworldly Gaze</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$0.00</span><span> / $0.24</span></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">0</span><span> / 1</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/neo/255/reckoner-bankbuster?utm_source=api\">Reckoner Bankbuster</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$0.00</span><span> / $3.93</span></span></li></ul><hr><div class=\"obsidian-plugin-mtg__decklist__section-totals\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\"><span class=\"obsidian-plugin-mtg__error\">52</span><span class=\"obsidian-plugin-mtg__insufficient-count\"> / 60</span></span><span class=\"obsidian-plugin-mtg__card-name\">cards</span><span><span class=\"obsidian-plugin-mtg__error\">$32.25</span><span class=\"obsidian-plugin-mtg__insufficient-count\"> / $45.23</span></span></div></div><div class=\"obsidian-plugin-mtg__decklist__section-container\"><h3 class=\"obsidian-plugin-mtg__decklist__section-heading\">Sideboard:</h3><ul class=\"obsidian-plugin-mtg__decklist__section-list\"><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">2</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/snc/39/disdainful-stroke?utm_source=api\">Disdainful Stroke</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.18</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/58/negate?utm_source=api\">Negate</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.36</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item\"><span class=\"obsidian-plugin-mtg__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/snc/52/out-of-the-way?utm_source=api\">Out of the Way</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price\">$0.20</span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">0</span><span> / 1</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/neo/255/reckoner-bankbuster?utm_source=api\">Reckoner Bankbuster</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$0.00</span><span> / $3.93</span></span></li><li class=\"obsidian-plugin-mtg__decklist__section-list-item obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__count\"><span><span class=\"obsidian-plugin-mtg__error\">0</span><span> / 4</span></span></span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://scryfall.com/card/dmu/48/ertais-scorn?utm_source=api\">Ertai's Scorn</a></span><span class=\"obsidian-plugin-mtg__comment\"></span><span class=\"obsidian-plugin-mtg__card-price obsidian-plugin-mtg__insufficient-count\"><span class=\"obsidian-plugin-mtg__error\">$0.00</span><span> / $0.52</span></span></li></ul><hr><div class=\"obsidian-plugin-mtg__decklist__section-totals\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\"><span class=\"obsidian-plugin-mtg__error\">10</span><span class=\"obsidian-plugin-mtg__insufficient-count\"> / 15</span></span><span class=\"obsidian-plugin-mtg__card-name\">cards</span><span><span class=\"obsidian-plugin-mtg__error\">$0.74</span><span class=\"obsidian-plugin-mtg__insufficient-count\"> / $5.19</span></span></div></div><div class=\"obsidian-plugin-mtg__footer\"><div class=\"obsidian-plugin-mtg__buylist-container\"><h3 class=\"obsidian-plugin-mtg__decklist__section-heading\">Buylist: </h3><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">1</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/248082?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Delver of Secrets // Insectile Aberration</a></span><span> </span></div><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">1</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/283407?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Haughty Djinn</a></span><span> </span></div><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/268915?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Slip Out the Back</a></span><span> </span></div><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">1</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/248292?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Otherworldly Gaze</a></span><span> </span></div><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">2</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/262560?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Reckoner Bankbuster</a></span><span> </span></div><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">4</span><span class=\"obsidian-plugin-mtg__card-name\"><a href=\"https://www.tcgplayer.com/product/283606?page=1&amp;utm_campaign=affiliate&amp;utm_medium=api&amp;utm_source=scryfall\">Ertai's Scorn</a></span><span> </span></div><hr><div class=\"obsidian-plugin-mtg__buylist-line\"><span class=\"obsidian-plugin-mtg__decklist__section-totals__count\">13 </span><span class=\"obsidian-plugin-mtg__card-name\">cards</span><span class=\"obsidian-plugin-mtg__decklist__section-totals\">$17.43</span></div></div></div>`;

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
            preferredCurrency: 'usd',
            showCardNamesAsHyperlinks: true,
            showCardPreviews: true,
            showBuylist: true
        }
    };

    describe('#renderDecklist', () => {
        test('', async () => {

            const el = await renderDecklist(EXAMPLE_DECK_1, EXAMPLE_COLLECTION, settings, fakeFetcher);
            expect(el.innerHTML.trim()).toEqual(EXAMPLE_DECK_1_HTML.trim());
        });
    });
});