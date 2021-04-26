import { JSONAOptions, VXAConfig, VXAComponent } from "../../../types";
import { librariesAndComponents } from "../../internal_types/config";
declare global {
    interface Window {
        [index: string]: any;
    }
}
export declare function getFilePromise({ type, file, i, name }: {
    type: string;
    file: string;
    i: number;
    name: string;
}): Promise<boolean | string>;
export declare function getComponentPromise(customComponent: VXAComponent): Promise<string | boolean>;
export declare function getReactLibrariesAndComponents({ customComponents }: {
    customComponents?: VXAComponent[];
}): Promise<librariesAndComponents>;
export declare function addCustomFiles({ type, files }: {
    type: string;
    files: string[] | undefined;
}): Promise<string[] | any>;
export declare function configureViewx(options?: JSONAOptions): Promise<VXAConfig>;
