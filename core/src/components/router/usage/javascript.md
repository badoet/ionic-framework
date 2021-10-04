```html
<syg-router>
  <syg-route component="page-tabs">
    <syg-route url="/schedule" component="tab-schedule">
      <syg-route component="page-schedule"></syg-route>
      <syg-route url="/session/:sessionId" component="page-session"></syg-route>
    </syg-route>

    <syg-route url="/speakers" component="tab-speaker">
      <syg-route component="page-speaker-list"></syg-route>
      <syg-route url="/session/:sessionId" component="page-session"></syg-route>
      <syg-route url="/:speakerId" component="page-speaker-detail"></syg-route>
    </syg-route>

    <syg-route url="/map" component="page-map"></syg-route>
    <syg-route url="/about" component="page-about"></syg-route>
  </syg-route>

  <syg-route url="/tutorial" component="page-tutorial"></syg-route>
  <syg-route url="/login" component="page-login"></syg-route>
  <syg-route url="/account" component="page-account"></syg-route>
  <syg-route url="/signup" component="page-signup"></syg-route>
  <syg-route url="/support" component="page-support"></syg-route>
</syg-router>

```
