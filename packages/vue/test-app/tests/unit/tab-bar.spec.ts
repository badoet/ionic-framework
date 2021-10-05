import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { IonicVue, IonApp, IonRouterOutlet, IonPage, IonTabs, IonTabBar } from '@ionic/vue';

const App = {
  components: { IonApp, IonRouterOutlet },
  template: '<syg-app><ion-router-outlet /></syg-app>',
}

describe('syg-tab-bar', () => {
  it('should render in the top slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <syg-tab-bar slot="top"></syg-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<syg-tab-bar slot="top"></syg-tab-bar><div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;">`);

  });

  it('should render in the bottom slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <syg-tab-bar slot="bottom"></syg-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;"><ion-router-outlet></ion-router-outlet></div><syg-tab-bar slot="bottom"></syg-tab-bar>`);

  });

  it('should render in the default slot', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <syg-tab-bar></syg-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`<div class="tabs-inner" style="position: relative; flex: 1; contain: layout size style;"><ion-router-outlet></ion-router-outlet></div><syg-tab-bar></syg-tab-bar></ion-tabs>`)
  });

  // Verifies the fix for https://github.com/ionic-team/ionic-framework/issues/22642
  it('should not fail on non tab button elements', async () => {
    const Tabs = {
      components: { IonPage, IonTabs, IonTabBar, IonRouterOutlet },
      template: `
        <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <syg-tab-bar>
              <!-- my comment -->
            </syg-tab-bar>
          </ion-tabs>
        </ion-page>
      `,
    }

    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        { path: '/', component: Tabs }
      ]
    });

    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, IonicVue]
      }
    });

    const innerHTML = wrapper.find('ion-tabs').html();
    expect(innerHTML).toContain(`><syg-tab-bar><!-- my comment --></syg-tab-bar>`)
  })
});
