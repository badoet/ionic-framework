import { Radio } from '../radio.tsx';

describe('syg-radio', () => {
  it('should set a default value', async () => {
    const radio = new Radio();

    await radio.connectedCallback();

    expect(radio.value).toEqual('syg-rb-0');    
  });
});