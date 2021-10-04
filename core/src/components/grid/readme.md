# syg-grid


The grid is a powerful mobile-first flexbox system for building custom layouts.

It is composed of three units — a grid, [row(s)](../row) and [column(s)](../col). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

See the [Responsive Grid documentation](/docs/layout/grid) for more information.

<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<syg-grid>
  <syg-row>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="6">
      syg-col [size="6"]
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="3">
      syg-col [size="3"]
    </syg-col>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col size="3">
      syg-col [size="3"]
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="3">
      syg-col [size="3"]
    </syg-col>
    <syg-col size="3" offset="3">
      syg-col [size="3"] [offset="3"]
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col>
      syg-col
    </syg-col>
    <syg-col>
      syg-col
      <br>#
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
      <br>#
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col class="syg-align-self-start">
      syg-col [start]
    </syg-col>
    <syg-col class="syg-align-self-center">
      syg-col [center]
    </syg-col>
    <syg-col class="syg-align-self-end">
      syg-col [end]
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
    </syg-col>
  </syg-row>

  <syg-row class="syg-align-items-start">
    <syg-col>
      [start] syg-col
    </syg-col>
    <syg-col>
      [start] syg-col
    </syg-col>
    <syg-col class="syg-align-self-end">
      [start] syg-col [end]
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
    </syg-col>
  </syg-row>

  <syg-row class="syg-align-items-center">
    <syg-col>
      [center] syg-col
    </syg-col>
    <syg-col>
      [center] syg-col
    </syg-col>
    <syg-col>
      [center] syg-col
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
    </syg-col>
  </syg-row>

  <syg-row class="syg-align-items-end">
    <syg-col>
      [end] syg-col
    </syg-col>
    <syg-col class="syg-align-self-start">
      [end] syg-col [start]
    </syg-col>
    <syg-col>
      [end] syg-col
    </syg-col>
    <syg-col>
      syg-col
      <br>#
      <br>#
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="12" size-sm>
      syg-col [size="12"] [size-sm]
    </syg-col>
    <syg-col size="12" size-sm>
      syg-col [size="12"] [size-sm]
    </syg-col>
    <syg-col size="12" size-sm>
      syg-col [size="12"] [size-sm]
    </syg-col>
    <syg-col size="12" size-sm>
      syg-col [size="12"] [size-sm]
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="12" size-md>
      syg-col [size="12"] [size-md]
    </syg-col>
    <syg-col size="12" size-md>
      syg-col [size="12"] [size-md]
    </syg-col>
    <syg-col size="12" size-md>
      syg-col [size="12"] [size-md]
    </syg-col>
    <syg-col size="12" size-md>
      syg-col [size="12"] [size-md]
    </syg-col>
  </syg-row>

  <syg-row>
    <syg-col size="6" size-lg offset="3">
      syg-col [size="6"] [size-lg] [offset="3"]
    </syg-col>
    <syg-col size="3" size-lg>
      syg-col [size="3"] [size-lg]
    </syg-col>
  </syg-row>
</syg-grid>
```


### React

```tsx
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">syg-col size="6"</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">syg-col size="3"</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol size="3">syg-col size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">syg-col size="3"</IonCol>
        <IonCol size="3" offset="3">
          syg-col size="3" offset="3"
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
        </IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="syg-align-self-start">syg-col start</IonCol>
        <IonCol className="syg-align-self-center">syg-col center</IonCol>
        <IonCol className="syg-align-self-end">syg-col end</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-start">
        <IonCol>start syg-col</IonCol>
        <IonCol>start syg-col</IonCol>
        <IonCol className="syg-align-self-end">start syg-col end</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-center">
        <IonCol>center syg-col</IonCol>
        <IonCol>center syg-col</IonCol>
        <IonCol>center syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-end">
        <IonCol>end syg-col</IonCol>
        <IonCol className="syg-align-self-start">end syg-col start</IonCol>
        <IonCol>end syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6" size-lg offset="3">
          syg-col size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          syg-col size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'grid-example',
  styleUrl: 'grid-example.css'
})
export class GridExample {
  render() {
    return [
      <syg-grid>
        <syg-row>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="6">
            syg-col [size="6"]
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="3">
            syg-col [size="3"]
          </syg-col>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col size="3">
            syg-col [size="3"]
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="3">
            syg-col [size="3"]
          </syg-col>
          <syg-col size="3" offset="3">
            syg-col [size="3"] [offset="3"]
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col>
            syg-col
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
            <br/>#
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col class="syg-align-self-start">
            syg-col [start]
          </syg-col>
          <syg-col class="syg-align-self-center">
            syg-col [center]
          </syg-col>
          <syg-col class="syg-align-self-end">
            syg-col [end]
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
          </syg-col>
        </syg-row>

        <syg-row class="syg-align-items-start">
          <syg-col>
            [start] syg-col
          </syg-col>
          <syg-col>
            [start] syg-col
          </syg-col>
          <syg-col class="syg-align-self-end">
            [start] syg-col [end]
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
          </syg-col>
        </syg-row>

        <syg-row class="syg-align-items-center">
          <syg-col>
            [center] syg-col
          </syg-col>
          <syg-col>
            [center] syg-col
          </syg-col>
          <syg-col>
            [center] syg-col
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
          </syg-col>
        </syg-row>

        <syg-row class="syg-align-items-end">
          <syg-col>
            [end] syg-col
          </syg-col>
          <syg-col class="syg-align-self-start">
            [end] syg-col [start]
          </syg-col>
          <syg-col>
            [end] syg-col
          </syg-col>
          <syg-col>
            syg-col
            <br/>#
            <br/>#
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="12" sizeSm="">
            syg-col [size="12"] [sizeSm]
          </syg-col>
          <syg-col size="12" sizeSm="">
            syg-col [size="12"] [sizeSm]
          </syg-col>
          <syg-col size="12" sizeSm="">
            syg-col [size="12"] [sizeSm]
          </syg-col>
          <syg-col size="12" sizeSm="">
            syg-col [size="12"] [sizeSm]
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="12" sizeMd="">
            syg-col [size="12"] [sizeMd]
          </syg-col>
          <syg-col size="12" sizeMd="">
            syg-col [size="12"] [sizeMd]
          </syg-col>
          <syg-col size="12" sizeMd="">
            syg-col [size="12"] [sizeMd]
          </syg-col>
          <syg-col size="12" sizeMd="">
            syg-col [size="12"] [sizeMd]
          </syg-col>
        </syg-row>

        <syg-row>
          <syg-col size="6" sizeLg="" offset="3">
            syg-col [size="6"] [sizeLg] [offset="3"]
          </syg-col>
          <syg-col size="3" sizeLg="">
            syg-col [size="3"] [sizeLg]
          </syg-col>
        </syg-row>
      </syg-grid>
    ];
  }
}
```


### Vue

```html
<template>
  <syg-grid>
    <syg-row>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="6">
        syg-col [size="6"]
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="3">
        syg-col [size="3"]
      </syg-col>
      <syg-col size="3" offset="3">
        syg-col [size="3"] [offset="3"]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col>
        syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col class="syg-align-self-start">
        syg-col [start]
      </syg-col>
      <syg-col class="syg-align-self-center">
        syg-col [center]
      </syg-col>
      <syg-col class="syg-align-self-end">
        syg-col [end]
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-start">
      <syg-col>
        [start] syg-col
      </syg-col>
      <syg-col>
        [start] syg-col
      </syg-col>
      <syg-col class="syg-align-self-end">
        [start] syg-col [end]
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-center">
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        [center] syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row class="syg-align-items-end">
      <syg-col>
        [end] syg-col
      </syg-col>
      <syg-col class="syg-align-self-start">
        [end] syg-col [start]
      </syg-col>
      <syg-col>
        [end] syg-col
      </syg-col>
      <syg-col>
        syg-col
        <br>#
        <br>#
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
      <syg-col size="12" size-sm>
        syg-col [size="12"] [size-sm]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
      <syg-col size="12" size-md>
        syg-col [size="12"] [size-md]
      </syg-col>
    </syg-row>

    <syg-row>
      <syg-col size="6" size-lg offset="3">
        syg-col [size="6"] [size-lg] [offset="3"]
      </syg-col>
      <syg-col size="3" size-lg>
        syg-col [size="3"] [size-lg]
      </syg-col>
    </syg-row>
  </syg-grid>
</template>

<script>
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCol, IonGrid, IonRow }
});
</script>
```



## Properties

| Property | Attribute | Description                                                           | Type      | Default |
| -------- | --------- | --------------------------------------------------------------------- | --------- | ------- |
| `fixed`  | `fixed`   | If `true`, the grid will have a fixed width based on the screen size. | `boolean` | `false` |


## CSS Custom Properties

| Name                    | Description                           |
| ----------------------- | ------------------------------------- |
| `--ion-grid-padding`    | Padding for the Grid                  |
| `--ion-grid-padding-lg` | Padding for the Grid on lg screens    |
| `--ion-grid-padding-md` | Padding for the Grid on md screens    |
| `--ion-grid-padding-sm` | Padding for the Grid on sm screens    |
| `--ion-grid-padding-xl` | Padding for the Grid on xl screens    |
| `--ion-grid-padding-xs` | Padding for the Grid on xs screens    |
| `--ion-grid-width`      | Width of the fixed Grid               |
| `--ion-grid-width-lg`   | Width of the fixed Grid on lg screens |
| `--ion-grid-width-md`   | Width of the fixed Grid on md screens |
| `--ion-grid-width-sm`   | Width of the fixed Grid on sm screens |
| `--ion-grid-width-xl`   | Width of the fixed Grid on xl screens |
| `--ion-grid-width-xs`   | Width of the fixed Grid on xs screens |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
