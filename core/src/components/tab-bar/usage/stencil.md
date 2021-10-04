```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-bar-example',
  styleUrl: 'tab-bar-example.css'
})
export class TabBarExample {
  render() {
    return [
      <syg-tabs>
        {/* Tab views */}
        <syg-tab tab="account" component="page-account"></syg-tab>
        <syg-tab tab="contact" component="page-contact"></syg-tab>
        <syg-tab tab="settings" component="page-settings"></syg-tab>

        {/* Tab bar */}
        <syg-tab-bar slot="bottom">
          <syg-tab-button tab="account">
            <ion-icon name="person"></ion-icon>
          </syg-tab-button>
          <syg-tab-button tab="contact">
            <ion-icon name="call"></ion-icon>
          </syg-tab-button>
          <syg-tab-button tab="settings">
            <ion-icon name="settings"></ion-icon>
          </syg-tab-button>
        </syg-tab-bar>
      </syg-tabs>
    ];
  }
}
```
