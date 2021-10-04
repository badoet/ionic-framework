# syg-tab-bar

The tab bar is a UI component that contains a set of [tab buttons](../tab-button). A tab bar must be provided inside of [tabs](../tabs) to communicate with each [tab](../tab).


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<syg-tabs>
  <!-- Tab bar -->
  <syg-tab-bar slot="bottom">
    <syg-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </syg-tab-button>
    <syg-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </syg-tab-button>
    <syg-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </syg-tab-button>
  </syg-tab-bar>
</syg-tabs>
```


### Javascript

```html
<syg-tabs>
  <!-- Tab views -->
  <syg-tab tab="account"></syg-tab>
  <syg-tab tab="contact"></syg-tab>
  <syg-tab tab="settings"></syg-tab>

  <!-- Tab bar -->
  <syg-tab-bar slot="bottom">
    <syg-tab-button tab="account">
      <ion-icon name="person"></ion-icon>
    </syg-tab-button>
    <syg-tab-button tab="contact">
      <ion-icon name="call"></ion-icon>
    </syg-tab-button>
    <syg-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
    </syg-tab-button>
  </syg-tab-bar>
</syg-tabs>
```


### React

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent } from '@ionic/react';
import { call, person, settings } from 'ionicons/icons';

export const TabBarExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="account">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="contact">
          <IonIcon icon={call} />
        </IonTabButton>
        <IonTabButton tab="settings">
          <IonIcon icon={settings} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-bar-example',
  styleUrl: 'tab-bar-example.css'
})
export class TabBarExample {
  render() {
    return [
      <syg-tabs>
        {/* Tab views */}
        <syg-tab tab="account" component="page-account"></syg-tab>
        <syg-tab tab="contact" component="page-contact"></syg-tab>
        <syg-tab tab="settings" component="page-settings"></syg-tab>

        {/* Tab bar */}
        <syg-tab-bar slot="bottom">
          <syg-tab-button tab="account">
            <ion-icon name="person"></ion-icon>
          </syg-tab-button>
          <syg-tab-button tab="contact">
            <ion-icon name="call"></ion-icon>
          </syg-tab-button>
          <syg-tab-button tab="settings">
            <ion-icon name="settings"></ion-icon>
          </syg-tab-button>
        </syg-tab-bar>
      </syg-tabs>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-tabs>
    <!-- Tab bar -->
    <syg-tab-bar slot="bottom">
      <syg-tab-button tab="account">
        <ion-icon :icon="person"></ion-icon>
      </syg-tab-button>
      <syg-tab-button tab="contact">
        <ion-icon :icon="call"></ion-icon>
      </syg-tab-button>
      <syg-tab-button tab="settings">
        <ion-icon :icon="settings"></ion-icon>
      </syg-tab-button>
    </syg-tab-bar>
  </syg-tabs>
</template>

<script>
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
import { call, person, settings } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonIcon, IonTabBar, IonTabButton, IonTabs },
  setup() {
    return { call, person, settings }
  }
});
</script>
```



## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`       | `color`        | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`        | `mode`         | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |
| `selectedTab` | `selected-tab` | The selected tab component                                                                                                                                                                                                                                             | `string \| undefined` | `undefined` |
| `translucent` | `translucent`  | If `true`, the tab bar will be translucent. Only applies when the mode is `"ios"` and the device supports [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).                                                 | `boolean`             | `false`     |


## CSS Custom Properties

| Name           | Description               |
| -------------- | ------------------------- |
| `--background` | Background of the tab bar |
| `--border`     | Border of the tab bar     |
| `--color`      | Color of the tab bar      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
