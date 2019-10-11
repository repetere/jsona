// import Promisie from "promisie";
// @ts-ignore
import { findMatchingRoutePath } from "test-matching-route";
// @ts-ignore
import { fetchJSON, fetchResources } from "./data";
// @ts-ignore
import { setPageAttributes, setHTMLElementClass } from "./html";

import { initSockets, } from './socket';
// @ts-ignore
export async function setup({ settings }) {
  // @ts-ignore
  initSockets.call(this);

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

// @ts-ignore
export async function loadTemplates({
  // @ts-ignore
  config,
  // @ts-ignore
  viewxTemplates,
  // @ts-ignore
  templates,
  // @ts-ignore
  setTemplates,
  // @ts-ignore
  setUI,
  // @ts-ignore
  ui,
  // @ts-ignore
  layers,
  // @ts-ignore
  Functions,
  // @ts-ignore
  functionContext
}) {
  // const fetchFunctionObject = Functions.fetchJSON.bind(functionContext) || fetchJSON.bind(functionContext);
  const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(
    functionContext
  );
  // @ts-ignore
  const loadedTemplates = await fetchFunction(
    config.settings.templatePath,
    config.settings.templateFetchOptions
  );
  // @ts-ignore
  viewxTemplates = layers.reduce((result, layer) => {
    const { name } = layer;
    result[name] = {
      ...loadedTemplates[name],
      ...templates[name]
    };
    return result;
  }, {});

  setTemplates(viewxTemplates);
  setUI({
    ...ui,
    hasLoadedInitialProcess: true
  });
  return {
    viewxTemplates
  };
}

// @ts-ignore
export function getTemplateRouteLayer({ viewxTemplates, pathname }) {
  let hasOverlayLayer: boolean = false;
  // @ts-ignore
  return layer => {
    let vxtObject;
    const { name, type } = layer;
    const templateRoute = findMatchingRoutePath(
      viewxTemplates[name],
      pathname,
      {
        return_matching_keys: true
      }
    );
    if (type === "overlay" && templateRoute) hasOverlayLayer = true;
    if (
      !templateRoute &&
      viewxTemplates[name].__error_404 &&
      !hasOverlayLayer
    ) {
      vxtObject = viewxTemplates[name].__error_404;
    } else if (templateRoute) {
      vxtObject = viewxTemplates[name][templateRoute.route];
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
  // @ts-ignore
  viewxTemplates,
  // @ts-ignore
  pathname,
  // @ts-ignore
  dispatcher,
  // @ts-ignore
  layers,
  // @ts-ignore
  Functions,
  // @ts-ignore
  functionContext,
  // @ts-ignore
  resourceprops = {}
}) {
  let applicationRootName = "root";
  try {
    const fetchResourcesFunction = Functions.fetchResources || fetchResources;

    const templateRouteLayers = layers
      .map(
        getTemplateRouteLayer({
          viewxTemplates,
          pathname
        })
      )
      // @ts-ignore
      .filter(layer => layer);

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
    const templateViewData = await Promise.all(templateViewPromises);
    const action = templateViewData.reduce(
      (result: any, templateViewDatum, i: number) => {
        const {
          name,
          type,
          vxtObject,
          ui,
          hasOverlayLayer
        } = templateRouteLayers[i];
        if (hasOverlayLayer) result.ui.hasOverlayLayer = true;
        if (type === "applicationRoot") {
          applicationRootName = name;
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
          hasOverlayLayer: false
        }
      }
    );
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
    const funcs = functionNames.map(functionName =>
      getFunctionFromNameString({
        Functions,
        functionContext,
        functionName
      })(templateViewData)
    );
    promiseNames.push(...functionNames);
    promises.push(...funcs);
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

// @ts-ignore
export function enforcePromise(val) {
  return val instanceof Promise ? val : Promise.resolve(val);
}

// @ts-ignore
export function promiseSeries(providers) {
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
        return results;
      })
  );
}

// @ts-ignore
export function getFunctionFromNameString({
  // @ts-ignore
  Functions,
  // @ts-ignore
  functionContext,
  // @ts-ignore
  functionName
}) {
  let func;
  try {
    if (typeof functionName === "string") {
      const name = getDynamicFunctionName(functionName);
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
        // @ts-ignore
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
export const FUNCTION_NAME_REGEXP = /func:(?:this\.props|window|viewx)(?:\.Functions)?\.(\D.+)*/;
// @ts-ignore
export function getDynamicFunctionName(function_name) {
  return function_name.replace(FUNCTION_NAME_REGEXP, "$1");
}
