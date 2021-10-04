```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'segment-button-example',
  styleUrl: 'segment-button-example.css'
})
export class SegmentButtonExample {
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  render() {
    return [
      // Segment buttons with text and click listener
      <syg-segment onIonChange={(ev) => this.segmentChanged(ev)}>
        <syg-segment-button>
          <syg-label>Friends</syg-label>
        </syg-segment-button>
        <syg-segment-button>
          <syg-label>Enemies</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Segment buttons with the first checked and the last disabled
      <syg-segment value="paid">
        <syg-segment-button value="paid">
          <syg-label>Paid</syg-label>
        </syg-segment-button>
        <syg-segment-button value="free">
          <syg-label>Free</syg-label>
        </syg-segment-button>
        <syg-segment-button disabled value="top">
          <syg-label>Top</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Segment buttons with values and icons
      <syg-segment>
        <syg-segment-button value="camera">
          <ion-icon name="camera"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="bookmark">
          <ion-icon name="bookmark"></ion-icon>
        </syg-segment-button>
      </syg-segment>,

      // Segment with a value that checks the last button
      <syg-segment value="shared">
        <syg-segment-button value="bookmarks">
          <syg-label>Bookmarks</syg-label>
        </syg-segment-button>
        <syg-segment-button value="reading">
          <syg-label>Reading List</syg-label>
        </syg-segment-button>
        <syg-segment-button value="shared">
          <syg-label>Shared Links</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Label only
      <syg-segment value="1">
        <syg-segment-button value="1">
          <syg-label>Item One</syg-label>
        </syg-segment-button>
        <syg-segment-button value="2">
          <syg-label>Item Two</syg-label>
        </syg-segment-button>
        <syg-segment-button value="3">
          <syg-label>Item Three</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Icon only
      <syg-segment value="heart">
        <syg-segment-button value="call">
          <ion-icon name="call"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="heart">
          <ion-icon name="heart"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="pin">
          <ion-icon name="pin"></ion-icon>
        </syg-segment-button>
      </syg-segment>,

      // Icon top
      <syg-segment value="2">
        <syg-segment-button value="1">
          <syg-label>Item One</syg-label>
          <ion-icon name="call"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="2">
          <syg-label>Item Two</syg-label>
          <ion-icon name="heart"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="3">
          <syg-label>Item Three</syg-label>
          <ion-icon name="pin"></ion-icon>
        </syg-segment-button>
      </syg-segment>,

      // Icon bottom
      <syg-segment value="1">
        <syg-segment-button value="1" layout="icon-bottom">
          <ion-icon name="call"></ion-icon>
          <syg-label>Item One</syg-label>
        </syg-segment-button>
        <syg-segment-button value="2" layout="icon-bottom">
          <ion-icon name="heart"></ion-icon>
          <syg-label>Item Two</syg-label>
        </syg-segment-button>
        <syg-segment-button value="3" layout="icon-bottom">
          <ion-icon name="pin"></ion-icon>
          <syg-label>Item Three</syg-label>
        </syg-segment-button>
      </syg-segment>,

      // Icon start
      <syg-segment value="1">
        <syg-segment-button value="1" layout="icon-start">
          <syg-label>Item One</syg-label>
          <ion-icon name="call"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="2" layout="icon-start">
          <syg-label>Item Two</syg-label>
          <ion-icon name="heart"></ion-icon>
        </syg-segment-button>
        <syg-segment-button value="3" layout="icon-start">
          <syg-label>Item Three</syg-label>
          <ion-icon name="pin"></ion-icon>
        </syg-segment-button>
      </syg-segment>,

      // Icon end
      <syg-segment value="1">
        <syg-segment-button value="1" layout="icon-end">
          <ion-icon name="call"></ion-icon>
          <syg-label>Item One</syg-label>
        </syg-segment-button>
        <syg-segment-button value="2" disabled layout="icon-end">
          <ion-icon name="heart"></ion-icon>
          <syg-label>Item Two</syg-label>
        </syg-segment-button>
        <syg-segment-button value="3" layout="icon-end">
          <ion-icon name="pin"></ion-icon>
          <syg-label>Item Three</syg-label>
        </syg-segment-button>
      </syg-segment>
    ];
  }
}
```