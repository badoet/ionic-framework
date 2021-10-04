```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'split-pane-example',
  styleUrl: 'split-pane-example.css'
})
export class SplitPaneExample {
  render() {
    return [
      <syg-split-pane content-id="main">
        {/*  the side menu */}
        <syg-menu content-id="main">
          <syg-header>
            <syg-toolbar>
              <syg-title>Menu</syg-title>
            </syg-toolbar>
          </syg-header>
        </syg-menu>

        {/* the main content */}
        <syg-router-outlet id="main"></syg-router-outlet>
      </syg-split-pane>
    ];
  }
}
```
