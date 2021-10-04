```html
<syg-list>
  <syg-item *ngFor="let item of items">
    <syg-thumbnail slot="start">
      <syg-img [src]="item.src"></syg-img>
    </syg-thumbnail>
    <syg-label>{{item.text}}</syg-label>
  </syg-item>
</syg-list>
```
