export const config = {
  componentLibraries: {},
  reactComponents: {},
  querySelector: "#root",
  settings: {
    name:'VXA-SPA',
    version:'0.0.1',
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
    useBodyLoadedClass: true,
    useHTMLLoadedClass: true,
    setBodyPathnameID: true,
    bodyLoadedClass: '__viewx_body_loaded',
    htmlLoadedClass: '__viewx_html_loaded',
    uiLoadedClass: '__viewx_ui_loaded',
    uiLoadingClass: '__viewx_ui_loading',
    accessTokenProperty: 'x-access-token',
    routes: {
      login: '/login',
      login_mfa: '/login_mfa'
    }
  },
  Functions: {
    log ({ type, data, error, meta }){
      switch (type) {
        case 'error':
          console.error(error, { data, meta });
          break;
        case 'warning':
          console.warn(data, { meta });
          break;
        case 'info':
          console.info(data, { meta });
          break;
        default:
          console.log(data, { meta });
      }
    },
    debug (input) {
      console.info('DEBUG', {
        input
      });
    },
    showLoader({
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
    hideLoader({
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
    onPageChange() {
      
    },
    onLaunch() {
      // console.warn('default onlaunch')
    },
    onShutdown() {
      // console.warn('default onshutdown')
    },
    requireAuth: async function requireAuth() {
      if (this.props.user.loggedIn === false) {
        if (this.props.location.pathname !== this.settings.routes.login) {
          this.dispatch({
            type: "setReturnURL",
            returnURL: this.props.location.pathname,
          });
        }
        this.props.history.push(this.settings.routes.login);
      }
    },
    requireMFA: async function requireMFA() {
      if (this.props.user.loggedIn === false) this.props.history.push(this.settings.routes.login);
      else if (this.props.user.loggedInMFA === false && this.props.user.loggedIn) this.props.history.push(this.settings.routes.login_mfa);
    }
  },
  layers: [{
      order: 100,
      name: 'loading',
      system: true,
      type: 'loadingView',
    },
    {
      order: 200,
      name: 'modal',
      system: true,
      type:'overlay',
    },
    // overlay
    {
      order: 400,
      name: 'header',
      system: true,
      type: 'view',
    },
    // nav
    // footer
    // error
    {
      order: 900,
      name: 'root',
      system: true,
      type: 'applicationRoot',
    },
  ],
};