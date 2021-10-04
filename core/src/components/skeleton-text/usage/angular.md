```html
<!-- Data to display after skeleton screen -->
<div *ngIf="data">
  <div class="syg-padding">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
  </div>

  <syg-list>
    <syg-list-header>
      <syg-label>
        Data
      </syg-label>
    </syg-list-header>
    <syg-item>
      <syg-avatar slot="start">
        <img src="./avatar.svg">
      </syg-avatar>
      <syg-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </syg-label>
    </syg-item>
    <syg-item>
      <syg-thumbnail slot="start">
        <img src="./thumbnail.svg">
      </syg-thumbnail>
      <syg-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </syg-label>
    </syg-item>
    <syg-item>
      <ion-icon name="call" slot="start"></ion-icon>
      <syg-label>
        <h3>
          {{ data.heading }}
        </h3>
        <p>
          {{ data.para1 }}
        </p>
        <p>
          {{ data.para2 }}
        </p>
      </syg-label>
    </syg-item>
  </syg-list>
</div>

<!-- Skeleton screen -->
<div *ngIf="!data">
  <div class="syg-padding custom-skeleton">
    <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
    <syg-skeleton-text animated></syg-skeleton-text>
    <syg-skeleton-text animated style="width: 88%"></syg-skeleton-text>
    <syg-skeleton-text animated style="width: 70%"></syg-skeleton-text>
    <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
  </div>

  <syg-list>
    <syg-list-header>
      <syg-label>
        <syg-skeleton-text animated style="width: 20%"></syg-skeleton-text>
      </syg-label>
    </syg-list-header>
    <syg-item>
      <syg-avatar slot="start">
        <syg-skeleton-text animated></syg-skeleton-text>
      </syg-avatar>
      <syg-label>
        <h3>
          <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
        </h3>
        <p>
          <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
        </p>
        <p>
          <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
        </p>
      </syg-label>
    </syg-item>
    <syg-item>
      <syg-thumbnail slot="start">
        <syg-skeleton-text animated></syg-skeleton-text>
      </syg-thumbnail>
      <syg-label>
        <h3>
          <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
        </h3>
        <p>
          <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
        </p>
        <p>
          <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
        </p>
      </syg-label>
    </syg-item>
    <syg-item>
      <syg-skeleton-text animated style="width: 27px; height: 27px" slot="start"></syg-skeleton-text>
      <syg-label>
        <h3>
          <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
        </h3>
        <p>
          <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
        </p>
        <p>
          <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
        </p>
      </syg-label>
    </syg-item>
  </syg-list>
</div>
```

```css
/* Custom Skeleton Line Height and Margin */
.custom-skeleton syg-skeleton-text {
  line-height: 13px;
}

.custom-skeleton syg-skeleton-text:last-child {
  margin-bottom: 5px;
}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'skeleton-text-example',
  templateUrl: 'skeleton-text-example.html',
  styleUrls: ['./skeleton-text-example.css']
})
export class SkeletonTextExample {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }
}
```