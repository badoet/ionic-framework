```html
<template>
  <syg-item>
    <syg-label>Select</syg-label>
    <syg-select>
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption }
});
</script>
```

### Customizing Options

```html
<template>
  <syg-item>
    <syg-label>Select: Alert Interface</syg-label>
    <syg-select :interface-options="options">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Select: Alert Interface (Multiple Selection)</syg-label>
    <syg-select :interface-options="options" multiple="true">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Select: Popover Interface</syg-label>
    <syg-select interface="popover" :interface-options="options">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>

  <syg-item>
    <syg-label>Select: Action Sheet Interface</syg-label>
    <syg-select interface="action-sheet" :interface-options="options">
      <syg-select-option value="brown">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };

    return { options }
  }
});
</script>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* Action Sheet Interface: set color for the action sheet using its button CSS variables */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* Alert Interface: set color for alert options (single selection) */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* Alert Interface: set color for alert options (multiple selection) */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* Alert Interface: set color for checked alert options (single selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-radio-label {
  color: #79193b;
}

/* Alert Interface: set color for checked alert options (multiple selection) */
.my-custom-interface .select-interface-option[aria-checked=true] .alert-checkbox-label {
  color: #79193b;
}
```

> Note: In the CSS examples, some of the selectors could be combined together, but are separated out in order to better explain what each selector is for.


### Customizing Individual Options

To customize an individual option, set a class on the `syg-select-option`:

```html
<template>
  <syg-item>
    <syg-label>Select</syg-label>
    <syg-select interface="popover" :interface-options="options">
      <syg-select-option value="brown" class="brown-option">Brown</syg-select-option>
      <syg-select-option value="blonde">Blonde</syg-select-option>
      <syg-select-option value="black">Black</syg-select-option>
      <syg-select-option value="red">Red</syg-select-option>
    </syg-select>
  </syg-item>
</template>

<script>
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  setup() {
    const options: any = {
      cssClass: 'my-custom-interface'
    };

    return { options }
  }
});
</script>
```

```css
/* Popover Interface: set color for the popover using Item's CSS variables */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```
