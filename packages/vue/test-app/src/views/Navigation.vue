<template>
  <ion-page data-pageid="navigation">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Navigation</syg-title>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Navigation</syg-title>
        </syg-toolbar>
      </syg-header>

      <div class="ion-padding">
        <syg-button expand="block" @click="openModal" id="open-nav-modal">Open Modal</syg-button>
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
  IonToolbar,
  modalController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
export default defineComponent({
  components: {
    IonButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    const openModal = async () => {
      const modal = await modalController.create({
        component: Nav
      });

      await modal.present();
    }
    return { openModal }
  }
});
</script>
