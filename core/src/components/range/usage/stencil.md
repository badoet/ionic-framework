```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'range-example',
  styleUrl: 'range-example.css'
})
export class RangeExample {
  private customFormatter = (value: number) => `${value}%`;

  render() {
    return [
      <syg-list>
        <syg-item>
          <syg-range color="danger" pin={true}></syg-range>
        </syg-item>

        <syg-item>
          <syg-range min={-200} max={200} color="secondary">
            <syg-label slot="start">-200</syg-label>
            <syg-label slot="end">200</syg-label>
          </syg-range>
        </syg-item>

        <syg-item>
          <syg-range min={20} max={80} step={2}>
            <ion-icon size="small" slot="start" name="sunny"></ion-icon>
            <ion-icon slot="end" name="sunny"></ion-icon>
          </syg-range>
        </syg-item>

        <syg-item>
          <syg-range min={1000} max={2000} step={100} snaps={true} color="secondary"></syg-range>
        </syg-item>

        <syg-item>
          <syg-range min={1000} max={2000} step={100} snaps={true} ticks={false} color="secondary"></syg-range>
        </syg-item>

        <syg-item>
          <syg-range dualKnobs={true} min={21} max={72} step={3} snaps={true}></syg-range>
        </syg-item>

        <syg-item>
          <syg-range min="0" max="100" pinFormatter={this.customFormatter} pin={true}></syg-range>
        </syg-item>
      </syg-list>
    ];
  }
}
```
