// import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../../registerServiceWorker';
import { configuration, } from '../defaults';

console.log({configuration})

export function rajaxRender(config = {}) {
  const { application, idSelector='root' } = config;
  ReactDOM.render(application, document.getElementById(idSelector));
  registerServiceWorker();
}