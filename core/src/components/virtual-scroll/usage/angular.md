```html
<syg-content>
  <syg-virtual-scroll [items]="items" approxItemHeight="320px">
    <syg-card *virtualItem="let item; let itemBounds = bounds;">
      <div>
        <syg-img [src]="item.imgSrc" [height]="item.imgHeight" [alt]="item.name"></syg-img>
      </div>
    <syg-card-header>
      <syg-card-title>{{ item.name }}</syg-card-title>
    </syg-card-header>
    <syg-card-content>{{ item.content }}</syg-card-content>
    </syg-card>
  </syg-virtual-scroll>
</syg-content>
```

```typescript
export class VirtualScrollPageComponent {
  items: any[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[rotateImg],
        imgSrc: getImgSrc(),
        avatarSrc: getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
      });

      rotateImg++;
      if (rotateImg === images.length) {
        rotateImg = 0;
      }
    }
  }
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];

function getImgSrc() {
  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

let rotateImg = 0;
```

### Basic

The array of records should be passed to the `items` property on the `syg-virtual-scroll` element.
The data given to the `items` property must be an array. An item template with the `*virtualItem` property is required in the `syg-virtual-scroll`. The `*virtualItem` property can be added to any element.

```html
<syg-virtual-scroll [items]="items">
  <syg-item *virtualItem="let item">
    {{ item }}
  </syg-item>
</syg-virtual-scroll>
```

### Section Headers and Footers

Section headers and footers are optional. They can be dynamically created
from developer-defined functions. For example, a large list of contacts
usually has a divider for each letter in the alphabet. Developers provide
their own custom function to be called on each record. The logic in the
custom function should determine whether to create the section template
and what data to provide to the template. The custom function should
return `null` if a template shouldn't be created.

```html
<syg-virtual-scroll [items]="items" [headerFn]="myHeaderFn">
  <syg-item-divider *virtualHeader="let header">
    {{ header }}
  </syg-item-divider>
  <syg-item *virtualItem="let item">
    Item: {{ item }}
  </syg-item>
</syg-virtual-scroll>
```

Below is an example of a custom function called on every record. It
gets passed the individual record, the record's index number,
and the entire array of records. In this example, after every 20
records a header will be inserted. So between the 19th and 20th records,
between the 39th and 40th, and so on, a `<syg-item-divider>` will
be created and the template's data will come from the function's
returned data.

```ts
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
```


### Custom Components

If a custom component is going to be used within Virtual Scroll, it's best
to wrap it with a `<div>` to ensure the component is rendered correctly. Since
each custom component's implementation and internals can be quite different, wrapping
within a `<div>` is a safe way to make sure dimensions are measured correctly.

```html
<syg-virtual-scroll [items]="items">
  <div *virtualItem="let item">
    <my-custom-item [item]="item">
      {{ item }}
    </my-custom-item>
  </div>
</syg-virtual-scroll>
```