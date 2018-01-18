import React from 'react';
import './index.css';
import App from './App';
import { rajaxRender } from './lib/core/index';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
rajaxRender({ application: <App /> });