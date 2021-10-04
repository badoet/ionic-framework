```html
<template>
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

  <syg-router-outlet id="main"></syg-router-outlet>
</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet,
    IonTitle, 
    IonToolbar
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});
</script>
```