import pluralize from 'pluralize';
import numeral from 'numeral';
import capitalize from 'capitalize';
import moment from 'moment';

export function setWindowProperties(options) {
  const { settings = { application: { state: {},},}, store, } = options;
  window.__rajax = Object.assign({},window.__rajax);
  if (settings.application.state.useWindowStateDebugging) {
    window.__rajaxStore = store;
  }
  window.__rajaxUtils = {
    pluralize,
    numeral,
    capitalize,
    moment,
  };  
}