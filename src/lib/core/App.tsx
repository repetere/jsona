import React from "react";
import { Route } from "react-router";
// import { Route, Switch} from 'react-router';

import { BrowserRouter, HashRouter } from "react-router-dom";
// import { connect, Provider, } from 'react-redux';

import getMainComponent from "./Main";
import { getGlobalStateHooks } from "../stores";
import { VXAOptions, VXALayer, VXAConfig } from "../../../types";

export async function getViewXapp(options: VXAOptions) {
  console.log("getViewXapp options", options);
  const { settings } = options.config as VXAConfig;
  const {
    GlobalStateProvider,
    dispatch,
    useGlobalState
  } = await getGlobalStateHooks(options);
  options.dispatch = dispatch;
  options.useGlobalState = useGlobalState;
  // @ts-ignore
  const MainApp = getMainComponent(options);
  const Router: any = settings.router === "hash" ? HashRouter : BrowserRouter;
  return (
    <GlobalStateProvider>
      <Router>
        <Route path="*" component={MainApp}></Route>
      </Router>
    </GlobalStateProvider>
  );
}
