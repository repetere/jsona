export const config = {
  componentLibraries: {},
  reactComponents: {},
  querySelector: "#root",
  settings: {
    addReactToWindow: true,
    addReactDOMToWindow: true,
    addJSONXToWindow: true,
    debug: true,
    router: 'browser', //hash|memory|broswer,
    cacheTemplatesOffline: false,
    templatePath: undefined,
    templateFetchOptions: {},
    fetchHeaders: {},
    dynamicTemplatePath: undefined,
    dynamicTemplateFetchOptions: {},
    // useBodyLoadedClass: true,
    // useHTMLLoadedClass: true,
    // setBodyPathnameID: true,
    uiLoadedClass: '__viewx_ui_loaded',
    uiLoadingClass: '__viewx_ui_loading',
    accessTokenProperty: 'x-access-token',
  },
  Functions: {
    debug: function (input) {
      console.info('DEBUG', {
        input
      });
    },
    showLoader: function showLoader({
      ui,
      setUI,
    }) {
      const el = document.querySelector('#loading');
      el.style.height = '100%';
      el.style.width = '100%';
      el.style.position = 'absolute';
      el.style.background = 'whitesmoke';
      el.style.textAlign = 'center';
      el.style.display = 'block';
      el.style.opacity = 0.8;

      setUI({
        ...ui,
        isLoading: true,
      });
    },
    hideLoader: function hideLoader({
      ui,
      setUI,
    }) {
      const el = document.querySelector('#loading');
      el.style.display = 'none';

      setUI({
        ...ui,
        isLoading: false,
      });
    },
  },
  layers: [{
      order: 100,
      name: 'loading',
      type: 'loadingView',
    },
    // modal
    // overlay
    {
      order: 400,
      name: 'header',
      type: 'view',
    },
    // nav
    // footer
    // error
    {
      order: 900,
      name: 'root',
      type: 'applicationRoot',
    },
  ],
};