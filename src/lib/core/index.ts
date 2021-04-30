// import React from 'react';
// import ReactDOM from "react-dom";
import { getJSONA } from "./App";
import { configureViewx } from "../util/config";
import { createLayer } from "../util/html";
//@ts-ignore
import { options as defaultOptions } from "../defaults/options";
import { JSONAOptions, VXALayer, VXAConfig } from "../../types";
import hoistNonReactStatics from "hoist-non-react-statics";
import { ReactElement } from "react";
window.hoistNonReactStatics = hoistNonReactStatics;

export default async function JSONA(
  options: JSONAOptions = {}
): Promise<{ app: ReactElement; options: VXAConfig;}> {
  const appOptions = { ...defaultOptions, ...options } as JSONAOptions;
  appOptions.config = await configureViewx(appOptions);
  // console.log({ options, appOptions, });
  const { querySelector, } = appOptions;
  // console.log({ querySelector });

  const {app, options:JSONAOptions, } = await getJSONA(appOptions);
  appOptions.config.layers
    .sort((a: VXALayer, b: VXALayer) => a.order - b.order)
    .forEach((layer: VXALayer) => createLayer({ layer, app, querySelector, }));
  return { app, options: JSONAOptions, };
  // console.log({app})
  // ReactDOM.render(app, document.querySelector(querySelector));
}