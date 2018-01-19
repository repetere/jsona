
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