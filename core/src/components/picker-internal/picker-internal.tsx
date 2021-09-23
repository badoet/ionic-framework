import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-picker-internal',
  styleUrls: {
    ios: 'picker-internal.ios.scss',
    md: 'picker-internal.md.scss'
  },
  shadow: true
})
export class PickerInternal implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="picker-before"></div>
        <div class="picker-after"></div>
        <div class="picker-highlight"></div>
        <slot></slot>
      </Host>
    );
  }
}
