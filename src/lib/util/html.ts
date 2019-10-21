// import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { VXALayer, pageAttribute, } from "../../../types";
import { insertScriptParams } from '../../internal_types/config';

/**
 * add class to html element
 * @param options.element - html element to modify 
 * @param options.className - css class to add
 */
export function setHTMLElementClass({ element, className, }: { element: HTMLElement|null; className: string;}) {
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
export function setBodyPathnameId(pathname:string):void {
  if (document && document.body && document.body.setAttribute) {
    document.body.setAttribute('id', encodeURIComponent(pathname).replace(new RegExp(/%2F|%2/, 'g'), '_'));
  } 
}

export function insertJavaScript({ src, name, async = true, onload }: insertScriptParams):void {
  (function(d, s, id) {
    const tagId = `viewx-script-${id}`;
    if (d.getElementById(id)) return;
    const s0: Node | null = d.getElementsByTagName(s)[0];
    const j:HTMLElement = d.createElement(s);
    j.setAttribute('async',async.toString());
    j.id = tagId;
    j.setAttribute('type',"text/javascript");
    j.setAttribute('src',src);
    if(onload) j.onload = onload;
    // @ts-ignore
    if (s0) s0.parentNode.insertBefore(j, s0);
    else document.head.prepend(j);
  })(document || window.document, "script", name);
}

export function insertStyleSheet({ src, name, onload }: insertScriptParams) {
  (function(d, l, id) {
    const tagId = `viewx-style-${id}`;
    if (d.getElementById(id)) return;
    const s0 = d.getElementsByTagName(l)[0];
    const ss:HTMLElement = d.createElement(l);
    ss.id = tagId;
    ss.setAttribute('rel', "stylesheet");
    ss.setAttribute('type', "text/css");
    ss.setAttribute('href', src);
    if (onload) ss.onload = onload;
    if (s0 && s0.parentNode) s0.parentNode.insertBefore(ss, s0);
    else document.head.prepend(ss);
  })(document || window.document, "link", name);
}

export function createLayer({ layer, app }:{layer:VXALayer,app?:JSX.Element}):void {
  const { name, type, order } = layer;
  const selector = `#${name}`;
  let layerDOM = document.querySelector(selector);
  if (!layerDOM) {
    const domEl = document.createElement("div");
    domEl.setAttribute("id", name);
    document.body.appendChild(domEl);
    domEl.style.zIndex = String(order);
    layerDOM = domEl;
  }
  if (type === "applicationRoot" && app) {
    ReactDOM.render(app, layerDOM);
  }
}

export function getElementSelector({ tagName, attributes = {} }: { tagName: string; attributes: { [index: string]: string; } }): string {
  return `${tagName}${Object.keys(attributes)
    .map(attr => `[${attr}="${attributes[attr]}"]`)
    .join()}`;
}

export async function setPageAttributes({ pageData = [] }: { pageData: pageAttribute[];}):Promise<void> {
  pageData.forEach((pageDatum:pageAttribute) => {
    const { attributes, tagName, innerHTML } = pageDatum;
    const selector = getElementSelector(pageDatum);
    const el = document.querySelector(selector);
    const element = el || document.createElement(tagName);
    // if(!el) el.setAttribute()
    if (innerHTML) element.innerHTML = innerHTML;
    Object.keys(attributes).forEach(attr => {
      element.setAttribute(attr, attributes[attr]);
    });
    if (!el) document.head.appendChild(element);
  });
}
