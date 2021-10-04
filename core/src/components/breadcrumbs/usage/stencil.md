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
