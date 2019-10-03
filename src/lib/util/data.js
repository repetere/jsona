// import pluralize from 'pluralize';
// import numeral from 'numeral';
// import capitalize from 'capitalize';
// import moment from 'moment';
// import Promisie from "promisie";

export async function fetchJSON(path,options) {
  const response = await fetch(path, options); 
  return await response.json();
}

export async function fetchResources({ resources = {}, }) {
  const results = {};
  const resourceProperties = Object.keys(resources);
  if (resourceProperties.length) {
    await Promise.all(resourceProperties.map(prop => (async function (prop) {
      const resource = resources[ prop ];
      if (typeof resource === 'string') results[ prop ] = await fetchJSON(resource);
      else results[ prop ] = await fetchJSON(resource.fetchPath, resource.fetchOptions);
      return true;
    })(prop)));
  }
  return results;
}