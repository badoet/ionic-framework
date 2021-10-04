<template>
  <ion-header>
    <ion-toolbar>
      <syg-buttons>
        <syg-button @click="dismiss">Dismiss</syg-button>
      </syg-buttons>
      <ion-title>Nav - Root</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <syg-button expand="block" @click="pushPage" id="push-nav-child">Go to Nav Child</syg-button>
  </ion-content>
</template>

<script lang="ts">
import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController
} from '@ionic/vue';
import { defineComponent } from 'vue';
import NavChild from '@/components/NavChild.vue';

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  },
  methods: {
    pushPage: function() {
      const ionNav = document.querySelector('ion-nav') as any;
      ionNav.push(NavChild, { title: 'Custom Title' });
    },
    dismiss: async function() {
      await modalController.dismiss();
    }
  }
})
</script>
