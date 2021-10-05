<template>
  <ion-page data-pageid="tab1">
    <syg-header>
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button default-href="/"></syg-back-button>
        </syg-buttons>
        <syg-title>Tab 1</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 1</syg-title>
        </syg-toolbar>
      </syg-header>

      <ExploreContainer name="Tab 1 page" />

      <syg-item button router-link="/tabs/tab1/childone" id="child-one">
        <ion-label>Go to Tab 1 Child 1</ion-label>
      </syg-item>
      <syg-item button router-link="/nested" id="nested">
        <ion-label>Go to Nested Outlet</ion-label>
      </syg-item>

      <syg-item button router-link="/tabs-secondary" id="tabs-secondary">
        <ion-label>Go to Secondary Tabs</ion-label>
      </syg-item>

      <syg-item button router-link="/tabs" id="tabs-primary">
        <ion-label>Go to Primary Tabs</ion-label>
      </syg-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonBackButton, IonPage, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { IonButtons, IonBackButton, ExploreContainer, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
