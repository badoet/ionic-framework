<template>
  <ion-page data-pageid="defaulthref">
    <ion-header :translucent="true">
      <ion-toolbar>
        <syg-buttons>
          <syg-back-button default-href="/"></syg-back-button>
        </syg-buttons>
        <ion-title>DefaultHref</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">DefaultHref</ion-title>
        </ion-toolbar>
      </ion-header>
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

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
