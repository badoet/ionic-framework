```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'label-example',
  styleUrl: 'label-example.css'
})
export class LabelExample {
  render() {
    return [
      // Default Label
      <syg-label>Label</syg-label>,

      // Label Colors
      <syg-label color="primary">Primary Label</syg-label>,
      <syg-label color="secondary">Secondary Label</syg-label>,
      <syg-label color="danger">Danger Label</syg-label>,
      <syg-label color="light">Light Label</syg-label>,
      <syg-label color="dark">Dark Label</syg-label>,

      // Item Labels
      <syg-item>
        <syg-label>Default Item</syg-label>
      </syg-item>,

      <syg-item>
        <syg-label class="syg-text-wrap">
          Multi-line text that should wrap when it is too long
          to fit on one line in the item.
        </syg-label>
      </syg-item>,

      // Input Labels
      <syg-item>
        <syg-label>Default Input</syg-label>
        <syg-input></syg-input>
      </syg-item>,

      <syg-item>
        <syg-label position="fixed">Fixed</syg-label>
        <syg-input></syg-input>
      </syg-item>,

      <syg-item>
        <syg-label position="floating">Floating</syg-label>
        <syg-input></syg-input>
      </syg-item>,

      <syg-item>
        <syg-label position="stacked">Stacked</syg-label>
        <syg-input></syg-input>
      </syg-item>,

      <syg-item>
        <syg-label>Toggle</syg-label>
        <syg-toggle slot="end" checked={true}></syg-toggle>
      </syg-item>,

      <syg-item>
        <syg-checkbox slot="start" checked={true}></syg-checkbox>
        <syg-label>Checkbox</syg-label>
      </syg-item>
    ];
  }
}
```
