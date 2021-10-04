```html
<!-- Default backdrop -->
<syg-backdrop></syg-backdrop>

<!-- Backdrop that is not tappable -->
<syg-backdrop tappable="false"></syg-backdrop>

<!-- Backdrop that is not visible -->
<syg-backdrop visible="false"></syg-backdrop>

<!-- Backdrop with propagation -->
<syg-backdrop stopPropagation="false"></syg-backdrop>

<!-- Backdrop that sets dynamic properties -->
<syg-backdrop
  [tappable]="enableBackdropDismiss"
  [visible]="showBackdrop"
  [stopPropagation]="shouldPropagate">
</syg-backdrop>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'backdrop-example',
  templateUrl: 'backdrop-example.html',
  styleUrls: ['./backdrop-example.css'],
})
export class BackdropExample {
  enableBackdropDismiss = false;
  showBackdrop = false;
  shouldPropagate = false;
}
```
