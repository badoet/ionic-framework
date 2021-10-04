```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
    <syg-content>
      <syg-slides pager="true" [options]="slideOpts">
        <syg-slide>
          <h1>Slide 1</h1>
        </syg-slide>
        <syg-slide>
          <h1>Slide 2</h1>
        </syg-slide>
        <syg-slide>
          <h1>Slide 3</h1>
        </syg-slide>
      </syg-slides>
    </syg-content>
  `
})
export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
```

```css
/* Without setting height the slides will take up the height of the slide's content */
syg-slides {
  height: 100%;
}
```
