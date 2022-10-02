import {describe, expect, test} from '@jest/globals';
import { renderDecklist } from './renderer';
import { JSDOM } from 'jsdom';

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

describe('Renderer', () => {
    describe('#renderDecklist', () => {
        test('', () => {
            const el = dom.window.document.createElement('div');
            // el.classList.add('test-container');
            // doc.body.appendChild(el);
            // const elNode = doc.querySelector('.test-container');
            // if (!elNode) {
            //     throw new Error('missing test node!');
            // }
            // renderDecklist(elNode, EXAMPLE_DECK_1, EXAMPLE_COLLECTION);
            // const actual = elNode.textContent;
            // const expected = '';
            // dom.serialize();
            // console.log('EL', elNode);
            // expect(actual).toEqual(expected);
        });
    });
});