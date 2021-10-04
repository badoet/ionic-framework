import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-avatar',
  styleUrls: {
    ios: 'avatar.ios.scss',
    md: 'avatar.md.scss'
  },
  shadow: true
})
export class Avatar implements ComponentInterface {

  render() {
    return (
      <Host class={getSygMode(this)}>
        <slot></slot>
      </Host>
    );
  }

}
