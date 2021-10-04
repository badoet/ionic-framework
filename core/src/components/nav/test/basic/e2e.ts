import { newE2EPage } from '@stencil/core/testing';

const navChanged = () => new Promise(resolve => window.addEventListener('ionNavDidChange', resolve));

test.skip('nav: basic', async () => {

  const page = await newE2EPage({
    url: '/src/components/nav/test/basic?ionic:_testing=true'
  });

  expect(await page.compareScreenshot()).toMatchScreenshot();

  page.click('page-one syg-button.next');
  await page.waitForTimeout(navChanged);
  page.click('page-two syg-button.next');
  await page.waitForTimeout(navChanged);
  page.click('page-three syg-back-button');
  await page.waitForTimeout(navChanged);
  page.click('page-two syg-back-button');
  await page.waitForTimeout(navChanged);

  expect(await page.compareScreenshot('stack traversal')).toMatchScreenshot();
});
