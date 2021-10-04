```html
<!-- Default Checkbox -->
<syg-checkbox></syg-checkbox>

<!-- Disabled Checkbox -->
<syg-checkbox disabled="true"></syg-checkbox>

<!-- Checked Checkbox -->
<syg-checkbox checked="true"></syg-checkbox>

<!-- Checkbox Colors -->
<syg-checkbox color="primary"></syg-checkbox>
<syg-checkbox color="secondary"></syg-checkbox>
<syg-checkbox color="danger"></syg-checkbox>
<syg-checkbox color="light"></syg-checkbox>
<syg-checkbox color="dark"></syg-checkbox>

<!-- Checkboxes in a List -->
<syg-list>
  <syg-item *ngFor="let entry of form">
    <syg-label>{{entry.val}}</syg-label>
    <syg-checkbox slot="end" [(ngModel)]="entry.isChecked"></syg-checkbox>
  </syg-item>
</syg-list>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public form = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
}
```
