### Default

```html
<template>
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Colors

```html
<template>
  <syg-breadcrumbs color="secondary">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Breadcrumbs with Icon

```html
<template>
  <!-- Icon start -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      <ion-icon slot="start" :icon="home"></ion-icon>
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#files">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Files
    </syg-breadcrumb>
    <syg-breadcrumb href="#projects">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Projects
    </syg-breadcrumb>
    <syg-breadcrumb href="#user-research">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      User Research
    </syg-breadcrumb>
    <syg-breadcrumb>
      <ion-icon slot="start" :icon="document"></ion-icon>
      Survey.txt
    </syg-breadcrumb>
  </syg-breadcrumbs>

  <!-- Icon end -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#files">
      Files
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#projects">
      Projects
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#user-research">
      User Research
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb>
      Survey.txt
      <ion-icon slot="end" :icon="document"></ion-icon>
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { document, folder, home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { document, folder, home }
  }
});
</script>
```

### Custom Separator

```html
<template>
  <!-- Custom separator text -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>

  <!-- Custom separator icon -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      Home
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { arrowForward }
  }
});
</script>
```

### Max Items

```html
<template>
  <!-- Max Items -->
  <syg-breadcrumbs :max-items="4">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Items Before or After Collapse

```html
<template>
  <!-- Items before collapse -->
  <syg-breadcrumbs :max-items="4" :items-before-collapse="2">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>

  <!-- Items after collapse -->
  <syg-breadcrumbs :max-items="4" :items-after-collapse="3">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>

  <!-- Items before and after collapse -->
  <syg-breadcrumbs :max-items="4" :items-before-collapse="0" :items-after-collapse="3">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Expand on Collapsed Indicator Click

```html
<template>
  <syg-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  setup() {
    const maxBreadcrumbs = ref(4);

    return { maxBreadcrumbs };
  },
  methods: {
    expandBreadcrumbs() {
      maxBreadcrumbs.value = undefined;
    }
  }
});
</script>
```


### Popover on Collapsed Indicator Click

```html
<template>
  <syg-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <syg-breadcrumb href="#">
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBadge, IonItem, IonLabel, popoverController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ListPopover from './popover.vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  methods: {
    async presentPopover(ev: Event) {
      const popover = await popoverController.create({
        component: ListPopover,
        componentProps: {
          collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
        },
        event: ev
      });
      await popover.present();
    },
  }
});
</script>
```

```html
<template>
  <syg-content>
    <syg-list>
      <syg-item v-for="breadcrumb in $props.collapsedBreadcrumbs" :href="breadcrumb.href">
        <syg-label>{{ breadcrumb.textContent }}</syg-label>
      </syg-item>
    </syg-list>
  </syg-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListPopover',
  props: {
    collapsedBreadcrumbs: { type: Array, default: [] }
  },
  components: { IonContent, IonItem, IonLabel, IonList }
});
</script>
```
