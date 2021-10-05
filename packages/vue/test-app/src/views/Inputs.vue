<template>
  <ion-page data-pageid="inputs">
    <syg-header :translucent="true">
      <syg-toolbar>
        <syg-buttons>
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Inputs</syg-title>
      </syg-toolbar>
      <syg-toolbar>
        <ion-segment v-model="segment">
          <ion-segment-button value="dogs">
            <ion-label>Dogs</ion-label>
          </ion-segment-button>
          <ion-segment-button value="cats">
            <ion-label>Cats</ion-label>
          </ion-segment-button>
        </ion-segment>
      </syg-toolbar>
      <syg-toolbar>
        <ion-searchbar v-model="searchbar"></ion-searchbar>
      </syg-toolbar>
    </syg-header>

    <ion-content :fullscreen="true">
      <syg-header collapse="condense">
        <syg-toolbar>
          <syg-title size="large">Inputs</syg-title>
        </syg-toolbar>
      </syg-header>

      <syg-item>
        <ion-label>Checkbox</ion-label>
        <ion-checkbox slot="start" v-model="checkbox"></ion-checkbox>
      </syg-item>

      <syg-item>
        <ion-label>Toggle</ion-label>
        <ion-toggle slot="end" v-model="toggle"></ion-toggle>
      </syg-item>

      <syg-item>
        <ion-label>Input</ion-label>
        <ion-input slot="end" v-model="input"></ion-input>
      </syg-item>

      <syg-item>
        <ion-label>Range</ion-label>
        <ion-range :dual-knobs="true" :min="0" :max="100" slot="end" v-model="range"></ion-range>
      </syg-item>

      <syg-item>
        <ion-label>Textarea</ion-label>
        <ion-textarea slot="end" v-model="textarea"></ion-textarea>
      </syg-item>

      <syg-item>
        <ion-label>Datetime</ion-label>
        <ion-datetime v-model="datetime"></ion-datetime>
      </syg-item>

      <ion-radio-group v-model="radio">
        <syg-item>
          <ion-label>Red</ion-label>
          <ion-radio value="red"></ion-radio>
        </syg-item>
        <syg-item>
          <ion-label>Green</ion-label>
          <ion-radio value="green"></ion-radio>
        </syg-item>
        <syg-item>
          <ion-label>Blue</ion-label>
          <ion-radio value="blue"></ion-radio>
        </syg-item>
      </ion-radio-group>

      <syg-item>
        <ion-label>Select</ion-label>
        <ion-select v-model="select">
          <ion-select-option value="apples">Apples</ion-select-option>
          <ion-select-option value="bananas">Bananas</ion-select-option>
        </ion-select>
      </syg-item>

      <div class="ion-padding">
        Checkbox: {{ checkbox }}<br>
        Toggle: {{ toggle }}<br>
        Input: {{ input }}<br>
        Range: {{ range }}<br>
        Textarea: {{ textarea }}<br>
        Searchbar: {{ searchbar }}<br>
        Datetime: {{ datetime }}<br>
        Radio Group: {{ radio }}<br>
        Segment: {{ segment }}<br>
        Select: {{ select }}<br>

        <br>

        <syg-button expand="block" @click="reset" id="reset">Reset Values</syg-button>
        <syg-button expand="block" @click="set" id="set">Set Values</syg-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonDatetime,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToggle,
    IonToolbar
  },
  setup() {
    const checkbox = ref(false);
    const toggle = ref(false);
    const input = ref('');
    const range = ref({
      lower: 30,
      upper: 70
    });
    const textarea = ref('');
    const searchbar = ref('');
    const datetime = ref('');
    const radio = ref('red');
    const segment = ref('dogs');
    const select = ref('apples');

    const reset = () => {
      checkbox.value = false;
      toggle.value = false;
      input.value = '';
      range.value = {
        lower: 30,
        upper: 70
      };
      textarea.value = '';
      searchbar.value = '';
      datetime.value = '';
      radio.value = 'red';
      segment.value = 'dogs';
      select.value = 'apples';
    }

    const set = () => {
      checkbox.value = true;
      toggle.value = true;
      input.value = 'Hello World';
      range.value = {
        lower: 10,
        upper: 90
      }
      textarea.value = 'Lorem Ipsum';
      searchbar.value = 'Search Query';
      datetime.value = '2019-01-31';
      radio.value = 'blue';
      segment.value = 'cats';
      select.value = 'bananas';
    }

    return {
      checkbox,
      toggle,
      input,
      range,
      textarea,
      searchbar,
      datetime,
      radio,
      segment,
      select,

      reset,
      set
    }
  }
});
</script>
