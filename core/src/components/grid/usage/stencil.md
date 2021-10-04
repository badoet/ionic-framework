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
