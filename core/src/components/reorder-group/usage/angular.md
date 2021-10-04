```html
<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
<syg-reorder-group (ionItemReorder)="doReorder($event)" disabled="false">
  <!-- Default reorder icon, end aligned items -->
  <syg-item>
    <syg-label>
      Item 1
    </syg-label>
    <syg-reorder slot="end"></syg-reorder>
  </syg-item>

  <syg-item>
    <syg-label>
      Item 2
    </syg-label>
    <syg-reorder slot="end"></syg-reorder>
  </syg-item>

  <!-- Default reorder icon, start aligned items -->
  <syg-item>
    <syg-reorder slot="start"></syg-reorder>
    <syg-label>
      Item 3
    </syg-label>
  </syg-item>

  <syg-item>
    <syg-reorder slot="start"></syg-reorder>
    <syg-label>
      Item 4
    </syg-label>
  </syg-item>

  <!-- Custom reorder icon end items -->
  <syg-item>
    <syg-label>
      Item 5
    </syg-label>
    <syg-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </syg-reorder>
  </syg-item>

  <syg-item>
    <syg-label>
      Item 6
    </syg-label>
    <syg-reorder slot="end">
      <ion-icon name="pizza"></ion-icon>
    </syg-reorder>
  </syg-item>

  <!-- Items wrapped in a reorder, entire item can be dragged -->
  <syg-reorder>
    <syg-item>
      <syg-label>
        Item 7
      </syg-label>
    </syg-item>
  </syg-reorder>

  <syg-reorder>
    <syg-item>
      <syg-label>
        Item 8
      </syg-label>
    </syg-item>
  </syg-reorder>
</syg-reorder-group>
```

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css']
})
export class ReorderGroupExample {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}
```

### Updating Data

```javascript
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'reorder-group-example',
  templateUrl: 'reorder-group-example.html',
  styleUrls: ['./reorder-group-example.css']
})
export class ReorderGroupExample {
  items = [1, 2, 3, 4, 5];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() {}

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.items = ev.detail.complete(this.items);

    // After complete is called the items will be in the new order
    console.log('After complete', this.items);
  }
}
```
