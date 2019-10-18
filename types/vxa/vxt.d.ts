import { jsonx } from "./jsonx";

export type pageAttribute = {
  tagName: string;
  attributes: any;
  innerHTML: string;
};

export type vxt = {
  jsonx: jsonx;
  pageDate: pageAttribute[];
  preRenderFunctions: string[];
  transformRenderFunctions: string[];
  postRenderFunctions: string[];
};

export type vxtTemplate = {
  [index: string]: vxt;
};

export type VXAView = {
  jsonx: jsonx;
  resources: any;
  pageData: pageAttribute[];
};

export type layerName = string;

export type VXAState = {
  views: { [index: layerName]: VXAView };
  viewdata: { [index: layerName]: any };
  socket: any;
  ui: any;
  user: any;
  [index?: string | symbol]: any;
};
