```html
<template>
  <syg-grid>
    <syg-row>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="6">
        syg-col [size="6"]
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
      <syg-col size="3" offset="3">
        syg-col [size="3"] [offset="3"]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col class="syg-align-self-start">
        syg-col [start]
      </syg-col>
      <syg-col class="syg-align-self-center">
        syg-col [center]
      </syg-col>
      <syg-col class="syg-align-self-end">
        syg-col [end]
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-start">
      <syg-col>
        [start] syg-col
      </syg-col>
      <syg-col>
        [start] syg-col
      </syg-col>
      <syg-col class="syg-align-self-end">
        [start] syg-col [end]
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-center">
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-end">
      <syg-col>
        [end] syg-col
      </syg-col>
      <syg-col class="syg-align-self-start">
        [end] syg-col [start]
      </syg-col>
      <syg-col>
        [end] syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="6" size-lg offset="3">
        syg-col [size="6"] [size-lg] [offset="3"]
      </syg-col>
      <syg-col size="3" size-lg>
        syg-col [size="3"] [size-lg]
      </syg-col>
    </syg-row>
  </syg-grid>
</template>

<script>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCol, IonGrid, IonRow }
});
</script>
```