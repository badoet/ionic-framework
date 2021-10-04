```html
<template>
  <syg-header>
    <syg-toolbar>
      <syg-title>Header</syg-title>
    </syg-toolbar>
  </syg-header>

  <syg-content>
    <!-- fab placed to the top end -->
    <syg-fab vertical="top" horizontal="end" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the bottom end -->
    <syg-fab vertical="bottom" horizontal="end" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="arrowForwardCircle"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the top start -->
    <syg-fab vertical="top" horizontal="start" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="arrowBackCircle"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the bottom start -->
    <syg-fab vertical="bottom" horizontal="start" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="arrowUpCircle"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the (vertical) center and start -->
    <syg-fab vertical="center" horizontal="start" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="share"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the (vertical) center and end -->
    <syg-fab vertical="center" horizontal="end" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the top and end and on the top edge of the content overlapping header -->
    <syg-fab vertical="top" horizontal="end" edge slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="person"></ion-icon>
      </syg-fab-button>
    </syg-fab>

    <!-- fab placed to the bottom and start and on the bottom edge of the content overlapping footer with a list to the right -->
    <syg-fab vertical="bottom" horizontal="start" edge slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="settings"></ion-icon>
      </syg-fab-button>
      <syg-fab-list side="end">
        <syg-fab-button><ion-icon :icon="logoVimeo"></ion-icon></syg-fab-button>
      </syg-fab-list>
    </syg-fab>

    <!-- fab placed in the center of the content with a list on each side -->
    <syg-fab vertical="center" horizontal="center" slot="fixed">
      <syg-fab-button>
        <ion-icon :icon="share"></ion-icon>
      </syg-fab-button>
      <syg-fab-list side="top">
        <syg-fab-button><ion-icon :icon="logoVimeo"></ion-icon></syg-fab-button>
      </syg-fab-list>
      <syg-fab-list side="bottom">
        <syg-fab-button><ion-icon :icon="logoFacebook"></ion-icon></syg-fab-button>
      </syg-fab-list>
      <syg-fab-list side="start">
        <syg-fab-button><ion-icon :icon="logoInstagram"></ion-icon></syg-fab-button>
      </syg-fab-list>
      <syg-fab-list side="end">
        <syg-fab-button><ion-icon :icon="logoTwitter"></ion-icon></syg-fab-button>
      </syg-fab-list>
    </syg-fab>
  </syg-content>

  <syg-footer>
    <syg-toolbar>
      <syg-title>Footer</syg-title>
    </syg-toolbar>
  </syg-footer>
</template>

<script>
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {
  add,
  arrowBackCircle,
  arrowForwardCircle,
  arrowUpCircle,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoVimeo,
  person,
  settings,
  share
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      add,
      arrowBackCircle,
      arrowForwardCircle,
      arrowUpCircle,
      logoFacebook,
      logoInstagram,
      logoTwitter,
      logoVimeo,
      person,
      settings,
      share
    }
  }
});
</script>
```
