```html
<template>
  <!-- Default backdrop -->
  <syg-backdrop></syg-backdrop>

  <!-- Backdrop that is not tappable -->
  <syg-backdrop tappable="false"></syg-backdrop>

  <!-- Backdrop that is not visible -->
  <syg-backdrop visible="false"></syg-backdrop>

  <!-- Backdrop with propagation -->
  <syg-backdrop stop-propagation="false"></syg-backdrop>

  <!-- Backdrop that sets dynamic properties -->
  <syg-backdrop
    :tappable="enableBackdropDismiss"
    :visible="showBackdrop"
    :stop-propagation="shouldPropagate">
  </syg-backdrop>
</template>

<script>
import { IonBackdrop } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBackdrop },
  setup() {
    return {
      enableBackdropDismiss: true,
      showBackdrop: true,
      shouldPropagate: true
    }
  }
});
</script>
```