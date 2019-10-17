// eslint-disable-next-line
import React, {
  useEffect,
  FunctionComponent,
  useState,
  useMemo,
  Fragment
} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// @ts-ignore
import * as JSONX from "jsonx/src/main";
import { loadTemplates, loadRoute, setup } from "../util/props";
import { setBodyPathnameId } from "../util/html";
import { fetchJSON, } from "../util/data";

// @ts-ignore
export function bindFunctionContext({ Functions, functionContext }) {
  // @ts-ignore
  Functions.fetchJSON = fetchJSON.bind(functionContext);
  // @ts-ignore
  Functions.loadUser = Functions.loadUser.bind(functionContext);
  // @ts-ignore
  Functions.loginUser = Functions.loginUser.bind(functionContext);
  // @ts-ignore
  Functions.getUserProfile = Functions.getUserProfile.bind(functionContext);
  // @ts-ignore
  Functions.validateMFA = Functions.validateMFA.bind(functionContext);
  // @ts-ignore
  Functions.logoutUser = Functions.logoutUser.bind(functionContext);
}

export default function getMainComponent(
  options = {
    application: { state: {} },
    config: {
      Functions: {},
      componentLibraries: {},
      reactComponents: {},
      layers: [],
      settings: { debug: true, setBodyPathnameID: true }
    }
  }
): FunctionComponent {
  // @ts-ignore
  const { dispatch, useGlobalState, config } = options;
  const { Functions, settings } = config;
  // @ts-ignore
  const dispatcher = action => dispatch(action);
  // @ts-ignore
  function Main(appProps) {
    const [templates, setTemplates] = useGlobalState("templates");
    const [views] = useGlobalState("views");
    const [user] = useGlobalState("user");
    const [viewdata] = useGlobalState("viewdata");
    const [ui, setUI] = useGlobalState("ui");
    const [state, setState] = useState(options.application.state);
    const { pathname } = appProps.location;
    const props = Object.assign(
      { dispatch, templates, views, viewdata, ui, user, setUI, setTemplates, updateState: (applicationState: any) => dispatch({ type: 'setApplicationState', state: applicationState, }) },
      appProps
    );
    const functionContext = { props, state, setState, settings, viewx: { Functions, settings, }, };
    const loadView = useMemo(() => {
      // @ts-ignore
      return function _loadView({ layerName, view, resourceprops, pathname }) {
        const loadViewPathname = pathname || `_loadView_${layerName}`;
        return loadRoute({
          ui,
          viewxTemplates: {
            ...templates,
            [layerName]: {
              ...templates[layerName],
              [loadViewPathname]: view
            }
          },
          pathname: loadViewPathname,
          dispatcher,
          // @ts-ignore
          layers: config.layers.filter(layer => layer.name === layerName),
          Functions,
          resourceprops,
          functionContext
        });
      };
    }, [templates, functionContext]);
    // @ts-ignore
    Functions.loadView = loadView;
    bindFunctionContext({ Functions, functionContext });

    const getReactElement = JSONX.getReactElement.bind({
      props,
      state,
      setState,
      viewx: { Functions, settings, },
      // state:{counter, setCounter},
      debug: settings.debug,
      componentLibraries: Object.assign({}, config.componentLibraries),
      reactComponents: Object.assign({ Link }, config.reactComponents)
    });
    useEffect(() => {
      // @ts-ignore
      Functions.onLaunch.call(functionContext);
      // @ts-ignore
      return () => Functions.onShutdown.call(functionContext);
    }, []);
    useEffect(() => {
      let viewxTemplates = templates;
      // @ts-ignore
      let action;
      async function initialize() {
        // @ts-ignore
        Functions.showLoader.call(functionContext, { ui, setUI });
        try {
          // @ts-ignore
          setup.call(functionContext, { settings });
          // @ts-ignore
          if (ui.hasLoadedInitialProcess === false) {
            // @ts-ignore
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
          }
          action = await loadRoute({
            ui,
            viewxTemplates,
            pathname,
            dispatcher,
            layers: config.layers,
            Functions,
            functionContext
          });
          if (settings.setBodyPathnameID) setBodyPathnameId(pathname);
        } catch (e) {
          // @ts-ignore
          Functions.log({ type: "error", error: e });
        }
        // @ts-ignore
        Functions.hideLoader.call(functionContext, { ui: action.ui, setUI });
      }
      initialize();
      //   // return function cleanup(){}
    }, [pathname /* templates*/]);
    return (
      <Fragment>
        {options.config.layers.map(layer => {
          const { name, type } = layer;
          const jsonxChildren = getReactElement(
            views[name] ? views[name].jsonx : null,
            viewdata[name] ? viewdata[name] : {}
          );
          // console.log('LAYER',{name,type,jsonxChildren},'views[name]',views[name],'viewdata[name]',viewdata[name])
          if (type === "applicationRoot") {
            return jsonxChildren;
          } else {
            // @ts-ignore
            const el = document.querySelector(`#${name}`);
            // @ts-ignore
            return ReactDOM.createPortal(
              jsonxChildren,
              // @ts-ignore
              el
            );
          }
        })}
      </Fragment>
    );
  }
  return Main;
}
