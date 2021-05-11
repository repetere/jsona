import { jsonx, jsonxLibrary, jsonxComponent, } from 'jsonx/src/types/jsonx';
import {
  vxtTemplate,
  VXAState,
  VXASettings,
  VXAFunctions
} from "./vxt";
// import { string } from "prop-types";
// import React from "react";
// import { createStore } from "react-hooks-global-state";

export enum VXAComponentFormats {
  umd = "umd",
  jsonx = "jsonx"
}

export enum VXAComponentTypes {
  component = "component",
  function = "function",
  library = "library"
}

export type customVXAJSONXLibrary = {
  [index: string]: jsonx;
};

export type VXAComponentPromiseParams = {
  name: string;
  umdFilePath?: string;
  jsonx?: jsonxLibrary | jsonx;
  jsonxComponent?: jsonx;
  stylesheets?: string[];
  options?: {};
  functionBody?: (string) | ((props:any)=>void);
  functionComponent?: (props:any)=>void;
  HTMLDocument?: HTMLDocument;
  timeoutMilliseconds?: number;
}

export type VXAComponent = {
  format: VXAComponentFormats;
  type: VXAComponentTypes;
} & VXAComponentPromiseParams;

export enum VXALayerTypes {
  root = "applicationRoot",
  modal = "modal",
  data = "data",
  overlay = "overlay",
  view = "view"
}

export type VXALayer = {
  order: number;
  name: string;
  system?: boolean;
  type: string;
  idSelector?: string;
  // type: VXALayerTypes;
};

export type stateObject = {
  [index: string]: any;
};

export type VXAApplicationState = {
  state?: stateObject;
};

export type VXATemplates = {
  [index: string]: vxtTemplate;
};

export type VXAConfig = {
  Functions: VXAFunctions;
  componentLibraries?: {
    [index: string]: any;
  };
  layers: VXALayer[];
  querySelector: string;
  reactComponents?: {
    [index: string]: jsonxComponent;
  };
  settings: VXASettings;
};

export interface JSONAOptions {
  initialScripts?: string[];
  customComponents?: VXAComponent[];
  customScripts?: string[];
  customStyles?: string[];
  customFunctions?: VXAFunctions;
  config?: VXAConfig | undefined;
  // layers?: any[];
  layers?: VXALayer[];
  querySelector?: string;
  settings?: any;
  application?: VXAApplicationState;
  vxaState?: VXAState | {};
  layerStates?: {
    [index: string]: any;
  };
  templates?: VXATemplates;
  dispatch?: any;
  useGlobalState?: any;
}
