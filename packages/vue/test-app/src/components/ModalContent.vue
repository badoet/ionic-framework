<template>
  <ion-page>
    <syg-header>
      <syg-toolbar>
        <syg-buttons>
          <syg-button @click="dismiss" id="dismiss">Dismiss</syg-button>
        </syg-buttons>
        <syg-title>Modal</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content class="ion-padding">
      {{ title }}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ModalContent',
  props: {
    title: { type: String, default: 'Default Title' }
  },
  components: {
    IonPage,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  },
  setup() {
    const dismiss = async () => {
      await modalController.dismiss();
    }

    return {
      dismiss
    }
  }
})
</script>
