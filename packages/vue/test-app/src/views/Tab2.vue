<template>
  <ion-page data-pageid="tab2">
    <syg-header>
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button default-href="/"></syg-back-button>
        </syg-buttons>
        <syg-title>Tab 2</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 2</syg-title>
        </syg-toolbar>
      </syg-header>

      <syg-item button router-link="/routing" id="routing">
        <ion-label>Go to /routing</ion-label>
      </syg-item>
    </ion-content>
  </ion-page>
</template>

<script>
  import {
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  } from '@ionic/vue';

  export default {
    components: {
      IonButtons,
      IonBackButton,
      IonItem,
      IonLabel,
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent
    }
  }
</script>
