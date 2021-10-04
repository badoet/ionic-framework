```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-list-example',
  styleUrl: 'fab-list-example.css'
})
export class FabListExample {
  render() {
    return [
      <syg-fab vertical="center" horizontal="center">
        <syg-fab-button>Share</syg-fab-button>
        <syg-fab-list side="top">
          <syg-fab-button>
            <ion-icon name="logo-facebook"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-twitter"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-youtube"></ion-icon>
          </syg-fab-button>
        </syg-fab-list>

        <syg-fab-list side="end">
          <syg-fab-button>
            <ion-icon name="logo-pwa"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-npm"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-ionic"></ion-icon>
          </syg-fab-button>
        </syg-fab-list>

        <syg-fab-list side="bottom">
          <syg-fab-button>
            <ion-icon name="logo-github"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-javascript"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-angular"></ion-icon>
          </syg-fab-button>
        </syg-fab-list>

        <syg-fab-list side="start">
          <syg-fab-button>
            <ion-icon name="logo-vimeo"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-chrome"></ion-icon>
          </syg-fab-button>
          <syg-fab-button>
            <ion-icon name="logo-react"></ion-icon>
          </syg-fab-button>
        </syg-fab-list>
      </syg-fab>
    ];
  }
}
```