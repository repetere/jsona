// @ts-ignore
import * as JSONX from "jsonx/src/main";
import { config } from "../defaults/config";
import { insertJavaScript, insertStyleSheet } from "./html";
let addedReact = false;
// @ts-ignore
export function getFilePromise({ type, file, i, name }) {
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
        if (returnedFile === false)
          throw new Error("Timeout loading file: " + file);
      }, 60000);
      if (type === "script") {
        insertJavaScript({
          name: `${name}-${i}`,
          src: file,
          async: true,
          onload
        });
      } else if (type === "style") {
        insertStyleSheet({
          src: file,
          name: `${name}-${i}`,
          onload
        });
      } else resolve(true);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}
// @ts-ignore
export function getComponentPromise(customComponent) {
  return new Promise((resolve, reject) => {
    let returnedFile = false;
    try {
      const {
        // type,
        umdFilePath,
        name,
        stylesheets = []
      } = customComponent;
      if (umdFilePath) {
        let t = setTimeout(() => {
          clearTimeout(t);
          if (returnedFile === false)
            throw new Error("Timeout loading file: " + umdFilePath);
        }, 60000);
      }
      if (stylesheets.length) {
        // @ts-ignore
        stylesheets.forEach((stylesheet, i) =>
          // @ts-ignore
          insertStyleSheet({
            src: stylesheet,
            name: `${name}-${i}`
          })
        );
      }
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

// @ts-ignore
export async function getReactLibrariesAndComponents({ customComponents }) {
  const componentLibraries = {};
  const reactComponents = {};

  await Promise.all(customComponents.map(getComponentPromise));

  // @ts-ignore
  customComponents.forEach(customComponent => {
    const { type, name, jsonx, options, functionBody } = customComponent;
    if (type === "library") {
      if (jsonx) {
        // @ts-ignore
        componentLibraries[name] = Object.keys(jsonx).reduce((result, prop) => {
          const libraryComponent = jsonx[prop];
          const {
            type,
            name,
            jsonxComponent,
            options,
            functionBody
          } = libraryComponent;
          if (type === "component") {
            // @ts-ignore
            result[name] = JSONX._jsonxComponents.getReactClassComponent(
              jsonxComponent,
              options
            );
          } else {
            // @ts-ignore
            result[name] = JSONX._jsonxComponents.getReactFunctionComponent(
              jsonxComponent,
              functionBody,
              options
            );
          }
          return result;
        }, {});
        // @ts-ignore
      } else componentLibraries[name] = window[name];
    } else if (type === "component") {
      if (jsonx) {
        // @ts-ignore
        reactComponents[name] = JSONX._jsonxComponents.getReactClassComponent(
          jsonx,
          options
        );
        // @ts-ignore
      } else reactComponents[name] = window[name];
    } else if (type === "function") {
      if (jsonx) {
        // @ts-ignore
        reactComponents[
          name
        ] = JSONX._jsonxComponents.getReactFunctionComponent(
          jsonx,
          functionBody,
          options
        );
        // @ts-ignore
      } else reactComponents[name] = window[name];
    }
  });

  return {
    componentLibraries,
    reactComponents
  };
}

// @ts-ignore
export async function addCustomFiles({ type, files }) {
  return await Promise.all(
    // @ts-ignore
    files.map((file, i) =>
      getFilePromise({
        type,
        file,
        i,
        name: type
      })
    )
  );
}

export async function configureViewx(options = {}) {
  const configuration = Object.assign({}, config);
  configuration.settings = {
    ...configuration.settings,
    // @ts-ignore
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
      // @ts-ignore
      customComponents: options.customComponents
    }),
    addCustomFiles({
      type: "script",
      // @ts-ignore
      files: options.customScripts
    }),
    addCustomFiles({
      type: "style",
      // @ts-ignore
      files: options.customStyles
    })
  ]);
  configuration.componentLibraries = reactJSONXComponents.componentLibraries;
  configuration.reactComponents = reactJSONXComponents.reactComponents;

  return configuration;
}
