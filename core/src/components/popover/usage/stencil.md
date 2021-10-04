```tsx
import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'popover-example',
  styleUrl: 'popover-example.css'
})
export class PopoverExample {
  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'page-popover',
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <syg-content>
        <syg-button onClick={(ev) => this.presentPopover(ev)}>Present Popover</syg-button>
      </syg-content>
    ];
  }
}
```

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-popover',
  styleUrl: 'page-popover.css',
})
export class PagePopover {
  render() {
    return [
      <syg-list>
        <syg-item>
          <syg-label>Documentation</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Feedback</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Settings</syg-label>
        </syg-item>
      </syg-list>
    ];
  }
}
```