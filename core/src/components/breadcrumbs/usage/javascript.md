### Default

```html
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Colors

```html
<syg-breadcrumbs color="secondary">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Breadcrumbs with Icon

```html
<!-- Icon start -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    <ion-icon slot="start" name="home"></ion-icon>
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#files">
    <ion-icon slot="start" name="folder"></ion-icon>
    Files
  </syg-breadcrumb>
  <syg-breadcrumb href="#projects">
    <ion-icon slot="start" name="folder"></ion-icon>
    Projects
  </syg-breadcrumb>
  <syg-breadcrumb href="#user-research">
    <ion-icon slot="start" name="folder"></ion-icon>
    User Research
  </syg-breadcrumb>
  <syg-breadcrumb>
    <ion-icon slot="start" name="document"></ion-icon>
    Survey.txt
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Icon end -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <ion-icon slot="end" name="home"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#files">
    Files
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#projects">
    Projects
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#user-research">
    User Research
    <ion-icon slot="end" name="folder"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb>
    Survey.txt
    <ion-icon slot="end" name="document"></ion-icon>
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Custom Separator

```html
<!-- Custom separator text -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
    <span slot="separator">|</span>
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Custom separator icon -->
<syg-breadcrumbs>
  <syg-breadcrumb href="#">
    Home
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
    <ion-icon slot="separator" name="arrow-forward"></ion-icon>
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Max Items

```html
<!-- Max Items -->
<syg-breadcrumbs max-items="4">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Items Before or After Collapse

```html
<!-- Items before collapse -->
<syg-breadcrumbs max-items="4" items-before-collapse="2">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Items after collapse -->
<syg-breadcrumbs max-items="4" items-after-collapse="3">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>

<!-- Items before and after collapse -->
<syg-breadcrumbs max-items="4" items-before-collapse="0" items-after-collapse="3">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

### Expand on Collapsed Indicator Click

```html
<syg-breadcrumbs max-items="4">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

```javascript
const breadcrumbs = document.querySelector('syg-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', () => expandBreadcrumbs());

function expandBreadcrumbs() {
  breadcrumbs.maxItems = undefined;
}
```

### Popover on Collapsed Indicator Click

```html
<syg-breadcrumbs max-items="4">
  <syg-breadcrumb href="#">
    Home
  </syg-breadcrumb>
  <syg-breadcrumb href="#electronics">
    Electronics
  </syg-breadcrumb>
  <syg-breadcrumb href="#photography">
    Photography
  </syg-breadcrumb>
  <syg-breadcrumb href="#cameras">
    Cameras
  </syg-breadcrumb>
  <syg-breadcrumb href="#film">
    Film
  </syg-breadcrumb>
  <syg-breadcrumb>
    35 mm
  </syg-breadcrumb>
</syg-breadcrumbs>
```

```javascript
const breadcrumbs = document.querySelector('syg-breadcrumbs');

breadcrumbs.addEventListener('ionCollapsedClick', (ev) => presentPopover(ev));

class ListPopover extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let breadcrumbTemplate = ``;
    this.collapsedBreadcrumbs.forEach(breadcrumb => {
      breadcrumbTemplate += `
        <syg-item href="${breadcrumb.href}">
          <syg-label>${breadcrumb.textContent}</syg-label>
        </syg-item>
      `;
    })
    this.innerHTML = `
      <syg-content>
        <syg-list>
          ${breadcrumbTemplate}
        </syg-list>
      </syg-content>
    `;
  }
}

customElements.define('list-popover', ListPopover);

async function presentPopover(ev) {
  const popover = Object.assign(document.createElement('syg-popover'), {
    component: 'list-popover',
    componentProps: {
      collapsedBreadcrumbs: ev.detail.collapsedBreadcrumbs
    },
    event: ev
  });
  document.body.appendChild(popover);

  await popover.present();
}
```
