import {
  createStore
} from 'react-hooks-global-state';

export function getGlobalStateHooks(options = {}) {
  const reducer = (state, action) => {
    switch (action.type) {
      // case 'increment': return { ...state, count: state.count + 1 };
      // case 'decrement': return { ...state, count: state.count - 1 };
      case 'setView':
        console.log('dispatching setView')
        return Object.assign({},
          state, {
            views: Object.assign({}, state.views, action.view)
          });
      default:
        return state;
    }
  };
  const initialState = {
    count: 0,
    views: {
      layout: null,
    },
    viewdata: {
      layout: null,
    },
    templates: {
      layout: {
        '/home': {
          viewx: {
            component: 'div',
            props: {
              key: 'b'
            },
            children: [{
                component: 'p',
                children: 'home page'
              },
              {
                component: 'img',
                props: {
                  src: '/favicon.png'
                }
              },
              {
                component: 'ul',
                children: [{
                    component: 'li',
                    children: [

                      {
                        component: 'Link',
                        props: {
                          to: '/about'
                        },
                        children: 'about page '
                      },
                    ]
                  },
                  {
                    component: 'li',
                    children: [

                      {
                        component: 'Link',
                        props: {
                          to: '/page/2'
                        },
                        children: ' page 2'
                      }
                    ]
                  }
                ]
              },
            ]
          },
          fetch_resources: {

          }
        },
        '/about': {
          viewx: {
            component: 'div',
            children: [{
                component: 'p',
                children: 'about page'
              },
              {
                component: 'Link',
                props: {
                  to: '/home'
                },
                children: 'home page'
              }
            ]
          }
        },
        '/page/:id': {
          viewx: {
            component: 'div',
            children: [{
                component: 'p',
                children: 'page 2'
              },
              {
                component: 'Link',
                props: {
                  to: '/home'
                },
                children: 'home page'
              }
            ]
          }
        }
      }
    }
  };
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