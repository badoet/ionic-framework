import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { config } from '../../global/config';
import { getSygMode } from '../../global/syg-global';
import { hostContext } from '../../utils/theme';

@Component({
  tag: 'syg-skeleton-text',
  styleUrl: 'skeleton-text.scss',
  shadow: true
})
export class SkeletonText implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * If `true`, the skeleton text will animate.
   */
  @Prop() animated = false;

  render() {
    const animated = this.animated && config.getBoolean('animated', true);
    const inMedia = hostContext('syg-avatar', this.el) || hostContext('syg-thumbnail', this.el);
    const mode = getSygMode(this);

    return (
      <Host
        class={{
          [mode]: true,
          'skeleton-text-animated': animated,
          'in-media': inMedia
        }}
      >
        <span>&nbsp;</span>
      </Host>
    );
  }
}
