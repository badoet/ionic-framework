
```javascript
customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<syg-header>
  <syg-toolbar>
    <syg-title>Modal Header</syg-title>
    <syg-buttons slot="primary">
      <syg-button onClick="dismissModal()">
        <ion-icon slot="icon-only" name="close"></ion-icon>
      </syg-button>
    </syg-buttons>
  </syg-toolbar>
</syg-header>
<syg-content class="syg-padding">
  Modal Content
</syg-content>`;
  }
});

function presentModal() {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('syg-modal');
  modalElement.component = 'modal-page';
  modalElement.cssClass = 'my-custom-class';

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}
```

> If you need a wrapper element inside of your modal component, we recommend using a `<div class="syg-page">` so that the component dimensions are still computed properly.

### Passing Data

During creation of a modal, data can be passed in through the `componentProps`. The previous example can be written to include data:

```javascript
const modalElement = document.createElement('syg-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.componentProps = {
  'firstName': 'Douglas',
  'lastName': 'Adams',
  'middleInitial': 'N'
};
```

To get the data passed into the `componentProps`, query for the modal in the `modal-page`:

```js
customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector('syg-modal');
    console.log(modalElement.componentProps.firstName);

    ...
  }
}
```


### Dismissing a Modal

A modal can be dismissed by calling the dismiss method and optionally passing any data from the modal.

```javascript
async function dismissModal() {
  await modal.dismiss({
    'dismissed': true
  });
}
```

After being dismissed, the data can be read in through the `onWillDismiss` or `onDidDismiss` attached to the modal after creation:

```javascript
const { data } = await modalElement.onWillDismiss();
console.log(data);
```


### Card Modals

Modals in iOS mode have the ability to be presented in a card-style and swiped to close. The card-style presentation and swipe to close gesture are not mutually exclusive, meaning you can pick and choose which features you want to use. For example, you can have a card-style modal that cannot be swiped or a full sized modal that can be swiped.

> Card style modals when running on iPhone-sized devices do not have backdrops. As a result, the `--backdrop-opacity` variable will not have any effect.

```javascript
const modalElement = document.createElement('syg-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.swipeToClose = true;
modalElement.presentingElement = document.querySelector('syg-nav');
```

In most scenarios, using the `syg-nav` element as the `presentingElement` is fine. In cases where you are presenting a card-style modal from within a modal, you should pass in the top-most `syg-modal` element as the `presentingElement`.

```javascript
const modalElement = document.createElement('syg-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.swipeToClose = true;
modalElement.presentingElement = await modalController.getTop(); // Get the top-most syg-modal
```

### Sheet Modals

```javascript
const modalElement = document.createElement('syg-modal');
modalElement.component = 'modal-page';
modalElement.initialBreakpoint = 0.5;
modalElement.breakpoints = [0, 0.5, 1];
```