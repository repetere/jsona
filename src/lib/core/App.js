import React, { Component, } from 'react';
// import { Route, Switch} from 'react-router';
import { Router, Route, } from 'react-router-dom';
import { connect, Provider, } from 'react-redux';

import getMainComponent from './Main';
import { getReduxStores, } from '../stores';
import { getHistory, } from '../routers';
import { getReduxActions, } from '../actions';
import { utils as rajaxUtils, utils, } from '../util';

export function getRajaxApp(options = {}) {
  const { settings = {}, /*reduxStores,*/ getReduxStoreActions, constants, } = options;
  const history = getHistory({ settings, });
  const store = getReduxStores({ settings, history, constants, });
  const actions = getReduxActions({ store, settings, getReduxStoreActions, constants, });
  const MainApp = getMainComponent(options, true);
  const mapStateToProps = (state) => ({ store: state, });
  const mapDispatchToProps = (/*dispatch*/) => ({ actions, });
  rajaxUtils.window.setWindowProperties({ settings, store, });
  const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp);
  class RajaxApp extends Component {
    componentDidMount() {
      utils.html.setDocumentBodyClass(options);
    }
    render() {
      return <Provider store={store}>
        <Router history={history}>
          <Route path="*" component={MainAppContainer}/>  
        </Router>
      </Provider>;
    }
  }  
  return <RajaxApp/>;
}