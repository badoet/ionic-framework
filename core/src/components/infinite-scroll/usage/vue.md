```html
<template>
  <syg-page>
    <syg-content class="syg-padding">
      <syg-button @click="toggleInfiniteScroll" expand="block">
        Toggle Infinite Scroll
      </syg-button>
    
      <syg-list>
        <syg-item v-for="item in items" :key="item">
          <syg-label>{{ item }}</syg-label>
        </syg-item>
      </syg-list>
    
      <syg-infinite-scroll
        @ionInfinite="loadData($event)" 
        threshold="100px" 
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <syg-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </syg-infinite-scroll-content>
      </syg-infinite-scroll>
    </syg-content>
  </syg-page>
</template>

<script lang="ts">
import { 
  IonButton,
  IonContent, 
  IonInfiniteScroll, 
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
 } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
 
export default defineComponent({
  components: {
    IonButton,
    IonContent, 
    IonInfiniteScroll, 
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage
  },
  setup() {
    const isDisabled = ref(false);
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value;
    }
    const items = ref([]);
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    }
    
    const loadData = (ev: CustomEvent) => {
      setTimeout(() => {
        pushData();
        console.log('Loaded data');
        ev.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    }
    
    pushData();
    
    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items
    }
  }
});

</script>
```