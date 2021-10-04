```html
<!-- Default Checkbox -->
<syg-checkbox></syg-checkbox>

<!-- Disabled Checkbox -->
<syg-checkbox disabled></syg-checkbox>

<!-- Checked Checkbox -->
<syg-checkbox checked></syg-checkbox>

<!-- Checkbox Colors -->
<syg-checkbox color="primary"></syg-checkbox>
<syg-checkbox color="secondary"></syg-checkbox>
<syg-checkbox color="danger"></syg-checkbox>
<syg-checkbox color="light"></syg-checkbox>
<syg-checkbox color="dark"></syg-checkbox>

<!-- Checkboxes in a List -->
<syg-list>
  <syg-item>
    <syg-label>Pepperoni</syg-label>
    <syg-checkbox slot="end" value="pepperoni" checked></syg-checkbox>
  </syg-item>

  <syg-item>
    <syg-label>Sausage</syg-label>
    <syg-checkbox slot="end" value="sausage" disabled></syg-checkbox>
  </syg-item>

  <syg-item>
    <syg-label>Mushrooms</syg-label>
    <syg-checkbox slot="end" value="mushrooms"></syg-checkbox>
  </syg-item>
</syg-list>
```
