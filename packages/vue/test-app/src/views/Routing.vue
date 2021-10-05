<template>
  <ion-page data-pageid="routing">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Routing</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Routing</syg-title>
        </syg-toolbar>
      </syg-header>

      <syg-item button @click="setRouteParams" id="route-params">
        <ion-label>Set Route Parameters</ion-label>
      </syg-item>

      <syg-item button router-link="/routing/child" id="child">
        <ion-label>Go to Child Page</ion-label>
      </syg-item>

      <syg-item button router-link="/routing/abc" id="parameter-abc">
        <ion-label>Go to Parameter Page ABC</ion-label>
      </syg-item>

      <syg-item button router-link="/routing/xyz" id="parameter-xyz">
        <ion-label>Go to Parameter Page XYZ</ion-label>
      </syg-item>

      <syg-item button router-link="/routing/123/view" id="parameter-view-item">
        <ion-label>Go to Parameterized Page View</ion-label>
      </syg-item>

      <syg-item button @click="replace" id="replace">
        <ion-label>Replace to Navigation page</ion-label>
      </syg-item>

      <syg-item button router-link="/tabs/tab1" id="tab1">
        <ion-label>Go to /tabs/tab1</ion-label>
      </syg-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
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
    IonItem,
    IonLabel,
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

    const replace = () => {
      router.replace('/navigation');
    }

    return { setRouteParams, replace }
  }
});
</script>
