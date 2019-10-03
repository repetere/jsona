import {
  createStore,
  // createGlobalState,
} from 'react-hooks-global-state';

// export function getAppStateProperties(options = {}) {
  
// }

export function getGlobalStateHooks(options = {}) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'viewxUILoadingStart': return {
        ...state,
        ...{
          ui: {
            ...state.ui,
            isLoading: true
          }
        }
      };
      case 'viewxUILoadingComplete': return {
        ...state,
        ...{
          ui: {
            ...state.ui,
            isLoading: false
          }
        }
      };
      // case 'decrement': return { ...state, count: state.count - 1 };
      case 'setView':
        console.log('dispatching setView', { action });
        return Object.assign({},
          state, {
            views: Object.assign({}, state.views, action.view),
            viewdata: Object.assign({}, state.viewdata, action.viewdata)
          });
      default:
        return state;
    }
  };
  const initialState = Object.assign({},options.application.state, {
    viewcount: 0,
    views: {
      layout: null,
    },
    viewdata: {
      layout: null,
    },
    templates: Object.assign({}, options.templates),
    ui: {
      isLoading: true,
      hasLoadedInitialTemplates:false,
    },
  });
  const {
    GlobalStateProvider,
    dispatch,
    useGlobalState
  } = createStore(reducer, initialState);

  return {
    GlobalStateProvider,
    dispatch,
    useGlobalState
  };
}

// import { createStore, applyMiddleware, } from 'redux';
// import { routerMiddleware, } from 'react-router-redux';
// // import * as ReactRouter from 'react-router';
// // import { browserHistory, hashHistory, } from 'react-router';
// import thunk from 'redux-thunk';
// import { createLogger, } from 'redux-logger';
// import { getCombinedReducers, } from '../reducers';

// const windowState = (typeof window !== 'undefined' && window.__rajax) ? window.__rajax : {};

// export function getReduxStores(options = {}) {
//   const { settings = { application: { history: { reactRouter: 'browserHistory', }, state: {}, }, }, history, } = options;
//   const disableLogger = (store) => (next) => (action) => { // console .log('dispatching: ', action,{store});
//     return next(action);
//   };
//   const logger = (settings.application.state.useWindowState && windowState.disableLogger) ? disableLogger : createLogger();
//   const historyMiddleware = routerMiddleware(history);
//   const combinedReducers = getCombinedReducers(options); 
//   const AppReduxStore = createStore(
//     combinedReducers,
//     applyMiddleware(
//       thunk,
//       historyMiddleware,
//       // promise,
//       logger
//     )
//   );

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept(combinedReducers, () => {
//       const nextRootReducer = combinedReducers;
//       AppReduxStore.replaceReducer(nextRootReducer);
//     });
//   }

//   return AppReduxStore;
// }