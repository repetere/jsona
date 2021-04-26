import { jsonx, jsonxLibrary, jsonxComponent } from 'jsonx/src/types/jsonx';
import { vxtTemplate, VXAState, VXASettings, VXAFunctions } from "./vxt";
export declare enum VXAComponentFormats {
    umd = "umd",
    jsonx = "jsonx"
}
export declare enum VXAComponentTypes {
    component = "component",
    function = "function",
    library = "library"
}
export declare type customVXAJSONXLibrary = {
    [index: string]: jsonx;
};
export declare type VXAComponent = {
    name: string;
    format: VXAComponentFormats;
    type: VXAComponentTypes;
    umdFilePath: string;
    jsonx?: jsonxLibrary | jsonx;
    jsonxComponent?: jsonx;
    stylesheets: string[];
    options?: {};
    functionBody?: string;
};
export declare enum VXALayerTypes {
    root = "applicationRoot",
    modal = "modal",
    data = "data",
    overlay = "overlay",
    view = "view"
}
export declare type VXALayer = {
    order: number;
    name: string;
    system?: boolean;
    type: string;
    idSelector?: string;
};
export declare type stateObject = {
    [index: string]: any;
};
export declare type VXAApplicationState = {
    state?: stateObject;
};
export declare type VXATemplates = {
    [index: string]: vxtTemplate;
};
export declare type VXAConfig = {
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
