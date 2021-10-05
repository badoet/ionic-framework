<template>
  <ion-page data-pageid="tab4">
    <syg-header>
      <syg-toolbar>
        <syg-title>Tab 4</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 4</syg-title>
        </syg-toolbar>
      </syg-header>

      <ExploreContainer name="Tab 4 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
