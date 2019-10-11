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
      user_login: '/auth/user/login',
      user_login_mfa: '/auth/user/mfa',
      user_profile: '/auth/user/profile',
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
        let returnURL;
        if (this.props.location.pathname !== this.settings.routes.login) {
          this.props.dispatch({
            type: "setReturnURL",
            returnURL: this.props.location.pathname,
          });
          returnURL = '?returnURL=' + this.props.location.pathname;
        }
        this.props.history.push(this.settings.routes.login+returnURL);
        return undefined;
      } else return true;
    },
    requireMFA: async function requireMFA() {
      if (this.props.user.loggedIn === false) this.props.history.push(this.settings.routes.login);
      else if (this.props.user.loggedInMFA === false && this.props.user.loggedIn) this.props.history.push(this.settings.routes.login_mfa);
    },
    passOne: async function () {
      return true;
    },
    passTwo: function () {
      return true;
    },
    failOne: async function () {
      return false;
    },
    loadUser: async function () {
      // try {
      //   if (results[results.length - 1] === 'true') {
      //     this.props.authenticatedMFA();
      //   }
      //   let jwt_token = results[ 0 ];
      //   let jwt_token_data = JSON.parse(results[ 1 ]);
      //   let jwt_user_profile = {};
      //   try {
      //     jwt_user_profile = JSON.parse(results[ 2 ]);
      //   } catch (e) {
      //     this.props.getUserProfile(jwt_token);
      //     this.props.initializeAuthenticatedUser(jwt_token, false);
      //     this.props.errorNotification(new Error('Invalid User Profile'));
      //   }
      //   if (jwt_token_data && jwt_user_profile) {
      //     let url = '/api/jwt/token';
      //     let response = {};
      //     let json = {
      //       token: jwt_token_data.token,
      //       expires: jwt_token_data.expires,
      //       timeout: jwt_token_data.timeout,
      //       user: jwt_user_profile,
      //     };
      //     let currentTime = new Date();
          
      //     if (moment(jwt_token_data.expires).isBefore(currentTime)) {
      //       let expiredTokenError = new Error(`Access Token Expired ${moment(jwt_token_data.expires).format('LLLL')}`);
      //       this.props.logoutUser();
      //       throw expiredTokenError;
      //     } else {
      //       this.props.saveUserProfile(url, response, json);
      //       this.props.initializeAuthenticatedUser(json.token, false);
      //     }
      //   } else if (jwt_token) {
      //     this.props.getUserProfile(jwt_token);
      //     this.props.initializeAuthenticatedUser(jwt_token, false);
      //     this.props.createNotification({ text: 'welcome back', timeout:4000,  });
      return true;
    },
    getSocketUser({ url, json, response, }) {
      //   return {
      //     email: json.user.email,
      //     username: json.user.name || json.user.username,
      //     jwt_token: json.token,
      //     jwt_token_expires: json.expires,
      //     jwt_token_timeout: json.timeout,
      //     userdata: json.user,
      //   };
    },
    loginUser: async function ({ username, password }) {
      try {
        const response = await this.viewx.Functions.fetchJSON(this.settings.routes.user_login, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: JSON.stringify({
            username,
            password,
          })
        });
        //update user login state in cache
        //update user login state
        //send welcome message
        //fetch user profile
        //save user profile
        /*
        user = getSocketUser();
        socket.emit('authentication', {
//       user,
//       reconnection: true,
//     });
        */
        //redirect (returlURL or loginRedirect)
      } catch (e) {
        this.viewx.Functions.log({ type: 'error', error: e, });
      }
    },
    getUserProfile: async function({ token }) {
      return await this.viewx.Functions.fetchJSON(this.settings.routes.user_profile, {
        headers: { [this.settings.accessTokenProperty]: token},
        
      });
    },
    validateMFA: async function({ code }) {
      try {
        const response = await this.viewx.Functions.fetchJSON(this.settings.routes.user_login, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: JSON.stringify({
            code,
          })
        });
        if (response && response.data && response.data.authenticated) {
          //set auth mfa true
          //login or redirect url
        } else if (response.result === 'error') {
          throw new Error(response.data.error);
        //           return this.enforceMFA()(dispatch, getState);
          
        } else throw Error('Invalid Repsonse');
        
      } catch (e) {
        this.viewx.Functions.log({ type: 'error', error: e, });
      }
    },
    logoutUser() {
//   return (dispatch, getState) => {
//     let state = getState();
//     // console.debug({ state });
//     dispatch(pageActions.resetAppLoadedState());
//     Promise.all([
//       AsyncStorage.removeItem(constants.jwt_token.TOKEN_NAME),
//       AsyncStorage.removeItem(constants.jwt_token.TOKEN_DATA),
//       AsyncStorage.removeItem(constants.jwt_token.PROFILE_JSON),
//       AsyncStorage.removeItem(constants.user.MFA_AUTHENTICATED),
//       utilities.flushCacheConfiguration(['manifest.authenticated', 'user.navigation', 'user.preferences',]),
//       // AsyncStorage.removeItem(constants.pages.ASYNCSTORAGE_KEY),
//     ])
//       .then((/*results*/) => {
//         dispatch(this.logoutUserSuccess());
//         dispatch(pageActions.initialAppLoaded());
//         dispatch(uiActions.closeUISidebar());
//         dispatch(this.authenticatedMFA(false));
//         dispatch(push(state.settings.auth.logged_out_path || '/'));
//         let t = setImmediate(() => {
//           clearImmediate(t);
//           window.location.reload();
//         });
//       })
//       .catch(error => { 
//         dispatch(notification.errorNotification(error));
//         dispatch(this.failedLogoutRequest(error));
//         dispatch(pageActions.initialAppLoaded());
//         dispatch(uiActions.closeUISidebar());
//         dispatch(push(state.settings.auth.logged_out_path || '/'));
//         let t = setImmediate(() => {
//           clearImmediate(t);
//           window.location.reload();
//         });
//       });
//   };
    },
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