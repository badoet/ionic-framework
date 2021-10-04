```html
<syg-app>
  <syg-menu side="start" menu-id="first" content-id="main">
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

  <syg-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
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

  <syg-menu side="end" type="push" content-id="main">
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

  <div class="syg-page" id="main">
    <syg-header>
      <syg-toolbar>
        <syg-title>Menu - Basic</syg-title>
      </syg-toolbar>
    </syg-header>
    <syg-content class="syg-padding">
      <syg-button expand="block" onclick="openFirst()">Open Start Menu</syg-button>
      <syg-button expand="block" onclick="openEnd()">Open End Menu</syg-button>
      <syg-button expand="block" onclick="openCustom()">Open Custom Menu</syg-button>
    </syg-content>
  </div>

</syg-app>
```

```javascript
<script type="module">
    import { menuController } from '@ionic/core';
    window.menuController = menuController;
</script>
  
<script>
  function openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }
  
  function openEnd() {
    menuController.open('end');
  }
  
  function openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }
</script>
```

```css
.my-custom-menu {
  --width: 500px;
}
```