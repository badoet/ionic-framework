<template>
  <ion-page>
    <syg-header>
      <syg-toolbar>
        <syg-title>Tab 3</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 3</syg-title>
        </syg-toolbar>
      </syg-header>

      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab3',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
