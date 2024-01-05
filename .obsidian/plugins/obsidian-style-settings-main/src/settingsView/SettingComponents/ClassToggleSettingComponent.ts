import { AbstractSettingComponent } from './AbstractSettingComponent';
import { Setting, ToggleComponent } from 'obsidian';
import { ClassToggle, resetTooltip } from '../../SettingHandlers';
import { getDescription, getTitle } from '../../Utils';

export class ClassToggleSettingComponent extends AbstractSettingComponent {
	settingEl: Setting;
	toggleComponent: ToggleComponent;

	setting: ClassToggle;

	render(containerEl: HTMLElement): void {
		const title = getTitle(this.setting);
		const description = getDescription(this.setting);

		this.settingEl = new Setting(containerEl);
		this.settingEl.setName(title);
		this.settingEl.setDesc(description ?? '');

		this.settingEl.addToggle((toggle) => {
			const value = this.settingsManager.getSetting(
				this.sectionId,
				this.setting.id
			);

			toggle.setValue(value !== undefined ? !!value : !!this.setting.default);
			toggle.onChange((value) => {
				this.settingsManager.setSetting(this.sectionId, this.setting.id, value);

				if (value) {
					document.body.classList.add(this.setting.id);
				} else {
					document.body.classList.remove(this.setting.id);
				}
			});

			this.toggleComponent = toggle;
		});

		this.settingEl.addExtraButton((b) => {
			b.setIcon('reset');
			b.onClick(() => {
				const value = !!this.setting.default;

				this.toggleComponent.setValue(value);

				if (value) {
					document.body.classList.add(this.setting.id);
				} else {
					document.body.classList.remove(this.setting.id);
				}

				this.settingsManager.clearSetting(this.sectionId, this.setting.id);
			});
			b.setTooltip(resetTooltip);
		});

		this.settingEl.settingEl.dataset.id = this.setting.id;
	}

	destroy(): void {
		this.settingEl?.settingEl.remove();
	}
}
