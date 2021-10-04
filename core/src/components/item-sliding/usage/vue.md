```html
<template>
  <syg-list>
    <!-- Sliding item with text options on both sides -->
    <syg-item-sliding>
      <syg-item-options side="start">
        <syg-item-option @click="favorite(item)">Favorite</syg-item-option>
        <syg-item-option color="danger" @click="share(item)">Share</syg-item-option>
      </syg-item-options>

      <syg-item>
        <syg-label>Item Options</syg-label>
      </syg-item>

      <syg-item-options side="end">
        <syg-item-option @click="unread(item)">Unread</syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with expandable options on both sides -->
    <syg-item-sliding>
      <syg-item-options side="start">
        <syg-item-option color="danger" expandable>
          Delete
        </syg-item-option>
      </syg-item-options>

      <syg-item>
        <syg-label>Expandable Options</syg-label>
      </syg-item>

      <syg-item-options side="end">
        <syg-item-option color="tertiary" expandable>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Multi-line sliding item with icon options on both sides -->
    <syg-item-sliding id="item100">
      <syg-item href="#">
        <syg-label>
          <h2>HubStruck Notifications</h2>
          <p>A new message in your network</p>
          <p>Oceanic Next has joined your network</p>
        </syg-label>
        <syg-note slot="end">
          10:45 AM
        </syg-note>
      </syg-item>

      <syg-item-options side="start">
        <syg-item-option>
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </syg-item-option>
      </syg-item-options>

      <syg-item-options side="end">
        <syg-item-option color="danger">
          <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </syg-item-option>
        <syg-item-option>
          <ion-icon slot="icon-only" :icon="star"></ion-icon>
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon start options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Start
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="start" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="start" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon end options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons End
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="end" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="end" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon top options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Top
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="top" :ios="ellipsis-horizontal" :md="ellipsis-vertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="top" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon bottom options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Bottom
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>
  </syg-list>
</template>

<script>
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList
} from '@ionic/vue';
import {
  archive,
  ellipsisHorizontal,
  ellipsisVertical,
  heart,
  star,
  trash
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList
  },
  setup() {
    return {
      archive,
      ellipsisHorizontal,
      ellipsisVertical,
      heart,
      star,
      trash
    }
  }
});
</script>
```
