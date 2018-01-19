// import React from 'react';
import ReactDOM from 'react-dom';
// import * as Semantic from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from '../vendor/create-react-app/registerServiceWorker';
import { configuration, } from '../defaults';
import { getRajaxApp, } from './App';

export function rajaxRender(config = {}) {
  const {
    querySelector='#root',
    // reduxStores,
    // getReduxStoreActions,
  } = config;
  const settings = Object.assign({}, configuration.settings, config.settings);
  const options = Object.assign({},config,{settings,title: 'Test func for Class'})
  const app = getRajaxApp(options);
  // console.log({ app });
  ReactDOM.render(
    app,
    document.querySelector(querySelector)
  );
  registerServiceWorker();
}