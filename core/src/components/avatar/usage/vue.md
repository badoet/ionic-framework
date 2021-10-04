```html
<template>
  <syg-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-avatar>

  <syg-chip>
    <syg-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-avatar>
    <syg-label>Chip Avatar</syg-label>
  </syg-chip>

  <syg-item>
    <syg-avatar slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-avatar>
    <syg-label>Item Avatar</syg-label>
  </syg-item>
</template>

<script>
import { IonAvatar, IonChip, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonAvatar, IonChip, IonItem, IonLabel }
});
</script>
```