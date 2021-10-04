```html
<template>
  <syg-tabs>
    <!-- Tab bar -->
    <syg-tab-bar slot="bottom">
      <syg-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar"></ion-icon>
        <syg-label>Schedule</syg-label>
      </syg-tab-button>

      <syg-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="person-circle"></ion-icon>
        <syg-label>Speakers</syg-label>
      </syg-tab-button>

      <syg-tab-button tab="map" href="/tabs/map">
        <ion-icon :icon="map"></ion-icon>
        <syg-label>Map</syg-label>
      </syg-tab-button>

      <syg-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="informationCircle"></ion-icon>
        <syg-label>About</syg-label>
      </syg-tab-button>
    </syg-tab-bar>
  </syg-tabs>
</template>

<script>
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue';
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs
  },
  setup() {
    return { calendar, informationCircle, map, personCircle }
  }
});
</script>
```
