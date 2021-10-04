```javascript
class PopoverExamplePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <syg-content>
        <syg-list>
          <syg-list-header><syg-label>Ionic</syg-label></syg-list-header>
          <syg-item button><syg-label>Item 0</syg-label></syg-item>
          <syg-item button><syg-label>Item 1</syg-label></syg-item>
          <syg-item button><syg-label>Item 2</syg-label></syg-item>
          <syg-item button><syg-label>Item 3</syg-label></syg-item>
        </syg-list>
      </syg-content>
    `;
  }
}

customElements.define('popover-example-page', PopoverExamplePage);

async function presentPopover(ev) {
  const popover = Object.assign(document.createElement('syg-popover'), {
    component: 'popover-example-page',
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true
  });
  document.body.appendChild(popover);

  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```
