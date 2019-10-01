import ViewXApp from "./lib/core/index";
import * as serviceWorker from "./serviceWorker";

declare global {
  interface Window {
    __ViewXAppConfig: any;
  }
}

// ReactDOM.render(<ViewXApp />, document.getElementById('root'));

ViewXApp(window.__ViewXAppConfig);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
