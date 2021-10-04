# syg-item-group

Item groups are containers that organize similar items together. They can contain item dividers to divide the items into multiple sections. They can also be used to group sliding items.




<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-item-group>
  <syg-item-divider>
    <syg-label>A</syg-label>
  </syg-item-divider>

  <syg-item>
    <syg-label>Angola</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Argentina</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Armenia</syg-label>
  </syg-item>
</syg-item-group>

<syg-item-group>
  <syg-item-divider>
    <syg-label>B</syg-label>
  </syg-item-divider>

  <syg-item>
    <syg-label>Bangladesh</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Belarus</syg-label>
  </syg-item>
  <syg-item>
    <syg-label>Belgium</syg-label>
  </syg-item>
</syg-item-group>


<!-- They can also be used to group sliding items -->
<syg-item-group>
  <syg-item-divider>
    <syg-label>
      Fruits
    </syg-label>
  </syg-item-divider>

  <syg-item-sliding>
    <syg-item>
      <syg-label>
        <h3>Grapes</h3>
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option>
        Favorite
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <syg-item-sliding>
    <syg-item>
      <syg-label>
        <h3>Apples</h3>
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option>
        Favorite
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-item-group>

<syg-item-group>
  <syg-item-divider>
    <syg-label>
      Vegetables
    </syg-label>
  </syg-item-divider>

  <syg-item-sliding>
    <syg-item>
      <syg-label>
        <h3>Carrots</h3>
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option>
        Favorite
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>

  <syg-item-sliding>
    <syg-item>
      <syg-label>
        <h3>Celery</h3>
      </syg-label>
    </syg-item>
    <syg-item-options>
      <syg-item-option>
        Favorite
      </syg-item-option>
    </syg-item-options>
  </syg-item-sliding>
</syg-item-group>
```


### React

```tsx
import React from 'react';

import { IonItemGroup, IonItemDivider, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';

const Example: React.FC<{}> = () => (
  <>
    <IonItemGroup>
      <IonItemDivider>
        <IonLabel>A</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>Angola</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Argentina</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Armenia</IonLabel>
      </IonItem>
    </IonItemGroup>

    <IonItemGroup>
      <IonItemDivider>
        <IonLabel>B</IonLabel>
      </IonItemDivider>

      <IonItem>
        <IonLabel>Bangladesh</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Belarus</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Belgium</IonLabel>
      </IonItem>
    </IonItemGroup>


    {/*-- They can also be used to group sliding items --*/}
    <IonItemGroup>
      <IonItemDivider>
        <IonLabel>
          Fruits
        </IonLabel>
      </IonItemDivider>

      <IonItemSliding>
        <IonItem>
          <IonLabel>
            <h3>Grapes</h3>
          </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption>
            Favorite
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>
            <h3>Apples</h3>
          </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption>
            Favorite
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>

    <IonItemGroup>
      <IonItemDivider>
        <IonLabel>
          Vegetables
        </IonLabel>
      </IonItemDivider>

      <IonItemSliding>
        <IonItem>
          <IonLabel>
            <h3>Carrots</h3>
          </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption>
            Favorite
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItem>
          <IonLabel>
            <h3>Celery</h3>
          </IonLabel>
        </IonItem>
        <IonItemOptions>
          <IonItemOption>
            Favorite
          </IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonItemGroup>
  </>
);

export default Example;
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-group-example',
  styleUrl: 'item-group-example.css'
})
export class ItemGroupExample {
  render() {
    return [
      <syg-item-group>
        <syg-item-divider>
          <syg-label>A</syg-label>
        </syg-item-divider>

        <syg-item>
          <syg-label>Angola</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Argentina</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Armenia</syg-label>
        </syg-item>
      </syg-item-group>

      <syg-item-group>
        <syg-item-divider>
          <syg-label>B</syg-label>
        </syg-item-divider>

        <syg-item>
          <syg-label>Bangladesh</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Belarus</syg-label>
        </syg-item>
        <syg-item>
          <syg-label>Belgium</syg-label>
        </syg-item>
      </syg-item-group>


      // They can also be used to group sliding items
      <syg-item-group>
        <syg-item-divider>
          <syg-label>
            Fruits
          </syg-label>
        </syg-item-divider>

        <syg-item-sliding>
          <syg-item>
            <syg-label>
              <h3>Grapes</h3>
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option>
              Favorite
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        <syg-item-sliding>
          <syg-item>
            <syg-label>
              <h3>Apples</h3>
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option>
              Favorite
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>
      </syg-item-group>

      <syg-item-group>
        <syg-item-divider>
          <syg-label>
            Vegetables
          </syg-label>
        </syg-item-divider>

        <syg-item-sliding>
          <syg-item>
            <syg-label>
              <h3>Carrots</h3>
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option>
              Favorite
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>

        <syg-item-sliding>
          <syg-item>
            <syg-label>
              <h3>Celery</h3>
            </syg-label>
          </syg-item>
          <syg-item-options>
            <syg-item-option>
              Favorite
            </syg-item-option>
          </syg-item-options>
        </syg-item-sliding>
      </syg-item-group>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-item-group>
    <syg-item-divider>
      <syg-label>A</syg-label>
    </syg-item-divider>

    <syg-item>
      <syg-label>Angola</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Argentina</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Armenia</syg-label>
    </syg-item>
  </syg-item-group>

  <syg-item-group>
    <syg-item-divider>
      <syg-label>B</syg-label>
    </syg-item-divider>

    <syg-item>
      <syg-label>Bangladesh</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Belarus</syg-label>
    </syg-item>
    <syg-item>
      <syg-label>Belgium</syg-label>
    </syg-item>
  </syg-item-group>


  <!-- They can also be used to group sliding items -->
  <syg-item-group>
    <syg-item-divider>
      <syg-label>
        Fruits
      </syg-label>
    </syg-item-divider>

    <syg-item-sliding>
      <syg-item>
        <syg-label>
          <h3>Grapes</h3>
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option>
          Favorite
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <syg-item-sliding>
      <syg-item>
        <syg-label>
          <h3>Apples</h3>
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option>
          Favorite
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>
  </syg-item-group>

  <syg-item-group>
    <syg-item-divider>
      <syg-label>
        Vegetables
      </syg-label>
    </syg-item-divider>

    <syg-item-sliding>
      <syg-item>
        <syg-label>
          <h3>Carrots</h3>
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option>
          Favorite
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>

    <syg-item-sliding>
      <syg-item>
        <syg-label>
          <h3>Celery</h3>
        </syg-label>
      </syg-item>
      <syg-item-options>
        <syg-item-option>
          Favorite
        </syg-item-option>
      </syg-item-options>
    </syg-item-sliding>
  </syg-item-group>
</template>
<script>
import { 
  IonItem, 
  IonItemDivider,
  IonItemGroup, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonItem,
    IonItemDivider, 
    IonItemGroup, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonLabel
  }
});
</script>
```



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
