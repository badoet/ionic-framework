import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-grid',
  styleUrl: 'grid.scss',
  shadow: true
})
export class Grid implements ComponentInterface {

  /**
   * If `true`, the grid will have a fixed width based on the screen size.
   */
  @Prop() fixed = false;

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        class={{
          [mode]: true,
          'grid-fixed': this.fixed
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
