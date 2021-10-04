```tsx
import { Component, h } from '@stencil/core';

import { menuController } from '@ionic/core';

@Component({
  tag: 'menu-example',
  styleUrl: 'menu-example.css'
})
export class MenuExample {
  openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }

  openEnd() {
    menuController.open('end');
  }

  openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }

  render() {
    return [
      <syg-menu side="start" menuId="first" contentId="main">
        <syg-header>
          <syg-toolbar color="primary">
            <syg-title>Start Menu</syg-title>
          </syg-toolbar>
        </syg-header>
        <syg-content>
          <syg-list>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
          </syg-list>
        </syg-content>
      </syg-menu>,

      <syg-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
        <syg-header>
          <syg-toolbar color="tertiary">
            <syg-title>Custom Menu</syg-title>
          </syg-toolbar>
        </syg-header>
        <syg-content>
          <syg-list>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
          </syg-list>
        </syg-content>
      </syg-menu>,

      <syg-menu side="end" type="push" contentId="main">
        <syg-header>
          <syg-toolbar color="danger">
            <syg-title>End Menu</syg-title>
          </syg-toolbar>
        </syg-header>
        <syg-content>
          <syg-list>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
            <syg-item>Menu Item</syg-item>
          </syg-list>
        </syg-content>
      </syg-menu>,

      // A router outlet can be placed here instead
      <syg-content id="main">
        <syg-button expand="block" onClick={() => this.openFirst()}>Open Start Menu</syg-button>
        <syg-button expand="block" onClick={() => this.openEnd()}>Open End Menu</syg-button>
        <syg-button expand="block" onClick={() => this.openCustom()}>Open Custom Menu</syg-button>
      </syg-content>
    ];
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```