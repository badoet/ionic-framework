import { newSpecPage } from '@stencil/core/testing';
import { Breadcrumbs } from '../breadcrumbs.tsx';
import { Breadcrumb } from '../../breadcrumb/breadcrumb.tsx';

it('should correctly provide the collapsed breadcrumbs in the event payload', async () => {
  const page = await newSpecPage({
    components: [Breadcrumbs, Breadcrumb],
    html: `
      <syg-breadcrumbs max-items="2" items-before-collapse="1" items-after-collapse="1">
        <syg-breadcrumb>First</syg-breadcrumb>
        <syg-breadcrumb>Second</syg-breadcrumb>
        <syg-breadcrumb>Third</syg-breadcrumb>
        <syg-breadcrumb>Fourth</syg-breadcrumb>
        <syg-breadcrumb>Fifth</syg-breadcrumb>
      </syg-breadcrumbs>
    `
  });

  const onCollapsedClick = jest.fn((ev) => ev);
  const breadcrumbs = page.body.querySelector('syg-breadcrumbs');
  const breadcrumb = page.body.querySelectorAll('syg-breadcrumb');

  breadcrumbs.addEventListener('ionCollapsedClick', onCollapsedClick);

  const event = new CustomEvent('collapsedClick');
  breadcrumbs.dispatchEvent(event);

  expect(onCollapsedClick).toHaveBeenCalledTimes(1);

  const collapsedBreadcrumbs = onCollapsedClick.mock.calls[0][0].detail.collapsedBreadcrumbs;
  expect(collapsedBreadcrumbs.length).toEqual(3);
  expect(collapsedBreadcrumbs[0]).toBe(breadcrumb[1]);
  expect(collapsedBreadcrumbs[1]).toBe(breadcrumb[2]);
  expect(collapsedBreadcrumbs[2]).toBe(breadcrumb[3]);
});
