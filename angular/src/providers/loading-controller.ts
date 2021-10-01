import { Injectable } from '@angular/core';
import type { LoadingOptions } from '@ionic/core';
import { loadingController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

@Injectable({
  providedIn: 'root',
})
export class LoadingController extends OverlayBaseController<LoadingOptions, HTMLIonLoadingElement> {
  constructor() {
    super(loadingController);
  }
}
