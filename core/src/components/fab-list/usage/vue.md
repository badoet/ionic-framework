```html
<template>
  <syg-fab vertical="bottom" horizontal="end">
    <syg-fab-button>Share</syg-fab-button>

    <syg-fab-list side="top">
      <syg-fab-button>Facebook</syg-fab-button>
      <syg-fab-button>Twitter</syg-fab-button>
      <syg-fab-button>Youtube</syg-fab-button>
    </syg-fab-list>

    <syg-fab-list side="start">
      <syg-fab-button>Vimeo</syg-fab-button>
    </syg-fab-list>

  </syg-fab>
</template>

<script>
import { IonFab, IonFabButton, IonFabList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonFab, IonFabButton, IonFabList }
});
</script>
```
