import { Component, Element, Event, EventEmitter, Host, Method, Prop, State, h } from '@stencil/core';

import { NavOutlet, RouteID, RouteWrite, TabButtonClickEventDetail } from '../../interface';

/**
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot top - Content is placed at the top of the screen.
 * @slot bottom - Content is placed at the bottom of the screen.
 */
@Component({
  tag: 'syg-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs implements NavOutlet {

  private transitioning = false;
  private leavingTab?: HTMLSygTabElement;

  @Element() el!: HTMLSygTabsElement;

  @State() selectedTab?: HTMLSygTabElement;

  /** @internal */
  @Prop({ mutable: true }) useRouter = false;

  /**
   * Emitted when the navigation will load a component.
   * @internal
   */
  @Event() ionNavWillLoad!: EventEmitter<void>;

  /**
   * Emitted when the navigation is about to transition to a new component.
   */
  @Event({ bubbles: false }) ionTabsWillChange!: EventEmitter<{tab: string}>;

  /**
   * Emitted when the navigation has finished transitioning to a new component.
   */
  @Event({ bubbles: false }) ionTabsDidChange!: EventEmitter<{tab: string}>;

  async componentWillLoad() {
    if (!this.useRouter) {
      this.useRouter = !!document.querySelector('syg-router') && !this.el.closest('[no-router]');
    }
    if (!this.useRouter) {
      const tabs = this.tabs;
      if (tabs.length > 0) {
        await this.select(tabs[0]);
      }
    }
    this.ionNavWillLoad.emit();
  }

  componentWillRender() {
    const tabBar = this.el.querySelector('syg-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }

  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  @Method()
  async select(tab: string | HTMLSygTabElement): Promise<boolean> {
    const selectedTab = getTab(this.tabs, tab);
    if (!this.shouldSwitch(selectedTab)) {
      return false;
    }
    await this.setActive(selectedTab);
    await this.notifyRouter();
    this.tabSwitch();

    return true;
  }

  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  @Method()
  async getTab(tab: string | HTMLSygTabElement): Promise<HTMLSygTabElement | undefined> {
    return getTab(this.tabs, tab);
  }

  /**
   * Get the currently selected tab.
   */
  @Method()
  getSelected(): Promise<string | undefined> {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }

  /** @internal */
  @Method()
  async setRouteId(id: string): Promise<RouteWrite> {
    const selectedTab = getTab(this.tabs, id);
    if (!this.shouldSwitch(selectedTab)) {
      return { changed: false, element: this.selectedTab };
    }

    await this.setActive(selectedTab);
    return {
      changed: true,
      element: this.selectedTab,
      markVisible: () => this.tabSwitch(),
    };
  }

  /** @internal */
  @Method()
  async getRouteId(): Promise<RouteID | undefined> {
    const tabId = this.selectedTab && this.selectedTab.tab;
    return tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined;
  }

  private setActive(selectedTab: HTMLSygTabElement): Promise<void> {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }

    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({ tab: selectedTab.tab });
    selectedTab.active = true;
    return Promise.resolve();
  }

  private tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;

    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }

    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({ tab: selectedTab.tab });
    }
  }

  private notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector('syg-router');
      if (router) {
        return router.navChanged('forward');
      }
    }
    return Promise.resolve(false);
  }

  private shouldSwitch(selectedTab: HTMLSygTabElement | undefined): selectedTab is HTMLSygTabElement {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }

  private get tabs() {
    return Array.from(this.el.querySelectorAll('syg-tab'));
  }

  private onTabClicked = (ev: CustomEvent<TabButtonClickEventDetail>) => {
    const { href, tab } = ev.detail;
    if (this.useRouter && href !== undefined) {
      const router = document.querySelector('syg-router');
      if (router) {
        router.push(href);
      }
    } else {
      this.select(tab);
    }
  }

  render() {
    return (
      <Host
        onSygTabButtonClick={this.onTabClicked}
      >
        <slot name="top"></slot>
        <div class="tabs-inner">
          <slot></slot>
        </div>
        <slot name="bottom"></slot>
      </Host>
    );
  }
}

const getTab = (tabs: HTMLSygTabElement[], tab: string | HTMLSygTabElement): HTMLSygTabElement | undefined => {
  const tabEl = (typeof tab === 'string')
    ? tabs.find(t => t.tab === tab)
    : tab;

  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
