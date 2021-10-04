```html
<template>
  <syg-content></syg-content>
  
  <!-- Footer without a border -->
  <syg-footer class="syg-no-border">
    <syg-toolbar>
      <syg-title>Footer - No Border</syg-title>
    </syg-toolbar>
  </syg-footer>
  
  <syg-footer>
    <syg-toolbar>
      <syg-title>Footer</syg-title>
    </syg-toolbar>
  </syg-footer>
</template>

<script>
import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonFooter, IonTitle, IonToolbar }
});
</script>
```
