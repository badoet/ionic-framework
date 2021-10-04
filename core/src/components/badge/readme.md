# syg-badge

Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default -->
<syg-badge>99</syg-badge>

<!-- Colors -->
<syg-badge color="primary">11</syg-badge>
<syg-badge color="secondary">22</syg-badge>
<syg-badge color="tertiary">33</syg-badge>
<syg-badge color="success">44</syg-badge>
<syg-badge color="warning">55</syg-badge>
<syg-badge color="danger">66</syg-badge>
<syg-badge color="light">77</syg-badge>
<syg-badge color="medium">88</syg-badge>
<syg-badge color="dark">99</syg-badge>

<!-- Item with badge on left and right -->
<syg-item>
  <syg-badge slot="start">11</syg-badge>
  <syg-label>My Item</syg-label>
  <syg-badge slot="end">22</syg-badge>
</syg-item>
```


### React

```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent } from '@ionic/react';

export const BadgeExample: React.FC = () => (
  <IonContent>
    {/*-- Default --*/}
    <IonBadge>99</IonBadge>

    {/*-- Colors --*/}
    <IonBadge color="primary">11</IonBadge>
    <IonBadge color="secondary">22</IonBadge>
    <IonBadge color="tertiary">33</IonBadge>
    <IonBadge color="success">44</IonBadge>
    <IonBadge color="warning">55</IonBadge>
    <IonBadge color="danger">66</IonBadge>
    <IonBadge color="light">77</IonBadge>
    <IonBadge color="medium">88</IonBadge>
    <IonBadge color="dark">99</IonBadge>

    {/*-- Item with badge on left and right --*/}
    <IonItem>
      <IonBadge slot="start">11</IonBadge>
      <IonLabel>My Item</IonLabel>
      <IonBadge slot="end">22</IonBadge>
    </IonItem>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'badge-example',
  styleUrl: 'badge-example.css'
})
export class BadgeExample {
  render() {
    return [
      // Default
      <syg-badge>99</syg-badge>,

      // Colors
      <syg-badge color="primary">11</syg-badge>,
      <syg-badge color="secondary">22</syg-badge>,
      <syg-badge color="tertiary">33</syg-badge>,
      <syg-badge color="success">44</syg-badge>,
      <syg-badge color="warning">55</syg-badge>,
      <syg-badge color="danger">66</syg-badge>,
      <syg-badge color="light">77</syg-badge>,
      <syg-badge color="medium">88</syg-badge>,
      <syg-badge color="dark">99</syg-badge>,

      // Item with badge on left and right
      <syg-item>
        <syg-badge slot="start">11</syg-badge>
        <syg-label>My Item</syg-label>
        <syg-badge slot="end">22</syg-badge>
      </syg-item>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default -->
  <syg-badge>99</syg-badge>

  <!-- Colors -->
  <syg-badge color="primary">11</syg-badge>
  <syg-badge color="secondary">22</syg-badge>
  <syg-badge color="tertiary">33</syg-badge>
  <syg-badge color="success">44</syg-badge>
  <syg-badge color="warning">55</syg-badge>
  <syg-badge color="danger">66</syg-badge>
  <syg-badge color="light">77</syg-badge>
  <syg-badge color="medium">88</syg-badge>
  <syg-badge color="dark">99</syg-badge>

  <!-- Item with badge on left and right -->
  <syg-item>
    <syg-badge slot="start">11</syg-badge>
    <syg-label>My Item</syg-label>
    <syg-badge slot="end">22</syg-badge>
  </syg-item>
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel }
});
</script>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


## CSS Custom Properties

| Name               | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `--background`     | Background of the badge                                                                                  |
| `--color`          | Text color of the badge                                                                                  |
| `--padding-bottom` | Bottom padding of the badge                                                                              |
| `--padding-end`    | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge |
| `--padding-start`  | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge |
| `--padding-top`    | Top padding of the badge                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
