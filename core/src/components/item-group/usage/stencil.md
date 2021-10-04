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