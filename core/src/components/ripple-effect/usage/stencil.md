```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'ripple-effect-example',
  styleUrl: 'ripple-effect-example.css'
})
export class RippleEffectExample {
  render() {
    return [
      <syg-app>
        <syg-content>
          <div class="syg-activatable ripple-parent">
            A plain div with a bounded ripple effect
            <syg-ripple-effect></syg-ripple-effect>
          </div>

          <button class="syg-activatable ripple-parent">
            A button with a bounded ripple effect
            <syg-ripple-effect></syg-ripple-effect>
          </button>

          <div class="syg-activatable ripple-parent">
            A plain div with an unbounded ripple effect
            <syg-ripple-effect type="unbounded"></syg-ripple-effect>
          </div>

          <button class="syg-activatable ripple-parent">
            A button with an unbounded ripple effect
            <syg-ripple-effect type="unbounded"></syg-ripple-effect>
          </button>
        </syg-content>
      </syg-app>
    ];
  }
}
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```