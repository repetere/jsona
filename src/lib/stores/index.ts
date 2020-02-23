import {
  createStore
  // createGlobalState,
} from "react-hooks-global-state";
// @ts-ignore
import { setCacheStore, getFromCacheStore } from "../util/data";

export async function getGlobalStateHooks(options: any = {}) {
  const settings = options.config.settings;
  const layers = options.config.layers;
  // const layerNames = layers.map((layer:any) => layer.name);
  const layerOpenState = layers.reduce((result: any, layer: any) => {
    const { name, type } = layer;
    result[`isRouteLayer_${name}_Matched`] =
      type === "applicationRoot" ? true : false;
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
        // console.warn('setting setView', { action },state.ui);
        return {
          ...state,
          views: {
            ...state.views,
            ...action.view
          },
          viewdata: {
            ...state.viewdata,
            ...action.viewdata
          },
          ui: {
            ...state.ui,
            ...action.ui
          }
        };
      case "setReturnURL":
        // console.warn('setting RETURN URL', { action },state.ui);
        return {
          ...state,
          ui: {
            ...state.ui,
            returnURL: action.returnURL
          }
        };
      case "setUser":
        if (settings.cacheLoggedInUser || action.rememberMe) {
          // @ts-ignore
          Object.keys(action.user)
            .filter(prop => prop !== "type")
            .forEach(prop => {
              setCacheStore(
                "user",
                prop,
                action.user[prop],
                settings.cacheUserTimeout
              );
            });
        }

        return {
          ...state,
          user: {
            ...state.user,
            ...action.user
          }
        };
      case "setSocket":
        return {
          ...state,
          socker: action.socket
        };
      case "setUI": {
        return {
          ...state,
          ui: {
            ...state.ui,
            ...action.ui,
          }
        }
      }
      case "setTemplates": {
        return {
          ...state,
          templates: {
            ...state.templates,
            ...action.templates,
          }
        }
      }
      case "setApplicationState":
        return {
          ...state,
          ...action.state
        };
      default:
        if (action.type.includes("toggleMatchedRouteLayer")) {
          const [, layerName] = action.type.split("_");
          const uiLayerName = `isRouteLayer_${layerName}_Matched`;
          return {
            ...state,
            ui: {
              ...state.ui,
              [uiLayerName]: !state.ui[uiLayerName]
            }
          };
        }
        return state;
    }
  };

  const initialState = {
    ...options.application.state,
    views: {
      ...options.vxaState.views
    },
    viewdata: {
      ...options.vxaState.viewdata
    },
    templates: {
      ...options.templates
    },
    socket: {},
    ui: {
      templateRoute: {
        route: '',
        location: '',
        params: {},
        re: undefined,
      },
      templatePaths:[],
      isLoading: true,
      isModalOpen: false,
      hasOverlayLayer: false,
      hasLoadedInitialProcess: false,
      hasPreloadedTemplates: settings.hasPreloadedTemplates || false,
      returnURL: undefined,
      ...layerOpenState,
      ...options.vxaState.ui
    },
    user: {
      token: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "token")
        : undefined,
      tokenData: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "tokenData")
        : undefined,
      expires: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "expires")
        : undefined,
      timeout: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "timeout")
        : undefined,
      profile: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "profile") || {}
        : {},
      fetchHeaders: {},
      loggedIn: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "loggedIn") || false
        : false,
      loggedInMFA: settings.cacheLoggedInUser
        ? getFromCacheStore("user", "loggedInMFA") || false
        : false,
      ...options.vxaState.user
    }
  };
  const {
    // GlobalStateProvider,
    dispatch, useGlobalState } = createStore(
    reducer,
    initialState
  );

  return {
    // GlobalStateProvider,
    dispatch,
    useGlobalState
  };
}
