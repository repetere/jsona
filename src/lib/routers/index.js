// import { browserHistory, hashHistory, createMemoryHistory, } from 'react-router';
// import * as ReactRouter from 'react-router';
// import { syncHistoryWithStore, } from 'react-router-redux';
import browserHistory from 'history/createBrowserHistory';
import memoryHistory from 'history/createMemoryHistory';
import hashHistory from 'history/createHashHistory';

export function getHistoryType(type) {
  const historyType = {
    browserHistory,
    memoryHistory,
    hashHistory,
  }
  return historyType[ type ];
}

export function getHistory(options = {}) {
  const { settings = { application: { history: { reactRouter: 'browserHistory', }, }, }, } = options;
  const reactRouterType = settings.application.history.reactRouter;
  const createHistory = getHistoryType(reactRouterType);
  const history = createHistory();

  return history;
}