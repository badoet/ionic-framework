<template>
  <ion-page :data-pageid="'routingparameter-' + $props.id">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Routing Parameter</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Routing Parameter</syg-title>
        </syg-toolbar>
      </syg-header>

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
