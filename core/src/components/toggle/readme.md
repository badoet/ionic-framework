# syg-toggle

Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the `checked` property.

## Customization

### Customizing Background

The background of the toggle track and handle can be customized using CSS variables. There are also variables for setting the background differently when the toggle is checked.

```css
syg-toggle {
  --background: #000;
  --background-checked: #7a49a5;

  --handle-background: #7a49a5;
  --handle-background-checked: #000;
}
```

Because these variables set the `background` property, which is a shorthand, it can accept any value that the [background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) accepts.

A more complex case may involve adding an image to the handle background.

```css
syg-toggle {
  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;
}
```

Taking it a step further, we could use the `::before` or `::after` pseudo-elements to position text on top of the background.

```css
syg-toggle::before {
  position: absolute;

  top: 16px;
  left: 10px;

  content: "ON";

  color: white;
  font-size: 8px;

  z-index: 1;
}
```


### Customizing Width

Adjusting the width of the toggle **smaller** will result in a narrower track, with the handle remaining the default width. If desired, set `--handle-width` to make the handle narrower.

```css
syg-toggle {
  width: 40px;
}
```

Adjusting the width of the toggle **larger** will result in a wider track, with the handle remaining the default width. If desired, set `--handle-width` to make the handle wider.

```css
syg-toggle {
  width: 100px;
}
```

### Customizing Height

Adjusting the height of the toggle **smaller** than the default will result in the handle height auto-sizing itself to the track. In `ios` the handle is shorter than the track (`100% - 4px`) and in `md` the handle is taller than the track (`100% + 6px`).

```css
syg-toggle {
  height: 15px;
}
```

> Note: this does not affect the handle width, width should be set using `--handle-width`.

Adjusting the height of the toggle **larger** will keep the handle in the center at the default height. This can be modified by setting `--handle-height` which can be set to any amount but will not exceed the `--handle-max-height`.

```css
syg-toggle {
  height: 60px;
}
```

> Note: this does not affect the handle width, width should be set using `--handle-width`.

### Customizing Spacing

The spacing refers to the horizontal gap between the handle and the track. By default, the handle has `2px` of spacing around it in `ios` **only**. In `md` mode there is no default spacing.

To remove the **horizontal** spacing, set `--handle-spacing` to `0px`.

```css
syg-toggle {
  --handle-spacing: 0px;
}
```

Due to the handle having a fixed height, to remove the spacing on the top and bottom, set the height to 100%.

```css
syg-toggle {
  --handle-spacing: 0px;
  --handle-height: 100%;
}
```


### Customizing Border Radius

The `--handle-border-radius` can be used to change the `border-radius` on the handle.

```css
syg-toggle {
  --handle-border-radius: 14px 4px 4px 14px;
}
```

To target the `border-radius` only when the toggle is checked, target `.toggle-checked`:

```css
syg-toggle.toggle-checked {
  --handle-border-radius: 4px 14px 14px 4px;
}
```


### Customizing Box Shadow

The `--handle-box-shadow` can be used to change the `box-shadow` on the handle.

```css
syg-toggle {
  --handle-box-shadow: 4px 0 2px 0 red;
}
```

To target the box shadow only when the toggle is checked, target `.toggle-checked`:

```css
syg-toggle.toggle-checked {
  --handle-box-shadow: -4px 0 2px 0 red;
}
```

See the section on [customizing overflow](#customizing-overflow) to allow the `box-shadow` to overflow the toggle container.


### Customizing Overflow

Setting `overflow` on the toggle will be inherited by the toggle handle. By default, overflow is set to `hidden` in `ios` only. The `box-shadow` will still appear cut off due to the `contain` css property. Set `contain` to `none` in order to overflow the toggle container.

```css
syg-toggle {
  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);

  overflow: visible;

  contain: none;
}
```

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
}
```


<!-- Auto Generated Below -->


## Usage

### Angular

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
    <syg-toggle [(ngModel)]="pepperoni"></syg-toggle>
  </syg-item>

  <syg-item>
    <syg-label>Sausage</syg-label>
    <syg-toggle [(ngModel)]="sausage" disabled="true"></syg-toggle>
  </syg-item>

  <syg-item>
    <syg-label>Mushrooms</syg-label>
    <syg-toggle [(ngModel)]="mushrooms"></syg-toggle>
  </syg-item>
</syg-list>
```


### Javascript

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


### React

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToggle, IonList, IonItem, IonLabel, IonItemDivider } from '@ionic/react';

export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToggleExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>

          <IonItemDivider>Default Toggle</IonItemDivider>
          <IonItem>
            <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>Disabled Toggle</IonItemDivider>
          <IonItem><IonToggle disabled /></IonItem>

          <IonItemDivider>Checked Toggle</IonItemDivider>
          <IonItem><IonToggle checked /></IonItem>

          <IonItemDivider>Toggle Colors</IonItemDivider>
          <IonItem><IonToggle color="primary" /></IonItem>
          <IonItem><IonToggle color="secondary" /></IonItem>
          <IonItem><IonToggle color="danger" /></IonItem>
          <IonItem><IonToggle color="light" /></IonItem>
          <IonItem><IonToggle color="dark" /></IonItem>

          <IonItemDivider>Toggles in a List</IonItemDivider>
          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```


### Stencil

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-example',
  styleUrl: 'toggle-example.css'
})
export class ToggleExample {
  @State() pepperoni: boolean = false;
  @State() sausage: boolean = true;
  @State() mushrooms: boolean = false;

  render() {
    return [
      // Default Toggle
      <syg-toggle></syg-toggle>,

      // Disabled Toggle
      <syg-toggle disabled></syg-toggle>,

      // Checked Toggle
      <syg-toggle checked></syg-toggle>,

      // Toggle Colors
      <syg-toggle color="primary"></syg-toggle>,
      <syg-toggle color="secondary"></syg-toggle>,
      <syg-toggle color="danger"></syg-toggle>,
      <syg-toggle color="light"></syg-toggle>,
      <syg-toggle color="dark"></syg-toggle>,

      // Toggles in a List
      <syg-list>
        <syg-item>
          <syg-label>Pepperoni</syg-label>
          <syg-toggle checked={this.pepperoni} onIonChange={(ev) => this.pepperoni = ev.detail.checked}></syg-toggle>
        </syg-item>

        <syg-item>
          <syg-label>Sausage</syg-label>
          <syg-toggle checked={this.sausage} onIonChange={(ev) => this.sausage = ev.detail.checked} disabled={true}></syg-toggle>
        </syg-item>

        <syg-item>
          <syg-label>Mushrooms</syg-label>
          <syg-toggle checked={this.mushrooms} onIonChange={(ev) => this.mushrooms = ev.detail.checked}></syg-toggle>
        </syg-item>
      </syg-list>,

      <div>
        Pepperoni: {this.pepperoni ? "true" : "false"}<br/>
        Sausage: {this.sausage ? "true" : "false"}<br/>
        Mushrooms: {this.mushrooms ? "true" : "false"}
      </div>
    ];
  }
}
```


### Vue

```html
<template>
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
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="pepperoni"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </syg-toggle>
    </syg-item>

    <syg-item>
      <syg-label>Sausage</syg-label>
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="sausage"
        :checked="toppings.value.indexOf('pepperoni') !== -1"
        disabled="true">
      </syg-toggle>
    </syg-item>

    <syg-item>
      <syg-label>Mushrooms</syg-label>
      <syg-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="mushrooms"
        :checked="toppings.value.indexOf('pepperoni') !== -1">
      </syg-toggle>
    </syg-item>
  </syg-list>
</template>

<script>
import { IonLabel, IonList, IonItem, IonToggle } from '@ionic/vue';
import { defineComponent, vue } from 'vue';

export default defineComponent({
  components: { IonLabel, IonList, IonItem, IonToggle },
  setup() {
    const toppings = ref([]);
    
    return { toppings };
  }
});
</script>
```



## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                            | Type                          | Default        |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| `checked`  | `checked`  | If `true`, the toggle is selected.                                                                                                                                                                                                                                     | `boolean`                     | `false`        |
| `color`    | `color`    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`         | `undefined`    |
| `disabled` | `disabled` | If `true`, the user cannot interact with the toggle.                                                                                                                                                                                                                   | `boolean`                     | `false`        |
| `mode`     | `mode`     | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`               | `undefined`    |
| `name`     | `name`     | The name of the control, which is submitted with the form data.                                                                                                                                                                                                        | `string`                      | `this.inputId` |
| `value`    | `value`    | The value of the toggle does not mean if it's checked or not, use the `checked` property for that.  The value of a toggle is analogous to the value of a `<input type="checkbox">`, it's only used when the toggle participates in a native `<form>`.                  | `null \| string \| undefined` | `'on'`         |


## Events

| Event       | Description                                  | Type                                        |
| ----------- | -------------------------------------------- | ------------------------------------------- |
| `ionBlur`   | Emitted when the toggle loses focus.         | `CustomEvent<void>`                         |
| `ionChange` | Emitted when the value property has changed. | `CustomEvent<ToggleChangeEventDetail<any>>` |
| `ionFocus`  | Emitted when the toggle has focus.           | `CustomEvent<void>`                         |


## Shadow Parts

| Part       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `"handle"` | The toggle handle, or knob, used to change the checked state. |
| `"track"`  | The background track of the toggle.                           |


## CSS Custom Properties

| Name                          | Description                                  |
| ----------------------------- | -------------------------------------------- |
| `--background`                | Background of the toggle                     |
| `--background-checked`        | Background of the toggle when checked        |
| `--border-radius`             | Border radius of the toggle track            |
| `--handle-background`         | Background of the toggle handle              |
| `--handle-background-checked` | Background of the toggle handle when checked |
| `--handle-border-radius`      | Border radius of the toggle handle           |
| `--handle-box-shadow`         | Box shadow of the toggle handle              |
| `--handle-height`             | Height of the toggle handle                  |
| `--handle-max-height`         | Maximum height of the toggle handle          |
| `--handle-spacing`            | Horizontal spacing around the toggle handle  |
| `--handle-transition`         | Transition of the toggle handle              |
| `--handle-width`              | Width of the toggle handle                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
