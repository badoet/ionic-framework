```tsx
import { Component, h } from '@stencil/core';

import { toastController } from '@ionic/core';

@Component({
  tag: 'toast-example',
  styleUrl: 'toast-example.css'
})
export class ToastExample {
  async presentToast() {
    const toast = await toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'informatsyg-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <syg-content>
        <syg-button onClick={() => this.presentToast()}>Present Toast</syg-button>
        <syg-button onClick={() => this.presentToastWithOptions()}>Present Toast: Options</syg-button>
      </syg-content>
    ];
  }
}
```
