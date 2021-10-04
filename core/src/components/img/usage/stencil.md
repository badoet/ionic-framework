```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'img-example',
  styleUrl: 'img-example.css'
})
export class ImgExample {
  private items = [{
    'text': 'Item 1',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 2',
    'src': '/path/to/external/file.png'
  }, {
    'text': 'Item 3',
    'src': '/path/to/external/file.png'
  }];

  render() {
    return [
      <syg-list>
        {this.items.map(item =>
          <syg-item>
            <syg-thumbnail slot="start">
              <syg-img src={item.src}></syg-img>
            </syg-thumbnail>
            <syg-label>{item.text}</syg-label>
          </syg-item>
        )}
      </syg-list>
    ];
  }
}
```