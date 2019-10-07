import React from "react";
import { Route } from "react-router";
// import { Route, Switch} from 'react-router';

import { BrowserRouter, HashRouter } from "react-router-dom";
// import { connect, Provider, } from 'react-redux';

import getMainComponent from "./Main";
import { getGlobalStateHooks, } from "../stores";

// @ts-ignore
export async function getViewXapp(options = { config: {} }) {
  console.log('getViewXapp options', options);
  // @ts-ignore
  const { settings } = options.config;
  const { GlobalStateProvider, dispatch, useGlobalState } = await getGlobalStateHooks(
    options
  );
  // @ts-ignore
  options.dispatch = dispatch;
  // @ts-ignore
  options.useGlobalState = useGlobalState;
  // @ts-ignore
  const MainApp = getMainComponent( options );
  const Router: any = settings.router === 'hash' ? HashRouter : BrowserRouter;
  return (
    <GlobalStateProvider>
      <Router>
        <Route path="*" component={MainApp}></Route>
      </Router>
    </GlobalStateProvider>
  );
}
