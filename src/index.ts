import JSONA from "./lib/core/index";
//@ts-ignore
import * as serviceWorker from "./serviceWorker";
//@ts-ignore
import { options } from "./lib/defaults/options";
import { JSONAOptions } from "../types";

declare global {
  interface Window {
    __JSONAConfig: JSONAOptions;
  }
}
const defaultOptions = { ...options } as  JSONAOptions;

JSONA({ ...defaultOptions, ...window.__JSONAConfig });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
