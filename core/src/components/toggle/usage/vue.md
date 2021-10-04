```html
<template>
  <!-- Default Toggle -->
  <syg-toggle></syg-toggle>

  <!-- Disabled Toggle -->
  <syg-toggle disabled></syg-toggle>

  <!-- Checked Toggle -->
  <syg-toggle checked></syg-toggle>

  <!-- Toggle Colors -->
  <syg-toggle color="primary"></syg-toggle>
  <syg-toggle color="secondary"></syg-toggle>
  <syg-toggle color="danger"></syg-toggle>
  <syg-toggle color="light"></syg-toggle>
  <syg-toggle color="dark"></syg-toggle>

  <!-- Toggles in a List -->
  <syg-list>
    <syg-item>
      <syg-label>Pepperoni</syg-label>
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="pepperoni"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </syg-toggle>
    </syg-item>

    <syg-item>
      <syg-label>Sausage</syg-label>
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="sausage"
        :checked="toppings.value.indexOf('pepperoni') !== -1"
        disabled="true">
      </syg-toggle>
    </syg-item>

    <syg-item>
      <syg-label>Mushrooms</syg-label>
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="mushrooms"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </syg-toggle>
    </syg-item>
  </syg-list>
</template>

<script>
import { IonLabel, IonList, IonItem, IonToggle } from '@ionic/vue';
import { defineComponent, vue } from 'vue';

export default defineComponent({
  components: { IonLabel, IonList, IonItem, IonToggle },
  setup() {
    const toppings = ref([]);
    
    return { toppings };
  }
});
</script>
```
