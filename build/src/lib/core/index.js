// import React from 'react';
// import ReactDOM from "react-dom";
import { getJSONA } from "./App";
import { configureViewx } from "../util/config";
import { createLayer } from "../util/html";
//@ts-ignore
import { options as defaultOptions } from "../defaults/options";
import hoistNonReactStatics from "hoist-non-react-statics";
window.hoistNonReactStatics = hoistNonReactStatics;
export default async function JSONA(options = {}) {
    const appOptions = { ...defaultOptions, ...options };
    appOptions.config = await configureViewx(appOptions);
    // console.log({ options, appOptions, });
    const { querySelector, } = appOptions;
    // console.log({ querySelector });
    const { app, options: JSONAOptions, } = await getJSONA(appOptions);
    appOptions.config.layers
        .sort((a, b) => a.order - b.order)
        .forEach((layer) => createLayer({ layer, app, querySelector, }));
    return { app, options: JSONAOptions, };
    // console.log({app})
    // ReactDOM.render(app, document.querySelector(querySelector));
}
