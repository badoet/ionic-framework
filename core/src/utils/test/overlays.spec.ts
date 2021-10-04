import { newSpecPage } from '@stencil/core/testing';
import { setRootAriaHidden } from '../overlays';
import { RouterOutlet } from '../../components/router-outlet/route-outlet';
import { Nav } from '../../components/nav/nav';

describe('setRootAriaHidden()', () => {
  it('should correctly remove and re-add router outlet from accessibility tree', async () => {
    const page = await newSpecPage({
      components: [RouterOutlet],
      html: `
        <syg-router-outlet></syg-router-outlet>
      `
    });

    const routerOutlet = page.body.querySelector('syg-router-outlet');

    expect(routerOutlet.hasAttribute('aria-hidden')).toEqual(false);

    setRootAriaHidden(true);
    expect(routerOutlet.hasAttribute('aria-hidden')).toEqual(true);

    setRootAriaHidden(false);
    expect(routerOutlet.hasAttribute('aria-hidden')).toEqual(false);
  });

  it('should correctly remove and re-add nav from accessibility tree', async () => {
    const page = await newSpecPage({
      components: [Nav],
      html: `
        <syg-nav></syg-nav>
      `
    });

    const nav = page.body.querySelector('syg-nav');

    expect(nav.hasAttribute('aria-hidden')).toEqual(false);

    setRootAriaHidden(true);
    expect(nav.hasAttribute('aria-hidden')).toEqual(true);

    setRootAriaHidden(false);
    expect(nav.hasAttribute('aria-hidden')).toEqual(false);
  });

  it('should correctly remove and re-add custom container from accessibility tree', async () => {
    const page = await newSpecPage({
      components: [],
      html: `
        <div id="syg-view-container-root"></div>
        <div id="not-container-root"></div>
      `
    });

    const containerRoot = page.body.querySelector('#syg-view-container-root');
    const notContainerRoot = page.body.querySelector('#not-container-root');

    expect(containerRoot.hasAttribute('aria-hidden')).toEqual(false);
    expect(notContainerRoot.hasAttribute('aria-hidden')).toEqual(false);

    setRootAriaHidden(true);
    expect(containerRoot.hasAttribute('aria-hidden')).toEqual(true);
    expect(notContainerRoot.hasAttribute('aria-hidden')).toEqual(false);

    setRootAriaHidden(false);
    expect(containerRoot.hasAttribute('aria-hidden')).toEqual(false);
    expect(notContainerRoot.hasAttribute('aria-hidden')).toEqual(false);
  });

  it('should not error if router outlet was not found', async () => {
    const page = await newSpecPage({
      components: [],
      html: `
        <div></div>
      `
    });

    setRootAriaHidden(true);
  });
});
