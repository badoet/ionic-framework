```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-example',
  styleUrl: 'toggle-example.css'
})
export class ToggleExample {
  @State() pepperoni: boolean = false;
  @State() sausage: boolean = true;
  @State() mushrooms: boolean = false;

  render() {
    return [
      // Default Toggle
      <syg-toggle></syg-toggle>,

      // Disabled Toggle
      <syg-toggle disabled></syg-toggle>,

      // Checked Toggle
      <syg-toggle checked></syg-toggle>,

      // Toggle Colors
      <syg-toggle color="primary"></syg-toggle>,
      <syg-toggle color="secondary"></syg-toggle>,
      <syg-toggle color="danger"></syg-toggle>,
      <syg-toggle color="light"></syg-toggle>,
      <syg-toggle color="dark"></syg-toggle>,

      // Toggles in a List
      <syg-list>
        <syg-item>
          <syg-label>Pepperoni</syg-label>
          <syg-toggle checked={this.pepperoni} onIonChange={(ev) => this.pepperoni = ev.detail.checked}></syg-toggle>
        </syg-item>

        <syg-item>
          <syg-label>Sausage</syg-label>
          <syg-toggle checked={this.sausage} onIonChange={(ev) => this.sausage = ev.detail.checked} disabled={true}></syg-toggle>
        </syg-item>

        <syg-item>
          <syg-label>Mushrooms</syg-label>
          <syg-toggle checked={this.mushrooms} onIonChange={(ev) => this.mushrooms = ev.detail.checked}></syg-toggle>
        </syg-item>
      </syg-list>,

      <div>
        Pepperoni: {this.pepperoni ? "true" : "false"}<br/>
        Sausage: {this.sausage ? "true" : "false"}<br/>
        Mushrooms: {this.mushrooms ? "true" : "false"}
      </div>
    ];
  }
}
```
