import { AbstractSettingComponent } from './AbstractSettingComponent';
import { ButtonComponent, Setting } from 'obsidian';
import { resetTooltip, VariableThemedColor } from '../../SettingHandlers';
import {
	getDescription,
	getPickrSettings,
	getTitle,
	isValidDefaultColor,
	onPickrCancel,
} from '../../Utils';
import { t } from '../../lang/helpers';
import Pickr from '@simonwep/pickr';

export class VariableThemedColorSettingComponent extends AbstractSettingComponent {
	settingEl: Setting;

	setting: VariableThemedColor;

	pickrLight: Pickr;
	pickrDark: Pickr;

	render(containerEl: HTMLElement): void {
		const title = getTitle(this.setting);
		const description = getDescription(this.setting);

		if (
			typeof this.setting['default-light'] !== 'string' ||
			!isValidDefaultColor(this.setting['default-light'])
		) {
			return console.error(
				`${t('Error:')} ${title} ${t(
					'missing default light value, or value is not in a valid color format'
				)}`
			);
		}

		if (
			typeof this.setting['default-dark'] !== 'string' ||
			!isValidDefaultColor(this.setting['default-dark'])
		) {
			return console.error(
				`${t('Error:')} ${title} ${t(
					'missing default dark value, or value is not in a valid color format'
				)}`
			);
		}

		const idLight = `${this.setting.id}@@light`;
		const idDark = `${this.setting.id}@@dark`;
		const valueLight = this.settingsManager.getSetting(this.sectionId, idLight);
		const valueDark = this.settingsManager.getSetting(this.sectionId, idDark);
		const swatchesLight: string[] = [];
		const swatchesDark: string[] = [];

		if (this.setting['default-light']) {
			swatchesLight.push(this.setting['default-light']);
		}

		if (valueLight !== undefined) {
			swatchesLight.push(valueLight as string);
		}

		if (this.setting['default-dark']) {
			swatchesDark.push(this.setting['default-dark']);
		}

		if (valueDark !== undefined) {
			swatchesDark.push(valueDark as string);
		}

		this.settingEl = new Setting(containerEl);
		this.settingEl.setName(title);

		// Construct description
		this.settingEl.descEl.createSpan({}, (span) => {
			if (description) {
				span.appendChild(document.createTextNode(description));
			}
		});

		this.settingEl.descEl.createDiv({}, (div) => {
			div.createEl('small', {}, (sm) => {
				sm.appendChild(createEl('strong', { text: 'Default (light): ' }));
				sm.appendChild(document.createTextNode(this.setting['default-light']));
			});
			div.createEl('br');
			div.createEl('small', {}, (sm) => {
				sm.appendChild(createEl('strong', { text: 'Default (dark): ' }));
				sm.appendChild(document.createTextNode(this.setting['default-dark']));
			});
		});

		const wrapper = this.settingEl.controlEl.createDiv({
			cls: 'themed-color-wrapper',
		});

		// Create light color picker
		this.createColorPickerLight(
			wrapper,
			containerEl,
			swatchesLight,
			valueLight,
			idLight
		);

		// Create dark color picker
		this.createColorPickerDark(
			wrapper,
			containerEl,
			swatchesDark,
			valueDark,
			idDark
		);

		this.settingEl.settingEl.dataset.id = this.setting.id;
	}

	destroy(): void {
		this.pickrLight?.destroyAndRemove();
		this.pickrDark?.destroyAndRemove();
		this.pickrLight = undefined;
		this.pickrDark = undefined;
		this.settingEl?.settingEl.remove();
	}

	private createColorPickerLight(
		wrapper: HTMLDivElement,
		containerEl: HTMLElement,
		swatchesLight: string[],
		valueLight: number | string | boolean,
		idLight: string
	) {
		const themeLightWrapper = wrapper.createDiv({ cls: 'theme-light' });

		// fix, so that the color is correctly shown before the color picker has been opened
		const defaultColor =
			valueLight !== undefined
				? (valueLight as string)
				: this.setting['default-light'];
		themeLightWrapper.style.setProperty('--pcr-color', defaultColor);

		this.pickrLight = Pickr.create(
			getPickrSettings({
				isView: this.isView,
				el: themeLightWrapper.createDiv({ cls: 'picker' }),
				containerEl,
				swatches: swatchesLight,
				opacity: this.setting.opacity,
				defaultColor: defaultColor,
			})
		);

		this.pickrLight.on('show', () => {
			const { result } = (this.pickrLight.getRoot() as any).interaction;

			requestAnimationFrame(() => requestAnimationFrame(() => result.select()));
		});

		this.pickrLight.on('save', (color: Pickr.HSVaColor, instance: Pickr) =>
			this.onSave(idLight, color, instance)
		);

		this.pickrLight.on('cancel', onPickrCancel);

		const themeLightReset = new ButtonComponent(
			themeLightWrapper.createDiv({ cls: 'pickr-reset' })
		);
		themeLightReset.setIcon('reset');
		themeLightReset.onClick(() => {
			this.pickrLight.setColor(this.setting['default-light']);
			this.settingsManager.clearSetting(this.sectionId, idLight);
		});
		themeLightReset.setTooltip(resetTooltip);
	}

	private createColorPickerDark(
		wrapper: HTMLDivElement,
		containerEl: HTMLElement,
		swatchesDark: string[],
		valueDark: number | string | boolean,
		idDark: string
	) {
		const themeDarkWrapper = wrapper.createDiv({ cls: 'theme-dark' });

		// fix, so that the color is correctly shown before the color picker has been opened
		const defaultColor =
			valueDark !== undefined
				? (valueDark as string)
				: this.setting['default-dark'];
		themeDarkWrapper.style.setProperty('--pcr-color', defaultColor);

		this.pickrDark = Pickr.create(
			getPickrSettings({
				isView: this.isView,
				el: themeDarkWrapper.createDiv({ cls: 'picker' }),
				containerEl,
				swatches: swatchesDark,
				opacity: this.setting.opacity,
				defaultColor: defaultColor,
			})
		);

		this.pickrDark.on('show', () => {
			const { result } = (this.pickrDark.getRoot() as any).interaction;

			requestAnimationFrame(() => requestAnimationFrame(() => result.select()));
		});

		this.pickrDark.on('save', (color: Pickr.HSVaColor, instance: Pickr) =>
			this.onSave(idDark, color, instance)
		);

		this.pickrDark.on('cancel', onPickrCancel);

		const themeDarkReset = new ButtonComponent(
			themeDarkWrapper.createDiv({ cls: 'pickr-reset' })
		);
		themeDarkReset.setIcon('reset');
		themeDarkReset.onClick(() => {
			this.pickrDark.setColor(this.setting['default-dark']);
			this.settingsManager.clearSetting(this.sectionId, idDark);
		});
		themeDarkReset.setTooltip(resetTooltip);
	}

	private onSave(id: string, color: Pickr.HSVaColor, instance: Pickr) {
		if (!color) return;

		this.settingsManager.setSetting(
			this.sectionId,
			id,
			color.toHEXA().toString()
		);

		instance.hide();
		instance.addSwatch(color.toHEXA().toString());
	}
}
