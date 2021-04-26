/// <reference types="react" />
import { VXALayer, pageAttribute } from "../../../types";
import { insertScriptParams } from "../../internal_types/config";
/**
 * add class to html element
 * @param options.element - html element to modify
 * @param options.className - css class to add
 */
export declare function setHTMLElementClass({ element, className }: {
    element: HTMLElement | null;
    className: string;
}): void;
/**
 * set id attribute on body based on pathname
 * @param pathname - vxa template layer route
 */
export declare function setBodyPathnameId(pathname: string): void;
export declare function insertJavaScript({ src, name, async, onload }: insertScriptParams): void;
export declare function insertStyleSheet({ src, name, onload }: insertScriptParams): void;
export declare function createLayer({ layer, app, querySelector, }: {
    layer: VXALayer;
    app?: JSX.Element;
    querySelector?: string;
}): void;
export declare function getElementSelector({ tagName, attributes }: {
    tagName: string;
    attributes?: {
        [index: string]: string;
    };
}): string;
export declare function setPageAttributes({ pageData }: {
    pageData?: pageAttribute[];
}): Promise<void>;
