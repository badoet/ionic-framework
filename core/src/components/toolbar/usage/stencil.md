```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'toolbar-example',
  styleUrl: 'toolbar-example.css'
})
export class ToolbarExample {

  clickedStar() {
    console.log("Clicked star button");
  }

  clickedSearch() {
    console.log("Clicked search button");
  }

  render() {
    return [
      <syg-toolbar>
        <syg-title>Title Only</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-back-button></syg-back-button>
        </syg-buttons>
        <syg-title>Back Button</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-title size="small">Small Title above a Default Title</syg-title>
      </syg-toolbar>,
      <syg-toolbar>
        <syg-title>Default Title</syg-title>
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
        <syg-buttons slot="primary">
          <syg-button color="secondary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Default Buttons</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button fill="solid">
            <ion-icon slot="start" name="person-circle"></ion-icon>
            Contact
          </syg-button>
        </syg-buttons>
        <syg-title>Solid Buttons</syg-title>
        <syg-buttons slot="primary">
          <syg-button fill="solid" color="secondary">
            Help
            <ion-icon slot="end" name="help-circle"></ion-icon>
          </syg-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button fill="outline">
            <ion-icon slot="start" name="star"></ion-icon>
            Star
          </syg-button>
        </syg-buttons>
        <syg-title>Outline Buttons</syg-title>
        <syg-buttons slot="primary">
          <syg-button color="danger" fill="outline">
            Edit
            <ion-icon slot="end" name="create"></ion-icon>
          </syg-button>
        </syg-buttons>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="secondary">
          <syg-button>
            Account
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="danger">
            Edit
          </syg-button>
        </syg-buttons>
        <syg-title>Text Only Buttons</syg-title>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-buttons slot="start">
          <syg-menu-button autoHide={false}></syg-menu-button>

        </syg-buttons>
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Left side menu toggle</syg-title>
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
        <syg-buttons slot="primary">
          <syg-button onClick={() => this.clickedSearch()}>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-searchbar placeholder="Search Favorites"></syg-searchbar>
      </syg-toolbar>,

      <syg-toolbar>
        <syg-segment value="all">
          <syg-segment-button value="all">
            All
          </syg-segment-button>
          <syg-segment-button value="favorites">
            Favorites
          </syg-segment-button>
        </syg-segment>
      </syg-toolbar>,

      <syg-toolbar color="secondary">
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="primary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Secondary Toolbar</syg-title>
      </syg-toolbar>,

      <syg-toolbar color="dark">
        <syg-buttons slot="secondary">
          <syg-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </syg-button>
          <syg-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-buttons slot="primary">
          <syg-button color="danger">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </syg-button>
        </syg-buttons>
        <syg-title>Dark Toolbar</syg-title>
      </syg-toolbar>
    ];
  }
}
```