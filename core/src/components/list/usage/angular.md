```html
<!-- List of Text Items -->
<syg-list>
  <syg-item>
    <syg-label>Pokémon Yellow</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Mega Man X</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>The Legend of Zelda</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Pac-Man</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Super Mario World</syg-label>
  </syg-item>
</syg-list>

<!-- List of Input Items -->
<syg-list>
  <syg-item>
    <syg-label>Input</syg-label>
    <syg-input></syg-input>
  </syg-item>
  <syg-item>
    <syg-label>Toggle</syg-label>
    <syg-toggle slot="end"></syg-toggle>
  </syg-item>
  <syg-item>
    <syg-label>Radio</syg-label>
    <syg-radio slot="end"></syg-radio>
  </syg-item>
  <syg-item>
    <syg-label>Checkbox</syg-label>
    <syg-checkbox slot="start"></syg-checkbox>
  </syg-item>
</syg-list>

<!-- List of Sliding Items -->
<syg-list>
  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option (click)="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option (click)="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-list>
```