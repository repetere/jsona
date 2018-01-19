import { combineReducers, } from 'redux';
// import dynamicReducer from './dynamic';
// import manifestReducer from './manifest';
// import notificationReducer from './notification';
// import userReducer from './user';
// import outputReducer from './output';
// import uiReducer from './ui';
// import settingsReducer from './settings';
// import createHistory from 'history/createBrowserHistory';
import { routerReducer, } from 'react-router-redux';

export function getCombinedReducers(options = {}) {
  const reducers = combineReducers(Object.assign({},
    {
      // dynamic: dynamicReducer,
      router: routerReducer,
      // settings: settingsReducer,
      // ui: uiReducer,
      // user: userReducer,
      // output: outputReducer,
      // manifest: manifestReducer,
      // notification: notificationReducer,
    },
    options.reducers));
  
  return reducers;
}