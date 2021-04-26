import { VXASettings, VXAFunctionContext, VXATemplates, appLoadTemplates, VXALayer, appGetTemplateRouteLayer, VXAFunction, VXAFunctions, VXADispatchAction, appLoadRoute, layerPathRoutes } from "../../../types";
/**
 * initial one time setup call
 * @property this
 * @param options.settings - vxa settings
 */
export declare function setup(this: VXAFunctionContext, { settings }: {
    settings: VXASettings;
}): Promise<void>;
/**
 * load vxt templates
 * @param options
 */
export declare function loadTemplates({ config, viewxTemplates, templates, setTemplates, setUI, ui, layers, Functions, functionContext }: appLoadTemplates): Promise<{
    viewxTemplates: VXATemplates;
    updatedUI: any;
}>;
export declare function getTemplatePaths(viewxTemplates: VXATemplates): string[];
export declare function loadDynamicTemplate({ config, viewxTemplates, templates, setTemplates, setUI, ui, layers, Functions, functionContext, pathname, }: appLoadTemplates & {
    pathname: string;
}): Promise<{
    viewxTemplates: VXATemplates;
    updatedUI: any;
}>;
export declare function hasMatchingDynamicTemplateRoutePathFallback({ viewxTemplates, layers, pathname, }: layerPathRoutes): boolean;
/**
 * get template route layer map function
 * @param options.viewxTemplates - object of vxtTemplates
 * @param options.pathname - vxtRoutePath
 */
export declare function getTemplateRouteLayer({ viewxTemplates, pathname, }: appGetTemplateRouteLayer): (layer: VXALayer) => any;
export declare function loadRoute({ ui, viewxTemplates, pathname, dispatcher, layers, Functions, functionContext, resourceprops }: appLoadRoute): Promise<VXADispatchAction | boolean | undefined | any>;
export declare function shortCircutPromiseArray(promiseArrayResult: any, name: any): boolean;
export declare function invokeWebhooks({ Functions, functionContext, templateViewData, property, templateRouteLayers }: {
    Functions: any;
    functionContext: any;
    templateViewData: any;
    property?: string | undefined;
    templateRouteLayers: any;
}): Promise<any>;
export declare function enforcePromise(val: any): Promise<any>;
export declare function promiseSeries(providers: any): any;
/**
 * return bound function from function name string, e.g. func:this.props.debug
 * @param options.Functions - VXA Functions
 * @param options.functionContext - VXA Function Context
 * @param options.functionName - function name string
 */
export declare function getFunctionFromNameString({ Functions, functionContext, functionName }: {
    Functions: VXAFunctions;
    functionContext: VXAFunctionContext;
    functionName: string;
}): VXAFunction;
export declare const FUNCTION_NAME_REGEXP: RegExp;
/**
 * get function name from function name string i.e. func:viewx.Functions.logout => logout
 * @param function_name - function name string
 */
export declare function getDynamicFunctionName(function_name: string): string;
