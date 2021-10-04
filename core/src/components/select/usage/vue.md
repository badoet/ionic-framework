### Single Selection

```html
<template>
  <syg-list>
    <syg-list-header>
      <syg-label>
        Single Selection
      </syg-label>
    </syg-list-header>

    <syg-item>
      <syg-label>Gender</syg-label>
      <syg-select placeholder="Select One">
        <syg-select-option value="f">Female</syg-select-option>
        <syg-select-option value="m">Male</syg-select-option>
      </syg-select>
    </syg-item>

    <syg-item>
      <syg-label>Hair Color</syg-label>
      <syg-select value="brown" ok-text="Okay" cancel-text="Dismiss">
        <syg-select-option value="brown">Brown</syg-select-option>
        <syg-select-option value="blonde">Blonde</syg-select-option>
        <syg-select-option value="black">Black</syg-select-option>
        <syg-select-option value="red">Red</syg-select-option>
      </syg-select>
    </syg-item>

  </syg-list>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  }
});
</script>
```

### Multiple Selection

```html
<template>
  <syg-list>
    <syg-list-header>
      <syg-label>
        Multiple Selection
      </syg-label>
    </syg-list-header>

    <syg-item>
      <syg-label>Toppings</syg-label>
      <syg-select multiple="true" cancel-text="Nah" ok-text="Okay!">
        <syg-select-option value="bacon">Bacon</syg-select-option>
        <syg-select-option value="olives">Black Olives</syg-select-option>
        <syg-select-option value="xcheese">Extra Cheese</syg-select-option>
        <syg-select-option value="peppers">Green Peppers</syg-select-option>
        <syg-select-option value="mushrooms">Mushrooms</syg-select-option>
        <syg-select-option value="onions">Onions</syg-select-option>
        <syg-select-option value="pepperoni">Pepperoni</syg-select-option>
        <syg-select-option value="pineapple">Pineapple</syg-select-option>
        <syg-select-option value="sausage">Sausage</syg-select-option>
        <syg-select-option value="Spinach">Spinach</syg-select-option>
      </syg-select>
    </syg-item>

    <syg-item>
      <syg-label>Pets</syg-label>
      <syg-select multiple="true" :value=['bird', 'dog']>
        <syg-select-option value="bird">Bird</syg-select-option>
        <syg-select-option value="cat">Cat</syg-select-option>
        <syg-select-option value="dog">Dog</syg-select-option>
        <syg-select-option value="honeybadger">Honey Badger</syg-select-option>
      </syg-select>
    </syg-item>
  </syg-list>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  }
});
</script>
```

### Interface Options

```html
<template>
  <syg-list>
    <syg-list-header>
      <syg-label>
        Interface Options
      </syg-label>
    </syg-list-header>

    <syg-item>
      <syg-label>Alert</syg-label>
      <syg-select :interface-options="customAlertOptions" interface="alert" multiple="true" placeholder="Select One">
        <syg-select-option value="bacon">Bacon</syg-select-option>
        <syg-select-option value="olives">Black Olives</syg-select-option>
        <syg-select-option value="xcheese">Extra Cheese</syg-select-option>
        <syg-select-option value="peppers">Green Peppers</syg-select-option>
        <syg-select-option value="mushrooms">Mushrooms</syg-select-option>
        <syg-select-option value="onions">Onions</syg-select-option>
        <syg-select-option value="pepperoni">Pepperoni</syg-select-option>
        <syg-select-option value="pineapple">Pineapple</syg-select-option>
        <syg-select-option value="sausage">Sausage</syg-select-option>
        <syg-select-option value="Spinach">Spinach</syg-select-option>
      </syg-select>
    </syg-item>

    <syg-item>
      <syg-label>Popover</syg-label>
      <syg-select :interface-options="customPopoverOptions" interface="popover" placeholder="Select One">
        <syg-select-option value="brown">Brown</syg-select-option>
        <syg-select-option value="blonde">Blonde</syg-select-option>
        <syg-select-option value="black">Black</syg-select-option>
        <syg-select-option value="red">Red</syg-select-option>
      </syg-select>
    </syg-item>

    <syg-item>
      <syg-label>Action Sheet</syg-label>
      <syg-select :interface-options="customActionSheetOptions" interface="action-sheet" placeholder="Select One">
        <syg-select-option value="red">Red</syg-select-option>
        <syg-select-option value="purple">Purple</syg-select-option>
        <syg-select-option value="yellow">Yellow</syg-select-option>
        <syg-select-option value="orange">Orange</syg-select-option>
        <syg-select-option value="green">Green</syg-select-option>
      </syg-select>
    </syg-item>

  </syg-list>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  },
  setup() {
    const customAlertOptions: any = {
      header: 'Pizza Toppings',
      subHeader: 'Select your toppings',
      message: '$1.00 per topping',
      translucent: true
    };

    const customPopoverOptions: any = {
      header: 'Hair Color',
      subHeader: 'Select your hair color',
      message: 'Only select your dominant hair color'
    };

    const customActionSheetOptions: any = {
      header: 'Colors',
      subHeader: 'Select your favorite color'
    };

    return {
      customAlertOptions,
      customPopoverOptions,
      customActionSheetOptions
    }
  }
});
</script>
```
