```html
<template>
  <!-- Default Refresher -->
  <syg-content>
    <syg-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <syg-refresher-content></syg-refresher-content>
    </syg-refresher>
  </syg-content>

  <!-- Custom Refresher Properties -->
  <syg-content>
    <syg-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
      <syg-refresher-content></syg-refresher-content>
    </syg-refresher>
  </syg-content>

  <!-- Custom Refresher Content -->
  <syg-content>
    <syg-refresher slot="fixed" @ionRefresh="doRefresh($event)">
      <syg-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="Pull to refresh"
        refreshing-spinner="circles"
        refreshing-text="Refreshing...">
      </syg-refresher-content>
    </syg-refresher>
  </syg-content>
</template>

<script lang="ts">
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDownCircleOutline } from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonContent, IonRefresher, IonRefresherContent },
  setup() {
    const doRefresh = (event: CustomEvent) => {
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    return { chevronDownCircleOutline, doRefresh }
  }
});
</script>
```