```html
<!-- Default backdrop -->
<syg-backdrop></syg-backdrop>

<!-- Backdrop that is not tappable -->
<syg-backdrop tappable="false"></syg-backdrop>

<!-- Backdrop that is not visible -->
<syg-backdrop visible="false"></syg-backdrop>

<!-- Backdrop with propagation -->
<syg-backdrop stop-propagation="false"></syg-backdrop>

<!-- Backdrop that sets dynamic properties -->
<syg-backdrop id="customBackdrop"></syg-backdrop>
```

```javascript
var backdrop = document.getElementById('customBackdrop');
backdrop.visible = false;
backdrop.tappable = false;
backdrop.stopPropagation = false;
```