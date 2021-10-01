import { Injectable } from '@angular/core';
import type { ActionSheetOptions } from '@ionic/core';
import { actionSheetController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class ActionSheetController extends OverlayBaseController<ActionSheetOptions, HTMLIonActionSheetElement> {
  constructor() {
    super(actionSheetController);
  }
}
