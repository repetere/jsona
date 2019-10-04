// // @ts-ignore
// import Promisie from "promisie";
import {
  findMatchingRoutePath
} from "test-matching-route";
import {
  fetchJSON,
  fetchResources,
} from './data';
import {
  setPageAttributes,
} from './html';

export async function loadTemplates({
  config,
  viewxTemplates,
  templates,
  setTemplates,
  setUI,
  ui,
  layers,
  Functions,
}) {
  const fetchFunction = Functions.fetchJSON || fetchJSON;
  // @ts-ignore
  const loadedTemplates = await fetchFunction(config.settings.templatePath, config.settings.templateFetchOptions);
  viewxTemplates = layers.reduce((result, layer) => {
    const {
      name
    } = layer;
    result[name] = {
      ...loadedTemplates[name],
      ...templates[name],
    }
    return result;
  }, {});

  setTemplates(viewxTemplates);
  setUI({
    ...ui,
    hasLoadedInitialTemplates: true,
  });
  return {
    viewxTemplates
  };
}

export function getTemplateRouteLayer({
  viewxTemplates,
  pathname
}) {
  return (layer) => {
    const {
      name,
      type,
    } = layer;
    const templateRoute = findMatchingRoutePath(viewxTemplates[name], pathname, {
      return_matching_keys: true
    });
    if (templateRoute) {
      const vxtObject = viewxTemplates[name][templateRoute.route] || viewxTemplates[name].__error_404;
      return {
        name,
        type,
        vxtObject,
        templateRoute,
      };
    } else return undefined;
  };
}

export async function loadRoute({
  viewxTemplates,
  pathname,
  dispatcher,
  layers,
  Functions,
  functionContext,
}) {
  let applicationRootName = 'root';
  try {
    const fetchResourcesFunction = Functions.fetchResources || fetchResources;

    const templateRouteLayers = layers
      .map(getTemplateRouteLayer({
        viewxTemplates,
        pathname
      }))
      .filter(layer => layer);
    invokeWebhooks({
      Functions,
      functionContext,
      property: 'preRenderFunctions',
      templateRouteLayers,
    });
    const templateViewPromises = templateRouteLayers.map(templateRouteLayer => fetchResourcesFunction({
      resources: templateRouteLayer.vxtObject.resources,
      templateRoute: templateRouteLayer.templateRoute,
    }));
    const templateViewData = await Promise.all(templateViewPromises);
    const action = templateViewData.reduce((result, templateViewDatum, i) => {
      const {
        name,
        type,
        vxtObject
      } = templateRouteLayers[i];

      if (type === 'applicationRoot') {
        applicationRootName = name;
        setPageAttributes(vxtObject);
      }
      result.view[name] = vxtObject;
      result.viewdata[name] = templateViewDatum;
      // result
      return result;
    }, {
      type: "setView",
      view: {},
      viewdata: {},
    });

    dispatcher(action);
    invokeWebhooks({
      Functions,
      functionContext,
      templateViewData,
      property: 'postRenderFunctions',
      templateRouteLayers,
    });

  } catch (e) {
    console.error(e);
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

export async function invokeWebhooks({
  Functions,
  functionContext,
  templateViewData,
  property = 'preRenderFunctions',
  templateRouteLayers,
}) {

  templateRouteLayers.forEach(async (templateRouteLayer) => {
    const functionNames = templateRouteLayer.vxtObject[property] || [];
    const funcs = functionNames.map(functionName => getFunctionFromNameString({
      Functions,
      functionContext,
      functionName
    })(templateViewData));

    await Promise.all(funcs);
  });
}

export function getFunctionFromNameString({
  Functions,
  functionContext,
  functionName
}) {
  let func;
  try {
    if (typeof functionName === 'string') {
      const name = getDynamicFunctionName(functionName);
      if (functionName.includes('func:this.props') && typeof functionContext.props[name] === 'function') {
        func = functionContext.props[name].bind(functionContext);
      } else if (functionName.includes('func:viewx.Functions') && typeof Functions[name] === 'function') {
        func = Functions[name].bind(functionContext);
      } else if (functionName.includes('func:window') && typeof window[name] === 'function') {
        func = window[name].bind(functionContext);
      }
    }
    if (func) return func;
    else return () => {
      console.warn('Invalid Function Name: ' + functionName);
    };
  } catch (e) {
    return () => {
      console.error('Invalid Function', e);
    };
  }
}

//func:this.props.login, func:window.alert, func:viewx.Functions.logout
export const FUNCTION_NAME_REGEXP = /func:(?:this\.props|window|viewx)(?:\.Functions)?\.(\D.+)*/;
export function getDynamicFunctionName(function_name) {
  return function_name.replace(FUNCTION_NAME_REGEXP, '$1');
};