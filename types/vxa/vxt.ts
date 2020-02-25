import { jsonx } from "./jsonx";
import React,{Dispatch,SetStateAction} from 'react';

export type pageAttribute = {
  tagName: string;
  attributes: any;
  innerHTML: string;
};

export type vxtResource = {
  [index: string]:
    string
    | { fetchPath: string; fetchOptions: {}; }
    | { [index: string]: any };
}
export type vxtTemplateRoute = {
  location: string;
  params: any;
  re: RegExp;
  route: string;
}

export type vxt = {
  jsonx: jsonx;
  pageData?: pageAttribute[];
  preRenderFunctions?: string[];
  transformRenderFunctions?: string[];
  postRenderFunctions?: string[];
  resources?: vxtResource;
  expires?: Date | string;
};

export type vxtRoutePath = string;

export type vxtTemplate = {
  [index: string]: vxt;
};

export type VXATemplateRouteLayer = {
  hasOverlayLayer: boolean;
  name: string;
  templateRoute: vxtTemplateRoute;
  type: string;
  ui: any;
  vxtObject: vxt;
};

export type VXAView = {
  jsonx: jsonx;
  resources: any;
  pageData?: pageAttribute[];
};

export type layerName = string;

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

export type VXAState = {
  views: { [index: string]: VXAView };
  viewdata: { [index: string]: any };
  socket?: any;
  ui: any;
  user: any;
  [index: string]: any;
};

export type VXAFunction = (...args: any[]) => any;

export type VXAFunctions = {
  [index: string]: VXAFunction;
};

export interface VXAFunctionContext {
  props: VXAState;
  state: any;
  setState: Dispatch<SetStateAction<any|undefined>>;
  settings: VXASettings;
  viewx: {
    Functions: VXAFunctions;
    settings: VXASettings;
  }
}

