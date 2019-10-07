import {
  createStore
  // createGlobalState,
} from "react-hooks-global-state";
import store from 'store2';

export async function getGlobalStateHooks(options: any = {}) {
  // @ts-ignore
  window.store = store;
  // @ts-ignore
  await import('store2/src/store.cache');
  const layers = options.config.layers;
  // const layerNames = layers.map((layer:any) => layer.name);
  const layerOpenState = layers.reduce((result: any, layer: any) => {
    const { name, type, } = layer;
    result[`isRouteLayer_${name}_Matched`] = type === 'applicationRoot' ? true : false;
    return result;  
  }, {});
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "viewxUILoadingStart":
        return {
          ...state,
          ...{
            ui: {
              ...state.ui,
              isLoading: true
            }
          }
        };
      case "viewxUILoadingComplete":
        return {
          ...state,
          ...{
            ui: {
              ...state.ui,
              isLoading: false
            }
          }
        };
      case "setView":
        return {
          ...state,
          views: {
            ...state.views,
            ...action.view,
          },
          viewdata: {
            ...state.viewdata,
            ...action.viewdata,
          },
          ui: {
            ...state.ui,
            ...action.ui,
          }
        };
      default:
        if (action.type.includes('toggleMatchedRouteLayer')) {
          const [, layerName] = action.type.split('_');
          const uiLayerName = `isRouteLayer_${layerName}_Matched`;
          return {
            ...state,
            ui: {
              ...state.ui,
              [uiLayerName]: !state.ui[uiLayerName],
            }
          };
        }
        return state;
    }
  };
  const initialState = {
    ...options.application.state,
    views: {
      layout: null,
      ...options.vxaState.views
    },
    viewdata: {
      layout: null,
      ...options.vxaState.viewdata
    },
    templates: {
      ...options.templates
    },
    ui: {
      isLoading: true,
      isModalOpen: false,
      hasOverlayLayer: false,
      hasLoadedInitialTemplates: false,
      ...layerOpenState,
      ...options.vxaState.ui
    },
    user: {
      jwt_token: undefined,
      profile: {},
      loggedIn: false,
      ...options.vxaState.user
    }
  };
  const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
    reducer,
    initialState
  );

  return {
    GlobalStateProvider,
    dispatch,
    useGlobalState
  };
}
