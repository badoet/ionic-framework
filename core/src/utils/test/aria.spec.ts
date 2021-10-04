import { newSpecPage } from '@stencil/core/testing';
import { getAriaLabel } from '../helpers';
import { Item } from '../../components/item/item.tsx';
import { Label } from '../../components/label/label.tsx';
import { Toggle } from '../../components/toggle/toggle.tsx';

describe('getAriaLabel()', () => {
  it('should correctly link component to label', async () => {
    const page = await newSpecPage({
      components: [Item, Label, Toggle],
      html: `
        <syg-item>
          <syg-label>My Label</syg-label>
          <syg-toggle></syg-toggle>
        </syg-item>
      `
    });

    const toggle = page.body.querySelector('syg-toggle');

    const { label, labelId, labelText } = getAriaLabel(toggle, 'syg-tg-0');

    expect(labelText).toEqual('My Label');
    expect(labelId).toEqual('syg-tg-0-lbl');
    expect(label).toEqual(page.body.querySelector('syg-label'));
  });

  it('should correctly link component when using custom label', async () => {
    const page = await newSpecPage({
      components: [Toggle],
      html: `
        <div id="my-label">Hello World</div>
        <syg-toggle aria-labelledby="my-label"></syg-toggle>
      `
    });

    const toggle = page.body.querySelector('syg-toggle');

    const { label, labelId, labelText } = getAriaLabel(toggle, 'syg-tg-0');

    expect(labelText).toEqual('Hello World');
    expect(labelId).toEqual('my-label');
    expect(label).toEqual(page.body.querySelector('#my-label'));
  });

  it('should correctly link component when special characters are used', async () => {
    const page = await newSpecPage({
      components: [Toggle],
      html: `
        <div id="id.1">Hello World</div>
        <syg-toggle aria-labelledby="id.1"></syg-toggle>
      `
    });

    const toggle = page.body.querySelector('syg-toggle');

    const { label, labelId, labelText } = getAriaLabel(toggle, 'syg-tg-0');

    expect(labelText).toEqual('Hello World');
    expect(labelId).toEqual('id.1');
  });

  it('should only set the label id if one was not set already', async () => {
    const page = await newSpecPage({
      components: [Toggle],
      html: `
        <label id="my-id" for="id.1">Hello World</label>
        <syg-toggle id="id.1"></syg-toggle>
      `
    });

    const toggle = page.body.querySelector('syg-toggle');

    const { label, labelId, labelText } = getAriaLabel(toggle, 'syg-tg-0');

    expect(labelText).toEqual('Hello World');
    expect(labelId).toEqual('my-id');
  });

  it('should set label id', async () => {
    const page = await newSpecPage({
      components: [Toggle],
      html: `
        <label for="id.1">Hello World</label>
        <syg-toggle id="id.1"></syg-toggle>
      `
    });

    const toggle = page.body.querySelector('syg-toggle');

    const { label, labelId, labelText } = getAriaLabel(toggle, 'syg-tg-0');

    expect(labelText).toEqual('Hello World');
    expect(labelId).toEqual('id.1-lbl');
  });
});
