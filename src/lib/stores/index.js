import { createStore, applyMiddleware, } from 'redux';
import { routerMiddleware, } from 'react-router-redux';
// import * as ReactRouter from 'react-router';
// import { browserHistory, hashHistory, } from 'react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { getCombinedReducers } from '../reducers';

const windowState = (typeof window !== 'undefined' && window.__rajax) ? window.__rajax : {};

export function getReduxStores(options = {}) {
  const { settings = { application: { history: { reactRouter: 'browserHistory', }, state: {}, }, }, history, } = options;
  const disableLogger = (store) => (next) => (action) => { // console .log('dispatching: ', action,{store});
    return next(action);
  };
  const logger = (settings.application.state.useWindowState && windowState.disableLogger) ? disableLogger : createLogger();
  const historyMiddleware = routerMiddleware(history);
  const combinedReducers = getCombinedReducers(options); 
  const AppReduxStore = createStore(
    combinedReducers,
    applyMiddleware(
      thunk,
      historyMiddleware,
      // promise,
      logger
    )
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(combinedReducers, () => {
      const nextRootReducer = combinedReducers;
      AppReduxStore.replaceReducer(nextRootReducer);
    });
  }
  
  return AppReduxStore;
}