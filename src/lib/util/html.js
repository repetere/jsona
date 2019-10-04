import ReactDOM from "react-dom";

export function setDocumentBodyClass(config = {}) {
  const {
    settings = {
      application: {
        html: {},
      },
    },
  } = config;
  if (settings.application.html.useBodyLoadedClass) {
    const bodyClass = settings.application.html.bodyLoadedClass;
    const htmlClass = settings.application.html.htmlLoadedClass;
    try {
      document.body.classList.add(bodyClass);
    } catch (e) {
      document.body.className = document.body.className += bodyClass;
    }
    try {
      document.querySelector('html').classList.add(htmlClass);
    } catch (e) {
      document.querySelector('html').className = document.querySelector('html').className += htmlClass;
    }
  }
}

export function setBodyPathnameId(config = {}) {
  const {
    settings = {
      application: {
        html: {},
      },
    }, pathname = '__rajax',
  } = config;

  if (settings.application.html.setBodyPathnameID && document && document.body && document.body.setAttribute) {
    document.body.setAttribute('id', encodeURIComponent(`__rajax__${pathname}`).replace(new RegExp(/%2F|%2/, 'g'), '_'));
  }
}

export function insertJavaScript({
  src,
  name,
  async = true,
  onload,
}) {
  (function (d, s, id) {
    const tagId = `viewx-script-${id}`;
    if (d.getElementById(id)) return;
    const s0 = d.getElementsByTagName(s)[0];
    const j = d.createElement(s);
    j.async = async;
    j.id = tagId;
    j.type = 'text/javascript';
    j.src = src;
    j.onload = onload;
    s0.parentNode.insertBefore(j, s0);
  }(document || window.document, 'script', name));
}

export function insertStyleSheet({
  src,
  name,
  onload,
}) {
  (function (d, l, id) {
    const tagId = `viewx-style-${id}`;
    if (d.getElementById(id)) return;
    const s0 = d.getElementsByTagName(l)[0];
    const ss = d.createElement(l);
    ss.id = tagId;
    ss.rel = 'stylesheet';
    ss.type = 'text/css';
    ss.href = src;
    ss.onload = onload;
    s0.parentNode.insertBefore(ss, s0);
  }(document || window.document, 'link', name));
}

export function createLayer({
  layer,
  app
}) {
  const {
    name,
    type,
    order,
  } = layer;
  const selector = `#${name}`;
  let layerDOM = document.querySelector(selector);
  if (!layerDOM) {
    const domEl = document.createElement('div');
    domEl.setAttribute('id', name);
    document.body.appendChild(domEl);
    domEl.style.zIndex = order;
    layerDOM = domEl;
  }
  if (type === 'applicationRoot') {
    ReactDOM.render(app, layerDOM);
  }
}

export function getElementSelector({
  tagName,
  attributes = {}
}) {
  return `${tagName}${Object
    .keys(attributes)
    .map(attr=>`[${attr}="${attributes[attr]}"]`)
    .join()}`;
}

export async function setPageAttributes({
  pageData = [],
}) {
  pageData.forEach(pageDatum => {
    const {
      attributes,
      tagName,
      innerHTML,
    } = pageDatum;
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