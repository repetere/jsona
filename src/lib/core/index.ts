// import React from 'react';
// import ReactDOM from "react-dom";
import { getViewXapp } from "./App";
import { configureViewx } from "../util/config";
import { createLayer } from "../util/html";
import { options as defaultOptions } from "../defaults/options";
import { VXAOptions, VXALayer } from "../../../types";

export default async function ViewXApp(
  options: VXAOptions = {}
): Promise<void> {
  const appOptions: VXAOptions = { ...defaultOptions, ...options };
  appOptions.config = await configureViewx(appOptions);
  // console.log({ options, appOptions, });
  // const { querySelector, } = options.config;

  const app = await getViewXapp(appOptions);
  appOptions.config.layers
    .sort((a: VXALayer, b: VXALayer) => a.order - b.order)
    .forEach((layer: VXALayer) => createLayer({ layer, app }));
  // ReactDOM.render(app, document.querySelector(querySelector));
}
