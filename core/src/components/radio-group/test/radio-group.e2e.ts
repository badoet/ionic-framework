import { newE2EPage } from '@stencil/core/testing';

/**
 * @param page the E2E page that contains the radio button
 * @param radioButtonId the id of the radio button to focus
 * @returns the checked property of the focused radio button
 */
const selectRadio = async (page, radioButtonId: string, selectionMethod: 'keyboard' | 'mouse'): Promise<boolean> => {
  const selector = `syg-radio#${radioButtonId}`;
  if (selectionMethod === 'keyboard') {
    await page.focus(selector);
    await page.keyboard.press('Space');
  } else if (selectionMethod === 'mouse') {
    await page.click(selector);
  }
  
  await page.waitForChanges();

  const radioGroup = await page.find(`syg-radio#${radioButtonId} >>> input`);
  const checked = await radioGroup.getProperty('checked');
  return checked;
}

describe('radio-group', () => {
  it('Spacebar should not deselect without allowEmptySelection', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <syg-radio-group value="one" allow-empty-selection="false">
        <syg-item>
          <syg-label>One</syg-label>
          <syg-radio id="one" value="one"></syg-radio>
        </syg-item>
      </syg-radio-group>
    `);

    const checked = await selectRadio(page, 'one', 'keyboard');
    
    expect(checked).toBe(true);
  });

  it('Spacebar should deselect with allowEmptySelection', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <syg-radio-group value="one" allow-empty-selection="true">
        <syg-item>
          <syg-label>One</syg-label>
          <syg-radio id="one" value="one"></syg-radio>
        </syg-item>
      </syg-radio-group>
    `);

    const checked = await selectRadio(page, 'one', 'keyboard');

    expect(checked).toBe(false);
  });

  it('Click should not deselect without allowEmptySelection', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <syg-radio-group value="one" allow-empty-selection="false">
        <syg-item>
          <syg-label>One</syg-label>
          <syg-radio id="one" value="one"></syg-radio>
        </syg-item>
      </syg-radio-group>
    `);

    const checked = await selectRadio(page, 'one', 'mouse');
    
    expect(checked).toBe(true);
  });

  it('Click should deselect with allowEmptySelection', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <syg-radio-group value="one" allow-empty-selection="true">
        <syg-item>
          <syg-label>One</syg-label>
          <syg-radio id="one" value="one"></syg-radio>
        </syg-item>
      </syg-radio-group>
    `);

    const checked = await selectRadio(page, 'one', 'mouse');

    expect(checked).toBe(false);
  });
});
