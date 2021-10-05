<template>
  <ion-page :data-pageid="'tab1' + $props.id">
    <syg-header>
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Tab 1 Child {{ $props.id }}</syg-title>
      </syg-toolbar>
    </syg-header>
    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Tab 1 Child {{ $props.id }}</syg-title>
        </syg-toolbar>
      </syg-header>

      <syg-item router-link="childone" id="child-one">
        <ion-label>Tab 1 Child 1</ion-label>
      </syg-item>

      <syg-item router-link="childtwo" id="child-two">
        <ion-label>Tab 1 Child 2</ion-label>
      </syg-item>

    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButtons,
  IonBackButton,
  IonPage,
  IonHeader,
  IonItem,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue';

export default  {
  props: { id: String },
  components: {
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonItem,
    IonLabel,
    IonToolbar,
    IonTitle,
    IonContent
  }
}
</script>
