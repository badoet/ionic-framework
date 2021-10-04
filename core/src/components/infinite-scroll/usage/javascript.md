```html
<syg-content>
  <syg-button onClick="toggleInfiniteScroll()" expand="block">
    Toggle Infinite Scroll
  </syg-button>

  <syg-list></syg-list>

  <syg-infinite-scroll threshold="100px" id="infinite-scroll">
    <syg-infinite-scroll-content
      loading-spinner="bubbles"
      loading-text="Loading more data...">
    </syg-infinite-scroll-content>
  </syg-infinite-scroll>
</syg-content>
```

```javascript
const infiniteScroll = document.getElementById('infinite-scroll');

infiniteScroll.addEventListener('ionInfinite', function(event) {
  setTimeout(function() {
    console.log('Done');
    event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (data.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
});

function toggleInfiniteScroll() {
  infiniteScroll.disabled = !infiniteScroll.disabled;
}
```
