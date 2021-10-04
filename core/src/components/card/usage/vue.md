```html
<template>
  <syg-card>
    <syg-card-header>
      <syg-card-subtitle>Card Subtitle</syg-card-subtitle>
      <syg-card-title>Card Title</syg-card-title>
    </syg-card-header>

    <syg-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </syg-card-content>
  </syg-card>

  <syg-card>
    <syg-item>
      <ion-icon :icon="pin" slot="start"></ion-icon>
      <syg-label>syg-item in a card, icon left, button right</syg-label>
      <syg-button fill="outline" slot="end">View</syg-button>
    </syg-item>

    <syg-card-content>
      This is content, without any paragraph or header tags,
      within an syg-card-content element.
    </syg-card-content>
  </syg-card>

  <syg-card>
    <syg-item href="#" class="syg-activated">
      <ion-icon :icon="wifi" slot="start"></ion-icon>
      <syg-label>Card Link Item 1 activated</syg-label>
    </syg-item>

    <syg-item href="#">
      <ion-icon :icon="wine" slot="start"></ion-icon>
      <syg-label>Card Link Item 2</syg-label>
    </syg-item>

    <syg-item class="syg-activated">
      <ion-icon :icon="warning" slot="start"></ion-icon>
      <syg-label>Card Button Item 1 activated</syg-label>
    </syg-item>

    <syg-item>
      <ion-icon :icon="walk" slot="start"></ion-icon>
      <syg-label>Card Button Item 2</syg-label>
    </syg-item>
  </syg-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel }
  setup() {
    return { warning };
  }
});
</script>
```