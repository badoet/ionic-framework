# syg-avatar

Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

Avatars can be used by themselves or inside of any element. If placed inside of an `syg-chip` or `syg-item`, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an item, set the slot to `start` or `end`, respectively.


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-avatar>
  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
</syg-avatar>

<syg-chip>
  <syg-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-avatar>
  <syg-label>Chip Avatar</syg-label>
</syg-chip>

<syg-item>
  <syg-avatar slot="start">
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-avatar>
  <syg-label>Item Avatar</syg-label>
</syg-item>
```


### React

```tsx
import React from 'react';
import { IonAvatar, IonChip, IonItem, IonLabel, IonContent } from '@ionic/react';

export const AvatarExample: React.FC = () => (
  <IonContent>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>

    <IonChip>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Chip Avatar</IonLabel>
    </IonChip>

    <IonItem>
      <IonAvatar slot="start">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Item Avatar</IonLabel>
    </IonItem>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'avatar-example',
  styleUrl: 'avatar-example.css'
})
export class AvatarExample {
  render() {
    return [
      <syg-avatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
      </syg-avatar>,

      <syg-chip>
        <syg-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </syg-avatar>
        <syg-label>Chip Avatar</syg-label>
      </syg-chip>,

      <syg-item>
        <syg-avatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </syg-avatar>
        <syg-label>Item Avatar</syg-label>
      </syg-item>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </syg-avatar>

  <syg-chip>
    <syg-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-avatar>
    <syg-label>Chip Avatar</syg-label>
  </syg-chip>

  <syg-item>
    <syg-avatar slot="start">
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
    </syg-avatar>
    <syg-label>Item Avatar</syg-label>
  </syg-item>
</template>

<script>
import { IonAvatar, IonChip, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonAvatar, IonChip, IonItem, IonLabel }
});
</script>
```



## CSS Custom Properties

| Name              | Description                                 |
| ----------------- | ------------------------------------------- |
| `--border-radius` | Border radius of the avatar and inner image |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
