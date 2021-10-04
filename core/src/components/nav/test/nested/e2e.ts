import { newE2EPage } from '@stencil/core/testing';

const navChanged = () => new Promise(resolve => window.addEventListener('ionNavDidChange', resolve));

// TODO: get this to pass
test.skip('nav: nested', async () => {

  const page = await newE2EPage({
    url: '/src/components/nav/test/nested?ionic:_testing=true'
  });

  expect(await page.compareScreenshot()).toMatchScreenshot();

  await page.click('page-one syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-two-one syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-two-two syg-button.next');
  await page.waitForTimeout(navChanged);
  await page.click('page-three syg-back-button');
  await page.waitForTimeout(navChanged);
  await page.click('page-two-two syg-back-button');
  await page.waitForTimeout(navChanged);
  await page.click('page-two-one syg-back-button');
  await page.waitForTimeout(navChanged);

  expect(await page.compareScreenshot('stack traversal')).toMatchScreenshot();
});
