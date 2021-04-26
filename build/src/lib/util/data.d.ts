import { VXAFunctionContext, vxtResource, vxtTemplateRoute } from "../../../types";
import { jsonxResourceProps } from 'jsonx/src/types/jsonx';
export declare const cacheKeyPrefix = "exp@";
export declare const cacheKeySuffix = ";";
export declare const fetchProtocol_replace_str = "__|_/_/";
export declare const fetchProtocol_str = "://";
export declare function getNSKey(namespace: string, key: string): string;
export declare function getKeyElements(cacheKey: string): {
    timeout: string;
    key: string;
};
export declare function getExpKey(key: string, timeout: number): string;
export declare function removeKeys(namespace: string, keys: string[]): void;
export declare function getFromCacheStore(namespace: string, key: string): any;
export declare function setCacheStore(namespace: string, key: string, value: any, timeout: number): void;
export declare function getPath(path: string, options: any): {
    path: string;
    options: any;
};
/**
 * Return JSON from remote path
 * @property this - function context
 * @param path - fetch path
 * @param options  - fetch options
 * @param options.method - fetch options
 */
export declare function fetchJSON(this: VXAFunctionContext, path: string, options?: any): Promise<any>;
export declare function fetchJSONViaSocket(this: VXAFunctionContext, path: string, options: any): Promise<void>;
/**
 * Returns template resources for a vxt template. Resources are passed as resource props into the JSONX components
 * @property this - function context
 * @param options.resources - resourceprops for JSONX
 * @param options.templateRoute - template route properties
 */
export declare function fetchResources(this: VXAFunctionContext, { resources, templateRoute }: {
    resources: vxtResource;
    templateRoute: vxtTemplateRoute;
}): Promise<jsonxResourceProps>;
