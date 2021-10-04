import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';

import { config } from '../../global/config';
import { getSygMode } from '../../global/syg-global';
import { SpinnerTypes } from '../../interface';
import { isPlatform } from '../../utils/platform';
import { SygSafeString, sanitizeDOMString } from '../../utils/sanitization';
import { SPINNERS } from '../spinner/spinner-configs';

@Component({
  tag: 'syg-refresher-content'
})
export class RefresherContent implements ComponentInterface {

  @Element() el!: HTMLSygRefresherContentElement;

  /**
   * A static icon or a spinner to display when you begin to pull down.
   * A spinner name can be provided to gradually show tick marks
   * when pulling down on iOS devices.
   */
  @Prop({ mutable: true }) pullingIcon?: SpinnerTypes | string | null;

  /**
   * The text you want to display when you begin to pull down.
   * `pullingText` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Sygic>` would become
   * `&lt;Sygic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   */
  @Prop() pullingText?: string | SygSafeString;

  /**
   * An animated SVG spinner that shows when refreshing begins
   */
  @Prop({ mutable: true }) refreshingSpinner?: SpinnerTypes | null;

  /**
   * The text you want to display when performing a refresh.
   * `refreshingText` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Sygic>` would become
   * `&lt;Sygic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   */
  @Prop() refreshingText?: string | SygSafeString;

  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = getSygMode(this);
      const overflowRefresher = (this.el.style as any).webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
      this.pullingIcon = config.get(
        'refreshingIcon',
        mode === 'ios' && isPlatform('mobile') ? config.get('spinner', overflowRefresher) : 'circular'
      );
    }
    if (this.refreshingSpinner === undefined) {
      const mode = getSygMode(this);
      this.refreshingSpinner = config.get(
        'refreshingSpinner',
        config.get('spinner', mode === 'ios' ? 'lines' : 'circular')
      );
    }
  }

  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] as any !== undefined;
    const mode = getSygMode(this);

    return (
      <Host class={mode}>
        <div class="refresher-pulling">
          {this.pullingIcon && hasSpinner &&
            <div class="refresher-pulling-icon">
              <div class="spinner-arrow-container">
                <syg-spinner name={this.pullingIcon as SpinnerTypes} paused></syg-spinner>
                {mode === 'md' && this.pullingIcon === 'circular' &&
                  <div class="arrow-container">
                    <ion-icon name="caret-back-sharp"></ion-icon>
                  </div>
                }
              </div>
            </div>
          }
          {this.pullingIcon && !hasSpinner &&
            <div class="refresher-pulling-icon">
              <ion-icon icon={this.pullingIcon} lazy={false}></ion-icon>
            </div>
          }
          {this.pullingText &&
            <div class="refresher-pulling-text" innerHTML={sanitizeDOMString(this.pullingText)}></div>
          }
        </div>
        <div class="refresher-refreshing">
          {this.refreshingSpinner &&
            <div class="refresher-refreshing-icon">
              <syg-spinner name={this.refreshingSpinner}></syg-spinner>
            </div>
          }
          {this.refreshingText &&
            <div class="refresher-refreshing-text" innerHTML={sanitizeDOMString(this.refreshingText)}></div>
          }
        </div>
      </Host>
    );
  }
}
