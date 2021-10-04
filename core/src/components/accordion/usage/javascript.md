```html
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
<syg-accordion-group multiple="true" id="multiple">
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
<syg-accordion-group value="numbers" id="state">
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

<syg-button onclick="logAccordionValue()">Log Value of Accordion Group</syg-button>
<syg-button onclick="closeAccordion()">Close All Accordions</syg-button>

<script>
  const accordionGroup = document.querySelector('syg-accordion-group#state');
  let accordionGroupMultiple = document.querySelector('syg-accordion-group#multiple');

  accordionGroupMultiple.value = ['colors', 'numbers'];

  const logAccordionValue = () => {
    console.log(accordionGroup.value);
  }
  const closeAccordion = () => {
    accordionGroup.value = undefined;
  }
</script>
```
