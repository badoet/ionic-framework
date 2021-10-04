```html
<template>
  <!-- Initial value -->
  <syg-datetime value="2012-12-15T13:47:20.789"></syg-datetime>
  
  <!-- Readonly -->
  <syg-datetime readonly></syg-datetime>
  
  <!-- Disabled -->
  <syg-datetime disabled></syg-datetime>
  
  <!-- Custom locale -->
  <syg-datetime locale="en-GB"></syg-datetime>
  
  <!-- Max and min -->
  <syg-datetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></syg-datetime>
  
  <!-- 15 minute increments -->
  <syg-datetime minute-values="0,15,30,45"></syg-datetime>
  
  <!-- Specific days/months/years --> 
  <syg-datetime month-values="6,7,8" year-values="2014,2015" day-values="01,02,03,04,05,06,08,09,10,11,12,13,14"></syg-datetime>
  
  <!-- Selecting time, no date -->
  <syg-datetime presentation="time"></syg-datetime>
  
  <!-- Selecting time first, date second -->
  <syg-datetime presentation="time-date"></syg-datetime>

  <!-- Full width size -->
  <syg-datetime size="cover"></syg-datetime>
  
  <!-- Custom Hour Cycle -->
  <syg-datetime hour-cycle="h23"></syg-datetime>
  
  <!-- Custom first day of week -->
  <syg-datetime first-day-of-week="1"></syg-datetime>

  <!-- Custom title -->
  <syg-datetime>
    <div slot="title">My Custom Title</div>
  </syg-datetime>

  <!-- Clear button -->
  <syg-datetime :show-clear-button="true"></syg-datetime>
  
  <!-- Custom buttons -->
  <syg-datetime ref="customDatetime">
    <syg-buttons slot="buttons">
      <syg-button @click="confirm()">Good to go!</syg-button>
      <syg-button @click="reset()">Reset</syg-button>
    </syg-buttons>
  </syg-datetime>
  
  <!-- Datetime in overlay -->
  <syg-button id="open-modal">Open Datetime Modal</syg-button>
  <syg-modal trigger="open-modal">
    <syg-content>
      <syg-datetime></syg-datetime>
    </syg-content>
  </syg-modal>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonModal
  } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonButton,
      IonButtons,
      IonContent,
      IonDatetime,
      IonModal
    },
    setup() {
      const customDatetime = ref();
      const confirm = () => {
        if (customDatetime.value === undefined) return;
        
        customDatetime.value.$el.confirm();
      }
      const reset = () => {
        if (customDatetime.value === undefined) return;
        
        customDatetime.value.$el.reset();
      }
      return {
        customDatetime,
        confirm,
        reset
      }
    }
  })
</script>
```