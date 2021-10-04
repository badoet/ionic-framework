import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

// @ts-ignore
import { apiSpecGenerator } from './scripts/api-spec-generator';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'Syg',
  bundles: [
    { components: ['syg-action-sheet'] },
    { components: ['syg-alert'] },
    { components: ['syg-back-button'] },
    { components: ['syg-app', 'syg-router-outlet', 'syg-buttons', 'syg-content', 'syg-footer', 'syg-header', 'syg-title', 'syg-toolbar'] },
    { components: ['syg-avatar', 'syg-badge', 'syg-thumbnail'] },
    { components: ['syg-backdrop'] },
    { components: ['syg-button', 'ion-icon'] },
    { components: ['syg-card', 'syg-card-content', 'syg-card-header', 'syg-card-title', 'syg-card-subtitle'] },
    { components: ['syg-checkbox'] },
    { components: ['syg-chip'] },
    { components: ['syg-datetime', 'syg-picker', 'syg-picker-column'] },
    { components: ['syg-fab', 'syg-fab-button', 'syg-fab-list'] },
    { components: ['syg-grid', 'syg-row', 'syg-col'] },
    { components: ['syg-infinite-scroll', 'syg-infinite-scroll-content'] },
    { components: ['syg-input'] },
    { components: ['syg-textarea'] },
    { components: ['syg-item', 'syg-item-divider', 'syg-item-group', 'syg-label', 'syg-list', 'syg-list-header', 'syg-skeleton-text', 'syg-note'] },
    { components: ['syg-item-sliding', 'syg-item-options', 'syg-item-option'] },
    { components: ['syg-loading'] },
    { components: ['syg-menu', 'syg-menu-toggle', 'syg-menu-button'] },
    { components: ['syg-modal'] },
    { components: ['syg-nav', 'syg-nav-link'] },
    { components: ['syg-img'] },
    { components: ['syg-popover'] },
    { components: ['syg-progress-bar'] },
    { components: ['syg-radio', 'syg-radio-group'] },
    { components: ['syg-range'] },
    { components: ['syg-refresher', 'syg-refresher-content'] },
    { components: ['syg-reorder', 'syg-reorder-group'] },
    { components: ['syg-ripple-effect'] },
    { components: ['syg-router', 'syg-route', 'syg-route-redirect', 'syg-router-link'] },
    { components: ['syg-searchbar'] },
    { components: ['syg-segment', 'syg-segment-button'] },
    { components: ['syg-select', 'syg-select-option', 'syg-select-popover'] },
    { components: ['syg-slides', 'syg-slide'] },
    { components: ['syg-spinner'] },
    { components: ['syg-split-pane'] },
    { components: ['syg-tabs', 'syg-tab'] },
    { components: ['syg-tab-bar', 'syg-tab-button'] },
    { components: ['syg-text'] },
    { components: ['syg-toast'] },
    { components: ['syg-toggle'] },
    { components: ['syg-virtual-scroll'] },
    { components: ['syg-accordion-group', 'syg-accordion'] },
    { components: ['syg-breadcrumb', 'syg-breadcrumbs'] },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/themes/ionic.skip-warns.scss']
    })
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@sygnature/core',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      proxiesFile: '../packages/react/src/components/proxies.ts',
      excludeComponents: [
        // Routing
        'syg-router',
        'syg-route',
        'syg-route-redirect',
        'syg-router-link',
        'syg-router-outlet',
        'syg-back-button',
        'syg-tab-button',
        'syg-tabs',
        'syg-tab-bar',
        'syg-button',
        'syg-card',
        'syg-fab-button',
        'syg-item',
        'syg-item-option',

        // Overlays
        'syg-action-sheet',
        'syg-alert',
        'syg-loading',
        'syg-modal',
        'syg-picker',
        'syg-popover',
        'syg-toast',

        'ion-icon'
      ]
    }),
    // vueOutputTarget({
    //   componentCorePackage: '@ionic/core',
    //   includeImportCustomElements: true,
    //   includePolyfills: false,
    //   includeDefineCustomElements: false,
    //   proxiesFile: '../packages/vue/src/proxies.ts',
    //   excludeComponents: [
    //     // Routing
    //     'syg-router',
    //     'syg-route',
    //     'syg-route-redirect',
    //     'syg-router-link',
    //     'syg-router-outlet',
    //     'syg-back-button',
    //     'syg-tab-button',
    //     'syg-tabs',
    //     'syg-tab',
    //     'syg-tab-bar',

    //     // Overlays
    //     'syg-action-sheet',
    //     'syg-alert',
    //     'syg-loading',
    //     'syg-modal',
    //     'syg-picker',
    //     'syg-popover',
    //     'syg-toast',

    //     'syg-app',
    //     'ion-icon'
    //   ],
    //   componentModels: [
    //     {
    //       elements: ['syg-checkbox', 'syg-toggle'],
    //       targetAttr: 'checked',
    //       event: 'v-syg-change',
    //       externalEvent: 'ionChange'
    //     },
    //     {
    //       elements: ['syg-datetime', 'syg-input', 'syg-radio-group', 'syg-radio', 'syg-range', 'syg-searchbar', 'syg-segment', 'syg-segment-button', 'syg-select', 'syg-textarea'],
    //       targetAttr: 'value',
    //       event: 'v-syg-change',
    //       externalEvent: 'ionChange'
    //     }
    //   ],
    // }),
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/ionic-team/ionic/tree/master/core/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [{
        src: '../scripts/custom-elements',
        dest: 'components',
        warn: true
      }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-readme',
      strict: true
    },
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    apiSpecGenerator({
      file: 'api.txt'
    }) as any,
    // {
    //   type: 'stats',
    //   file: 'stats.json'
    // },
  //   {
  //     type: 'angular',
  //     componentCorePackage: '@ionic/core',
  //     directivesProxyFile: '../angular/src/directives/proxies.ts',
  //     directivesUtilsFile: '../angular/src/directives/proxies-utils.ts',
  //     directivesArrayFile: '../angular/src/directives/proxies-list.txt',
  //     excludeComponents: [
  //       // overlays
  //       'syg-action-sheet',
  //       'syg-alert',
  //       'syg-loading',
  //       'syg-modal',
  //       'syg-picker',
  //       'syg-popover',
  //       'syg-toast',
  //       'syg-toast',

  //       // navigation
  //       'syg-router',
  //       'syg-route',
  //       'syg-route-redirect',
  //       'syg-router-link',
  //       'syg-router-outlet',

  //       // tabs
  //       'syg-tabs',
  //       'syg-tab',

  //       // auxiliar
  //       'syg-picker-column',
  //       'syg-virtual-scroll'
  //     ]
  //   }
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true
  },
  testing: {
    allowableMismatchedPixels: 200,
    pixelmatchThreshold: 0.05,
    waitBeforeScreenshot: 20,
    emulate: [
      {
        userAgent: 'iPhone',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      },
      {
        userAgent: 'Android',
        viewport: {
          width: 400,
          height: 800,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false
        }
      }
    ]
  },
  preamble: '(C) Sygnature - MIT License',
  globalScript: 'src/global/syg-global.ts',
  enableCache: true,
};
