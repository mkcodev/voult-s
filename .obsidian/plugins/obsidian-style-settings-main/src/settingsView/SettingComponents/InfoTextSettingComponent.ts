import { AbstractSettingComponent } from './AbstractSettingComponent';
import { MarkdownRenderer, Setting } from 'obsidian';
import { InfoText } from '../../SettingHandlers';
import { getDescription, getTitle } from '../../Utils';

export class InfoTextSettingComponent extends AbstractSettingComponent {
	settingEl: Setting;

	setting: InfoText;

	render(containerEl: HTMLElement): void {
		const title = getTitle(this.setting);
		const description = getDescription(this.setting);

		this.settingEl = new Setting(containerEl);
		this.settingEl.setClass('style-settings-info-text');
		if (title) {
			this.settingEl.setName(title);
		}
		if (description) {
			if (this.setting.markdown) {
				MarkdownRenderer.renderMarkdown(
					description,
					this.settingEl.descEl,
					'',
					undefined
				);
				this.settingEl.descEl.addClass('style-settings-markdown');
			} else {
				this.settingEl.setDesc(description);
			}
		}

		this.settingEl.settingEl.dataset.id = this.setting.id;
	}

	destroy(): void {
		this.settingEl?.settingEl.remove();
	}
}
