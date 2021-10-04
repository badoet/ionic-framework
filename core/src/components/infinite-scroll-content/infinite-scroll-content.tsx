import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

import { config } from '../../global/config';
import { getSygMode } from '../../global/syg-global';
import { SpinnerTypes } from '../../interface';
import { SygSafeString, sanitizeDOMString } from '../../utils/sanitization';

@Component({
  tag: 'syg-infinite-scroll-content',
  styleUrls: {
    ios: 'infinite-scroll-content.ios.scss',
    md: 'infinite-scroll-content.md.scss'
  }
})
export class InfiniteScrollContent implements ComponentInterface {

  /**
   * An animated SVG spinner that shows while loading.
   */
  @Prop({ mutable: true }) loadingSpinner?: SpinnerTypes | null;

  /**
   * Optional text to display while loading.
   * `loadingText` can accept either plaintext or HTML as a string.
   * To display characters normally reserved for HTML, they
   * must be escaped. For example `<Sygic>` would become
   * `&lt;Sygic&gt;`
   *
   * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
   */
  @Prop() loadingText?: string | SygSafeString;

  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = getSygMode(this);
      this.loadingSpinner = config.get(
        'infiniteLoadingSpinner',
        config.get('spinner', mode === 'ios' ? 'lines' : 'crescent')
      );
    }
  }

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        class={{
          [mode]: true,

          // Used internally for styling
          [`infinite-scroll-content-${mode}`]: true
        }}
      >
        <div class="infinite-loading">
          {this.loadingSpinner && (
            <div class="infinite-loading-spinner">
              <syg-spinner name={this.loadingSpinner} />
            </div>
          )}
          {this.loadingText && (
            <div class="infinite-loading-text" innerHTML={sanitizeDOMString(this.loadingText)} />
          )}
        </div>
      </Host>
    );
  }
}
