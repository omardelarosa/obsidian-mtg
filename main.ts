import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { DEFAULT_COLLECTION_COUNT_COLUMN, DEFAULT_COLLECTION_FILE_EXTENSION, DEFAULT_COLLECTION_NAME_COLUMN, DEFAULT_COLLECTION_SYNC_INTERVAL, syncCounts } from 'src/collection';
import { renderDecklist } from 'src/renderer';
import { ObsidianPluginMtgSettings } from 'src/settings';

const DEFAULT_SETTINGS: ObsidianPluginMtgSettings = {
	collection: {
		fileExtension: DEFAULT_COLLECTION_FILE_EXTENSION,
		nameColumn: DEFAULT_COLLECTION_NAME_COLUMN,
		countColumn: DEFAULT_COLLECTION_COUNT_COLUMN,
		syncIntervalMs: DEFAULT_COLLECTION_SYNC_INTERVAL
	},
	decklist: {
		preferredCurrency: 'usd',
		showCardNamesAsHyperlinks: true,
		showCardPreviews: true,
		showBuylist: true
	}
}

export default class ObsidianPluginMtg extends Plugin {
	settings: ObsidianPluginMtgSettings;

	cardCounts: Record<string, number>

	async onload() {
		await this.loadSettings();

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ObsidianPluginMtgSettingsTab(this.app, this));

		const { vault } = this.app;

		// Initialize counts
		this.cardCounts = await syncCounts(vault, this.settings);

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(async () => {

			this.cardCounts = await syncCounts(vault, this.settings);

		}, DEFAULT_COLLECTION_SYNC_INTERVAL));


		this.registerMarkdownCodeBlockProcessor('mtg-deck', async (source: string, el: HTMLElement, ctx) => {
			let error = null;

			this.cardCounts = await syncCounts(vault, this.settings);

			try {
				const containerEl: Element = await renderDecklist(source, this.cardCounts, this.settings);
				el.appendChild(containerEl);
			} catch (err) {
				error = err;
				console.log(err);
			}

			if (error !== null) {
				const errorNode = document.createElement('div');
				errorNode.innerHTML = error;
				errorNode.classList.add("obsidian-plugin-mtg-error");
				el.appendChild(errorNode);
			}
		});

	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class ObsidianPluginMtgSettingsTab extends PluginSettingTab {
	plugin: ObsidianPluginMtg;

	constructor(app: App, plugin: ObsidianPluginMtg) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for Obsidian MtG Plugin.'});

		// Collection CSV setting
		new Setting(containerEl)
			.setName('Collection CSV')
			.setDesc('Path to your collection as a CSV file')
			.addText(text => text
				.setPlaceholder('.mtg.collection.csv')
				.setValue(this.plugin.settings.collection.fileExtension)
				.onChange(async (value) => {
					this.plugin.settings.collection.fileExtension = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Card name column name')
			.setDesc('The name of the CSV column used for card names')
			.addText(text => text
				.setPlaceholder('Name')
				.setValue(this.plugin.settings.collection.nameColumn)
				.onChange(async (value) => {
					this.plugin.settings.collection.nameColumn = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Card count column name')
			.setDesc('The name of the CSV column used for card counts/quantity')
			.addText(text => text
				.setPlaceholder('Count')
				.setValue(this.plugin.settings.collection.nameColumn)
				.onChange(async (value) => {
					this.plugin.settings.collection.countColumn = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Preferred Currency')
			.setDesc('The currency you prefer when viewing card prices in your decklist')
			.addDropdown((dropdown) => dropdown
				.addOption('usd', 'USD')
				.addOption('eur', 'EUR')
				.addOption('tix', 'Tix')
				.onChange(async (value: 'usd' | 'eur' | 'tix') => {
					this.plugin.settings.decklist.preferredCurrency = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName('Show Card Name Hyperlinks')
			.setDesc('Enables card names that link to Scryfall or purchasing sites when possible')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.decklist.showCardNamesAsHyperlinks)
				.onChange(async (value: boolean) => {
					this.plugin.settings.decklist.showCardNamesAsHyperlinks = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName('Show Card Images')
			.setDesc('Enables card previews when hovering with the mouse on desktop')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.decklist.showCardPreviews)
				.onChange(async (value: boolean) => {
					this.plugin.settings.decklist.showCardPreviews = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName('Show Buylist')
			.setDesc('Enables a buylist below your decklist with buylinks for each card')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.decklist.showBuylist)
				.onChange(async (value: boolean) => {
					this.plugin.settings.decklist.showBuylist = value;
					await this.plugin.saveSettings();
				})
			);
}
}
