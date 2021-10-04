```html
<template>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button></syg-back-button>
    </syg-buttons>
    <syg-title>Back Button</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="secondary">
      <syg-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </syg-button>
      <syg-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Default Buttons</syg-title>
    <syg-buttons slot="primary">
      <syg-button color="secondary">
        <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
      </syg-button>
    </syg-buttons>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="primary">
      <syg-button @click="clickedStar()">
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Right side menu toggle</syg-title>
    <syg-buttons slot="end">
      <syg-menu-button auto-hide="false"></syg-menu-button>
    </syg-buttons>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons collapse="true">
      <syg-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Collapsible Buttons</syg-title>
  </syg-toolbar>
</template>

<script>
import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
import { personCircle, search } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar },
  setup() {
    const clickedStar = () => {
      console.log('Star clicked!');
    }
    return { personCircle, search, clickedStar };
  }
});
</script>
```