# syg-spinner

The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

The default spinner to use is based on the platform. The default spinner for `ios` is `"lines"`, and the default for `android` is `"crescent"`. If the platform is not `ios` or `android`, the spinner will default to `crescent`. If the `name` property is set, then that spinner will be used instead of the platform specific spinner.



<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default Spinner -->
<syg-spinner></syg-spinner>

<!-- Lines -->
<syg-spinner name="lines"></syg-spinner>

<!-- Lines Small -->
<syg-spinner name="lines-small"></syg-spinner>

<!-- Dots -->
<syg-spinner name="dots"></syg-spinner>

<!-- Bubbles -->
<syg-spinner name="bubbles"></syg-spinner>

<!-- Circles -->
<syg-spinner name="circles"></syg-spinner>

<!-- Crescent -->
<syg-spinner name="crescent"></syg-spinner>

<!-- Paused Default Spinner -->
<syg-spinner paused></syg-spinner>
```


### React

```tsx
import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';

export const SpinnerExample: React.FC = () => (
  <IonContent>
    {/*-- Default Spinner --*/}
    <IonSpinner />

    {/*-- Lines --*/}
    <IonSpinner name="lines" />

    {/*-- Lines Small --*/}
    <IonSpinner name="lines-small" />

    {/*-- Dots --*/}
    <IonSpinner name="dots" />

    {/*-- Bubbles --*/}
    <IonSpinner name="bubbles" />

    {/*-- Circles --*/}
    <IonSpinner name="circles" />

    {/*-- Crescent --*/}
    <IonSpinner name="crescent" />

    {/*-- Paused Default Spinner --*/}
    <IonSpinner paused />
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'spinner-example',
  styleUrl: 'spinner-example.css'
})
export class SpinnerExample {
  render() {
    return [
      // Default Spinner
      <syg-spinner></syg-spinner>,

      // Lines
      <syg-spinner name="lines"></syg-spinner>,

      // Lines Small
      <syg-spinner name="lines-small"></syg-spinner>,

      // Dots
      <syg-spinner name="dots"></syg-spinner>,

      // Bubbles
      <syg-spinner name="bubbles"></syg-spinner>,

      // Circles
      <syg-spinner name="circles"></syg-spinner>,

      // Crescent
      <syg-spinner name="crescent"></syg-spinner>,

      // Paused Default Spinner
      <syg-spinner paused={true}></syg-spinner>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Spinner -->
  <syg-spinner></syg-spinner>

  <!-- Lines -->
  <syg-spinner name="lines"></syg-spinner>

  <!-- Lines Small -->
  <syg-spinner name="lines-small"></syg-spinner>

  <!-- Dots -->
  <syg-spinner name="dots"></syg-spinner>

  <!-- Bubbles -->
  <syg-spinner name="bubbles"></syg-spinner>

  <!-- Circles -->
  <syg-spinner name="circles"></syg-spinner>

  <!-- Crescent -->
  <syg-spinner name="crescent"></syg-spinner>

  <!-- Paused Default Spinner -->
  <syg-spinner paused></syg-spinner>
</template>

<script>
import { IonSpinner } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSpinner }
});
</script>
```



## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                            | Type                                                                                                                                            | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `color`    | `color`    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`                                                                                                                           | `undefined` |
| `duration` | `duration` | Duration of the spinner animation in milliseconds. The default varies based on the spinner.                                                                                                                                                                            | `number \| undefined`                                                                                                                           | `undefined` |
| `name`     | `name`     | The name of the SVG spinner to use. If a name is not provided, the platform's default spinner will be used.                                                                                                                                                            | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| undefined` | `undefined` |
| `paused`   | `paused`   | If `true`, the spinner's animation will be paused.                                                                                                                                                                                                                     | `boolean`                                                                                                                                       | `false`     |


## CSS Custom Properties

| Name      | Description          |
| --------- | -------------------- |
| `--color` | Color of the spinner |


## Dependencies

### Used by

 - [syg-infinite-scroll-content](../infinite-scroll-content)
 - [syg-loading](../loading)
 - [syg-refresher-content](../refresher-content)

### Graph
```mermaid
graph TD;
  syg-infinite-scroll-content --> syg-spinner
  syg-loading --> syg-spinner
  syg-refresher-content --> syg-spinner
  style syg-spinner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
