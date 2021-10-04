import { Component, ComponentInterface, Host, Listen, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';
import { SelectPopoverOption } from '../../interface';
import { safeCall } from '../../utils/overlays';
import { getClassMap } from '../../utils/theme';

/**
 * @internal
 */
@Component({
  tag: 'syg-select-popover',
  styleUrls: {
    ios: 'select-popover.ios.scss',
    md: 'select-popover.md.scss'
  },
  scoped: true
})
export class SelectPopover implements ComponentInterface {
  /**
   * The header text of the popover
   */
  @Prop() header?: string;

  /**
   * The subheader text of the popover
   */
  @Prop() subHeader?: string;

  /**
   * The text content of the popover body
   */
  @Prop() message?: string;

  /**
   * If true, the select accepts multiple values
   */
  @Prop() multiple?: boolean;

  /**
   * An array of options for the popover
   */
  @Prop() options: SelectPopoverOption[] = [];

  @Listen('ionChange')
  onSelect(ev: any) {
    this.setChecked(ev);
    this.callOptionHandler(ev);
  }

  /**
   * When an option is selected we need to get the value(s)
   * of the selected option(s) and return it in the option
   * handler
   */
  private callOptionHandler(ev: any) {
    const { options } = this;
    const option = options.find(o => this.getValue(o.value) === ev.target.value);

    const values = this.getValues(ev);

    if (option && option.handler) {
      safeCall(option.handler, values);
    }
  }

  /**
   * This is required when selecting a radio that is already
   * selected because it will not trigger the ionChange event
   * but we still want to close the popover
   */
  private rbClick(ev: any) {
    this.callOptionHandler(ev);
  }

  private setChecked(ev: any): void {
    const { multiple, options } = this;
    const option = options.find(o => this.getValue(o.value) === ev.target.value);

    // this is a popover with checkboxes (multiple value select)
    // we need to set the checked value for this option
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }

  private getValues(ev: any): any | any[] | null {
    const { multiple, options } = this;

    if (multiple) {
      // this is a popover with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter(o => o.checked).map(o => o.value);
    }

    // this is a popover with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = options.find(o => this.getValue(o.value) === ev.target.value);
    return option ? option.value : undefined;
  }

  private getValue(value: any): any {
    return typeof value === 'number' ? value.toString() : value;
  }

  renderOptions(options: SelectPopoverOption[]) {
    const { multiple } = this;

    switch (multiple) {
      case true: return this.renderCheckboxOptions(options);
      default: return this.renderRadioOptions(options);
    }
  }

  renderCheckboxOptions(options: SelectPopoverOption[]) {
    return (
      options.map(option =>
        <syg-item class={getClassMap(option.cssClass)}>
          <syg-checkbox
            slot="start"
            value={option.value}
            disabled={option.disabled}
            checked={option.checked}
          >
          </syg-checkbox>
          <syg-label>
            {option.text}
          </syg-label>
        </syg-item>
      )
    )
  }

  renderRadioOptions(options: SelectPopoverOption[]) {
    const checked = options.filter(o => o.checked).map(o => o.value)[0];

    return (
      <syg-radio-group value={checked}>
        {options.map(option =>
          <syg-item class={getClassMap(option.cssClass)}>
            <syg-label>
              {option.text}
            </syg-label>
            <syg-radio
              value={option.value}
              disabled={option.disabled}
              onClick={ev => this.rbClick(ev)}
            >
            </syg-radio>
          </syg-item>
        )}
      </syg-radio-group>
    )
  }

  render() {
    const { header, message, options, subHeader } = this;
    const hasSubHeaderOrMessage = subHeader !== undefined || message !== undefined;

    return (
      <Host class={getSygMode(this)}>
        <syg-list>
          {header !== undefined && <syg-list-header>{header}</syg-list-header>}
          { hasSubHeaderOrMessage &&
            <syg-item>
              <syg-label class="syg-text-wrap">
                {subHeader !== undefined && <h3>{subHeader}</h3>}
                {message !== undefined && <p>{message}</p>}
              </syg-label>
            </syg-item>
          }
          {this.renderOptions(options)}
        </syg-list>
      </Host>
    );
  }
}
