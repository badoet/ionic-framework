import { Component, ComponentInterface, Element, Host, Method, Prop, Watch, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-fab',
  styleUrl: 'fab.scss',
  shadow: true
})
export class Fab implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * Where to align the fab horizontally in the viewport.
   */
  @Prop() horizontal?: 'start' | 'end' | 'center';

  /**
   * Where to align the fab vertically in the viewport.
   */
  @Prop() vertical?: 'top' | 'bottom' | 'center';

  /**
   * If `true`, the fab will display on the edge of the header if
   * `vertical` is `"top"`, and on the edge of the footer if
   * it is `"bottom"`. Should be used with a `fixed` slot.
   */
  @Prop() edge = false;

  /**
   * If `true`, both the `syg-fab-button` and all `syg-fab-list` inside `syg-fab` will become active.
   * That means `syg-fab-button` will become a `close` icon and `syg-fab-list` will become visible.
   */
  @Prop({ mutable: true }) activated = false;
  @Watch('activated')
  activatedChanged() {
    const activated = this.activated;
    const fab = this.getFab();
    if (fab) {
      fab.activated = activated;
    }
    Array.from(this.el.querySelectorAll('syg-fab-list')).forEach(list => {
      list.activated = activated;
    });
  }

  componentDidLoad() {
    if (this.activated) {
      this.activatedChanged();
    }
  }
  /**
   * Close an active FAB list container.
   */
  @Method()
  async close() {
    this.activated = false;
  }

  private getFab() {
    return this.el.querySelector('syg-fab-button');
  }

  private onClick = () => {
    const hasList = !!this.el.querySelector('syg-fab-list');
    const getButton = this.getFab();
    const isButtonDisabled = getButton && getButton.disabled;

    if (hasList && !isButtonDisabled) {
      this.activated = !this.activated;
    }
  }

  render() {
    const { horizontal, vertical, edge } = this;
    const mode = getSygMode(this);
    return (
      <Host
        onClick={this.onClick}
        class={{
          [mode]: true,
          [`fab-horizontal-${horizontal}`]: horizontal !== undefined,
          [`fab-vertical-${vertical}`]: vertical !== undefined,
          'fab-edge': edge
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
