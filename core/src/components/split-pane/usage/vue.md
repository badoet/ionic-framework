```html
<template>
  <syg-split-pane content-id="main">
    <!--  the side menu  -->
    <syg-menu content-id="main">
      <syg-header>
        <syg-toolbar>
          <syg-title>Menu</syg-title>
        </syg-toolbar>
      </syg-header>
    </syg-menu>

    <!-- the main content -->
    <syg-router-outlet id="main"></syg-router-outlet>
  </syg-split-pane>
</template>

<script>
import { 
  IonHeader, 
  IonMenu, 
  IonRouterOutlet, 
  IonSplitPane, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonHeader, 
    IonMenu, 
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToolbar
  }
});
</script>
```
