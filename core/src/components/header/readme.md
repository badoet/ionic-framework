# syg-header

Header is a parent component that holds the toolbar component.
It's important to note that syg-header needs to be the one of the three root elements of a page



<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-header>
  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button></syg-back-button>
    </syg-buttons>
    <syg-title>My Navigation Bar</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-title>Subheader</syg-title>
  </syg-toolbar>
</syg-header>

<!-- Header without a border -->
<syg-header class="syg-no-border">
  <syg-toolbar>
    <syg-title>Header - No Border</syg-title>
  </syg-toolbar>
</syg-header>

<syg-content>
  <syg-header collapse="condense">
    <syg-toolbar>
      <syg-title size="large">My Navigation Bar</syg-title>
    </syg-toolbar>
  </syg-header>
</syg-content>
```


### React

```tsx
import React from 'react';
import { IonHeader, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/react';

export const HeaderExample: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>My Navigation Bar</IonTitle>
      </IonToolbar>
    
      <IonToolbar>
        <IonTitle>Subheader</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    {/*-- Header without a border --*/}
    <IonHeader className="syg-no-border">
     <IonToolbar>
      <IonTitle>Header - No Border</IonTitle>
     </IonToolbar>
    </IonHeader>
    
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">My Navigation Bar</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-example',
  styleUrl: 'header-example.css'
})
export class HeaderExample {
  render() {
    return [
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button></syg-back-button>
          </syg-buttons>
          <syg-title>My Navigation Bar</syg-title>
        </syg-toolbar>

        <syg-toolbar>
          <syg-title>Subheader</syg-title>
        </syg-toolbar>
      </syg-header>,

      // Header without a border
      <syg-header class="syg-no-border">
        <syg-toolbar>
          <syg-title>Header - No Border</syg-title>
        </syg-toolbar>
      </syg-header>,

      <syg-content>
        <syg-header collapse="condense">
          <syg-toolbar>
            <syg-title size="large">My Navigation Bar</syg-title>
          </syg-toolbar>
        </syg-header>
      </syg-content>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-header>
    <syg-toolbar>
      <syg-buttons slot="start">
        <syg-back-button></syg-back-button>
      </syg-buttons>
      <syg-title>My Navigation Bar</syg-title>
    </syg-toolbar>
  
    <syg-toolbar>
      <syg-title>Subheader</syg-title>
    </syg-toolbar>
  </syg-header>
  
  <!-- Header without a border -->
  <syg-header class="syg-no-border">
    <syg-toolbar>
      <syg-title>Header - No Border</syg-title>
    </syg-toolbar>
  </syg-header>
  
  <syg-content>
    <syg-header collapse="condense">
      <syg-toolbar>
        <syg-title size="large">My Navigation Bar</syg-title>
      </syg-toolbar>
    </syg-header>
  </syg-content>
</template>

<script>
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonBackButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar
  }
});
</script>
```



## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                                                                                                                                           | Type                      | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------- |
| `collapse`    | `collapse`    | Describes the scroll effect that will be applied to the header `condense` only applies in iOS mode.  Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles)                                                                                                                | `"condense" \| undefined` | `undefined` |
| `mode`        | `mode`        | The mode determines which platform styles to use.                                                                                                                                                                                                                                                                                     | `"ios" \| "md"`           | `undefined` |
| `translucent` | `translucent` | If `true`, the header will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).  Note: In order to scroll content behind the header, the `fullscreen` attribute needs to be set on the content. | `boolean`                 | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
