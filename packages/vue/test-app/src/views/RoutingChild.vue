<template>
  <ion-page data-pageid="routingchild">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Routing Child</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Routing Child</syg-title>
        </syg-toolbar>
      </syg-header>

      <div class="ion-padding">
        Routing Child Page
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const router = useRouter();
    const setRouteParams = () => {
      router.push({
        query: {
          search: 'liamwashere'
        }
      });
    }

    return { setRouteParams }
  }
});
</script>
