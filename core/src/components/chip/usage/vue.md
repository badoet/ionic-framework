```html
<template>
  <syg-chip>
    <syg-label>Default</syg-label>
  </syg-chip>

  <syg-chip>
    <syg-label color="secondary">Secondary Label</syg-label>
  </syg-chip>

  <syg-chip color="secondary">
    <syg-label color="dark">Secondary w/ Dark label</syg-label>
  </syg-chip>

  <syg-chip :disabled="true">
    <syg-label>Disabled Chip</syg-label>
  </syg-chip>

  <syg-chip>
    <ion-icon :icon="pin"></ion-icon>
    <syg-label>Default</syg-label>
  </syg-chip>

  <syg-chip>
    <ion-icon :icon="heart" color="dark"></ion-icon>
    <syg-label>Default</syg-label>
  </syg-chip>

  <syg-chip>
    <syg-label>Button Chip</syg-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </syg-chip>

  <syg-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <syg-label>Icon Chip</syg-label>
    <ion-icon :icon="close"></ion-icon>
  </syg-chip>

  <syg-chip>
    <syg-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-avatar>
    <syg-label>Avatar Chip</syg-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </syg-chip>
</template>

<script>
import { IonAvatar, IonChip, IonIcon, IonLabel } from '@ionic/vue';
import { close, closeCircle, heart, pin } from 'ionicons/icons';

import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonAvatar, IonChip, IonIcon, IonLabel },
  setup() {
    return { close, closeCircle, heart, pin }
  }
});
</script>
```
