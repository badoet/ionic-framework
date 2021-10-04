```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-example',
  styleUrl: 'infinite-scroll-example.css'
})
export class InfiniteScrollExample {
  private infiniteScroll: HTMLIonInfiniteScrollElement;

  @State() data = [];

  componentWillLoad() {
    this.pushData();
  }

  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;

    for (var i = min; i < max; i++) {
      this.data.push('Item ' + i);
    }

    // Stencil does not re-render when pushing to an array
    // so create a new copy of the array
    // https://stenciljs.com/docs/reactive-data#handling-arrays-and-objects
    this.data = [
      ...this.data
    ];
  }

  loadData(ev) {
    setTimeout(() => {
      this.pushData();
      console.log('Loaded data');
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  render() {
    return [
      <syg-content>
        <syg-button onClick={() => this.toggleInfiniteScroll()} expand="block">
          Toggle Infinite Scroll
        </syg-button>

        <syg-list>
          {this.data.map(item =>
            <syg-item>
              <syg-label>{item}</syg-label>
            </syg-item>
          )}
        </syg-list>

        <syg-infinite-scroll
          ref={el => this.infiniteScroll = el}
          onIonInfinite={(ev) => this.loadData(ev)}>
          <syg-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more data...">
          </syg-infinite-scroll-content>
        </syg-infinite-scroll>
      </syg-content>
    ];
  }
}
```