**Tabs.vue**
```html
<template>
  <syg-page>
    <syg-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <syg-tab-bar slot="bottom">
        <syg-tab-button tab="schedule" href="/tabs/schedule">
          <ion-icon :icon="calendar"></ion-icon>
          <syg-label>Schedule</syg-label>
          <syg-badge>6</syg-badge>
        </syg-tab-button>

        <syg-tab-button tab="speakers" href="/tabs/speakers">
          <ion-icon :icon="personCircle"></ion-icon>
          <syg-label>Speakers</syg-label>
        </syg-tab-button>
      </syg-tab-bar>
    </syg-tabs>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue';
import { calendar, personCircle } from 'ionicons/icons';

export default defineComponent({
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange
    }
  }
});
</script>
```

**Schedule.vue**
```html
<template>
  <syg-page>
    <syg-header>
      <syg-toolbar>
        <syg-title>Schedule</syg-title>
      </syg-toolbar>
    </syg-header>

    <syg-content class="syg-padding">Schedule Tab</syg-content>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>
```

**Speakers.vue**
```html
<template>
  <syg-page>
    <syg-header>
      <syg-toolbar>
        <syg-title>Speakers</syg-title>
      </syg-toolbar>
    </syg-header>

    <syg-content class="syg-padding">Speakers Tab</syg-content>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>
```