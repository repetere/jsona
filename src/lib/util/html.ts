// import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { VXALayer, pageAttribute, } from "../../types";
import { insertScriptParams } from "../../internal_types/config";

/**
 * add class to html element
 * @param options.element - html element to modify
 * @param options.className - css class to add
 */
export function setHTMLElementClass({
  element,
  className
}: {
  element: HTMLElement | null;
  className: string;
}) {
  if (element && element.classList && element.classList.add) {
    element.classList.add(className);
  } else if (element && element.className) {
    element.className = element.className += className;
  }
  // if(window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('Trident') !== -1) {
  //   document.body.style.zoom = 1;
  // }
}

/**
 * set id attribute on body based on pathname
 * @param pathname - vxa template layer route
 */
export function setBodyPathnameId(pathname: string): void {
  if (document && document.body && document.body.setAttribute) {
    document.body.setAttribute(
      "id",
      encodeURIComponent(pathname).replace(new RegExp(/%2F|%2/, "g"), "_")
    );
  }
}

export function insertJavaScript({
  src,
  name,
  async = true,
  onload,
  doc,
}: insertScriptParams): void {
  (function(HTMLDocument, ElementTagName, id) {
    const tagId = `viewx-script-${id}`;
    if (HTMLDocument.getElementById(id)) return;
    const firstHTMLDocumentScript: Node | null = HTMLDocument.getElementsByTagName(ElementTagName)[0];
    const newScript: HTMLElement = HTMLDocument.createElement(ElementTagName);
    newScript.setAttribute("async", async.toString());
    newScript.id = tagId;
    newScript.setAttribute("type", "text/javascript");
    newScript.setAttribute("src", src);
    if (src.includes('://')) {
      const a = HTMLDocument.createElement('a');
      a.setAttribute('ref', src);
      if (a.origin !== window.location.origin) newScript.setAttribute('crossorigin', 'true');
    }
    if (onload) newScript.onload = onload;
    // @ts-ignore
    if (firstHTMLDocumentScript) firstHTMLDocumentScript.parentNode.insertBefore(newScript, firstHTMLDocumentScript);
    else HTMLDocument.head.prepend(newScript);
  })(doc || document || window.document, "script", name);
}

export function insertStyleSheet({ src, name, onload, doc }: insertScriptParams) {
  (function(HTMLDocument, ElementTagName, id) {
    const tagId = `viewx-style-${id}`;
    if (HTMLDocument.getElementById(id)) return;
    const firstHTMLDocumentStylesheet = HTMLDocument.getElementsByTagName(ElementTagName)[0];
    const newStyleSheet: HTMLElement = HTMLDocument.createElement(ElementTagName);
    newStyleSheet.id = tagId;
    newStyleSheet.setAttribute("rel", "stylesheet");
    newStyleSheet.setAttribute("type", "text/css");
    newStyleSheet.setAttribute("href", src);
    if (onload) newStyleSheet.onload = onload;
    if (firstHTMLDocumentStylesheet && firstHTMLDocumentStylesheet.parentNode) firstHTMLDocumentStylesheet.parentNode.insertBefore(newStyleSheet, firstHTMLDocumentStylesheet);
    else HTMLDocument.head.prepend(newStyleSheet);
  })(doc || document || window.document, "link", name);
}

export function createLayer({
  layer,
  app,
  querySelector,
}: {
  layer: VXALayer;
  app?: JSX.Element;
  querySelector?: string;
}): void {
  const { name, type, order, idSelector, } = layer;
  const selector = `#${idSelector || name}`;
  const layerName = idSelector || name;
  const baseElement: HTMLElement = querySelector && querySelector !== 'root'
    ? document.querySelector(querySelector) || document.body
    : document.body;
  // const baseElement= document.body;
  let layerDOM = document.querySelector(selector);
  if (!layerDOM) {
    const domEl = document.createElement("div");
    domEl.setAttribute("id", layerName);
    domEl.setAttribute('class',`vxa_layer vxa_layer_name_${name} vxa_layer_type_${type}`);
    baseElement.appendChild(domEl);
    domEl.style.zIndex = String(order);
    layerDOM = domEl;
  }
  if (type === "applicationRoot" && app) {
    ReactDOM.render(app, layerDOM);
  }
}

export function getElementSelector({
  tagName,
  attributes = {}
}: {
  tagName: string;
  attributes?: { [index: string]: string };
}): string {
  return `${tagName}${Object.keys(attributes)
    .map(attr => `[${attr}="${attributes[attr]}"]`)
    .join()}`;
}

export async function setPageAttributes({
  pageData = []
}: {
  pageData?: pageAttribute[];
}): Promise<void> {
  pageData.forEach((pageDatum: pageAttribute) => {
    const { attributes, tagName, innerHTML } = pageDatum;
    const selector = getElementSelector(pageDatum);
    const el = document.querySelector(selector);
    const element = el || document.createElement(tagName);
    // if(!el) el.setAttribute()
    if (innerHTML) element.innerHTML = innerHTML;
    if (attributes && Object.keys(attributes).length) {
      Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
      });
    }
    if (!el) document.head.appendChild(element);
  });
}
