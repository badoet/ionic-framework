import { AlertOptions, alertController } from '@ionic/core/components';
import { IonAlert as IonAlertCmp } from '@ionic/core/components/syg-alert.js';

import { createControllerComponent } from './createControllerComponent';

export const IonAlert = /*@__PURE__*/ createControllerComponent<AlertOptions, HTMLIonAlertElement>(
  'syg-alert',
  alertController,
  IonAlertCmp
);
