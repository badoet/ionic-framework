import { Component, ComponentInterface, Event, EventEmitter, Host, h } from '@stencil/core';
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

  @Event() ionInputModeChange!: EventEmitter<PickerInternalChangeEventDetail>;

  private isInHighlightBounds = (ev: PointerEvent) => {
    const { highlightEl } = this;
    if (!highlightEl) return false;

    const bbox = highlightEl.getBoundingClientRect();
    /**
     * Check to see if the x-axis of where
     * user clicked is out of bounds. This means
     * that the user did not click on an area covered
     * by the highlight.
     */
    if (ev.clientX < bbox.left || ev.clientX > bbox.right) return false;

    /**
     * Check to see if the x-axis of where
     * user clicked is out of bounds. This means
     * that the user did not click on an area covered
     * by the highlight.
     */
    if (ev.clientY < bbox.top || ev.clientY > bbox.bottom) return false;

    return true;
  }

  private onClick = (ev: PointerEvent) => {
    const { inputEl, inputMode, inputModeColumn } = this;

    if (!inputEl) return;

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
            this.enterInputMode();
          } else {
            this.enterInputMode(ev.target as HTMLIonPickerColumnInternalElement);
          }
        } else {
          this.exitInputMode();
        }
      /**
       * If we were not already in
       * input mode, then we should
       * enter input mode for all columns.
       */
      } else {
        this.enterInputMode();
      }

      return;
    }

    this.exitInputMode();
  }

  private enterInputMode = (columnEl?: HTMLIonPickerColumnInternalElement) => {
    const { inputEl } = this;
    if (!inputEl) return;

    this.inputMode = true;
    this.inputModeColumn = columnEl;
    inputEl.focus();

    this.emitInputModeChange();
  }

  private exitInputMode = () => {
    const { inputEl } = this;
    if (!inputEl) return;

    this.inputMode = false;
    this.inputModeColumn = undefined;
    inputEl.blur();
    inputEl.value = '';

    this.emitInputModeChange();
  }

  private onInputChange = (ev: Event) => {
    if (!this.inputMode) return;

    console.log('change ',ev)
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
        onClick={(ev: PointerEvent) => this.onClick(ev)}
      >
        <input
          inputmode="numeric"
          type="text"
          ref={el => this.inputEl = el}
          onInput={ev => this.onInputChange(ev)}
        />
        <div class="picker-before"></div>
        <div class="picker-after"></div>
        <div class="picker-highlight" ref={el => this.highlightEl = el}></div>
        <slot></slot>
      </Host>
    );
  }
}
