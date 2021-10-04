```html
<!-- Default Refresher -->
<syg-content>
  <syg-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <syg-refresher-content></syg-refresher-content>
  </syg-refresher>
</syg-content>

<!-- Custom Refresher Properties -->
<syg-content>
  <syg-refresher slot="fixed" pullFactor="0.5" pullMin="100" pullMax="200">
    <syg-refresher-content></syg-refresher-content>
  </syg-refresher>
</syg-content>

<!-- Custom Refresher Content -->
<syg-content>
  <syg-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <syg-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="Pull to refresh"
      refreshingSpinner="circles"
      refreshingText="Refreshing...">
    </syg-refresher-content>
  </syg-refresher>
</syg-content>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'refresher-example',
  templateUrl: 'refresher-example.html',
  styleUrls: ['./refresher-example.css'],
})
export class RefresherExample {
  constructor() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
```