```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'accordion-example',
  styleUrl: 'accordion-example.css'
})
export const AccordionExample {
  private accordionGroupRef?: HTMLIonAccordionGroupEl;

  private logAccordionValue = () => {
    const { accordionGroupRef } = this;
    if (accordionGroupRef) {
      console.log(accordionGroupRef.value);
    }
  }

  private closeAccordion = () => {
    const { accordionGroupRef } = this;
    if (accordionGroupRef) {
      accordionGroupRef.value = undefined;
    }
  }

  render() {
    return [
      // Basic
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
      </syg-accordion-group>,

      // Custom Icon
      <syg-accordion-group>
        <syg-accordion value="colors" toggle-icon="arrow-down-circle">
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
        <syg-accordion value="shapes" toggle-icon="arrow-down-circle">
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
        <syg-accordion value="numbers" toggle-icon="arrow-down-circle">
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
      </syg-accordion-group>,

      // Open Accordion
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
      </syg-accordion-group>,

      // Multiple Accordions
      <syg-accordion-group multiple={true} value={['colors', 'numbers']}>
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
      </syg-accordion-group>,

      {/* Getting and setting the state of the accordion group */}
      <syg-accordion-group value="numbers" ref={el => this.accordionGroupRef = el}>
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
      </syg-accordion-group>,

      <syg-button onClick={() => logAccordionValue()}>Log Value of Accordion Group</syg-button>,
      <syg-button onClick={() => closeAccordion()}>Close All Accordions</syg-button>,
    ];
  }
);
```
