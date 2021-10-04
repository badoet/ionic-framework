import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-row',
  styleUrl: 'row.scss',
  shadow: true
})
export class Row implements ComponentInterface {

  render() {
    return (
      <Host class={getSygMode(this)}>
        <slot></slot>
      </Host>
    );
  }
}
