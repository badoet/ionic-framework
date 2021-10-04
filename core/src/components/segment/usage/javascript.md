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