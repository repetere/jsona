import { VXAState, VXAFunctionContext, VXAFunction, vxt } from "./vxt";
import { jsonxResourceProps } from 'jsonx/src/types/jsonx';
import { ReactNode } from "react";
import { VXALayer, VXAConfig, VXATemplates } from "./options";
export declare type VXAViewXTemplates = {
    [index: string]: VXATemplates;
};
export declare type appGetTemplateRouteLayer = {
    viewxTemplates: VXAViewXTemplates;
    pathname: string;
};
export declare type VXADispatchAction = {
    type: string;
    [index: string]: any;
};
export declare type VXAStateHookFunction = (newState: any) => void;
export declare type VXADispatchFunction = (action: VXADispatchAction) => VXAState;
export declare type appLoadViewParams = {
    layerName?: string;
    view?: vxt;
    resourceprops: jsonxResourceProps;
    pathname: string;
};
export interface appMainProps {
    history: any;
    location: any;
    match: any;
    children?: ReactNode;
    [index: string]: any;
}
export interface appLoadTemplates {
    config: any | VXAConfig;
    viewxTemplates: any | VXAViewXTemplates;
    templates: any | VXAViewXTemplates;
    setTemplates: VXAStateHookFunction;
    setUI: VXAStateHookFunction;
    ui: VXAState['ui'];
    layers: VXALayer[];
    Functions: {
        [index: string]: VXAFunction;
    };
    functionContext: any | VXAFunctionContext;
}
export interface appLoadRoute {
    ui: VXAState['ui'];
    viewxTemplates: any | VXAViewXTemplates;
    pathname: string;
    dispatcher: any;
    layers: VXALayer[];
    Functions: {
        [index: string]: VXAFunction;
    };
    functionContext: any | VXAFunctionContext;
    resourceprops?: any;
}
export interface layerPathRoutes {
    viewxTemplates: any | VXAViewXTemplates;
    pathname: string;
    layers: VXALayer[];
}
