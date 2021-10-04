```html
<!-- Default Item -->
<syg-item>
  <syg-label>
    Item
  </syg-label>
</syg-item>

<!-- Item as a Button -->
<syg-item button onclick="buttonClick()">
  <syg-label>
    Button Item
  </syg-label>
</syg-item>

<!-- Item as an Anchor -->
<syg-item href="https://www.ionicframework.com">
  <syg-label>
    Anchor Item
  </syg-label>
</syg-item>

<syg-item color="secondary">
  <syg-label>
    Secondary Color Item
  </syg-label>
</syg-item>
```

### Detail Arrows

```html
<syg-item detail>
  <syg-label>
    Standard Item with Detail Arrow
  </syg-label>
</syg-item>

<syg-item button onclick="buttonClick()" detail>
  <syg-label>
    Button Item with Detail Arrow
  </syg-label>
</syg-item>

<syg-item detail="false" href="https://www.ionicframework.com">
  <syg-label>
    Anchor Item with no Detail Arrow
  </syg-label>
</syg-item>
```

### List Items

```html
<syg-list>
  <syg-item>
    <syg-label>
      Item
    </syg-label>
  </syg-item>

  <syg-item lines="none">
    <syg-label>
      No Lines Item
    </syg-label>
  </syg-item>

  <syg-item>
    <syg-label class="syg-text-wrap">
    Multiline text that should wrap when it is too long
    to fit on one line in the item.
    </syg-label>
  </syg-item>

  <syg-item>
    <syg-label class="syg-text-wrap">
      <syg-text color="primary">
        <h3>H3 Primary Title</h3>
      </syg-text>
      <p>Paragraph line 1</p>
      <syg-text color="secondary">
        <p>Paragraph line 2 secondary</p>
      </syg-text>
    </syg-label>
  </syg-item>

  <syg-item lines="full">
    <syg-label>
      Item with Full Lines
    </syg-label>
  </syg-item>

</syg-list>
```

### Item Lines

```html
<!-- Item Inset Lines -->
<syg-item lines="inset">
  <syg-label>Item Lines Inset</syg-label>
</syg-item>

<!-- Item Full Lines -->
<syg-item lines="full">
  <syg-label>Item Lines Full</syg-label>
</syg-item>

<!-- Item None Lines -->
<syg-item lines="none">
  <syg-label>Item Lines None</syg-label>
</syg-item>

<!-- List Full Lines -->
<syg-list lines="full">
  <syg-item>
    <syg-label>Full Lines Item 1</syg-label>
  </syg-item>

  <syg-item>
    <syg-label>Full Lines Item 2</syg-label>
  </syg-item>
</syg-list>

<!-- List Inset Lines -->
<syg-list lines="inset">
  <syg-item>
    <syg-label>Inset Lines Item 1</syg-label>
  </syg-item>

  <syg-item>
    <syg-label>Inset Lines Item 2</syg-label>
  </syg-item>
</syg-list>

<!-- List No Lines -->
<syg-list lines="none">
  <syg-item>
    <syg-label>No lines Item 1</syg-label>
  </syg-item>

  <syg-item>
    <syg-label>No lines Item 2</syg-label>
  </syg-item>

  <syg-item>
    <syg-label>No lines Item 3</syg-label>
  </syg-item>
</syg-list>
```


### Media Items

```html
<syg-item button onclick="testClick()">
  <syg-avatar slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
  </syg-avatar>
  <syg-label>
    Avatar Start, Button Item
  </syg-label>
</syg-item>

<syg-item href="#">
  <syg-label>
    Thumbnail End, Anchor Item
  </syg-label>
  <syg-thumbnail slot="end">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
  </syg-thumbnail>
</syg-item>

<syg-item>
  <syg-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
  </syg-thumbnail>
  <syg-label>
    <h2>H2 Title Text</h2>
    <p>Button on right</p>
  </syg-label>
  <syg-button fill="outline" slot="end">View</syg-button>
</syg-item>

<syg-item button onclick="testClick()">
  <syg-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==">
  </syg-thumbnail>
  <syg-label>
    <h3>H3 Title Text</h3>
    <p>Icon on right</p>
  </syg-label>
  <ion-icon name="close-circle" slot="end"></ion-icon>
</syg-item>
```

### Buttons in Items

```html
<syg-item>
  <syg-button slot="start">
    Start
  </syg-button>
  <syg-label>Button Start/End</syg-label>
  <syg-button slot="end">
    End
  </syg-button>
</syg-item>

<syg-item>
  <syg-button slot="start">
    Start Icon
    <ion-icon name="home" slot="end"></ion-icon>
  </syg-button>
  <syg-label>Buttons with Icons</syg-label>
  <syg-button slot="end">
    <ion-icon name="star" slot="end"></ion-icon>
    End Icon
  </syg-button>
</syg-item>

<syg-item>
  <syg-button slot="start">
    <ion-icon slot="icon-only" name="navigate"></ion-icon>
  </syg-button>
  <syg-label>Icon only Buttons</syg-label>
  <syg-button slot="end">
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </syg-button>
</syg-item>
```

### Icons in Items

```html
<syg-item>
  <syg-label>
    Icon End
  </syg-label>
  <ion-icon name="informatsyg-circle" slot="end"></ion-icon>
</syg-item>

<syg-item>
  <syg-label>
    Large Icon End
  </syg-label>
  <ion-icon name="informatsyg-circle" size="large" slot="end"></ion-icon>
</syg-item>

<syg-item>
  <syg-label>
    Small Icon End
  </syg-label>
  <ion-icon name="informatsyg-circle" size="small" slot="end"></ion-icon>
</syg-item>

<syg-item>
  <ion-icon name="star" slot="start"></ion-icon>
  <syg-label>
    Icon Start
  </syg-label>
</syg-item>

<syg-item>
  <syg-label>
    Two Icons End
  </syg-label>
  <ion-icon name="checkmark-circle" slot="end"></ion-icon>
  <ion-icon name="shuffle" slot="end"></ion-icon>
</syg-item>
```

### Item Inputs

```html
<syg-item>
  <syg-label position="floating">Datetime</syg-label>
  <syg-datetime></syg-datetime>
</syg-item>

<syg-item>
  <syg-label position="floating">Select</syg-label>
  <syg-select>
    <syg-select-option value="">No Game Console</syg-select-option>
    <syg-select-option value="nes">NES</syg-select-option>
    <syg-select-option value="n64" selected>Nintendo64</syg-select-option>
    <syg-select-option value="ps">PlayStation</syg-select-option>
    <syg-select-option value="genesis">Sega Genesis</syg-select-option>
    <syg-select-option value="saturn">Sega Saturn</syg-select-option>
    <syg-select-option value="snes">SNES</syg-select-option>
  </syg-select>
</syg-item>

<syg-item>
  <syg-label>Toggle</syg-label>
  <syg-toggle slot="end"></syg-toggle>
</syg-item>

<syg-item>
  <syg-label position="floating">Floating Input</syg-label>
  <syg-input></syg-input>
</syg-item>

<syg-item>
  <syg-label>Input (placeholder)</syg-label>
  <syg-input placeholder="Placeholder"></syg-input>
</syg-item>

<syg-item fill="solid">
  <syg-label position="floating">Input (Fill: Solid)</syg-label>
  <syg-input></syg-input>
</syg-item>

<syg-item fill="outline">
  <syg-label position="floating">Input (Fill: Outline)</syg-label>
  <syg-input></syg-input>
</syg-item>

<syg-item>
  <syg-label>Helper and Error Text</syg-label>
  <syg-input></syg-input>
  <syg-note slot="helper">Helper Text</syg-note>
  <syg-note slot="error">Error Text</syg-note>
</syg-item>

<syg-item>
  <syg-label>Checkbox</syg-label>
  <syg-checkbox slot="start"></syg-checkbox>
</syg-item>

<syg-item>
  <syg-label>Range</syg-label>
  <syg-range></syg-range>
</syg-item>
```
