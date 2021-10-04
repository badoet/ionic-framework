import { h, defineComponent, shallowRef, VNode } from 'vue';
import { defineCustomElement } from '../utils';
import { IonApp as IonAppCmp } from '@ionic/core/components/syg-app.js';

const userComponents = shallowRef([]);
export const IonApp = /*@__PURE__*/ defineComponent((_, { attrs, slots }) => {
  defineCustomElement('syg-app', IonAppCmp);
  return () => {
    return h(
      'syg-app',
      {
        ...attrs
      },
      [slots.default && slots.default(), ...userComponents.value]
    )
  }
});

/**
 * When rendering user components inside of
 * ion-modal, or ion-popover the component
 * needs to be created inside of the current application
 * context otherwise libraries such as vue-i18n or vuex
 * will not work properly.
 *
 * `userComponents` renders teleported components as children
 * of `syg-app` within the current application context.
 */
export const addTeleportedUserComponent = (component: VNode) => {
  userComponents.value = [
    ...userComponents.value,
    component
  ]
}

export const removeTeleportedUserComponent = (component: VNode) => {
  userComponents.value = userComponents.value.filter(cmp => cmp !== component);
}
