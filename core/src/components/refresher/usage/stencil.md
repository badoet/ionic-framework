```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'refresher-example',
  styleUrl: 'refresher-example.css'
})
export class RefresherExample {
  doRefresh(ev: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      ev.target.complete();
    }, 2000);
  }

  render() {
    return [
      // Default Refresher
      <syg-content>
        <syg-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <syg-refresher-content></syg-refresher-content>
        </syg-refresher>
      </syg-content>,

      // Custom Refresher Properties
      <syg-content>
        <syg-refresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200}>
          <syg-refresher-content></syg-refresher-content>
        </syg-refresher>
      </syg-content>,

      // Custom Refresher Content
      <syg-content>
        <syg-refresher slot="fixed" onIonRefresh={(ev) => this.doRefresh(ev)}>
          <syg-refresher-content
            pullingIcon="chevron-down-circle-outline"
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing...">
          </syg-refresher-content>
        </syg-refresher>
      </syg-content>
    ];
  }
}
```