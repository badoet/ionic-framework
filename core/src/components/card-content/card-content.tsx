import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'syg-card-content',
  styleUrls: {
    ios: 'card-content.ios.scss',
    md: 'card-content.md.scss'
  }
})
export class CardContent implements ComponentInterface {

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`card-content-${mode}`]: true
        }}
      >
      </Host>
    );
  }
}
