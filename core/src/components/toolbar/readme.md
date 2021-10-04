# syg-toolbar

Toolbars are positioned above or below content. When a toolbar is placed in an `<syg-header>` it will appear fixed at the top of the content, and when it is in an `<syg-footer>` it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. When placed within an `<syg-content>`, toolbars will scroll with the content.


## Buttons

Buttons placed in a toolbar should be placed inside of the `<syg-buttons>` element. The `<syg-buttons>` element can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.

| Slot         | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `secondary`  | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode.  |
| `primary`    | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode.      |
| `start`      | Positions to the `left` of the content in LTR, and to the `right` in RTL.                                |
| `end`        | Positions to the `right` of the content in LTR, and to the `left` in RTL.                                |


## Borders

In `md` mode, the `<syg-header>` will receive a box-shadow on the bottom, and the `<syg-footer>` will receive a box-shadow on the top.  In `ios` mode, the `<syg-header>` will receive a border on the bottom, and the `<syg-footer>` will receive a border on the top.



<!-- Auto Generated Below -->


## Usage

### Angular

```html
<syg-toolbar>
  <syg-title>Title Only</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="start">
    <syg-back-button></syg-back-button>
  </syg-buttons>
  <syg-title>Back Button</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-title size="small">Small Title above a Default Title</syg-title>
</syg-toolbar>
<syg-toolbar>
  <syg-title>Default Title</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Default Buttons</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      Contact
    </syg-button>
  </syg-buttons>
  <syg-title>Solid Buttons</syg-title>
  <syg-buttons slot="primary">
    <syg-button fill="solid" color="secondary">
      Help
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </syg-button>
  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      Star
    </syg-button>
  </syg-buttons>
  <syg-title>Outline Buttons</syg-title>
  <syg-buttons slot="primary">
    <syg-button color="danger" fill="outline">
      Edit
      <ion-icon slot="end" name="create"></ion-icon>
    </syg-button>
  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button>
      Account
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="danger">
      Edit
    </syg-button>
  </syg-buttons>
  <syg-title>Text Only Buttons</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="start">
    <syg-menu-button autoHide="false"></syg-menu-button>

  </syg-buttons>
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Left side menu toggle</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="primary">
    <syg-button (click)="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Right side menu toggle</syg-title>
  <syg-buttons slot="end">
    <syg-menu-button autoHide="false"></syg-menu-button>

  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="primary">
    <syg-button (click)="clickedSearch()">
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-searchbar placeholder="Search Favorites"></syg-searchbar>
</syg-toolbar>

<syg-toolbar>
  <syg-segment value="all">
    <syg-segment-button value="all">
      All
    </syg-segment-button>
    <syg-segment-button value="favorites">
      Favorites
    </syg-segment-button>
  </syg-segment>
</syg-toolbar>

<syg-toolbar color="secondary">
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="primary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Secondary Toolbar</syg-title>
</syg-toolbar>

<syg-toolbar color="dark">
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="danger">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Dark Toolbar</syg-title>
</syg-toolbar>
```


### Javascript

```html
<syg-toolbar>
  <syg-title>Title Only</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="start">
    <syg-back-button></syg-back-button>
  </syg-buttons>
  <syg-title>Back Button</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-title size="small">Small Title above a Default Title</syg-title>
</syg-toolbar>
<syg-toolbar>
  <syg-title>Default Title</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Default Buttons</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      Contact
    </syg-button>
  </syg-buttons>
  <syg-title>Solid Buttons</syg-title>
  <syg-buttons slot="primary">
    <syg-button fill="solid" color="secondary">
      Help
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </syg-button>
  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      Star
    </syg-button>
  </syg-buttons>
  <syg-title>Outline Buttons</syg-title>
  <syg-buttons slot="primary">
    <syg-button color="danger" fill="outline">
      Edit
      <ion-icon slot="end" name="create"></ion-icon>
    </syg-button>
  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="secondary">
    <syg-button>
      Account
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="danger">
      Edit
    </syg-button>
  </syg-buttons>
  <syg-title>Text Only Buttons</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="start">
    <syg-menu-button auto-hide="false"></syg-menu-button>
  </syg-buttons>
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Left side menu toggle</syg-title>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="primary">
    <syg-button onclick="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Right side menu toggle</syg-title>
  <syg-buttons slot="end">
    <syg-menu-button auto-hide="false"></syg-menu-button>
  </syg-buttons>
</syg-toolbar>

<syg-toolbar>
  <syg-buttons slot="primary">
    <syg-button onclick="clickedSearch()">
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-searchbar placeholder="Search Favorites"></syg-searchbar>
</syg-toolbar>

<syg-toolbar>
  <syg-segment value="all">
    <syg-segment-button value="all">
      All
    </syg-segment-button>
    <syg-segment-button value="favorites">
      Favorites
    </syg-segment-button>
  </syg-segment>
</syg-toolbar>

<syg-toolbar color="secondary">
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="primary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Secondary Toolbar</syg-title>
</syg-toolbar>

<syg-toolbar color="dark">
  <syg-buttons slot="secondary">
    <syg-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </syg-button>
    <syg-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-buttons slot="primary">
    <syg-button color="danger">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </syg-button>
  </syg-buttons>
  <syg-title>Dark Toolbar</syg-title>
</syg-toolbar>
```


### React

```tsx
import React from 'react';
import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ToolbarExample: React.FC = () => (
  <IonToolbar>
    <IonTitle>Title Only</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>Back Button</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonTitle size="small">Small Title above a Default Title</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>Default Title</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Default Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="solid">
        <IonIcon slot="start" icon={personCircle} />
        Contact
      </IonButton>
    </IonButtons>
    <IonTitle>Solid Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton fill="solid" color="secondary">
        Help
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="outline">
        <IonIcon slot="start" icon={star} />
        Star
      </IonButton>
    </IonButtons>
    <IonTitle>Outline Buttons</IonTitle>
    <IonButtons slot="primary">
      <IonButton color="danger" fill="outline">
        Edit
        <IonIcon slot="end" icon={create} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>Account</IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">Edit</IonButton>
    </IonButtons>
    <IonTitle>Text Only Buttons</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Left side menu toggle</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>Right side menu toggle</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="Search Favorites" />
  </IonToolbar>

  <IonToolbar>
    <IonSegment value="all">
      <IonSegmentButton value="all">
        All
      </IonSegmentButton>
      <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
    </IonSegment>
  </IonToolbar>

  <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Secondary Toolbar</IonTitle>
  </IonToolbar>

  <IonToolbar color="dark">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>Dark Toolbar</IonTitle>
  </IonToolbar>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'toolbar-example',
  styleUrl: 'toolbar-example.css'
})
export class ToolbarExample {

  clickedStar() {
    console.log("Clicked star button");
  }

  clickedSearch() {
    console.log("Clicked search button");
  }

  render() {
    return [
      <syg-toolbar>
        <syg-title>Title Only</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Back Button</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-title size="small">Small Title above a Default Title</syg-title>
      </syg-toolbar>,
      <syg-toolbar>
        <syg-title>Default Title</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="secondary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Default Buttons</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button fill="solid">
            <ion-icon slot="start" name="person-circle"></ion-icon>
            Contact
          </syg-button>
        </syg-buttons>
        <syg-title>Solid Buttons</syg-title>
        <syg-buttons slot="primary">
          <syg-button fill="solid" color="secondary">
            Help
            <ion-icon slot="end" name="help-circle"></ion-icon>
          </syg-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button fill="outline">
            <ion-icon slot="start" name="star"></ion-icon>
            Star
          </syg-button>
        </syg-buttons>
        <syg-title>Outline Buttons</syg-title>
        <syg-buttons slot="primary">
          <syg-button color="danger" fill="outline">
            Edit
            <ion-icon slot="end" name="create"></ion-icon>
          </syg-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button>
            Account
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="danger">
            Edit
          </syg-button>
        </syg-buttons>
        <syg-title>Text Only Buttons</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-menu-button autoHide={false}></syg-menu-button>

        </syg-buttons>
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Left side menu toggle</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="primary">
          <syg-button onClick={() => this.clickedStar()}>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Right side menu toggle</syg-title>
        <syg-buttons slot="end">
          <syg-menu-button autoHide={false}></syg-menu-button>

        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="primary">
          <syg-button onClick={() => this.clickedSearch()}>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-searchbar placeholder="Search Favorites"></syg-searchbar>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-segment value="all">
          <syg-segment-button value="all">
            All
          </syg-segment-button>
          <syg-segment-button value="favorites">
            Favorites
          </syg-segment-button>
        </syg-segment>
      </syg-toolbar>,

      <syg-toolbar color="secondary">
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="primary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Secondary Toolbar</syg-title>
      </syg-toolbar>,

      <syg-toolbar color="dark">
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="danger">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Dark Toolbar</syg-title>
      </syg-toolbar>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-toolbar>
    <syg-title>Title Only</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-back-button></syg-back-button>
    </syg-buttons>
    <syg-title>Back Button</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-title size="small">Small Title above a Default Title</syg-title>
  </syg-toolbar>
  <syg-toolbar>
    <syg-title>Default Title</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="secondary">
      <syg-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </syg-button>
      <syg-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-buttons slot="primary">
      <syg-button color="secondary">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Default Buttons</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="secondary">
      <syg-button fill="solid">
        <ion-icon slot="start" :icon="person-circle"></ion-icon>
        Contact
      </syg-button>
    </syg-buttons>
    <syg-title>Solid Buttons</syg-title>
    <syg-buttons slot="primary">
      <syg-button fill="solid" color="secondary">
        Help
        <ion-icon slot="end" :icon="help-circle"></ion-icon>
      </syg-button>
    </syg-buttons>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="secondary">
      <syg-button fill="outline">
        <ion-icon slot="start" :icon="star"></ion-icon>
        Star
      </syg-button>
    </syg-buttons>
    <syg-title>Outline Buttons</syg-title>
    <syg-buttons slot="primary">
      <syg-button color="danger" fill="outline">
        Edit
        <ion-icon slot="end" :icon="create"></ion-icon>
      </syg-button>
    </syg-buttons>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="secondary">
      <syg-button>
        Account
      </syg-button>
    </syg-buttons>
    <syg-buttons slot="primary">
      <syg-button color="danger">
        Edit
      </syg-button>
    </syg-buttons>
    <syg-title>Text Only Buttons</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="start">
      <syg-menu-button auto-hide="false"></syg-menu-button>

    </syg-buttons>
    <syg-buttons slot="secondary">
      <syg-button>
        <ion-icon slot="icon-only" :icon="star"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Left side menu toggle</syg-title>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="primary">
      <syg-button @click="clickedStar()">
        <ion-icon slot="icon-only" :icon="star"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Right side menu toggle</syg-title>
    <syg-buttons slot="end">
      <syg-menu-button auto-hide="false"></syg-menu-button>

    </syg-buttons>
  </syg-toolbar>

  <syg-toolbar>
    <syg-buttons slot="primary">
      <syg-button @click="clickedSearch()">
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-searchbar placeholder="Search Favorites"></syg-searchbar>
  </syg-toolbar>

  <syg-toolbar>
    <syg-segment value="all">
      <syg-segment-button value="all">
        All
      </syg-segment-button>
      <syg-segment-button value="favorites">
        Favorites
      </syg-segment-button>
    </syg-segment>
  </syg-toolbar>

  <syg-toolbar color="secondary">
    <syg-buttons slot="secondary">
      <syg-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </syg-button>
      <syg-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-buttons slot="primary">
      <syg-button color="primary">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Secondary Toolbar</syg-title>
  </syg-toolbar>

  <syg-toolbar color="dark">
    <syg-buttons slot="secondary">
      <syg-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </syg-button>
      <syg-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-buttons slot="primary">
      <syg-button color="danger">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </syg-button>
    </syg-buttons>
    <syg-title>Dark Toolbar</syg-title>
  </syg-toolbar>
</template>

<script>
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import {
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  personCircle,
  search,
  star
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonButton,
    IonButtons,
    IonIcon,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      ellipsisHorizontal,
      ellipsisVertical,
      helpCircle,
      personCircle,
      search,
      star
    }
  }
});
</script>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`  | `color`   | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


## Slots

| Slot          | Description                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
|               | Content is placed between the named slots if provided without a slot.                                    |
| `"end"`       | Content is placed to the right of the toolbar text in LTR, and to the left in RTL.                       |
| `"primary"`   | Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode.     |
| `"secondary"` | Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode. |
| `"start"`     | Content is placed to the left of the toolbar text in LTR, and to the right in RTL.                       |


## CSS Custom Properties

| Name               | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `--background`     | Background of the toolbar                                                                                  |
| `--border-color`   | Color of the toolbar border                                                                                |
| `--border-style`   | Style of the toolbar border                                                                                |
| `--border-width`   | Width of the toolbar border                                                                                |
| `--color`          | Color of the toolbar text                                                                                  |
| `--min-height`     | Minimum height of the toolbar                                                                              |
| `--opacity`        | Opacity of the toolbar background                                                                          |
| `--padding-bottom` | Bottom padding of the toolbar                                                                              |
| `--padding-end`    | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar |
| `--padding-start`  | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar |
| `--padding-top`    | Top padding of the toolbar                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
