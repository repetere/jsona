import { VXALayer, VXAConfig } from "../../types";
export declare enum customFileType {
    script = "script",
    style = "style"
}
export declare type VXALayerObject = {
    [index: string]: VXALayer;
};
export declare type librariesAndComponents = {
    componentLibraries: VXAConfig['componentLibraries'];
    reactComponents: VXAConfig['reactComponents'];
};
export interface insertScriptParams {
    src: string;
    name: string;
    async?: boolean;
    onload?: () => void;
}
