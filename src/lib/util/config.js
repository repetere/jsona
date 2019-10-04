import * as JSONX from "jsonx/src/main";
import {
  config
} from '../defaults/config';
import {
  insertJavaScript,
  insertStyleSheet,
} from './html';
let addedReact = false;

export function getFilePromise({
  type,
  file,
  i,
  name
}) {
  return new Promise((resolve, reject) => {
    try {
      let returnedFile = false;
      const onload = () => {
        returnedFile = true;
        // console.log('LOADED SCRIPT', umdFilePath);
        resolve(file);
      };
      let t = setTimeout(() => {
        clearTimeout(t);
        if (returnedFile === false) throw new Error('Timeout loading file: ' + file);
      }, 60000);
      if (type === 'script') {
        insertJavaScript({
          name: `${name}-${i}`,
          src: file,
          async: true,
          onload,
        });
      } else if (type === 'style') {
        insertStyleSheet({
          src: file,
          name: `${name}-${i}`,
          onload,
        });
      } else resolve(true);

    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export function getComponentPromise(customComponent) {
  return new Promise((resolve, reject) => {
    let returnedFile = false;
    try {
      const {
        // type,
        umdFilePath,
        name,
        stylesheets = [],
      } = customComponent;
      if (umdFilePath) {
        let t = setTimeout(() => {
          clearTimeout(t);
          if (returnedFile === false) throw new Error('Timeout loading file: ' + umdFilePath);
        }, 60000);
      }
      if (stylesheets.length) stylesheets.forEach((stylesheet, i) => insertStyleSheet({
        src: stylesheet,
        name: `${name}-${i}`,
      }));
      if (umdFilePath) {
        if (addedReact === false) {
          if (!window.React) window.React = JSONX.__getReact();
          if (!window.ReactDOM) window.ReactDOM = JSONX.__getReactDOM();
          addedReact = true;
        }
        insertJavaScript({
          name,
          src: umdFilePath,
          async: true,
          onload: () => {
            returnedFile = true;
            // console.log('LOADED SCRIPT', umdFilePath);
            resolve(umdFilePath);
          }
        });
      } else resolve(true);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

export async function getReactLibrariesAndComponents({
  customComponents
}) {
  const componentLibraries = {};
  const reactComponents = {};

  await Promise.all(customComponents.map(getComponentPromise));

  customComponents.forEach(customComponent => {
    const {
      type,
      name,
      jsonx,
      options,
      functionBody,
    } = customComponent;
    if (type === 'library') {
      if (jsonx) {
        componentLibraries[name] = Object.keys(jsonx)
          .reduce((result, prop) => {
            const libraryComponent = jsonx[prop];
            const {
              type,
              name,
              jsonxComponent,
              options,
              functionBody,
            } = libraryComponent;
            if (type === 'component') {
              result[name] = JSONX._jsonxComponents.getReactClassComponent(jsonxComponent, options);
            } else {
              result[name] = JSONX._jsonxComponents.getReactFunctionComponent(jsonxComponent, functionBody, options);
            }
            return result;
          }, {});
      } else componentLibraries[name] = window[name];
    } else if (type === 'component') {
      if (jsonx) {
        reactComponents[name] = JSONX._jsonxComponents.getReactClassComponent(jsonx, options);
      } else reactComponents[name] = window[name];
    } else if (type === 'function') {
      if (jsonx) {
        reactComponents[name] = JSONX._jsonxComponents.getReactFunctionComponent(jsonx, functionBody, options);
      } else reactComponents[name] = window[name];
    }
  });

  return {
    componentLibraries,
    reactComponents,
  };
}

export async function addCustomFiles({
  type,
  files
}) {
  return await Promise.all(files.map((file, i) => getFilePromise({
    type,
    file,
    i,
    name: type
  })));
}

export async function configureViewx(options = {}) {
  const configuration = Object.assign({}, config);
  configuration.settings = {
    ...configuration.settings,
    ...options.settings
  };
  // const {
  //   componentLibraries,
  //   reactComponents,
  // } = await getReactLibrariesAndComponents({
  //   customComponents: options.customComponents,
  // });

  const [reactJSONXComponents] = await Promise.all([
    getReactLibrariesAndComponents({
      customComponents: options.customComponents,
    }),
    addCustomFiles({
      type: 'script',
      files: options.customScripts
    }),
    addCustomFiles({
      type: 'style',
      files: options.customStyles
    }),
  ]);
  configuration.componentLibraries = reactJSONXComponents.componentLibraries;
  configuration.reactComponents = reactJSONXComponents.reactComponents;

  return configuration;
}