```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinner-example',
  styleUrl: 'spinner-example.css'
})
export class SpinnerExample {
  render() {
    return [
      // Default Spinner
      <syg-spinner></syg-spinner>,

      // Lines
      <syg-spinner name="lines"></syg-spinner>,

      // Lines Small
      <syg-spinner name="lines-small"></syg-spinner>,

      // Dots
      <syg-spinner name="dots"></syg-spinner>,

      // Bubbles
      <syg-spinner name="bubbles"></syg-spinner>,

      // Circles
      <syg-spinner name="circles"></syg-spinner>,

      // Crescent
      <syg-spinner name="crescent"></syg-spinner>,

      // Paused Default Spinner
      <syg-spinner paused={true}></syg-spinner>
    ];
  }
}
```
