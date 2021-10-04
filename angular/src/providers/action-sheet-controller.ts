import { Injectable } from '@angular/core';
import { ActionSheetOptions, actionSheetController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class ActionSheetController extends OverlayBaseController<ActionSheetOptions, HTMLSygActionSheetElement> {
  constructor() {
    super(actionSheetController);
  }
}
