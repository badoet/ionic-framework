import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { PickerColumnItem } from './picker-column-internal-interfaces';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-picker-column-internal',
  styleUrls: {
    ios: 'picker-column-internal.ios.scss',
    md: 'picker-column-internal.md.scss'
  },
  shadow: true
})
export class PickerColumnInternal implements ComponentInterface {
  @Prop() items: PickerColumnItem[] = [];

  render() {
    const { items } = this;

    return (
      <Host>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        {items.map(item => {
          return (
            <div class="picker-item">{item.text}</div>
          )

        })}
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
      </Host>
    );
  }
}
