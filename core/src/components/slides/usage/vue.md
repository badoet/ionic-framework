```html
<template>
  <syg-slides pager="true" :options="slideOpts">
    <syg-slide>
      <h1>Slide 1</h1>
    </syg-slide>
    <syg-slide>
      <h1>Slide 2</h1>
    </syg-slide>
    <syg-slide>
      <h1>Slide 3</h1>
    </syg-slide>
  </syg-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>
```
