import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-item-group',
  styleUrls: {
    ios: 'item-group.ios.scss',
    md: 'item-group.md.scss'
  }
})
export class ItemGroup implements ComponentInterface {

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        role="group"
        class={{
          [mode]: true,

          // Used internally for styling
          [`item-group-${mode}`]: true,

          'item': true
        }}
      >
      </Host>
    );
  }
}
