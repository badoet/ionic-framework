<template>
  <ion-page data-pageid="defaulthref">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button default-href="/"></syg-back-button>
        </syg-buttons>
        <syg-title>DefaultHref</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">DefaultHref</syg-title>
        </syg-toolbar>
      </syg-header>
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
