# syg-breadcrumbs

Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.


<!-- Auto Generated Below -->


## Usage

### Angular

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


### Javascript

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
<syg-breadcrumbs max-items="4">
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
<syg-breadcrumbs max-items="4" items-before-collapse="2">
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
<syg-breadcrumbs max-items="4" items-after-collapse="3">
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
<syg-breadcrumbs max-items="4" items-before-collapse="0" items-after-collapse="3">
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
<syg-breadcrumbs max-items="4">
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

```javascript
const breadcrumbs = document.querySelector('syg-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', () => expandBreadcrumbs());

function expandBreadcrumbs() {
  breadcrumbs.maxItems = undefined;
}
```

### Popover on Collapsed Indicator Click

```html
<syg-breadcrumbs max-items="4">
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

```javascript
const breadcrumbs = document.querySelector('syg-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', (ev) => presentPopover(ev));

class ListPopover extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let breadcrumbTemplate = ``;
    this.collapsedBreadcrumbs.forEach(breadcrumb => {
      breadcrumbTemplate += `
        <syg-item href="${breadcrumb.href}">
          <syg-label>${breadcrumb.textContent}</syg-label>
        </syg-item>
      `;
    })
    this.innerHTML = `
      <syg-content>
        <syg-list>
          ${breadcrumbTemplate}
        </syg-list>
      </syg-content>
    `;
  }
}

customElements.define('list-popover', ListPopover);

async function presentPopover(ev) {
  const popover = Object.assign(document.createElement('syg-popover'), {
    component: 'list-popover',
    componentProps: {
      collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
    },
    event: ev
  });
  document.body.appendChild(popover);

  await popover.present();
}
```


### React

### Default

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Colors

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs color="secondary">
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Breadcrumbs with Icon


```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { document, folder, home } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Icon start --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      <IonIcon slot="start" icon={home}></IonIcon>
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Files
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      <IonIcon slot="start" icon={folder}></IonIcon>
      Projects
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      <IonIcon slot="start" icon={folder}></IonIcon>
      User Research
    </IonBreadcrumb>
    <IonBreadcrumb>
      <IonIcon slot="start" icon={document}></IonIcon>
      Survey.txt
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Icon end --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="end" icon={home}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#files">
      Files
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#projects">
      Projects
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#user-research">
      User Research
      <IonIcon slot="end" icon={folder}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      Survey.txt
      <IonIcon slot="end" icon={document}></IonIcon>
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Custom Separator

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Custom separator text --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <span slot="separator">|</span>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Custom separator icon --*/}
  <IonBreadcrumbs>
    <IonBreadcrumb href="#">
      Home
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
      <IonIcon slot="separator" icon={arrowForward}></IonIcon>
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Max Items

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  <IonBreadcrumbs maxItems={4}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```


### Items Before or After Collapse

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => (
  {/*-- Items before collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={2}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>,

  {/*-- Items before and after collapse --*/}
  <IonBreadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
    <IonBreadcrumb href="#">
      Home
    </IonBreadcrumb>
    <IonBreadcrumb href="#electronics">
      Electronics
    </IonBreadcrumb>
    <IonBreadcrumb href="#photography">
      Photography
    </IonBreadcrumb>
    <IonBreadcrumb href="#cameras">
      Cameras
    </IonBreadcrumb>
    <IonBreadcrumb href="#film">
      Film
    </IonBreadcrumb>
    <IonBreadcrumb>
      35 mm
    </IonBreadcrumb>
  </IonBreadcrumbs>
);
```

### Expand on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/react';

export const BreadcrumbsExample: React.FC = () => {
  const [maxBreadcrumbs, setMaxBreadcrumbs] = useState(4);

  const expandBreadcrumbs = () => {
    setMaxBreadcrumbs(undefined);
  }

  return (
    <IonBreadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => expandBreadcrumbs()}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```

### Popover on Collapsed Indicator Click

```tsx
import React from 'react';
import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, useIonPopover } from '@ionic/react';

const PopoverList: React.FC<{
  onHide: () => void;
  collapsedBreadcrumbs: HTMLElement[]
}> = ({ onHide, collapsedBreadcrumbs }) => (
  <IonContent>
    <IonList>
      {collapsedBreadcrumbs.map(breadcrumb => (
        <IonItem href={breadcrumb.href}>
          <IonLabel>{breadcrumb.textContent}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);

export const BreadcrumbsExample: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, { onHide: () => dismiss() });

  return (
    <IonBreadcrumbs maxItems={4} onIonCollapsedClick={(e) => present({ event: e.nativeEvent })}>
      <IonBreadcrumb href="#">
        Home
      </IonBreadcrumb>
      <IonBreadcrumb href="#electronics">
        Electronics
      </IonBreadcrumb>
      <IonBreadcrumb href="#photography">
        Photography
      </IonBreadcrumb>
      <IonBreadcrumb href="#cameras">
        Cameras
      </IonBreadcrumb>
      <IonBreadcrumb href="#film">
        Film
      </IonBreadcrumb>
      <IonBreadcrumb>
        35 mm
      </IonBreadcrumb>
    </IonBreadcrumbs>
  );
};
```


### Stencil

### Default

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
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
    ];
  }
}
```

### Colors

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
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
    ];
  }
}
```

### Breadcrumbs with Icon

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Icon start
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
      </syg-breadcrumbs>,

      // Icon end
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
    ];
  }
}
```

### Custom Separator

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Custom separator text
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
      </syg-breadcrumbs>,

      // Custom separator icon
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
    ];
  }
}
```

### Max Items

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      <syg-breadcrumbs maxItems={4}>
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
    ];
  }
}
```



### Items Before or After Collapse

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  render() {
    return [
      // Items before collapse
      <syg-breadcrumbs maxItems={4} itemsBeforeCollapse={2}>
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
      </syg-breadcrumbs>,

      // Items after collapse
      <syg-breadcrumbs maxItems={4} itemsAfterCollapse={3}>
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
      </syg-breadcrumbs>,

      // Items before and after collapse
      <syg-breadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
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
    ];
  }
}
```

### Expand on Collapsed Indicator Click

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  @State() maxBreadcrumbs = 4;

  expandBreadcrumbs() {
    maxBreadcrumbs = undefined;
  }

  render() {
    const { maxBreadcrumbs } = this;

    return [
      <syg-breadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => this.expandBreadcrumbs()}>
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
    ];
  }
}
```

### Popover on Collapsed Indicator Click

```tsx
import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'breadcrumbs-example',
  styleUrl: 'breadcrumbs-example.css'
})
export class BreadcrumbsExample {
  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'list-popover',
      componentProps: {
        collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
      },
      event: ev
    });
    await popover.present();
  }

  render() {
    return [
      <syg-breadcrumbs maxItems={4} onIonCollapsedClick={(ev) => this.presentPopover(ev)}>
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
    ];
  }
}
```

```tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-popover',
  styleUrl: 'list-popover.css',
})
export class ListPopover {
  @Prop() collapsedBreadcrumbs: HTMLElement[] = [];

  render() {
    return [
      <syg-content>
        <syg-list>
          {this.collapsedBreadcrumbs.map(breadcrumb => (
            <syg-item href={breadcrumb.href}>
              <syg-label>{breadcrumb.textContent}</syg-label>
            </syg-item>
          ))}
        </syg-list>
      </syg-content>
    ];
  }
}
```


### Vue

### Default

```html
<template>
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
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Colors

```html
<template>
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
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Breadcrumbs with Icon

```html
<template>
  <!-- Icon start -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      <ion-icon slot="start" :icon="home"></ion-icon>
      Home
    </syg-breadcrumb>
    <syg-breadcrumb href="#files">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Files
    </syg-breadcrumb>
    <syg-breadcrumb href="#projects">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      Projects
    </syg-breadcrumb>
    <syg-breadcrumb href="#user-research">
      <ion-icon slot="start" :icon="folder"></ion-icon>
      User Research
    </syg-breadcrumb>
    <syg-breadcrumb>
      <ion-icon slot="start" :icon="document"></ion-icon>
      Survey.txt
    </syg-breadcrumb>
  </syg-breadcrumbs>

  <!-- Icon end -->
  <syg-breadcrumbs>
    <syg-breadcrumb href="#">
      Home
      <ion-icon slot="end" :icon="home"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#files">
      Files
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#projects">
      Projects
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#user-research">
      User Research
      <ion-icon slot="end" :icon="folder"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb>
      Survey.txt
      <ion-icon slot="end" :icon="document"></ion-icon>
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { document, folder, home } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { document, folder, home }
  }
});
</script>
```

### Custom Separator

```html
<template>
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
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#electronics">
      Electronics
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#photography">
      Photography
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#cameras">
      Cameras
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb href="#film">
      Film
      <ion-icon slot="separator" :icon="arrowForward"></ion-icon>
    </syg-breadcrumb>
    <syg-breadcrumb>
      35 mm
    </syg-breadcrumb>
  </syg-breadcrumbs>
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs, IonIcon } from '@ionic/vue';
import { arrowForward } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs, IonIcon },
  setup() {
    return { arrowForward }
  }
});
</script>
```

### Max Items

```html
<template>
  <!-- Max Items -->
  <syg-breadcrumbs :max-items="4">
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
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Items Before or After Collapse

```html
<template>
  <!-- Items before collapse -->
  <syg-breadcrumbs :max-items="4" :items-before-collapse="2">
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
  <syg-breadcrumbs :max-items="4" :items-after-collapse="3">
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
  <syg-breadcrumbs :max-items="4" :items-before-collapse="0" :items-after-collapse="3">
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
</template>

<script>
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBreadcrumb, IonBreadcrumbs }
});
</script>
```

### Expand on Collapsed Indicator Click

```html
<template>
  <syg-breadcrumbs :max-items="maxBreadcrumbs" @ionCollapsedClick="expandBreadcrumbs()">
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
</template>

<script>
import { IonBadge, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  setup() {
    const maxBreadcrumbs = ref(4);

    return { maxBreadcrumbs };
  },
  methods: {
    expandBreadcrumbs() {
      maxBreadcrumbs.value = undefined;
    }
  }
});
</script>
```


### Popover on Collapsed Indicator Click

```html
<template>
  <syg-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
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
</template>

<script>
import { IonBadge, IonItem, IonLabel, popoverController } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import ListPopover from './popover.vue';

export default defineComponent({
  components: { IonBadge, IonItem, IonLabel },
  methods: {
    async presentPopover(ev: Event) {
      const popover = await popoverController.create({
        component: ListPopover,
        componentProps: {
          collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
        },
        event: ev
      });
      await popover.present();
    },
  }
});
</script>
```

```html
<template>
  <syg-content>
    <syg-list>
      <syg-item v-for="breadcrumb in $props.collapsedBreadcrumbs" :href="breadcrumb.href">
        <syg-label>{{ breadcrumb.textContent }}</syg-label>
      </syg-item>
    </syg-list>
  </syg-content>
</template>

<script>
import { IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListPopover',
  props: {
    collapsedBreadcrumbs: { type: Array, default: [] }
  },
  components: { IonContent, IonItem, IonLabel, IonList }
});
</script>
```



## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                                                                            | Type                  | Default     |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `color`               | `color`                 | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined` | `undefined` |
| `itemsAfterCollapse`  | `items-after-collapse`  | The number of breadcrumbs to show after the collapsed indicator. If this property exists `maxItems` will be ignored.                                                                                                                                                   | `number`              | `1`         |
| `itemsBeforeCollapse` | `items-before-collapse` | The number of breadcrumbs to show before the collapsed indicator. If this property exists `maxItems` will be ignored.                                                                                                                                                  | `number`              | `1`         |
| `maxItems`            | `max-items`             | The maximum number of breadcrumbs to show before collapsing.                                                                                                                                                                                                           | `number \| undefined` | `undefined` |
| `mode`                | `mode`                  | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`       | `undefined` |


## Events

| Event               | Description                                         | Type                                               |
| ------------------- | --------------------------------------------------- | -------------------------------------------------- |
| `ionCollapsedClick` | Emitted when the collapsed indicator is clicked on. | `CustomEvent<BreadcrumbCollapsedClickEventDetail>` |


## CSS Custom Properties

| Name           | Description                   |
| -------------- | ----------------------------- |
| `--background` | Background of the breadcrumbs |
| `--color`      | Text color of the breadcrumbs |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
