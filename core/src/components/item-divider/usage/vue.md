```html
<template>
  <syg-item-divider>
    <syg-label>
      Basic Item Divider
    </syg-label>
  </syg-item-divider>

  <syg-item-divider color="secondary">
    <syg-label>
      Secondary Item Divider
    </syg-label>
  </syg-item-divider>

  <!-- Item Dividers in a List -->
  <syg-list>
    <syg-item-divider>
      <syg-label>
        Section A
      </syg-label>
    </syg-item-divider>

    <syg-item><syg-label>A1</syg-label></syg-item>
    <syg-item><syg-label>A2</syg-label></syg-item>
    <syg-item><syg-label>A3</syg-label></syg-item>
    <syg-item><syg-label>A4</syg-label></syg-item>
    <syg-item><syg-label>A5</syg-label></syg-item>

    <syg-item-divider>
      <syg-label>
        Section B
      </syg-label>
    </syg-item-divider>

    <syg-item><syg-label>B1</syg-label></syg-item>
    <syg-item><syg-label>B2</syg-label></syg-item>
    <syg-item><syg-label>B3</syg-label></syg-item>
    <syg-item><syg-label>B4</syg-label></syg-item>
    <syg-item><syg-label>B5</syg-label></syg-item>
  </syg-list>
</template>

<script>
import { IonItem, IonItemDivider, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonItemDivider, IonLabel }
});
</script>
```
