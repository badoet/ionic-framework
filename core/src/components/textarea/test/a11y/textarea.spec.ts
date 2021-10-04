import { newSpecPage } from '@stencil/core/testing';
import { Textarea } from '../../textarea';
import { Item } from '../../../item/item';
import { Label } from '../../../label/label';

describe('Textarea a11y', () => {
  it('does not set a default aria-labelledby when there is not a neighboring syg-label', async () => {
    const page = await newSpecPage({
      components: [Textarea, Item, Label],
      html: `<syg-textarea></syg-textarea>`
    })

    const ariaLabelledBy = page.body.querySelector('syg-textarea textarea').getAttribute('aria-labelledby');
    expect(ariaLabelledBy).toBe(null);
  });

  it('set a default aria-labelledby when a neighboring syg-label exists', async () => {
    const page = await newSpecPage({
      components: [Textarea, Item, Label],
      html: `<syg-item>
        <syg-label>A11y Test</syg-label>
        <syg-textarea></syg-textarea>
      </syg-item>`
    })

    const label = page.body.querySelector('syg-label');
    const ariaLabelledBy = page.body.querySelector('syg-textarea textarea').getAttribute('aria-labelledby');
    expect(ariaLabelledBy).toBe(label.id);
  });
});
