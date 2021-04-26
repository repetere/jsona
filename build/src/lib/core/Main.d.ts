import { FunctionComponent } from "react";
import { VXAFunctionContext, VXAFunctions, JSONAOptions } from "../../../types";
/**
 * bound default vxa functions to the vxafunctioncontext object
 */
export declare function bindFunctionContext({ Functions, functionContext }: {
    Functions: VXAFunctions;
    functionContext: VXAFunctionContext;
}): void;
export default function getMainComponent(options: JSONAOptions): FunctionComponent;
