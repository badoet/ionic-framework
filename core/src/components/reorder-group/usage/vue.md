```html
<template>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <syg-reorder-group @ionItemReorder="doReorder($event)" disabled="false">
    <!-- Default reorder icon, end aligned items -->
    <syg-item>
      <syg-label>
        Item 1
      </syg-label>
      <syg-reorder slot="end"></syg-reorder>
    </syg-item>

    <syg-item>
      <syg-label>
        Item 2
      </syg-label>
      <syg-reorder slot="end"></syg-reorder>
    </syg-item>

    <!-- Default reorder icon, start aligned items -->
    <syg-item>
      <syg-reorder slot="start"></syg-reorder>
      <syg-label>
        Item 3
      </syg-label>
    </syg-item>

    <syg-item>
      <syg-reorder slot="start"></syg-reorder>
      <syg-label>
        Item 4
      </syg-label>
    </syg-item>

    <!-- Custom reorder icon end items -->
    <syg-item>
      <syg-label>
        Item 5
      </syg-label>
      <syg-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </syg-reorder>
    </syg-item>

    <syg-item>
      <syg-label>
        Item 6
      </syg-label>
      <syg-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </syg-reorder>
    </syg-item>

    <!-- Items wrapped in a reorder, entire item can be dragged -->
    <syg-reorder>
      <syg-item>
        <syg-label>
          Item 7
        </syg-label>
      </syg-item>
    </syg-reorder>

    <syg-reorder>
      <syg-item>
        <syg-label>
          Item 8
        </syg-label>
      </syg-item>
    </syg-reorder>
  </syg-reorder-group>
</template>

<script>
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup
} from '@ionic/vue';
import { pizza } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonReorder,
    IonReorderGroup
  },
  setup() {
    const doReorder = (event: CustomEvent) => {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. This method can also be called directly
      // by the reorder group
      event.detail.complete();
    }
    return { doReorder, pizza }
  }
});
</script>
```

### Updating Data

```html
<script>
...
import { defineComponent, ref } from 'vue';

export default defineComponent({
  ...
  setup() {
    const items = ref([1, 2, 3, 4, 5]);

    const doReorder = (event: CustomEvent) => {
      // Before complete is called with the items they will remain in the
      // order before the drag
      console.log('Before complete', items.value);

      // Finish the reorder and position the item in the DOM based on
      // where the gesture ended. Update the items variable to the
      // new order of items
      items.value = event.detail.complete(items.value);

      // After complete is called the items will be in the new order
      console.log('After complete', items.value);
    }
    return { doReorder, items, ... }
  }
});
</script>
```
