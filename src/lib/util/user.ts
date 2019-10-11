// saveUserProfile: (url, response, json) => store.dispatch(actions.user.saveUserProfile(url, response, json)),
// initializeAuthenticatedUser: (jwt_token, enforceMFA = true) => store.dispatch(actions.user.initializeAuthenticatedUser(jwt_token, enforceMFA)),
//   loginUser: (formdata) => store.dispatch(actions.user.loginUser(formdata)),

//   logoutUser: () => store.dispatch(actions.user.logoutUser()),
//   enforceMFA: (noRedirect) => store.dispatch(actions.user.enforceMFA(noRedirect)),
//   validateMFA: (jwt_token) => store.dispatch(actions.user.validateMFA(jwt_token)),
//   authenticatedMFA: () => store.dispatch(actions.user.authenticatedMFA()),
    
    

  
// initializeAuthenticatedUser(token, ensureMFA, __returnURL) {
//   // console.debug('initializeAuthenticatedUser', { token, ensureMFA, __returnURL, __global__returnURL, });
//   // console.debug({ __returnURL });
//   return (dispatch, getState) => {
//     let requestOptions = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'x-access-token': token,
//       },
//     };
//     let state = getState();


//     if (state.manifest && state.manifest.authenticated && state.manifest.authenticated.hasLoaded && state.settings && state.settings.user && state.settings.user.navigation && state.settings.user.navigation.hasLoaded && state.settings.user.preferences && state.settings.user.preferences.hasLoaded) {
//       if (initializationTimeout) {
//         clearTimeout(initializationTimeout);
//         initializationThrottle.destroyInactiveThrottle();
//       }
//       // console.debug('enforceMFA clearTimeout __returnURL', __returnURL);
//       return (ensureMFA !== false) ? this.enforceMFA(undefined, __returnURL)(dispatch, getState) : undefined;
//     } else {
//       let assignThrottle = (resolve, reject) => {
//         let throttle = () => {
//           initializationTimeout = setTimeout(() => {
//             clearTimeout(initializationTimeout);
//             // console.debug('throttled enforceMFA clearTimeout __returnURL', __returnURL);
//             this.fetchConfigurations(requestOptions)(dispatch, getState)
//               .then(() => (ensureMFA !== false) ? this.enforceMFA(undefined, __returnURL)(dispatch, getState) : undefined)
//               .then(resolve)
//               .catch(reject);
//           }, 10);
//         };
//         throttle.destroyInactiveThrottle = resolve;
//         return throttle;
//       };
//       return new Promise((resolve, reject) => {
//         if (!initializationTimeout) {
//           initializationThrottle = assignThrottle(resolve, reject);
//           initializationThrottle();
//         } else {
//           clearTimeout(initializationTimeout);
//           initializationThrottle.destroyInactiveThrottle();
//           initializationThrottle = assignThrottle(resolve, reject);
//           initializationThrottle();
//         }
//       });
//     }
//   };
// },
// /**
// * @param {string} url url for fetch request
// * @param {object} options what-wg fetch options
// * @param {function} responseFormatter custom reponse formatter, must be a function that returns a promise that resolves to json/javascript object
// */
// 
// getUserProfile(jwt_token, responseFormatter) {
//   return (dispatch, getState) => {
//     let fetchResponse;
//     let url = getState().settings.userprofile.url;
//     dispatch(this.loginRequest(url));
//     fetch(url, {
//       method: getState().settings.userprofile.method || 'POST',
//       headers: Object.assign({
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       }, getState().settings.userprofile.options.headers, {
//         'x-access-token': jwt_token,
//       }),
//     })
//       .then(checkStatus)
//       .then((response) => {
//         fetchResponse = response;
//         if (responseFormatter) {
//           let formatterPromise = responseFormatter(response);
//           if (formatterPromise instanceof Promise) {
//             return formatterPromise;
//           } else {
//             throw new Error('responseFormatter must return a Promise');
//           }
//         } else {
//           return response.json();
//         }
//       })
//       .then((responseData) => {
//         dispatch(this.saveUserProfile(url, fetchResponse, responseData));
//       })
//       .catch((error) => {
//         dispatch(notification.errorNotification(error));
//         dispatch(this.failedUserRequest(url, error));
//       });
//   };
// },
// enforceMFA(noRedirect, __returnURL) {
//   // console.debug('enforceMFA', { noRedirect, __returnURL, __global__returnURL, });
//   return (dispatch, getState) => {
//     let state = getState();
//     let extensionattributes = (state.user.userdata) ? state.user.userdata.extensionattributes : false;
//     let queryparams = qs.parse((window.location.search.charAt(0) === '?') ? window.location.search.substr(1, window.location.search.length) : window.location.search);
//     let formReturnURL = (!__global__returnURL && state && state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname && state.dynamic && state.dynamic.formdata && (state.dynamic.formdata.__loginReturnURL || state.dynamic.formdata.__loginLastURL))
//       ? state.dynamic.formdata.__loginReturnURL || state.routing.locationBeforeTransitions.pathname
//       : false;  
//     let returnUrl = (!__global__returnURL && queryparams.return_url)
//       ? queryparams.return_url
//       : __returnURL || __global__returnURL || formReturnURL || false;
//     if (state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname && state.routing.locationBeforeTransitions.pathname === returnUrl) {
//       returnUrl = false;
//     }
//     // console.debug({ formReturnURL, returnUrl, });
//     // console.log('state.settings.auth', state.settings.auth);
//     // console.log('state.user.isMFAAuthenticated', state.user.isMFAAuthenticated);
//     // console.log({ extensionattributes });
//     // console.log('state.manifest.containers[`${state.settings.adminPath}/mfa`]',state.manifest.containers[`${state.settings.adminPath}/mfa`])
//     // console.log('state.manifest.containers[/mfa]', state.manifest.containers[ '/mfa' ]);
//     // console.log('state.manifest.containers[${state.settings.adminPath}/mfa]', state.manifest.containers[ `${state.settings.adminPath}/mfa` ]);
//     if (state.settings.auth.enforce_mfa || (extensionattributes && extensionattributes.passport_mfa)) { //passport_mfa
     
//       if (state.user.isMFAAuthenticated) {
//         if (!noRedirect) {
//           if (state.user.isLoggedIn && returnUrl) dispatch(push(returnUrl));
//           else dispatch(push(state.settings.auth.logged_in_homepage));
//         }
//         return true;
//       }  else {
//         if (!state.manifest.containers || (state.manifest.containers && !state.manifest.containers['/mfa']  && !state.manifest.containers[`${state.settings.adminPath}/mfa`])) {
//           dispatch(notification.errorNotification(new Error('Multi-Factor Authentication not Properly Configured')));
//           let t = setTimeout(() => { 
//             this.logoutUser()(dispatch, getState);
//             clearTimeout(t);
//           }, 2000);
//         } else {
//           // console.log('utilities.getMFAPath(state)')
//           let mfapath = utilities.getMFAPath(state);
//           if (!returnUrl && window.location.href && window.location.href.indexOf(mfapath) === -1) {
//             // console.debug({ returnUrl, mfapath, }, ' window.location.href', window.location.href);
//             returnUrl = window.location.href;
//           }
//           __global__returnURL = returnUrl;
//           // console.debug({ mfapath,returnUrl }, 'window.location.href', window.location.href);
          
//           dispatch(push(`${mfapath}${(returnUrl) ? '?return_url=' + returnUrl : ''}`));
//         }
//         return false;         
//       }
//     } else {
//       if (!noRedirect) {
//         if (state.user.isLoggedIn && returnUrl) dispatch(push(returnUrl));
//         else dispatch(push(state.settings.auth.logged_in_homepage));
//       }
//       if (state.user.isLoggedIn && returnUrl) dispatch(push(returnUrl));
//       if (state.notification.modals && state.notification.modals.length && state.notification.modals[0]&& state.notification.modals[0].pathname && (state.notification.modals[0].pathname==='/signin' || state.notification.modals[0].pathname==='/login')) {
//         dispatch(notification.hideModal('last'));
//       }
//       __global__returnURL = false;
//       return true;
//     } 
//   };
// },
// authenticatedMFA (isAuthenticated = true) {
//   return {
//     type: constants.user.MFA_AUTHENTICATED,
//     payload: {
//       updatedAt: new Date(),
//       timestamp: Date.now(),
//       isMFAAuthenticated: isAuthenticated,
//     },
//   };
// },

// function 
// /**
//  * @param {string} location name of extension to load
//  * @param {object} options what-wg fetch options
//  */
// recievedLoginUser(url, response, json) {
//   return (dispatch, getState) => {
//     const state = getState();
//     const socket = state.dynamic.socket;
//     const user = getSocketUser({ url, response, json, });
//     socket.emit('authentication', {
//       user,
//       reconnection: true,
//     });
//     dispatch({
//       type: constants.user.LOGIN_DATA_SUCCESS,
//       payload: {
//         url,
//         response,
//         json,
//         updatedAt: new Date(),
//         timestamp: Date.now(),
//       },
//     });
//   };
// },
// saveUserProfile(url, response, json) {
//   return (dispatch, getState) => {
//     const state = getState();
//     const socket = state.dynamic.socket;
//     const user = getSocketUser({ url, response, json, });
//     socket.emit('authentication', {
//       user,
//       reconnection: true,
//     });
//     dispatch({
//       type: constants.user.SAVE_DATA_SUCCESS,
//       payload: {
//         url,
//         response,
//         json,
//         updatedAt: new Date(),
//         timestamp: Date.now(),
//       },
//     });
//   };
// },
export const u = {};