```html
<!-- Default Refresher -->
<syg-content>
  <syg-refresher slot="fixed">
    <syg-refresher-content></syg-refresher-content>
  </syg-refresher>
</syg-content>

<!-- Custom Refresher Properties -->
<syg-content>
  <syg-refresher slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <syg-refresher-content></syg-refresher-content>
  </syg-refresher>
</syg-content>

<!-- Custom Refresher Content -->
<syg-content>
  <syg-refresher slot="fixed">
    <syg-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing...">
    </syg-refresher-content>
  </syg-refresher>
</syg-content>
```