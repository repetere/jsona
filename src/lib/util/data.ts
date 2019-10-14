// import pluralize from 'pluralize';
// import numeral from 'numeral';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import Promisie from "promisie";
// @ts-ignore
import store from "store2";
import qs from 'querystring';
import * as pathToRegexp from "path-to-regexp";

export const cacheKeyPrefix = 'exp@';
export const cacheKeySuffix = ';';

export function getNSKey(namespace: string, key: string):string {
  return `${namespace}${cacheKeySuffix}${key}`;
}

export function getKeyElements(cacheKey: string) {
  const [,timeoutSuffixKey] = cacheKey.split(cacheKeyPrefix);
  const [timeout, key] = timeoutSuffixKey.split(cacheKeySuffix);
  return { timeout, key };
}

export function getExpKey(key: string,timeout:number) {
  return `${cacheKeyPrefix}${(new Date().valueOf()+timeout)}${cacheKeySuffix}${key}`;
}

export function removeKeys(namespace: string, keys: string[]): void{
  keys.forEach(key => {
    const nsKey = getNSKey(namespace, key);
    const nsStore = store.namespace(nsKey);
    nsStore.clearAll();
  });
}

export function getFromCacheStore(namespace: string, key: string) {
  const nsKey = getNSKey(namespace, key);
  const nsStore = store.namespace(nsKey);
  const keyArray = nsStore.keys();
  const cacheKey = (keyArray.length) ? keyArray[0] : undefined;
  if (cacheKey) {
    // @ts-ignore
    const timeoutData = getKeyElements(cacheKey);
    const currentTime = new Date().valueOf();
    if (Number(timeoutData.timeout) < currentTime) {
      nsStore.remove(cacheKey);
      return undefined;
    } else {
      return nsStore.get(cacheKey);
    }
  } else return undefined;
}

export function setCacheStore(namespace: string, key: string, value:any, timeout:number) {
  const nsKey = getNSKey(namespace, key);
  const nsStore = store.namespace(nsKey);
  const keyArray = nsStore.keys();
  const cacheKey = (keyArray.length) ? keyArray[0] : getExpKey(key, timeout);
  nsStore.set(cacheKey, value, true);
}

export function getPath(path:string, options:any) {
  path = `${path}${path.includes('?') ? '&' : '?'}${qs.stringify(JSON.parse(options.body))}`;
  options.body = undefined;
  delete options.body;
  return { path, options };
}

export async function fetchJSON(path: string, options: any = {}) {
  // @ts-ignore
  const userAccessToken = (this.props.user.token) ? {
    // @ts-ignore
    [this.settings.accessTokenProperty]:this.props.user.token,
  } : {};
  options.headers = {
    ...options.headers,
    // @ts-ignore
    ...this.settings.fetchHeaders,
    // @ts-ignore
    ...this.props.user.fetchHeaders,
    // @ts-ignore
    ...userAccessToken,
  };
  if (options.method === 'GET' && options.body) {
    const getPathBody = getPath(path, options);
    path = getPathBody.path;
    options = getPathBody.options;
  }
  
  // @ts-ignore
  if (options.method === 'socket') return await fetchJSONViaSocket.call(this, path, options);
  else {
    const response = await fetch(path, options);
    if (typeof response.ok === 'boolean' && !response.ok) throw new Error(`${response.status}: ${response.statusText}`);
    else if (response.status < 200 || response.status >= 300) throw new Error(`${response.status}: ${response.statusText}`);
    return await response.json();
  } 
}

export async function fetchJSONViaSocket(path:string, options:any) {
  try {
    // @ts-ignore
    this.props.socket.emit(path, options, (successData) => {
      return successData;
    });
    
  } catch (e) {
    throw e;
  }
}

export async function fetchResources({ resources = {}, templateRoute = {} }) {
  const results = {};
  const resourceProperties = Object.keys(resources);
  // @ts-ignore
  const context = this;
  if (resourceProperties.length) {
    await Promise.all(
      resourceProperties.map(prop =>
        (async function(prop) {
          // @ts-ignore
          const resource = resources[prop];
          const fetchPath =
            typeof resource === "string" ? resource : resource.fetchPath;
          const toPath = pathToRegexp.compile(fetchPath);
          // @ts-ignore
          const fetchURL =
            // @ts-ignore
            toPath(templateRoute.params) + window.location.search;

          // @ts-ignore
          const fetchOptions =
            typeof resource === "string" ? {} : resource.fetchOptions;
          // @ts-ignore
          results[prop] = await fetchJSON.call(context,fetchURL, fetchOptions);
          return true;
        })(prop)
      )
    );
  }

  return results;
}
