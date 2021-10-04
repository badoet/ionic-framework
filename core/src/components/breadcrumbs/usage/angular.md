### Default

```html
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Colors

```html
<syg-breadcrumbs color="secondary">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Breadcrumbs with Icon

```html
<!-- Icon start -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    <ion-icon slot="start" name="home"></ion-icon>
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#files">
    <ion-icon slot="start" name="folder"></ion-icon>
    Files
  </syg-breadcrumb>
  <syg-breadcrumb href="#projects">
    <ion-icon slot="start" name="folder"></ion-icon>
    Projects
  </syg-breadcrumb>
  <syg-breadcrumb href="#user-research">
    <ion-icon slot="start" name="folder"></ion-icon>
    User Research
  </syg-breadcrumb>
  <syg-breadcrumb>
    <ion-icon slot="start" name="document"></ion-icon>
    Survey.txt
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Icon end -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <ion-icon slot="end" name="home"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#files">
    Files
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#projects">
    Projects
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#user-research">
    User Research
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb>
    Survey.txt
    <ion-icon slot="end" name="document"></ion-icon>
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Custom Separator

```html
<!-- Custom separator text -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Custom separator icon -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Max Items

```html
<!-- Max Items -->
<syg-breadcrumbs [maxItems]="4">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Items Before or After Collapse

```html
<!-- Items before collapse -->
<syg-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="2">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Items after collapse -->
<syg-breadcrumbs [maxItems]="4" [itemsAfterCollapse]="3">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Items before and after collapse -->
<syg-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="0" [itemsAfterCollapse]="3">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Expand on Collapsed Indicator Click

```html
<syg-breadcrumbs [maxItems]="maxBreadcrumbs" (ionCollapsedClick)="expandBreadcrumbs()">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'breadcrumbs-example',
  templateUrl: 'breadcrumbs-example.html',
  styleUrls: ['./breadcrumbs-example.css'],
})
export class BreadcrumbsExample {
  maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    this.maxBreadcrumbs = undefined;
  }
}
```

### Popover on Collapsed Indicator Click

```html
<syg-breadcrumbs [maxItems]="4" (ionCollapsedClick)="presentPopover($event)">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

```typescript
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'breadcrumbs-example',
  templateUrl: 'breadcrumbs-example.html',
  styleUrls: ['./breadcrumbs-example.css']
})
export class BreadcrumbsExample {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
      },
      event: ev
    });
    await popover.present();
  }
}
```

```html
<syg-content>
  <syg-list>
    <syg-item *ngFor="let breadcrumb of collapsedBreadcrumbs" [href]="breadcrumb.href">
      <syg-label>{{ breadcrumb.textContent }}</syg-label>
    </syg-item>
  </syg-list>
</syg-content>
```
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'popover-component',
})
export class PopoverComponent {
  @Input() collapsedBreadcrumbs: HTMLElement[] = [];

  constructor() {}

}
```
