```html
<template>
  <syg-page>
    <syg-content>
      <syg-infinite-scroll>
        <syg-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data…">
        </syg-infinite-scroll-content>
      </syg-infinite-scroll>
    </syg-content>
  </syg-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage
 } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage
  }
});
```
