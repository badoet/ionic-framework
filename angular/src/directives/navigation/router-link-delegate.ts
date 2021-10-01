import type { LocationStrategy } from '@angular/common';
import type { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Directive, HostListener, Input, Optional } from '@angular/core';
import type { Router, RouterLink } from '@angular/router';
import type { AnimationBuilder, RouterDirection } from '@ionic/core';
import type { Subscription } from 'rxjs';

import type { NavController } from '../../providers/nav-controller';

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkDelegateDirective implements OnInit, OnChanges, OnDestroy {
  private subscription?: Subscription;

  @Input()
  routerDirection: RouterDirection = 'forward';

  @Input()
  routerAnimation?: AnimationBuilder;

  constructor(
    private locationStrategy: LocationStrategy,
    private navCtrl: NavController,
    private elementRef: ElementRef,
    private router: Router,
    @Optional() private routerLink?: RouterLink
  ) {}

  ngOnInit(): void {
    this.updateTargetUrlAndHref();
  }

  ngOnChanges(): void {
    this.updateTargetUrlAndHref();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateTargetUrlAndHref() {
    if (this.routerLink) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }

  /**
   * @internal
   */
  @HostListener('click', ['$event'])
  onClick(ev: UIEvent): void {
    this.navCtrl.setDirection(this.routerDirection, undefined, undefined, this.routerAnimation);
    ev.preventDefault();
  }
}
