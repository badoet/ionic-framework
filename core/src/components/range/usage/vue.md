```html
<template>
  <syg-list>
    <syg-item>
      <syg-range color="danger" :pin="true"></syg-range>
    </syg-item>

    <syg-item>
      <syg-range min="-200" max="200" color="secondary">
        <syg-label slot="start">-200</syg-label>
        <syg-label slot="end">200</syg-label>
      </syg-range>
    </syg-item>

    <syg-item>
      <syg-range min="20" max="80" step="2">
        <ion-icon size="small" slot="start" name="sunny"></ion-icon>
        <ion-icon slot="end" name="sunny"></ion-icon>
      </syg-range>
    </syg-item>

    <syg-item>
      <syg-range min="1000" max="2000" step="100" snaps="true" color="secondary"></syg-range>
    </syg-item>

    <syg-item>
      <syg-range min="1000" max="2000" step="100" snaps="true" ticks="false" color="secondary"></syg-range>
    </syg-item>

    <syg-item>
      <syg-range ref="rangeDualKnobs" dual-knobs="true" min="21" max="72" step="3" snaps="true"></syg-range>
    </syg-item>

    <syg-item>
      <syg-range min="0" max="100" :pin-formatter="customFormatter" :pin="true"></syg-range>
    </syg-item>
  </syg-list>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonList, IonRange } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {  IonItem, IonLabel, IonList, IonRange },
  mounted() {
    // Sets initial value for dual-knob syg-range
    this.$refs.rangeDualKnobs.value = { lower: 24, upper: 42 };
  },
  setup() {
    const customFormatter = (value: number) => `${value}%`;

    return { customFormatter };
  }
});
</script>
```
