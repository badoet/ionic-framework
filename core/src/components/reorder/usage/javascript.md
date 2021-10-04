
```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<syg-reorder-group disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <syg-item>
    <syg-label>
      Item 1
    </syg-label>
    <syg-reorder slot="end"></syg-reorder>
  </syg-item>

  <syg-item>
    <syg-label>
      Item 2
    </syg-label>
    <syg-reorder slot="end"></syg-reorder>
  </syg-item>

  <!-- Default reorder icon, start aligned items -->
  <syg-item>
    <syg-reorder slot="start"></syg-reorder>
    <syg-label>
      Item 3
    </syg-label>
  </syg-item>

  <syg-item>
    <syg-reorder slot="start"></syg-reorder>
    <syg-label>
      Item 4
    </syg-label>
  </syg-item>

  <!-- Custom reorder icon end items -->
  <syg-item>
    <syg-label>
      Item 5
    </syg-label>
    <syg-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </syg-reorder>
  </syg-item>

  <syg-item>
    <syg-label>
      Item 6
    </syg-label>
    <syg-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </syg-reorder>
  </syg-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <syg-reorder>
    <syg-item>
      <syg-label>
        Item 7
      </syg-label>
    </syg-item>
  </syg-reorder>

  <syg-reorder>
    <syg-item>
      <syg-label>
        Item 8
      </syg-label>
    </syg-item>
  </syg-reorder>
</syg-reorder-group>
```