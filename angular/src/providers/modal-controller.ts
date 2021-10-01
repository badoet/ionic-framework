import type { ComponentFactoryResolver, Injector } from '@angular/core';
import { Injectable } from '@angular/core';
import type { ModalOptions } from '@ionic/core';
import { modalController } from '@ionic/core';

import { OverlayBaseController } from '../util/overlay';

import type { AngularDelegate } from './angular-delegate';

@Injectable()
export class ModalController extends OverlayBaseController<ModalOptions, HTMLIonModalElement> {
  constructor(
    private angularDelegate: AngularDelegate,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    super(modalController);
  }

  create(opts: ModalOptions): Promise<HTMLIonModalElement> {
    return super.create({
      ...opts,
      delegate: this.angularDelegate.create(this.resolver, this.injector),
    });
  }
}
