```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'back-button-example',
  styleUrl: 'back-button-example.css'
})
export class BackButtonExample {
  render() {
    const buttonText = "Custom";
    const buttonIcon = "add";

    return [
      // Default back button
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button></syg-back-button>
          </syg-buttons>
        </syg-toolbar>
      </syg-header>,

      // Back button with a default href
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button defaultHref="home"></syg-back-button>
          </syg-buttons>
        </syg-toolbar>
      </syg-header>,

      // Back button with custom text and icon
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button
              text={buttonText}
              icon={buttonIcon}>
            </syg-back-button>
          </syg-buttons>
        </syg-toolbar>
      </syg-header>,

      // Back button with no text and custom icon
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-back-button text="" icon="add"></syg-back-button>
          </syg-buttons>
        </syg-toolbar>
      </syg-header>,

      // Danger back button next to a menu button
      <syg-header>
        <syg-toolbar>
          <syg-buttons slot="start">
            <syg-menu-button></syg-menu-button>
            <syg-back-button color="danger"></syg-back-button>
          </syg-buttons>
        </syg-toolbar>
      </syg-header>
    ];
  }
}
```