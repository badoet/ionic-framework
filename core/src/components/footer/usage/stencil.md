```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-example',
  styleUrl: 'footer-example.css'
})
export class FooterExample {
  render() {
    return [
      <syg-content></syg-content>,

      // Footer without a border
      <syg-footer class="syg-no-border">
        <syg-toolbar>
          <syg-title>Footer - No Border</syg-title>
        </syg-toolbar>
      </syg-footer>,

      <syg-footer>
        <syg-toolbar>
          <syg-title>Footer</syg-title>
        </syg-toolbar>
      </syg-footer>
    ];
  }
}
```
