# syg-infinite-scroll-content

The `syg-infinite-scroll-content` component is the default child used by the `syg-infinite-scroll`. It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the `loadingSpinner` and `loadingText` properties.

## React

The `syg-infinite-scroll-content` component is not supported in React.

<!-- Auto Generated Below -->


## Usage

### Angular

```html
<syg-content>
  <syg-infinite-scroll>
    <syg-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data…">
    </syg-infinite-scroll-content>
  </syg-infinite-scroll>
</syg-content>
```


### Javascript

```html
<syg-content>
  <syg-infinite-scroll>
    <syg-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data…">
    </syg-infinite-scroll-content>
  </syg-infinite-scroll>
</syg-content>
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-content-example',
  styleUrl: 'infinite-scroll-content-example.css'
})
export class InfiniteScrollContentExample {
  render() {
    return [
      <syg-content>
        <syg-infinite-scroll>
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


### Vue

```html
<template>
  <syg-page>
    <syg-content>
      <syg-infinite-scroll>
        <syg-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data…">
        </syg-infinite-scroll-content>
      </syg-infinite-scroll>
    </syg-content>
  </syg-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage
 } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonPage
  }
});
```



## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                    | Default     |
| ---------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `loadingSpinner` | `loading-spinner` | An animated SVG spinner that shows while loading.                                                                                                                                                                                                                                                                               | `"bubbles" \| "circles" \| "circular" \| "crescent" \| "dots" \| "lines" \| "lines-sharp" \| "lines-sharp-small" \| "lines-small" \| null \| undefined` | `undefined` |
| `loadingText`    | `loading-text`    | Optional text to display while loading. `loadingText` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`  For more information: [Security Documentation](https://ionicframework.com/docs/faq/security) | `SygSafeString \| string \| undefined`                                                                                                                | `undefined` |


## Dependencies

### Depends on

- [syg-spinner](../spinner)

### Graph
```mermaid
graph TD;
  syg-infinite-scroll-content --> syg-spinner
  style syg-infinite-scroll-content fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
