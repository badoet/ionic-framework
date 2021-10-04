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
