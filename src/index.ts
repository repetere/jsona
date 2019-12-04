import ViewXApp from "./lib/core/index";
//@ts-ignore
import hoistNonReactStatics from "hoist-non-react-statics";
// import hoistNonReactStatics from "hoist-non-react-statics/src/index";
import * as serviceWorker from "./serviceWorker";
import { options } from "./lib/defaults/options";
import { VXAOptions } from "../types";
window.hoistNonReactStatics = hoistNonReactStatics;

declare global {
  interface Window {
    __ViewXAppConfig: VXAOptions;
  }
}
const defaultOptions: VXAOptions = { ...options };

ViewXApp({ ...defaultOptions, ...window.__ViewXAppConfig });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
