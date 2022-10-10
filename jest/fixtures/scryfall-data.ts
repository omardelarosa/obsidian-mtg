import { ScryfallResponse } from "../../src/scryfall";

export const EXAMPLE_SCRYFALL_RESPONSE_1: ScryfallResponse = {
    "object": "list",
    "total_cards": 1,
    "has_more": false,
    "data": [
      {
        "object": "card",
        "id": "abff6c81-65a4-48fa-ba8f-580f87b0344a",
        "oracle_id": "edd531b9-f615-4399-8c8c-1c5e18c4acbf",
        "multiverse_ids": [
          534807,
          534808
        ],
        "mtgo_id": 93028,
        "arena_id": 78378,
        "tcgplayer_id": 248082,
        "cardmarket_id": 574906,
        "name": "Delver of Secrets // Insectile Aberration",
        "lang": "en",
        "released_at": "2021-09-24",
        "uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a",
        "scryfall_uri": "https://scryfall.com/card/mid/47/delver-of-secrets-insectile-aberration?utm_source=api",
        "layout": "transform",
        "highres_image": true,
        "image_status": "highres_scan",
        "cmc": 1,
        "type_line": "Creature — Human Wizard // Creature — Human Insect",
        "color_identity": [
          "U"
        ],
        "keywords": [
          "Flying",
          "Transform"
        ],
        "card_faces": [
          {
            "object": "card_face",
            "name": "Delver of Secrets",
            "mana_cost": "{U}",
            "type_line": "Creature — Human Wizard",
            "oracle_text": "At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets.",
            "colors": [
              "U"
            ],
            "power": "1",
            "toughness": "1",
            "flavor_text": "\"If my hypothesis is correct . . .\"",
            "artist": "Matt Stewart",
            "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
            "illustration_id": "9b572479-d64a-4d61-bd09-2c9a95138ddb",
            "image_uris": {
              "small": "https://cards.scryfall.io/small/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "normal": "https://cards.scryfall.io/normal/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "large": "https://cards.scryfall.io/large/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "png": "https://cards.scryfall.io/png/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
              "art_crop": "https://cards.scryfall.io/art_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "border_crop": "https://cards.scryfall.io/border_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
            }
          },
          {
            "object": "card_face",
            "name": "Insectile Aberration",
            "flavor_name": "",
            "mana_cost": "",
            "type_line": "Creature — Human Insect",
            "oracle_text": "Flying",
            "colors": [
              "U"
            ],
            "color_indicator": [
              "U"
            ],
            "power": "3",
            "toughness": "2",
            "flavor_text": "\"Aha! Yes! Now I hear it, the beautiful poetry of the lights in the sky. I must reach the moon and ask what it all means!\"",
            "artist": "Matt Stewart",
            "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
            "illustration_id": "83f0906b-d0e5-4725-ab5b-e33ed3387123",
            "image_uris": {
              "small": "https://cards.scryfall.io/small/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "normal": "https://cards.scryfall.io/normal/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "large": "https://cards.scryfall.io/large/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "png": "https://cards.scryfall.io/png/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
              "art_crop": "https://cards.scryfall.io/art_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
              "border_crop": "https://cards.scryfall.io/border_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
            }
          }
        ],
        "legalities": {
          "standard": "legal",
          "future": "legal",
          "historic": "legal",
          "gladiator": "legal",
          "pioneer": "legal",
          "explorer": "legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "legal",
          "vintage": "legal",
          "penny": "legal",
          "commander": "legal",
          "brawl": "legal",
          "historicbrawl": "legal",
          "alchemy": "legal",
          "paupercommander": "legal",
          "duel": "legal",
          "oldschool": "not_legal",
          "premodern": "not_legal"
        },
        "games": [
          "arena",
          "paper",
          "mtgo"
        ],
        "reserved": false,
        "foil": true,
        "nonfoil": true,
        "finishes": [
          "nonfoil",
          "foil"
        ],
        "oversized": false,
        "promo": false,
        "reprint": true,
        "variation": false,
        "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
        "set": "mid",
        "set_name": "Innistrad: Midnight Hunt",
        "set_type": "expansion",
        "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
        "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
        "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
        "rulings_uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a/rulings",
        "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aedd531b9-f615-4399-8c8c-1c5e18c4acbf&unique=prints",
        "collector_number": "47",
        "digital": false,
        "rarity": "uncommon",
        "artist": "Matt Stewart",
        "artist_ids": [
          "20871267-2d8a-41d5-b03a-be3d557c5734"
        ],
        "border_color": "black",
        "frame": "2015",
        "frame_effects": [
          "sunmoondfc"
        ],
        "full_art": false,
        "textless": false,
        "booster": true,
        "story_spotlight": false,
        "edhrec_rank": 11230,
        "penny_rank": 99,
        "preview": {
          "source": "Hareruya",
          "source_uri": "https://article.hareruyamtg.com/article/54478",
          "previewed_at": "2021-09-07"
        },
        "prices": {
          "usd": "0.41",
          "usd_foil": "0.72",
          "usd_etched": null,
          "eur": "0.55",
          "eur_foil": "1.34",
          "tix": "0.03"
        },
        "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534807",
          "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Delver+of+Secrets"
        },
        "purchase_uris": {
          "tcgplayer": "https://www.tcgplayer.com/product/248082?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Delver+of+Secrets&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/93028?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
        }
      }
    ]
};

export const EXAMPLE_MULTI_CARD_RESPONSE = {
  "object": "list",
  "not_found": [],
  "data": [
    {
      "object": "card",
      "id": "abff6c81-65a4-48fa-ba8f-580f87b0344a",
      "oracle_id": "edd531b9-f615-4399-8c8c-1c5e18c4acbf",
      "multiverse_ids": [
        534807,
        534808
      ],
      "mtgo_id": 93028,
      "arena_id": 78378,
      "tcgplayer_id": 248082,
      "cardmarket_id": 574906,
      "name": "Delver of Secrets // Insectile Aberration",
      "lang": "en",
      "released_at": "2021-09-24",
      "uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a",
      "scryfall_uri": "https://scryfall.com/card/mid/47/delver-of-secrets-insectile-aberration?utm_source=api",
      "layout": "transform",
      "highres_image": true,
      "image_status": "highres_scan",
      "cmc": 1,
      "type_line": "Creature — Human Wizard // Creature — Human Insect",
      "color_identity": [
        "U"
      ],
      "keywords": [
        "Flying",
        "Transform"
      ],
      "card_faces": [
        {
          "object": "card_face",
          "name": "Delver of Secrets",
          "mana_cost": "{U}",
          "type_line": "Creature — Human Wizard",
          "oracle_text": "At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets.",
          "colors": [
            "U"
          ],
          "power": "1",
          "toughness": "1",
          "flavor_text": "\"If my hypothesis is correct . . .\"",
          "artist": "Matt Stewart",
          "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
          "illustration_id": "9b572479-d64a-4d61-bd09-2c9a95138ddb",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "normal": "https://cards.scryfall.io/normal/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "large": "https://cards.scryfall.io/large/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "png": "https://cards.scryfall.io/png/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
            "art_crop": "https://cards.scryfall.io/art_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "border_crop": "https://cards.scryfall.io/border_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
          }
        },
        {
          "object": "card_face",
          "name": "Insectile Aberration",
          "flavor_name": "",
          "mana_cost": "",
          "type_line": "Creature — Human Insect",
          "oracle_text": "Flying",
          "colors": [
            "U"
          ],
          "color_indicator": [
            "U"
          ],
          "power": "3",
          "toughness": "2",
          "flavor_text": "\"Aha! Yes! Now I hear it, the beautiful poetry of the lights in the sky. I must reach the moon and ask what it all means!\"",
          "artist": "Matt Stewart",
          "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
          "illustration_id": "83f0906b-d0e5-4725-ab5b-e33ed3387123",
          "image_uris": {
            "small": "https://cards.scryfall.io/small/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "normal": "https://cards.scryfall.io/normal/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "large": "https://cards.scryfall.io/large/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "png": "https://cards.scryfall.io/png/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
            "art_crop": "https://cards.scryfall.io/art_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
            "border_crop": "https://cards.scryfall.io/border_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
          }
        }
      ],
      "legalities": {
        "standard": "legal",
        "future": "legal",
        "historic": "legal",
        "gladiator": "legal",
        "pioneer": "legal",
        "explorer": "legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "legal",
        "vintage": "legal",
        "penny": "legal",
        "commander": "legal",
        "brawl": "legal",
        "historicbrawl": "legal",
        "alchemy": "legal",
        "paupercommander": "legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal"
      },
      "games": [
        "arena",
        "paper",
        "mtgo"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "finishes": [
        "nonfoil",
        "foil"
      ],
      "oversized": false,
      "promo": false,
      "reprint": true,
      "variation": false,
      "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
      "set": "mid",
      "set_name": "Innistrad: Midnight Hunt",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aedd531b9-f615-4399-8c8c-1c5e18c4acbf&unique=prints",
      "collector_number": "47",
      "digital": false,
      "rarity": "uncommon",
      "artist": "Matt Stewart",
      "artist_ids": [
        "20871267-2d8a-41d5-b03a-be3d557c5734"
      ],
      "border_color": "black",
      "frame": "2015",
      "frame_effects": [
        "sunmoondfc"
      ],
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 11230,
      "penny_rank": 99,
      "preview": {
        "source": "Hareruya",
        "source_uri": "https://article.hareruyamtg.com/article/54478",
        "previewed_at": "2021-09-07"
      },
      "prices": {
        "usd": "0.41",
        "usd_foil": "0.72",
        "usd_etched": null,
        "eur": "0.55",
        "eur_foil": "1.34",
        "tix": "0.03"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534807",
        "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "edhrec": "https://edhrec.com/route/?cc=Delver+of+Secrets"
      },
      "purchase_uris": {
        "tcgplayer": "https://www.tcgplayer.com/product/248082?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Delver+of+Secrets&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/93028?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },
    {
      "object": "card",
      "id": "7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d",
      "oracle_id": "e9117015-1050-44dd-a46b-e7ffe2085fae",
      "multiverse_ids": [
        555247
      ],
      "mtgo_id": 98311,
      "arena_id": 80197,
      "tcgplayer_id": 268342,
      "cardmarket_id": 651255,
      "name": "Ledger Shredder",
      "lang": "en",
      "released_at": "2022-04-29",
      "uri": "https://api.scryfall.com/cards/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d",
      "scryfall_uri": "https://scryfall.com/card/snc/46/ledger-shredder?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287",
        "normal": "https://cards.scryfall.io/normal/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287",
        "large": "https://cards.scryfall.io/large/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287",
        "png": "https://cards.scryfall.io/png/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.png?1664410287",
        "art_crop": "https://cards.scryfall.io/art_crop/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287",
        "border_crop": "https://cards.scryfall.io/border_crop/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287"
      },
      "mana_cost": "{1}{U}",
      "cmc": 2,
      "type_line": "Creature — Bird Advisor",
      "oracle_text": "Flying\nWhenever a player casts their second spell each turn, Ledger Shredder connives. (Draw a card, then discard a card. If you discarded a nonland card, put a +1/+1 counter on this creature.)",
      "power": "1",
      "toughness": "3",
      "colors": [
        "U"
      ],
      "color_identity": [
        "U"
      ],
      "keywords": [
        "Flying",
        "Connive"
      ],
      "legalities": {
        "standard": "legal",
        "future": "legal",
        "historic": "legal",
        "gladiator": "legal",
        "pioneer": "legal",
        "explorer": "legal",
        "modern": "legal",
        "legacy": "legal",
        "pauper": "not_legal",
        "vintage": "legal",
        "penny": "not_legal",
        "commander": "legal",
        "brawl": "legal",
        "historicbrawl": "legal",
        "alchemy": "legal",
        "paupercommander": "not_legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "not_legal"
      },
      "games": [
        "paper",
        "mtgo",
        "arena"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "finishes": [
        "nonfoil",
        "foil"
      ],
      "oversized": false,
      "promo": false,
      "reprint": false,
      "variation": false,
      "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
      "set": "snc",
      "set_name": "Streets of New Capenna",
      "set_type": "expansion",
      "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae9117015-1050-44dd-a46b-e7ffe2085fae&unique=prints",
      "collector_number": "46",
      "digital": false,
      "rarity": "rare",
      "watermark": "obscura",
      "flavor_text": "No evidence, no crime.",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Mila Pesic",
      "artist_ids": [
        "81c5ec23-220b-4efa-b7df-9e49dd371e8d"
      ],
      "illustration_id": "d64a1c85-5bff-4dfb-a6f2-5a7e05590d36",
      "border_color": "black",
      "frame": "2015",
      "security_stamp": "oval",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 1612,
      "preview": {
        "source": "Wizards of the Coast",
        "source_uri": "https://magic.wizards.com/en/articles/archive/feature/streets-of-new-capenna-mechanics-2022-04-07",
        "previewed_at": "2022-04-07"
      },
      "prices": {
        "usd": "18.80",
        "usd_foil": "20.41",
        "usd_etched": null,
        "eur": "23.81",
        "eur_foil": "31.00",
        "tix": "19.79"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555247",
        "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Ledger+Shredder&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Ledger+Shredder&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "edhrec": "https://edhrec.com/route/?cc=Ledger+Shredder"
      },
      "purchase_uris": {
        "tcgplayer": "https://www.tcgplayer.com/product/268342?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Ledger+Shredder&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/98311?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    },
    {
      "object": "card",
      "id": "95f27eeb-6f14-4db3-adb9-9be5ed76b34b",
      "oracle_id": "53f7c868-b03e-4fc2-8dcf-a75bbfa3272b",
      "multiverse_ids": [
        442071
      ],
      "mtgo_id": 67078,
      "mtgo_foil_id": 67079,
      "tcgplayer_id": 161421,
      "cardmarket_id": 319002,
      "name": "Dark Ritual",
      "lang": "en",
      "released_at": "2018-03-16",
      "uri": "https://api.scryfall.com/cards/95f27eeb-6f14-4db3-adb9-9be5ed76b34b",
      "scryfall_uri": "https://scryfall.com/card/a25/82/dark-ritual?utm_source=api",
      "layout": "normal",
      "highres_image": true,
      "image_status": "highres_scan",
      "image_uris": {
        "small": "https://cards.scryfall.io/small/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        "normal": "https://cards.scryfall.io/normal/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        "large": "https://cards.scryfall.io/large/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        "png": "https://cards.scryfall.io/png/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.png?1628801678",
        "art_crop": "https://cards.scryfall.io/art_crop/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        "border_crop": "https://cards.scryfall.io/border_crop/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678"
      },
      "mana_cost": "{B}",
      "cmc": 1,
      "type_line": "Instant",
      "oracle_text": "Add {B}{B}{B}.",
      "colors": [
        "B"
      ],
      "color_identity": [
        "B"
      ],
      "keywords": [],
      "produced_mana": [
        "B"
      ],
      "legalities": {
        "standard": "not_legal",
        "future": "not_legal",
        "historic": "banned",
        "gladiator": "legal",
        "pioneer": "not_legal",
        "explorer": "not_legal",
        "modern": "not_legal",
        "legacy": "legal",
        "pauper": "legal",
        "vintage": "legal",
        "penny": "legal",
        "commander": "legal",
        "brawl": "not_legal",
        "historicbrawl": "legal",
        "alchemy": "not_legal",
        "paupercommander": "legal",
        "duel": "legal",
        "oldschool": "not_legal",
        "premodern": "legal"
      },
      "games": [
        "paper",
        "mtgo"
      ],
      "reserved": false,
      "foil": true,
      "nonfoil": true,
      "finishes": [
        "nonfoil",
        "foil"
      ],
      "oversized": false,
      "promo": false,
      "reprint": true,
      "variation": false,
      "set_id": "41ee6e2f-69b3-4c53-8a8e-960f5e974cfc",
      "set": "a25",
      "set_name": "Masters 25",
      "set_type": "masters",
      "set_uri": "https://api.scryfall.com/sets/41ee6e2f-69b3-4c53-8a8e-960f5e974cfc",
      "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aa25&unique=prints",
      "scryfall_set_uri": "https://scryfall.com/sets/a25?utm_source=api",
      "rulings_uri": "https://api.scryfall.com/cards/95f27eeb-6f14-4db3-adb9-9be5ed76b34b/rulings",
      "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A53f7c868-b03e-4fc2-8dcf-a75bbfa3272b&unique=prints",
      "collector_number": "82",
      "digital": false,
      "rarity": "common",
      "watermark": "set",
      "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
      "artist": "Clint Langley",
      "artist_ids": [
        "0f670587-9f7b-47b3-89cc-8dca80df4cdf"
      ],
      "illustration_id": "d2b19b06-705f-40e4-aace-072885238f4c",
      "border_color": "black",
      "frame": "2015",
      "full_art": false,
      "textless": false,
      "booster": true,
      "story_spotlight": false,
      "edhrec_rank": 80,
      "penny_rank": 27,
      "prices": {
        "usd": "0.76",
        "usd_foil": "1.95",
        "usd_etched": null,
        "eur": "1.10",
        "eur_foil": "3.19",
        "tix": "0.05"
      },
      "related_uris": {
        "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=442071",
        "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Dark+Ritual&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Dark+Ritual&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "edhrec": "https://edhrec.com/route/?cc=Dark+Ritual"
      },
      "purchase_uris": {
        "tcgplayer": "https://www.tcgplayer.com/product/161421?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
        "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Dark+Ritual&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
        "cardhoarder": "https://www.cardhoarder.com/cards/67078?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
      }
    }
  ]
};

export const EXAMPLE_DECKLIST_CARD_DATA = {
  "delver of secrets": {
    "object": "card",
    "id": "abff6c81-65a4-48fa-ba8f-580f87b0344a",
    "oracle_id": "edd531b9-f615-4399-8c8c-1c5e18c4acbf",
    "multiverse_ids": [
      534807,
      534808
    ],
    "mtgo_id": 93028,
    "arena_id": 78378,
    "tcgplayer_id": 248082,
    "cardmarket_id": 574906,
    "name": "Delver of Secrets // Insectile Aberration",
    "lang": "en",
    "released_at": "2021-09-24",
    "uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a",
    "scryfall_uri": "https://scryfall.com/card/mid/47/delver-of-secrets-insectile-aberration?utm_source=api",
    "layout": "transform",
    "highres_image": true,
    "image_status": "highres_scan",
    "cmc": 1,
    "type_line": "Creature — Human Wizard // Creature — Human Insect",
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Flying",
      "Transform"
    ],
    "card_faces": [
      {
        "object": "card_face",
        "name": "Delver of Secrets",
        "mana_cost": "{U}",
        "type_line": "Creature — Human Wizard",
        "oracle_text": "At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets.",
        "colors": [
          "U"
        ],
        "power": "1",
        "toughness": "1",
        "flavor_text": "\"If my hypothesis is correct . . .\"",
        "artist": "Matt Stewart",
        "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
        "illustration_id": "9b572479-d64a-4d61-bd09-2c9a95138ddb",
        "image_uris": {
          "small": "https://cards.scryfall.io/small/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "normal": "https://cards.scryfall.io/normal/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "large": "https://cards.scryfall.io/large/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "png": "https://cards.scryfall.io/png/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
          "art_crop": "https://cards.scryfall.io/art_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "border_crop": "https://cards.scryfall.io/border_crop/front/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
        }
      },
      {
        "object": "card_face",
        "name": "Insectile Aberration",
        "flavor_name": "",
        "mana_cost": "",
        "type_line": "Creature — Human Insect",
        "oracle_text": "Flying",
        "colors": [
          "U"
        ],
        "color_indicator": [
          "U"
        ],
        "power": "3",
        "toughness": "2",
        "flavor_text": "\"Aha! Yes! Now I hear it, the beautiful poetry of the lights in the sky. I must reach the moon and ask what it all means!\"",
        "artist": "Matt Stewart",
        "artist_id": "20871267-2d8a-41d5-b03a-be3d557c5734",
        "illustration_id": "83f0906b-d0e5-4725-ab5b-e33ed3387123",
        "image_uris": {
          "small": "https://cards.scryfall.io/small/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "normal": "https://cards.scryfall.io/normal/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "large": "https://cards.scryfall.io/large/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "png": "https://cards.scryfall.io/png/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.png?1634347351",
          "art_crop": "https://cards.scryfall.io/art_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351",
          "border_crop": "https://cards.scryfall.io/border_crop/back/a/b/abff6c81-65a4-48fa-ba8f-580f87b0344a.jpg?1634347351"
        }
      }
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set": "mid",
    "set_name": "Innistrad: Midnight Hunt",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/abff6c81-65a4-48fa-ba8f-580f87b0344a/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aedd531b9-f615-4399-8c8c-1c5e18c4acbf&unique=prints",
    "collector_number": "47",
    "digital": false,
    "rarity": "uncommon",
    "artist": "Matt Stewart",
    "artist_ids": [
      "20871267-2d8a-41d5-b03a-be3d557c5734"
    ],
    "border_color": "black",
    "frame": "2015",
    "frame_effects": [
      "sunmoondfc"
    ],
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 11230,
    "penny_rank": 99,
    "preview": {
      "source": "Hareruya",
      "source_uri": "https://article.hareruyamtg.com/article/54478",
      "previewed_at": "2021-09-07"
    },
    "prices": {
      "usd": "0.41",
      "usd_foil": "0.72",
      "usd_etched": null,
      "eur": "0.55",
      "eur_foil": "1.34",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534807",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Delver+of+Secrets+%2F%2F+Insectile+Aberration&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Delver+of+Secrets"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/248082?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Delver+of+Secrets&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/93028?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "haughty djinn": {
    "object": "card",
    "id": "35095a68-b7c0-4805-b0b6-6ca15a338692",
    "oracle_id": "44036bb5-f300-40bd-9180-6b246315d886",
    "multiverse_ids": [
      574532
    ],
    "mtgo_id": 102580,
    "arena_id": 82104,
    "tcgplayer_id": 283407,
    "cardmarket_id": 672315,
    "name": "Haughty Djinn",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/35095a68-b7c0-4805-b0b6-6ca15a338692",
    "scryfall_uri": "https://scryfall.com/card/dmu/52/haughty-djinn?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.jpg?1663047886",
      "normal": "https://cards.scryfall.io/normal/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.jpg?1663047886",
      "large": "https://cards.scryfall.io/large/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.jpg?1663047886",
      "png": "https://cards.scryfall.io/png/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.png?1663047886",
      "art_crop": "https://cards.scryfall.io/art_crop/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.jpg?1663047886",
      "border_crop": "https://cards.scryfall.io/border_crop/front/3/5/35095a68-b7c0-4805-b0b6-6ca15a338692.jpg?1663047886"
    },
    "mana_cost": "{1}{U}{U}",
    "cmc": 3,
    "type_line": "Creature — Djinn",
    "oracle_text": "Flying\nHaughty Djinn's power is equal to the number of instant and sorcery cards in your graveyard.\nInstant and sorcery spells you cast cost {1} less to cast.",
    "power": "*",
    "toughness": "4",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Flying"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/35095a68-b7c0-4805-b0b6-6ca15a338692/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A44036bb5-f300-40bd-9180-6b246315d886&unique=prints",
    "collector_number": "52",
    "digital": false,
    "rarity": "rare",
    "flavor_text": "\"I adore your outfit. It's so . . . rustic.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Mike Jordana",
    "artist_ids": [
      "342d3a1e-0ddf-4823-af83-e13be8152b3f"
    ],
    "illustration_id": "7a06a88b-ecda-4825-91a5-e6ceefed3e24",
    "border_color": "black",
    "frame": "2015",
    "security_stamp": "oval",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 10434,
    "preview": {
      "source": "iYingdi",
      "source_uri": "https://www.iyingdi.com/tz/post/5213548",
      "previewed_at": "2022-08-23"
    },
    "prices": {
      "usd": "1.60",
      "usd_foil": "1.83",
      "usd_etched": null,
      "eur": "1.20",
      "eur_foil": "1.40",
      "tix": "0.39"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574532",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Haughty+Djinn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Haughty+Djinn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Haughty+Djinn"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/283407?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Haughty+Djinn&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102580?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "tolarian terror": {
    "object": "card",
    "id": "42f01cba-43d4-46ad-b7a5-d7631b0e1347",
    "oracle_id": "b9d0f2e1-62c2-44fd-ad38-471daf17bb0a",
    "multiverse_ids": [
      574552
    ],
    "mtgo_id": 102620,
    "arena_id": 82124,
    "tcgplayer_id": 282807,
    "cardmarket_id": 671568,
    "name": "Tolarian Terror",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/42f01cba-43d4-46ad-b7a5-d7631b0e1347",
    "scryfall_uri": "https://scryfall.com/card/dmu/72/tolarian-terror?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.jpg?1663048321",
      "normal": "https://cards.scryfall.io/normal/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.jpg?1663048321",
      "large": "https://cards.scryfall.io/large/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.jpg?1663048321",
      "png": "https://cards.scryfall.io/png/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.png?1663048321",
      "art_crop": "https://cards.scryfall.io/art_crop/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.jpg?1663048321",
      "border_crop": "https://cards.scryfall.io/border_crop/front/4/2/42f01cba-43d4-46ad-b7a5-d7631b0e1347.jpg?1663048321"
    },
    "mana_cost": "{6}{U}",
    "cmc": 7,
    "type_line": "Creature — Serpent",
    "oracle_text": "This spell costs {1} less to cast for each instant and sorcery card in your graveyard.\nWard {2} (Whenever this creature becomes the target of a spell or ability an opponent controls, counter it unless that player pays {2}.)",
    "power": "5",
    "toughness": "5",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Ward"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/42f01cba-43d4-46ad-b7a5-d7631b0e1347/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab9d0f2e1-62c2-44fd-ad38-471daf17bb0a&unique=prints",
    "collector_number": "72",
    "digital": false,
    "rarity": "common",
    "flavor_text": "Afterward, a number of treatises on sea serpent morphology were swiftly revised.",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Vincent Christiaens",
    "artist_ids": [
      "31b01a73-d14f-4f9e-a5dc-9cee3b036124"
    ],
    "illustration_id": "6265d0da-6027-4f05-80e0-f9e78190324e",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 16859,
    "penny_rank": 303,
    "preview": {
      "source": "AhhDean",
      "source_uri": "https://twitter.com/Ahh_Deano/status/1560549459980759040",
      "previewed_at": "2022-08-19"
    },
    "prices": {
      "usd": "0.23",
      "usd_foil": "0.72",
      "usd_etched": null,
      "eur": "0.21",
      "eur_foil": "0.63",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574552",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Tolarian+Terror&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Tolarian+Terror&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Tolarian+Terror"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/282807?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Tolarian+Terror&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102620?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "consider": {
    "object": "card",
    "id": "a211d505-4d40-4914-a9da-220770d6ddbc",
    "oracle_id": "4c9bcba6-87b5-4fb3-97ee-6fe5b739337d",
    "multiverse_ids": [
      534803
    ],
    "mtgo_id": 93020,
    "arena_id": 78374,
    "tcgplayer_id": 246015,
    "cardmarket_id": 573807,
    "name": "Consider",
    "lang": "en",
    "released_at": "2021-09-24",
    "uri": "https://api.scryfall.com/cards/a211d505-4d40-4914-a9da-220770d6ddbc",
    "scryfall_uri": "https://scryfall.com/card/mid/44/consider?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.jpg?1634348697",
      "normal": "https://cards.scryfall.io/normal/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.jpg?1634348697",
      "large": "https://cards.scryfall.io/large/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.jpg?1634348697",
      "png": "https://cards.scryfall.io/png/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.png?1634348697",
      "art_crop": "https://cards.scryfall.io/art_crop/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.jpg?1634348697",
      "border_crop": "https://cards.scryfall.io/border_crop/front/a/2/a211d505-4d40-4914-a9da-220770d6ddbc.jpg?1634348697"
    },
    "mana_cost": "{U}",
    "cmc": 1,
    "type_line": "Instant",
    "oracle_text": "Look at the top card of your library. You may put that card into your graveyard.\nDraw a card.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set": "mid",
    "set_name": "Innistrad: Midnight Hunt",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/a211d505-4d40-4914-a9da-220770d6ddbc/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4c9bcba6-87b5-4fb3-97ee-6fe5b739337d&unique=prints",
    "collector_number": "44",
    "digital": false,
    "rarity": "common",
    "flavor_text": "Ivold gasped in surprise. Either a very strange insect had crawled onto one of the lenses or he was seeing geists at last!",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Zezhou Chen",
    "artist_ids": [
      "810677e5-a502-4c03-b726-78cd808a75d4"
    ],
    "illustration_id": "ae8017d0-f56b-43a9-ab21-8ebc1f51d2c9",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 933,
    "penny_rank": 23,
    "prices": {
      "usd": "1.81",
      "usd_foil": "2.90",
      "usd_etched": null,
      "eur": "1.00",
      "eur_foil": "2.95",
      "tix": "0.08"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534803",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Consider&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Consider&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Consider"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/246015?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Consider&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/93020?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "essence scatter": {
    "object": "card",
    "id": "b7ad4441-e300-4267-bedb-4ae6a64f59cd",
    "oracle_id": "46665089-aa3d-44c3-964d-6638dfbb5782",
    "multiverse_ids": [
      574529
    ],
    "mtgo_id": 102574,
    "arena_id": 82101,
    "tcgplayer_id": 283616,
    "cardmarket_id": 672652,
    "name": "Essence Scatter",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/b7ad4441-e300-4267-bedb-4ae6a64f59cd",
    "scryfall_uri": "https://scryfall.com/card/dmu/49/essence-scatter?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.jpg?1663047829",
      "normal": "https://cards.scryfall.io/normal/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.jpg?1663047829",
      "large": "https://cards.scryfall.io/large/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.jpg?1663047829",
      "png": "https://cards.scryfall.io/png/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.png?1663047829",
      "art_crop": "https://cards.scryfall.io/art_crop/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.jpg?1663047829",
      "border_crop": "https://cards.scryfall.io/border_crop/front/b/7/b7ad4441-e300-4267-bedb-4ae6a64f59cd.jpg?1663047829"
    },
    "mana_cost": "{1}{U}",
    "cmc": 2,
    "type_line": "Instant",
    "oracle_text": "Counter target creature spell.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/b7ad4441-e300-4267-bedb-4ae6a64f59cd/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A46665089-aa3d-44c3-964d-6638dfbb5782&unique=prints",
    "collector_number": "49",
    "digital": false,
    "rarity": "common",
    "flavor_text": "\"Phyrexians pollute everything they touch, so the solution is simple: don't let them touch anything.\"\n—Teferi",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Anastasia Ovchinnikova",
    "artist_ids": [
      "3605d81f-5c97-4958-9dcc-d44a85e10305"
    ],
    "illustration_id": "c9ff8d5c-beba-4686-9ad6-88f6e12a4849",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 3436,
    "penny_rank": 2243,
    "prices": {
      "usd": "0.05",
      "usd_foil": "0.07",
      "usd_etched": null,
      "eur": "0.06",
      "eur_foil": "0.14",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574529",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Essence+Scatter&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Essence+Scatter&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Essence+Scatter"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/283616?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Essence+Scatter&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102574?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "fading hope": {
    "object": "card",
    "id": "c2fb1fff-12be-4bd5-8dba-c36e84d49651",
    "oracle_id": "64883ef2-c536-42e2-b52f-cfd1984fcdfd",
    "multiverse_ids": [
      534812
    ],
    "mtgo_id": 93038,
    "arena_id": 78383,
    "tcgplayer_id": 248204,
    "cardmarket_id": 574992,
    "name": "Fading Hope",
    "lang": "en",
    "released_at": "2021-09-24",
    "uri": "https://api.scryfall.com/cards/c2fb1fff-12be-4bd5-8dba-c36e84d49651",
    "scryfall_uri": "https://scryfall.com/card/mid/51/fading-hope?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.jpg?1634348819",
      "normal": "https://cards.scryfall.io/normal/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.jpg?1634348819",
      "large": "https://cards.scryfall.io/large/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.jpg?1634348819",
      "png": "https://cards.scryfall.io/png/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.png?1634348819",
      "art_crop": "https://cards.scryfall.io/art_crop/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.jpg?1634348819",
      "border_crop": "https://cards.scryfall.io/border_crop/front/c/2/c2fb1fff-12be-4bd5-8dba-c36e84d49651.jpg?1634348819"
    },
    "mana_cost": "{U}",
    "cmc": 1,
    "type_line": "Instant",
    "oracle_text": "Return target creature to its owner's hand. If its mana value was 3 or less, scry 1. (Look at the top card of your library. You may put that card on the bottom of your library.)",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Scry"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set": "mid",
    "set_name": "Innistrad: Midnight Hunt",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/c2fb1fff-12be-4bd5-8dba-c36e84d49651/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A64883ef2-c536-42e2-b52f-cfd1984fcdfd&unique=prints",
    "collector_number": "51",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"At least I won't become one of . . . those things.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Rovina Cai",
    "artist_ids": [
      "b64d0979-4028-4409-8285-eec2fa282dd4"
    ],
    "illustration_id": "a2df9eff-d8e0-43f1-b554-cc67c778517e",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 6268,
    "penny_rank": 883,
    "preview": {
      "source": "Draftism",
      "source_uri": "https://draftsim.com/mtg-mid-preview-card-fading-hope/",
      "previewed_at": "2021-09-09"
    },
    "prices": {
      "usd": "0.59",
      "usd_foil": "1.31",
      "usd_etched": null,
      "eur": "0.64",
      "eur_foil": "0.85",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534812",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Fading+Hope&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Fading+Hope&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Fading+Hope"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/248204?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Fading+Hope&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/93038?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "make disappear": {
    "object": "card",
    "id": "3f2d6a21-ea77-484b-9e3a-1bd49806f907",
    "oracle_id": "5f12f665-f083-48ae-b61a-541051c996ec",
    "multiverse_ids": [
      555250
    ],
    "mtgo_id": 98317,
    "arena_id": 80200,
    "tcgplayer_id": 268455,
    "cardmarket_id": 651627,
    "name": "Make Disappear",
    "lang": "en",
    "released_at": "2022-04-29",
    "uri": "https://api.scryfall.com/cards/3f2d6a21-ea77-484b-9e3a-1bd49806f907",
    "scryfall_uri": "https://scryfall.com/card/snc/49/make-disappear?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.jpg?1664410347",
      "normal": "https://cards.scryfall.io/normal/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.jpg?1664410347",
      "large": "https://cards.scryfall.io/large/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.jpg?1664410347",
      "png": "https://cards.scryfall.io/png/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.png?1664410347",
      "art_crop": "https://cards.scryfall.io/art_crop/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.jpg?1664410347",
      "border_crop": "https://cards.scryfall.io/border_crop/front/3/f/3f2d6a21-ea77-484b-9e3a-1bd49806f907.jpg?1664410347"
    },
    "mana_cost": "{1}{U}",
    "cmc": 2,
    "type_line": "Instant",
    "oracle_text": "Casualty 1 (As you cast this spell, you may sacrifice a creature with power 1 or greater. When you do, copy this spell and you may choose a new target for the copy.)\nCounter target spell unless its controller pays {2}.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Casualty"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
    "set": "snc",
    "set_name": "Streets of New Capenna",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/3f2d6a21-ea77-484b-9e3a-1bd49806f907/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A5f12f665-f083-48ae-b61a-541051c996ec&unique=prints",
    "collector_number": "49",
    "digital": false,
    "rarity": "common",
    "watermark": "maestros",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Inka Schulz",
    "artist_ids": [
      "3f93408e-c510-42a5-beef-9ddbc56d9056"
    ],
    "illustration_id": "c35ca814-c316-4175-bdad-fafeb0ffc389",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 10517,
    "penny_rank": 5063,
    "preview": {
      "source": "Wizards of the Coast",
      "source_uri": "https://www.youtube.com/watch?v=503zQMW2BCA",
      "previewed_at": "2022-04-08"
    },
    "prices": {
      "usd": "0.11",
      "usd_foil": "0.43",
      "usd_etched": null,
      "eur": "0.12",
      "eur_foil": "0.14",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555250",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Make+Disappear&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Make+Disappear&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Make+Disappear"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/268455?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Make+Disappear&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/98317?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "slip out the back": {
    "object": "card",
    "id": "8725f4c4-fad7-460e-b86c-ff81674f0980",
    "oracle_id": "82506e51-3fe1-446f-83c9-69e67583cefc",
    "multiverse_ids": [
      555263
    ],
    "mtgo_id": 98343,
    "arena_id": 80213,
    "tcgplayer_id": 268915,
    "cardmarket_id": 652170,
    "name": "Slip Out the Back",
    "lang": "en",
    "released_at": "2022-04-29",
    "uri": "https://api.scryfall.com/cards/8725f4c4-fad7-460e-b86c-ff81674f0980",
    "scryfall_uri": "https://scryfall.com/card/snc/62/slip-out-the-back?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.jpg?1664410598",
      "normal": "https://cards.scryfall.io/normal/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.jpg?1664410598",
      "large": "https://cards.scryfall.io/large/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.jpg?1664410598",
      "png": "https://cards.scryfall.io/png/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.png?1664410598",
      "art_crop": "https://cards.scryfall.io/art_crop/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.jpg?1664410598",
      "border_crop": "https://cards.scryfall.io/border_crop/front/8/7/8725f4c4-fad7-460e-b86c-ff81674f0980.jpg?1664410598"
    },
    "mana_cost": "{U}",
    "cmc": 1,
    "type_line": "Instant",
    "oracle_text": "Put a +1/+1 counter on target creature. It phases out. (Treat it and anything attached to it as though they don't exist until its controller's next turn.)",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
    "set": "snc",
    "set_name": "Streets of New Capenna",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/8725f4c4-fad7-460e-b86c-ff81674f0980/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A82506e51-3fe1-446f-83c9-69e67583cefc&unique=prints",
    "collector_number": "62",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"I was never here.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Zara Alfonso",
    "artist_ids": [
      "329a7971-c37e-47f7-9143-58dc929420a7"
    ],
    "illustration_id": "4e8d5334-284b-47f2-92a1-6902857a243e",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 2696,
    "penny_rank": 95,
    "preview": {
      "source": "Outpost Ghent",
      "source_uri": "https://www.facebook.com/OutpostGhent/posts/2150191685146473",
      "previewed_at": "2022-04-14"
    },
    "prices": {
      "usd": "1.70",
      "usd_foil": "1.80",
      "usd_etched": null,
      "eur": "0.35",
      "eur_foil": "0.39",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555263",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Slip+Out+the+Back&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Slip+Out+the+Back&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Slip+Out+the+Back"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/268915?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Slip+Out+the+Back&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/98343?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "spell pierce": {
    "object": "card",
    "id": "35b8a9db-d126-4038-abb1-74dcc5b36136",
    "oracle_id": "d64b0848-0193-4025-ba62-63ecd8fb9f50",
    "multiverse_ids": [
      571396
    ],
    "mtgo_id": 101610,
    "tcgplayer_id": 277154,
    "cardmarket_id": 665727,
    "name": "Spell Pierce",
    "lang": "en",
    "released_at": "2022-07-08",
    "uri": "https://api.scryfall.com/cards/35b8a9db-d126-4038-abb1-74dcc5b36136",
    "scryfall_uri": "https://scryfall.com/card/2x2/63/spell-pierce?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.jpg?1662525152",
      "normal": "https://cards.scryfall.io/normal/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.jpg?1662525152",
      "large": "https://cards.scryfall.io/large/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.jpg?1662525152",
      "png": "https://cards.scryfall.io/png/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.png?1662525152",
      "art_crop": "https://cards.scryfall.io/art_crop/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.jpg?1662525152",
      "border_crop": "https://cards.scryfall.io/border_crop/front/3/5/35b8a9db-d126-4038-abb1-74dcc5b36136.jpg?1662525152"
    },
    "mana_cost": "{U}",
    "cmc": 1,
    "type_line": "Instant",
    "oracle_text": "Counter target noncreature spell unless its controller pays {2}.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "5a645837-b050-449f-ac90-1e7ccbf45031",
    "set": "2x2",
    "set_name": "Double Masters 2022",
    "set_type": "masters",
    "set_uri": "https://api.scryfall.com/sets/5a645837-b050-449f-ac90-1e7ccbf45031",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3A2x2&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/2x2?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/35b8a9db-d126-4038-abb1-74dcc5b36136/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ad64b0848-0193-4025-ba62-63ecd8fb9f50&unique=prints",
    "collector_number": "63",
    "digital": false,
    "rarity": "common",
    "flavor_text": "\"There's a hole in your plan.\"\n—Noyan Dar, Tazeem lullmage",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Vance Kovacs",
    "artist_ids": [
      "b5516011-4722-4fc8-8542-102cecc52b71"
    ],
    "illustration_id": "4bdf8068-d062-4205-882c-d4fcd0878c1f",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 702,
    "penny_rank": 63,
    "preview": {
      "source": "Wizards of the Coast",
      "source_uri": "https://www.twitch.tv/videos/1512208234",
      "previewed_at": "2022-06-23"
    },
    "prices": {
      "usd": "0.09",
      "usd_foil": "0.23",
      "usd_etched": null,
      "eur": "0.19",
      "eur_foil": "0.17",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=571396",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Spell+Pierce&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Spell+Pierce&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Spell+Pierce"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/277154?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Spell+Pierce&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/101610?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "thirst for discovery": {
    "object": "card",
    "id": "1ea179e9-9c0d-46c1-9ee8-60be68e1f79c",
    "oracle_id": "1e05e6ef-14af-451d-9d54-e75b1f8871ab",
    "multiverse_ids": [
      540929
    ],
    "mtgo_id": 94486,
    "arena_id": 78877,
    "tcgplayer_id": 253462,
    "cardmarket_id": 582110,
    "name": "Thirst for Discovery",
    "lang": "en",
    "released_at": "2021-11-19",
    "uri": "https://api.scryfall.com/cards/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c",
    "scryfall_uri": "https://scryfall.com/card/vow/85/thirst-for-discovery?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.jpg?1643588791",
      "normal": "https://cards.scryfall.io/normal/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.jpg?1643588791",
      "large": "https://cards.scryfall.io/large/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.jpg?1643588791",
      "png": "https://cards.scryfall.io/png/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.png?1643588791",
      "art_crop": "https://cards.scryfall.io/art_crop/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.jpg?1643588791",
      "border_crop": "https://cards.scryfall.io/border_crop/front/1/e/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c.jpg?1643588791"
    },
    "mana_cost": "{2}{U}",
    "cmc": 3,
    "type_line": "Instant",
    "oracle_text": "Draw three cards. Then discard two cards unless you discard a basic land card.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "8144b676-569f-4716-8005-bc8f0778f3fa",
    "set": "vow",
    "set_name": "Innistrad: Crimson Vow",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/8144b676-569f-4716-8005-bc8f0778f3fa",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Avow&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/vow?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/1ea179e9-9c0d-46c1-9ee8-60be68e1f79c/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A1e05e6ef-14af-451d-9d54-e75b1f8871ab&unique=prints",
    "collector_number": "85",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"This is your only warning, alchemist. The secrets of the sea are not yours to behold. Lord Krothuss will not be so merciful next time.\"\n—Runo Stromkirk",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Dominik Mayer",
    "artist_ids": [
      "c3439c4a-1fee-4e33-9b89-18dac27ac927"
    ],
    "illustration_id": "5a732850-8e83-41c9-9bc3-94d84c74b348",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 2848,
    "penny_rank": 237,
    "preview": {
      "source": "AusGamers",
      "source_uri": "https://www.ausgamers.com/news/read/3638231/magic-the-gathering-latest-set-is-all-about-vampires",
      "previewed_at": "2021-11-02"
    },
    "prices": {
      "usd": "0.16",
      "usd_foil": "0.67",
      "usd_etched": null,
      "eur": "0.16",
      "eur_foil": "0.16",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=540929",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Thirst+for+Discovery&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Thirst+for+Discovery&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Thirst+for+Discovery"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/253462?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Thirst+for+Discovery&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/94486?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "island": {
    "object": "card",
    "id": "8bafc217-3d83-4551-b2e3-3494ec14b2f9",
    "oracle_id": "b2c6aa39-2d2a-459c-a555-fb48ba993373",
    "multiverse_ids": [
      578549
    ],
    "mtgo_id": 102406,
    "arena_id": 82317,
    "tcgplayer_id": 283078,
    "cardmarket_id": 671639,
    "name": "Island",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/8bafc217-3d83-4551-b2e3-3494ec14b2f9",
    "scryfall_uri": "https://scryfall.com/card/dmu/265/island?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.jpg?1663052401",
      "normal": "https://cards.scryfall.io/normal/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.jpg?1663052401",
      "large": "https://cards.scryfall.io/large/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.jpg?1663052401",
      "png": "https://cards.scryfall.io/png/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.png?1663052401",
      "art_crop": "https://cards.scryfall.io/art_crop/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.jpg?1663052401",
      "border_crop": "https://cards.scryfall.io/border_crop/front/8/b/8bafc217-3d83-4551-b2e3-3494ec14b2f9.jpg?1663052401"
    },
    "mana_cost": "",
    "cmc": 0,
    "type_line": "Basic Land — Island",
    "oracle_text": "({T}: Add {U}.)",
    "colors": [],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "produced_mana": [
      "U"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/8bafc217-3d83-4551-b2e3-3494ec14b2f9/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab2c6aa39-2d2a-459c-a555-fb48ba993373&unique=prints",
    "collector_number": "265",
    "digital": false,
    "rarity": "common",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Seb McKinnon",
    "artist_ids": [
      "ad4caca0-8d89-44ce-a1a6-d5ca905bd6fb"
    ],
    "illustration_id": "f04d55be-9919-47d7-bae3-83b73afba109",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "prices": {
      "usd": "0.09",
      "usd_foil": "0.18",
      "usd_etched": null,
      "eur": "0.04",
      "eur_foil": "0.09",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=578549",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Island&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Island&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Island"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/283078?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Island&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102406?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "otawara, soaring city": {
    "object": "card",
    "id": "486d7edc-d983-41f0-8b78-c99aecd72996",
    "oracle_id": "e9b6a394-691c-425a-9307-76d8edc7375e",
    "multiverse_ids": [
      548584
    ],
    "mtgo_id": 97492,
    "arena_id": 79711,
    "tcgplayer_id": 262434,
    "cardmarket_id": 607514,
    "name": "Otawara, Soaring City",
    "lang": "en",
    "released_at": "2022-02-18",
    "uri": "https://api.scryfall.com/cards/486d7edc-d983-41f0-8b78-c99aecd72996",
    "scryfall_uri": "https://scryfall.com/card/neo/271/otawara-soaring-city?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1654568960",
      "normal": "https://cards.scryfall.io/normal/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1654568960",
      "large": "https://cards.scryfall.io/large/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1654568960",
      "png": "https://cards.scryfall.io/png/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.png?1654568960",
      "art_crop": "https://cards.scryfall.io/art_crop/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1654568960",
      "border_crop": "https://cards.scryfall.io/border_crop/front/4/8/486d7edc-d983-41f0-8b78-c99aecd72996.jpg?1654568960"
    },
    "mana_cost": "",
    "cmc": 0,
    "type_line": "Legendary Land",
    "oracle_text": "{T}: Add {U}.\nChannel — {3}{U}, Discard Otawara, Soaring City: Return target artifact, creature, enchantment, or planeswalker to its owner's hand. This ability costs {1} less to activate for each legendary creature you control.",
    "colors": [],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Channel"
    ],
    "produced_mana": [
      "U"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "59a2059f-5482-433f-8761-eb2e17859b71",
    "set": "neo",
    "set_name": "Kamigawa: Neon Dynasty",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aneo&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/neo?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/486d7edc-d983-41f0-8b78-c99aecd72996/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ae9b6a394-691c-425a-9307-76d8edc7375e&unique=prints",
    "collector_number": "271",
    "digital": false,
    "rarity": "rare",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Alayna Danner",
    "artist_ids": [
      "bb677b1a-ce51-4888-83d6-5a94de461ff9"
    ],
    "illustration_id": "92355104-5745-4012-b903-7f5be8699b78",
    "border_color": "black",
    "frame": "2015",
    "frame_effects": [
      "legendary"
    ],
    "security_stamp": "oval",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 264,
    "preview": {
      "source": "Wizards of the Coast",
      "source_uri": "https://twitter.com/mtgjp/status/1488067025477849094",
      "previewed_at": "2022-01-31"
    },
    "prices": {
      "usd": "12.74",
      "usd_foil": "13.11",
      "usd_etched": null,
      "eur": "15.51",
      "eur_foil": "18.50",
      "tix": "14.22"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=548584",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Otawara%2C+Soaring+City&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Otawara%2C+Soaring+City&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Otawara%2C+Soaring+City"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/262434?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Otawara%2C+Soaring+City&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/97492?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "otherworldly gaze": {
    "object": "card",
    "id": "9cebee20-869e-45ed-9ddc-843faf4032ad",
    "oracle_id": "be668c2d-71ea-4346-8980-1fbf5e4cbed3",
    "multiverse_ids": [
      534831
    ],
    "mtgo_id": 93076,
    "arena_id": 78402,
    "tcgplayer_id": 248292,
    "cardmarket_id": 575026,
    "name": "Otherworldly Gaze",
    "lang": "en",
    "released_at": "2021-09-24",
    "uri": "https://api.scryfall.com/cards/9cebee20-869e-45ed-9ddc-843faf4032ad",
    "scryfall_uri": "https://scryfall.com/card/mid/67/otherworldly-gaze?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.jpg?1634349134",
      "normal": "https://cards.scryfall.io/normal/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.jpg?1634349134",
      "large": "https://cards.scryfall.io/large/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.jpg?1634349134",
      "png": "https://cards.scryfall.io/png/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.png?1634349134",
      "art_crop": "https://cards.scryfall.io/art_crop/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.jpg?1634349134",
      "border_crop": "https://cards.scryfall.io/border_crop/front/9/c/9cebee20-869e-45ed-9ddc-843faf4032ad.jpg?1634349134"
    },
    "mana_cost": "{U}",
    "cmc": 1,
    "type_line": "Instant",
    "oracle_text": "Look at the top three cards of your library. Put any number of them into your graveyard and the rest back on top of your library in any order.\nFlashback {1}{U} (You may cast this card from your graveyard for its flashback cost. Then exile it.)",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [
      "Flashback"
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "arena",
      "paper",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set": "mid",
    "set_name": "Innistrad: Midnight Hunt",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/44b8eb8f-fa23-401a-98b5-1fbb9871128e",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amid&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/mid?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/9cebee20-869e-45ed-9ddc-843faf4032ad/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Abe668c2d-71ea-4346-8980-1fbf5e4cbed3&unique=prints",
    "collector_number": "67",
    "digital": false,
    "rarity": "common",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Chris Cold",
    "artist_ids": [
      "2622d22b-3fd8-4831-9b2b-adc5fac01b85"
    ],
    "illustration_id": "a59f90c6-e808-4df2-971e-ed9c1b481f27",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 3046,
    "penny_rank": 1849,
    "prices": {
      "usd": "0.24",
      "usd_foil": "3.66",
      "usd_etched": null,
      "eur": "0.24",
      "eur_foil": "1.49",
      "tix": "0.03"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=534831",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Otherworldly+Gaze&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Otherworldly+Gaze&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Otherworldly+Gaze"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/248292?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Otherworldly+Gaze&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/93076?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "reckoner bankbuster": {
    "object": "card",
    "id": "279acd17-6c17-427b-a69d-fc02442ff4a3",
    "oracle_id": "b6be94dc-7162-4887-b959-3bda709724eb",
    "multiverse_ids": [
      548568
    ],
    "mtgo_id": 97460,
    "arena_id": 79695,
    "tcgplayer_id": 262560,
    "cardmarket_id": 607578,
    "name": "Reckoner Bankbuster",
    "lang": "en",
    "released_at": "2022-02-18",
    "uri": "https://api.scryfall.com/cards/279acd17-6c17-427b-a69d-fc02442ff4a3",
    "scryfall_uri": "https://scryfall.com/card/neo/255/reckoner-bankbuster?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.jpg?1654568798",
      "normal": "https://cards.scryfall.io/normal/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.jpg?1654568798",
      "large": "https://cards.scryfall.io/large/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.jpg?1654568798",
      "png": "https://cards.scryfall.io/png/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.png?1654568798",
      "art_crop": "https://cards.scryfall.io/art_crop/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.jpg?1654568798",
      "border_crop": "https://cards.scryfall.io/border_crop/front/2/7/279acd17-6c17-427b-a69d-fc02442ff4a3.jpg?1654568798"
    },
    "mana_cost": "{2}",
    "cmc": 2,
    "type_line": "Artifact — Vehicle",
    "oracle_text": "Reckoner Bankbuster enters the battlefield with three charge counters on it.\n{2}, {T}, Remove a charge counter from Reckoner Bankbuster: Draw a card. Then if there are no charge counters on Reckoner Bankbuster, create a Treasure token and a 1/1 colorless Pilot creature token with \"This creature crews Vehicles as though its power were 2 greater.\"\nCrew 3",
    "power": "4",
    "toughness": "4",
    "colors": [],
    "color_identity": [],
    "keywords": [
      "Crew"
    ],
    "all_parts": [
      {
        "object": "related_card",
        "id": "72c22b76-3411-4ef3-8a3d-3931ff993b24",
        "component": "token",
        "name": "Treasure",
        "type_line": "Token Artifact — Treasure",
        "uri": "https://api.scryfall.com/cards/72c22b76-3411-4ef3-8a3d-3931ff993b24"
      },
      {
        "object": "related_card",
        "id": "be84f259-2809-48c9-9c70-861437f08c23",
        "component": "token",
        "name": "Pilot",
        "type_line": "Token Creature — Pilot",
        "uri": "https://api.scryfall.com/cards/be84f259-2809-48c9-9c70-861437f08c23"
      },
      {
        "object": "related_card",
        "id": "29e4c9a1-35c3-4063-b1ae-a9934f778fdd",
        "component": "combo_piece",
        "name": "Reckoner Bankbuster",
        "type_line": "Artifact — Vehicle",
        "uri": "https://api.scryfall.com/cards/29e4c9a1-35c3-4063-b1ae-a9934f778fdd"
      }
    ],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "not_legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "59a2059f-5482-433f-8761-eb2e17859b71",
    "set": "neo",
    "set_name": "Kamigawa: Neon Dynasty",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aneo&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/neo?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/279acd17-6c17-427b-a69d-fc02442ff4a3/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Ab6be94dc-7162-4887-b959-3bda709724eb&unique=prints",
    "collector_number": "255",
    "digital": false,
    "rarity": "rare",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Steve Prescott",
    "artist_ids": [
      "a1139fb8-41f5-4a9e-9a74-f662e1a23b35"
    ],
    "illustration_id": "b8e3a577-b786-4c41-bd2f-66acecda84e0",
    "border_color": "black",
    "frame": "2015",
    "security_stamp": "oval",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 2855,
    "preview": {
      "source": "Dot Esports",
      "source_uri": "https://dotesports.com/mtg/news/reckoner-bankbuster-charges-up-vehicles-in-kamigawa-neon-dynasty",
      "previewed_at": "2022-02-01"
    },
    "prices": {
      "usd": "3.93",
      "usd_foil": "2.50",
      "usd_etched": null,
      "eur": "0.78",
      "eur_foil": "0.64",
      "tix": "1.89"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=548568",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Reckoner+Bankbuster&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Reckoner+Bankbuster&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Reckoner+Bankbuster"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/262560?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Reckoner+Bankbuster&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/97460?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "disdainful stroke": {
    "object": "card",
    "id": "492aa24c-61c4-48bc-b7b7-f423be2662da",
    "oracle_id": "11e02134-7b1a-46a4-a89e-7539dd1efada",
    "multiverse_ids": [
      555240
    ],
    "mtgo_id": 98297,
    "arena_id": 80190,
    "tcgplayer_id": 268769,
    "cardmarket_id": 651834,
    "name": "Disdainful Stroke",
    "lang": "en",
    "released_at": "2022-04-29",
    "uri": "https://api.scryfall.com/cards/492aa24c-61c4-48bc-b7b7-f423be2662da",
    "scryfall_uri": "https://scryfall.com/card/snc/39/disdainful-stroke?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.jpg?1664410153",
      "normal": "https://cards.scryfall.io/normal/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.jpg?1664410153",
      "large": "https://cards.scryfall.io/large/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.jpg?1664410153",
      "png": "https://cards.scryfall.io/png/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.png?1664410153",
      "art_crop": "https://cards.scryfall.io/art_crop/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.jpg?1664410153",
      "border_crop": "https://cards.scryfall.io/border_crop/front/4/9/492aa24c-61c4-48bc-b7b7-f423be2662da.jpg?1664410153"
    },
    "mana_cost": "{1}{U}",
    "cmc": 2,
    "type_line": "Instant",
    "oracle_text": "Counter target spell with mana value 4 or greater.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
    "set": "snc",
    "set_name": "Streets of New Capenna",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/492aa24c-61c4-48bc-b7b7-f423be2662da/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A11e02134-7b1a-46a4-a89e-7539dd1efada&unique=prints",
    "collector_number": "39",
    "digital": false,
    "rarity": "common",
    "flavor_text": "\"I've known for a year that you would cast this exact spell, at this exact spot, at this exact time.\"\n—Raffine",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Irina Nordsol",
    "artist_ids": [
      "1e4cb52d-476e-4c68-ac87-2e620aede6d4"
    ],
    "illustration_id": "3c733048-9a4d-446b-9248-44b3e47592f5",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 1537,
    "penny_rank": 3384,
    "preview": {
      "source": "Pokde.net",
      "source_uri": "https://pokde.net/gaming/esports/mtg-streets-of-new-capenna-disdainful-stroke-card-preview",
      "previewed_at": "2022-04-13"
    },
    "prices": {
      "usd": "0.09",
      "usd_foil": "0.10",
      "usd_etched": null,
      "eur": "0.05",
      "eur_foil": "0.11",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555240",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Disdainful+Stroke&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Disdainful+Stroke&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Disdainful+Stroke"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/268769?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Disdainful+Stroke&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/98297?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "negate": {
    "object": "card",
    "id": "4016c6f7-7cb4-46c2-af73-3bd6d682ea5e",
    "oracle_id": "3407fe41-fdd3-4119-8f70-4bc4590a379f",
    "multiverse_ids": [
      574538
    ],
    "mtgo_id": 102592,
    "arena_id": 82110,
    "tcgplayer_id": 283488,
    "cardmarket_id": 672344,
    "name": "Negate",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e",
    "scryfall_uri": "https://scryfall.com/card/dmu/58/negate?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.jpg?1663048006",
      "normal": "https://cards.scryfall.io/normal/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.jpg?1663048006",
      "large": "https://cards.scryfall.io/large/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.jpg?1663048006",
      "png": "https://cards.scryfall.io/png/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.png?1663048006",
      "art_crop": "https://cards.scryfall.io/art_crop/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.jpg?1663048006",
      "border_crop": "https://cards.scryfall.io/border_crop/front/4/0/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e.jpg?1663048006"
    },
    "mana_cost": "{1}{U}",
    "cmc": 2,
    "type_line": "Instant",
    "oracle_text": "Counter target noncreature spell.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": true,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/4016c6f7-7cb4-46c2-af73-3bd6d682ea5e/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A3407fe41-fdd3-4119-8f70-4bc4590a379f&unique=prints",
    "collector_number": "58",
    "digital": false,
    "rarity": "common",
    "flavor_text": "\"It's frustrating, isn't it, to be so weak and ineffectual? Don't worry, you'll be *compleat* soon enough.\"\n—Rona",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Isis",
    "artist_ids": [
      "4d12227a-8657-48b7-884a-ff70cc6428a5"
    ],
    "illustration_id": "6f303eef-623f-4a31-8383-ad0a3142557e",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 48,
    "penny_rank": 221,
    "preview": {
      "source": "Duniaku",
      "source_uri": "https://duniaku.idntimes.com/geek/mainan/aditya-daniel/penasaran-dengan-kartu-mtg-dominaria-united-ini-preview-nya",
      "previewed_at": "2022-08-24"
    },
    "prices": {
      "usd": "0.09",
      "usd_foil": "0.11",
      "usd_etched": null,
      "eur": "0.06",
      "eur_foil": "0.06",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574538",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Negate&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Negate&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Negate"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/283488?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Negate&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102592?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "out of the way": {
    "object": "card",
    "id": "2201ade5-8add-49f2-8045-ae351aaf061c",
    "oracle_id": "9300874a-32a9-4869-b3e1-1b996403df4e",
    "multiverse_ids": [
      555253
    ],
    "mtgo_id": 98323,
    "arena_id": 80203,
    "tcgplayer_id": 268549,
    "cardmarket_id": 652090,
    "name": "Out of the Way",
    "lang": "en",
    "released_at": "2022-04-29",
    "uri": "https://api.scryfall.com/cards/2201ade5-8add-49f2-8045-ae351aaf061c",
    "scryfall_uri": "https://scryfall.com/card/snc/52/out-of-the-way?utm_source=api",
    "layout": "normal",
    "highres_image": true,
    "image_status": "highres_scan",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401",
      "normal": "https://cards.scryfall.io/normal/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401",
      "large": "https://cards.scryfall.io/large/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401",
      "png": "https://cards.scryfall.io/png/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.png?1664410401",
      "art_crop": "https://cards.scryfall.io/art_crop/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401",
      "border_crop": "https://cards.scryfall.io/border_crop/front/2/2/2201ade5-8add-49f2-8045-ae351aaf061c.jpg?1664410401"
    },
    "mana_cost": "{3}{U}",
    "cmc": 4,
    "type_line": "Instant",
    "oracle_text": "This spell costs {2} less to cast if it targets a green permanent.\nReturn target nonland permanent an opponent controls to its owner's hand.\nDraw a card.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "mtgo",
      "arena"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "df837242-8c15-42e4-b049-c933a02dc501",
    "set": "snc",
    "set_name": "Streets of New Capenna",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/df837242-8c15-42e4-b049-c933a02dc501",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Asnc&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/snc?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/2201ade5-8add-49f2-8045-ae351aaf061c/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A9300874a-32a9-4869-b3e1-1b996403df4e&unique=prints",
    "collector_number": "52",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"You bore me.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Tony Foti",
    "artist_ids": [
      "1ab97a5f-9abb-42f4-bbc4-954899619d6f"
    ],
    "illustration_id": "1e939f1b-d1fe-4e2f-9f1e-a48228337c35",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": false,
    "edhrec_rank": 16466,
    "preview": {
      "source": "The Dive Down",
      "source_uri": "https://twitter.com/TheDiveDown/status/1513524003541073924",
      "previewed_at": "2022-04-11"
    },
    "prices": {
      "usd": "0.05",
      "usd_foil": "0.06",
      "usd_etched": null,
      "eur": "0.05",
      "eur_foil": "0.07",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=555253",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Out+of+the+Way&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Out+of+the+Way&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Out+of+the+Way"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/268549?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Out+of+the+Way&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/98323?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  },
  "ertai's scorn": {
    "object": "card",
    "id": "6129b0d3-b50a-4a4b-9111-39f8fc6718dd",
    "oracle_id": "76e6c0e7-593a-4b4a-9eb6-a912f9c3f26f",
    "multiverse_ids": [
      574528
    ],
    "mtgo_id": 102572,
    "arena_id": 82100,
    "tcgplayer_id": 283606,
    "cardmarket_id": 672651,
    "name": "Ertai's Scorn",
    "lang": "en",
    "released_at": "2022-09-09",
    "uri": "https://api.scryfall.com/cards/6129b0d3-b50a-4a4b-9111-39f8fc6718dd",
    "scryfall_uri": "https://scryfall.com/card/dmu/48/ertais-scorn?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.jpg?1663047809",
      "normal": "https://cards.scryfall.io/normal/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.jpg?1663047809",
      "large": "https://cards.scryfall.io/large/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.jpg?1663047809",
      "png": "https://cards.scryfall.io/png/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.png?1663047809",
      "art_crop": "https://cards.scryfall.io/art_crop/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.jpg?1663047809",
      "border_crop": "https://cards.scryfall.io/border_crop/front/6/1/6129b0d3-b50a-4a4b-9111-39f8fc6718dd.jpg?1663047809"
    },
    "mana_cost": "{1}{U}{U}",
    "cmc": 3,
    "type_line": "Instant",
    "oracle_text": "This spell costs {U} less to cast if an opponent cast two or more spells this turn.\nCounter target spell.",
    "colors": [
      "U"
    ],
    "color_identity": [
      "U"
    ],
    "keywords": [],
    "legalities": {
      "standard": "legal",
      "future": "legal",
      "historic": "legal",
      "gladiator": "legal",
      "pioneer": "legal",
      "explorer": "legal",
      "modern": "legal",
      "legacy": "legal",
      "pauper": "not_legal",
      "vintage": "legal",
      "penny": "legal",
      "commander": "legal",
      "brawl": "legal",
      "historicbrawl": "legal",
      "alchemy": "legal",
      "paupercommander": "not_legal",
      "duel": "legal",
      "oldschool": "not_legal",
      "premodern": "not_legal"
    },
    "games": [
      "paper",
      "arena",
      "mtgo"
    ],
    "reserved": false,
    "foil": true,
    "nonfoil": true,
    "finishes": [
      "nonfoil",
      "foil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set": "dmu",
    "set_name": "Dominaria United",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/4e47a6cd-cdeb-4b0f-8f24-cfe1a0127cb3",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Admu&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/dmu?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/6129b0d3-b50a-4a4b-9111-39f8fc6718dd/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A76e6c0e7-593a-4b4a-9eb6-a912f9c3f26f&unique=prints",
    "collector_number": "48",
    "digital": false,
    "rarity": "uncommon",
    "flavor_text": "\"You're not so special, Karn. Anything that has been assembled can be disassembled.\"",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Alex Negrea",
    "artist_ids": [
      "fbfc9dde-935f-4b2f-a0e3-bcec89809f6d"
    ],
    "illustration_id": "b3afc541-1063-44ae-a975-d2f4550ab7db",
    "border_color": "black",
    "frame": "2015",
    "full_art": false,
    "textless": false,
    "booster": true,
    "story_spotlight": true,
    "edhrec_rank": 13000,
    "penny_rank": 8945,
    "prices": {
      "usd": "0.13",
      "usd_foil": "0.30",
      "usd_etched": null,
      "eur": "0.18",
      "eur_foil": "0.15",
      "tix": "0.01"
    },
    "related_uris": {
      "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=574528",
      "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Ertai%27s+Scorn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Ertai%27s+Scorn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "edhrec": "https://edhrec.com/route/?cc=Ertai%27s+Scorn"
    },
    "purchase_uris": {
      "tcgplayer": "https://www.tcgplayer.com/product/283606?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
      "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Ertai%27s+Scorn&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
      "cardhoarder": "https://www.cardhoarder.com/cards/102572?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
  }
}