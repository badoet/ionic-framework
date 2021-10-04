# syg-tabs

Tabs are a top level navigation component to implement a tab-based navigation.
The component is a container of individual [Tab](../tab/) components.

The `syg-tabs` component does not have any styling and works as a router outlet in order to handle navigation. It does not provide any UI feedback or mechanism to switch between tabs. In order to do so, an `syg-tab-bar` should be provided as a direct child of `syg-tabs`.

Both `syg-tabs` and `syg-tab-bar` can be used as standalone elements. They don’t depend on each other to work, but they are usually used together in order to implement a tab-based navigation that behaves like a native app.

The `syg-tab-bar` needs a slot defined in order to be projected to the right place in an `syg-tabs` component.

## Interfaces

### TabsCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
```


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<syg-tabs>
  <syg-tab-bar slot="bottom">
    <syg-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <syg-label>Schedule</syg-label>
      <syg-badge>6</syg-badge>
    </syg-tab-button>

    <syg-tab-button tab="speakers">
      <ion-icon name="person-circle"></ion-icon>
      <syg-label>Speakers</syg-label>
    </syg-tab-button>

    <syg-tab-button tab="map">
      <ion-icon name="map"></ion-icon>
      <syg-label>Map</syg-label>
    </syg-tab-button>

    <syg-tab-button tab="about">
      <ion-icon name="informatsyg-circle"></ion-icon>
      <syg-label>About</syg-label>
    </syg-tab-button>
  </syg-tab-bar>
</syg-tabs>
```


### Router integration

When used with Angular's router the `tab` property of the `syg-tab-button` should be a reference to the route path.

```html
<syg-tabs>
  <syg-tab-bar slot="bottom">
    <syg-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <syg-label>Schedule</syg-label>
    </syg-tab-button>
  </syg-tab-bar>
</syg-tabs>
```

```typescript
import { Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];
```


### Javascript

```html
<syg-tabs>

  <syg-tab tab="tab-schedule">
    <syg-nav></syg-nav>
  </syg-tab>

  <syg-tab tab="tab-speaker">
    <syg-nav></syg-nav>
  </syg-tab>

  <syg-tab tab="tab-map" component="page-map">
    <syg-nav></syg-nav>
  </syg-tab>

  <syg-tab tab="tab-about" component="page-about">
    <syg-nav></syg-nav>
  </syg-tab>

  <syg-tab-bar slot="bottom">
    <syg-tab-button tab="tab-schedule">
      <ion-icon name="calendar"></ion-icon>
      <syg-label>Schedule</syg-label>
      <syg-badge>6</syg-badge>
    </syg-tab-button>

    <syg-tab-button tab="tab-speaker">
      <ion-icon name="person-circle"></ion-icon>
      <syg-label>Speakers</syg-label>
    </syg-tab-button>

    <syg-tab-button tab="tab-map">
      <ion-icon name="map"></ion-icon>
      <syg-label>Map</syg-label>
    </syg-tab-button>

    <syg-tab-button tab="tab-about">
      <ion-icon name="informatsyg-circle"></ion-icon>
      <syg-label>About</syg-label>
    </syg-tab-button>
  </syg-tab-bar>

</syg-tabs>
```


### Activating Tabs

Each `syg-tab-button` will activate one of the tabs when pressed. In order to link the `syg-tab-button` to the `syg-tab` container, a matching `tab` property should be set on each component.

```html
<syg-tab tab="settings">
  ...
</syg-tab>

<syg-tab-button tab="settings">
  ...
</syg-tab-button>
```

The `syg-tab-button` and `syg-tab` above are linked by the common `tab` property.

The `tab` property identifies each tab, and it has to be unique within the `syg-tabs`. It's important to always set the `tab` property on the `syg-tab` and `syg-tab-button`, even if one component is not used.


### Router integration

When used with Ionic's router (`syg-router`) the `tab` property of the `syg-tab` matches the `component` property of an `syg-route`.

The following route within the scope of an `syg-tabs` outlet:

```html
<syg-route url="/settings-page" component="settings"></syg-route>
```

will match the following tab:

```html
<syg-tab tab="settings" component="settings-component"></syg-tab>
```


### React

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';


export const TabsExample: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tabs-example',
  styleUrl: 'tabs-example.css'
})
export class TabsExample {
  render() {
    return [
     <syg-tabs>
      <syg-tab tab="tab-schedule">
        <syg-nav></syg-nav>
      </syg-tab>

      <syg-tab tab="tab-speaker">
        <syg-nav></syg-nav>
      </syg-tab>

      <syg-tab tab="tab-map" component="page-map">
        <syg-nav></syg-nav>
      </syg-tab>

      <syg-tab tab="tab-about" component="page-about">
        <syg-nav></syg-nav>
      </syg-tab>

      <syg-tab-bar slot="bottom">
        <syg-tab-button tab="tab-schedule">
          <ion-icon name="calendar"></ion-icon>
          <syg-label>Schedule</syg-label>
          <syg-badge>6</syg-badge>
        </syg-tab-button>

        <syg-tab-button tab="tab-speaker">
          <ion-icon name="person-circle"></ion-icon>
          <syg-label>Speakers</syg-label>
        </syg-tab-button>

        <syg-tab-button tab="tab-map">
          <ion-icon name="map"></ion-icon>
          <syg-label>Map</syg-label>
        </syg-tab-button>

        <syg-tab-button tab="tab-about">
          <ion-icon name="informatsyg-circle"></ion-icon>
          <syg-label>About</syg-label>
        </syg-tab-button>
      </syg-tab-bar>

    </syg-tabs>
    ];
  }
}
```


### Activating Tabs

Each `syg-tab-button` will activate one of the tabs when pressed. In order to link the `syg-tab-button` to the `syg-tab` container, a matching `tab` property should be set on each component.

```jsx
<syg-tab tab="settings">
  ...
</syg-tab>

<syg-tab-button tab="settings">
  ...
</syg-tab-button>
```

The `syg-tab-button` and `syg-tab` above are linked by the common `tab` property.

The `tab` property identifies each tab, and it has to be unique within the `syg-tabs`. It's important to always set the `tab` property on the `syg-tab` and `syg-tab-button`, even if one component is not used.


### Router integration

When used with Ionic's router (`syg-router`) the `tab` property of the `syg-tab` matches the `component` property of an `syg-route`.

The following route within the scope of an `syg-tabs` outlet:

```tsx
<syg-route url="/settings-page" component="settings"></syg-route>
```

will match the following tab:

```tsx
<syg-tab tab="settings" component="settings-component"></syg-tab>
```


### Vue

**Tabs.vue**
```html
<template>
  <syg-page>
    <syg-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <syg-tab-bar slot="bottom">
        <syg-tab-button tab="schedule" href="/tabs/schedule">
          <ion-icon :icon="calendar"></ion-icon>
          <syg-label>Schedule</syg-label>
          <syg-badge>6</syg-badge>
        </syg-tab-button>

        <syg-tab-button tab="speakers" href="/tabs/speakers">
          <ion-icon :icon="personCircle"></ion-icon>
          <syg-label>Speakers</syg-label>
        </syg-tab-button>
      </syg-tab-bar>
    </syg-tabs>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue';
import { calendar, personCircle } from 'ionicons/icons';

export default defineComponent({
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange
    }
  }
});
</script>
```

**Schedule.vue**
```html
<template>
  <syg-page>
    <syg-header>
      <syg-toolbar>
        <syg-title>Schedule</syg-title>
      </syg-toolbar>
    </syg-header>

    <syg-content class="syg-padding">Schedule Tab</syg-content>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>
```

**Speakers.vue**
```html
<template>
  <syg-page>
    <syg-header>
      <syg-toolbar>
        <syg-title>Speakers</syg-title>
      </syg-toolbar>
    </syg-header>

    <syg-content class="syg-padding">Speakers Tab</syg-content>
  </syg-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>
```



## Events

| Event               | Description                                                                | Type                            |
| ------------------- | -------------------------------------------------------------------------- | ------------------------------- |
| `ionTabsDidChange`  | Emitted when the navigation has finished transitioning to a new component. | `CustomEvent<{ tab: string; }>` |
| `ionTabsWillChange` | Emitted when the navigation is about to transition to a new component.     | `CustomEvent<{ tab: string; }>` |


## Methods

### `getSelected() => Promise<string | undefined>`

Get the currently selected tab.

#### Returns

Type: `Promise<string | undefined>`



### `getTab(tab: string | HTMLIonTabElement) => Promise<HTMLIonTabElement | undefined>`

Get a specific tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<HTMLIonTabElement | undefined>`



### `select(tab: string | HTMLIonTabElement) => Promise<boolean>`

Select a tab by the value of its `tab` property or an element reference.

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot       | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
|            | Content is placed between the named slots if provided without a slot. |
| `"bottom"` | Content is placed at the bottom of the screen.                        |
| `"top"`    | Content is placed at the top of the screen.                           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
