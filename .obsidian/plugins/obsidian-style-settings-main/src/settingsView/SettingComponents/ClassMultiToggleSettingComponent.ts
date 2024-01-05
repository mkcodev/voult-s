import { AbstractSettingComponent } from './AbstractSettingComponent';
import { DropdownComponent, Setting } from 'obsidian';
import {
	ClassMultiToggle,
	resetTooltip,
	SelectOption,
} from '../../SettingHandlers';
import { t } from '../../lang/helpers';
import { createDescription, getDescription, getTitle } from '../../Utils';

export class ClassMultiToggleSettingComponent extends AbstractSettingComponent {
	settingEl: Setting;
	dropdownComponent: DropdownComponent;

	setting: ClassMultiToggle;

	render(containerEl: HTMLElement): void {
		const title = getTitle(this.setting);
		const description = getDescription(this.setting);

		if (typeof this.setting.default !== 'string') {
			return console.error(
				`${t('Error:')} ${title} ${t('missing default value')}`
			);
		}

		let prevValue = this.getPreviousValue();

		const defaultLabel = this.getDefaultOptionLabel();

		this.settingEl = new Setting(containerEl);
		this.settingEl.setName(title);
		this.settingEl.setDesc(
			createDescription(description, this.setting.default, defaultLabel)
		);

		this.settingEl.addDropdown((dropdown) => {
			if (this.setting.allowEmpty) {
				dropdown.addOption('none', '');
			}

			for (const o of this.setting.options) {
				if (typeof o === 'string') {
					dropdown.addOption(o, o);
				} else {
					dropdown.addOption(o.value, o.label);
				}
			}

			dropdown.setValue(prevValue);

			dropdown.onChange((value) => {
				this.settingsManager.setSetting(this.sectionId, this.setting.id, value);

				if (value !== 'none') {
					document.body.classList.add(value);
				}

				if (prevValue) {
					document.body.classList.remove(prevValue);
				}

				prevValue = value;
			});

			this.dropdownComponent = dropdown;
		});

		this.settingEl.addExtraButton((b) => {
			b.setIcon('reset');
			b.onClick(() => {
				const value = this.setting.default || 'none';

				this.dropdownComponent.setValue(this.setting.default || 'none');

				if (value !== 'none') {
					document.body.classList.add(value);
				}

				if (prevValue) {
					document.body.classList.remove(prevValue);
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

	private getDefaultOption(): string | SelectOption | undefined {
		if (this.setting.default) {
			return this.setting.options.find((o) => {
				if (typeof o === 'string') {
					return o === this.setting.default;
				}

				return o.value === this.setting.default;
			});
		}

		return undefined;
	}

	private getDefaultOptionLabel() {
		const defaultOption = this.getDefaultOption();

		if (defaultOption) {
			if (typeof defaultOption === 'string') {
				return defaultOption;
			}
			return defaultOption.label;
		}

		return undefined;
	}

	private getPreviousValue() {
		const prevValue = this.settingsManager.getSetting(
			this.sectionId,
			this.setting.id
		) as string | undefined;

		if (prevValue === undefined) {
			if (this.setting.default) {
				return this.setting.default;
			}
			return 'none';
		}
		return prevValue;
	}
}
