import {
  createStore
  // createGlobalState,
} from "react-hooks-global-state";

export function getGlobalStateHooks(options: any = {}) {
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
      // case 'decrement': return { ...state, count: state.count - 1 };
      case "setView":
        // console.log("dispatching setView", {
        //   action
        // });
        return Object.assign({}, state, {
          views: Object.assign({}, state.views, action.view),
          viewdata: Object.assign({}, state.viewdata, action.viewdata)
        });
      default:
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
      hasLoadedInitialTemplates: false,
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
