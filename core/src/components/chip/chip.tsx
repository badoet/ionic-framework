import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';
import { Color } from '../../interface';
import { createColorClasses } from '../../utils/theme';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'syg-chip',
  styleUrls: {
    ios: 'chip.ios.scss',
    md: 'chip.md.scss'
  },
  shadow: true
})
export class Chip implements ComponentInterface {
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Display an outline style button.
   */
  @Prop() outline = false;

  /**
   * If `true`, the user cannot interact with the chip.
   */
  @Prop() disabled = false;

  render() {
    const mode = getSygMode(this);

    return (
      <Host
        aria-disabled={this.disabled ? 'true' : null}
        class={createColorClasses(this.color, {
          [mode]: true,
          'chip-outline': this.outline,
          'chip-disabled': this.disabled,
          'syg-activatable': true,
        })}
      >
        <slot></slot>
        {mode === 'md' && <syg-ripple-effect></syg-ripple-effect>}
      </Host>
    );
  }
}
