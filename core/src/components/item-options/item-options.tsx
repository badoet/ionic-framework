import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';
import { Side } from '../../interface';
import { isEndSide } from '../../utils/helpers';

@Component({
  tag: 'syg-item-options',
  styleUrls: {
    ios: 'item-options.ios.scss',
    md: 'item-options.md.scss'
  }
})
export class ItemOptions implements ComponentInterface {

  @Element() el!: HTMLElement;

  /**
   * The side the option button should be on. Possible values: `"start"` and `"end"`. If you have multiple `syg-item-options`, a side must be provided for each.
   *
   */
  @Prop() side: Side = 'end';

  /**
   * Emitted when the item has been fully swiped.
   */
  @Event() ionSwipe!: EventEmitter<any>;

  /** @internal */
  @Method()
  async fireSwipeEvent() {
    this.ionSwipe.emit({
      side: this.side
    });
  }

  render() {
    const mode = getSygMode(this);
    const isEnd = isEndSide(this.side);
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`item-options-${mode}`]: true,

          'item-options-start': !isEnd,
          'item-options-end': isEnd
        }}
      >
      </Host>
    );
  }
}
