// eslint-disable-next-line
import React, {
  useEffect,
  FunctionComponent,
  useState,
  useMemo,
  Fragment,
} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  VXAFunctionContext,
  VXAFunctions,
  JSONAOptions,
  VXADispatchAction,
  appLoadViewParams
} from "../../types";

// @ts-ignore
// import * as JSONX from 
// import { getReactElementFromJSON, } from "jsonx/src/index";
// import { getReactElementFromJSONX, } from "jsonx/dist/index.esm";
import { getReactElementFromJSONX, } from "jsonx";
// import * as JSONX from "jsonx";


import { loadTemplates, loadDynamicTemplate, loadRoute, setup, hasMatchingDynamicTemplateRoutePathFallback } from "../util/props";
import { setBodyPathnameId } from "../util/html";
import { fetchJSON } from "../util/data";
// import { jsonxComponent } from "jsonx/src/types/jsonx";

/**
 * bound default vxa functions to the vxafunctioncontext object
 */
export function bindFunctionContext({
  Functions,
  functionContext
}: {
  Functions: VXAFunctions;
  functionContext: VXAFunctionContext;
}): void {
  Functions.fetchJSON = fetchJSON.bind(functionContext);
  Functions.loadUser = Functions.loadUser.bind(functionContext);
  Functions.loginUser = Functions.loginUser.bind(functionContext);
  Functions.getUserProfile = Functions.getUserProfile.bind(functionContext);
  Functions.validateMFA = Functions.validateMFA.bind(functionContext);
  Functions.logoutUser = Functions.logoutUser.bind(functionContext);
}

function ViewXComponent(props: any): JSX.Element {
  const { layer, views, viewdata, ctx, layerStates, settings, } = props;
  const { name, type, idSelector, } = layer;
  const el = document.querySelector(`#${idSelector||name}`);
  const layerState = useMemo(() =>{
    const layerStateData = layerStates ? layerStates[name] : {};
    return layerStateData
  },[layerStates,name]);
  const [state, setState] = useState(layerState);
  ctx[`jsona_layer_${name}_state`] = state;
  ctx[`jsona_layer_${name}_setState`] = setState;
  const getReactElement = getReactElementFromJSONX.bind(ctx);
  if (settings.exposeVXAToWindow) {
    window.__JSONAContext = ctx;
    window.__JSONAContext.getReactElement = getReactElement;
  }
  const Element = views[name] ? views[name].jsonx : null;
  if(Element) Element.props = {key: `jsona_layer_element_${name}`, ...Element.props, };
  const jsonxChildren = getReactElement(
    Element,
    viewdata[name] ? viewdata[name] : {}
  );
 
  
  return (
    <Fragment key={`jsona_layer_${name}`}>
      {(type !== "overlay")
        ? jsonxChildren
        : el ? ReactDOM.createPortal(jsonxChildren, el) : null
      }
    </Fragment>
  );
}

export default function getMainComponent(
  options: JSONAOptions
): FunctionComponent {
  if (!options) throw ReferenceError("invalid VXA Options");
  else if (!options.config) throw ReferenceError("invalid VXA Options");
  const { dispatch, useGlobalState, config, application, layerStates, customComponents, } = options;
  // console.log({options})
  const { Functions, settings } = config;
  const dispatcher = (action: VXADispatchAction): void => dispatch(action);
  function Main(appProps: any) {
    const [templates] = useGlobalState("templates");
    // const [templates, setTemplates] = useGlobalState("templates");
    const setTemplates = (templates:any):void => dispatch({ type: 'setTemplates', templates });
    const [views] = useGlobalState("views");
    const [user] = useGlobalState("user");
    const [viewdata] = useGlobalState("viewdata");
    const [ui] = useGlobalState("ui");
    // const [ui, setUI] = useGlobalState("ui");
    const setUI = (ui:any):void => dispatch({ type: 'setUI', ui });
    const [state, setState] = useState(application ? application.state : {});
    const { pathname } = appProps.location;
    const props = Object.assign(
      {
        dispatch,
        templates,
        views,
        viewdata,
        ui,
        user,
        setUI,
        setTemplates,
        updateState: (applicationState: any) => setState(applicationState),
        setApplicationState: (applicationState: any) =>
          dispatch({ type: "setApplicationState", state: applicationState })
      },
      appProps
    );
    const functionContext = {
      props,
      state,
      setState,
      settings,
      viewx: { Functions, settings }
    };
    if (settings.debug) {
      window.VXAcontext = functionContext;
    }
    // eslint-disable-line
    const loadView = useMemo(() => {
      return function _loadView({
        layerName,
        view,
        resourceprops,
        pathname
      }: appLoadViewParams) {
        const loadViewPathname = pathname || `_loadView_${layerName}`;
        return loadRoute({
          ui,
          viewxTemplates: Object.assign({}, templates,
            typeof layerName === 'string'
              ?{
                [layerName]: {
                ...templates[layerName],
                [loadViewPathname]: view
                }
              }
              : {}
          ),
          pathname: loadViewPathname,
          dispatcher,
          layers: layerName
            ? config
              ? config.layers.filter(layer => layer.name === layerName)
              : []
            : config.layers,
          Functions,
          resourceprops,
          functionContext
        });
      };
      /* eslint-disable */
    }, [templates, functionContext]);
    /* eslint-enable */

    Functions.loadView = loadView;
    bindFunctionContext({ Functions, functionContext });
    const ctx:VXAFunctionContext = {
      props,
      state,
      setState,
      viewx: { Functions, settings },
      // state:{counter, setCounter},
      debug: settings.debug,
      customComponents,
      componentLibraries:{},// Object.assign({}, config.componentLibraries),
      reactComponents: {Link: Link as any,}, //Object.assign({ Link }, config.reactComponents)
    };
    // if (settings.exposeVXAToWindow) window.__JSONAContext = ctx;
    const getReactElement = getReactElementFromJSONX.bind(ctx);
    ctx.getReactElement = getReactElement;

    useEffect(() => {
      Functions.onLaunch.call(functionContext);
      return () => Functions.onShutdown.call(functionContext);
      /* eslint-disable */
    }, []);
    /* eslint-enable */
    useEffect(() => {
      let viewxTemplates = templates;
      let action: VXADispatchAction;
      async function initialize() {
        try {
          setup.call(functionContext, { settings });
          let updatedUI = ui;
          if (ui.hasLoadedInitialProcess === false) {
            await Functions.loadUser.call(functionContext);
            const updatedTemplates = await loadTemplates({
              config,
              viewxTemplates,
              templates,
              setTemplates,
              setUI,
              ui,
              layers: config.layers,
              Functions,
              functionContext
            });
            viewxTemplates = updatedTemplates.viewxTemplates;
            updatedUI = updatedTemplates.updatedUI;
          }
          if (config.settings.dynamicTemplatePath && updatedUI.templatePaths.includes(pathname) === false && hasMatchingDynamicTemplateRoutePathFallback({ viewxTemplates, layers:config.layers, pathname }) === false) {
            const dynamicTemplates = await loadDynamicTemplate({
              config,
              viewxTemplates,
              templates,
              setTemplates,
              setUI,
              ui,
              layers: config.layers,
              Functions,
              functionContext,
              pathname,
            });

            viewxTemplates = dynamicTemplates.viewxTemplates;
            updatedUI = dynamicTemplates.updatedUI;
          }
          action = await loadRoute({
            ui: updatedUI,
            viewxTemplates,
            pathname,
            dispatcher,
            layers: config.layers,
            Functions,
            functionContext
          });
          if (settings.setBodyPathnameID) setBodyPathnameId(pathname);
        } catch (e) {
          try {
            loadView({
              resourceprops: { error: e },
              pathname: (e.message.includes('Could not load:'))?'__error_400':'__error_500',
            });
          } catch (e) {
          }
          Functions.log({ type: "error", error: e });
        }
        Functions.hideLoader.call(functionContext, { ui: typeof action!=='undefined' && action.ui? action.ui:ui, setUI });
      }
      initialize();
      //   // return function cleanup(){}
      /* eslint-disable */
    }, [pathname /* templates*/]);
  /* eslint-enable */
    
    return (
      <Fragment key="viewx">
        {config.layers.map(layer => {
          let layerName = layer.name;
          // Object.defineProperty(ViewXComponent, 'name', {value: `${layerName}_layer`, writable: true});
          return (<ViewXComponent key={`${layerName}_layer`} layer={layer} views={views} viewdata={viewdata} ctx={ctx} layerStates={layerStates} settings={settings} />);
        })}
      </Fragment>
    );
  }
  return Main;
}
