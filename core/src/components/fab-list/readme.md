# syg-fab-list

The `syg-fab-list` element is a container for multiple fab buttons. This collection of fab buttons contains actions related to the main fab button and is flung out on click. To specify what side the buttons should appear on, set the `side` property to 'start', 'end', 'top', 'bottom'

<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
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
```


### React

```tsx
import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonContent, IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoYoutube, logoPwa, logoNpm, logoIonic, logoGithub, logoJavascript, logoAngular, logoVimeo, logoChrome, logoReact } from 'ionicons/icons';

export const FabListExample: React.FC = () => (
  <IonContent>
    <IonFab vertical="center" horizontal="center">
      <IonFabButton>Share</IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={logoFacebook} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoTwitter} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoYoutube} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="end">
        <IonFabButton>
          <IonIcon icon={logoPwa} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoNpm} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoIonic} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="bottom">
        <IonFabButton>
          <IonIcon icon={logoGithub} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoJavascript} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoAngular} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={logoVimeo} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoChrome} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoReact} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </IonContent>
);

```


### Stencil

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


### Vue

```html
<template>
  <syg-fab vertical="bottom" horizontal="end">
    <syg-fab-button>Share</syg-fab-button>

    <syg-fab-list side="top">
      <syg-fab-button>Facebook</syg-fab-button>
      <syg-fab-button>Twitter</syg-fab-button>
      <syg-fab-button>Youtube</syg-fab-button>
    </syg-fab-list>

    <syg-fab-list side="start">
      <syg-fab-button>Vimeo</syg-fab-button>
    </syg-fab-list>

  </syg-fab>
</template>

<script>
import { IonFab, IonFabButton, IonFabList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonFab, IonFabButton, IonFabList }
});
</script>
```



## Properties

| Property    | Attribute   | Description                                                         | Type                                    | Default    |
| ----------- | ----------- | ------------------------------------------------------------------- | --------------------------------------- | ---------- |
| `activated` | `activated` | If `true`, the fab list will show all fab buttons in the list.      | `boolean`                               | `false`    |
| `side`      | `side`      | The side the fab list will show on relative to the main fab button. | `"bottom" \| "end" \| "start" \| "top"` | `'bottom'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
