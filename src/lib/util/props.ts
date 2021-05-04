import { findMatchingRoutePath } from "test-matching-route";
import { fetchJSON, fetchResources } from "./data";
import { setPageAttributes, setHTMLElementClass } from "./html";
import {
  VXASettings,
  VXAFunctionContext,
  VXATemplates,
  appLoadTemplates,
  VXALayer,
  appGetTemplateRouteLayer,
  VXAFunction,
  VXAFunctions,
  VXADispatchAction,
  VXATemplateRouteLayer,
  appLoadRoute,
  layerPathRoutes,
} from "../../types";
import { jsonxResourceProps, } from 'jsonx/src/types/jsonx';

// import { insertScriptParams } from '../../internal_types/config';

import { initSockets } from "./socket";

/**
 * initial one time setup call
 * @property this
 * @param options.settings - vxa settings
 */
export async function setup(
  this: VXAFunctionContext,
  { settings }: { settings: VXASettings }
): Promise<void> {
  initSockets.call(this, settings);

  if (settings.useBodyLoadedClass)
    setHTMLElementClass({
      element: document.body,
      className: settings.bodyLoadedClass
    });
  if (settings.useHTMLLoadedClass)
    setHTMLElementClass({
      element: document.querySelector("html"),
      className: settings.htmlLoadedClass
    });
}

/**
 * load vxt templates
 * @param options
 */
export async function loadTemplates({
  config,
  viewxTemplates,
  templates,
  setTemplates,
  setUI,
  ui,
  layers,
  Functions,
  functionContext
}: appLoadTemplates): Promise<{ viewxTemplates: VXATemplates, updatedUI:any, }> {
  // console.log({  config  })
  // const fetchFunctionObject = Functions.fetchJSON.bind(functionContext) || fetchJSON.bind(functionContext);
  const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(
    functionContext
  );

  const loadedTemplates = config.settings.hasPreloadedTemplates
    ? {}
    : config.settings.templatePath 
      ? await fetchFunction(
        config.settings.templatePath,
        config.settings.templateFetchOptions
      )
      : {};

  viewxTemplates = layers.reduce((result: VXATemplates, layer) => {
    const { name } = layer;
    result[name] = {
      ...loadedTemplates[name],
      ...templates[name]
    };
    return result;
  }, {});
  const templatePaths = getTemplatePaths(viewxTemplates);
  const updatedUI = {
    ...ui,
    templatePaths,
    hasLoadedInitialProcess: true
  };

  setTemplates(viewxTemplates);
  setUI(updatedUI);
  return {
    viewxTemplates,
    updatedUI,
  };
}

export function getTemplatePaths(viewxTemplates: VXATemplates): string[] {
  const allPathNames = Object.keys(viewxTemplates).reduce((result: string[], layerName: string) => { 
    //@ts-ignore
    const pathnames = Object.keys(viewxTemplates[layerName] || {}) as string[];
    result = result.concat(pathnames);
    return result;
  }, []);
  const pathnames:Set<string> = new Set(allPathNames);
  return Array.from(pathnames); 
}

export async function loadDynamicTemplate({
  config,
  viewxTemplates,
  templates,
  setTemplates,
  setUI,
  ui,
  layers,
  Functions,
  functionContext,
  pathname,
}: appLoadTemplates & { pathname: string; }): Promise<{ viewxTemplates: VXATemplates, updatedUI:any,  }> {
  const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(
    functionContext
  );
  const templateURL = (config.settings.dynamicTemplatePathRequestMethod === 'path')
    ? config.settings.dynamicTemplatePath+pathname
    : config.settings.dynamicTemplatePath+`?pathname=${pathname}`;
  try {
    const loadedTemplates = config.settings.hasPreloadedTemplates
    ? {}
    : await fetchFunction(
        templateURL,
        config.settings.templateFetchOptions
      );
      viewxTemplates = layers.reduce((result, layer) => {
        const { name } = layer;
        result[name] = {
          ...loadedTemplates[name],
          ...templates[name]
        };
        return result;
      }, viewxTemplates);
      const templatePaths = getTemplatePaths(viewxTemplates);
      const updatedUI = {
        ...ui,
        templatePaths,
        hasLoadedInitialProcess: true
      };
    
      setTemplates(viewxTemplates);
      setUI(updatedUI);
    
      return {
        viewxTemplates,
        updatedUI,
      }; 
  } catch (e) {
    throw new Error(`Could not load: ${templateURL}`);
  }
}

export function hasMatchingDynamicTemplateRoutePathFallback({
  viewxTemplates,
  layers,
  pathname,
}: layerPathRoutes): boolean {
  const hasLayers = layers.filter((layer: VXALayer) => {
    const { name } = layer;
    const viewxTemplateLayer = viewxTemplates[name];
    const templateRoute =findMatchingRoutePath(
      viewxTemplateLayer,
      pathname,
      {
        return_matching_keys: true
      }
    );
    return templateRoute && templateRoute.route.includes('*')===false;
  });
  return hasLayers.length>0;
}

/**
 * get template route layer map function
 * @param options.viewxTemplates - object of vxtTemplates
 * @param options.pathname - vxtRoutePath
 */
export function getTemplateRouteLayer({
  viewxTemplates,
  pathname,
}: appGetTemplateRouteLayer): (layer: VXALayer) => any {
  let hasOverlayLayer: boolean = false;

  return (layer: VXALayer) => {
    let vxtObject;
    const { name, type } = layer;
    const viewxTemplateLayer = viewxTemplates[name];
    const templateRoute = viewxTemplateLayer? findMatchingRoutePath(
      viewxTemplateLayer,
      pathname,
      {
        return_matching_keys: true
      }
    ):undefined;
    if (type === "overlay" && templateRoute) hasOverlayLayer = true;
    if (
      !templateRoute &&
      viewxTemplateLayer&&viewxTemplateLayer.__error_404 &&
      !hasOverlayLayer
    ) {
      vxtObject = viewxTemplateLayer.__error_404;
    } else if (templateRoute) {
      vxtObject = viewxTemplateLayer[templateRoute.route];
    }
    if (vxtObject) {
      return {
        name,
        type,
        vxtObject,
        templateRoute,
        ui: {
          [`isRouteLayer_${name}_Matched`]: true
        },
        hasOverlayLayer
      };
    } else return undefined;
  };
}

export async function loadRoute({
  ui,
  viewxTemplates,
  pathname,
  dispatcher,
  layers,
  Functions,
  functionContext,
  resourceprops = {}
}: appLoadRoute): Promise<VXADispatchAction | boolean | undefined | any> {
  let applicationRootName = "root";
  try {
    const fetchResourcesFunction = Functions.fetchResources || fetchResources;
    const templateRouteLayers: VXATemplateRouteLayer[] = layers
      .map(
        getTemplateRouteLayer({
          viewxTemplates,
          pathname
        })
      )
      .filter((layer: VXALayer) => layer);

    // @ts-ignore
    const preFunctions = await invokeWebhooks({
      Functions,
      functionContext,
      property: "preRenderFunctions",
      templateRouteLayers
    });

    // @ts-ignore
    if (shortCircutPromiseArray(preFunctions, "preRenderFunctions"))
      return false;
    // @ts-ignore
    const templateViewPromises = templateRouteLayers.map(templateRouteLayer =>
      fetchResourcesFunction.call(functionContext, {
        resources: templateRouteLayer.vxtObject.resources,
        templateRoute: templateRouteLayer.templateRoute
      })
    );
    const templateViewData: jsonxResourceProps[] = await Promise.all(
      templateViewPromises
    );
    const action = templateViewData.reduce(
      (result: any, templateViewDatum: jsonxResourceProps, i: number) => {
        const {
          name,
          type,
          vxtObject,
          ui,
          hasOverlayLayer,
          templateRoute,
        } = templateRouteLayers[i];
        if (hasOverlayLayer) result.ui.hasOverlayLayer = true;
        if ( ["applicationRoot" ,"overlay","view"].includes(type)) {
          if (type === "applicationRoot") applicationRootName = name;
          result.ui.templateRoute = templateRoute;
        }
        setPageAttributes(vxtObject);
        // @ts-ignore
        result.view[name] = vxtObject;
        // @ts-ignore
        result.viewdata[name] = {
          ...templateViewDatum,
          ...resourceprops
        };
        // @ts-ignore
        result.ui = { ...result.ui, ...ui };
        // result
        return result;
      },
      {
        type: "setView",
        view: {},
        viewdata: {},
        ui: {
          ...ui,
          hasOverlayLayer: false
        }
      }
    );
    // console.log({ action });
    dispatcher(action);
    invokeWebhooks({
      Functions,
      functionContext,
      templateViewData,
      property: "postRenderFunctions",
      templateRouteLayers
    });
    return action;
  } catch (e) {
    Functions.log({ type: "error", error: e });
    dispatcher({
      type: "setView",
      view: {
        [applicationRootName]: viewxTemplates[applicationRootName].__error_500
      },
      viewdata: {
        [applicationRootName]: {
          error: e
        }
      }
    });
  }
}

// @ts-ignore
export function shortCircutPromiseArray(promiseArrayResult, name) {
  // @ts-ignore
  const results = promiseArrayResult.map(
    // @ts-ignore
    arrayResult => arrayResult[Object.keys(arrayResult)[0]]
  );
  //  // @ts-ignore
  //  console.log({ promiseArrayResult,results }, ' promiseArrayResult.filter(result => !result).length', promiseArrayResult.filter(result => !result).length);

  // @ts-ignore
  if (
    promiseArrayResult.length &&
    // @ts-ignore
    results.filter(result => result === false).length
  ) {
    // return true;
    throw new Error(
      `There was an error processing: ${name}. [${JSON.stringify(
        promiseArrayResult,
        null,
        2
      )}]`
    );
  } else if (
    promiseArrayResult.length &&
    // @ts-ignore
    results.filter(result => result === undefined).length
  ) {
    return true;
  } else return false;
}

// @ts-ignore
export async function invokeWebhooks({
  // @ts-ignore
  Functions,
  // @ts-ignore
  functionContext,
  // @ts-ignore
  templateViewData,
  // @ts-ignore
  property = "preRenderFunctions",
  // @ts-ignore
  templateRouteLayers
}) {
  // @ts-ignore
  const promises = [];
  // @ts-ignore
  const promiseNames = [];
  // @ts-ignore
  templateRouteLayers.forEach(async templateRouteLayer => {
    const functionNames = templateRouteLayer.vxtObject[property] || [];
    // @ts-ignore
    functionNames.forEach((functionName) =>{
      if(typeof functionName==='function'){
        const func:VXAFunction = functionName.bind(functionContext)(templateViewData)
        promiseNames.push(functionName.name)
        promises.push(func)
        // return func;
      } else {
        const func = getFunctionFromNameString({
          Functions,
          functionContext,
          functionName
        })(templateViewData)
        promiseNames.push(functionName)
        promises.push(func)
        // return func
      }
    });
    // promiseNames.push(...functionNames);
    // promises.push(...funcs);
  });
  // @ts-ignore
  const results = await promiseSeries(
    // @ts-ignore
    promises.map(func => () => enforcePromise(func))
  );
  // @ts-ignore
  return results.map((result, i) => ({
    // @ts-ignore
    [promiseNames[i]]: result
  }));
}

export function enforcePromise(val: any) {
  return val instanceof Promise ? val : Promise.resolve(val);
}

// @ts-ignore
export function promiseSeries(providers) {
  // console.log('promiseSeries',{providers})
  const ret = Promise.resolve(null);
  // @ts-ignore
  const results = [];

  // @ts-ignore
  return (
    providers
      // @ts-ignore
      .reduce(function(result, provider, index) {
        return result.then(function() {
          // @ts-ignore
          return provider().then(function(val) {
            results[index] = val;
          });
        });
      }, ret)
      .then(function() {
        // @ts-ignore
        // console.log('promiseSeries', { results });
        // @ts-ignore
        return results;
      })
  );
}

/**
 * return bound function from function name string, e.g. func:this.props.debug
 * @param options.Functions - VXA Functions
 * @param options.functionContext - VXA Function Context
 * @param options.functionName - function name string
 */
export function getFunctionFromNameString({
  Functions,
  functionContext,
  functionName
}: {
  Functions: VXAFunctions;
  functionContext: VXAFunctionContext;
  functionName: string;
}): VXAFunction {
  let func;
  try {
    if (typeof functionName === "string") {
      const name: string = getDynamicFunctionName(functionName);
      if (
        functionName.includes("func:this.props") &&
        typeof functionContext.props[name] === "function"
      ) {
        func = functionContext.props[name].bind(functionContext);
      } else if (
        functionName.includes("func:viewx.Functions") &&
        typeof Functions[name] === "function"
      ) {
        func = Functions[name].bind(functionContext);
      } else if (
        functionName.includes("func:window") &&
        typeof window[name] === "function"
      ) {
        func = window[name].bind(functionContext);
      }
    }
    if (func) return func;
    else
      return () => {
        console.warn("Invalid Function Name: " + functionName);
      };
  } catch (e) {
    return () => {
      console.error("Invalid Function", e);
    };
  }
}

//func:this.props.login, func:window.alert, func:viewx.Functions.logout
/* eslint-disable */
export const FUNCTION_NAME_REGEXP = /func:(?:this\.props|window|viewx)(?:\.Functions)?\.(\D.+)*/;
/* eslint-enable */
/**
 * get function name from function name string i.e. func:viewx.Functions.logout => logout
 * @param function_name - function name string
 */
export function getDynamicFunctionName(function_name: string): string {
  return function_name.replace(FUNCTION_NAME_REGEXP, "$1");
}
