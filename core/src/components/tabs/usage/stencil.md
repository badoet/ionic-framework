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