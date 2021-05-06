// import * as JSONX from "jsonx/src/index";
// import * as JSONX from "jsonx/dist/index.esm";
//@ts-ignore
import { _jsonxComponents, __getReact, __getReactDOM, } from "jsonx";
import { config } from "../defaults/config";
import { insertJavaScript, insertStyleSheet } from "./html";
import {
  JSONAOptions,
  VXAConfig,
  VXALayer,
  VXAComponent,
  VXAComponentTypes,
  VXAComponentFormats,
  VXAComponentPromiseParams,
} from "../../types";
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

/**
 * Inserts either a stylesheet or javascript in the DOM
 * @param {'script'|'style'} options.type The type of file to inject into the DOM
 * @param {string} options.file The URI of the file to insert
 * @param {number} options.i Index of file to insert
 * @param {string} options.name Script name identifier
 * @param {object} options.doc HTML DOM
 * @returns {Promise} an async function that appends files to the DOM
 * @example
const output = await getFilePromise({ 
  type: 'script',
  file:'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js',
  i: 0,
  name: 'ReactBootstrap',
  timeoutMilliseconds: 10000,
  doc: window.document,
}) // => true
 */
export function getFilePromise({
  type,
  file,
  i,
  name,
  timeoutMilliseconds = 60000,
  doc,
}: {
  type: string;
  file: string;
  i: number;
  name: string;
  timeoutMilliseconds?: number;
  doc?: HTMLDocument;
}): Promise<boolean | string> {
  return new Promise((resolve, reject) => {
    try {
      let returnedFile = false;
      const onload = () => {
        returnedFile = true;
        // console.log('LOADED SCRIPT', umdFilePath);
        resolve(file);
      };
      const t = setTimeout(() => {
        clearTimeout(t);
        if (returnedFile === false)
          throw new Error("Timeout loading file: " + file);
      }, timeoutMilliseconds);
      if (type === "script") {
        insertJavaScript({
          name: `${name}-${i}`,
          src: file,
          async: true,
          onload,
          doc,
        });
      } else if (type === "style") {
        insertStyleSheet({
          src: file,
          name: `${name}-${i}`,
          onload,
          doc,
        });
      } else resolve(true);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
}

/**
 * inserts javascript and stylesheets for additional react components
 * @param {string} customComponent.name module name
 * @param {string='umd' | string='jsonx'} customComponent.format type of module to add
 * @param {string='component' | string='library' | string='function'} customComponent.type defining what to add to JSONX either a component, a component library of a functional component
 * @param {string} customComponent.umdFilePath URI of umd module
 * @param {object} customComponent.jsonx JXM JSON component definition
 * @param {object} customComponent.jsonxComponent JXM JSON component definition
 * @param {string[]} customComponent.stylesheets CSS stylesheets associated with component
 * @param {object} customComponent.options options
 * @param {string} customComponent.functionBody function body for component
 * @param {object} options.HTMLDocument HTML DOM
 * @returns {Promise} a reach component
 * @example
  const file = 'https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js';
  const css = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
  const output = await getComponentPromise({ 
    umdFilePath: file,
    name: 'ReactBootstrap',
    timeoutMilliseconds: 5000,
    stylesheets:[css],
    HTMLDocument: window.document,
  }) //=> file
 */
export function getComponentPromise(
  customComponent: VXAComponentPromiseParams
): Promise<string | boolean> {
  return new Promise((resolve, reject) => {
    let returnedFile = false;
    try {
      const {
        // type,
        timeoutMilliseconds = 60000,
        HTMLDocument,
        umdFilePath,
        name,
        stylesheets = []
      } = customComponent;
      if (umdFilePath) {
        let t = setTimeout(() => {
          clearTimeout(t);
          if (returnedFile === false)
            throw new Error(`Timeout (${timeoutMilliseconds}ms) loading file:  ${umdFilePath}`);
        }, timeoutMilliseconds);
      }
      if (stylesheets.length) {
        stylesheets.forEach((stylesheet, i) =>
          insertStyleSheet({
            src: stylesheet,
            name: `${name}-${i}`,
            doc: HTMLDocument,
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
          doc: HTMLDocument,
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

/**
 * Add custom components to jsona's JSONX instance
 * @param {VXAComponent[]} customComponents array of components to add to jsona 
 * @returns {librariesAndComponents} reactComponents and componentLibraries to add to JSONX
 */
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
      } else if (type === "function" || typeof functionBody ==='function') {
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
