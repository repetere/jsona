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
import { loadTemplates, loadRoute, initialize, } from "../util/props";
import { setBodyPathnameId, } from "../util/html";

export default function getMainComponent(
  options = {
    application: { state: {} },
    config: {
      Functions: {},
      componentLibraries: {},
      reactComponents: {},
      layers: [],
      settings: { debug: true, setBodyPathnameID:true, }
    }
  }
): FunctionComponent {
  // @ts-ignore
  const { dispatch, useGlobalState, config } = options;
  const { Functions, settings, } = config;
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
    const props = Object.assign({ dispatch, templates, views, viewdata, ui, user, }, appProps);
    const functionContext = { props, state, setState, settings, };
    const loadView = useMemo(() => {
      // @ts-ignore
      return function _loadView({ layerName, view, resourceprops, pathname, }) {
        const loadViewPathname = pathname || `_loadView_${layerName}`;
        return loadRoute({
          viewxTemplates: {
            ...templates,
            [layerName]: {
              ...templates[layerName],
              [loadViewPathname]:view,
            }
          },
          pathname:loadViewPathname,
          dispatcher,
          // @ts-ignore
          layers: config.layers.filter(layer=>layer.name===layerName),
          Functions,
          resourceprops,
          functionContext
        });
      };
    }, [templates,functionContext,]);
    // @ts-ignore
    Functions.loadView = loadView;

    const getReactElement = JSONX.getReactElement.bind({
      props,
      state,
      setState,
      viewx: { Functions },
      // state:{counter, setCounter},
      debug: true, //options.config.settings.debug,
      componentLibraries: Object.assign({}, config.componentLibraries),
      reactComponents: Object.assign({ Link }, config.reactComponents)
    });
    useEffect(() => {
      // async function initMain() {
        
      // } 
      // initMain();
      // @ts-ignore
      initialize.call(functionContext,{settings,});
      // @ts-ignore
      Functions.onLaunch.call(functionContext);
      // @ts-ignore      
      return ()=>Functions.onShutdown.call(functionContext);
    }, []);
    useEffect(() => {
      let viewxTemplates = templates;
      async function initialize() {
        // @ts-ignore
        Functions.showLoader.call(functionContext, { ui, setUI });
        try {
          // @ts-ignore
          if (ui.hasLoadedInitialTemplates === false) {
            const updatedTemplates = await loadTemplates({
              config,
              viewxTemplates,
              templates,
              setTemplates,
              setUI,
              ui,
              layers: config.layers,
              Functions,
              functionContext,
            });
            viewxTemplates = updatedTemplates.viewxTemplates;
          }
          await loadRoute({
            viewxTemplates,
            pathname,
            dispatcher,
            layers: config.layers,
            Functions,
            functionContext
          });
          if(settings.setBodyPathnameID) setBodyPathnameId(pathname);
        } catch (e) {
          // @ts-ignore
          Functions.log({ type: 'error', error: e, });
        }
        // @ts-ignore
        Functions.hideLoader.call(functionContext, { ui, setUI });
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
          // console.log('LAYER',{name,type,jsonxChildren})
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
