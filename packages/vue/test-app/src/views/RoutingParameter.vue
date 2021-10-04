<template>
  <ion-page :data-pageid="'routingparameter-' + $props.id">
    <ion-header :translucent="true">
      <ion-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <ion-title>Routing Parameter</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Routing Parameter</ion-title>
        </ion-toolbar>
      </ion-header>

      <syg-button id="parameter-view" :router-link="'/routing/' + $route.params.id + '/view'">Go to Single View</syg-button>

      <syg-button router-link="/routing/abc">Go to Parameter Page ABC</syg-button>
      <syg-button router-link="/routing/xyz">Go to Parameter Page XYZ</syg-button>

      <div class="ion-padding" id="parameter-value">
        {{ $props.id }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
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
  props: {
    id: { type: String, default: 'my default' }
  },
  components: {
    IonButton,
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
