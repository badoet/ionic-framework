```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'thumbnail-example',
  styleUrl: 'thumbnail-example.css'
})
export class ThumbnailExample {
  render() {
    return [
      <syg-thumbnail>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
      </syg-thumbnail>,

      <syg-item>
        <syg-thumbnail slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
        </syg-thumbnail>
        <syg-label>Item Thumbnail</syg-label>
      </syg-item>
    ];
  }
}
```
