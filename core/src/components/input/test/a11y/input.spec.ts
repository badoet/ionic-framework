import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../../input';
import { Item } from '../../../item/item';
import { Label } from '../../../label/label';

describe('Input a11y', () => {
  it('does not set a default aria-labelledby when there is not a neighboring syg-label', async () => {
    const page = await newSpecPage({
      components: [Input, Item, Label],
      html: `<syg-input></syg-input>`
    })
 
    const ariaLabelledBy = page.body.querySelector('syg-input > input').getAttribute('aria-labelledby');
    expect(ariaLabelledBy).toBe(null);
  });

  it('set a default aria-labelledby when a neighboring syg-label exists', async () => {
    const page = await newSpecPage({
      components: [Input, Item, Label],
      html: `<syg-item>
        <syg-label>A11y Test</syg-label>
        <syg-input></syg-input>
      </syg-item>`
    })

    const label = page.body.querySelector('syg-label'); 
    const ariaLabelledBy = page.body.querySelector('syg-input > input').getAttribute('aria-labelledby');
    expect(ariaLabelledBy).toBe(label.id);
  });
});
