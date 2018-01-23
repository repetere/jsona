import { push, replace, go, goForward, goBack, } from 'react-router-redux';
import * as RJX from 'rjx';

export function getDefaultActions(options = {}) {
  const { store, settings = { application:{ props: {},  },  }, } = options;

  if (settings.application.props.useWindowDynamicData) {
    window.__rajax = Object.assign({}, window.__rajax);
    console.warn('implement actions.dynamic.setDynamicData');
    // window.__rajax.setDynamicData = (prop, val) => store.dispatch(actions.dynamic.setDynamicData(prop, val));
  }
  return {
    getState: () => store.getState(), //.dispatch(actions.user.getUserStatus()),
    debug: (data) => {
      console.debug(data);
    },
    rjxString:(rjx, resources)=> RJX.rjxHTMLString.call(Object.assign({}, store, options.rjx), { rjx, resources ,  }),
    refresh: () => store.dispatch(push(window.location.pathname)),
    reduxRouter: {
      push: (location) => store.dispatch(push(location)),
      replace: (location) => store.dispatch(replace(location)),
      go: (number) => store.dispatch(go(number)),
      goForward: () => store.dispatch(goForward()),
      goBack: () => store.dispatch(goBack()),
    },
    isLoggedIn: () => {
      console.warn('FIX USER IS LOGGEDIN'); return false;
    }, // store.getState().user.isLoggedIn,
    /*
    //.dispatch(actions.user.getUserStatus()),
    fetchAction: function (pathname, fetchOptions, success) {
      // console.debug('in redux actions this', this);
      return utilities.fetchAction.call(this, pathname, fetchOptions, success);
    }, //.dispatch(actions.user.getUserStatus()),
    redirect: (locationURL) => {
      // console.debug({ locationURL, });
      if (typeof location === 'string') {
        window.location = locationURL;
      } else {
        window.location = locationURL.location;
      }
    },
    getUserProfile: (jwt_token) => store.dispatch(actions.user.getUserProfile(jwt_token)),
    updateUserProfile: (profile) => store.dispatch(actions.user.updateUserProfile(profile)),
    setNavLabel: (label) => store.dispatch(actions.ui.setNavLabel(label)),
    saveUserProfile: (url, response, json) => store.dispatch(actions.user.saveUserProfile(url, response, json)),
    initializeAuthenticatedUser: (jwt_token, enforceMFA = true) => store.dispatch(actions.user.initializeAuthenticatedUser(jwt_token, enforceMFA)),
    loginUser: (formdata) => store.dispatch(actions.user.loginUser(formdata)),
    // ajaxModal: (options) => store.dispatch(actions.notification.ajaxModal(options)),
    fileSaver: (options) => store.dispatch(actions.output.fileSaver(options)),
    createModal: (options) => store.dispatch(actions.notification.createModal(options)),
    hideModal: (options) => store.dispatch(actions.notification.hideModal(options)),
    createNotification: (options) => store.dispatch(actions.notification.createNotification(options)),
    errorNotification: (options, timeout) => store.dispatch(actions.notification.errorNotification(options, timeout)),
    hideNotification: (id) => store.dispatch(actions.notification.hideNotification(id)),
    toggleUISidebar: () => store.dispatch(actions.ui.toggleUISidebar()),
    setUILoadedState: (loaded, customLayout) => store.dispatch(actions.ui.setUILoadedState(loaded, customLayout)),
    setDebugUILoadedState: (loaded, customLayout) => {
      let t = setTimeout(() => {
        store.dispatch(actions.ui.setUILoadedState(loaded, customLayout));
        clearTimeout(t);
      }, 2000);
    },
    logoutUser: () => store.dispatch(actions.user.logoutUser()),
    setDynamicData: (prop, val) => store.dispatch(actions.dynamic.setDynamicData(prop, val)),
    fetchLoginComponent: () => store.dispatch(utilities.setCacheConfiguration(actions.ui.fetchComponent(CONSTANTS.ui.LOGIN_COMPONENT), 'components.login')),
    fetchMainComponent: () => store.dispatch(utilities.setCacheConfiguration(actions.ui.fetchComponent(CONSTANTS.ui.MAIN_COMPONENT), 'components.main')),
    fetchErrorComponents: () => store.dispatch(utilities.setCacheConfiguration(actions.ui.fetchComponent(CONSTANTS.ui.ERROR_COMPONENTS), 'components.error')),
    setLoginComponent: () => store.dispatch(actions.ui.handleFetchedComponent(CONSTANTS.ui.LOGIN_COMPONENT)),
    setMainComponent: () => store.dispatch(actions.ui.handleFetchedComponent(CONSTANTS.ui.MAIN_COMPONENT)),
    setErrorComponents: () => store.dispatch(actions.ui.handleFetchedComponent(CONSTANTS.ui.ERROR_COMPONENTS)),
    setConfigurationFromCache: () => store.dispatch(utilities.getCacheConfiguration(Object.assign({}, actions, {
      setLoginComponent: reduxActions.setLoginComponent,
      setMainComponent: reduxActions.setMainComponent,
      setErrorComponents: reduxActions.setErrorComponents,
    }))),
    fetchUnauthenticatedManifest: (options = {}) => store.dispatch(actions.manifest.fetchUnauthenticatedManifest(options)),
    setActiveNavLink: (id) => store.dispatch(actions.ui.setActiveNavItem(id)),
    enforceMFA: (noRedirect) => store.dispatch(actions.user.enforceMFA(noRedirect)),
    validateMFA: (jwt_token) => store.dispatch(actions.user.validateMFA(jwt_token)),
    authenticatedMFA: () => store.dispatch(actions.user.authenticatedMFA()),
    */
  };
}