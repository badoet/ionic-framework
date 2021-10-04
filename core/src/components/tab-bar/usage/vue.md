```html
<template>
  <syg-tabs>
    <!-- Tab bar -->
    <syg-tab-bar slot="bottom">
      <syg-tab-button tab="account">
        <ion-icon :icon="person"></ion-icon>
      </syg-tab-button>
      <syg-tab-button tab="contact">
        <ion-icon :icon="call"></ion-icon>
      </syg-tab-button>
      <syg-tab-button tab="settings">
        <ion-icon :icon="settings"></ion-icon>
      </syg-tab-button>
    </syg-tab-bar>
  </syg-tabs>
</template>

<script>
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { call, person, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonIcon, IonTabBar, IonTabButton, IonTabs },
  setup() {
    return { call, person, settings }
  }
});
</script>
```