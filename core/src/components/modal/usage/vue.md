```html
<template>
  <syg-header>
    <syg-toolbar>
      <syg-title>{{ title }}</syg-title>
    </syg-toolbar>
  </syg-header>
  <syg-content class="syg-padding">
    {{ content }}
  </syg-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar }
});
</script>
```

```html
<template>
  <syg-page>
    <syg-content class="syg-padding">
      <syg-button @click="openModal">Open Modal</syg-button>
    </syg-content>
  </syg-page>
</template>

<script>
import { IonButton, IonContent, IonPage, modalController } from '@ionic/vue';
import Modal from './modal.vue'

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },
  },
}
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <syg-button @click="setOpen(true)">Show Modal</syg-button>
  <syg-modal
    :is-open="isOpenRef"
    css-class="my-custom-class"
    @didDismiss="setOpen(false)"
  >
    <Modal :data="data"></Modal>
  </syg-modal>
</template>

<script>
import { IonModal, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import Modal from './modal.vue'

export default defineComponent({
  components: { IonModal, IonButton, Modal },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const data = { content: 'New Content' };
    return { isOpenRef, setOpen, data }
  }
});
</script>
```

> If you need a wrapper element inside of your modal component, we recommend using an `<syg-page>` so that the component dimensions are still computed properly.

### Card Modals

Modals in iOS mode have the ability to be presented in a card-style and swiped to close. The card-style presentation and swipe to close gesture are not mutually exclusive, meaning you can pick and choose which features you want to use. For example, you can have a card-style modal that cannot be swiped or a full sized modal that can be swiped.

> Card style modals when running on iPhone-sized devices do not have backdrops. As a result, the `--backdrop-opacity` variable will not have any effect.

```html
<template>
  <syg-page>
    <syg-content>
      <syg-button @click="setOpen(true)">Show Modal</syg-button>
      <syg-modal
        :is-open="isOpenRef"
        css-class="my-custom-class"
        :swipe-to-close="true"
        :presenting-element="$parent.$refs.ionRouterOutlet"
        @didDismiss="setOpen(false)"
      >
        <Modal :data="data"></Modal>
      </syg-modal>
    </syg-content>
  </syg-page>
</template>

<script lang="ts">
import { IonModal, IonButton, IonContent, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import Modal from './modal.vue'

export default defineComponent({
  components: { IonModal, IonButton, Modal, IonContent, IonPage },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const data = { content: 'New Content' };
    return { isOpenRef, setOpen, data }
  }
});
</script>
```

### Sheet Modals

**Controller**
```html
<template>
  <syg-page>
    <syg-content class="syg-padding">
      <syg-button @click="openModal()">Open Modal</syg-button>
    </syg-content>
  </syg-page>
</template>

<script>
import { IonButton, IonContent, IonPage, modalController } from '@ionic/vue';
import Modal from './modal.vue'

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: Modal,
          initialBreakpoint: 0.5,
          breakpoints: [0, 0.5, 1]
        })
      return modal.present();
    },
  },
}
</script>
```

**Inline**
```html
<template>
  <syg-page>
    <syg-content>
      <syg-button @click="setOpen(true)">Show Modal</syg-button>
      <syg-modal
        :is-open="isOpenRef"
        :initial-breakpoint="0.5"
        :breakpoints="[0, 0.5, 1]"
        @didDismiss="setOpen(false)"
      >
        <Modal></Modal>
      </syg-modal>
    </syg-content>
  </syg-page>
</template>

<script lang="ts">
import { IonModal, IonButton, IonContent, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import Modal from './modal.vue'

export default defineComponent({
  components: { IonModal, IonButton, Modal, IonContent, IonPage },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    return { isOpenRef, setOpen }
  }
});
</script>
```