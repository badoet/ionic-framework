```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      // Default title
      <syg-toolbar>
        <syg-title>Default Title</syg-title>
      </syg-toolbar>,

      // Small title above a default title
      <syg-toolbar>
        <syg-title size="small">Small Title above a Default Title</syg-title>
      </syg-toolbar>,
      <syg-toolbar>
        <syg-title>Default Title</syg-title>
      </syg-toolbar>,

      // Large title
      <syg-toolbar>
        <syg-title size="large">Large Title</syg-title>
      </syg-toolbar>
    ];
  }
}
```


### Collapsible Large Titles

Ionic provides a way to create the collapsible titles that exist on stock iOS apps. Getting this setup requires configuring your `syg-title`, `syg-header`, and (optionally) `syg-buttons` elements.

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      <syg-header translucent={true}>
        <syg-toolbar>
          <syg-title>Settings</syg-title>
        </syg-toolbar>
      </syg-header>,

      <syg-content fullscreen={true}>
        <syg-header collapse="condense">
          <syg-toolbar>
            <syg-title size="large">Settings</syg-title>
          </syg-toolbar>
          <syg-toolbar>
            <syg-searchbar></syg-searchbar>
          </syg-toolbar>
        </syg-header>

        ...

      </syg-content>
    ];
  }
}
```

In the example above, notice there are two `syg-header` elements. The first `syg-header` represents the "collapsed" state of your collapsible header, and the second `syg-header` represents the "expanded" state of your collapsible header. Notice that the second `syg-header` must have `collapse="condense"` and must exist within `syg-content`. Additionally, in order to get the large title styling, `syg-title` must have `size="large"`.

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css'
})
export class TitleExample {
  render() {
    return [
      <syg-header translucent={true}>
        <syg-toolbar>
          <syg-buttons collapse={true} slot="end">
            <syg-button>Click Me</syg-button>
          </syg-buttons>
          <syg-title>Settings</syg-title>
        </syg-toolbar>
      </syg-header>,

      <syg-content fullscreen={true}>
        <syg-header collapse="condense">
          <syg-toolbar>
            <syg-buttons collapse={true} slot="end">
              <syg-button>Click Me</syg-button>
            </syg-buttons>
            <syg-title size="large">Settings</syg-title>
          </syg-toolbar>
          <syg-toolbar>
            <syg-searchbar></syg-searchbar>
          </syg-toolbar>
        </syg-header>

        ...

      </syg-content>
    ];
  }
}
```

In this example, notice that we have added two sets of `syg-buttons` both with `collapse` set to `true`. When the secondary header collapses, the buttons in the secondary header will hide, and the buttons in the primary header will show. This is useful for ensuring that your header buttons always appear next to an `syg-title` element.

`syg-buttons` elements that do not have `collapse` set will always be visible, regardless of collapsed state. When using the large title and `syg-buttons` elements inside of `syg-content`, the `syg-buttons` elements should always be placed in the `end` slot.

When styling the large title, you should target the large title globally as opposed to within the context of a particular page or tab, otherwise its styles will not be applied during the navigation animation.

> When using collapsible large titles, it is required that `fullscreen` is set to `true` on `syg-content` and `translucent` is set to `true` on the main `syg-header`.

### Styling Collapsible Large Titles

The collapsible large title should appear seamless in relation to the rest of your content. This means that the background color of the `syg-toolbar` that contains the collapsible large title should always match the background color of `syg-content`. 

By default, the `syg-toolbar` that contains the standard title is hidden using `opacity: 0` and is progressively shown as you collapse the large title by scrolling. As a result, the background color that you see behind the standard title is actually the background color of `syg-content`.

You can change the background color of the toolbar with the standard title by setting the `--background` CSS variable on `syg-toolbar`. This will give the effect of the header changing color as you collapse the large title.

When styling the text color of the large title, you should target the large title globally as opposed to within the context of a particular page or tab, otherwise its styles will not be applied during the navigation animation.

```css
syg-title.large-title {
  color: purple;
  font-size: 30px;
}
```