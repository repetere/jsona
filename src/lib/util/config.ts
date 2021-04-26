// @ts-ignore
// import * as JSONX from "jsonx/src/index";
// import * as JSONX from "jsonx/dist/index.esm";
import { _jsonxComponents, __getReact, __getReactDOM, } from "jsonx";
// import { _jsonxComponents, __getReact, __getReactDOM, } from "jsonx/dist/index.esm";
// import { _jsonxComponents, __getReact, __getReactDOM, } from "jsonx/src/index";

// import * as JSONX from "jsonx";

// import * as JSONX from "jsonx";
import { config } from "../defaults/config";
import { insertJavaScript, insertStyleSheet } from "./html";
import {
  JSONAOptions,
  VXAConfig,
  VXALayer,
  VXAComponent,
} from "../../../types";
import { jsonxLibrary } from 'jsonx/src/types/jsonx';

import {
  customFileType,
  librariesAndComponents,
  VXALayerObject
} from "../../internal_types/config";

declare global {
  interface Window {
    [index: string]: any;
  }
}

let addedReact: boolean = false;

export function getFilePromise({
  type,
  file,
  i,
  name
}: {
  type: string;
  file: string;
  i: number;
  name: string;
}): Promise<boolean | string> {
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

export function getComponentPromise(
  customComponent: VXAComponent
): Promise<string | boolean> {
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
        stylesheets.forEach((stylesheet, i) =>
          insertStyleSheet({
            src: stylesheet,
            name: `${name}-${i}`
          })
        );
      }
      if (umdFilePath) {
        if (addedReact === false) {
          if (!window.React) window.React = __getReact();
          if (!window.ReactDOM) window.ReactDOM = __getReactDOM();
          addedReact = true;
        }
        insertJavaScript({
          name,
          src: umdFilePath,
          async: true,
          onload: () => {
            returnedFile = true;
            // console.log("LOADED SCRIPT", { umdFilePath, name, });
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
}: {
  customComponents?: VXAComponent[];
}): Promise<librariesAndComponents> {
  const componentLibraries: VXAConfig["componentLibraries"] = {};
  const reactComponents: VXAConfig["reactComponents"] = {};

  if (customComponents && customComponents.length) {
    await Promise.all(customComponents.map(getComponentPromise));
    customComponents.forEach(customComponent => {
      const { type, name, jsonx, options, functionBody } = customComponent;
      if (type === "library") {
        if (jsonx) {
          componentLibraries[name] = Object.keys(jsonx).reduce(
            (result: jsonxLibrary, prop: string) => {
              const libraryComponent:VXAComponent = jsonx[prop];
              const {
                type,
                name,
                jsonxComponent,
                options,
                functionBody
              } = libraryComponent;
              if (type === "component") {
                result[name] = _jsonxComponents.getReactClassComponent(
                  jsonxComponent,
                  options
                );
              } else {
                result[name] = _jsonxComponents.getReactFunctionComponent(
                  jsonxComponent,
                  functionBody,
                  options
                );
              }
              return result;
            },
            {}
          );
        } else componentLibraries[name] = window[name];
      } else if (type === "component") {
        if (jsonx) {
          reactComponents[name] = _jsonxComponents.getReactClassComponent(
            jsonx,
            options
          );
        } else reactComponents[name] = window[name];
      } else if (type === "function") {
        if (jsonx) {
          reactComponents[
            name
          ] = _jsonxComponents.getReactFunctionComponent(
            jsonx,
            functionBody,
            options
          );
        } else reactComponents[name] = window[name];
      }
    });
  }

  return {
    componentLibraries,
    reactComponents
  };
}

export async function addCustomFiles({
  type,
  files
}: {
  type: string;
  files: string[] | undefined;
}): Promise<string[] | any> {
  if (!files || !files.length) return [];
  return await Promise.all(
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

export async function configureViewx(
  options: JSONAOptions = {}
): Promise<VXAConfig> {
  let layerMaxOrder = 0;
  let applicationRootLayerName;
  const configuration: VXAConfig = { ...config };
  configuration.settings = {
    ...configuration.settings,
    ...options.settings,
    routes: {
      ...configuration.settings.routes,
      ...options.settings.routes
    }
  };
  configuration.Functions = {
    ...configuration.Functions,
    ...options.customFunctions
  };
  configuration.layers = configuration.layers || [];
  // const allLayers = [[],configuration.layers, options.layers].flat();
  const allLayers = [];
  allLayers.push(...configuration.layers);
  allLayers.push(...(options.layers || []));
  const layerObject: VXALayerObject = allLayers.reduce(
    (result: VXALayerObject, layerObject: VXALayer) => {
      const { order, name, type } = layerObject;
      if (order > layerMaxOrder) layerMaxOrder = order;
      if (type === "applicationRoot") applicationRootLayerName = name;
      result[name] = layerObject;
      return result;
    },
    {}
  );
  if (!applicationRootLayerName)
    throw ReferenceError("Invalid/Missing ApplicationRoot Layer");
  if (layerObject[applicationRootLayerName].order !== layerMaxOrder)
    layerObject[applicationRootLayerName].order = layerMaxOrder + 1;
  configuration.layers = Object.keys(layerObject).map(
    (layerName: string) => layerObject[layerName]
  );
  await addCustomFiles({
    type: customFileType.script,
    files: options.initialScripts
  });
  const [reactJSONXComponents] = await Promise.all([
    getReactLibrariesAndComponents({
      customComponents: options.customComponents
    }),
    addCustomFiles({
      type: customFileType.script,
      files: options.customScripts
    }),
    addCustomFiles({
      type: customFileType.style,
      files: options.customStyles
    })
  ]);

  configuration.componentLibraries = reactJSONXComponents.componentLibraries;
  configuration.reactComponents = reactJSONXComponents.reactComponents;

  return configuration;
}
