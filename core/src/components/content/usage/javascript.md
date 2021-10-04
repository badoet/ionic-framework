```html
<syg-content>
  <h1>Main Content</h1>

  <div slot="fixed">
    <h1>Fixed Content</h1>
  </div>
</syg-content>
```

```javascript
var content = document.querySelector('syg-content');
content.scrollEvents = true;
content.addEventListener('ionScrollStart', () => console.log('scroll start'));
content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));
content.addEventListener('ionScrollEnd', () => console.log('scroll end'));
```
