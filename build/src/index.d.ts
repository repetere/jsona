import { JSONAOptions } from "../types";
declare global {
    interface Window {
        __JSONAConfig: JSONAOptions;
    }
}
