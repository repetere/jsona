// import pluralize from 'pluralize';
// import numeral from 'numeral';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import Promisie from "promisie";

import * as pathToRegexp from 'path-to-regexp';

export async function fetchJSON(path,options) {
  const response = await fetch(path, options); 
  return await response.json();
}

export async function fetchResources({ resources = {}, templateRoute = {}, }) {
  const results = {};
  const resourceProperties = Object.keys(resources);
  if (resourceProperties.length) {
    await Promise.all(resourceProperties.map(prop => (async function (prop) {
      const resource = resources[ prop ];
      const fetchPath = (typeof resource === 'string') ? resource : resource.fetchPath;
      const toPath = pathToRegexp.compile(fetchPath);
      const fetchURL = toPath(templateRoute.params);

      const fetchOptions = typeof resource === 'string' ? {} : resource.fetchOptions;
      results[ prop ] = await fetchJSON(fetchURL, fetchOptions);
      return true;
    })(prop)));
  }
  return results;
}