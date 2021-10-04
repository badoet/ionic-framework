```html
<syg-content>
  <syg-button (click)="toggleInfiniteScroll()" expand="block">
    Toggle Infinite Scroll
  </syg-button>

  <syg-list></syg-list>

  <syg-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
    <syg-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data...">
    </syg-infinite-scroll-content>
  </syg-infinite-scroll>
</syg-content>
```

```typescript
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'infinite-scroll-example',
  templateUrl: 'infinite-scroll-example.html',
  styleUrls: ['./infinite-scroll-example.css']
})
export class InfiniteScrollExample {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
```
