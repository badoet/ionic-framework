```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-content-example',
  styleUrl: 'infinite-scroll-content-example.css'
})
export class InfiniteScrollContentExample {
  render() {
    return [
      <syg-content>
        <syg-infinite-scroll>
          <syg-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </syg-infinite-scroll-content>
        </syg-infinite-scroll>
      </syg-content>
    ];
  }
}
```