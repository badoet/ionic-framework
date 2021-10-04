import { newE2EPage } from '@stencil/core/testing';

test('modal: inline', async () => {
  const page = await newE2EPage({ url: '/src/components/modal/test/inline?ionic:_testing=true' });
  const screenshotCompares = [];

  await page.click('syg-button');
  await page.waitForSelector('syg-modal');

  let modal = await page.find('syg-modal');

  expect(modal).not.toBe(null);
  await modal.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  await modal.callMethod('dismiss');
  await modal.waitForNotVisible();

  screenshotCompares.push(await page.compareScreenshot('dismiss'));

  modal = await page.find('syg-modal');
  expect(modal).not.toBe(null);

  await page.click('syg-button');
  await page.waitForSelector('syg-modal');

  let modalAgain = await page.find('syg-modal');

  expect(modalAgain).not.toBe(null);
  await modalAgain.waitForVisible();

  screenshotCompares.push(await page.compareScreenshot());

  for (const screenshotCompare of screenshotCompares) {
    expect(screenshotCompare).toMatchScreenshot();
  }
});
