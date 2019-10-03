// import React from 'react';
// import ReactDOM from "react-dom";
import { getViewXapp } from "./App";
import { configureViewx } from '../util/config';
import { createLayer, } from '../util/html';

export default async function ViewXApp(options: any = { config: {} }): Promise<void> {
  options.config = await configureViewx(options);
  console.log({ options });
  // const { querySelector, } = options.config;

  const app = await getViewXapp(options);
  options.config.layers
    .sort((a: any, b: any) => a.order - b.order)
    .forEach((layer:any) =>createLayer({layer,app}));
  // ReactDOM.render(app, document.querySelector(querySelector));
}
