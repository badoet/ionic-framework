```html
<template>
  <syg-list>
    <syg-item v-for="item in items" :key="item.src">
      <syg-thumbnail slot="start">
        <syg-img :src="item.src"></syg-img>
      </syg-thumbnail>
      <syg-label>{{item.text}}</syg-label>
    </syg-item>
  </syg-list>
</template>

<script>
import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail },
  setup() {
    const items = [{
      'text': 'Item 1',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 2',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 3',
      'src': '/path/to/external/file.png'
    }];
    return { items }
  }
});
</script>
```
