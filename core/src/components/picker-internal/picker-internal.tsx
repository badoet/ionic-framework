import { Component, ComponentInterface, Element, Event, EventEmitter, Host, h } from '@stencil/core';

import { getElementRoot } from '../../utils/helpers';

import { PickerInternalChangeEventDetail } from './picker-internal-interfaces';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 * @internal
 */
@Component({
  tag: 'ion-picker-internal',
  styleUrls: {
    ios: 'picker-internal.ios.scss',
    md: 'picker-internal.md.scss'
  },
  shadow: true
})
export class PickerInternal implements ComponentInterface {
  private inputEl?: HTMLInputElement;
  private inputMode = false;
  private inputModeColumn?: HTMLIonPickerColumnInternalElement;
  private highlightEl?: HTMLElement;
  private actionOnClick?: () => void;

  @Element() el!: HTMLIonPickerInternalElement;

  @Event() ionInputModeChange!: EventEmitter<PickerInternalChangeEventDetail>;

  componentWillLoad() {
    getElementRoot(this.el).addEventListener('focusin', this.onFocusIn);
  }

  private isInHighlightBounds = (ev: PointerEvent) => {
    const { highlightEl } = this;
    if (!highlightEl) { return false; }

    const bbox = highlightEl.getBoundingClientRect();
    /**
     * Check to see if the x-axis of where
     * user clicked is out of bounds. This means
     * that the user did not click on an area covered
     * by the highlight.
     */
    if (ev.clientX < bbox.left || ev.clientX > bbox.right) { return false; }

    /**
     * Check to see if the x-axis of where
     * user clicked is out of bounds. This means
     * that the user did not click on an area covered
     * by the highlight.
     */
    if (ev.clientY < bbox.top || ev.clientY > bbox.bottom) { return false; }

    return true;
  }

  private onFocusIn = (ev: any) => {
    const { target } = ev;

    /**
     * Due to browser differences in how/when focus
     * is dispatched on certain elements, we need to
     * make sure that this function only ever runs when
     * focusing a picker column.
     */
    if (target.tagName !== 'ION-PICKER-COLUMN-INTERNAL') { return; }

    /**
     * If we have actionOnClick
     * then this means the user focused
     * a picker column via mouse or
     * touch (i.e. a PointerEvent). As a result,
     * we should not enter/exit input mode
     * until the click event has fired, which happens
     * after the `focusin` event.
     *
     * Otherwise, the user likely focused
     * the column using their keyboard and
     * we should enter/exit input mode automatically.
     */
    if (!this.actionOnClick) {
      const columnEl = target as HTMLIonPickerColumnInternalElement;
      const allowInput = columnEl.numericInput;
      if (allowInput) {
        this.enterInputMode(columnEl, false);
      } else {
        this.exitInputMode();
      }
    }
  }

  /**
   * On click we need to run an actionOnClick
   * function that has been set in onPointerDown
   * so that we enter/exit input mode correctly.
   */
  private onClick = () => {
    const { actionOnClick } = this;
    if (actionOnClick) {
      actionOnClick();
      this.actionOnClick = undefined;
    }
  }

  private onPointerDown = (ev: PointerEvent) => {
    const { inputMode, inputModeColumn } = this;
    if (this.isInHighlightBounds(ev)) {
      /**
       * If we were already in
       * input mode, then we should determine
       * if we tapped a particular column and
       * should switch to input mode for
       * that specific column.
       */
      if (inputMode) {
        /**
         * If we tapped a picker column
         * then we should either switch to input
         * mode for that column or all columns.
         * Otherwise we should exit input mode
         * since we just tapped the highlight and
         * not a column.
         */
        if ((ev.target as HTMLElement).tagName === 'ION-PICKER-COLUMN-INTERNAL') {
          /**
           * If user taps 2 different columns
           * then we should just switch to input mode
           * for the new column rather than switching to
           * input mode for all columns.
           */
          if (inputModeColumn && inputModeColumn === ev.target) {
            this.actionOnClick = () => {
              this.enterInputMode();
            }
          } else {
            this.actionOnClick = () => {
              this.enterInputMode(ev.target as HTMLIonPickerColumnInternalElement);
            }
          }
        } else {
          this.actionOnClick = () => {
            this.exitInputMode();
          }
        }
      /**
       * If we were not already in
       * input mode, then we should
       * enter input mode for all columns.
       */
      } else {
        this.actionOnClick = () => {
          this.enterInputMode();
        }
      }

      return;
    }

    this.actionOnClick = () => {
      this.exitInputMode();
    }
  }

  private enterInputMode = (columnEl?: HTMLIonPickerColumnInternalElement, focusInput = true) => {
    const { inputEl } = this;
    if (!inputEl) { return; }

    this.inputMode = true;
    this.inputModeColumn = columnEl;

    if (focusInput) {
      inputEl.focus();
    }

    this.emitInputModeChange();
  }

  private exitInputMode = () => {
    const { inputEl, inputMode } = this;
    if (!inputMode || !inputEl) { return; }

    this.inputMode = false;
    this.inputModeColumn = undefined;
    inputEl.blur();
    inputEl.value = '';

    this.emitInputModeChange();
  }

  private onInputChange = (ev: Event) => {
    if (!this.inputMode) { return; }

    console.log('change ', ev)
  }

  private emitInputModeChange = () => {
    const { inputMode, inputModeColumn } = this;

    this.ionInputModeChange.emit({
      inputMode,
      inputModeColumn
    });
  }

  render() {
    return (
      <Host
        onPointerDown={(ev: PointerEvent) => this.onPointerDown(ev)}
        onClick={() => this.onClick()}
      >
        <input
          tabindex={-1}
          inputmode="numeric"
          type="text"
          ref={el => this.inputEl = el}
          onInput={ev => this.onInputChange(ev)}
          onBlur={() => this.exitInputMode()}
        />
        <div class="picker-before"></div>
        <div class="picker-after"></div>
        <div class="picker-highlight" ref={el => this.highlightEl = el}></div>
        <slot></slot>
      </Host>
    );
  }
}
