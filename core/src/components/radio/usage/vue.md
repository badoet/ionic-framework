```html
<template>
  <syg-list>
    <syg-radio-group value="biff">
      <syg-list-header>
        <syg-label>Name</syg-label>
      </syg-list-header>

      <syg-item>
        <syg-label>Biff</syg-label>
        <syg-radio slot="start" value="biff"></syg-radio>
      </syg-item>

      <syg-item>
        <syg-label>Griff</syg-label>
        <syg-radio slot="start" value="griff"></syg-radio>
      </syg-item>

      <syg-item>
        <syg-label>Buford</syg-label>
        <syg-radio slot="start" value="buford"></syg-radio>
      </syg-item>
    </syg-radio-group>
  </syg-list>
</template>

<script>
import { 
  IonItem, 
  IonLabel, 
  IonList, 
  IonListHeader,
  IonRadio, 
  IonRadioGroup
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader,
    IonRadio, 
    IonRadioGroup
  }
});
</script>
```
