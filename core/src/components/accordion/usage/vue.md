```html
<template>
  <!-- Basic -->
  <syg-accordion-group>
    <syg-accordion value="colors">
      <syg-item slot="header">
        <syg-label>Colors</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Red</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Green</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Blue</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="shapes">
      <syg-item slot="header">
        <syg-label>Shapes</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Circle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Triangle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Square</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="numbers">
      <syg-item slot="header">
        <syg-label>Numbers</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>1</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>2</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>3</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
  </syg-accordion-group>

  <!-- Custom Icon -->
  <syg-accordion-group>
    <syg-accordion value="colors" :toggle-icon="arrowDownCircle">
      <syg-item slot="header">
        <syg-label>Colors</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Red</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Green</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Blue</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="shapes" :toggle-icon="arrowDownCircle">
      <syg-item slot="header">
        <syg-label>Shapes</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Circle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Triangle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Square</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="numbers" :toggle-icon="arrowDownCircle">
      <syg-item slot="header">
        <syg-label>Numbers</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>1</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>2</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>3</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
  </syg-accordion-group>

  <!-- Open Accordion -->
  <syg-accordion-group value="colors">
    <syg-accordion value="colors">
      <syg-item slot="header">
        <syg-label>Colors</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Red</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Green</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Blue</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="shapes">
      <syg-item slot="header">
        <syg-label>Shapes</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Circle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Triangle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Square</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="numbers">
      <syg-item slot="header">
        <syg-label>Numbers</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>1</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>2</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>3</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
  </syg-accordion-group>

  <!-- Multiple Accordions -->
  <syg-accordion-group :multiple="true" :value="['colors', 'numbers']">
    <syg-accordion value="colors">
      <syg-item slot="header">
        <syg-label>Colors</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Red</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Green</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Blue</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="shapes">
      <syg-item slot="header">
        <syg-label>Shapes</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Circle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Triangle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Square</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="numbers">
      <syg-item slot="header">
        <syg-label>Numbers</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>1</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>2</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>3</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
  </syg-accordion-group>

  <!-- Getting and setting the state of the accordion group -->
  <syg-accordion-group value="numbers" ref="accordionGroup">
    <syg-accordion value="colors">
      <syg-item slot="header">
        <syg-label>Colors</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Red</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Green</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Blue</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="shapes">
      <syg-item slot="header">
        <syg-label>Shapes</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>Circle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Triangle</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Square</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
    <syg-accordion value="numbers">
      <syg-item slot="header">
        <syg-label>Numbers</syg-label>
      </syg-item>

      <syg-list slot="content">
        <syg-item>
          <syg-label>1</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>2</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>3</syg-label>
        </syg-item>
      </syg-list>
    </syg-accordion>
  </syg-accordion-group>

  <syg-button @click="logAccordionValue()">Log Value of Accordion Group</syg-button>
  <syg-button @click="closeAccordion()">Close All Accordions</syg-button>
</template>

<script>
  import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { arrowDownCircle } from 'ionicons/icons';

  export default defineComponent({
    components: { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel },
    setup() {
      const accordionGroup = ref();
      const logAccordionValue = () => {
        if (accordionGroup.value) {
          console.log(accordionGroup.value.$el.value);
        }
      }
      const closeAccordion = () => {
        if (accordionGroup.value) {
          accordionGroup.value.$el.value = undefined;
        }
      }
      return {
        accordionGroup,
        arrowDownCircle,
        closeAccordion,
        logAccordionValue
      }
    }
  });
</script>
```
