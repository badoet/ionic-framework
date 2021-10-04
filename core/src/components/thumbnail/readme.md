# syg-thumbnail

Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.

Thumbnails can be used by themselves or inside of any element. If placed inside of an `syg-item`, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to `start` or `end`, respectively.


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-thumbnail>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
</syg-thumbnail>

<syg-item>
  <syg-thumbnail slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-thumbnail>
  <syg-label>Item Thumbnail</syg-label>
</syg-item>
```


### React

```tsx
import React from 'react';
import { IonThumbnail, IonItem, IonLabel, IonContent } from '@ionic/react';

export const ThumbnailExample: React.FC = () => (
  <IonContent>
    <IonThumbnail>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonThumbnail>

    <IonItem>
      <IonThumbnail slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonThumbnail>
      <IonLabel>Item Thumbnail</IonLabel>
    </IonItem>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'thumbnail-example',
  styleUrl: 'thumbnail-example.css'
})
export class ThumbnailExample {
  render() {
    return [
      <syg-thumbnail>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
      </syg-thumbnail>,

      <syg-item>
        <syg-thumbnail slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </syg-thumbnail>
        <syg-label>Item Thumbnail</syg-label>
      </syg-item>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-thumbnail>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-thumbnail>

  <syg-item>
    <syg-thumbnail slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-thumbnail>
    <syg-label>Item Thumbnail</syg-label>
  </syg-item>
</template>

<script>
import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItem, IonLabel, IonThumbnail }
});
</script>
```



## CSS Custom Properties

| Name              | Description                    |
| ----------------- | ------------------------------ |
| `--border-radius` | Border radius of the thumbnail |
| `--size`          | Size of the thumbnail          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
