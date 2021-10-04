```html
<template>
  <syg-page>
    <syg-content class="syg-padding">
      <syg-button @click="openToast">Open Toast</syg-button>
      <syg-button @click="openToastOptions">Open Toast: Options</syg-button>
    </syg-content>
  </syg-page>
</template>

<script>
import { IonButton, IonContent, IonPage, toastController } from '@ionic/vue';
import { informationCircle } from 'ionicons/icons';

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openToast() {
      const toast = await toastController
        .create({
          message: 'Your settings have been saved.',
          duration: 2000
        })
      return toast.present();
    },
    async openToastOptions() {
      const toast = await toastController
        .create({
          header: 'Toast header',
          message: 'Click to Close',
          icon: informationCircle,
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              }
            }, {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        })
      await toast.present();

      const { role } = await toast.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
  },
}
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <syg-button @click="setOpen(true)">Show Toast</syg-button>
  <syg-toast
    :is-open="isOpenRef"
    message="Your settings have been saved."
    :duration="2000"
    @didDismiss="setOpen(false)"
  >
  </syg-toast>
</template>

<script>
import { IonToast, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonToast, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;

    return { isOpenRef, setOpen }
  }
});
</script>
```
