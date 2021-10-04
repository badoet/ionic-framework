```html
<template>
  <!-- Default Progressbar -->
  <syg-progress-bar></syg-progress-bar>

  <!-- Default Progressbar with 50 percent -->
  <syg-progress-bar value="0.5"></syg-progress-bar>

  <!-- Colorize Progressbar -->
  <syg-progress-bar color="primary" value="0.5"></syg-progress-bar>
  <syg-progress-bar color="secondary" value="0.5"></syg-progress-bar>

  <!-- Other types -->
  <syg-progress-bar value="0.25" buffer="0.5"></syg-progress-bar>
  <syg-progress-bar type="indeterminate"></syg-progress-bar>
  <syg-progress-bar type="indeterminate" reversed="true"></syg-progress-bar>
</template>

<script>
import { IonProgressBar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonProgressBar }
});
</script>
```
