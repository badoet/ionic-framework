```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'backdrop-example',
  styleUrl: 'backdrop-example.css'
})
export class BackdropExample {
  render() {
    const enableBackdropDismiss = false;
    const showBackdrop = false;
    const shouldPropagate = false;

    return [
      // Default backdrop
      <syg-backdrop></syg-backdrop>,

      // Backdrop that is not tappable
      <syg-backdrop tappable={false}></syg-backdrop>,

      // Backdrop that is not visible
      <syg-backdrop visible={false}></syg-backdrop>,

      // Backdrop with propagation
      <syg-backdrop stopPropagation={false}></syg-backdrop>,

      // Backdrop that sets dynamic properties
      <syg-backdrop
        tappable={enableBackdropDismiss}
        visible={showBackdrop}
        stopPropagation={shouldPropagate}>
      </syg-backdrop>
    ];
  }
}
```