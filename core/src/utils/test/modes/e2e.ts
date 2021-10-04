import { newE2EPage } from '@stencil/core/testing';

import { checkComponentModeClasses, checkModeClasses } from '../utils';

// This test is to loop through all components that should have
// specific classes added and test them
test('component: modes', async () => {
  const page = await newE2EPage({
    url: '/src/utils/test/modes?ionic:_testing=true'
  });

  // First test: .button class
  // ----------------------------------------------------------------
  // components that need to have the `button` class
  // for use in styling by other components (`syg-buttons`)
  // e.g. <syg-back-button class="button">
  let tags = ['syg-button', 'syg-back-button', 'syg-menu-button'];

  for (const tag of tags) {
    const el = await page.find(tag);
    expect(el).toHaveClass('button');
  }

  // Second test: .item class
  // ----------------------------------------------------------------
  // components that need to have the `item` class
  // for use in styling by other components
  // e.g. <syg-item-divider class="item">
  tags = ['syg-item', 'syg-item-divider', 'syg-item-group'];

  for (const tag of tags) {
    const el = await page.find(tag);
    expect(el).toHaveClass('item');
  }

  // Third test: .{component}-{mode} class
  // ----------------------------------------------------------------
  // components that need to have their tag name
  // + mode as a class for internal styling
  // e.g. <syg-card-content class="card-content-md">
  tags = ['syg-card-content', 'syg-footer', 'syg-header', 'syg-infinite-scroll-content', 'syg-item-group', 'syg-item-options', 'syg-list', 'syg-picker', 'syg-refresher', 'syg-slides', 'syg-split-pane'];

  const globalMode = await page.evaluate(() => document.documentElement.getAttribute('mode'));
  for (const tag of tags) {
    const el = await page.find(tag);
    await checkComponentModeClasses(el, globalMode!);
  }

  // Fourth test: .{mode} class
  // ----------------------------------------------------------------
  // components that need to have the mode class
  // added for external / user styling
  // e.g. <syg-badge class="md">
  tags = ['syg-action-sheet', 'syg-alert', 'syg-app', 'syg-avatar', 'syg-back-button', 'syg-backdrop', 'syg-badge', 'syg-button', 'syg-buttons', 'syg-card-content', 'syg-card-header', 'syg-card-subtitle', 'syg-card-title', 'syg-card', 'syg-checkbox', 'syg-chip', 'syg-col', 'syg-content', 'syg-datetime', 'syg-fab', 'syg-fab-button', 'syg-fab-list', 'syg-footer', 'syg-grid', 'syg-header', 'ion-icon', 'syg-img', 'syg-infinite-scroll', 'syg-infinite-scroll-content', 'syg-input', 'syg-item', 'syg-item-divider', 'syg-item-group', 'syg-item-option', 'syg-item-options', 'syg-item-sliding', 'syg-label', 'syg-list', 'syg-list-header', 'syg-loading', 'syg-modal', 'syg-menu', 'syg-menu-button', 'syg-menu-toggle', 'syg-note', 'syg-picker', 'syg-picker-column', 'syg-popover', 'syg-progress-bar', 'syg-radio', 'syg-radio-group', 'syg-range', 'syg-refresher', 'syg-refresher-content', 'syg-reorder', 'syg-reorder-group', 'syg-ripple-effect', 'syg-router-link', 'syg-row', 'syg-searchbar', 'syg-segment', 'syg-segment-button', 'syg-select', 'syg-select-option', 'syg-select-popover', 'syg-skeleton-text', 'syg-slide', 'syg-slides', 'syg-spinner', 'syg-split-pane', 'syg-tab-bar', 'syg-tab-button', 'syg-text', 'syg-textarea', 'syg-thumbnail', 'syg-title', 'syg-toast', 'syg-toggle', 'syg-toolbar'];

  for (const tag of tags) {
    await page.waitForSelector(tag);
    const el = await page.find(tag);
    await checkModeClasses(el, globalMode!);
  }

  // Fifth test: {mode} attribute on non-ionic ancestor element
  // ----------------------------------------------------------------
  // non-ionic ancestor components with a mode attribute
  // e.g. <p mode="foo">
  const ancestorTags = ['p[mode]'];
  const childTag = 'syg-label';

  for (const tag of ancestorTags) {
    await page.waitForSelector(tag);
    const ancestor = await page.find(tag);
    const mode = ancestor.getAttribute('mode');
    const expectedMode = ['ios', 'md'].includes(mode) ? mode : globalMode!;
    const el = await ancestor.find(childTag);
    await checkModeClasses(el, expectedMode);
  }

});
