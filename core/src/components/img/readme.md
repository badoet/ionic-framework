# syg-img

Img is a tag that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses [Intersection Observer](https://caniuse.com/#feat=intersectionobserver) internally, which is supported in most modern browser, but falls back to a `setTimeout` when it is not supported.


<!-- Auto Generated Below -->


## Usage

### Angular

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


### React

```tsx
import React from 'react';
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

export const ImgExample: React.FC = () => (
  <IonContent>
    <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-example',
  styleUrl: 'img-example.css'
})
export class ImgExample {
  private items = [{
    'text': 'Item 1',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 2',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 3',
    'src': '/path/to/external/file.png'
  }];

  render() {
    return [
      <syg-list>
        {this.items.map(item =>
          <syg-item>
            <syg-thumbnail slot="start">
              <syg-img src={item.src}></syg-img>
            </syg-thumbnail>
            <syg-label>{item.text}</syg-label>
          </syg-item>
        )}
      </syg-list>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-list>
    <syg-item v-for="item in items" :key="item.src">
      <syg-thumbnail slot="start">
        <syg-img :src="item.src"></syg-img>
      </syg-thumbnail>
      <syg-label>{{item.text}}</syg-label>
    </syg-item>
  </syg-list>
</template>

<script>
import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonImg, IonItem, IonLabel, IonList, IonThumbnail },
  setup() {
    const items = [{
      'text': 'Item 1',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 2',
      'src': '/path/to/external/file.png'
    }, {
      'text': 'Item 3',
      'src': '/path/to/external/file.png'
    }];
    return { items }
  }
});
</script>
```



## Properties

| Property | Attribute | Description                                                                                                                                                                                                              | Type                  | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ----------- |
| `alt`    | `alt`     | This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded. | `string \| undefined` | `undefined` |
| `src`    | `src`     | The image URL. This attribute is mandatory for the `<img>` element.                                                                                                                                                      | `string \| undefined` | `undefined` |


## Events

| Event            | Description                                 | Type                |
| ---------------- | ------------------------------------------- | ------------------- |
| `ionError`       | Emitted when the img fails to load          | `CustomEvent<void>` |
| `ionImgDidLoad`  | Emitted when the image has finished loading | `CustomEvent<void>` |
| `ionImgWillLoad` | Emitted when the img src has been set       | `CustomEvent<void>` |


## Shadow Parts

| Part      | Description              |
| --------- | ------------------------ |
| `"image"` | The inner `img` element. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
