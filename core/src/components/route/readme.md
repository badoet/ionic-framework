# syg-route

The route component takes a component and renders it when the Browser URL matches the url property.

> Note: this component should only be used with vanilla and Stencil JavaScript projects. For Angular projects, use [`syg-router-outlet`](../router-outlet) and the Angular router.

## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `syg-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
```


<!-- Auto Generated Below -->


## Usage

### Javascript

```html
<syg-router>
  <syg-route url="/home" component="page-home"></syg-route>
  <syg-route url="/dashboard" component="page-dashboard"></syg-route>
  <syg-route url="/new-message" component="page-new-message"></syg-route>
  <syg-route url="/login" component="page-login"></syg-route>
</syg-router>
```

```javascript
const dashboardPage = document.querySelector('syg-route[url="/dashboard"]');
dashboardPage.beforeEnter = isLoggedInGuard;

const newMessagePage = document.querySelector('syg-route[url="/dashboard"]');
newMessagePage.beforeLeave = hasUnsavedDataGuard;

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = document.createElement('syg-alert');
  alert.header = 'Discard Unsaved Changes?';
  alert.message = 'Are you sure you want to leave? Any unsaved changed will be lost.';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'Cancel',
    },
    {
      text: 'Discard',
      role: 'destructive',
    }
  ];
  
  document.body.appendChild(alert);
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


### Stencil

```typescript
import { Component, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'router-example',
  styleUrl: 'router-example.css'
})
export class RouterExample {
  render() {
    return (
      <syg-router>
        <syg-route url="/home" component="page-home"></syg-route>
        <syg-route url="/dashboard" component="page-dashboard" beforeEnter={isLoggedInGuard}></syg-route>
        <syg-route url="/new-message" component="page-new-message" beforeLeave={hasUnsavedDataGuard}></syg-route>
        <syg-route url="/login" component="page-login"></syg-route>
      </syg-router>
    )
  }
}

const isLoggedInGuard = async () => {
  const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
  
  if (isLoggedIn) {
    return true;
  } else {
    return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
  }
}

const hasUnsavedDataGuard = async () => {
  const hasUnsavedData = await checkData(); // Replace this with actual validation
  
  if (hasUnsavedData) {
    return await confirmDiscardChanges();
  } else {
    return true;
  }
}

const confirmDiscardChanges = async () => {
  const alert = await alertController.create({
    header: 'Discard Unsaved Changes?',
    message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
    buttons: [
      {
        text: 'Cancel',
        role: 'Cancel',
      },
      {
        text: 'Discard',
        role: 'destructive',
      }
    ]
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  
  return (role === 'Cancel') ? false : true;
}
```


### Vue

```html
<template>
  <syg-router>
    <syg-route url="/home" component="page-home"></syg-route>
    <syg-route url="/dashboard" component="page-dashboard" :beforeEnter="isLoggedInGuard"></syg-route>
    <syg-route url="/new-message" component="page-new-message" :beforeLeave="hasUnsavedDataGuard"></syg-route>
    <syg-route url="/login" component="page-login"></syg-route>
  </syg-router>
</template>

<script>
  import { alertController } from '@ionic/vue';

  const isLoggedInGuard = async () => {
    const isLoggedIn = await UserData.isLoggedIn(); // Replace this with actual login validation
    
    if (isLoggedIn) {
      return true;
    } else {
      return { redirect: '/login' }; // If a user is not logged in, they will be redirected to the /login page
    }
  }
  
  const hasUnsavedDataGuard = async () => {
    const hasUnsavedData = await checkData(); // Replace this with actual validation
    
    if (hasUnsavedData) {
      return await confirmDiscardChanges();
    } else {
      return true;
    }
  }
  
  const confirmDiscardChanges = async () => {
    const alert = await alertController.create({
      header: 'Discard Unsaved Changes?',
      message: 'Are you sure you want to leave? Any unsaved changed will be lost.',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
        },
        {
          text: 'Discard',
          role: 'destructive',
        }
      ]
    });
    
    await alert.present();
    
    const { role } = await alert.onDidDismiss();
    
    return (role === 'Cancel') ? false : true;
  }
</script>
```



## Properties

| Property                 | Attribute   | Description                                                                                                                                                                                                                                                            | Type                                                                         | Default     |
| ------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| `beforeEnter`            | --          | A navigation hook that is fired when the route tries to enter. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.   | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined` | `undefined` |
| `beforeLeave`            | --          | A navigation hook that is fired when the route tries to leave. Returning `true` allows the navigation to proceed, while returning `false` causes it to be cancelled. Returning a `NavigationHookOptions` object causes the router to redirect to the path specified.   | `(() => NavigationHookResult \| Promise<NavigationHookResult>) \| undefined` | `undefined` |
| `component` _(required)_ | `component` | Name of the component to load/select in the navigation outlet (`syg-tabs`, `syg-nav`) when the route matches.  The value of this property is not always the tagname of the component to load, in `syg-tabs` it actually refers to the name of the `syg-tab` to select. | `string`                                                                     | `undefined` |
| `componentProps`         | --          | A key value `{ 'red': true, 'blue': 'white'}` containing props that should be passed to the defined component when rendered.                                                                                                                                           | `undefined \| { [key: string]: any; }`                                       | `undefined` |
| `url`                    | `url`       | Relative path that needs to match in order for this route to apply.  Accepts paths similar to expressjs so that you can define parameters in the url /foo/:bar where bar would be available in incoming props.                                                         | `string`                                                                     | `''`        |


## Events

| Event                 | Description                                                         | Type               |
| --------------------- | ------------------------------------------------------------------- | ------------------ |
| `ionRouteDataChanged` | Used internally by `syg-router` to know when this route did change. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
