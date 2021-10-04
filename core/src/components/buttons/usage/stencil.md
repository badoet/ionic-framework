```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'buttons-example',
  styleUrl: 'buttons-example.css'
})
export class ButtonsExample {

  clickedStar() {
    console.log("Clicked star button");
  }

  render() {
    return [
      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Back Button</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Default Buttons</syg-title>
        <syg-buttons slot="primary">
          <syg-button color="secondary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="primary">
          <syg-button onClick={() => this.clickedStar()}>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Right side menu toggle</syg-title>
        <syg-buttons slot="end">
          <syg-menu-button autoHide={false}></syg-menu-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons collapse={true}>
          <syg-button>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Collapsible Buttons</syg-title>
      </syg-toolbar>
    ];
  }
}
```