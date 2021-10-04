```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'slides-example',
  styleUrl: 'slides-example.css'
})
export class SlidesExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  private slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  render() {
    return [
      <syg-content>
        <syg-slides pager={true} options={this.slideOpts}>
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
    ];
  }
}
```

```css
/* Without setting height the slides will take up the height of the slide's content */
syg-slides {
  height: 100%;
}
```