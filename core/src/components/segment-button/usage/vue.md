```html
<template>
  <!-- Segment buttons with text and click listener -->
  <syg-segment @ionChange="segmentChanged($event)">
    <syg-segment-button>
      <syg-label>Friends</syg-label>
    </syg-segment-button>
    <syg-segment-button>
      <syg-label>Enemies</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment buttons with the first checked and the last disabled -->
  <syg-segment value="paid">
    <syg-segment-button value="paid">
      <syg-label>Paid</syg-label>
    </syg-segment-button>
    <syg-segment-button value="free">
      <syg-label>Free</syg-label>
    </syg-segment-button>
    <syg-segment-button disabled value="top">
      <syg-label>Top</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment buttons with values and icons -->
  <syg-segment>
    <syg-segment-button value="camera">
      <ion-icon :icon="camera"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="bookmark">
      <ion-icon :icon="bookmark"></ion-icon>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment with a value that checks the last button -->
  <syg-segment value="shared">
    <syg-segment-button value="bookmarks">
      <syg-label>Bookmarks</syg-label>
    </syg-segment-button>
    <syg-segment-button value="reading">
      <syg-label>Reading List</syg-label>
    </syg-segment-button>
    <syg-segment-button value="shared">
      <syg-label>Shared Links</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Label only -->
  <syg-segment value="1">
    <syg-segment-button value="1">
      <syg-label>Item One</syg-label>
    </syg-segment-button>
    <syg-segment-button value="2">
      <syg-label>Item Two</syg-label>
    </syg-segment-button>
    <syg-segment-button value="3">
      <syg-label>Item Three</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Icon only -->
  <syg-segment value="heart">
    <syg-segment-button value="call">
      <ion-icon :icon="call"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="heart">
      <ion-icon :icon="heart"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="pin">
      <ion-icon :icon="pin"></ion-icon>
    </syg-segment-button>
  </syg-segment>

  <!-- Icon top -->
  <syg-segment value="2">
    <syg-segment-button value="1">
      <syg-label>Item One</syg-label>
      <ion-icon :icon="call"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="2">
      <syg-label>Item Two</syg-label>
      <ion-icon :icon="heart"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="3">
      <syg-label>Item Three</syg-label>
      <ion-icon :icon="pin"></ion-icon>
    </syg-segment-button>
  </syg-segment>

  <!-- Icon bottom -->
  <syg-segment value="1">
    <syg-segment-button value="1" layout="icon-bottom">
      <ion-icon :icon="call"></ion-icon>
      <syg-label>Item One</syg-label>
    </syg-segment-button>
    <syg-segment-button value="2" layout="icon-bottom">
      <ion-icon :icon="heart"></ion-icon>
      <syg-label>Item Two</syg-label>
    </syg-segment-button>
    <syg-segment-button value="3" layout="icon-bottom">
      <ion-icon :icon="pin"></ion-icon>
      <syg-label>Item Three</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Icon start -->
  <syg-segment value="1">
    <syg-segment-button value="1" layout="icon-start">
      <syg-label>Item One</syg-label>
      <ion-icon :icon="call"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="2" layout="icon-start">
      <syg-label>Item Two</syg-label>
      <ion-icon :icon="heart"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="3" layout="icon-start">
      <syg-label>Item Three</syg-label>
      <ion-icon :icon="pin"></ion-icon>
    </syg-segment-button>
  </syg-segment>

  <!-- Icon end -->
  <syg-segment value="1">
    <syg-segment-button value="1" layout="icon-end">
      <ion-icon :icon="call"></ion-icon>
      <syg-label>Item One</syg-label>
    </syg-segment-button>
    <syg-segment-button value="2" disabled layout="icon-end">
      <ion-icon :icon="heart"></ion-icon>
      <syg-label>Item Two</syg-label>
    </syg-segment-button>
    <syg-segment-button value="3" layout="icon-end">
      <ion-icon :icon="pin"></ion-icon>
      <syg-label>Item Three</syg-label>
    </syg-segment-button>
  </syg-segment>
</template>

<script lang="ts">
import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
import { bookmark, call, camera, heart, pin } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonIcon, IonLabel, IonSegment, IonSegmentButtonr },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  }
  setup() {
    return {
      bookmark,
      call,
      camera,
      heart,
      pin
    }
  }
});
</script>
```
