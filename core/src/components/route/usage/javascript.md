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
