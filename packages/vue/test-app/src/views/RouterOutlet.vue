<template>
  <ion-page data-pageid="routeroutlet">
    <ion-header>
      <ion-toolbar>
        <syg-buttons slot="start">
          <syg-button id="inbox" router-link="/nested/inbox" router-direction="root">Inbox</syg-button>
          <syg-button id="trash" router-link="/nested/trash" router-direction="root">Trash</syg-button>
          <syg-button id="outbox" router-link="/nested/outbox" router-direction="root">Outbox</syg-button>
          <syg-button id="spam" router-link="/nested/spam" router-direction="root">Spam</syg-button>
          <syg-button id="other" router-link="/nested/two" router-direction="root">Other</syg-button>
        </syg-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonButtons,
  IonButton,
  IonToolbar,
  IonContent,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RouterOutlet',
  components: {
    IonHeader,
    IonButtons,
    IonButton,
    IonToolbar,
    IonContent,
    IonPage,
    IonRouterOutlet
  }
});
</script>
