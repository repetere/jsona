// eslint-disable-next-line
import React, { useEffect, FunctionComponent, useState, useMemo, Fragment, } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// @ts-ignore
import * as JSONX from "jsonx/src/main";
import { loadTemplates, loadRoute, } from '../util/props';

export default function getMainComponent(options = { application: { state: {} }, config: { Functions: {}, componentLibraries: {}, reactComponents: {}, layers:[], settings: { debug: true } } }): FunctionComponent {
  // @ts-ignore
  const { dispatch, useGlobalState, config, } = options;
  const { Functions, } = config;
  // @ts-ignore
  const dispatcher = action => dispatch(action);
  // @ts-ignore
  function Main(appProps) {
    const [templates, setTemplates] = useGlobalState("templates");
    const [views] = useGlobalState("views");
    const [viewdata] = useGlobalState("viewdata");
    const [ui, setUI] = useGlobalState("ui");
    const [state, setState,] = useState(options.application.state);
    const { pathname } = appProps.location;
    const props = Object.assign({ dispatch, }, appProps);
    
    const getReactElement = JSONX.getReactElement.bind({
      props,
      state,
      setState,
      // state:{counter, setCounter}, 
      debug: true,//options.config.settings.debug,
      componentLibraries: Object.assign({}, config.componentLibraries),
      reactComponents: Object.assign({ Link, }, config.reactComponents),
    });
    // let body = null;

    // console.log({ templates });
    // let body = getReactElement(
    //   views.root ? views.root.jsonx : null,
    //   viewdata.root ? viewdata.root : {}
    // );
    useEffect(() => {
      let viewxTemplates = templates;
      async function initialize() {
        // @ts-ignore
        Functions.showLoader({ ui, setUI });
        try {
          
        if (ui.hasLoadedInitialTemplates === false) {
          const updatedTemplates = await loadTemplates({ config, viewxTemplates, templates, setTemplates, setUI, ui, });
          viewxTemplates = updatedTemplates.viewxTemplates;
        }
        loadRoute({ viewxTemplates, pathname, dispatcher, layers: config.layers, });
        } catch (e) {
          console.error(e);
        }
        // @ts-ignore
        Functions.hideLoader({ ui, setUI });
      }
      initialize();
      //   // return function cleanup(){}
    }, [pathname,/* templates*/]);
    return ( 
      <Fragment>
        {options.config.layers.map((layer) => {
          const { name, type } = layer;
          const jsonxChildren = getReactElement(
            views[name] ? views[name].jsonx : null,
            viewdata[name] ? viewdata[name] : {}
          );
          // console.log('LAYER',{name,type,jsonxChildren})
          if (type === 'applicationRoot') {
            return jsonxChildren;
          } else {
            // @ts-ignore
            const el = document.querySelector(`#${name}`);
            // @ts-ignore
            return ReactDOM.createPortal(
              jsonxChildren,
              // @ts-ignore
              el,
            );
          }
        })}
      </Fragment>
      
    );
  }
  return Main;
}
