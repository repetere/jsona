import { jsonx, jsonxLibrary, jsonxComponent } from 'jsonx/src/types/jsonx';
import { Dispatch, SetStateAction } from 'react';
export declare type pageAttribute = {
    tagName: string;
    attributes?: any;
    innerHTML?: string;
};
export declare type vxtResource = {
    [index: string]: string | {
        fetchPath: string;
        fetchOptions: {};
    } | {
        [index: string]: any;
    };
};
export declare type vxtTemplateRoute = {
    location: string;
    params: any;
    re: RegExp;
    route: string;
};
export declare type vxt = {
    jsonx: jsonx;
    pageData?: pageAttribute[];
    preRenderFunctions?: string[];
    transformRenderFunctions?: string[];
    postRenderFunctions?: string[];
    resources?: vxtResource;
    expires?: Date | string;
};
export declare type vxtRoutePath = string;
export declare type vxtTemplate = {
    [index: string]: vxt;
};
export declare type VXATemplateRouteLayer = {
    hasOverlayLayer: boolean;
    name: string;
    templateRoute: vxtTemplateRoute;
    type: string;
    ui: any;
    vxtObject: vxt;
};
export declare type VXAView = {
    jsonx: jsonx;
    resources: any;
    pageData?: pageAttribute[];
};
export declare type layerName = string;
export declare type VXASettings = {
    accessTokenProperty: string;
    addJSONXToWindow: boolean;
    addReactDOMToWindow: boolean;
    addReactToWindow: boolean;
    bodyLoadedClass: string;
    cacheLoggedInUser: boolean;
    cacheTemplatesOffline: boolean;
    cacheUserTimeout: number;
    debug: boolean;
    exposeVXAToWindow: boolean;
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
export declare type VXAState = {
    views: {
        [index: string]: VXAView;
    };
    viewdata: {
        [index: string]: any;
    };
    socket?: any;
    ui: any;
    user: any;
    [index: string]: any;
};
export declare type VXAFunction = (...args: any[]) => any;
export declare type VXAFunctions = {
    [index: string]: VXAFunction;
};
export interface VXAFunctionContext {
    props: VXAState;
    state: any;
    setState: Dispatch<SetStateAction<any | undefined>>;
    settings?: VXASettings;
    debug?: boolean;
    viewx: {
        Functions: VXAFunctions;
        settings: VXASettings;
    };
    componentLibraries?: {
        [index: string]: jsonxLibrary;
    };
    reactComponents?: {
        [index: string]: jsonxComponent;
    };
    getReactElement?: (...args: any[]) => any;
}
