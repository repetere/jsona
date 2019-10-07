import ReactDOM from "react-dom";

// @ts-ignore
export function setHTMLElementClass({ element, className, }) {
  if (element.classList && element.classList.add) {
    element.classList.add(className);
  } else if (element.className) {
    element.className = element.className += className;
  }
  // if(window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('Trident') !== -1) {
  //   document.body.style.zoom = 1;
  // }
}

export function setBodyPathnameId(pathname:string) {
  if (document && document.body && document.body.setAttribute) {
    document.body.setAttribute('id', encodeURIComponent(pathname).replace(new RegExp(/%2F|%2/, 'g'), '_'));
  } 
}

// @ts-ignore
export function insertJavaScript({ src, name, async = true, onload }) {
  (function(d, s, id) {
    const tagId = `viewx-script-${id}`;
    if (d.getElementById(id)) return;
    const s0: Node | null = d.getElementsByTagName(s)[0];
    const j = d.createElement(s);
    // @ts-ignore
    j.async = async;
    j.id = tagId;
    // @ts-ignore
    j.type = "text/javascript";
    // @ts-ignore
    j.src = src;
    j.onload = onload;
    // @ts-ignore
    if (s0) s0.parentNode.insertBefore(j, s0);
    else document.head.prepend(j);
  })(document || window.document, "script", name);
}

// @ts-ignore
export function insertStyleSheet({ src, name, onload }) {
  (function(d, l, id) {
    const tagId = `viewx-style-${id}`;
    if (d.getElementById(id)) return;
    const s0 = d.getElementsByTagName(l)[0];
    const ss = d.createElement(l);
    ss.id = tagId;
    // @ts-ignore
    ss.rel = "stylesheet";
    // @ts-ignore
    ss.type = "text/css";
    // @ts-ignore
    ss.href = src;
    ss.onload = onload;
    // @ts-ignore
    if (s0) s0.parentNode.insertBefore(ss, s0);
    else document.head.prepend(ss);
  })(document || window.document, "link", name);
}

// @ts-ignore
export function createLayer({ layer, app }) {
  const { name, type, order } = layer;
  const selector = `#${name}`;
  let layerDOM = document.querySelector(selector);
  if (!layerDOM) {
    const domEl = document.createElement("div");
    domEl.setAttribute("id", name);
    document.body.appendChild(domEl);
    domEl.style.zIndex = order;
    layerDOM = domEl;
  }
  if (type === "applicationRoot") {
    ReactDOM.render(app, layerDOM);
  }
}

// @ts-ignore
export function getElementSelector({ tagName, attributes = {} }) {
  return `${tagName}${Object.keys(attributes)
    // @ts-ignore
    .map(attr => `[${attr}="${attributes[attr]}"]`)
    .join()}`;
}

export async function setPageAttributes({ pageData = [] }) {
  pageData.forEach(pageDatum => {
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
