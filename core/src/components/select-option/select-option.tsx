import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-select-option',
  shadow: true,
  styleUrl: 'select-option.scss'
})
export class SelectOption implements ComponentInterface {

  private inputId = `syg-selopt-${selectOptionIds++}`;

  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `syg-action-sheet` does not allow for disabled buttons.
   */
  @Prop() disabled = false;

  /**
   * The text value of the option.
   */
  @Prop() value?: any | null;

  render() {
    return (
      <Host
        role="option"
        id={this.inputId}
        class={getSygMode(this)}
      >
      </Host>
    );
  }
}

let selectOptionIds = 0;
