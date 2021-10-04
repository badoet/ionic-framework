```html
<!-- Default Toggle -->
<syg-toggle></syg-toggle>

<!-- Disabled Toggle -->
<syg-toggle disabled></syg-toggle>

<!-- Checked Toggle -->
<syg-toggle checked></syg-toggle>

<!-- Toggle Colors -->
<syg-toggle color="primary"></syg-toggle>
<syg-toggle color="secondary"></syg-toggle>
<syg-toggle color="danger"></syg-toggle>
<syg-toggle color="light"></syg-toggle>
<syg-toggle color="dark"></syg-toggle>

<!-- Toggles in a List -->
<syg-list>
  <syg-item>
    <syg-label>Pepperoni</syg-label>
    <syg-toggle slot="end" value="pepperoni" checked></syg-toggle>
  </syg-item>

  <syg-item>
    <syg-label>Sausage</syg-label>
    <syg-toggle slot="end" value="sausage" disabled></syg-toggle>
  </syg-item>

  <syg-item>
    <syg-label>Mushrooms</syg-label>
    <syg-toggle slot="end" value="mushrooms"></syg-toggle>
  </syg-item>
</syg-list>
```
