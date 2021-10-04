import { newE2EPage } from '@stencil/core/testing';

const navChanged = () => new Promise(resolve => window.addEventListener('ionRouteDidChange', resolve));

test.skip('nav: routing', async () => {

  const page = await newE2EPage({
    url: '/src/components/nav/test/routing?ionic:_testing=true'
  });

  expect(await page.compareScreenshot()).toMatchScreenshot();

  await page.click('page-root syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-one syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-two syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-three syg-back-button');
  await page.waitForTimeout(navChanged);
  await page.click('page-two syg-back-button');
  await page.waitForTimeout(navChanged);
  await page.click('page-one syg-back-button');
  await page.waitForTimeout(navChanged);

  expect(await page.compareScreenshot('stack traversal')).toMatchScreenshot();
});
