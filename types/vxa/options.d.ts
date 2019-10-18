import { jsonx } from "./jsonx";
import { vxtTemplate, VXAState } from "./vxt";
import { string } from "prop-types";
import React from "react";
import { createStore } from "react-hooks-global-state";

export enum VXAComponentFormats {
  umd = "umd",
  jsonx = "jsonx"
}

export enum VXAComponentTypes {
  component = "component",
  library = "library"
}

export type VXAComponent = {
  name: string;
  format: VXAComponentFormats;
  type: VXAComponentTypes;
  umdFilePath: string;
  jsonx: jsonx;
  stylesheets: string[];
};

export type VXAFunction = (...args: any[]) => any;

export type VXAFunctions = {
  [index: string | symbol]: VXAFunction;
};

export enum VXALayerTypes {
  root = "applicationRoot",
  modal = "modal",
  view = "view"
}

export type VXALayer = {
  order: number;
  name: string;
  system?: boolean;
  type: string;
  // type: VXALayerTypes;
};

export type stateObject = {
  [index: string | symbol]: any;
};

export type VXAApplicationState = {
  state: stateObject;
};

export type layerName = string;

export type VXATemplates = {
  [index: layerName]: vxtTemplate;
};

export type VXASettings = {
  accessTokenProperty: string;
  addJSONXToWindow: boolean;
  addReactDOMToWindow: boolean;
  addReactToWindow: boolean;
  bodyLoadedClass: string;
  cacheLoggedInUser: boolean;
  cacheTemplatesOffline: boolean;
  cacheUserTimeout: number;
  debug: boolean;
  dynamicTemplateFetchOptions: {};
  dynamicTemplatePath?: string;
  fetchHeaders: any;
  htmlLoadedClass: string;
  name: string;
  router: string;
  routes: {
    user_login: string;
    user_login_METHOD: string;
    user_login_mfa: string;
    user_login_mfa_METHOD: string;
    user_profile: string;
  };
  setBodyPathnameID: boolean;
  socket_disconnect_message: any;
  socket_server?: string;
  socket_server_options: any;
  templateFetchOptions: any;
  templatePath?: string;
  uiLoadedClass: string;
  uiLoadingClass: string;
  useBodyLoadedClass: boolean;
  useHTMLLoadedClass: boolean;
  useWebSockets: boolean;
  useWebSocketsAuth: boolean;
  useWindowRequestQuery: boolean;
  version: string;
};

export type VXAConfig = {
  Functions: VXAFunctions;
  componentLibraries?: {
    [index: string]: any;
  };
  layers: VXALayer[];
  querySelector: string;
  reactComponents?: {
    [index: string]:
      | React.FunctionComponent
      | React.PureComponent
      | React.Component
      | React.ReactElement
      | function;
  };
  settings: VXASettings;
};

export interface VXAOptions {
  customComponents?: VXAComponent[];
  customScripts?: string[];
  customStyles?: string[];
  customFunctions?: VXAFunctions;
  config?: VXAConfig;
  // layers?: any[];
  layers?: VXALayer[];
  settings?: any;
  application?: VXAApplicationState;
  vxaState?: VXAState | {};
  templates?: VXATemplates;
  dispatch?: createStore.dispatch;
  useGlobalState?: createStore.useGlobalState;
}
