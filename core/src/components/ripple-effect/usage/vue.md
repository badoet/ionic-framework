```html
<template>
  <syg-app>
    <syg-content>
      <div class="syg-activatable ripple-parent">
        A plain div with a bounded ripple effect
        <syg-ripple-effect></syg-ripple-effect>
      </div>

      <button class="syg-activatable ripple-parent">
        A button with a bounded ripple effect
        <syg-ripple-effect></syg-ripple-effect>
      </button>

      <div class="syg-activatable ripple-parent">
        A plain div with an unbounded ripple effect
        <syg-ripple-effect type="unbounded"></syg-ripple-effect>
      </div>

      <button class="syg-activatable ripple-parent">
        A button with an unbounded ripple effect
        <syg-ripple-effect type="unbounded"></syg-ripple-effect>
      </button>
    </syg-content>
  </syg-app>
</template>

<style>
  .ripple-parent {
    position: relative;
    overflow: hidden;
  }
</style>

<script>
import { IonApp, IonContent, IonRippleEffect } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonApp, IonContent, IonRippleEffect }
});
</script>
```