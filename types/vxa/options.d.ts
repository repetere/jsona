import { jsonx, jsonxComponent } from "./jsonx";
import {
  vxtTemplate,
  VXAState,
  VXASettings,
  VXAFunction,
  VXAFunctions
} from "./vxt";
import { string } from "prop-types";
import React from "react";
import { createStore } from "react-hooks-global-state";

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

export type VXAComponent = {
  name: string;
  format: VXAComponentFormats;
  type: VXAComponentTypes;
  umdFilePath: string;
  jsonx?: jsonxLibrary | jsonx;
  stylesheets: string[];
  options?: {};
  functionBody?: string;
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
  [index: string]: any;
};

export type VXAApplicationState = {
  state?: stateObject;
};

export type layerName = string;

export type VXATemplates = {
  [index: layerName]: vxtTemplate;
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

export interface VXAOptions {
  initialScripts?: string[];
  customComponents?: VXAComponent[];
  customScripts?: string[];
  customStyles?: string[];
  customFunctions?: VXAFunctions;
  config?: VXAConfig | undefined;
  // layers?: any[];
  layers?: VXALayer[];
  settings?: any;
  application?: VXAApplicationState;
  vxaState?: VXAState | {};
  templates?: VXATemplates;
  dispatch?: createStore.dispatch;
  useGlobalState?: createStore.useGlobalState;
}
