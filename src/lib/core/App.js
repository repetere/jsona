import React, { Component } from 'react';
// import { Route, Switch} from 'react-router';
import { Router, Route } from 'react-router-dom';
import { connect, Provider, } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import getMainComponent from './Main';
import { getReduxStores } from '../stores';
import { getHistory } from '../routers';
import { getReduxActions } from '../actions';
import { utils as rajaxUtils } from '../util';

export function getRajaxApp(options = {}) {
  const { settings = {}, reduxStores, getReduxStoreActions, } = options;
  const history = getHistory({ settings, });
  const store = getReduxStores({ settings, history });
  const MainApp = getMainComponent(options, true);
  const mapStateToProps = (state) => state;
  const mapDispatchToProps = (/*dispatch*/) => {
    return getReduxActions({store,settings, getReduxStoreActions});
  };
  rajaxUtils.window.setWindowProperties({settings,store});
  const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp);
  class Hello extends Component{
    render() {
      return <p>hello</p>
    }
  }
  const routes = [
    {
      component: MainAppContainer,
      routes: [
        {
          path: '*',
          component:Hello,
        }
      ]
    }
  ]
  
  class RajaxApp extends Component {

    render() {
      return <Provider store={store}>
        <Router history={history}>
          <Route path="*" component={MainAppContainer}/>  
        </Router>
      </Provider>
    }
  }  
  return <RajaxApp/>;
}