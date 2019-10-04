// import React from 'react';
// import ReactDOM from "react-dom";
import { getViewXapp } from "./App";
import { configureViewx } from "../util/config";
import { createLayer } from "../util/html";
import { options as defaultOptions } from "../defaults/options";

export default async function ViewXApp(
  options: any = { config: {} }
): Promise<void> {
  const appOptions = { ...defaultOptions, ...options };
  appOptions.config = await configureViewx(appOptions);
  // console.log({ options, appOptions });
  // const { querySelector, } = options.config;

  const app = await getViewXapp(appOptions);
  appOptions.config.layers
    .sort((a: any, b: any) => a.order - b.order)
    .forEach((layer: any) => createLayer({ layer, app }));
  // ReactDOM.render(app, document.querySelector(querySelector));
}
