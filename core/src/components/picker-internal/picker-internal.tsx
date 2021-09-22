import { Component, ComponentInterface, Element, Host, h } from '@stencil/core';

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
  @Element() el!: HTMLIonPickerInternalElement;

  componentDidLoad() {
    const columns = this.el.querySelector('ion-picker-column-internal');
    console.log(columns)
  }

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
