```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tab-button-example',
  styleUrl: 'tab-button-example.css'
})
export class TabButtonExample {
  render() {
    return [
      <syg-tabs>
        {/* Tab views */}
        <syg-tab tab="schedule">
          <syg-router-outlet name="schedule"></syg-router-outlet>
        </syg-tab>

        <syg-tab tab="speakers">
          <syg-router-outlet name="speakers"></syg-router-outlet>
        </syg-tab>

        <syg-tab tab="map">
          <syg-router-outlet name="map"></syg-router-outlet>
        </syg-tab>

        <syg-tab tab="about">
          <syg-router-outlet name="about"></syg-router-outlet>
        </syg-tab>

        {/* Tab bar */}
        <syg-tab-bar slot="bottom">
          <syg-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
            <ion-icon name="calendar"></ion-icon>
            <syg-label>Schedule</syg-label>
          </syg-tab-button>

          <syg-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
            <ion-icon name="person-circle"></ion-icon>
            <syg-label>Speakers</syg-label>
          </syg-tab-button>

          <syg-tab-button tab="map" href="/app/tabs/(map:map)">
            <ion-icon name="map"></ion-icon>
            <syg-label>Map</syg-label>
          </syg-tab-button>

          <syg-tab-button tab="about" href="/app/tabs/(about:about)">
            <ion-icon name="informatsyg-circle"></ion-icon>
            <syg-label>About</syg-label>
          </syg-tab-button>
        </syg-tab-bar>
      </syg-tabs>
    ];
  }
}
```
