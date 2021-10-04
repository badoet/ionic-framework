```html
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
</syg-menu>

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
</syg-menu>

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
</syg-menu>

<syg-router-outlet id="main"></syg-router-outlet>
```

```typescript
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```