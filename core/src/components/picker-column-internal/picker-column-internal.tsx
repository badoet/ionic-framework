import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import { PickerColumnItem } from './picker-column-internal-interfaces';
import { getElementRoot } from '../../utils/helpers';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'ion-picker-column-internal',
  styleUrls: {
    ios: 'picker-column-internal.ios.scss',
    md: 'picker-column-internal.md.scss'
  },
  shadow: true
})
export class PickerColumnInternal implements ComponentInterface {
  @Element() el!: HTMLIonPickerColumnInternalElement;

  @Prop() items: PickerColumnItem[] = [];
  @Prop() value?: string | number;

  @Event() ionChange!: EventEmitter<PickerColumnItem>;

  componentWillLoad() {
    const visibleCallback = (entries: IntersectionObserverEntry[]) => {
      const ev = entries[0];
      if (!ev.isIntersecting) { return; }

      this.scrollActiveItemIntoView();
      console.log('ready');
    }
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01 });
    visibleIO.observe(this.el);
  }

  scrollActiveItemIntoView() {
    const activeEl = getElementRoot(this.el).querySelector(`.picker-item[data-value="${this.value}"]`) as HTMLElement | null;

    if (activeEl) {
      this.centerPickerItemInView(activeEl, false)
    }
  }

  centerPickerItemInView(target: HTMLElement, smooth: boolean = true) {
    this.el.scroll({
      // (Vertical offset from parent) - (three empty picker rows) + (half the height of the target to ensure the scroll triggers)
      top: target.offsetTop - (3 * target.clientHeight) + (target.clientHeight / 2),
      left: 0,
      behavior: smooth ? 'smooth' : undefined
    });
  }

  render() {
    const { items } = this;

    return (
      <Host>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        {items.map(item => {
          return (
            <div
              class="picker-item"
              data-value={item.value}
              onClick={(ev: Event) => {
                this.centerPickerItemInView(ev.target as HTMLElement);
              }}
            >{item.text}</div>
          )
        })}
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
        <div class="picker-col-item picker-item-empty">&nbsp;</div>
      </Host>
    );
  }
}
