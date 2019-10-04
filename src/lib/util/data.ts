// import pluralize from 'pluralize';
// import numeral from 'numeral';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import Promisie from "promisie";

import * as pathToRegexp from "path-to-regexp";

export async function fetchJSON(path: string, options: any) {
  const response = await fetch(path, options);
  return await response.json();
}

export async function fetchResources({ resources = {}, templateRoute = {} }) {
  const results = {};
  const resourceProperties = Object.keys(resources);
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
          results[prop] = await fetchJSON(fetchURL, fetchOptions);
          return true;
        })(prop)
      )
    );
  }

  return results;
}
