// import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css/animate.css';
import 'semantic-ui-css/semantic.min.css';
import '../styles/default.css';

import registerServiceWorker from '../vendor/create-react-app/registerServiceWorker';
import { configuration, } from '../defaults';
import { getRajaxApp, } from './App';

export function rajaxRender(config = {}) {
  const {
    querySelector = '#root',
    // rjx,
    // reduxStores,
    // getReduxStoreActions,
  } = config;
  const settings = Object.assign({}, configuration.settings, config.settings);
  const components = Object.assign({}, configuration.components, config.components);
  const constants = Object.assign({}, configuration.constants, config.constants);
  const options = Object.assign({},
    config,
    {
      settings,
      components,
      constants,
      title: 'Test func for Class',
    });
  const app = getRajaxApp(options);
  // console.log({ app });
  ReactDOM.render(
    app,
    document.querySelector(querySelector)
  );
  registerServiceWorker();
}