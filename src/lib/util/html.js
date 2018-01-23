
export function setDocumentBodyClass(options = {}) {
  const { settings = { application: { html: {}, }, }, } = options;
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

export function setBodyPathnameId(options = {}) {
  const { settings = { application: { html: {}, }, }, pathname='__rajax', } = options;

  if (settings.application.html.setBodyPathnameID && document && document.body && document.body.setAttribute) {
    document.body.setAttribute('id', encodeURIComponent(`__rajax__${pathname}`).replace(new RegExp(/%2F|%2/, 'g'), '_'));
  } 
}