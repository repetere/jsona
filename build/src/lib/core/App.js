import { jsx as _jsx } from "react/jsx-runtime";
import { Route } from "react-router";
// import { Route, Switch} from 'react-router';
import { BrowserRouter, HashRouter, MemoryRouter, StaticRouter } from "react-router-dom";
// import { connect, Provider, } from 'react-redux';
import getMainComponent from "./Main";
import { getGlobalStateHooks } from "../stores";
export async function getJSONA(options) {
    // console.log("getJSONA options", options);
    const { settings } = options.config;
    const { 
    // GlobalStateProvider,
    dispatch, useGlobalState } = await getGlobalStateHooks(options);
    options.dispatch = dispatch;
    options.useGlobalState = useGlobalState;
    // @ts-ignore
    const MainApp = getMainComponent(options);
    let Router;
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
    _jsx(Router, { children: _jsx(Route, { path: "*", component: MainApp }, void 0) }, void 0)
    // </GlobalStateProvider>
    );
    return { app, options, };
}
