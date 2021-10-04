export interface BreadcrumbCollapsedClickEventDetail {
  ionShadowTarget?: HTMLElement;
  collapsedBreadcrumbs?: HTMLSygBreadcrumbElement[];
}

export interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLSygBreadcrumbElement;
}
