<template>
  <syg-header>
    <syg-toolbar>
      <syg-buttons>
        <syg-back-button></syg-back-button>
      </syg-buttons>
      <syg-title>Nav - Child</syg-title>
    </syg-toolbar>
  </syg-header>
  <ion-content class="ion-padding" id="nav-child-content">
    {{ title }}
  </ion-content>
</template>

<script lang="ts">
import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: { type: String, default: 'Default Title' }
  },
  components: {
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
  }
})
</script>
