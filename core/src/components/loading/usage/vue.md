```html
<template>
  <syg-button @click="presentLoading">Show Loading</syg-button>
  <br />
  <syg-button @click="presentLoadingWithOptions">Show Loading</syg-button>
</template>

<script>

<script>
import { IonButton, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: this.timeout,
        });
        
      await loading.present();
      
      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
    async presentLoadingWithOptions() {
      const loading = await loadingController
        .create({
          spinner: null,
          duration: this.timeout,
          message: 'Click the backdrop to dismiss early...',
          translucent: true,
          cssClass: 'custom-class custom-loading',
          backdropDismiss: true
        });
        
      await loading.present();
        
      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
  },
  components: { IonButton }
});
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <syg-button @click="setOpen(true)">Show Loading</syg-button>
  <syg-loading
    :is-open="isOpenRef"
    cssClass="my-custom-class"
    message="Please wait..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </syg-loading>
</template>

<script>
import { IonLoading, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  components: { IonLoading, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    
    return { isOpenRef, setOpen }
  }
});
</script>
```
