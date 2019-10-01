import React from "react";
import { Route } from "react-router";
// import { Route, Switch} from 'react-router';

import { BrowserRouter, HashRouter } from "react-router-dom";
// import { connect, Provider, } from 'react-redux';

import getMainComponent from "./Main";
import { getGlobalStateHooks } from "../stores";
// import { getReduxStores, } from '../stores';
// import { getHistory, } from '../routers';
// import { getReduxActions, } from '../actions';
// import { utils as rajaxUtils, utils, } from '../util';

interface ViewXRouter {}

export function getViewXapp(options = {}) {
  // @ts-ignore
  const { settings = { router: {} } } = options;
  // const history = getHistory({ settings, });
  // const store = getReduxStores({ settings, history, constants, });
  // const actions = getReduxActions({ store, settings, getReduxStoreActions, constants, });
  const { GlobalStateProvider, dispatch, useGlobalState } = getGlobalStateHooks(
    options
  );
  // @ts-ignore
  options.dispatch = dispatch;
  // @ts-ignore
  options.useGlobalState = useGlobalState;
  const MainApp = getMainComponent(options);
  // const mapStateToProps = (state) => ({ store: state, });
  // const mapDispatchToProps = (/*dispatch*/) => ({ actions, });
  // rajaxUtils.window.setWindowProperties({ settings, store, });
  // const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp);
  // class RajaxApp extends Component {
  //   componentDidMount() {
  //     utils.html.setDocumentBodyClass(options);
  //   }
  //   render() {
  //     return <Provider store={store}>
  //       <Router history={history}>
  //         <Route path="*" component={MainAppContainer}/>
  //       </Router>
  //     </Provider>;
  //   }
  // }
  // return <RajaxApp/>;
  const Router: any = settings.router.hashRouter ? HashRouter : BrowserRouter;
  return (
    <GlobalStateProvider>
      <Router>
        <Route path="*" component={MainApp}></Route>
      </Router>
    </GlobalStateProvider>
  );
}
