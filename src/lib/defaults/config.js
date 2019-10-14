import qs from 'querystring';
import { removeKeys, } from '../util/data';
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
    cacheLoggedInUser: true,
    cacheUserTimeout: 1000*60*24*30,
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
    useWebSockets: false,
    useWebSocketsAuth: false,
    socket_server_options: {},
    socket_disconnect_message: {},
    socket_server:undefined,//http://localhost:3000
    accessTokenProperty: 'x-access-token',
    routes: {
      user_login: '/auth/user/login',
      user_login_METHOD: 'POST',
      user_login_mfa: '/auth/user/mfa',
      user_login_mfa_METHOD: 'POST',
      user_profile: '/auth/user/profile',
      user_profile_METHOD: 'POST',
      login: '/login',
      login_mfa: '/login_mfa',
      logged_in_homepage: '/home',
      logged_out_homepage: '/',
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
    getSocketUser({ token, expires, timeout, profile, }) {
        return {
          email: profile.email,
          username: profile.name || profile.username,
          jwt_token: token,
          jwt_token_expires: expires,
          jwt_token_timeout: timeout,
          userdata: profile,
        };
    },
    loginUser: async function ({ username, password, remember_me, }) {
      try {
        const queryParams = qs.parse(window.location.search);
        console.log('loginUser', { username, password, queryParams, }, this);
        const tokenData = await this.viewx.Functions.fetchJSON(this.settings.routes.user_login, {
          method: this.settings.routes.user_login_METHOD,
          headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
          })
        });
        // console.log({ tokenData });
        const { token, expires, timeout, } = tokenData;
        // console.log({ token, expires, timeout, } )
        if (!token) throw new ReferenceError('Invalid login token');
        const userLoginAction = {
          type: 'setUser',
          user: {
            token,//AsyncStorage.getItem(constants.jwt_token.TOKEN_NAME),
            tokenData,//AsyncStorage.getItem(constants.jwt_token.TOKEN_DATA),
            expires,
            timeout,
            loggedIn: true,
            rememberMe: typeof remember_me !== 'undefined' ? remember_me : true,
            // loggedInMFA: false, 
          },
        };
        this.viewx.Functions.showLoader.call(this,{ ui:this.props.ui, setUI:this.props.setUI, });
        this.props.dispatch(userLoginAction);
        const profile = await this.viewx.Functions.getUserProfile({ token });
        this.props.dispatch({ type: 'setUser', user:{ profile}, });

        //send welcome message
        if (this.settings.useWebSockets) {
          const user = this.viewx.Functions.getSocketUser({ token, expires, timeout, profile });
          this.props.socket.emit('authentication', {
            user,
            reconnection: true,
          });
        }

        console.log('this.props.ui.returnURL', this.props.ui.returnURL);
        this.props.history.push(this.props.ui.returnURL || this.settings.routes.logged_in_homepage);
        // this.props.dispatch({ type: 'setReturnURL', returnURL:undefined, });

      } catch (e) {
        this.viewx.Functions.log({ type: 'error', error: e, });
      }
    },
    getUserProfile: async function({ token }) {
      return await this.viewx.Functions.fetchJSON(this.settings.routes.user_profile, {
        method: this.settings.routes.user_profile_METHOD,
        headers: { [this.settings.accessTokenProperty]: token},
      });
    },
    validateMFA: async function({ code }) {
      try {
        const response = await this.viewx.Functions.fetchJSON(this.settings.routes.user_login, {
          method: this.settings.routes.user_login_mfa_METHOD,
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
      const userLoginProps = [ 'token', 'tokenData', 'expires', 'timeout', 'profile', 'loggedIn', 'loggedInMFA', ];
      //remove cache keys
      if(this.settings.cacheLoggedInUser) removeKeys('user', userLoginProps);
      //remove from state
      const userLogoutAction = userLoginProps.reduce((result, prop) => { 
        result.user[ prop ] = false;
        return result;
      } ,{
          type: 'setUser',
          user:{},
      });
      this.viewx.Functions.showLoader.call(this,{ ui:this.props.ui, setUI:this.props.setUI, });
      this.props.dispatch(userLogoutAction);
      this.props.history.push(this.settings.routes.logged_out_homepage);
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