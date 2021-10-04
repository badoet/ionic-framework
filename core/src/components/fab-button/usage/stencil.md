```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-button-example',
  styleUrl: 'fab-button-example.css'
})
export class FabButtonExample {
  render() {
    return [
      <syg-content>

        {/* Fixed Floating Action Button that does not scroll with the content */}
        <syg-fab slot="fixed">
          <syg-fab-button>Button</syg-fab-button>
        </syg-fab>

        {/* Default Floating Action Button that scrolls with the content */}
        <syg-fab-button>Default</syg-fab-button>

        {/* Mini */}
        <syg-fab-button size="small">Mini</syg-fab-button>

        {/* Colors */}
        <syg-fab-button color="primary">Primary</syg-fab-button>
        <syg-fab-button color="secondary">Secondary</syg-fab-button>
        <syg-fab-button color="danger">Danger</syg-fab-button>
        <syg-fab-button color="light">Light</syg-fab-button>
        <syg-fab-button color="dark">Dark</syg-fab-button>

      </syg-content>
    ];
  }
}
```