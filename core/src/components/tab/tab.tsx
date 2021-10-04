import { Build, Component, ComponentInterface, Element, Host, Method, Prop, Watch, h } from '@stencil/core';

import { ComponentRef, FrameworkDelegate } from '../../interface';
import { attachComponent } from '../../utils/framework-delegate';

@Component({
  tag: 'syg-tab',
  styleUrl: 'tab.scss',
  shadow: true
})
export class Tab implements ComponentInterface {

  private loaded = false;
  @Element() el!: HTMLSygTabElement;

  /** @internal */
  @Prop({ mutable: true }) active = false;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /**
   * A tab id must be provided for each `syg-tab`. It's used internally to reference
   * the selected tab or by the router to switch between them.
   */
  @Prop() tab!: string;

  /**
   * The component to display inside of the tab.
   */
  @Prop() component?: ComponentRef;

  async componentWillLoad() {
    if (Build.isDev) {
      if (this.component !== undefined && this.el.childElementCount > 0) {
        console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
      `- Remove the component attribute in: <syg-tab component="${this.component}">` +
      ` or` +
      `- Remove the embedded content inside the syg-tab: <syg-tab></syg-tab>`);
      }
    }
    if (this.active) {
      await this.setActive();
    }
  }

  /** Set the active component for the tab */
  @Method()
  async setActive(): Promise<void> {
    await this.prepareLazyLoaded();
    this.active = true;
  }

  @Watch('active')
  changeActive(isActive: boolean) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }

  private prepareLazyLoaded(): Promise<HTMLElement | undefined> {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ['syg-page']);
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }

  render() {
    const { tab, active, component } = this;
    return (
      <Host
        role="tabpanel"
        aria-hidden={!active ? 'true' : null}
        aria-labelledby={`tab-button-${tab}`}
        class={{
          'syg-page': component === undefined,
          'tab-hidden': !active
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
