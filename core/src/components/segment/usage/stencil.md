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