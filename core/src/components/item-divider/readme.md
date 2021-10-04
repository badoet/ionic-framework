# syg-item-divider

Item Dividers are block elements that can be used to separate items in a list. They are similar to list headers, but instead of being placed at the top of a list, they should go in between groups of items.

<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-item-divider>
  <syg-label>
    Basic Item Divider
  </syg-label>
</syg-item-divider>

<syg-item-divider color="secondary">
  <syg-label>
    Secondary Item Divider
  </syg-label>
</syg-item-divider>

<!-- Item Dividers in a List -->
<syg-list>
  <syg-item-divider>
    <syg-label>
      Section A
    </syg-label>
  </syg-item-divider>

  <syg-item><syg-label>A1</syg-label></syg-item>
  <syg-item><syg-label>A2</syg-label></syg-item>
  <syg-item><syg-label>A3</syg-label></syg-item>
  <syg-item><syg-label>A4</syg-label></syg-item>
  <syg-item><syg-label>A5</syg-label></syg-item>

  <syg-item-divider>
    <syg-label>
      Section B
    </syg-label>
  </syg-item-divider>

  <syg-item><syg-label>B1</syg-label></syg-item>
  <syg-item><syg-label>B2</syg-label></syg-item>
  <syg-item><syg-label>B3</syg-label></syg-item>
  <syg-item><syg-label>B4</syg-label></syg-item>
  <syg-item><syg-label>B5</syg-label></syg-item>
</syg-list>
```


### React

```tsx
import React from 'react';
import { IonItemDivider, IonLabel, IonList, IonItem, IonContent } from '@ionic/react';

export const ItemDividerExample: React.FC = () => (
  <IonContent>
    <IonItemDivider>
      <IonLabel>
        Basic Item Divider
      </IonLabel>
    </IonItemDivider>

    <IonItemDivider color="secondary">
      <IonLabel>
        Secondary Item Divider
      </IonLabel>
    </IonItemDivider>

    {/*-- Item Dividers in a List --*/}
    <IonList>
      <IonItemDivider>
        <IonLabel>
          Section A
        </IonLabel>
      </IonItemDivider>

      <IonItem><IonLabel>A1</IonLabel></IonItem>
      <IonItem><IonLabel>A2</IonLabel></IonItem>
      <IonItem><IonLabel>A3</IonLabel></IonItem>
      <IonItem><IonLabel>A4</IonLabel></IonItem>
      <IonItem><IonLabel>A5</IonLabel></IonItem>

      <IonItemDivider>
        <IonLabel>
          Section B
        </IonLabel>
      </IonItemDivider>

      <IonItem><IonLabel>B1</IonLabel></IonItem>
      <IonItem><IonLabel>B2</IonLabel></IonItem>
      <IonItem><IonLabel>B3</IonLabel></IonItem>
      <IonItem><IonLabel>B4</IonLabel></IonItem>
      <IonItem><IonLabel>B5</IonLabel></IonItem>
    </IonList>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-divider-example',
  styleUrl: 'item-divider-example.css'
})
export class ItemDividerExample {
  render() {
    return [
      <syg-item-divider>
        <syg-label>
          Basic Item Divider
        </syg-label>
      </syg-item-divider>,

      <syg-item-divider color="secondary">
        <syg-label>
          Secondary Item Divider
        </syg-label>
      </syg-item-divider>,

      //  Item Dividers in a List
      <syg-list>
        <syg-item-divider>
          <syg-label>
            Section A
          </syg-label>
        </syg-item-divider>

        <syg-item><syg-label>A1</syg-label></syg-item>
        <syg-item><syg-label>A2</syg-label></syg-item>
        <syg-item><syg-label>A3</syg-label></syg-item>
        <syg-item><syg-label>A4</syg-label></syg-item>
        <syg-item><syg-label>A5</syg-label></syg-item>

        <syg-item-divider>
          <syg-label>
            Section B
          </syg-label>
        </syg-item-divider>

        <syg-item><syg-label>B1</syg-label></syg-item>
        <syg-item><syg-label>B2</syg-label></syg-item>
        <syg-item><syg-label>B3</syg-label></syg-item>
        <syg-item><syg-label>B4</syg-label></syg-item>
        <syg-item><syg-label>B5</syg-label></syg-item>
      </syg-list>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-item-divider>
    <syg-label>
      Basic Item Divider
    </syg-label>
  </syg-item-divider>

  <syg-item-divider color="secondary">
    <syg-label>
      Secondary Item Divider
    </syg-label>
  </syg-item-divider>

  <!-- Item Dividers in a List -->
  <syg-list>
    <syg-item-divider>
      <syg-label>
        Section A
      </syg-label>
    </syg-item-divider>

    <syg-item><syg-label>A1</syg-label></syg-item>
    <syg-item><syg-label>A2</syg-label></syg-item>
    <syg-item><syg-label>A3</syg-label></syg-item>
    <syg-item><syg-label>A4</syg-label></syg-item>
    <syg-item><syg-label>A5</syg-label></syg-item>

    <syg-item-divider>
      <syg-label>
        Section B
      </syg-label>
    </syg-item-divider>

    <syg-item><syg-label>B1</syg-label></syg-item>
    <syg-item><syg-label>B2</syg-label></syg-item>
    <syg-item><syg-label>B3</syg-label></syg-item>
    <syg-item><syg-label>B4</syg-label></syg-item>
    <syg-item><syg-label>B5</syg-label></syg-item>
  </syg-list>
</template>

<script>
import { IonItem, IonItemDivider, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonItemDivider, IonLabel }
});
</script>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |
| `sticky` | `sticky`  | When it's set to `true`, the item-divider will stay visible when it reaches the top of the viewport until the next `syg-item-divider` replaces it.  This feature relies in `position:sticky`: https://caniuse.com/#feat=css-sticky                                     | `boolean`             | `false`     |


## Slots

| Slot      | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
|           | Content is placed between the named slots if provided without a slot.              |
| `"end"`   | Content is placed to the right of the divider text in LTR, and to the left in RTL. |
| `"start"` | Content is placed to the left of the divider text in LTR, and to the right in RTL. |


## CSS Custom Properties

| Name                     | Description                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `--background`           | Background of the item divider                                                                                  |
| `--color`                | Color of the item divider                                                                                       |
| `--inner-padding-bottom` | Bottom inner padding of the item divider                                                                        |
| `--inner-padding-end`    | End inner padding of the item divider                                                                           |
| `--inner-padding-start`  | Start inner padding of the item divider                                                                         |
| `--inner-padding-top`    | Top inner padding of the item divider                                                                           |
| `--padding-bottom`       | Bottom padding of the item divider                                                                              |
| `--padding-end`          | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item divider |
| `--padding-start`        | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item divider |
| `--padding-top`          | Top padding of the item divider                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
