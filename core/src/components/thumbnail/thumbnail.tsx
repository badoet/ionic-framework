import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-thumbnail',
  styleUrl: 'thumbnail.scss',
  shadow: true
})
export class Thumbnail implements ComponentInterface {

  render() {
    return (
      <Host class={getSygMode(this)}>
        <slot></slot>
      </Host>
    );
  }
}
