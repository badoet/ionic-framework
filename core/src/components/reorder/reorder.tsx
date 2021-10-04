import { Component, ComponentInterface, Element, Host, Listen, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

/**
 * @part icon - The icon of the reorder handle (uses ion-icon).
 */
@Component({
  tag: 'syg-reorder',
  styleUrls: {
    ios: 'reorder.ios.scss',
    md: 'reorder.md.scss',
  },
  shadow: true
})
export class Reorder implements ComponentInterface {
  @Element() el!: HTMLSygReorderElement;

  @Listen('click', { capture: true })
  onClick(ev: Event) {
    const reorderGroup = this.el.closest('syg-reorder-group');

    ev.preventDefault();

    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }

  render() {
    const mode = getSygMode(this);
    const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
    return (
      <Host class={mode}>
        <slot>
          <ion-icon name={reorderIcon} lazy={false} class="reorder-icon" part="icon" />
        </slot>
      </Host>
    );
  }

}
