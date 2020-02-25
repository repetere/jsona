import { VXAState, VXAFunctionContext, VXAFunction, vxt, } from "./vxt";
import { jsonxResourceProps, } from "./jsonx";
import { ReactNode } from "react";
import { VXALayer, VXAConfig, VXATemplates,  } from "./options";

type layerName = string;
type routePath = string;

export type VXAViewXTemplates = {
  [index: string]: VXATemplates;
} 

export type appGetTemplateRouteLayer = {
  viewxTemplates: VXAViewXTemplates;
  pathname: string;
};

export type VXADispatchAction = {
  type: string;
  [index: string]: any;
}

export type VXAStateHookFunction = (newState: any) => void;

export type VXADispatchFunction = (action:VXADispatchAction) => VXAState;

export type appLoadViewParams = {
  layerName?: string;
  view?: vxt;
  resourceprops: jsonxResourceProps;
  pathname: string;
};

export interface appMainProps { 
  history: any;// {length: 50, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
  location: any;//{pathname: "/albums", search: "", hash: "", state: undefined, key: "6kobxf"}
  match: any;// {path: "*", url: "/albums", isExact: true, params: {…}}
  // staticContext: undefined;
  children?: ReactNode;
  [index: string]: any;
}

export interface appLoadTemplates{
  config: any| VXAConfig;
  viewxTemplates:any| VXAViewXTemplates;
  templates: any |VXAViewXTemplates;
  setTemplates: VXAStateHookFunction;
  setUI: VXAStateHookFunction;
  ui: VXAState['ui'];
  layers: VXALayer[];
  Functions: {[index:string]:VXAFunction} //any|VXAFunctions;
  functionContext:any| VXAFunctionContext;
}

export interface appLoadRoute{
  ui: VXAState['ui'];
  viewxTemplates:any| VXAViewXTemplates;
  pathname: string;
  dispatcher: any;
  layers: VXALayer[];
  Functions: {[index:string]:VXAFunction} //any|VXAFunctions;
  functionContext:any| VXAFunctionContext;
  resourceprops?: any;
}

export interface layerPathRoutes{
  viewxTemplates: any | VXAViewXTemplates;
  pathname: string;
  layers: VXALayer[];
}