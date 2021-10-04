# syg-list

Lists are made up of multiple rows of items which can contain text, buttons, toggles,
icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

Lists support several interactions including swiping items to reveal options, dragging to reorder items within the list, and deleting items.


<!-- Auto Generated Below -->


## Usage

### Angular

```html
<!-- List of Text Items -->
<syg-list>
  <syg-item>
    <syg-label>Pokémon Yellow</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Mega Man X</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>The Legend of Zelda</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Pac-Man</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Super Mario World</syg-label>
  </syg-item>
</syg-list>

<!-- List of Input Items -->
<syg-list>
  <syg-item>
    <syg-label>Input</syg-label>
    <syg-input></syg-input>
  </syg-item>
  <syg-item>
    <syg-label>Toggle</syg-label>
    <syg-toggle slot="end"></syg-toggle>
  </syg-item>
  <syg-item>
    <syg-label>Radio</syg-label>
    <syg-radio slot="end"></syg-radio>
  </syg-item>
  <syg-item>
    <syg-label>Checkbox</syg-label>
    <syg-checkbox slot="start"></syg-checkbox>
  </syg-item>
</syg-list>

<!-- List of Sliding Items -->
<syg-list>
  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option (click)="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option (click)="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-list>
```


### Javascript

```html
<!-- List of Text Items -->
<syg-list>
  <syg-item>
    <syg-label>Pokémon Yellow</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Mega Man X</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>The Legend of Zelda</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Pac-Man</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Super Mario World</syg-label>
  </syg-item>
</syg-list>

<!-- List of Input Items -->
<syg-list>
  <syg-item>
    <syg-label>Input</syg-label>
    <syg-input></syg-input>
  </syg-item>
  <syg-item>
    <syg-label>Toggle</syg-label>
    <syg-toggle slot="end"></syg-toggle>
  </syg-item>
  <syg-item>
    <syg-label>Radio</syg-label>
    <syg-radio slot="end"></syg-radio>
  </syg-item>
  <syg-item>
    <syg-label>Checkbox</syg-label>
    <syg-checkbox slot="start"></syg-checkbox>
  </syg-item>
</syg-list>

<!-- List of Sliding Items -->
<syg-list>
  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option onClick="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <syg-item-sliding>
    <syg-item>
      <syg-label>Item</syg-label>
    </syg-item>
    <syg-item-options side="end">
      <syg-item-option onClick="unread(item)">Unread</syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-list>
```


### React

```tsx
import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

export const ListExample: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Input</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Toggle</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Radio</IonLabel>
        <IonRadio slot="end"></IonRadio>
      </IonItem>
      <IonItem>
        <IonLabel>Checkbox</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
    </IonList>

    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-example',
  styleUrl: 'list-example.css'
})
export class ListExample {
  unread(ev: Event) {
    console.log('Item is unread', ev);
  }

  render() {
    return [
      // List of Text Items
      <syg-list>
        <syg-item>
          <syg-label>Pokémon Yellow</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Mega Man X</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>The Legend of Zelda</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Pac-Man</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Super Mario World</syg-label>
        </syg-item>
      </syg-list>,

      // List of Input Items
      <syg-list>
        <syg-item>
          <syg-label>Input</syg-label>
          <syg-input></syg-input>
        </syg-item>
        <syg-item>
          <syg-label>Toggle</syg-label>
          <syg-toggle slot="end"></syg-toggle>
        </syg-item>
        <syg-item>
          <syg-label>Radio</syg-label>
          <syg-radio slot="end"></syg-radio>
        </syg-item>
        <syg-item>
          <syg-label>Checkbox</syg-label>
          <syg-checkbox slot="start"></syg-checkbox>
        </syg-item>
      </syg-list>,

      // List of Sliding Items
      <syg-list>
        <syg-item-sliding>
          <syg-item>
            <syg-label>Item</syg-label>
          </syg-item>
          <syg-item-options side="end">
            <syg-item-option onClick={(ev) => this.unread(ev)}>Unread</syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        <syg-item-sliding>
          <syg-item>
            <syg-label>Item</syg-label>
          </syg-item>
          <syg-item-options side="end">
            <syg-item-option onClick={(ev) => this.unread(ev)}>Unread</syg-item-option>
          </syg-item-options>
        </syg-item-sliding>
      </syg-list>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- List of Text Items -->
  <syg-list>
    <syg-item>
      <syg-label>Pokémon Yellow</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Mega Man X</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>The Legend of Zelda</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Pac-Man</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Super Mario World</syg-label>
    </syg-item>
  </syg-list>

  <!-- List of Input Items -->
  <syg-list>
    <syg-item>
      <syg-label>Input</syg-label>
      <syg-input></syg-input>
    </syg-item>
    <syg-item>
      <syg-label>Toggle</syg-label>
      <syg-toggle slot="end"></syg-toggle>
    </syg-item>
    <syg-item>
      <syg-label>Radio</syg-label>
      <syg-radio slot="end"></syg-radio>
    </syg-item>
    <syg-item>
      <syg-label>Checkbox</syg-label>
      <syg-checkbox slot="start"></syg-checkbox>
    </syg-item>
  </syg-list>

  <!-- List of Sliding Items -->
  <syg-list>
    <syg-item-sliding>
      <syg-item>
        <syg-label>Item</syg-label>
      </syg-item>
      <syg-item-options side="end">
        <syg-item-option @click="unread(item)">Unread</syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <syg-item-sliding>
      <syg-item>
        <syg-label>Item</syg-label>
      </syg-item>
      <syg-item-options side="end">
        <syg-item-option @click="unread(item)">Unread</syg-item-option>
      </syg-item-options>
    </syg-item-sliding>
  </syg-list>
</template>

<script>
import { 
  IonCheckbox, 
  IonInput, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonList, 
  IonLabel, 
  IonRadio, 
  IonToggle 
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonCheckbox, 
    IonInput, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonList, 
    IonLabel, 
    IonRadio, 
    IonToggle 
  }
});
</script>
```



## Properties

| Property | Attribute | Description                                                         | Type                                       | Default     |
| -------- | --------- | ------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| `inset`  | `inset`   | If `true`, the list will have margin around it and rounded corners. | `boolean`                                  | `false`     |
| `lines`  | `lines`   | How the bottom border should be displayed on all items.             | `"full" \| "inset" \| "none" \| undefined` | `undefined` |
| `mode`   | `mode`    | The mode determines which platform styles to use.                   | `"ios" \| "md"`                            | `undefined` |


## Methods

### `closeSlidingItems() => Promise<boolean>`

If `syg-item-sliding` are used inside the list, this method closes
any open sliding item.

Returns `true` if an actual `syg-item-sliding` is closed.

#### Returns

Type: `Promise<boolean>`




## Dependencies

### Used by

 - syg-select-popover

### Graph
```mermaid
graph TD;
  syg-select-popover --> syg-list
  style syg-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
