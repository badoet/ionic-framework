<template>
  <ion-page data-pageid="tab1-secondary">
    <syg-header>
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button default-href="/"></syg-back-button>
        </syg-buttons>
        <syg-title>Tab 1 - Secondary</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 1 - Secondary</syg-title>
        </syg-toolbar>
      </syg-header>

      <ExploreContainer name="Tab 1 page" />

      <syg-item router-link="/tabs" id="tabs-primary">
        <ion-label>Go to Primary Tabs</ion-label>
      </syg-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonBackButton, IonPage, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  components: { IonButtons, IonBackButton, ExploreContainer, IonHeader, IonItem, IonLabel, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
