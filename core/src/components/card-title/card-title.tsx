import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';
import { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'syg-card-title',
  styleUrls: {
    ios: 'card-title.ios.scss',
    md: 'card-title.md.scss'
  },
  shadow: true
})
export class CardTitle implements ComponentInterface {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        role="heading"
        aria-level="2"
        class={createColorClasses(this.color, {
          'syg-inherit-color': true,
          [mode]: true
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
