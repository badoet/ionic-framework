import { Component, ComponentInterface, Host, h } from '@stencil/core';

import { getSygMode } from '../../global/syg-global';

@Component({
  tag: 'syg-slide',
  styleUrl: 'slide.scss'
})
export class Slide implements ComponentInterface {

  render() {
    const mode = getSygMode(this);
    return (
      <Host
        class={{
          [mode]: true,
          'swiper-slide': true,
          'swiper-zoom-container': true
        }}
      >
      </Host>
    );
  }
}
