```html
<template>
  <!-- Default Checkbox -->
  <syg-checkbox></syg-checkbox>

  <!-- Disabled Checkbox -->
  <syg-checkbox disabled="true"></syg-checkbox>

  <!-- Checked Checkbox -->
  <syg-checkbox checked="true"></syg-checkbox>

  <!-- Checkbox Colors -->
  <syg-checkbox color="primary"></syg-checkbox>
  <syg-checkbox color="secondary"></syg-checkbox>
  <syg-checkbox color="danger"></syg-checkbox>
  <syg-checkbox color="light"></syg-checkbox>
  <syg-checkbox color="dark"></syg-checkbox>

  <!-- Checkboxes in a List -->
  <syg-list>
    <syg-item v-for="entry in form">
      <syg-label>{{entry.val}}</syg-label>
      <syg-checkbox
        slot="end"
        @update:modelValue="entry.isChecked = $event"
        :modelValue="entry.isChecked">
      </syg-checkbox>
    </syg-item>
  </syg-list>
</template>

<script>
import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCheckbox, IonItem, IonLabel, IonList },
  setup() {
    const form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    
    return { form };
  }
});
</script>
```