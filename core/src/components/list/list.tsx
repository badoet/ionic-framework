import { Component, ComponentInterface, Element, Host, Method, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'syg-list',
  styleUrls: {
    ios: 'list.ios.scss',
    md: 'list.md.scss'
  }
})
export class List implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * How the bottom border should be displayed on all items.
   */
  @Prop() lines?: 'full' | 'inset' | 'none';

  /**
   * If `true`, the list will have margin around it and rounded corners.
   */
  @Prop() inset = false;

  /**
   * If `syg-item-sliding` are used inside the list, this method closes
   * any open sliding item.
   *
   * Returns `true` if an actual `syg-item-sliding` is closed.
   */
  @Method()
  async closeSlidingItems(): Promise<boolean> {
    const item = this.el.querySelector('syg-item-sliding');
    if (item && item.closeOpened) {
      return item.closeOpened();
    }
    return false;
  }

  render() {
    const mode = getSygMode(this);
    const { lines, inset } = this;
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`list-${mode}`]: true,

          'list-inset': inset,
          [`list-lines-${lines}`]: lines !== undefined,
          [`list-${mode}-lines-${lines}`]: lines !== undefined
        }}
      >
      </Host>
    );
  }
}
