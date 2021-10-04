export interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLSygTabsElement;
}
