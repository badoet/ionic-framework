import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

import { getIonMode } from '../../global/ionic-global';
import { Color } from '../../interface';
import { getElementRoot, raf } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

import { PickerColumnItem } from './picker-column-internal-interfaces';

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
  private destroyScrollListener?: () => void;

  @Element() el!: HTMLIonPickerColumnInternalElement;

  /**
   * A list of options to be displayed in the picker
   */
  @Prop() items: PickerColumnItem[] = [];

  /**
   * The selected option in the picker.
   */
  @Prop() value?: string | number;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop({ reflect: true }) color?: Color;

  /**
   * Emitted when the value has changed.
   */
  @Event() ionChange!: EventEmitter<PickerColumnItem>;

  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */
  componentWillLoad() {
    const visibleCallback = (entries: IntersectionObserverEntry[]) => {
      const ev = entries[0];

      if (ev.isIntersecting) {
      this.scrollActiveItemIntoView();
      this.initializeScrollListener();
      } else {
        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = undefined;
        }
      }
    }
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01 });
    visibleIO.observe(this.el);
  }

  scrollActiveItemIntoView() {
    const activeEl = this.activeItem;

    if (activeEl) {
      this.centerPickerItemInView(activeEl, false)
      activeEl.classList.add(PICKER_COL_ACTIVE);
    }
  }

  centerPickerItemInView(target: HTMLElement, smooth = true) {
    this.el.scroll({
      // (Vertical offset from parent) - (three empty picker rows) + (half the height of the target to ensure the scroll triggers)
      top: target.offsetTop - (3 * target.clientHeight) + (target.clientHeight / 2),
      left: 0,
      behavior: smooth ? 'smooth' : undefined
    });
  }

  private initializeScrollListener = () => {
    const { el } = this;

    let timeout: any;

    let activeEl: HTMLElement | null = this.activeItem;
    const scrollCallback = () => {
      raf(() => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }

        const bbox = el.getBoundingClientRect();
        /**
         * Select item in the center of the column
         * which is the month/year that we want to select
         */
        const centerX = bbox.x + (bbox.width / 2);
        const centerY = bbox.y + (bbox.height / 2);

        const activeElement = el.shadowRoot!.elementFromPoint(centerX, centerY) as HTMLElement;
        if (activeEl !== null) {
          activeEl.classList.remove(PICKER_COL_ACTIVE);
        }

        activeEl = activeElement;

        activeElement.classList.add(PICKER_COL_ACTIVE);

        timeout = setTimeout(() => {
          const dataIndex = activeElement.getAttribute('data-index');

          /**
           * If no value it is
           * possible we hit one of the
           * empty padding columns.
           */
          if (dataIndex === null) {
            return;
          }

          const index = parseInt(dataIndex, 10);
          const value = this.items[index];

          this.ionChange.emit(value);
        }, 250);
      })
    };

    /**
     * Wrap this in an raf so that the scroll callback
     * does not fire when component is initially shown.
     */
    raf(() => {
      el.addEventListener('scroll', scrollCallback);

      this.destroyScrollListener = () => {
        el.removeEventListener('scroll', scrollCallback);
      }
    });
  }

  get activeItem() {
    return getElementRoot(this.el).querySelector(`.picker-item[data-value="${this.value}"]`) as HTMLElement | null;
  }

  render() {
    const { items, color } = this;
    const mode = getIonMode(this);

    return (
      <Host
        class={createColorClasses(color, {
          [mode]: true
        })}
      >
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        {items.map((item, index) => {
          return (
            <div
              class="picker-item"
              data-value={item.value}
              data-index={index}
              onClick={(ev: Event) => {
                this.centerPickerItemInView(ev.target as HTMLElement);
              }}
            >{item.text}</div>
          )
        })}
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
        <div class="picker-item picker-item-empty">&nbsp;</div>
      </Host>
    );
  }
}

const PICKER_COL_ACTIVE = 'picker-item-active';
