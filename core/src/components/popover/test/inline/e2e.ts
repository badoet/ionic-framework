import { newE2EPage } from '@stencil/core/testing';

test('popover: inline, isOpen and event props', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/inline?ionic:_testing=true' });
  const screenshotCompares = [];

  await page.click('syg-button#props');
  await page.waitForSelector('syg-popover');

  let popover = await page.find('syg-popover');

  expect(popover).not.toBe(null);
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  await popover.callMethod('dismiss');
  await popover.waitForNotVisible();

  screenshotCompares.push(await page.compareScreenshot('dismiss'));

  popover = await page.find('syg-popover');

  await page.click('syg-button#props');
  await page.waitForSelector('syg-popover');

  let popoverAgain = await page.find('syg-popover');

  expect(popoverAgain).not.toBe(null);
  await popoverAgain.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});

test('popover: inline, present method', async () => {
  const page = await newE2EPage({ url: '/src/components/popover/test/inline?ionic:_testing=true' });
  const screenshotCompares = [];

  await page.click('syg-button#method');
  await page.waitForSelector('syg-popover');

  let popover = await page.find('syg-popover');

  expect(popover).not.toBe(null);
  await popover.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  await popover.callMethod('dismiss');
  await popover.waitForNotVisible();

  screenshotCompares.push(await page.compareScreenshot('dismiss'));

  popover = await page.find('syg-popover');

  await page.click('syg-button#method');
  await page.waitForSelector('syg-popover');

  let popoverAgain = await page.find('syg-popover');

  expect(popoverAgain).not.toBe(null);
  await popoverAgain.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
