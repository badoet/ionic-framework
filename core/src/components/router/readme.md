# syg-router

The router is a component for handling routing inside vanilla and Stencil JavaScript projects.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`syg-router-outlet`](../router-outlet) and the Angular router.

Apps should have a single `syg-router` component in the codebase.
This component controls all interactions with the browser history and it aggregates updates through an event system.

`syg-router` is just a URL coordinator for the navigation outlets of ionic: `syg-nav` and `syg-tabs`.

That means the `syg-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `syg-nav` and `syg-tabs` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `syg-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```

<!-- Auto Generated Below -->


## Usage

### Javascript

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



## Properties

| Property  | Attribute  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Type      | Default |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `root`    | `root`     | By default `syg-router` will match the routes at the root path ("/"). That can be changed when                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `string`  | `'/'`   |
| `useHash` | `use-hash` | The router can work in two "modes": - With hash: `/index.html#/path/to/page` - Without hash: `/path/to/page`  Using one or another might depend in the requirements of your app and/or where it's deployed.  Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work.  On the other side hash-navigation is much easier to deploy, it even works over the file protocol.  By default, this property is `true`, change to `false` to allow hash-less URLs. | `boolean` | `true`  |


## Events

| Event                | Description                                     | Type                             |
| -------------------- | ----------------------------------------------- | -------------------------------- |
| `ionRouteDidChange`  | Emitted when the route had changed              | `CustomEvent<RouterEventDetail>` |
| `ionRouteWillChange` | Event emitted when the route is about to change | `CustomEvent<RouterEventDetail>` |


## Methods

### `back() => Promise<void>`

Go back to previous page in the window.history.

#### Returns

Type: `Promise<void>`



### `push(url: string, direction?: RouterDirection, animation?: AnimationBuilder | undefined) => Promise<boolean>`

Navigate to the specified URL.

#### Returns

Type: `Promise<boolean>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
