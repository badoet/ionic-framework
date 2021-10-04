```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-example',
  styleUrl: 'header-example.css'
})
export class HeaderExample {
  render() {
    return [
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button></syg-back-button>
          </syg-buttons>
          <syg-title>My Navigation Bar</syg-title>
        </syg-toolbar>

        <syg-toolbar>
          <syg-title>Subheader</syg-title>
        </syg-toolbar>
      </syg-header>,

      // Header without a border
      <syg-header class="syg-no-border">
        <syg-toolbar>
          <syg-title>Header - No Border</syg-title>
        </syg-toolbar>
      </syg-header>,

      <syg-content>
        <syg-header collapse="condense">
          <syg-toolbar>
            <syg-title size="large">My Navigation Bar</syg-title>
          </syg-toolbar>
        </syg-header>
      </syg-content>
    ];
  }
}
```
