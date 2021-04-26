// import pluralize from 'pluralize';
// import numeral from 'numeral';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import Promisie from "promisie";
// @ts-ignore
import store from "store2";
import qs from 'querystring';
import * as pathToRegexp from "path-to-regexp";
// import { insertScriptParams } from '../../internal_types/config';
export const cacheKeyPrefix = 'exp@';
export const cacheKeySuffix = ';';
export const fetchProtocol_replace_str = '__|_/_/';
export const fetchProtocol_str = '://';
export function getNSKey(namespace, key) {
    return `${namespace}${cacheKeySuffix}${key}`;
}
export function getKeyElements(cacheKey) {
    const [, timeoutSuffixKey] = cacheKey.split(cacheKeyPrefix);
    const [timeout, key] = timeoutSuffixKey.split(cacheKeySuffix);
    return { timeout, key };
}
export function getExpKey(key, timeout) {
    return `${cacheKeyPrefix}${(new Date().valueOf() + timeout)}${cacheKeySuffix}${key}`;
}
export function removeKeys(namespace, keys) {
    keys.forEach(key => {
        const nsKey = getNSKey(namespace, key);
        const nsStore = store.namespace(nsKey);
        nsStore.clearAll();
    });
}
export function getFromCacheStore(namespace, key) {
    const nsKey = getNSKey(namespace, key);
    const nsStore = store.namespace(nsKey);
    const keyArray = nsStore.keys();
    const cacheKey = (keyArray.length) ? keyArray[0] : undefined;
    if (cacheKey) {
        const timeoutData = getKeyElements(cacheKey);
        const currentTime = new Date().valueOf();
        if (Number(timeoutData.timeout) < currentTime) {
            nsStore.remove(cacheKey);
            return undefined;
        }
        else {
            return nsStore.get(cacheKey);
        }
    }
    else
        return undefined;
}
export function setCacheStore(namespace, key, value, timeout) {
    const nsKey = getNSKey(namespace, key);
    const nsStore = store.namespace(nsKey);
    const keyArray = nsStore.keys();
    const cacheKey = (keyArray.length) ? keyArray[0] : getExpKey(key, timeout);
    nsStore.set(cacheKey, value, true);
}
export function getPath(path, options) {
    path = `${path}${path.includes('?') ? '&' : '?'}${qs.stringify(JSON.parse(options.body))}`;
    options.body = undefined;
    delete options.body;
    return { path, options };
}
/**
 * Return JSON from remote path
 * @property this - function context
 * @param path - fetch path
 * @param options  - fetch options
 * @param options.method - fetch options
 */
export async function fetchJSON(path, options = {}) {
    const userAccessToken = (this.props.user.token) ? {
        [this.settings?.accessTokenProperty || "x-access-token"]: this.props.user.token,
    } : {};
    options.headers = {
        ...options.headers,
        ...this.settings?.fetchHeaders,
        ...this.props.user.fetchHeaders,
        ...userAccessToken,
    };
    if (this.settings?.useWindowRequestQuery && window.location.search) {
        // const pathQuery = {
        //   body: Object.assign({},
        //     qs.parse(window.location.search.replace('?', '')),
        //     options.body
        //   )
        // };
        // // console.log({body})
        // pathQuery.body = JSON.stringify(pathQuery.body);
        // const getPathBody = getPath(path, pathQuery);
        // path = getPathBody.path;
        // options = getPathBody.options;
    }
    if (options.method === 'GET' && options.body) {
        const getPathBody = getPath(path, options);
        path = getPathBody.path;
        options = getPathBody.options;
    }
    if (options.method === 'socket')
        return await fetchJSONViaSocket.call(this, path, options);
    else {
        const response = await fetch(path, options);
        if (typeof response.ok === 'boolean' && !response.ok)
            throw new Error(`${response.status}: ${response.statusText}`);
        else if (response.status < 200 || response.status >= 300)
            throw new Error(`${response.status}: ${response.statusText}`);
        return await response.json();
    }
}
export async function fetchJSONViaSocket(path, options) {
    try {
        this.props.socket.emit(path, options, (successData) => {
            return successData;
        });
    }
    catch (e) {
        throw e;
    }
}
/**
 * Returns template resources for a vxt template. Resources are passed as resource props into the JSONX components
 * @property this - function context
 * @param options.resources - resourceprops for JSONX
 * @param options.templateRoute - template route properties
 */
export async function fetchResources({ resources = {}, templateRoute }) {
    const results = {};
    const resourceProperties = Object.keys(resources);
    const context = this;
    if (resourceProperties.length) {
        await Promise.all(resourceProperties.map(prop => (async function (prop) {
            const resource = resources[prop];
            const fetchPath = typeof resource === "string" ? resource : resource.fetchPath;
            const toPath = pathToRegexp.compile(fetchPath.replace(fetchProtocol_str, fetchProtocol_replace_str), templateRoute.params);
            const basePath = toPath(templateRoute.params).replace(fetchProtocol_replace_str, fetchProtocol_str);
            const fetchURL = `${basePath}${basePath.includes('?') ? window.location.search.replace('?', '') : window.location.search}`;
            const fetchOptions = typeof resource === "string" ? {} : resource.fetchOptions;
            results[prop] = await fetchJSON.call(context, fetchURL, fetchOptions);
            return true;
        })(prop)));
    }
    return results;
}
