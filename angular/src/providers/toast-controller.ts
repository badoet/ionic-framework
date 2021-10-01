import { Injectable } from '@angular/core';
import type { ToastOptions } from '@ionic/core';
import { toastController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class ToastController extends OverlayBaseController<ToastOptions, HTMLIonToastElement> {
  constructor() {
    super(toastController);
  }
}
