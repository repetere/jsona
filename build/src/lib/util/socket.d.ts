import { VXAFunctionContext } from "../../../types";
declare global {
    interface Window {
        io: any;
    }
}
export declare function initSockets(this: VXAFunctionContext, settings?: any): void;
