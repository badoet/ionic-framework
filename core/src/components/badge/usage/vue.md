```html
<template>
  <!-- Default -->
  <syg-badge>99</syg-badge>

  <!-- Colors -->
  <syg-badge color="primary">11</syg-badge>
  <syg-badge color="secondary">22</syg-badge>
  <syg-badge color="tertiary">33</syg-badge>
  <syg-badge color="success">44</syg-badge>
  <syg-badge color="warning">55</syg-badge>
  <syg-badge color="danger">66</syg-badge>
  <syg-badge color="light">77</syg-badge>
  <syg-badge color="medium">88</syg-badge>
  <syg-badge color="dark">99</syg-badge>

  <!-- Item with badge on left and right -->
  <syg-item>
    <syg-badge slot="start">11</syg-badge>
    <syg-label>My Item</syg-label>
    <syg-badge slot="end">22</syg-badge>
  </syg-item>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel }
});
</script>
```