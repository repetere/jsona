import React from "react";
import { Route } from "react-router";
// import { Route, Switch} from 'react-router';

import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter
} from "react-router-dom";
// import { connect, Provider, } from 'react-redux';

import getMainComponent from "./Main";
import { getGlobalStateHooks } from "../stores";
import { JSONAOptions, VXAConfig } from "../../../types";
import { ReactElementLike } from "prop-types";

export async function getJSONA(
  options: JSONAOptions
): Promise<{ app: ReactElementLike; options: any; }> {
  // console.log("getJSONA options", options);
  const { settings } = options.config as VXAConfig;
  const {
    // GlobalStateProvider,
    dispatch,
    useGlobalState
  } = await getGlobalStateHooks(options);
  options.dispatch = dispatch;
  options.useGlobalState = useGlobalState;
  // @ts-ignore
  const MainApp = getMainComponent(options);
  let Router: any;
  switch (settings.router) {
    case "static":
      Router = StaticRouter;
      break;
    case "hash":
      Router = HashRouter;
      break;
    case "memory":
      Router = MemoryRouter;
      break;
    default:
      Router = BrowserRouter;
      break;
  }
  //  = settings.router === "hash" ? HashRouter : BrowserRouter;
  const app = (
    // <GlobalStateProvider>
      <Router>
        <Route path="*" component={MainApp}></Route>
      </Router>
    // </GlobalStateProvider>
  );
  return { app, options, };
}
