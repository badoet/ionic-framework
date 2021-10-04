import { JSXBase } from '@stencil/core/internal';

import { AnimationBuilder, Mode, SpinnerTypes } from '../../interface';
import { SygSafeString } from '../../utils/sanitization';

export interface LoadingOptions {
  spinner?: SpinnerTypes | null;
  message?: string | SygSafeString;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;
  backdropDismiss?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: LoadingAttributes;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

export interface LoadingAttributes extends JSXBase.HTMLAttributes<HTMLElement> {}
