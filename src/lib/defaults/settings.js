export const settings = {
  application: {
    state: {
      useWindowState: true,
      useWindowStateDebugging: true,
      useWindowSettings: true,
    },
    props: {
      useWindowDynamicData: true,
      useWindowPropsDebugging: true,
    },
    history: {
      reactRouter: 'browserHistory', //browserHistory|hashHistory|createMemoryHistory",
    },
    html: {
      useBodyLoadedClass: true,
      useHTMLLoadedClass: true,
      setBodyPathnameID: true,
      bodyLoadedClass:'__rajax_body_loaded',
      htmlLoadedClass: '__rajax_html_loaded',
      rajaxAppContainerClass: 'reactapp__app_div_content',
    },
    layout: {
      app: {},
      header: {},
      nav: {},
      body: {},
      modal: {},
      overlay: {
        style: {
          
        },
      },
      footer: {},
    },
    ui: {
      showHeader: true,
      showFooter: true,
      useLoadingScreen: true,
    },
  },
};