# syg-item-sliding

A sliding item contains an item that can be dragged to reveal buttons. It requires an [item](../item) component as a child. All options to reveal should be placed in the [item options](../item-options) element.


## Swipe Direction

By default, the buttons are placed on the `"end"` side. This means that options are revealed when the sliding item is swiped from end to start, i.e. from right to left in LTR, but from left to right in RTL. To place them on the opposite side, so that they are revealed when swiping in the opposite direction, set the `side` attribute to `"start"` on the [`syg-item-options`](../item-options) element. Up to two `syg-item-options` can be used at the same time in order to reveal two different sets of options depending on the swiping direction.


## Options Layout

By default if an icon is placed with text in the [item option](../item-option), it will display the icon on top of the text, but the icon slot can be changed to any of the following to position it in the option.

| Slot        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `start`     | In LTR, start is the left side of the button, and in RTL it is the right |
| `top`       | The icon is above the text                                               |
| `icon-only` | The icon is the only content of the button                               |
| `bottom`    | The icon is below the text                                               |
| `end`       | In LTR, end is the right side of the button, and in RTL it is the left   |


## Expandable Options

Options can be expanded to take up the full width of the item if you swipe past a certain point. This can be combined with the `ionSwipe` event to call methods on the class.

## Interfaces

### ItemSlidingCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ItemSlidingCustomEvent extends CustomEvent {
  target: HTMLIonItemSlidingElement;
}
```


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<syg-list>
  <!-- Sliding item with text options on both sides -->
  <syg-item-sliding>
    <syg-item-options side="start">
      <syg-item-option (click)="favorite(item)">Favorite</syg-item-option>
      <syg-item-option color="danger" (click)="share(item)">Share</syg-item-option>
    </syg-item-options>

    <syg-item>
      <syg-label>Item Options</syg-label>
    </syg-item>

    <syg-item-options side="end">
      <syg-item-option (click)="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with expandable options on both sides -->
  <syg-item-sliding>
    <syg-item-options side="start">
      <syg-item-option color="danger" expandable>
        Delete
      </syg-item-option>
    </syg-item-options>

    <syg-item>
      <syg-label>Expandable Options</syg-label>
    </syg-item>

    <syg-item-options side="end">
      <syg-item-option color="tertiary" expandable>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Multi-line sliding item with icon options on both sides -->
  <syg-item-sliding id="item100">
    <syg-item href="#">
      <syg-label>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </syg-label>
      <syg-note slot="end">
        10:45 AM
      </syg-note>
    </syg-item>

    <syg-item-options side="start">
      <syg-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </syg-item-option>
    </syg-item-options>

    <syg-item-options side="end">
      <syg-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </syg-item-option>
      <syg-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon start options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Start
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon end options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons End
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon top options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Top
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon bottom options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Bottom
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-list>
```


### Javascript

```html
<syg-list>
  <!-- Sliding item with text options on both sides -->
  <syg-item-sliding>
    <syg-item-options side="start">
      <syg-item-option onClick="favorite(item)">Favorite</syg-item-option>
      <syg-item-option color="danger" onClick="share(item)">Share</syg-item-option>
    </syg-item-options>

    <syg-item>
      <syg-label>Item Options</syg-label>
    </syg-item>

    <syg-item-options side="end">
      <syg-item-option onClick="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with expandable options on both sides -->
  <syg-item-sliding>
    <syg-item-options side="start">
      <syg-item-option color="danger" expandable>
        Delete
      </syg-item-option>
    </syg-item-options>

    <syg-item>
      <syg-label>Expandable Options</syg-label>
    </syg-item>

    <syg-item-options side="end">
      <syg-item-option color="tertiary" expandable>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Multi-line sliding item with icon options on both sides -->
  <syg-item-sliding id="item100">
    <syg-item href="#">
      <syg-label>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </syg-label>
      <syg-note slot="end">
        10:45 AM
      </syg-note>
    </syg-item>

    <syg-item-options side="start">
      <syg-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </syg-item-option>
    </syg-item-options>

    <syg-item-options side="end">
      <syg-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </syg-item-option>
      <syg-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon start options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Start
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon end options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons End
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon top options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Top
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <!-- Sliding item with icon bottom options on end side -->
  <syg-item-sliding>
    <syg-item>
      <syg-label>
        Sliding Item, Icons Bottom
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        More
      </syg-item-option>
      <syg-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        Archive
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-list>
```


### React

```tsx
import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ItemSlidingExample: React.FC = () => (
<IonList>
  {/* Sliding item with text options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
      <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
    </IonItemOptions>

    <IonItem>
      <IonLabel>Item Options</IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with expandable options on both sides */}
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption color="danger" expandable>
        Delete
      </IonItemOption>
    </IonItemOptions>

    <IonItem>
      <IonLabel>Expandable Options</IonLabel>
    </IonItem>

    <IonItemOptions side="end">
      <IonItemOption color="tertiary" expandable>
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Multi-line sliding item with icon options on both sides */}
  <IonItemSliding id="item100">
    <IonItem href="#">
      <IonLabel>
        <h2>HubStruck Notifications</h2>
        <p>A new message in your network</p>
        <p>Oceanic Next has joined your network</p>
      </IonLabel>
      <IonNote slot="end">
        10:45 AM
      </IonNote>
    </IonItem>

    <IonItemOptions side="start">
      <IonItemOption>
        <IonIcon slot="icon-only" icon={heart} />
      </IonItemOption>
    </IonItemOptions>

    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon slot="icon-only" icon={trash} />
      </IonItemOption>
      <IonItemOption>
        <IonIcon slot="icon-only" icon={star} />
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon start options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Start
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="start" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="start" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon end options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons End
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="end" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="end" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon top options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Top
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="top" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="top" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>

  {/* Sliding item with icon bottom options on end side */}
  <IonItemSliding>
    <IonItem>
      <IonLabel>
        Sliding Item, Icons Bottom
      </IonLabel>
    </IonItem>
    <IonItemOptions>
      <IonItemOption color="primary">
        <IonIcon slot="bottom" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
        More
      </IonItemOption>
      <IonItemOption color="secondary">
        <IonIcon slot="bottom" icon={archive} />
        Archive
      </IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
</IonList>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-sliding-example',
  styleUrl: 'item-sliding-example.css'
})
export class ItemSlidingExample {
  favorite(ev: any) {
    console.log('Favorite clicked', ev);
  }

  share(ev: any) {
    console.log('Favorite clicked', ev);
  }

  unread(ev: any) {
    console.log('Favorite clicked', ev);
  }

  render() {
    return [
      <syg-list>
        {/* Sliding item with text options on both sides */}
        <syg-item-sliding>
          <syg-item-options side="start">
            <syg-item-option onClick={(ev) => this.favorite(ev)}>Favorite</syg-item-option>
            <syg-item-option color="danger" onClick={(ev) => this.share(ev)}>Share</syg-item-option>
          </syg-item-options>

          <syg-item>
            <syg-label>Item Options</syg-label>
          </syg-item>

          <syg-item-options side="end">
            <syg-item-option onClick={(ev) => this.unread(ev)}>Unread</syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Sliding item with expandable options on both sides */}
        <syg-item-sliding>
          <syg-item-options side="start">
            <syg-item-option color="danger" expandable>
              Delete
            </syg-item-option>
          </syg-item-options>

          <syg-item>
            <syg-label>Expandable Options</syg-label>
          </syg-item>

          <syg-item-options side="end">
            <syg-item-option color="tertiary" expandable>
              Archive
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Multi-line sliding item with icon options on both sides */}
        <syg-item-sliding id="item100">
          <syg-item href="#">
            <syg-label>
              <h2>HubStruck Notifications</h2>
              <p>A new message in your network</p>
              <p>Oceanic Next has joined your network</p>
            </syg-label>
            <syg-note slot="end">
              10:45 AM
            </syg-note>
          </syg-item>

          <syg-item-options side="start">
            <syg-item-option>
              <ion-icon slot="icon-only" name="heart"></ion-icon>
            </syg-item-option>
          </syg-item-options>

          <syg-item-options side="end">
            <syg-item-option color="danger">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
            </syg-item-option>
            <syg-item-option>
              <ion-icon slot="icon-only" name="star"></ion-icon>
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Sliding item with icon start options on end side */}
        <syg-item-sliding>
          <syg-item>
            <syg-label>
              Sliding Item, Icons Start
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option color="primary">
              <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </syg-item-option>
            <syg-item-option color="secondary">
              <ion-icon slot="start" name="archive"></ion-icon>
              Archive
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Sliding item with icon end options on end side */}
        <syg-item-sliding>
          <syg-item>
            <syg-label>
              Sliding Item, Icons End
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option color="primary">
              <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </syg-item-option>
            <syg-item-option color="secondary">
              <ion-icon slot="end" name="archive"></ion-icon>
              Archive
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Sliding item with icon top options on end side */}
        <syg-item-sliding>
          <syg-item>
            <syg-label>
              Sliding Item, Icons Top
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option color="primary">
              <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </syg-item-option>
            <syg-item-option color="secondary">
              <ion-icon slot="top" name="archive"></ion-icon>
              Archive
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        {/* Sliding item with icon bottom options on end side */}
        <syg-item-sliding>
          <syg-item>
            <syg-label>
              Sliding Item, Icons Bottom
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option color="primary">
              <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              More
            </syg-item-option>
            <syg-item-option color="secondary">
              <ion-icon slot="bottom" name="archive"></ion-icon>
              Archive
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>
      </syg-list>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-list>
    <!-- Sliding item with text options on both sides -->
    <syg-item-sliding>
      <syg-item-options side="start">
        <syg-item-option @click="favorite(item)">Favorite</syg-item-option>
        <syg-item-option color="danger" @click="share(item)">Share</syg-item-option>
      </syg-item-options>

      <syg-item>
        <syg-label>Item Options</syg-label>
      </syg-item>

      <syg-item-options side="end">
        <syg-item-option @click="unread(item)">Unread</syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with expandable options on both sides -->
    <syg-item-sliding>
      <syg-item-options side="start">
        <syg-item-option color="danger" expandable>
          Delete
        </syg-item-option>
      </syg-item-options>

      <syg-item>
        <syg-label>Expandable Options</syg-label>
      </syg-item>

      <syg-item-options side="end">
        <syg-item-option color="tertiary" expandable>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Multi-line sliding item with icon options on both sides -->
    <syg-item-sliding id="item100">
      <syg-item href="#">
        <syg-label>
          <h2>HubStruck Notifications</h2>
          <p>A new message in your network</p>
          <p>Oceanic Next has joined your network</p>
        </syg-label>
        <syg-note slot="end">
          10:45 AM
        </syg-note>
      </syg-item>

      <syg-item-options side="start">
        <syg-item-option>
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </syg-item-option>
      </syg-item-options>

      <syg-item-options side="end">
        <syg-item-option color="danger">
          <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </syg-item-option>
        <syg-item-option>
          <ion-icon slot="icon-only" :icon="star"></ion-icon>
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon start options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Start
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="start" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="start" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon end options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons End
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="end" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="end" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon top options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Top
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="top" :ios="ellipsis-horizontal" :md="ellipsis-vertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="top" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <!-- Sliding item with icon bottom options on end side -->
    <syg-item-sliding>
      <syg-item>
        <syg-label>
          Sliding Item, Icons Bottom
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option color="primary">
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          More
        </syg-item-option>
        <syg-item-option color="secondary">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          Archive
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>
  </syg-list>
</template>

<script>
import {
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList
} from '@ionic/vue';
import {
  archive,
  ellipsisHorizontal,
  ellipsisVertical,
  heart,
  star,
  trash
} from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonIcon,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList
  },
  setup() {
    return {
      archive,
      ellipsisHorizontal,
      ellipsisVertical,
      heart,
      star,
      trash
    }
  }
});
</script>
```



## Properties

| Property   | Attribute  | Description                                                | Type      | Default |
| ---------- | ---------- | ---------------------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the sliding item. | `boolean` | `false` |


## Events

| Event     | Description                                | Type               |
| --------- | ------------------------------------------ | ------------------ |
| `ionDrag` | Emitted when the sliding position changes. | `CustomEvent<any>` |


## Methods

### `close() => Promise<void>`

Close the sliding item. Items can also be closed from the [List](../list).

#### Returns

Type: `Promise<void>`



### `closeOpened() => Promise<boolean>`

Close all of the sliding items in the list. Items can also be closed from the [List](../list).

#### Returns

Type: `Promise<boolean>`



### `getOpenAmount() => Promise<number>`

Get the amount the item is open in pixels.

#### Returns

Type: `Promise<number>`



### `getSlidingRatio() => Promise<number>`

Get the ratio of the open amount of the item compared to the width of the options.
If the number returned is positive, then the options on the right side are open.
If the number returned is negative, then the options on the left side are open.
If the absolute value of the number is greater than 1, the item is open more than
the width of the options.

#### Returns

Type: `Promise<number>`



### `open(side: Side | undefined) => Promise<void>`

Open the sliding item.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
