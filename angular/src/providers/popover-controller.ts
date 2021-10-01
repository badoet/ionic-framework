import type { ComponentFactoryResolver, Injector } from '@angular/core';
import { Injectable } from '@angular/core';
import type { PopoverOptions } from '@ionic/core';
import { popoverController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

import type { AngularDelegate } from './angular-delegate';

@Injectable()
export class PopoverController extends OverlayBaseController<PopoverOptions, HTMLIonPopoverElement> {
  constructor(
    private angularDelegate: AngularDelegate,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    super(popoverController);
  }

  create(opts: PopoverOptions): Promise<HTMLIonPopoverElement> {
    return super.create({
      ...opts,
      delegate: this.angularDelegate.create(this.resolver, this.injector),
    });
  }
}
