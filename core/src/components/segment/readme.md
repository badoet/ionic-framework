# syg-segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

## Scrollable Segments

Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the `scrollable` property to `true`. This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.

## Accessibility

### Keyboard Navigation

The component has full keyboard support for navigating between and selecting `syg-segment-button` elements. By default, keyboard navigation will only focus `syg-segment-button` elements, but you can use the `selectOnFocus` property to ensure that they get selected on focus as well. The following table details what each key does:

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowRight`       | Focuses the next focusable element.                            |
| `ArrowLeft`        | Focuses the previous focusable element.                        |
| `Home`             | Focuses the first focusable element.                           |
| `End`              | Focuses the last focusable element.                            |
| `Space` or `Enter` | Selects the element that is currently focused.                 |

## Interfaces

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
}
```

<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- Default Segment -->
<syg-segment (ionChange)="segmentChanged($event)">
  <syg-segment-button value="friends">
    <syg-label>Friends</syg-label>
  </syg-segment-button>
  <syg-segment-button value="enemies">
    <syg-label>Enemies</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Disabled Segment -->
<syg-segment (ionChange)="segmentChanged($event)" disabled value="sunny">
  <syg-segment-button value="sunny">
    <syg-label>Sunny</syg-label>
  </syg-segment-button>
  <syg-segment-button value="rainy">
    <syg-label>Rainy</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Segment with anchors -->
<syg-segment (ionChange)="segmentChanged($event)">
  <syg-segment-button value="dogs">
    <syg-label>Dogs</syg-label>
  </syg-segment-button>
  <syg-segment-button value="cats">
    <syg-label>Cats</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Scrollable Segment -->
<syg-segment scrollable value="heart">
  <syg-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </syg-segment-button>
</syg-segment>

<!-- Segment with secondary color -->
<syg-segment (ionChange)="segmentChanged($event)" color="secondary">
  <syg-segment-button value="standard">
    <syg-label>Standard</syg-label>
  </syg-segment-button>
  <syg-segment-button value="hybrid">
    <syg-label>Hybrid</syg-label>
  </syg-segment-button>
  <syg-segment-button value="sat">
    <syg-label>Satellite</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Segment in a toolbar -->
<syg-toolbar>
  <syg-segment (ionChange)="segmentChanged($event)">
    <syg-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </syg-segment-button>
  </syg-segment>
</syg-toolbar>

<!-- Segment with default selection -->
<syg-segment (ionChange)="segmentChanged($event)" value="javascript">
  <syg-segment-button value="python">
    <syg-label>Python</syg-label>
  </syg-segment-button>
  <syg-segment-button value="javascript">
    <syg-label>Javascript</syg-label>
  </syg-segment-button>
</syg-segment>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'segment-example',
  templateUrl: 'segment-example.html',
  styleUrls: ['./segment-example.css'],
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
```


### Javascript

```html
<!-- Default Segment -->
<syg-segment>
  <syg-segment-button value="friends">
    <syg-label>Friends</syg-label>
  </syg-segment-button>
  <syg-segment-button value="enemies">
    <syg-label>Enemies</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Disabled Segment -->
<syg-segment disabled value="sunny">
  <syg-segment-button value="sunny">
    <syg-label>Sunny</syg-label>
  </syg-segment-button>
  <syg-segment-button value="rainy">
    <syg-label>Rainy</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Segment with anchors -->
<syg-segment>
  <syg-segment-button value="dogs">
    <syg-label>Dogs</syg-label>
  </syg-segment-button>
  <syg-segment-button value="cats">
    <syg-label>Cats</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Scrollable Segment -->
<syg-segment scrollable value="heart">
  <syg-segment-button value="home">
    <ion-icon name="home"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="heart">
    <ion-icon name="heart"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="pin">
    <ion-icon name="pin"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="star">
    <ion-icon name="star"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="call">
    <ion-icon name="call"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="globe">
    <ion-icon name="globe"></ion-icon>
  </syg-segment-button>
  <syg-segment-button value="basket">
    <ion-icon name="basket"></ion-icon>
  </syg-segment-button>
</syg-segment>

<!-- Segment with secondary color -->
<syg-segment color="secondary">
  <syg-segment-button value="standard">
    <syg-label>Standard</syg-label>
  </syg-segment-button>
  <syg-segment-button value="hybrid">
    <syg-label>Hybrid</syg-label>
  </syg-segment-button>
  <syg-segment-button value="sat">
    <syg-label>Satellite</syg-label>
  </syg-segment-button>
</syg-segment>

<!-- Segment in a toolbar -->
<syg-toolbar>
  <syg-segment>
    <syg-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </syg-segment-button>
  </syg-segment>
</syg-toolbar>

<!-- Segment with default selection -->
<syg-segment value="javascript">
  <syg-segment-button value="python">
    <syg-label>Python</syg-label>
  </syg-segment-button>
  <syg-segment-button value="javascript">
    <syg-label>Javascript</syg-label>
  </syg-segment-button>
</syg-segment>
```

```javascript
// Listen for ionChange on all segments
const segments = document.querySelectorAll('syg-segment')
for (let i = 0; i < segments.length; i++) {
  segments[i].addEventListener('ionChange', (ev) => {
    console.log('Segment changed', ev);
  })
}
```


### React

```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import { call, home, heart, pin, star, globe, basket, camera, bookmark } from 'ionicons/icons';

export const SegmentExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SegmentExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- Default Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="friends">
            <IonLabel>Friends</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Enemies</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Disabled Segment --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} disabled value="sunny">
          <IonSegmentButton value="sunny">
            <IonLabel>Sunny</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="rainy">
            <IonLabel>Rainy</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with anchors --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="dogs">
            <IonLabel>Dogs</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="cats">
            <IonLabel>Cats</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Scrollable Segment --*/}
        <IonSegment scrollable value="heart">
          <IonSegmentButton value="home">
            <IonIcon icon={home} />
          </IonSegmentButton>
          <IonSegmentButton value="heart">
            <IonIcon icon={heart} />
          </IonSegmentButton>
          <IonSegmentButton value="pin">
            <IonIcon icon={pin} />
          </IonSegmentButton>
          <IonSegmentButton value="star">
            <IonIcon icon={star} />
          </IonSegmentButton>
          <IonSegmentButton value="call">
            <IonIcon icon={call} />
          </IonSegmentButton>
          <IonSegmentButton value="globe">
            <IonIcon icon={globe} />
          </IonSegmentButton>
          <IonSegmentButton value="basket">
            <IonIcon icon={basket} />
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment with secondary color --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
          <IonSegmentButton value="standard">
            <IonLabel>Standard</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hybrid">
            <IonLabel>Hybrid</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sat">
            <IonLabel>Satellite</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/*-- Segment in a toolbar --*/}
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="camera">
              <IonIcon icon={camera} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">
              <IonIcon icon={bookmark} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {/*-- Segment with default selection --*/}
        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript">
          <IonSegmentButton value="python">
            <IonLabel>Python</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="javascript">
            <IonLabel>Javascript</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
    </IonPage>
  );
};

```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'segment-example',
  styleUrl: 'segment-example.css'
})
export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  render() {
     return [
      // Default Segment
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <syg-segment-button value="friends">
          <syg-label>Friends</syg-label>
        </syg-segment-button>
        <syg-segment-button value="enemies">
          <syg-label>Enemies</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Disabled Segment
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)} disabled={true} value="sunny">
        <syg-segment-button value="sunny">
          <syg-label>Sunny</syg-label>
        </syg-segment-button>
        <syg-segment-button value="rainy">
          <syg-label>Rainy</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Segment with anchors
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <syg-segment-button value="dogs">
          <syg-label>Dogs</syg-label>
        </syg-segment-button>
        <syg-segment-button value="cats">
          <syg-label>Cats</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Scrollable Segment
      <syg-segment scrollable value="heart">
        <syg-segment-button value="home">
          <ion-icon name="home"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="star">
          <ion-icon name="star"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="globe">
          <ion-icon name="globe"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="basket">
          <ion-icon name="basket"></ion-icon>
        </syg-segment-button>
      </syg-segment>,

      // Segment with secondary color
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)} color="secondary">
        <syg-segment-button value="standard">
          <syg-label>Standard</syg-label>
        </syg-segment-button>
        <syg-segment-button value="hybrid">
          <syg-label>Hybrid</syg-label>
        </syg-segment-button>
        <syg-segment-button value="sat">
          <syg-label>Satellite</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Segment in a toolbar
      <syg-toolbar>
        <syg-segment onIonChange={(ev) => this.segmentChanged(ev)}>
          <syg-segment-button value="camera">
            <ion-icon name="camera"></ion-icon>
          </syg-segment-button>
          <syg-segment-button value="bookmark">
            <ion-icon name="bookmark"></ion-icon>
          </syg-segment-button>
        </syg-segment>
      </syg-toolbar>,

      // Segment with default selection
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)} value="javascript">
        <syg-segment-button value="python">
          <syg-label>Python</syg-label>
        </syg-segment-button>
        <syg-segment-button value="javascript">
          <syg-label>Javascript</syg-label>
        </syg-segment-button>
      </syg-segment>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Segment -->
  <syg-segment @ionChange="segmentChanged($event)">
    <syg-segment-button value="friends">
      <syg-label>Friends</syg-label>
    </syg-segment-button>
    <syg-segment-button value="enemies">
      <syg-label>Enemies</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Disabled Segment -->
  <syg-segment @ionChange="segmentChanged($event)" disabled value="sunny">
    <syg-segment-button value="sunny">
      <syg-label>Sunny</syg-label>
    </syg-segment-button>
    <syg-segment-button value="rainy">
      <syg-label>Rainy</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment with anchors -->
  <syg-segment @ionChange="segmentChanged($event)">
    <syg-segment-button value="dogs">
      <syg-label>Dogs</syg-label>
    </syg-segment-button>
    <syg-segment-button value="cats">
      <syg-label>Cats</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Scrollable Segment -->
  <syg-segment scrollable value="heart">
    <syg-segment-button value="home">
      <ion-icon name="home"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="heart">
      <ion-icon name="heart"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="pin">
      <ion-icon name="pin"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="star">
      <ion-icon name="star"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="call">
      <ion-icon name="call"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="globe">
      <ion-icon name="globe"></ion-icon>
    </syg-segment-button>
    <syg-segment-button value="basket">
      <ion-icon name="basket"></ion-icon>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment with secondary color -->
  <syg-segment @ionChange="segmentChanged($event)" color="secondary">
    <syg-segment-button value="standard">
      <syg-label>Standard</syg-label>
    </syg-segment-button>
    <syg-segment-button value="hybrid">
      <syg-label>Hybrid</syg-label>
    </syg-segment-button>
    <syg-segment-button value="sat">
      <syg-label>Satellite</syg-label>
    </syg-segment-button>
  </syg-segment>

  <!-- Segment in a toolbar -->
  <syg-toolbar>
    <syg-segment @ionChange="segmentChanged($event)">
      <syg-segment-button value="camera">
        <ion-icon name="camera"></ion-icon>
      </syg-segment-button>
      <syg-segment-button value="bookmark">
        <ion-icon name="bookmark"></ion-icon>
      </syg-segment-button>
    </syg-segment>
  </syg-toolbar>

  <!-- Segment with default selection -->
  <syg-segment @ionChange="segmentChanged($event)" value="javascript">
    <syg-segment-button value="python">
      <syg-label>Python</syg-label>
    </syg-segment-button>
    <syg-segment-button value="javascript">
      <syg-label>Javascript</syg-label>
    </syg-segment-button>
  </syg-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSegment, IonSegmentButton, IonToolbar },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  }
});
</script>
```



## Properties

| Property        | Attribute         | Description                                                                                                                                                                                                                                                            | Type                          | Default     |
| --------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `color`         | `color`           | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`         | `undefined` |
| `disabled`      | `disabled`        | If `true`, the user cannot interact with the segment.                                                                                                                                                                                                                  | `boolean`                     | `false`     |
| `mode`          | `mode`            | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`               | `undefined` |
| `scrollable`    | `scrollable`      | If `true`, the segment buttons will overflow and the user can swipe to see them. In addition, this will disable the gesture to drag the indicator between the buttons in order to swipe to see hidden buttons.                                                         | `boolean`                     | `false`     |
| `selectOnFocus` | `select-on-focus` | If `true`, navigating to an `syg-segment-button` with the keyboard will focus and select the element. If `false`, keyboard navigation will only focus the `syg-segment-button` element.                                                                                | `boolean`                     | `false`     |
| `swipeGesture`  | `swipe-gesture`   | If `true`, users will be able to swipe between segment buttons to activate them.                                                                                                                                                                                       | `boolean`                     | `true`      |
| `value`         | `value`           | the value of the segment.                                                                                                                                                                                                                                              | `null \| string \| undefined` | `undefined` |


## Events

| Event       | Description                                                                                                | Type                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `ionChange` | Emitted when the value property has changed and any dragging pointer has been released from `syg-segment`. | `CustomEvent<SegmentChangeEventDetail>` |


## CSS Custom Properties

| Name           | Description                      |
| -------------- | -------------------------------- |
| `--background` | Background of the segment button |


## Dependencies

### Used by

 - [syg-datetime](../datetime)

### Graph
```mermaid
graph TD;
  syg-datetime --> syg-segment
  style syg-segment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
