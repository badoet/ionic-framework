<template>
  <ion-page data-pageid="nestedchild">
    <ion-header :translucent="true">
      <ion-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <ion-title>Nested Child</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nested Child</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="ion-padding">
        <syg-button router-link="/tabs/tab1" id="nested-tabs">Tab 1</syg-button>
        <syg-button router-link="/nested/two" id="nested-child-two">Nested Child Two</syg-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NestedChild',
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
