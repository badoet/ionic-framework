```html
<template>
  <syg-thumbnail>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-thumbnail>

  <syg-item>
    <syg-thumbnail slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-thumbnail>
    <syg-label>Item Thumbnail</syg-label>
  </syg-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonThumbnail }
});
</script>
```