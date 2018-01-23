import { combineReducers, } from 'redux';
// import dynamicReducer from './dynamic';
// import manifestReducer from './manifest';
// import notificationReducer from './notification';
import { user, } from './user';
// import outputReducer from './output';
// import uiReducer from './ui';
// import settingsReducer from './settings';
// import createHistory from 'history/createBrowserHistory';
import { routerReducer, } from 'react-router-redux';

export function getCombinedReducers(options = {}) {
  const customReducerFunctions = options.reducers || [];
  const customReducers = Object.keys(customReducerFunctions).reduce((result, val) => { 
    result[ val ] = customReducerFunctions[ val ](options);
    return result;
  }, {});
  const defaultReducerFunctions = { user, };
  const defaultReducers = Object.keys(defaultReducerFunctions).reduce((result, val) => { 
    result[ val ] = defaultReducerFunctions[ val ](options);
    return result;
  }, {});
  const reducers = combineReducers(Object.assign({
    router: routerReducer,
  },
  defaultReducers,
  customReducers));
  
  return reducers;
}