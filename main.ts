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
	}
}

export default class MyPlugin extends Plugin {
	settings: ObsidianPluginMtgSettings;

	cardCounts: Record<string, number>

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('dice', 'Obsidian MtG', (evt: MouseEvent) => {
			// // Called when the user clicks the icon.
			// new Notice('This is a notice!');

			// TODO: create a new deck
		});

		// Perform additional things with the ribbon
		ribbonIconEl.addClass('my-plugin-ribbon-class');


		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new ObsidianPluginMtgSettingsTab(this.app, this));

		// // If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// // Using this function will automatically remove the event listener when this plugin is disabled.
		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	console.log('click', evt);
		// });

		// this.registerDomEvent(document, 'DOMContentLoaded', (evt: any) => {
		// 	console.log('DOM Content', evt);
		// });

		const { vault } = this.app;

		// Initialize counts
		this.cardCounts = await syncCounts(vault, this.settings);

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(async () => {

			this.cardCounts = await syncCounts(vault, this.settings);

		}, DEFAULT_COLLECTION_SYNC_INTERVAL));


		this.registerMarkdownCodeBlockProcessor('mtg-deck', async (source: string, el: HTMLElement, ctx) => {
			// let userOptions = {};
			let error = null;

			// TODO: implement user options
			// const optionsMatch = source.match(optionsRegex);
			// if (optionsMatch !== null) {
			// 	source = optionsMatch.groups["source"];
			// 	try {
			// 		userOptions = JSON.parse(optionsMatch.groups["options"]);
			// 	} catch (e) {
			// 		console.error(e);
			// 		error = `<strong>Failed to parse user-options</strong>\n\t${e}`;
			// 	}
			// }

			this.cardCounts = await syncCounts(vault, this.settings);

			try {
				renderDecklist(el, source, this.cardCounts);
			} catch (err) {
				error = err;
				console.log(err);
			}

			if (error !== null) {
				const errorNode = document.createElement('div');
				errorNode.innerHTML = error;
				errorNode.addClass("obsidian-plugin-mtg-error");
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

// class SampleModal extends Modal {
// 	constructor(app: App) {
// 		super(app);
// 	}

// 	onOpen() {
// 		const {contentEl} = this;
// 		contentEl.setText('Woah!');
// 	}

// 	onClose() {
// 		const {contentEl} = this;
// 		contentEl.empty();
// 	}
// }

class ObsidianPluginMtgSettingsTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
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
	}
}
