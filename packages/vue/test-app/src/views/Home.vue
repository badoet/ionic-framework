<template>
  <ion-page data-pageid="home">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Test App</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Test App</syg-title>
        </syg-toolbar>
      </syg-header>

      <ion-list>
        <syg-item button router-link="/overlays">
          <ion-label>Overlays</ion-label>
        </syg-item>
        <syg-item button router-link="/inputs">
          <ion-label>Inputs</ion-label>
        </syg-item>
        <syg-item button router-link="/slides">
          <ion-label>Slides</ion-label>
        </syg-item>
        <syg-item button router-link="/navigation" id="navigation">
          <ion-label>Navigation</ion-label>
        </syg-item>
        <syg-item button router-link="/routing" id="routing">
          <ion-label>Routing</ion-label>
        </syg-item>
        <syg-item button router-link="/default-href" id="default-href">
          <ion-label>Default Href</ion-label>
        </syg-item>
        <syg-item button router-link="/nested" id="nested">
          <ion-label>Nested Router Outlet</ion-label>
        </syg-item>
        <syg-item button router-link="/tabs" id="tabs">
          <ion-label>Tabs</ion-label>
        </syg-item>
        <syg-item button router-link="/tabs-secondary" id="tab-secondary">
          <ion-label>Tabs Secondary</ion-label>
        </syg-item>
        <syg-item button router-link="/lifecycle" id="lifecycle">
          <ion-label>Lifecycle</ion-label>
        </syg-item>
        <syg-item button router-link="/delayed-redirect" id="delayed-redirect">
          <ion-label>Delayed Redirect</ion-label>
        </syg-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonBackButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
