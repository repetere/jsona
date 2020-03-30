// import React from 'react';
// import ReactDOM from "react-dom";
import { getViewXapp } from "./App";
import { configureViewx } from "../util/config";
import { createLayer } from "../util/html";
import { options as defaultOptions } from "../defaults/options";
import { VXAOptions, VXALayer, VXAConfig } from "../../../types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { ReactElement } from "react";
window.hoistNonReactStatics = hoistNonReactStatics;

export default async function ViewXApp(
  options: VXAOptions = {}
): Promise<{ app: ReactElement; options: VXAConfig;}> {
  const appOptions: VXAOptions = { ...defaultOptions, ...options };
  appOptions.config = await configureViewx(appOptions);
  // console.log({ options, appOptions, });
  const { querySelector, } = appOptions;
  // console.log({ querySelector });

  const {app, options:ViewXAppOptions, } = await getViewXapp(appOptions);
  appOptions.config.layers
    .sort((a: VXALayer, b: VXALayer) => a.order - b.order)
    .forEach((layer: VXALayer) => createLayer({ layer, app, querySelector, }));
  return { app, options: ViewXAppOptions, };
  // console.log({app})
  // ReactDOM.render(app, document.querySelector(querySelector));
}