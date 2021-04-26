(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('luxon')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'luxon'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((typeof global!=="undefined" ? global : window).jsona = {}, (typeof global!=="undefined" ? global : window).React, (typeof global!=="undefined" ? global : window).ReactDOM, (typeof global!=="undefined" ? global : window).luxon));
}(this, (function (exports, React, ReactDOM, luxon) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
	var luxon__namespace = /*#__PURE__*/_interopNamespace(luxon);

	var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$2.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols$1) {
				symbols = getOwnPropertySymbols$1(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/** @license React v17.0.2
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
	var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React__default['default'].__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
	});

	var jsxRuntime = createCommonjsModule(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
	});

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  _setPrototypeOf(subClass, superClass);
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */



	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var propTypes = createCommonjsModule(function (module) {
	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function isAbsolute$1(pathname) {
	  return pathname.charAt(0) === '/';
	}

	// About 1.5x faster than the two-arg version of Array#splice()
	function spliceOne$1(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
	    list[i] = list[k];
	  }

	  list.pop();
	}

	// This implementation is based heavily on node's url.parse
	function resolvePathname(to, from) {
	  if (from === undefined) from = '';

	  var toParts = (to && to.split('/')) || [];
	  var fromParts = (from && from.split('/')) || [];

	  var isToAbs = to && isAbsolute$1(to);
	  var isFromAbs = from && isAbsolute$1(from);
	  var mustEndAbs = isToAbs || isFromAbs;

	  if (to && isAbsolute$1(to)) {
	    // to is absolute
	    fromParts = toParts;
	  } else if (toParts.length) {
	    // to is relative, drop the filename
	    fromParts.pop();
	    fromParts = fromParts.concat(toParts);
	  }

	  if (!fromParts.length) return '/';

	  var hasTrailingSlash;
	  if (fromParts.length) {
	    var last = fromParts[fromParts.length - 1];
	    hasTrailingSlash = last === '.' || last === '..' || last === '';
	  } else {
	    hasTrailingSlash = false;
	  }

	  var up = 0;
	  for (var i = fromParts.length; i >= 0; i--) {
	    var part = fromParts[i];

	    if (part === '.') {
	      spliceOne$1(fromParts, i);
	    } else if (part === '..') {
	      spliceOne$1(fromParts, i);
	      up++;
	    } else if (up) {
	      spliceOne$1(fromParts, i);
	      up--;
	    }
	  }

	  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

	  if (
	    mustEndAbs &&
	    fromParts[0] !== '' &&
	    (!fromParts[0] || !isAbsolute$1(fromParts[0]))
	  )
	    fromParts.unshift('');

	  var result = fromParts.join('/');

	  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

	  return result;
	}

	var prefix = 'Invariant failed';
	function invariant(condition, message) {
	    if (condition) {
	        return;
	    }
	    {
	        throw new Error(prefix);
	    }
	}

	function addLeadingSlash$1(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	}
	function stripLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path.substr(1) : path;
	}
	function hasBasename(path, prefix) {
	  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
	}
	function stripBasename$1(path, prefix) {
	  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
	}
	function stripTrailingSlash(path) {
	  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
	}
	function parsePath(path) {
	  var pathname = path || '/';
	  var search = '';
	  var hash = '';
	  var hashIndex = pathname.indexOf('#');

	  if (hashIndex !== -1) {
	    hash = pathname.substr(hashIndex);
	    pathname = pathname.substr(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');

	  if (searchIndex !== -1) {
	    search = pathname.substr(searchIndex);
	    pathname = pathname.substr(0, searchIndex);
	  }

	  return {
	    pathname: pathname,
	    search: search === '?' ? '' : search,
	    hash: hash === '#' ? '' : hash
	  };
	}
	function createPath(location) {
	  var pathname = location.pathname,
	      search = location.search,
	      hash = location.hash;
	  var path = pathname || '/';
	  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
	  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
	  return path;
	}

	function createLocation(path, state, key, currentLocation) {
	  var location;

	  if (typeof path === 'string') {
	    // Two-arg form: push(path, state)
	    location = parsePath(path);
	    location.state = state;
	  } else {
	    // One-arg form: push(location)
	    location = _extends({}, path);
	    if (location.pathname === undefined) location.pathname = '';

	    if (location.search) {
	      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
	    } else {
	      location.search = '';
	    }

	    if (location.hash) {
	      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
	    } else {
	      location.hash = '';
	    }

	    if (state !== undefined && location.state === undefined) location.state = state;
	  }

	  try {
	    location.pathname = decodeURI(location.pathname);
	  } catch (e) {
	    if (e instanceof URIError) {
	      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
	    } else {
	      throw e;
	    }
	  }

	  if (key) location.key = key;

	  if (currentLocation) {
	    // Resolve incomplete/relative pathname relative to current location.
	    if (!location.pathname) {
	      location.pathname = currentLocation.pathname;
	    } else if (location.pathname.charAt(0) !== '/') {
	      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
	    }
	  } else {
	    // When there is no prior location and pathname is empty, set it to /
	    if (!location.pathname) {
	      location.pathname = '/';
	    }
	  }

	  return location;
	}

	function createTransitionManager() {
	  var prompt = null;

	  function setPrompt(nextPrompt) {
	    prompt = nextPrompt;
	    return function () {
	      if (prompt === nextPrompt) prompt = null;
	    };
	  }

	  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
	    // TODO: If another transition starts while we're still confirming
	    // the previous one, we may end up in a weird state. Figure out the
	    // best way to handle this.
	    if (prompt != null) {
	      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

	      if (typeof result === 'string') {
	        if (typeof getUserConfirmation === 'function') {
	          getUserConfirmation(result, callback);
	        } else {
	          callback(true);
	        }
	      } else {
	        // Return false from a transition hook to cancel the transition.
	        callback(result !== false);
	      }
	    } else {
	      callback(true);
	    }
	  }

	  var listeners = [];

	  function appendListener(fn) {
	    var isActive = true;

	    function listener() {
	      if (isActive) fn.apply(void 0, arguments);
	    }

	    listeners.push(listener);
	    return function () {
	      isActive = false;
	      listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function notifyListeners() {
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    listeners.forEach(function (listener) {
	      return listener.apply(void 0, args);
	    });
	  }

	  return {
	    setPrompt: setPrompt,
	    confirmTransitionTo: confirmTransitionTo,
	    appendListener: appendListener,
	    notifyListeners: notifyListeners
	  };
	}

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function getConfirmation(message, callback) {
	  callback(window.confirm(message)); // eslint-disable-line no-alert
	}
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = window.navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	  return window.history && 'pushState' in window.history;
	}
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */

	function supportsPopStateOnHashChange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	}
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	}
	/**
	 * Returns true if a given popstate event is an extraneous WebKit event.
	 * Accounts for the fact that Chrome on iOS fires real popstate events
	 * containing undefined state when pressing the back button.
	 */

	function isExtraneousPopstateEvent(event) {
	  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
	}

	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';

	function getHistoryState() {
	  try {
	    return window.history.state || {};
	  } catch (e) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    return {};
	  }
	}
	/**
	 * Creates a history object that uses the HTML5 history API including
	 * pushState, replaceState, and the popstate event.
	 */


	function createBrowserHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ? invariant(false) : void 0;
	  var globalHistory = window.history;
	  var canUseHistory = supportsHistory();
	  var needsHashChangeListener = !supportsPopStateOnHashChange();
	  var _props = props,
	      _props$forceRefresh = _props.forceRefresh,
	      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : '';

	  function getDOMLocation(historyState) {
	    var _ref = historyState || {},
	        key = _ref.key,
	        state = _ref.state;

	    var _window$location = window.location,
	        pathname = _window$location.pathname,
	        search = _window$location.search,
	        hash = _window$location.hash;
	    var path = pathname + search + hash;
	    if (basename) path = stripBasename$1(path, basename);
	    return createLocation(path, state, key);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function handlePopState(event) {
	    // Ignore extraneous popstate events in WebKit.
	    if (isExtraneousPopstateEvent(event)) return;
	    handlePop(getDOMLocation(event.state));
	  }

	  function handleHashChange() {
	    handlePop(getDOMLocation(getHistoryState()));
	  }

	  var forceNextPop = false;

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of keys we've seen in sessionStorage.
	    // Instead, we just default to 0 for keys we don't know.

	    var toIndex = allKeys.indexOf(toLocation.key);
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allKeys.indexOf(fromLocation.key);
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  }

	  var initialLocation = getDOMLocation(getHistoryState());
	  var allKeys = [initialLocation.key]; // Public interface

	  function createHref(location) {
	    return basename + createPath(location);
	  }

	  function push(path, state) {
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.pushState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.href = href;
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          var nextKeys = allKeys.slice(0, prevIndex + 1);
	          nextKeys.push(location.key);
	          allKeys = nextKeys;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        window.location.href = href;
	      }
	    });
	  }

	  function replace(path, state) {
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var href = createHref(location);
	      var key = location.key,
	          state = location.state;

	      if (canUseHistory) {
	        globalHistory.replaceState({
	          key: key,
	          state: state
	        }, null, href);

	        if (forceRefresh) {
	          window.location.replace(href);
	        } else {
	          var prevIndex = allKeys.indexOf(history.location.key);
	          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
	          setState({
	            action: action,
	            location: location
	          });
	        }
	      } else {
	        window.location.replace(href);
	      }
	    });
	  }

	  function go(n) {
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(PopStateEvent, handlePopState);
	      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	var HashChangeEvent$1 = 'hashchange';
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substr(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: stripLeadingSlash,
	    decodePath: addLeadingSlash$1
	  },
	  slash: {
	    encodePath: addLeadingSlash$1,
	    decodePath: addLeadingSlash$1
	  }
	};

	function stripHash(url) {
	  var hashIndex = url.indexOf('#');
	  return hashIndex === -1 ? url : url.slice(0, hashIndex);
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	}

	function pushHashPath(path) {
	  window.location.hash = path;
	}

	function replaceHashPath(path) {
	  window.location.replace(stripHash(window.location.href) + '#' + path);
	}

	function createHashHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  !canUseDOM ? invariant(false) : void 0;
	  var globalHistory = window.history;
	  supportsGoWithoutReloadUsingHash();
	  var _props = props,
	      _props$getUserConfirm = _props.getUserConfirmation,
	      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
	      _props$hashType = _props.hashType,
	      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
	  var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : '';
	  var _HashPathCoders$hashT = HashPathCoders[hashType],
	      encodePath = _HashPathCoders$hashT.encodePath,
	      decodePath = _HashPathCoders$hashT.decodePath;

	  function getDOMLocation() {
	    var path = decodePath(getHashPath());
	    if (basename) path = stripBasename$1(path, basename);
	    return createLocation(path);
	  }

	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = globalHistory.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  var forceNextPop = false;
	  var ignorePath = null;

	  function locationsAreEqual$$1(a, b) {
	    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
	  }

	  function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = encodePath(path);

	    if (path !== encodedPath) {
	      // Ensure we always have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var location = getDOMLocation();
	      var prevLocation = history.location;
	      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

	      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

	      ignorePath = null;
	      handlePop(location);
	    }
	  }

	  function handlePop(location) {
	    if (forceNextPop) {
	      forceNextPop = false;
	      setState();
	    } else {
	      var action = 'POP';
	      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	        if (ok) {
	          setState({
	            action: action,
	            location: location
	          });
	        } else {
	          revertPop(location);
	        }
	      });
	    }
	  }

	  function revertPop(fromLocation) {
	    var toLocation = history.location; // TODO: We could probably make this more reliable by
	    // keeping a list of paths we've seen in sessionStorage.
	    // Instead, we just default to 0 for paths we don't know.

	    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
	    if (toIndex === -1) toIndex = 0;
	    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
	    if (fromIndex === -1) fromIndex = 0;
	    var delta = toIndex - fromIndex;

	    if (delta) {
	      forceNextPop = true;
	      go(delta);
	    }
	  } // Ensure the hash is encoded properly before doing anything else.


	  var path = getHashPath();
	  var encodedPath = encodePath(path);
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	  var initialLocation = getDOMLocation();
	  var allPaths = [createPath(initialLocation)]; // Public interface

	  function createHref(location) {
	    var baseTag = document.querySelector('base');
	    var href = '';

	    if (baseTag && baseTag.getAttribute('href')) {
	      href = stripHash(window.location.href);
	    }

	    return href + '#' + encodePath(basename + createPath(location));
	  }

	  function push(path, state) {
	    var action = 'PUSH';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a PUSH, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        pushHashPath(encodedPath);
	        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
	        var nextPaths = allPaths.slice(0, prevIndex + 1);
	        nextPaths.push(path);
	        allPaths = nextPaths;
	        setState({
	          action: action,
	          location: location
	        });
	      } else {
	        setState();
	      }
	    });
	  }

	  function replace(path, state) {
	    var action = 'REPLACE';
	    var location = createLocation(path, undefined, undefined, history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var path = createPath(location);
	      var encodedPath = encodePath(basename + path);
	      var hashChanged = getHashPath() !== encodedPath;

	      if (hashChanged) {
	        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
	        // rather setState here and ignore the hashchange. The caveat here
	        // is that other hash histories in the page will consider it a POP.
	        ignorePath = path;
	        replaceHashPath(encodedPath);
	      }

	      var prevIndex = allPaths.indexOf(createPath(history.location));
	      if (prevIndex !== -1) allPaths[prevIndex] = path;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	    globalHistory.go(n);
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  var listenerCount = 0;

	  function checkDOMListeners(delta) {
	    listenerCount += delta;

	    if (listenerCount === 1 && delta === 1) {
	      window.addEventListener(HashChangeEvent$1, handleHashChange);
	    } else if (listenerCount === 0) {
	      window.removeEventListener(HashChangeEvent$1, handleHashChange);
	    }
	  }

	  var isBlocked = false;

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    var unblock = transitionManager.setPrompt(prompt);

	    if (!isBlocked) {
	      checkDOMListeners(1);
	      isBlocked = true;
	    }

	    return function () {
	      if (isBlocked) {
	        isBlocked = false;
	        checkDOMListeners(-1);
	      }

	      return unblock();
	    };
	  }

	  function listen(listener) {
	    var unlisten = transitionManager.appendListener(listener);
	    checkDOMListeners(1);
	    return function () {
	      checkDOMListeners(-1);
	      unlisten();
	    };
	  }

	  var history = {
	    length: globalHistory.length,
	    action: 'POP',
	    location: initialLocation,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	function clamp(n, lowerBound, upperBound) {
	  return Math.min(Math.max(n, lowerBound), upperBound);
	}
	/**
	 * Creates a history object that stores locations in memory.
	 */


	function createMemoryHistory(props) {
	  if (props === void 0) {
	    props = {};
	  }

	  var _props = props,
	      getUserConfirmation = _props.getUserConfirmation,
	      _props$initialEntries = _props.initialEntries,
	      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
	      _props$initialIndex = _props.initialIndex,
	      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
	      _props$keyLength = _props.keyLength,
	      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
	  var transitionManager = createTransitionManager();

	  function setState(nextState) {
	    _extends(history, nextState);

	    history.length = history.entries.length;
	    transitionManager.notifyListeners(history.location, history.action);
	  }

	  function createKey() {
	    return Math.random().toString(36).substr(2, keyLength);
	  }

	  var index = clamp(initialIndex, 0, initialEntries.length - 1);
	  var entries = initialEntries.map(function (entry) {
	    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
	  }); // Public interface

	  var createHref = createPath;

	  function push(path, state) {
	    var action = 'PUSH';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      var prevIndex = history.index;
	      var nextIndex = prevIndex + 1;
	      var nextEntries = history.entries.slice(0);

	      if (nextEntries.length > nextIndex) {
	        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
	      } else {
	        nextEntries.push(location);
	      }

	      setState({
	        action: action,
	        location: location,
	        index: nextIndex,
	        entries: nextEntries
	      });
	    });
	  }

	  function replace(path, state) {
	    var action = 'REPLACE';
	    var location = createLocation(path, state, createKey(), history.location);
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (!ok) return;
	      history.entries[history.index] = location;
	      setState({
	        action: action,
	        location: location
	      });
	    });
	  }

	  function go(n) {
	    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
	    var action = 'POP';
	    var location = history.entries[nextIndex];
	    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
	      if (ok) {
	        setState({
	          action: action,
	          location: location,
	          index: nextIndex
	        });
	      } else {
	        // Mimic the behavior of DOM histories by
	        // causing a render after a cancelled POP.
	        setState();
	      }
	    });
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function canGo(n) {
	    var nextIndex = history.index + n;
	    return nextIndex >= 0 && nextIndex < history.entries.length;
	  }

	  function block(prompt) {
	    if (prompt === void 0) {
	      prompt = false;
	    }

	    return transitionManager.setPrompt(prompt);
	  }

	  function listen(listener) {
	    return transitionManager.appendListener(listener);
	  }

	  var history = {
	    length: entries.length,
	    action: 'POP',
	    location: entries[index],
	    index: index,
	    entries: entries,
	    createHref: createHref,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    canGo: canGo,
	    block: block,
	    listen: listen
	  };
	  return history;
	}

	var global$2 = (typeof global !== "undefined" ? global :
	            typeof self !== "undefined" ? self :
	            typeof window !== "undefined" ? window : {});

	var MAX_SIGNED_31_BIT_INT = 1073741823;
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global$2 !== 'undefined' ? global$2 : {};

	function getUniqueId() {
	  var key = '__global_unique_id__';
	  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
	}

	function objectIs(x, y) {
	  if (x === y) {
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function createEventEmitter(value) {
	  var handlers = [];
	  return {
	    on: function on(handler) {
	      handlers.push(handler);
	    },
	    off: function off(handler) {
	      handlers = handlers.filter(function (h) {
	        return h !== handler;
	      });
	    },
	    get: function get() {
	      return value;
	    },
	    set: function set(newValue, changedBits) {
	      value = newValue;
	      handlers.forEach(function (handler) {
	        return handler(value, changedBits);
	      });
	    }
	  };
	}

	function onlyChild(children) {
	  return Array.isArray(children) ? children[0] : children;
	}

	function createReactContext(defaultValue, calculateChangedBits) {
	  var _Provider$childContex, _Consumer$contextType;

	  var contextProp = '__create-react-context-' + getUniqueId() + '__';

	  var Provider = /*#__PURE__*/function (_Component) {
	    _inheritsLoose(Provider, _Component);

	    function Provider() {
	      var _this;

	      _this = _Component.apply(this, arguments) || this;
	      _this.emitter = createEventEmitter(_this.props.value);
	      return _this;
	    }

	    var _proto = Provider.prototype;

	    _proto.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	    };

	    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (this.props.value !== nextProps.value) {
	        var oldValue = this.props.value;
	        var newValue = nextProps.value;
	        var changedBits;

	        if (objectIs(oldValue, newValue)) {
	          changedBits = 0;
	        } else {
	          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

	          changedBits |= 0;

	          if (changedBits !== 0) {
	            this.emitter.set(nextProps.value, changedBits);
	          }
	        }
	      }
	    };

	    _proto.render = function render() {
	      return this.props.children;
	    };

	    return Provider;
	  }(React.Component);

	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);

	  var Consumer = /*#__PURE__*/function (_Component2) {
	    _inheritsLoose(Consumer, _Component2);

	    function Consumer() {
	      var _this2;

	      _this2 = _Component2.apply(this, arguments) || this;
	      _this2.state = {
	        value: _this2.getValue()
	      };

	      _this2.onUpdate = function (newValue, changedBits) {
	        var observedBits = _this2.observedBits | 0;

	        if ((observedBits & changedBits) !== 0) {
	          _this2.setState({
	            value: _this2.getValue()
	          });
	        }
	      };

	      return _this2;
	    }

	    var _proto2 = Consumer.prototype;

	    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var observedBits = nextProps.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
	    };

	    _proto2.componentDidMount = function componentDidMount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].on(this.onUpdate);
	      }

	      var observedBits = this.props.observedBits;
	      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
	    };

	    _proto2.componentWillUnmount = function componentWillUnmount() {
	      if (this.context[contextProp]) {
	        this.context[contextProp].off(this.onUpdate);
	      }
	    };

	    _proto2.getValue = function getValue() {
	      if (this.context[contextProp]) {
	        return this.context[contextProp].get();
	      } else {
	        return defaultValue;
	      }
	    };

	    _proto2.render = function render() {
	      return onlyChild(this.props.children)(this.state.value);
	    };

	    return Consumer;
	  }(React.Component);

	  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
	  return {
	    Provider: Provider,
	    Consumer: Consumer
	  };
	}

	var index$1 = React__default['default'].createContext || createReactContext;

	var isarray = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1$1 = pathToRegexp$1;
	var parse_1$1 = parse$3;
	var compile_1$1 = compile$3;
	var tokensToFunction_1$1 = tokensToFunction$2;
	var tokensToRegExp_1$1 = tokensToRegExp$1;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP$1 = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse$3 (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP$1.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup$1(pattern) : (asterisk ? '.*' : '[^' + escapeString$2(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile$3 (str, options) {
	  return tokensToFunction$2(parse$3(str, options), options)
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction$2 (tokens, options) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags$2(options));
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString$2 (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup$1 (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags$2 (options) {
	  return options && options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp$1 (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp$1 (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp$1(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags$2(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp$1 (path, keys, options) {
	  return tokensToRegExp$1(parse$3(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp$1 (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString$2(token);
	    } else {
	      var prefix = escapeString$2(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString$2(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags$2(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp$1 (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp$1(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp$1(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp$1(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	pathToRegexp_1$1.parse = parse_1$1;
	pathToRegexp_1$1.compile = compile_1$1;
	pathToRegexp_1$1.tokensToFunction = tokensToFunction_1$1;
	pathToRegexp_1$1.tokensToRegExp = tokensToRegExp_1$1;

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
	Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v$1=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m:case e:case g:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r$1:case h:return a;default:return u}}case d:return u}}}function A(a){return z$1(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c$1;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r$1;var Portal=d;
	var Profiler=g;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A(a)||z$1(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z$1(a)===k};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n};var isFragment=function(a){return z$1(a)===e};var isLazy=function(a){return z$1(a)===t};
	var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
	var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v$1)};var typeOf=z$1;

	var reactIs_production_min = {
		AsyncMode: AsyncMode,
		ConcurrentMode: ConcurrentMode,
		ContextConsumer: ContextConsumer,
		ContextProvider: ContextProvider,
		Element: Element,
		ForwardRef: ForwardRef,
		Fragment: Fragment,
		Lazy: Lazy,
		Memo: Memo,
		Portal: Portal,
		Profiler: Profiler,
		StrictMode: StrictMode,
		Suspense: Suspense,
		isAsyncMode: isAsyncMode,
		isConcurrentMode: isConcurrentMode,
		isContextConsumer: isContextConsumer,
		isContextProvider: isContextProvider,
		isElement: isElement,
		isForwardRef: isForwardRef,
		isFragment: isFragment,
		isLazy: isLazy,
		isMemo: isMemo,
		isPortal: isPortal,
		isProfiler: isProfiler,
		isStrictMode: isStrictMode,
		isSuspense: isSuspense,
		isValidElementType: isValidElementType,
		typeOf: typeOf
	};

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_production_min;
	}
	});

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	// TODO: Replace with React.createContext once we can assume React 16+

	var createNamedContext = function createNamedContext(name) {
	  var context = index$1();
	  context.displayName = name;
	  return context;
	};

	var historyContext =
	/*#__PURE__*/
	createNamedContext("Router-History");

	// TODO: Replace with React.createContext once we can assume React 16+

	var createNamedContext$1 = function createNamedContext(name) {
	  var context = index$1();
	  context.displayName = name;
	  return context;
	};

	var context =
	/*#__PURE__*/
	createNamedContext$1("Router");

	/**
	 * The public API for putting history on context.
	 */

	var Router$2 =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Router, _React$Component);

	  Router.computeRootMatch = function computeRootMatch(pathname) {
	    return {
	      path: "/",
	      url: "/",
	      params: {},
	      isExact: pathname === "/"
	    };
	  };

	  function Router(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.state = {
	      location: props.history.location
	    }; // This is a bit of a hack. We have to start listening for location
	    // changes here in the constructor in case there are any <Redirect>s
	    // on the initial render. If there are, they will replace/push when
	    // they mount and since cDM fires in children before parents, we may
	    // get a new location before the <Router> is mounted.

	    _this._isMounted = false;
	    _this._pendingLocation = null;

	    if (!props.staticContext) {
	      _this.unlisten = props.history.listen(function (location) {
	        if (_this._isMounted) {
	          _this.setState({
	            location: location
	          });
	        } else {
	          _this._pendingLocation = location;
	        }
	      });
	    }

	    return _this;
	  }

	  var _proto = Router.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;

	    if (this._pendingLocation) {
	      this.setState({
	        location: this._pendingLocation
	      });
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.unlisten) this.unlisten();
	  };

	  _proto.render = function render() {
	    return React__default['default'].createElement(context.Provider, {
	      value: {
	        history: this.props.history,
	        location: this.state.location,
	        match: Router.computeRootMatch(this.state.location.pathname),
	        staticContext: this.props.staticContext
	      }
	    }, React__default['default'].createElement(historyContext.Provider, {
	      children: this.props.children || null,
	      value: this.props.history
	    }));
	  };

	  return Router;
	}(React__default['default'].Component);

	/**
	 * The public API for a <Router> that stores location in memory.
	 */

	var MemoryRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(MemoryRouter, _React$Component);

	  function MemoryRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createMemoryHistory(_this.props);
	    return _this;
	  }

	  var _proto = MemoryRouter.prototype;

	  _proto.render = function render() {
	    return React__default['default'].createElement(Router$2, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return MemoryRouter;
	}(React__default['default'].Component);

	/*#__PURE__*/
	(function (_React$Component) {
	  _inheritsLoose(Lifecycle, _React$Component);

	  function Lifecycle() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Lifecycle.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    if (this.props.onMount) this.props.onMount.call(this, this);
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
	  };

	  _proto.render = function render() {
	    return null;
	  };

	  return Lifecycle;
	})(React__default['default'].Component);

	var cache$1 = {};
	var cacheLimit$1 = 10000;
	var cacheCount$1 = 0;

	function compilePath$1(path, options) {
	  var cacheKey = "" + options.end + options.strict + options.sensitive;
	  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
	  if (pathCache[path]) return pathCache[path];
	  var keys = [];
	  var regexp = pathToRegexp_1$1(path, keys, options);
	  var result = {
	    regexp: regexp,
	    keys: keys
	  };

	  if (cacheCount$1 < cacheLimit$1) {
	    pathCache[path] = result;
	    cacheCount$1++;
	  }

	  return result;
	}
	/**
	 * Public API for matching a URL pathname to a path.
	 */


	function matchPath(pathname, options) {
	  if (options === void 0) {
	    options = {};
	  }

	  if (typeof options === "string" || Array.isArray(options)) {
	    options = {
	      path: options
	    };
	  }

	  var _options = options,
	      path = _options.path,
	      _options$exact = _options.exact,
	      exact = _options$exact === void 0 ? false : _options$exact,
	      _options$strict = _options.strict,
	      strict = _options$strict === void 0 ? false : _options$strict,
	      _options$sensitive = _options.sensitive,
	      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
	  var paths = [].concat(path);
	  return paths.reduce(function (matched, path) {
	    if (!path && path !== "") return null;
	    if (matched) return matched;

	    var _compilePath = compilePath$1(path, {
	      end: exact,
	      strict: strict,
	      sensitive: sensitive
	    }),
	        regexp = _compilePath.regexp,
	        keys = _compilePath.keys;

	    var match = regexp.exec(pathname);
	    if (!match) return null;
	    var url = match[0],
	        values = match.slice(1);
	    var isExact = pathname === url;
	    if (exact && !isExact) return null;
	    return {
	      path: path,
	      // the path used to match
	      url: path === "/" && url === "" ? "/" : url,
	      // the matched portion of the URL
	      isExact: isExact,
	      // whether or not we matched exactly
	      params: keys.reduce(function (memo, key, index) {
	        memo[key.name] = values[index];
	        return memo;
	      }, {})
	    };
	  }, null);
	}
	/**
	 * The public API for matching a single path and rendering.
	 */


	var Route$1 =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Route, _React$Component);

	  function Route() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Route.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React__default['default'].createElement(context.Consumer, null, function (context$1) {
	      !context$1 ? invariant(false) : void 0;
	      var location = _this.props.location || context$1.location;
	      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
	      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

	      var props = _extends({}, context$1, {
	        location: location,
	        match: match
	      });

	      var _this$props = _this.props,
	          children = _this$props.children,
	          component = _this$props.component,
	          render = _this$props.render; // Preact uses an empty array as children by
	      // default, so use null if that's the case.

	      if (Array.isArray(children) && children.length === 0) {
	        children = null;
	      }

	      return React__default['default'].createElement(context.Provider, {
	        value: props
	      }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? React__default['default'].createElement(component, props) : render ? render(props) : null : typeof children === "function" ? children(props) : null);
	    });
	  };

	  return Route;
	}(React__default['default'].Component);

	function addLeadingSlash(path) {
	  return path.charAt(0) === "/" ? path : "/" + path;
	}

	function addBasename(basename, location) {
	  if (!basename) return location;
	  return _extends({}, location, {
	    pathname: addLeadingSlash(basename) + location.pathname
	  });
	}

	function stripBasename(basename, location) {
	  if (!basename) return location;
	  var base = addLeadingSlash(basename);
	  if (location.pathname.indexOf(base) !== 0) return location;
	  return _extends({}, location, {
	    pathname: location.pathname.substr(base.length)
	  });
	}

	function createURL(location) {
	  return typeof location === "string" ? location : createPath(location);
	}

	function staticHandler(methodName) {
	  return function () {
	     invariant(false) ;
	  };
	}

	function noop() {}
	/**
	 * The public top-level API for a "static" <Router>, so-called because it
	 * can't actually change the current location. Instead, it just records
	 * location changes in a context object. Useful mainly in testing and
	 * server-rendering scenarios.
	 */


	var StaticRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(StaticRouter, _React$Component);

	  function StaticRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    _this.handlePush = function (location) {
	      return _this.navigateTo(location, "PUSH");
	    };

	    _this.handleReplace = function (location) {
	      return _this.navigateTo(location, "REPLACE");
	    };

	    _this.handleListen = function () {
	      return noop;
	    };

	    _this.handleBlock = function () {
	      return noop;
	    };

	    return _this;
	  }

	  var _proto = StaticRouter.prototype;

	  _proto.navigateTo = function navigateTo(location, action) {
	    var _this$props = this.props,
	        _this$props$basename = _this$props.basename,
	        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
	        _this$props$context = _this$props.context,
	        context = _this$props$context === void 0 ? {} : _this$props$context;
	    context.action = action;
	    context.location = addBasename(basename, createLocation(location));
	    context.url = createURL(context.location);
	  };

	  _proto.render = function render() {
	    var _this$props2 = this.props,
	        _this$props2$basename = _this$props2.basename,
	        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
	        _this$props2$context = _this$props2.context,
	        context = _this$props2$context === void 0 ? {} : _this$props2$context,
	        _this$props2$location = _this$props2.location,
	        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
	        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

	    var history = {
	      createHref: function createHref(path) {
	        return addLeadingSlash(basename + createURL(path));
	      },
	      action: "POP",
	      location: stripBasename(basename, createLocation(location)),
	      push: this.handlePush,
	      replace: this.handleReplace,
	      go: staticHandler(),
	      goBack: staticHandler(),
	      goForward: staticHandler(),
	      listen: this.handleListen,
	      block: this.handleBlock
	    };
	    return React__default['default'].createElement(Router$2, _extends({}, rest, {
	      history: history,
	      staticContext: context
	    }));
	  };

	  return StaticRouter;
	}(React__default['default'].Component);

	/**
	 * The public API for rendering the first <Route> that matches.
	 */

	/*#__PURE__*/
	(function (_React$Component) {
	  _inheritsLoose(Switch, _React$Component);

	  function Switch() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Switch.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    return React__default['default'].createElement(context.Consumer, null, function (context) {
	      !context ? invariant(false) : void 0;
	      var location = _this.props.location || context.location;
	      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
	      // here because toArray adds keys to all child elements and we do not want
	      // to trigger an unmount/remount for two <Route>s that render the same
	      // component at different URLs.

	      React__default['default'].Children.forEach(_this.props.children, function (child) {
	        if (match == null && React__default['default'].isValidElement(child)) {
	          element = child;
	          var path = child.props.path || child.props.from;
	          match = path ? matchPath(location.pathname, _extends({}, child.props, {
	            path: path
	          })) : context.match;
	        }
	      });
	      return match ? React__default['default'].cloneElement(element, {
	        location: location,
	        computedMatch: match
	      }) : null;
	    });
	  };

	  return Switch;
	})(React__default['default'].Component);

	React__default['default'].useContext;

	/**
	 * The public API for a <Router> that uses HTML5 history.
	 */

	var BrowserRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(BrowserRouter, _React$Component);

	  function BrowserRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createBrowserHistory(_this.props);
	    return _this;
	  }

	  var _proto = BrowserRouter.prototype;

	  _proto.render = function render() {
	    return React__default['default'].createElement(Router$2, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return BrowserRouter;
	}(React__default['default'].Component);

	/**
	 * The public API for a <Router> that uses window.location.hash.
	 */

	var HashRouter =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(HashRouter, _React$Component);

	  function HashRouter() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	    _this.history = createHashHistory(_this.props);
	    return _this;
	  }

	  var _proto = HashRouter.prototype;

	  _proto.render = function render() {
	    return React__default['default'].createElement(Router$2, {
	      history: this.history,
	      children: this.props.children
	    });
	  };

	  return HashRouter;
	}(React__default['default'].Component);

	var resolveToLocation = function resolveToLocation(to, currentLocation) {
	  return typeof to === "function" ? to(currentLocation) : to;
	};
	var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
	  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
	};

	var forwardRefShim = function forwardRefShim(C) {
	  return C;
	};

	var forwardRef = React__default['default'].forwardRef;

	if (typeof forwardRef === "undefined") {
	  forwardRef = forwardRefShim;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
	  var innerRef = _ref.innerRef,
	      navigate = _ref.navigate,
	      _onClick = _ref.onClick,
	      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

	  var target = rest.target;

	  var props = _extends({}, rest, {
	    onClick: function onClick(event) {
	      try {
	        if (_onClick) _onClick(event);
	      } catch (ex) {
	        event.preventDefault();
	        throw ex;
	      }

	      if (!event.defaultPrevented && // onClick prevented default
	      event.button === 0 && ( // ignore everything but left clicks
	      !target || target === "_self") && // let browser handle "target=_blank" etc.
	      !isModifiedEvent(event) // ignore clicks with modifier keys
	      ) {
	          event.preventDefault();
	          navigate();
	        }
	    }
	  }); // React 15 compat


	  if (forwardRefShim !== forwardRef) {
	    props.ref = forwardedRef || innerRef;
	  } else {
	    props.ref = innerRef;
	  }
	  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


	  return React__default['default'].createElement("a", props);
	});
	/**
	 * The public API for rendering a history-aware <a>.
	 */


	var Link = forwardRef(function (_ref2, forwardedRef) {
	  var _ref2$component = _ref2.component,
	      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
	      replace = _ref2.replace,
	      to = _ref2.to,
	      innerRef = _ref2.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

	  return React__default['default'].createElement(context.Consumer, null, function (context) {
	    !context ? invariant(false) : void 0;
	    var history = context.history;
	    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
	    var href = location ? history.createHref(location) : "";

	    var props = _extends({}, rest, {
	      href: href,
	      navigate: function navigate() {
	        var location = resolveToLocation(to, context.location);
	        var method = replace ? history.replace : history.push;
	        method(location);
	      }
	    }); // React 15 compat


	    if (forwardRefShim !== forwardRef) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }

	    return React__default['default'].createElement(component, props);
	  });
	});

	var forwardRefShim$1 = function forwardRefShim(C) {
	  return C;
	};

	var forwardRef$1 = React__default['default'].forwardRef;

	if (typeof forwardRef$1 === "undefined") {
	  forwardRef$1 = forwardRefShim$1;
	}

	function joinClassnames() {
	  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
	    classnames[_key] = arguments[_key];
	  }

	  return classnames.filter(function (i) {
	    return i;
	  }).join(" ");
	}
	/**
	 * A <Link> wrapper that knows if it's "active" or not.
	 */


	forwardRef$1(function (_ref, forwardedRef) {
	  var _ref$ariaCurrent = _ref["aria-current"],
	      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
	      _ref$activeClassName = _ref.activeClassName,
	      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
	      activeStyle = _ref.activeStyle,
	      classNameProp = _ref.className,
	      exact = _ref.exact,
	      isActiveProp = _ref.isActive,
	      locationProp = _ref.location,
	      sensitive = _ref.sensitive,
	      strict = _ref.strict,
	      styleProp = _ref.style,
	      to = _ref.to,
	      innerRef = _ref.innerRef,
	      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

	  return React__default['default'].createElement(context.Consumer, null, function (context) {
	    !context ? invariant(false) : void 0;
	    var currentLocation = locationProp || context.location;
	    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
	    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

	    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	    var match = escapedPath ? matchPath(currentLocation.pathname, {
	      path: escapedPath,
	      exact: exact,
	      sensitive: sensitive,
	      strict: strict
	    }) : null;
	    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
	    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
	    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

	    var props = _extends({
	      "aria-current": isActive && ariaCurrent || null,
	      className: className,
	      style: style,
	      to: toLocation
	    }, rest); // React 15 compat


	    if (forwardRefShim$1 !== forwardRef$1) {
	      props.ref = forwardedRef || innerRef;
	    } else {
	      props.innerRef = innerRef;
	    }

	    return React__default['default'].createElement(Link, props);
	  });
	});

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active ) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount$1.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount$1;
	function listenerCount$1(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$2 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (typeof global$2!=="undefined" ? global$2 : window).TYPED_ARRAY_SUPPORT !== undefined
	  ? (typeof global$2!=="undefined" ? global$2 : window).TYPED_ARRAY_SUPPORT
	  : true;

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$2(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!isArray$2(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof (typeof global$2!=="undefined" ? global$2 : window).setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof (typeof global$2!=="undefined" ? global$2 : window).clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance$1 = (typeof global$2!=="undefined" ? global$2 : window).performance || {};
	performance$1.now        ||
	  performance$1.mozNow     ||
	  performance$1.msNow      ||
	  performance$1.oNow       ||
	  performance$1.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString$1(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject$1(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}

	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined$1((typeof global$2!=="undefined" ? global$2 : window).process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined$1(debugEnviron))
	    debugEnviron = '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean$1(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined$1(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined$1(ctx.depth)) ctx.depth = 2;
	  if (isUndefined$1(ctx.colors)) ctx.colors = false;
	  if (isUndefined$1(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction$1(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString$1(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction$1(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray$1(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction$1(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined$1(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString$1(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean$1(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty$1(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty$1(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined$1(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray$1(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean$1(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString$1(arg) {
	  return typeof arg === 'string';
	}

	function isUndefined$1(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject$1(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject$1(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject$1(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject$1(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction$1(arg) {
	  return typeof arg === 'function';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject$1(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty$1(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return Buffer.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = Buffer.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

	// Copyright Joyent, Inc. and other Node contributors.
	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     };


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	function StringDecoder(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	}

	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	Readable.ReadableState = ReadableState;

	var debug = debuglog('stream');
	inherits$1(Readable, EventEmitter);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event])
	      emitter.on(event, fn);
	    else if (Array.isArray(emitter._events[event]))
	      emitter._events[event].unshift(fn);
	    else
	      emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	function listenerCount (emitter, type) {
	  return emitter.listeners(type).length;
	}
	function ReadableState(options, stream) {

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  EventEmitter.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = Buffer.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    nextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false);

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && src.listeners('data').length) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = EventEmitter.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        nextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    nextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    nextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// A bit simpler than readable streams.
	Writable.WritableState = WritableState;
	inherits$1(Writable, EventEmitter);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Object.defineProperty(this, 'buffer', {
	    get: deprecate(function () {
	      return this.getBuffer();
	    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	  });
	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	function Writable(options) {

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  EventEmitter.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  nextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = Buffer.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) nextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	        nextTick(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

	inherits$1(Duplex, Readable);

	var keys = Object.keys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  nextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	// a transform stream is a readable/writable stream where you do
	inherits$1(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	inherits$1(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	inherits$1(Stream, EventEmitter);
	Stream.Readable = Readable;
	Stream.Writable = Writable;
	Stream.Duplex = Duplex;
	Stream.Transform = Transform;
	Stream.PassThrough = PassThrough;

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EventEmitter.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EventEmitter.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	var stream = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Stream,
		Readable: Readable,
		Writable: Writable,
		Duplex: Duplex,
		Transform: Transform,
		PassThrough: PassThrough,
		Stream: Stream
	});

	var aa = /*@__PURE__*/getAugmentedNamespace(stream);

	/** @license React v17.0.2
	 * react-dom-server.node.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var q=60106,r=60107,u$1=60108,z=60114,B=60109,ba=60110,ca=60112,D=60113,da=60120,ea=60115,fa=60116,ha=60121,ia=60117,ja=60119,ka=60129,la=60131;
	if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;q=E("react.portal");r=E("react.fragment");u$1=E("react.strict_mode");z=E("react.profiler");B=E("react.provider");ba=E("react.context");ca=E("react.forward_ref");D=E("react.suspense");da=E("react.suspense_list");ea=E("react.memo");fa=E("react.lazy");ha=E("react.block");ia=E("react.fundamental");ja=E("react.scope");ka=E("react.debug_trace_mode");la=E("react.legacy_hidden");}
	function F(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case r:return "Fragment";case q:return "Portal";case z:return "Profiler";case u$1:return "StrictMode";case D:return "Suspense";case da:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ba:return (a.displayName||"Context")+".Consumer";case B:return (a._context.displayName||"Context")+".Provider";case ca:var b=a.render;b=b.displayName||b.name||"";return a.displayName||
	(""!==b?"ForwardRef("+b+")":"ForwardRef");case ea:return F(a.type);case ha:return F(a._render);case fa:b=a._payload;a=a._init;try{return F(a(b))}catch(c){}}return null}var ma=React__default['default'].__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na={};function I(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1;}function oa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return I(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c;}else b=na;return b}
	for(var J=new Uint16Array(16),K=0;15>K;K++)J[K]=K+1;J[15]=0;var pa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa=Object.prototype.hasOwnProperty,ra={},sa={};
	function ta(a){if(qa.call(sa,a))return !0;if(qa.call(ra,a))return !1;if(pa.test(a))return sa[a]=!0;ra[a]=!0;return !1}function ua(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function va(a,b,c,d){if(null===b||"undefined"===typeof b||ua(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function M(a,b,c,d,f,h,t){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h;this.removeEmptyString=t;}var N={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){N[a]=new M(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];N[b]=new M(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){N[a]=new M(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){N[a]=new M(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){N[a]=new M(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){N[a]=new M(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){N[a]=new M(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){N[a]=new M(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){N[a]=new M(a,5,!1,a.toLowerCase(),null,!1,!1);});var wa=/[\-:]([a-z])/g;function xa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(wa,
	xa);N[b]=new M(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!1,!1);});
	N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!0,!0);});var ya=/["'&<>]/;
	function O(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
	function za(a,b){var c=N.hasOwnProperty(a)?N[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||va(a,b,c,!1))return "";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(O(b)+'"')}return ta(a)?a+'="'+(O(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
	var Ba="function"===typeof Object.is?Object.is:Aa,P=null,Q=null,R=null,S=!1,T=!1,U=null,V=0;function W(){if(null===P)throw Error(p(321));return P}function Ca(){if(0<V)throw Error(p(312));return {memoizedState:null,queue:null,next:null}}function Da(){null===R?null===Q?(S=!1,Q=R=Ca()):(S=!0,R=Q):null===R.next?(S=!1,R=R.next=Ca()):(S=!0,R=R.next);return R}function Ea(a,b,c,d){for(;T;)T=!1,V+=1,R=null,c=a(b,d);Fa();return c}function Fa(){P=null;T=!1;Q=null;V=0;R=U=null;}
	function Ga(a,b){return "function"===typeof b?b(a):b}function Ha(a,b,c){P=W();R=Da();if(S){var d=R.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=R.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);R.memoizedState=d;return [d,b]}return [R.memoizedState,b]}a=a===Ga?"function"===typeof b?b():b:void 0!==c?c(b):b;R.memoizedState=a;a=R.queue={last:null,dispatch:null};a=a.dispatch=Ia.bind(null,P,a);return [R.memoizedState,a]}
	function Ja(a,b){P=W();R=Da();b=void 0===b?null:b;if(null!==R){var c=R.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0;}if(d)return c[0]}}a=a();R.memoizedState=[a,b];return a}function Ia(a,b,c){if(!(25>V))throw Error(p(301));if(a===P)if(T=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function Ka(){}
	var X=null,La={readContext:function(a){var b=X.threadID;I(a,b);return a[b]},useContext:function(a){W();var b=X.threadID;I(a,b);return a[b]},useMemo:Ja,useReducer:Ha,useRef:function(a){P=W();R=Da();var b=R.memoizedState;return null===b?(a={current:a},R.memoizedState=a):b},useState:function(a){return Ha(Ga,a)},useLayoutEffect:function(){},useCallback:function(a,b){return Ja(function(){return a},b)},useImperativeHandle:Ka,useEffect:Ka,useDebugValue:Ka,useDeferredValue:function(a){W();return a},useTransition:function(){W();
	return [function(a){a();},!1]},useOpaqueIdentifier:function(){return (X.identifierPrefix||"")+"R:"+(X.uniqueID++).toString(36)},useMutableSource:function(a,b){W();return b(a._source)}},Ma={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Na(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	var Oa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Pa=objectAssign({menuitem:!0},Oa),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
	gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Qa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a];});});
	var Ra=/([A-Z])/g,Sa=/^ms-/,Z=React__default['default'].Children.toArray,Ta=ma.ReactCurrentDispatcher,Ua={listing:!0,pre:!0,textarea:!0},Va=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Wa={},Xa={};function Ya(a){if(void 0===a||null===a)return a;var b="";React__default['default'].Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Za=Object.prototype.hasOwnProperty,$a={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ab(a,b){if(void 0===a)throw Error(p(152,F(b)||"Component"));}
	function bb(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=oa(h,b,c,e),t=[],g=!1,m={isMounted:function(){return !1},enqueueForceUpdate:function(){if(null===t)return null},enqueueReplaceState:function(a,b){g=!0;t=[b];},enqueueSetState:function(a,b){if(null===t)return null;t.push(b);}};if(e){if(e=new h(d.props,f,m),"function"===typeof h.getDerivedStateFromProps){var k=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=k&&(e.state=objectAssign({},e.state,k));}}else if(P={},e=h(d.props,
	f,m),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;ab(a,h);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),t.length){m=t;var v=
	g;t=null;g=!1;if(v&&1===m.length)e.state=m[0];else {k=v?m[0]:e.state;var H=!0;for(v=v?1:0;v<m.length;v++){var x=m[v];x="function"===typeof x?x.call(e,k,d.props,f):x;null!=x&&(H?(H=!1,k=objectAssign({},k,x)):objectAssign(k,x));}e.state=k;}}else t=null;a=e.render();ab(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var y=e.getChildContext();for(var A in y)if(!(A in d))throw Error(p(108,F(h)||"Unknown",A));}y&&(b=objectAssign({},b,y));}for(;React__default['default'].isValidElement(a);){var f=a,h=f.type;if("function"!==
	typeof h)break;d(f,h);}return {child:a,context:b}}
	var cb=function(){function a(a,b,f){React__default['default'].isValidElement(a)?a.type!==r?a=[a]:(a=a.props.children,a=React__default['default'].isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ma.html,children:a,childIndex:0,context:na,footer:""};var c=J[0];if(0===c){var d=J;c=d.length;var g=2*c;if(!(65536>=g))throw Error(p(304));var e=new Uint16Array(g);e.set(d);J=e;J[0]=c+1;for(d=c;d<g-1;d++)J[d]=d+1;J[g-1]=0;}else J[0]=J[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;
	this.makeStaticMarkup=b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];this.uniqueID=0;this.identifierPrefix=f&&f.identifierPrefix||"";}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;J[a]=J[0];J[0]=a;}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;I(c,h);var t=c[h];this.contextStack[b]=c;this.contextValueStack[b]=t;c[h]=a.props.value;};b.popProvider=
	function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f;};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a];};b.read=function(a){if(this.exhausted)return null;var b=X;X=this;var c=Ta.current;Ta.current=La;try{for(var h=[""],t=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;
	J[g]=J[0];J[0]=g;break}var e=this.stack[this.stack.length-1];if(t||e.childIndex>=e.children.length){var L=e.footer;""!==L&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===B)this.popProvider(e.type);else if(e.type===D){this.suspenseDepth--;var G=h.pop();if(t){t=!1;var C=e.fallbackFrame;if(!C)throw Error(p(303));this.stack.push(C);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=
	G;}h[this.suspenseDepth]+=L;}else {var m=e.children[e.childIndex++],k="";try{k+=this.render(m,e.context,e.domNamespace);}catch(v){if(null!=v&&"function"===typeof v.then)throw Error(p(294));throw v;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=k;}}return h[0]}finally{Ta.current=c,X=b,Fa();}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return "";if(this.makeStaticMarkup)return O(f);if(this.previousWasTextNode)return "\x3c!-- --\x3e"+O(f);
	this.previousWasTextNode=!0;return O(f)}b=bb(a,b,this.threadID);a=b.child;b=b.context;if(null===a||!1===a)return "";if(!React__default['default'].isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===q)throw Error(p(257));throw Error(p(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return ""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case la:case ka:case u$1:case z:case da:case r:return a=Z(a.props.children),this.stack.push({type:null,
	domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case D:throw Error(p(294));case ja:throw Error(p(343));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ca:P={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return "";case ea:return a=[React__default['default'].createElement(c.type,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
	"";case B:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ba:c=a.type;d=a.props;var g=this.threadID;I(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return "";case ia:throw Error(p(338));case fa:return c=a.type,d=c._init,c=d(c._payload),a=[React__default['default'].createElement(c,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,
	context:b,footer:""}),""}throw Error(p(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();if(!Wa.hasOwnProperty(c)){if(!Va.test(c))throw Error(p(65,c));Wa[c]=!0;}var d=a.props;if("input"===c)d=objectAssign({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
	g)throw Error(p(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(p(93));e=e[0];}g=""+e;}null==g&&(g="");}d=objectAssign({},d,{value:void 0,children:""+g});}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=objectAssign({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var L=Ya(d.children);if(null!=e){var G=null!=d.value?d.value+"":L;g=!1;if(Array.isArray(e))for(var C=0;C<e.length;C++){if(""+e[C]===G){g=!0;break}}else g=""+e===G;d=objectAssign({selected:void 0,children:void 0},
	d,{selected:g,children:L});}}if(g=d){if(Pa[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(p(137,c));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(p(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(p(62));}g=d;e=this.makeStaticMarkup;L=1===this.stack.length;G="<"+a.type;b:if(-1===c.indexOf("-"))C="string"===typeof g.is;else switch(c){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":C=
	!1;break b;default:C=!0;}for(w in g)if(Za.call(g,w)){var m=g[w];if(null!=m){if("style"===w){var k=void 0,v="",H="";for(k in m)if(m.hasOwnProperty(k)){var x=0===k.indexOf("--"),y=m[k];if(null!=y){if(x)var A=k;else if(A=k,Xa.hasOwnProperty(A))A=Xa[A];else {var eb=A.replace(Ra,"-$1").toLowerCase().replace(Sa,"-ms-");A=Xa[A]=eb;}v+=H+A+":";H=k;x=null==y||"boolean"===typeof y||""===y?"":x||"number"!==typeof y||0===y||Y.hasOwnProperty(H)&&Y[H]?(""+y).trim():y+"px";v+=x;H=";";}}m=v||null;}k=null;C?$a.hasOwnProperty(w)||
	(k=w,k=ta(k)&&null!=m?k+'="'+(O(m)+'"'):""):k=za(w,m);k&&(G+=" "+k);}}e||L&&(G+=' data-reactroot=""');var w=G;g="";Oa.hasOwnProperty(c)?w+="/>":(w+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=O(e);break a}e=null;}null!=e?(d=[],Ua.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(w+="\n"),w+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===f?Na(a):"http://www.w3.org/2000/svg"===
	f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return w};return a}();function db(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b;}
	var fb=function(a){function b(b,c,h){var d=a.call(this,{})||this;d.partialRenderer=new cb(b,c,h);return d}db(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a);};c._read=function(a){try{this.push(this.partialRenderer.read(a));}catch(f){this.destroy(f);}};return b}(aa.Readable);var renderToNodeStream=function(a,b){return new fb(a,!1,b)};var renderToStaticMarkup=function(a,b){a=new cb(a,!0,b);try{return a.read(Infinity)}finally{a.destroy();}};
	var renderToStaticNodeStream=function(a,b){return new fb(a,!0,b)};var renderToString=function(a,b){a=new cb(a,!1,b);try{return a.read(Infinity)}finally{a.destroy();}};var version="17.0.2";

	var reactDomServer_node_production_min = {
		renderToNodeStream: renderToNodeStream,
		renderToStaticMarkup: renderToStaticMarkup,
		renderToStaticNodeStream: renderToStaticNodeStream,
		renderToString: renderToString,
		version: version
	};

	var server_node = createCommonjsModule(function (module) {

	{
	  module.exports = reactDomServer_node_production_min;
	}
	});

	var server = server_node;

	function Cache () {
	  var _cache = Object.create(null);
	  var _hitCount = 0;
	  var _missCount = 0;
	  var _size = 0;
	  var _debug = false;

	  this.put = function(key, value, time, timeoutCallback) {
	    if (_debug) {
	      console.log('caching: %s = %j (@%s)', key, value, time);
	    }

	    if (typeof time !== 'undefined' && (typeof time !== 'number' || isNaN(time) || time <= 0)) {
	      throw new Error('Cache timeout must be a positive number');
	    } else if (typeof timeoutCallback !== 'undefined' && typeof timeoutCallback !== 'function') {
	      throw new Error('Cache timeout callback must be a function');
	    }

	    var oldRecord = _cache[key];
	    if (oldRecord) {
	      clearTimeout(oldRecord.timeout);
	    } else {
	      _size++;
	    }

	    var record = {
	      value: value,
	      expire: time + Date.now()
	    };

	    if (!isNaN(record.expire)) {
	      record.timeout = setTimeout(function() {
	        _del(key);
	        if (timeoutCallback) {
	          timeoutCallback(key, value);
	        }
	      }.bind(this), time);
	    }

	    _cache[key] = record;

	    return value;
	  };

	  this.del = function(key) {
	    var canDelete = true;

	    var oldRecord = _cache[key];
	    if (oldRecord) {
	      clearTimeout(oldRecord.timeout);
	      if (!isNaN(oldRecord.expire) && oldRecord.expire < Date.now()) {
	        canDelete = false;
	      }
	    } else {
	      canDelete = false;
	    }

	    if (canDelete) {
	      _del(key);
	    }

	    return canDelete;
	  };

	  function _del(key){
	    _size--;
	    delete _cache[key];
	  }

	  this.clear = function() {
	    for (var key in _cache) {
	      clearTimeout(_cache[key].timeout);
	    }
	    _size = 0;
	    _cache = Object.create(null);
	    if (_debug) {
	      _hitCount = 0;
	      _missCount = 0;
	    }
	  };

	  this.get = function(key) {
	    var data = _cache[key];
	    if (typeof data != "undefined") {
	      if (isNaN(data.expire) || data.expire >= Date.now()) {
	        if (_debug) _hitCount++;
	        return data.value;
	      } else {
	        // free some space
	        if (_debug) _missCount++;
	        _size--;
	        delete _cache[key];
	      }
	    } else if (_debug) {
	      _missCount++;
	    }
	    return null;
	  };

	  this.size = function() {
	    return _size;
	  };

	  this.memsize = function() {
	    var size = 0,
	      key;
	    for (key in _cache) {
	      size++;
	    }
	    return size;
	  };

	  this.debug = function(bool) {
	    _debug = bool;
	  };

	  this.hits = function() {
	    return _hitCount;
	  };

	  this.misses = function() {
	    return _missCount;
	  };

	  this.keys = function() {
	    return Object.keys(_cache);
	  };

	  this.exportJson = function() {
	    var plainJsCache = {};

	    // Discard the `timeout` property.
	    // Note: JSON doesn't support `NaN`, so convert it to `'NaN'`.
	    for (var key in _cache) {
	      var record = _cache[key];
	      plainJsCache[key] = {
	        value: record.value,
	        expire: record.expire || 'NaN',
	      };
	    }

	    return JSON.stringify(plainJsCache);
	  };

	  this.importJson = function(jsonToImport, options) {
	    var cacheToImport = JSON.parse(jsonToImport);
	    var currTime = Date.now();

	    var skipDuplicates = options && options.skipDuplicates;

	    for (var key in cacheToImport) {
	      if (cacheToImport.hasOwnProperty(key)) {
	        if (skipDuplicates) {
	          var existingRecord = _cache[key];
	          if (existingRecord) {
	            if (_debug) {
	              console.log('Skipping duplicate imported key \'%s\'', key);
	            }
	            continue;
	          }
	        }

	        var record = cacheToImport[key];

	        // record.expire could be `'NaN'` if no expiry was set.
	        // Try to subtract from it; a string minus a number is `NaN`, which is perfectly fine here.
	        var remainingTime = record.expire - currTime;

	        if (remainingTime <= 0) {
	          // Delete any record that might exist with the same key, since this key is expired.
	          this.del(key);
	          continue;
	        }

	        // Remaining time must now be either positive or `NaN`,
	        // but `put` will throw an error if we try to give it `NaN`.
	        remainingTime = remainingTime > 0 ? remainingTime : undefined;

	        this.put(key, record.value, remainingTime);
	      }
	    }

	    return this.size();
	  };
	}

	var memoryCache = new Cache();
	var Cache_1 = Cache;
	memoryCache.Cache = Cache_1;

	var isHTMLElement = (value) => value instanceof HTMLElement;

	const EVENTS = {
	    BLUR: 'blur',
	    CHANGE: 'change',
	    INPUT: 'input',
	};
	const VALIDATION_MODE = {
	    onBlur: 'onBlur',
	    onChange: 'onChange',
	    onSubmit: 'onSubmit',
	    onTouched: 'onTouched',
	    all: 'all',
	};
	const SELECT = 'select';
	const UNDEFINED = 'undefined';
	const INPUT_VALIDATION_RULES = {
	    max: 'max',
	    min: 'min',
	    maxLength: 'maxLength',
	    minLength: 'minLength',
	    pattern: 'pattern',
	    required: 'required',
	    validate: 'validate',
	};

	function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
	    if (isHTMLElement(ref) && handleChange) {
	        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
	        ref.addEventListener(EVENTS.BLUR, handleChange);
	    }
	}

	var isNullOrUndefined = (value) => value == null;

	const isObjectType = (value) => typeof value === 'object';
	var isObject = (value) => !isNullOrUndefined(value) &&
	    !Array.isArray(value) &&
	    isObjectType(value) &&
	    !(value instanceof Date);

	var isKey = (value) => /^\w*$/.test(value);

	var compact = (value) => value.filter(Boolean);

	var stringToPath = (input) => compact(input
	    .replace(/["|']/g, '')
	    .replace(/\[/g, '.')
	    .replace(/\]/g, '')
	    .split('.'));

	function set(object, path, value) {
	    let index = -1;
	    const tempPath = isKey(path) ? [path] : stringToPath(path);
	    const length = tempPath.length;
	    const lastIndex = length - 1;
	    while (++index < length) {
	        const key = tempPath[index];
	        let newValue = value;
	        if (index !== lastIndex) {
	            const objValue = object[key];
	            newValue =
	                isObject(objValue) || Array.isArray(objValue)
	                    ? objValue
	                    : !isNaN(+tempPath[index + 1])
	                        ? []
	                        : {};
	        }
	        object[key] = newValue;
	        object = object[key];
	    }
	    return object;
	}

	var transformToNestObject = (data, value = {}) => {
	    for (const key in data) {
	        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
	    }
	    return value;
	};

	var isUndefined = (val) => val === undefined;

	var get = (obj = {}, path, defaultValue) => {
	    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
	    return isUndefined(result) || result === obj
	        ? isUndefined(obj[path])
	            ? defaultValue
	            : obj[path]
	        : result;
	};

	var focusOnErrorField = (fields, fieldErrors) => {
	    for (const key in fields) {
	        if (get(fieldErrors, key)) {
	            const field = fields[key];
	            if (field) {
	                if (field.ref.focus && isUndefined(field.ref.focus())) {
	                    break;
	                }
	                else if (field.options) {
	                    field.options[0].ref.focus();
	                    break;
	                }
	            }
	        }
	    }
	};

	var removeAllEventListeners = (ref, validateWithStateUpdate) => {
	    if (isHTMLElement(ref) && ref.removeEventListener) {
	        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
	        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
	        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
	    }
	};

	const defaultReturn = {
	    isValid: false,
	    value: null,
	};
	var getRadioValue = (options) => Array.isArray(options)
	    ? options.reduce((previous, option) => option && option.ref.checked
	        ? {
	            isValid: true,
	            value: option.ref.value,
	        }
	        : previous, defaultReturn)
	    : defaultReturn;

	var getMultipleSelectValue = (options) => [...options]
	    .filter(({ selected }) => selected)
	    .map(({ value }) => value);

	var isRadioInput = (element) => element.type === 'radio';

	var isFileInput = (element) => element.type === 'file';

	var isCheckBoxInput = (element) => element.type === 'checkbox';

	var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

	const defaultResult = {
	    value: false,
	    isValid: false,
	};
	const validResult = { value: true, isValid: true };
	var getCheckboxValue = (options) => {
	    if (Array.isArray(options)) {
	        if (options.length > 1) {
	            const values = options
	                .filter((option) => option && option.ref.checked)
	                .map(({ ref: { value } }) => value);
	            return { value: values, isValid: !!values.length };
	        }
	        const { checked, value, attributes } = options[0].ref;
	        return checked
	            ? attributes && !isUndefined(attributes.value)
	                ? isUndefined(value) || value === ''
	                    ? validResult
	                    : { value: value, isValid: true }
	                : validResult
	            : defaultResult;
	    }
	    return defaultResult;
	};

	function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled, shouldKeepRawValue) {
	    const field = fieldsRef.current[name];
	    if (field) {
	        const { ref: { value, disabled }, ref, valueAsNumber, valueAsDate, setValueAs, } = field;
	        if (disabled && excludeDisabled) {
	            return;
	        }
	        if (isFileInput(ref)) {
	            return ref.files;
	        }
	        if (isRadioInput(ref)) {
	            return getRadioValue(field.options).value;
	        }
	        if (isMultipleSelect(ref)) {
	            return getMultipleSelectValue(ref.options);
	        }
	        if (isCheckBoxInput(ref)) {
	            return getCheckboxValue(field.options).value;
	        }
	        return shouldKeepRawValue
	            ? value
	            : valueAsNumber
	                ? value === ''
	                    ? NaN
	                    : +value
	                : valueAsDate
	                    ? ref.valueAsDate
	                    : setValueAs
	                        ? setValueAs(value)
	                        : value;
	    }
	    if (shallowFieldsStateRef) {
	        return get(shallowFieldsStateRef.current, name);
	    }
	}

	function isDetached(element) {
	    if (!element) {
	        return true;
	    }
	    if (!(element instanceof HTMLElement) ||
	        element.nodeType === Node.DOCUMENT_NODE) {
	        return false;
	    }
	    return isDetached(element.parentNode);
	}

	var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

	var isBoolean = (value) => typeof value === 'boolean';

	function baseGet(object, updatePath) {
	    const length = updatePath.slice(0, -1).length;
	    let index = 0;
	    while (index < length) {
	        object = isUndefined(object) ? index++ : object[updatePath[index++]];
	    }
	    return object;
	}
	function unset(object, path) {
	    const updatePath = isKey(path) ? [path] : stringToPath(path);
	    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
	    const key = updatePath[updatePath.length - 1];
	    let previousObjRef;
	    if (childObject) {
	        delete childObject[key];
	    }
	    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
	        let index = -1;
	        let objectRef;
	        const currentPaths = updatePath.slice(0, -(k + 1));
	        const currentPathsLength = currentPaths.length - 1;
	        if (k > 0) {
	            previousObjRef = object;
	        }
	        while (++index < currentPaths.length) {
	            const item = currentPaths[index];
	            objectRef = objectRef ? objectRef[item] : object[item];
	            if (currentPathsLength === index &&
	                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
	                    (Array.isArray(objectRef) &&
	                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
	                previousObjRef ? delete previousObjRef[item] : delete object[item];
	            }
	            previousObjRef = objectRef;
	        }
	    }
	    return object;
	}

	const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
	function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
	    const { ref, ref: { name }, } = field;
	    const fieldRef = fieldsRef.current[name];
	    if (!shouldUnregister) {
	        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
	        !isUndefined(value) && set(shallowFieldsStateRef.current, name, value);
	    }
	    if (!ref.type || !fieldRef) {
	        delete fieldsRef.current[name];
	        return;
	    }
	    if (isRadioInput(ref) || isCheckBoxInput(ref)) {
	        if (Array.isArray(fieldRef.options) && fieldRef.options.length) {
	            compact(fieldRef.options).forEach((option = {}, index) => {
	                if ((isDetached(option.ref) && isSameRef(option, option.ref)) ||
	                    forceDelete) {
	                    removeAllEventListeners(option.ref, handleChange);
	                    unset(fieldRef.options, `[${index}]`);
	                }
	            });
	            if (fieldRef.options && !compact(fieldRef.options).length) {
	                delete fieldsRef.current[name];
	            }
	        }
	        else {
	            delete fieldsRef.current[name];
	        }
	    }
	    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
	        removeAllEventListeners(ref, handleChange);
	        delete fieldsRef.current[name];
	    }
	}

	var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

	function deepMerge(target, source) {
	    if (isPrimitive(target) || isPrimitive(source)) {
	        return source;
	    }
	    for (const key in source) {
	        const targetValue = target[key];
	        const sourceValue = source[key];
	        try {
	            target[key] =
	                (isObject(targetValue) && isObject(sourceValue)) ||
	                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
	                    ? deepMerge(targetValue, sourceValue)
	                    : sourceValue;
	        }
	        catch (_a) { }
	    }
	    return target;
	}

	function deepEqual(object1, object2, isErrorObject) {
	    if (isPrimitive(object1) ||
	        isPrimitive(object2) ||
	        object1 instanceof Date ||
	        object2 instanceof Date) {
	        return object1 === object2;
	    }
	    if (!React.isValidElement(object1)) {
	        const keys1 = Object.keys(object1);
	        const keys2 = Object.keys(object2);
	        if (keys1.length !== keys2.length) {
	            return false;
	        }
	        for (const key of keys1) {
	            const val1 = object1[key];
	            if (!(isErrorObject && key === 'ref')) {
	                const val2 = object2[key];
	                if ((isObject(val1) || Array.isArray(val1)) &&
	                    (isObject(val2) || Array.isArray(val2))
	                    ? !deepEqual(val1, val2, isErrorObject)
	                    : val1 !== val2) {
	                    return false;
	                }
	            }
	        }
	    }
	    return true;
	}

	function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
	    let index = -1;
	    while (++index < values.length) {
	        for (const key in values[index]) {
	            if (Array.isArray(values[index][key])) {
	                !dirtyFields[index] && (dirtyFields[index] = {});
	                dirtyFields[index][key] = [];
	                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
	            }
	            else {
	                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
	                    ? set(dirtyFields[index] || {}, key)
	                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
	            }
	        }
	        parentNode &&
	            !dirtyFields.length &&
	            delete parentNode[parentName];
	    }
	    return dirtyFields;
	}
	var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

	var isString = (value) => typeof value === 'string';

	var getFieldsValues = (fieldsRef, shallowFieldsState, shouldUnregister, excludeDisabled, search) => {
	    const output = {};
	    for (const name in fieldsRef.current) {
	        if (isUndefined(search) ||
	            (isString(search)
	                ? name.startsWith(search)
	                : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
	            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
	        }
	    }
	    return shouldUnregister
	        ? transformToNestObject(output)
	        : deepMerge(shallowFieldsState, transformToNestObject(output));
	};

	var isErrorStateChanged = ({ errors, name, error, validFields, fieldsWithValidation, }) => {
	    const isValid = isUndefined(error);
	    const previousError = get(errors, name);
	    return ((isValid && !!previousError) ||
	        (!isValid && !deepEqual(previousError, error, true)) ||
	        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
	};

	var isRegex = (value) => value instanceof RegExp;

	var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
	    ? validationData
	    : {
	        value: validationData,
	        message: '',
	    };

	var isFunction = (value) => typeof value === 'function';

	var isMessage = (value) => isString(value) || React.isValidElement(value);

	function getValidateError(result, ref, type = 'validate') {
	    if (isMessage(result) || (isBoolean(result) && !result)) {
	        return {
	            type,
	            message: isMessage(result) ? result : '',
	            ref,
	        };
	    }
	}

	var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
	    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

	var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
	    const name = ref.name;
	    const error = {};
	    const isRadio = isRadioInput(ref);
	    const isCheckBox = isCheckBoxInput(ref);
	    const isRadioOrCheckbox = isRadio || isCheckBox;
	    const isEmpty = value === '';
	    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
	    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
	        const message = exceedMax ? maxLengthMessage : minLengthMessage;
	        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
	            ref }, (exceedMax
	            ? appendErrorsCurry(maxType, message)
	            : appendErrorsCurry(minType, message)));
	    };
	    if (required &&
	        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
	            (isBoolean(value) && !value) ||
	            (isCheckBox && !getCheckboxValue(options).isValid) ||
	            (isRadio && !getRadioValue(options).isValid))) {
	        const { value, message } = isMessage(required)
	            ? { value: !!required, message: required }
	            : getValueAndMessage(required);
	        if (value) {
	            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox
	                    ? ((fieldsRef.current[name].options || [])[0] || {}).ref
	                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
	            if (!validateAllFieldCriteria) {
	                return error;
	            }
	        }
	    }
	    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) && value !== '') {
	        let exceedMax;
	        let exceedMin;
	        const maxOutput = getValueAndMessage(max);
	        const minOutput = getValueAndMessage(min);
	        if (!isNaN(value)) {
	            const valueNumber = ref.valueAsNumber || parseFloat(value);
	            if (!isNullOrUndefined(maxOutput.value)) {
	                exceedMax = valueNumber > maxOutput.value;
	            }
	            if (!isNullOrUndefined(minOutput.value)) {
	                exceedMin = valueNumber < minOutput.value;
	            }
	        }
	        else {
	            const valueDate = ref.valueAsDate || new Date(value);
	            if (isString(maxOutput.value)) {
	                exceedMax = valueDate > new Date(maxOutput.value);
	            }
	            if (isString(minOutput.value)) {
	                exceedMin = valueDate < new Date(minOutput.value);
	            }
	        }
	        if (exceedMax || exceedMin) {
	            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
	            if (!validateAllFieldCriteria) {
	                return error;
	            }
	        }
	    }
	    if (isString(value) && !isEmpty && (maxLength || minLength)) {
	        const maxLengthOutput = getValueAndMessage(maxLength);
	        const minLengthOutput = getValueAndMessage(minLength);
	        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
	            value.length > maxLengthOutput.value;
	        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
	            value.length < minLengthOutput.value;
	        if (exceedMax || exceedMin) {
	            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
	            if (!validateAllFieldCriteria) {
	                return error;
	            }
	        }
	    }
	    if (isString(value) && pattern && !isEmpty) {
	        const { value: patternValue, message } = getValueAndMessage(pattern);
	        if (isRegex(patternValue) && !patternValue.test(value)) {
	            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
	                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
	            if (!validateAllFieldCriteria) {
	                return error;
	            }
	        }
	    }
	    if (validate) {
	        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef, false, true);
	        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
	        if (isFunction(validate)) {
	            const result = await validate(fieldValue);
	            const validateError = getValidateError(result, validateRef);
	            if (validateError) {
	                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
	                if (!validateAllFieldCriteria) {
	                    return error;
	                }
	            }
	        }
	        else if (isObject(validate)) {
	            let validationResult = {};
	            for (const [key, validateFunction] of Object.entries(validate)) {
	                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
	                    break;
	                }
	                const validateResult = await validateFunction(fieldValue);
	                const validateError = getValidateError(validateResult, validateRef, key);
	                if (validateError) {
	                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
	                    if (validateAllFieldCriteria) {
	                        error[name] = validationResult;
	                    }
	                }
	            }
	            if (!isEmptyObject(validationResult)) {
	                error[name] = Object.assign({ ref: validateRef }, validationResult);
	                if (!validateAllFieldCriteria) {
	                    return error;
	                }
	            }
	        }
	    }
	    return error;
	};

	const getPath$1 = (rootPath, values, paths = []) => {
	    for (const property in values) {
	        const rootName = (rootPath +
	            (isObject(values)
	                ? `.${property}`
	                : `[${property}]`));
	        isPrimitive(values[property])
	            ? paths.push(rootName)
	            : getPath$1(rootName, values[property], paths);
	    }
	    return paths;
	};

	var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
	    let value = undefined;
	    watchFields.add(fieldName);
	    if (!isEmptyObject(fieldValues)) {
	        value = get(fieldValues, fieldName);
	        if (isObject(value) || Array.isArray(value)) {
	            getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
	        }
	    }
	    return isUndefined(value)
	        ? isSingleField
	            ? inputValue
	            : get(inputValue, fieldName)
	        : value;
	};

	var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
	    if (isOnAll) {
	        return false;
	    }
	    else if (!isSubmitted && isOnTouch) {
	        return !(isTouched || isBlurEvent);
	    }
	    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
	        return !isBlurEvent;
	    }
	    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
	        return isBlurEvent;
	    }
	    return true;
	};

	var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

	const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}([|.)\\d+`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
	var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

	var isSelectInput = (element) => element.type === `${SELECT}-one`;

	function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
	    const observer = new MutationObserver(() => {
	        for (const field of Object.values(fieldsRef.current)) {
	            if (field && field.options) {
	                for (const option of field.options) {
	                    if (option && option.ref && isDetached(option.ref)) {
	                        removeFieldEventListenerAndRef(field);
	                    }
	                }
	            }
	            else if (field && isDetached(field.ref)) {
	                removeFieldEventListenerAndRef(field);
	            }
	        }
	    });
	    observer.observe(window.document, {
	        childList: true,
	        subtree: true,
	    });
	    return observer;
	}

	var isWeb = typeof window !== UNDEFINED && typeof document !== UNDEFINED;

	function cloneObject(data) {
	    var _a;
	    let copy;
	    if (isPrimitive(data) ||
	        (isWeb && (data instanceof File || isHTMLElement(data)))) {
	        return data;
	    }
	    if (!['Set', 'Map', 'Object', 'Date', 'Array'].includes((_a = data.constructor) === null || _a === void 0 ? void 0 : _a.name)) {
	        return data;
	    }
	    if (data instanceof Date) {
	        copy = new Date(data.getTime());
	        return copy;
	    }
	    if (data instanceof Set) {
	        copy = new Set();
	        for (const item of data) {
	            copy.add(item);
	        }
	        return copy;
	    }
	    if (data instanceof Map) {
	        copy = new Map();
	        for (const key of data.keys()) {
	            copy.set(key, cloneObject(data.get(key)));
	        }
	        return copy;
	    }
	    copy = Array.isArray(data) ? [] : {};
	    for (const key in data) {
	        copy[key] = cloneObject(data[key]);
	    }
	    return copy;
	}

	var modeChecker = (mode) => ({
	    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
	    isOnBlur: mode === VALIDATION_MODE.onBlur,
	    isOnChange: mode === VALIDATION_MODE.onChange,
	    isOnAll: mode === VALIDATION_MODE.all,
	    isOnTouch: mode === VALIDATION_MODE.onTouched,
	});

	var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

	const isWindowUndefined = typeof window === UNDEFINED;
	const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
	function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
	    const fieldsRef = React.useRef({});
	    const fieldArrayDefaultValuesRef = React.useRef({});
	    const fieldArrayValuesRef = React.useRef({});
	    const watchFieldsRef = React.useRef(new Set());
	    const useWatchFieldsRef = React.useRef({});
	    const useWatchRenderFunctionsRef = React.useRef({});
	    const fieldsWithValidationRef = React.useRef({});
	    const validFieldsRef = React.useRef({});
	    const defaultValuesRef = React.useRef(defaultValues);
	    const isUnMount = React.useRef(false);
	    const isWatchAllRef = React.useRef(false);
	    const handleChangeRef = React.useRef();
	    const shallowFieldsStateRef = React.useRef({});
	    const resetFieldArrayFunctionRef = React.useRef({});
	    const contextRef = React.useRef(context);
	    const resolverRef = React.useRef(resolver);
	    const fieldArrayNamesRef = React.useRef(new Set());
	    const modeRef = React.useRef(modeChecker(mode));
	    const { isOnSubmit, isOnTouch } = modeRef.current;
	    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
	    const [formState, setFormState] = React.useState({
	        isDirty: false,
	        isValidating: false,
	        dirtyFields: {},
	        isSubmitted: false,
	        submitCount: 0,
	        touched: {},
	        isSubmitting: false,
	        isSubmitSuccessful: false,
	        isValid: !isOnSubmit,
	        errors: {},
	    });
	    const readFormStateRef = React.useRef({
	        isDirty: !isProxyEnabled,
	        dirtyFields: !isProxyEnabled,
	        touched: !isProxyEnabled || isOnTouch,
	        isValidating: !isProxyEnabled,
	        isSubmitting: !isProxyEnabled,
	        isValid: !isProxyEnabled,
	    });
	    const formStateRef = React.useRef(formState);
	    const observerRef = React.useRef();
	    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = React.useRef(modeChecker(reValidateMode)).current;
	    contextRef.current = context;
	    resolverRef.current = resolver;
	    formStateRef.current = formState;
	    shallowFieldsStateRef.current = shouldUnregister
	        ? {}
	        : isEmptyObject(shallowFieldsStateRef.current)
	            ? cloneObject(defaultValues)
	            : shallowFieldsStateRef.current;
	    const updateFormState = React.useCallback((state = {}) => {
	        if (!isUnMount.current) {
	            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
	            setFormState(formStateRef.current);
	        }
	    }, []);
	    const updateIsValidating = () => readFormStateRef.current.isValidating &&
	        updateFormState({
	            isValidating: true,
	        });
	    const shouldRenderBaseOnError = React.useCallback((name, error, shouldRender = false, state = {}, isValid) => {
	        let shouldReRender = shouldRender ||
	            isErrorStateChanged({
	                errors: formStateRef.current.errors,
	                error,
	                name,
	                validFields: validFieldsRef.current,
	                fieldsWithValidation: fieldsWithValidationRef.current,
	            });
	        const previousError = get(formStateRef.current.errors, name);
	        if (error) {
	            unset(validFieldsRef.current, name);
	            shouldReRender =
	                shouldReRender ||
	                    !previousError ||
	                    !deepEqual(previousError, error, true);
	            set(formStateRef.current.errors, name, error);
	        }
	        else {
	            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
	                set(validFieldsRef.current, name, true);
	                shouldReRender = shouldReRender || previousError;
	            }
	            unset(formStateRef.current.errors, name);
	        }
	        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
	            !isEmptyObject(state) ||
	            readFormStateRef.current.isValidating) {
	            updateFormState(Object.assign(Object.assign(Object.assign({}, state), (resolverRef.current ? { isValid: !!isValid } : {})), { isValidating: false }));
	        }
	    }, []);
	    const setFieldValue = React.useCallback((name, rawValue) => {
	        const { ref, options } = fieldsRef.current[name];
	        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
	            ? ''
	            : rawValue;
	        if (isRadioInput(ref)) {
	            (options || []).forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
	        }
	        else if (isFileInput(ref) && !isString(value)) {
	            ref.files = value;
	        }
	        else if (isMultipleSelect(ref)) {
	            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
	        }
	        else if (isCheckBoxInput(ref) && options) {
	            options.length > 1
	                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
	                    ? !!value.find((data) => data === checkboxRef.value)
	                    : value === checkboxRef.value))
	                : (options[0].ref.checked = !!value);
	        }
	        else {
	            ref.value = value;
	        }
	    }, []);
	    const isFormDirty = React.useCallback((name, data) => {
	        if (readFormStateRef.current.isDirty) {
	            const formValues = getValues();
	            name && data && set(formValues, name, data);
	            return !deepEqual(formValues, defaultValuesRef.current);
	        }
	        return false;
	    }, []);
	    const updateAndGetDirtyState = React.useCallback((name, shouldRender = true) => {
	        if (readFormStateRef.current.isDirty ||
	            readFormStateRef.current.dirtyFields) {
	            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
	            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
	            const previousIsDirty = formStateRef.current.isDirty;
	            isFieldDirty
	                ? set(formStateRef.current.dirtyFields, name, true)
	                : unset(formStateRef.current.dirtyFields, name);
	            const state = {
	                isDirty: isFormDirty(),
	                dirtyFields: formStateRef.current.dirtyFields,
	            };
	            const isChanged = (readFormStateRef.current.isDirty &&
	                previousIsDirty !== state.isDirty) ||
	                (readFormStateRef.current.dirtyFields &&
	                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
	            isChanged && shouldRender && updateFormState(state);
	            return isChanged ? state : {};
	        }
	        return {};
	    }, []);
	    const executeValidation = React.useCallback(async (name, skipReRender) => {
	        const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
	        shouldRenderBaseOnError(name, error, skipReRender);
	        return isUndefined(error);
	    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
	    const executeSchemaOrResolverValidation = React.useCallback(async (names) => {
	        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
	        const previousFormIsValid = formStateRef.current.isValid;
	        if (Array.isArray(names)) {
	            const isInputsValid = names
	                .map((name) => {
	                const error = get(errors, name);
	                error
	                    ? set(formStateRef.current.errors, name, error)
	                    : unset(formStateRef.current.errors, name);
	                return !error;
	            })
	                .every(Boolean);
	            updateFormState({
	                isValid: isEmptyObject(errors),
	                isValidating: false,
	            });
	            return isInputsValid;
	        }
	        else {
	            const error = get(errors, names);
	            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
	            return !error;
	        }
	    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
	    const trigger = React.useCallback(async (name) => {
	        const fields = name || Object.keys(fieldsRef.current);
	        updateIsValidating();
	        if (resolverRef.current) {
	            return executeSchemaOrResolverValidation(fields);
	        }
	        if (Array.isArray(fields)) {
	            !name && (formStateRef.current.errors = {});
	            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
	            updateFormState({
	                isValidating: false,
	            });
	            return result.every(Boolean);
	        }
	        return await executeValidation(fields);
	    }, [executeSchemaOrResolverValidation, executeValidation]);
	    const setInternalValues = React.useCallback((name, value, { shouldDirty, shouldValidate }) => {
	        const data = {};
	        set(data, name, value);
	        for (const fieldName of getPath$1(name, value)) {
	            if (fieldsRef.current[fieldName]) {
	                setFieldValue(fieldName, get(data, fieldName));
	                shouldDirty && updateAndGetDirtyState(fieldName);
	                shouldValidate && trigger(fieldName);
	            }
	        }
	    }, [trigger, setFieldValue, updateAndGetDirtyState]);
	    const setInternalValue = React.useCallback((name, value, config) => {
	        !shouldUnregister &&
	            !isPrimitive(value) &&
	            set(shallowFieldsStateRef.current, name, Array.isArray(value) ? [...value] : Object.assign({}, value));
	        if (fieldsRef.current[name]) {
	            setFieldValue(name, value);
	            config.shouldDirty && updateAndGetDirtyState(name);
	            config.shouldValidate && trigger(name);
	        }
	        else if (!isPrimitive(value)) {
	            setInternalValues(name, value, config);
	            if (fieldArrayNamesRef.current.has(name)) {
	                const parentName = getFieldArrayParentName(name) || name;
	                set(fieldArrayDefaultValuesRef.current, name, value);
	                resetFieldArrayFunctionRef.current[parentName]({
	                    [parentName]: get(fieldArrayDefaultValuesRef.current, parentName),
	                });
	                if ((readFormStateRef.current.isDirty ||
	                    readFormStateRef.current.dirtyFields) &&
	                    config.shouldDirty) {
	                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
	                    updateFormState({
	                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
	                    });
	                }
	            }
	        }
	        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
	    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
	    const isFieldWatched = (name) => isWatchAllRef.current ||
	        watchFieldsRef.current.has(name) ||
	        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
	    const renderWatchedInputs = (name) => {
	        let found = true;
	        if (!isEmptyObject(useWatchFieldsRef.current)) {
	            for (const key in useWatchFieldsRef.current) {
	                if (!name ||
	                    !useWatchFieldsRef.current[key].size ||
	                    useWatchFieldsRef.current[key].has(name) ||
	                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
	                    useWatchRenderFunctionsRef.current[key]();
	                    found = false;
	                }
	            }
	        }
	        return found;
	    };
	    function setValue(name, value, config) {
	        setInternalValue(name, value, config || {});
	        isFieldWatched(name) && updateFormState();
	        renderWatchedInputs(name);
	    }
	    handleChangeRef.current = handleChangeRef.current
	        ? handleChangeRef.current
	        : async ({ type, target }) => {
	            let name = target.name;
	            const field = fieldsRef.current[name];
	            let error;
	            let isValid;
	            if (field) {
	                const isBlurEvent = type === EVENTS.BLUR;
	                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
	                    isReValidateOnChange,
	                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
	                let state = updateAndGetDirtyState(name, false);
	                let shouldRender = !isEmptyObject(state) ||
	                    (!isBlurEvent && isFieldWatched(name));
	                if (isBlurEvent &&
	                    !get(formStateRef.current.touched, name) &&
	                    readFormStateRef.current.touched) {
	                    set(formStateRef.current.touched, name, true);
	                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
	                }
	                if (!shouldUnregister && isCheckBoxInput(target)) {
	                    set(shallowFieldsStateRef.current, name, getFieldValue(fieldsRef, name));
	                }
	                if (shouldSkipValidation) {
	                    !isBlurEvent && renderWatchedInputs(name);
	                    return ((!isEmptyObject(state) ||
	                        (shouldRender && isEmptyObject(state))) &&
	                        updateFormState(state));
	                }
	                updateIsValidating();
	                if (resolverRef.current) {
	                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
	                    const previousFormIsValid = formStateRef.current.isValid;
	                    error = get(errors, name);
	                    if (isCheckBoxInput(target) &&
	                        !error &&
	                        resolverRef.current) {
	                        const parentNodeName = getFieldArrayParentName(name);
	                        const currentError = get(errors, parentNodeName, {});
	                        currentError.type &&
	                            currentError.message &&
	                            (error = currentError);
	                        if (parentNodeName &&
	                            (currentError ||
	                                get(formStateRef.current.errors, parentNodeName))) {
	                            name = parentNodeName;
	                        }
	                    }
	                    isValid = isEmptyObject(errors);
	                    previousFormIsValid !== isValid && (shouldRender = true);
	                }
	                else {
	                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
	                }
	                !isBlurEvent && renderWatchedInputs(name);
	                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
	            }
	        };
	    function setFieldArrayDefaultValues(data) {
	        if (!shouldUnregister) {
	            let copy = cloneObject(data);
	            for (const value of fieldArrayNamesRef.current) {
	                if (isKey(value) && !copy[value]) {
	                    copy = Object.assign(Object.assign({}, copy), { [value]: [] });
	                }
	            }
	            return copy;
	        }
	        return data;
	    }
	    function getValues(payload) {
	        if (isString(payload)) {
	            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
	        }
	        if (Array.isArray(payload)) {
	            const data = {};
	            for (const name of payload) {
	                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
	            }
	            return data;
	        }
	        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister));
	    }
	    const validateResolver = React.useCallback(async (values = {}) => {
	        const newDefaultValues = isEmptyObject(fieldsRef.current)
	            ? defaultValuesRef.current
	            : {};
	        const { errors } = (await resolverRef.current(Object.assign(Object.assign(Object.assign({}, newDefaultValues), getValues()), values), contextRef.current, isValidateAllFieldCriteria)) || {};
	        const isValid = isEmptyObject(errors);
	        formStateRef.current.isValid !== isValid &&
	            updateFormState({
	                isValid,
	            });
	    }, [isValidateAllFieldCriteria]);
	    const removeFieldEventListener = React.useCallback((field, forceDelete) => {
	        findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete);
	        if (shouldUnregister) {
	            unset(validFieldsRef.current, field.ref.name);
	            unset(fieldsWithValidationRef.current, field.ref.name);
	        }
	    }, [shouldUnregister]);
	    const updateWatchedValue = React.useCallback((name) => {
	        if (isWatchAllRef.current) {
	            updateFormState();
	        }
	        else {
	            for (const watchField of watchFieldsRef.current) {
	                if (watchField.startsWith(name)) {
	                    updateFormState();
	                    break;
	                }
	            }
	            renderWatchedInputs(name);
	        }
	    }, []);
	    const removeFieldEventListenerAndRef = React.useCallback((field, forceDelete) => {
	        if (field) {
	            removeFieldEventListener(field, forceDelete);
	            if (shouldUnregister && !compact(field.options || []).length) {
	                unset(formStateRef.current.errors, field.ref.name);
	                set(formStateRef.current.dirtyFields, field.ref.name, true);
	                updateFormState({
	                    isDirty: isFormDirty(),
	                });
	                readFormStateRef.current.isValid &&
	                    resolverRef.current &&
	                    validateResolver();
	                updateWatchedValue(field.ref.name);
	            }
	        }
	    }, [validateResolver, removeFieldEventListener]);
	    function clearErrors(name) {
	        name &&
	            (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName] && isKey(inputName)
	                ? delete formStateRef.current.errors[inputName]
	                : unset(formStateRef.current.errors, inputName));
	        updateFormState({
	            errors: name ? formStateRef.current.errors : {},
	        });
	    }
	    function setError(name, error) {
	        const ref = (fieldsRef.current[name] || {}).ref;
	        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
	        updateFormState({
	            isValid: false,
	        });
	        error.shouldFocus && ref && ref.focus && ref.focus();
	    }
	    const watchInternal = React.useCallback((fieldNames, defaultValue, watchId) => {
	        const watchFields = watchId
	            ? useWatchFieldsRef.current[watchId]
	            : watchFieldsRef.current;
	        let fieldValues = getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, false, fieldNames);
	        if (isString(fieldNames)) {
	            const parentNodeName = getFieldArrayParentName(fieldNames) || fieldNames;
	            if (fieldArrayNamesRef.current.has(parentNodeName)) {
	                fieldValues = Object.assign(Object.assign({}, fieldArrayValuesRef.current), fieldValues);
	            }
	            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(get(defaultValuesRef.current, fieldNames))
	                ? defaultValue
	                : get(defaultValuesRef.current, fieldNames), true);
	        }
	        const combinedDefaultValues = isUndefined(defaultValue)
	            ? defaultValuesRef.current
	            : defaultValue;
	        if (Array.isArray(fieldNames)) {
	            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
	        }
	        isWatchAllRef.current = isUndefined(watchId);
	        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
	            combinedDefaultValues);
	    }, []);
	    function watch(fieldNames, defaultValue) {
	        return watchInternal(fieldNames, defaultValue);
	    }
	    function unregister(name) {
	        for (const fieldName of Array.isArray(name) ? name : [name]) {
	            removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
	        }
	    }
	    function registerFieldRef(ref, options = {}) {
	        const { name, type, value } = ref;
	        const fieldRefAndValidationOptions = Object.assign({ ref }, options);
	        const fields = fieldsRef.current;
	        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
	        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
	        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
	        let field = fields[name];
	        let isEmptyDefaultValue = true;
	        let defaultValue;
	        if (field &&
	            (isRadioOrCheckbox
	                ? Array.isArray(field.options) &&
	                    compact(field.options).find((option) => {
	                        return value === option.ref.value && compareRef(option.ref);
	                    })
	                : compareRef(field.ref))) {
	            fields[name] = Object.assign(Object.assign({}, field), options);
	            return;
	        }
	        if (type) {
	            field = isRadioOrCheckbox
	                ? Object.assign({ options: [
	                        ...compact((field && field.options) || []),
	                        {
	                            ref,
	                        },
	                    ], ref: { type, name } }, options) : Object.assign({}, fieldRefAndValidationOptions);
	        }
	        else {
	            field = fieldRefAndValidationOptions;
	        }
	        fields[name] = field;
	        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
	        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
	            defaultValue = get(isEmptyUnmountFields
	                ? defaultValuesRef.current
	                : shallowFieldsStateRef.current, name);
	            isEmptyDefaultValue = isUndefined(defaultValue);
	            if (!isEmptyDefaultValue && !isFieldArray) {
	                setFieldValue(name, defaultValue);
	            }
	        }
	        if (!isEmptyObject(options)) {
	            set(fieldsWithValidationRef.current, name, true);
	            if (!isOnSubmit && readFormStateRef.current.isValid) {
	                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
	                    const previousFormIsValid = formStateRef.current.isValid;
	                    isEmptyObject(error)
	                        ? set(validFieldsRef.current, name, true)
	                        : unset(validFieldsRef.current, name);
	                    previousFormIsValid !== isEmptyObject(error) && updateFormState();
	                });
	            }
	        }
	        if (shouldUnregister && !(isFieldArray && isEmptyDefaultValue)) {
	            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
	        }
	        if (type) {
	            attachEventListeners(isRadioOrCheckbox && field.options
	                ? field.options[field.options.length - 1]
	                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
	        }
	    }
	    function register(refOrRegisterOptions, options) {
	        if (!isWindowUndefined) {
	            if (isString(refOrRegisterOptions)) {
	                registerFieldRef({ name: refOrRegisterOptions }, options);
	            }
	            else if (isObject(refOrRegisterOptions) &&
	                'name' in refOrRegisterOptions) {
	                registerFieldRef(refOrRegisterOptions, options);
	            }
	            else {
	                return (ref) => ref && registerFieldRef(ref, refOrRegisterOptions);
	            }
	        }
	    }
	    const handleSubmit = React.useCallback((onValid, onInvalid) => async (e) => {
	        if (e && e.preventDefault) {
	            e.preventDefault();
	            e.persist();
	        }
	        let fieldErrors = {};
	        let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, true));
	        readFormStateRef.current.isSubmitting &&
	            updateFormState({
	                isSubmitting: true,
	            });
	        try {
	            if (resolverRef.current) {
	                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
	                formStateRef.current.errors = fieldErrors = errors;
	                fieldValues = values;
	            }
	            else {
	                for (const field of Object.values(fieldsRef.current)) {
	                    if (field) {
	                        const { name } = field.ref;
	                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
	                        if (fieldError[name]) {
	                            set(fieldErrors, name, fieldError[name]);
	                            unset(validFieldsRef.current, name);
	                        }
	                        else if (get(fieldsWithValidationRef.current, name)) {
	                            unset(formStateRef.current.errors, name);
	                            set(validFieldsRef.current, name, true);
	                        }
	                    }
	                }
	            }
	            if (isEmptyObject(fieldErrors) &&
	                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
	                updateFormState({
	                    errors: {},
	                    isSubmitting: true,
	                });
	                await onValid(fieldValues, e);
	            }
	            else {
	                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
	                onInvalid && (await onInvalid(formStateRef.current.errors, e));
	                shouldFocusError &&
	                    focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
	            }
	        }
	        finally {
	            formStateRef.current.isSubmitting = false;
	            updateFormState({
	                isSubmitted: true,
	                isSubmitting: false,
	                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
	                submitCount: formStateRef.current.submitCount + 1,
	            });
	        }
	    }, [shouldFocusError, isValidateAllFieldCriteria]);
	    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
	        if (!isValid) {
	            validFieldsRef.current = {};
	            fieldsWithValidationRef.current = {};
	        }
	        fieldArrayDefaultValuesRef.current = {};
	        watchFieldsRef.current = new Set();
	        isWatchAllRef.current = false;
	        updateFormState({
	            submitCount: submitCount ? formStateRef.current.submitCount : 0,
	            isDirty: isDirty ? formStateRef.current.isDirty : false,
	            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
	            isValid: isValid ? formStateRef.current.isValid : false,
	            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
	            touched: touched ? formStateRef.current.touched : {},
	            errors: errors ? formStateRef.current.errors : {},
	            isSubmitting: false,
	            isSubmitSuccessful: false,
	        });
	    };
	    const reset = (values, omitResetState = {}) => {
	        if (isWeb) {
	            for (const field of Object.values(fieldsRef.current)) {
	                if (field) {
	                    const { ref, options } = field;
	                    const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
	                        ? options[0].ref
	                        : ref;
	                    if (isHTMLElement(inputRef)) {
	                        try {
	                            inputRef.closest('form').reset();
	                            break;
	                        }
	                        catch (_a) { }
	                    }
	                }
	            }
	        }
	        fieldsRef.current = {};
	        defaultValuesRef.current = Object.assign({}, (values || defaultValuesRef.current));
	        values && renderWatchedInputs('');
	        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
	        shallowFieldsStateRef.current = shouldUnregister
	            ? {}
	            : cloneObject(values || defaultValuesRef.current);
	        resetRefs(omitResetState);
	    };
	    React.useEffect(() => {
	        resolver && readFormStateRef.current.isValid && validateResolver();
	        observerRef.current =
	            observerRef.current || !isWeb
	                ? observerRef.current
	                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
	    }, [removeFieldEventListenerAndRef, defaultValuesRef.current]);
	    React.useEffect(() => () => {
	        observerRef.current && observerRef.current.disconnect();
	        isUnMount.current = true;
	        Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
	    }, []);
	    if (!resolver && readFormStateRef.current.isValid) {
	        formState.isValid =
	            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
	                isEmptyObject(formStateRef.current.errors);
	    }
	    const commonProps = {
	        trigger,
	        setValue: React.useCallback(setValue, [setInternalValue, trigger]),
	        getValues: React.useCallback(getValues, []),
	        register: React.useCallback(register, [defaultValuesRef.current]),
	        unregister: React.useCallback(unregister, []),
	        formState: isProxyEnabled
	            ? new Proxy(formState, {
	                get: (obj, prop) => {
	                    if (prop in obj) {
	                        readFormStateRef.current[prop] = true;
	                        return obj[prop];
	                    }
	                    return undefined;
	                },
	            })
	            : formState,
	    };
	    const control = React.useMemo(() => (Object.assign({ isFormDirty,
	        updateWatchedValue,
	        shouldUnregister,
	        updateFormState,
	        removeFieldEventListener,
	        watchInternal, mode: modeRef.current, reValidateMode: {
	            isReValidateOnBlur,
	            isReValidateOnChange,
	        }, validateResolver: resolver ? validateResolver : undefined, fieldsRef,
	        resetFieldArrayFunctionRef,
	        useWatchFieldsRef,
	        useWatchRenderFunctionsRef,
	        fieldArrayDefaultValuesRef,
	        validFieldsRef,
	        fieldsWithValidationRef,
	        fieldArrayNamesRef,
	        readFormStateRef,
	        formStateRef,
	        defaultValuesRef,
	        shallowFieldsStateRef,
	        fieldArrayValuesRef }, commonProps)), [
	        defaultValuesRef.current,
	        updateWatchedValue,
	        shouldUnregister,
	        removeFieldEventListener,
	        watchInternal,
	    ]);
	    return Object.assign({ watch,
	        control,
	        handleSubmit, reset: React.useCallback(reset, []), clearErrors: React.useCallback(clearErrors, []), setError: React.useCallback(setError, []), errors: formState.errors }, commonProps);
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	const FormContext = React.createContext(null);
	FormContext.displayName = 'RHFContext';
	const useFormContext = () => React.useContext(FormContext);

	var generateId = () => {
	    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
	        const r = (Math.random() * 16 + d) % 16 | 0;
	        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
	    });
	};

	function removeAtIndexes(data, indexes) {
	    let i = 0;
	    const temp = [...data];
	    for (const index of indexes) {
	        temp.splice(index - i, 1);
	        i++;
	    }
	    return compact(temp).length ? temp : [];
	}
	var removeArrayAt = (data, index) => isUndefined(index)
	    ? []
	    : removeAtIndexes(data, (Array.isArray(index) ? index : [index]).sort((a, b) => a - b));

	var moveArrayAt = (data, from, to) => {
	    if (Array.isArray(data)) {
	        if (isUndefined(data[to])) {
	            data[to] = undefined;
	        }
	        data.splice(to, 0, data.splice(from, 1)[0]);
	        return data;
	    }
	    return [];
	};

	var swapArrayAt = (data, indexA, indexB) => {
	    const temp = [data[indexB], data[indexA]];
	    data[indexA] = temp[0];
	    data[indexB] = temp[1];
	};

	function prepend(data, value) {
	    return [...(Array.isArray(value) ? value : [value || undefined]), ...data];
	}

	function insert(data, index, value) {
	    return [
	        ...data.slice(0, index),
	        ...(Array.isArray(value) ? value : [value || undefined]),
	        ...data.slice(index),
	    ];
	}

	var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

	var fillBooleanArray = (value) => (Array.isArray(value) ? value : [value]).map((data) => {
	    if (isObject(data)) {
	        const object = {};
	        for (const key in data) {
	            object[key] = true;
	        }
	        return object;
	    }
	    return true;
	});

	const mapIds = (values = [], keyName, skipWarn) => {
	    return values.map((value) => (Object.assign({ [keyName]: value[keyName] || generateId() }, value)));
	};
	const useFieldArray = ({ control, name, keyName = 'id', }) => {
	    const methods = useFormContext();
	    const focusIndexRef = React.useRef(-1);
	    const isUnMount = React.useRef(false);
	    const { isFormDirty, updateWatchedValue, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, shallowFieldsStateRef, updateFormState, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, getValues, shouldUnregister, fieldArrayValuesRef, } = control || methods.control;
	    const getDefaultValues = (values) => get(shouldUnregister ? values : shallowFieldsStateRef.current, name, []);
	    const fieldArrayParentName = getFieldArrayParentName(name);
	    const memoizedDefaultValues = React.useRef([
	        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
	            ? getDefaultValues(fieldArrayDefaultValuesRef.current)
	            : getDefaultValues(defaultValuesRef.current)),
	    ]);
	    const [fields, setFields] = React.useState(mapIds(memoizedDefaultValues.current, keyName));
	    set(fieldArrayValuesRef.current, name, fields);
	    const omitKey = (fields) => fields.map((_a = {}) => {
	        var _b = keyName; _a[_b]; var rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
	        return rest;
	    });
	    fieldArrayNamesRef.current.add(name);
	    const getFieldArrayValue = React.useCallback(() => get(fieldArrayValuesRef.current, name, []), [name]);
	    const getCurrentFieldsValues = () => mapIds(get(getValues(), name, getFieldArrayValue()).map((item, index) => (Object.assign(Object.assign({}, getFieldArrayValue()[index]), item))), keyName);
	    fieldArrayNamesRef.current.add(name);
	    if (fieldArrayParentName &&
	        !get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
	        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, cloneObject(get(defaultValuesRef.current, fieldArrayParentName)));
	    }
	    const setFieldAndValidState = (fieldsValues) => {
	        setFields(fieldsValues);
	        set(fieldArrayValuesRef.current, name, fieldsValues);
	        if (readFormStateRef.current.isValid && validateResolver) {
	            const values = getValues();
	            set(values, name, fieldsValues);
	            validateResolver(values);
	        }
	    };
	    const resetFields = () => {
	        for (const key in fieldsRef.current) {
	            if (isMatchFieldArrayName(key, name)) {
	                removeFieldEventListener(fieldsRef.current[key], true);
	                delete fieldsRef.current[key];
	            }
	        }
	    };
	    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
	    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => {
	        if (updatedFieldArrayValues) {
	            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
	        }
	    };
	    const batchStateUpdate = (method, args, updatedFieldValues, updatedFormValues = [], shouldSet = true, shouldUpdateValid = false) => {
	        if (get(shallowFieldsStateRef.current, name)) {
	            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
	            shouldSet && set(shallowFieldsStateRef.current, name, output);
	        }
	        if (get(fieldArrayDefaultValuesRef.current, name)) {
	            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
	            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
	        }
	        if (Array.isArray(get(formStateRef.current.errors, name))) {
	            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
	            shouldSet && set(formStateRef.current.errors, name, output);
	            cleanup(formStateRef.current.errors);
	        }
	        if (readFormStateRef.current.touched &&
	            get(formStateRef.current.touched, name)) {
	            const output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
	            shouldSet && set(formStateRef.current.touched, name, output);
	            cleanup(formStateRef.current.touched);
	        }
	        if (readFormStateRef.current.dirtyFields ||
	            readFormStateRef.current.isDirty) {
	            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFormValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
	            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
	            cleanup(formStateRef.current.dirtyFields);
	        }
	        if (shouldUpdateValid &&
	            readFormStateRef.current.isValid &&
	            !validateResolver) {
	            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
	            cleanup(validFieldsRef.current);
	            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
	            cleanup(fieldsWithValidationRef.current);
	        }
	        if (!isUnMount.current && readFormStateRef.current.isDirty) {
	            updateFormState({
	                isDirty: isFormDirty(name, omitKey(updatedFormValues)),
	            });
	        }
	    };
	    const append = (value, shouldFocus = true) => {
	        const appendValue = Array.isArray(value) ? value : [value];
	        const updateFormValues = [
	            ...getCurrentFieldsValues(),
	            ...mapIds(appendValue, keyName),
	        ];
	        setFieldAndValidState(updateFormValues);
	        if (readFormStateRef.current.dirtyFields ||
	            readFormStateRef.current.isDirty) {
	            updateDirtyFieldsWithDefaultValues(updateFormValues);
	            updateFormState({
	                isDirty: true,
	                dirtyFields: formStateRef.current.dirtyFields,
	            });
	        }
	        !shouldUnregister &&
	            set(shallowFieldsStateRef.current, name, [
	                ...(get(shallowFieldsStateRef.current, name) || []),
	                ...cloneObject(appendValue),
	            ]);
	        focusIndexRef.current = shouldFocus
	            ? get(fieldArrayValuesRef.current, name).length - 1
	            : -1;
	    };
	    const prepend$1 = (value, shouldFocus = true) => {
	        const emptyArray = fillEmptyArray(value);
	        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
	        setFieldAndValidState(updatedFieldArrayValues);
	        resetFields();
	        batchStateUpdate(prepend, {
	            argA: emptyArray,
	            argC: fillBooleanArray(value),
	        }, updatedFieldArrayValues);
	        focusIndexRef.current = shouldFocus ? 0 : -1;
	    };
	    const remove = (index) => {
	        const fieldValues = getCurrentFieldsValues();
	        const updatedFieldValues = removeArrayAt(fieldValues, index);
	        setFieldAndValidState(updatedFieldValues);
	        resetFields();
	        batchStateUpdate(removeArrayAt, {
	            argA: index,
	            argC: index,
	        }, updatedFieldValues, removeArrayAt(fieldValues, index), true, true);
	    };
	    const insert$1 = (index, value, shouldFocus = true) => {
	        const emptyArray = fillEmptyArray(value);
	        const fieldValues = getCurrentFieldsValues();
	        const updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
	        setFieldAndValidState(updatedFieldArrayValues);
	        resetFields();
	        batchStateUpdate(insert, {
	            argA: index,
	            argB: emptyArray,
	            argC: index,
	            argD: fillBooleanArray(value),
	        }, updatedFieldArrayValues, insert(fieldValues, index));
	        focusIndexRef.current = shouldFocus ? index : -1;
	    };
	    const swap = (indexA, indexB) => {
	        const fieldValues = getCurrentFieldsValues();
	        swapArrayAt(fieldValues, indexA, indexB);
	        resetFields();
	        setFieldAndValidState([...fieldValues]);
	        batchStateUpdate(swapArrayAt, {
	            argA: indexA,
	            argB: indexB,
	            argC: indexA,
	            argD: indexB,
	        }, undefined, fieldValues, false);
	    };
	    const move = (from, to) => {
	        const fieldValues = getCurrentFieldsValues();
	        moveArrayAt(fieldValues, from, to);
	        resetFields();
	        setFieldAndValidState([...fieldValues]);
	        batchStateUpdate(moveArrayAt, {
	            argA: from,
	            argB: to,
	            argC: from,
	            argD: to,
	        }, undefined, fieldValues, false);
	    };
	    React.useEffect(() => {
	        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
	        if (defaultValues && fields.length < defaultValues.length) {
	            set(fieldArrayDefaultValuesRef.current, name, defaultValues.slice(1));
	        }
	        updateWatchedValue(name);
	        if (focusIndexRef.current > -1) {
	            for (const key in fieldsRef.current) {
	                const field = fieldsRef.current[key];
	                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
	                    field.ref.focus) {
	                    field.ref.focus();
	                    break;
	                }
	            }
	        }
	        focusIndexRef.current = -1;
	    }, [fields, name]);
	    React.useEffect(() => {
	        const resetFunctions = resetFieldArrayFunctionRef.current;
	        const fieldArrayNames = fieldArrayNamesRef.current;
	        if (!getFieldArrayParentName(name)) {
	            resetFunctions[name] = (data) => {
	                resetFields();
	                !data && unset(fieldArrayDefaultValuesRef.current, name);
	                unset(shallowFieldsStateRef.current, name);
	                memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
	                if (!isUnMount.current) {
	                    setFields(mapIds(memoizedDefaultValues.current, keyName));
	                }
	            };
	        }
	        return () => {
	            isUnMount.current = true;
	            shouldUnregister && remove();
	            resetFields();
	            delete resetFunctions[name];
	            unset(fieldArrayValuesRef.current, name);
	            fieldArrayNames.delete(name);
	        };
	    }, []);
	    return {
	        swap: React.useCallback(swap, [name]),
	        move: React.useCallback(move, [name]),
	        prepend: React.useCallback(prepend$1, [name]),
	        append: React.useCallback(append, [name]),
	        remove: React.useCallback(remove, [name]),
	        insert: React.useCallback(insert$1, [name]),
	        fields: compact(fields),
	    };
	};

	var getInputValue = (event) => isPrimitive(event) ||
	    !isObject(event.target) ||
	    (isObject(event.target) && !event.type)
	    ? event
	    : isUndefined(event.target.value)
	        ? event.target.checked
	        : event.target.value;

	function useController({ name, rules, defaultValue, control, onFocus, }) {
	    const methods = useFormContext();
	    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formState, formStateRef: { current: { isSubmitted, touched, errors }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
	    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
	    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
	        ? get(shallowFieldsStateRef.current, name)
	        : isUndefined(defaultValue)
	            ? get(defaultValuesRef.current, name)
	            : defaultValue;
	    const [value, setInputStateValue] = React.useState(getInitialValue());
	    const valueRef = React.useRef(value);
	    const ref = React.useRef({
	        focus: () => null,
	    });
	    const onFocusRef = React.useRef(onFocus ||
	        (() => {
	            if (isFunction(ref.current.focus)) {
	                ref.current.focus();
	            }
	        }));
	    const shouldValidate = React.useCallback((isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
	        isReValidateOnBlur,
	        isReValidateOnChange,
	        isSubmitted, isTouched: !!get(touched, name) }, mode)), [
	        isReValidateOnBlur,
	        isReValidateOnChange,
	        isSubmitted,
	        touched,
	        name,
	        mode,
	    ]);
	    const commonTask = React.useCallback(([event]) => {
	        const data = getInputValue(event);
	        setInputStateValue(data);
	        valueRef.current = data;
	        return data;
	    }, []);
	    const registerField = React.useCallback((shouldUpdateValue) => {
	        if (fieldsRef.current[name]) {
	            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
	        }
	        else {
	            register(Object.defineProperties({
	                name,
	                focus: onFocusRef.current,
	            }, {
	                value: {
	                    set(data) {
	                        setInputStateValue(data);
	                        valueRef.current = data;
	                    },
	                    get() {
	                        return valueRef.current;
	                    },
	                },
	            }), rules);
	            shouldUpdateValue = isUndefined(get(defaultValuesRef.current, name));
	        }
	        shouldUpdateValue &&
	            isNotFieldArray &&
	            setInputStateValue(getInitialValue());
	    }, [rules, name, register]);
	    React.useEffect(() => () => unregister(name), [name]);
	    React.useEffect(() => {
	        registerField();
	    }, [registerField]);
	    React.useEffect(() => {
	        !fieldsRef.current[name] && registerField(true);
	    });
	    const onBlur = React.useCallback(() => {
	        if (readFormStateRef.current.touched && !get(touched, name)) {
	            set(touched, name, true);
	            updateFormState({
	                touched,
	            });
	        }
	        shouldValidate(true) && trigger(name);
	    }, [name, updateFormState, shouldValidate, trigger, readFormStateRef]);
	    const onChange = React.useCallback((...event) => setValue(name, commonTask(event), {
	        shouldValidate: shouldValidate(),
	        shouldDirty: true,
	    }), [setValue, name, shouldValidate]);
	    return {
	        field: {
	            onChange,
	            onBlur,
	            name,
	            value,
	            ref,
	        },
	        meta: Object.defineProperties({
	            invalid: !!get(errors, name),
	        }, {
	            isDirty: {
	                get() {
	                    return !!get(formState.dirtyFields, name);
	                },
	            },
	            isTouched: {
	                get() {
	                    return !!get(formState.touched, name);
	                },
	            },
	        }),
	    };
	}

	function useWatch({ control, name, defaultValue, }) {
	    const methods = useFormContext();
	    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
	    const updateValue = React.useState()[1];
	    const idRef = React.useRef();
	    const defaultValueRef = React.useRef(defaultValue);
	    React.useEffect(() => {
	        const id = (idRef.current = generateId());
	        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
	        const watchFieldsHook = useWatchFieldsRef.current;
	        watchFieldsHook[id] = new Set();
	        watchFieldsHookRender[id] = () => updateValue({});
	        watchInternal(name, defaultValueRef.current, id);
	        return () => {
	            delete watchFieldsHook[id];
	            delete watchFieldsHookRender[id];
	        };
	    }, [
	        name,
	        useWatchRenderFunctionsRef,
	        useWatchFieldsRef,
	        watchInternal,
	        defaultValueRef,
	    ]);
	    return idRef.current
	        ? watchInternal(name, defaultValueRef.current, idRef.current)
	        : isUndefined(defaultValue)
	            ? isString(name)
	                ? get(defaultValuesRef.current, name)
	                : Array.isArray(name)
	                    ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
	                    : defaultValuesRef.current
	            : defaultValue;
	}

	const Controller = (props) => {
	    const { rules, as, render, defaultValue, control, onFocus } = props, rest = __rest(props, ["rules", "as", "render", "defaultValue", "control", "onFocus"]);
	    const { field, meta } = useController(props);
	    const componentProps = Object.assign(Object.assign({}, rest), field);
	    return as
	        ? React.isValidElement(as)
	            ? React.cloneElement(as, componentProps)
	            : React.createElement(as, componentProps)
	        : render
	            ? render(field, meta)
	            : null;
	};

	var o=function(o){var m=o.as,f=o.errors,i=o.name,u=o.message,c=o.render,g=function(r,e){if(null==r)return {};var s,n,a={},t=Object.keys(r);for(n=0;n<t.length;n++)e.indexOf(s=t[n])>=0||(a[s]=r[s]);return a}(o,["as","errors","name","message","render"]),l=useFormContext(),d=get(f||l.errors,i);if(!d)return null;var p=d.message,v=d.types,h=Object.assign({},g,{children:p||u});return React.isValidElement(m)?React.cloneElement(m,h):c?c({message:p||u,messages:v}):React.createElement(m||React.Fragment,h)};

	var reactDomFactories = createCommonjsModule(function (module, exports) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function(f) {
	  {
	    module.exports = f(React__default['default']);
	    /* global define */
	  }
	})(function(React) {
	  /**
	   * Create a factory that creates HTML tag elements.
	   */
	  function createDOMFactory(type) {
	    var factory = React.createElement.bind(null, type);
	    // Expose the type on the factory and the prototype so that it can be
	    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	    // This should not be named `constructor` since this may not be the function
	    // that created the element, and it may not even be a constructor.
	    factory.type = type;
	    return factory;
	  }
	  /**
	   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	   */
	  var ReactDOMFactories = {
	    a: createDOMFactory('a'),
	    abbr: createDOMFactory('abbr'),
	    address: createDOMFactory('address'),
	    area: createDOMFactory('area'),
	    article: createDOMFactory('article'),
	    aside: createDOMFactory('aside'),
	    audio: createDOMFactory('audio'),
	    b: createDOMFactory('b'),
	    base: createDOMFactory('base'),
	    bdi: createDOMFactory('bdi'),
	    bdo: createDOMFactory('bdo'),
	    big: createDOMFactory('big'),
	    blockquote: createDOMFactory('blockquote'),
	    body: createDOMFactory('body'),
	    br: createDOMFactory('br'),
	    button: createDOMFactory('button'),
	    canvas: createDOMFactory('canvas'),
	    caption: createDOMFactory('caption'),
	    cite: createDOMFactory('cite'),
	    code: createDOMFactory('code'),
	    col: createDOMFactory('col'),
	    colgroup: createDOMFactory('colgroup'),
	    data: createDOMFactory('data'),
	    datalist: createDOMFactory('datalist'),
	    dd: createDOMFactory('dd'),
	    del: createDOMFactory('del'),
	    details: createDOMFactory('details'),
	    dfn: createDOMFactory('dfn'),
	    dialog: createDOMFactory('dialog'),
	    div: createDOMFactory('div'),
	    dl: createDOMFactory('dl'),
	    dt: createDOMFactory('dt'),
	    em: createDOMFactory('em'),
	    embed: createDOMFactory('embed'),
	    fieldset: createDOMFactory('fieldset'),
	    figcaption: createDOMFactory('figcaption'),
	    figure: createDOMFactory('figure'),
	    footer: createDOMFactory('footer'),
	    form: createDOMFactory('form'),
	    h1: createDOMFactory('h1'),
	    h2: createDOMFactory('h2'),
	    h3: createDOMFactory('h3'),
	    h4: createDOMFactory('h4'),
	    h5: createDOMFactory('h5'),
	    h6: createDOMFactory('h6'),
	    head: createDOMFactory('head'),
	    header: createDOMFactory('header'),
	    hgroup: createDOMFactory('hgroup'),
	    hr: createDOMFactory('hr'),
	    html: createDOMFactory('html'),
	    i: createDOMFactory('i'),
	    iframe: createDOMFactory('iframe'),
	    img: createDOMFactory('img'),
	    input: createDOMFactory('input'),
	    ins: createDOMFactory('ins'),
	    kbd: createDOMFactory('kbd'),
	    keygen: createDOMFactory('keygen'),
	    label: createDOMFactory('label'),
	    legend: createDOMFactory('legend'),
	    li: createDOMFactory('li'),
	    link: createDOMFactory('link'),
	    main: createDOMFactory('main'),
	    map: createDOMFactory('map'),
	    mark: createDOMFactory('mark'),
	    menu: createDOMFactory('menu'),
	    menuitem: createDOMFactory('menuitem'),
	    meta: createDOMFactory('meta'),
	    meter: createDOMFactory('meter'),
	    nav: createDOMFactory('nav'),
	    noscript: createDOMFactory('noscript'),
	    object: createDOMFactory('object'),
	    ol: createDOMFactory('ol'),
	    optgroup: createDOMFactory('optgroup'),
	    option: createDOMFactory('option'),
	    output: createDOMFactory('output'),
	    p: createDOMFactory('p'),
	    param: createDOMFactory('param'),
	    picture: createDOMFactory('picture'),
	    pre: createDOMFactory('pre'),
	    progress: createDOMFactory('progress'),
	    q: createDOMFactory('q'),
	    rp: createDOMFactory('rp'),
	    rt: createDOMFactory('rt'),
	    ruby: createDOMFactory('ruby'),
	    s: createDOMFactory('s'),
	    samp: createDOMFactory('samp'),
	    script: createDOMFactory('script'),
	    section: createDOMFactory('section'),
	    select: createDOMFactory('select'),
	    small: createDOMFactory('small'),
	    source: createDOMFactory('source'),
	    span: createDOMFactory('span'),
	    strong: createDOMFactory('strong'),
	    style: createDOMFactory('style'),
	    sub: createDOMFactory('sub'),
	    summary: createDOMFactory('summary'),
	    sup: createDOMFactory('sup'),
	    table: createDOMFactory('table'),
	    tbody: createDOMFactory('tbody'),
	    td: createDOMFactory('td'),
	    textarea: createDOMFactory('textarea'),
	    tfoot: createDOMFactory('tfoot'),
	    th: createDOMFactory('th'),
	    thead: createDOMFactory('thead'),
	    time: createDOMFactory('time'),
	    title: createDOMFactory('title'),
	    tr: createDOMFactory('tr'),
	    track: createDOMFactory('track'),
	    u: createDOMFactory('u'),
	    ul: createDOMFactory('ul'),
	    var: createDOMFactory('var'),
	    video: createDOMFactory('video'),
	    wbr: createDOMFactory('wbr'),

	    // SVG
	    circle: createDOMFactory('circle'),
	    clipPath: createDOMFactory('clipPath'),
	    defs: createDOMFactory('defs'),
	    ellipse: createDOMFactory('ellipse'),
	    g: createDOMFactory('g'),
	    image: createDOMFactory('image'),
	    line: createDOMFactory('line'),
	    linearGradient: createDOMFactory('linearGradient'),
	    mask: createDOMFactory('mask'),
	    path: createDOMFactory('path'),
	    pattern: createDOMFactory('pattern'),
	    polygon: createDOMFactory('polygon'),
	    polyline: createDOMFactory('polyline'),
	    radialGradient: createDOMFactory('radialGradient'),
	    rect: createDOMFactory('rect'),
	    stop: createDOMFactory('stop'),
	    svg: createDOMFactory('svg'),
	    text: createDOMFactory('text'),
	    tspan: createDOMFactory('tspan'),
	  };

	  // due to wrapper and conditionals at the top, this will either become
	  // `module.exports ReactDOMFactories` if that is available,
	  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
	  // if that is available,
	  // otherwise it will be defined as global variable.
	  return ReactDOMFactories;
	});
	});

	/*!@license
	 * UAParser.js v0.7.28
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
	 * Licensed under MIT License
	 */

	var uaParser = createCommonjsModule(function (module, exports) {
	(function (window, undefined$1) {

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '0.7.28',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded',
	        UA_MAX_LENGTH = 255;


	    ///////////
	    // Helper
	    //////////


	    var util = {
	        extend : function (regexes, extensions) {
	            var mergedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    mergedRegexes[i] = regexes[i];
	                }
	            }
	            return mergedRegexes;
	        },
	        has : function (str1, str2) {
	            return typeof str1 === STR_TYPE ? str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1 : false;
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined$1;
	        },
	        trim : function (str, len) {
	            str = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	            return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
	        }
	    };


	    ///////////////
	    // Map helper
	    //////////////


	    var mapper = {

	        rgx : function (ua, arrays) {

	            var i = 0, j, k, p, q, matches, match;

	            // loop through all regexes maps
	            while (i < arrays.length && !matches) {

	                var regex = arrays[i],       // even sequence (0,2,4,..)
	                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
	                j = k = 0;

	                // try matching uastring with regexes
	                while (j < regex.length && !matches) {

	                    matches = regex[j++].exec(ua);

	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        this[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        this[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
	                                    } else {
	                                        // sanitize match using given regex
	                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
	                                    }
	                                } else if (q.length == 4) {
	                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
	                                }
	                            } else {
	                                this[q] = match ? match : undefined$1;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	        },

	        str : function (str, map) {

	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined$1 : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined$1 : i;
	                }
	            }
	            return str;
	        }
	    };


	    ///////////////
	    // String map
	    //////////////


	    var maps = {

	        browser : {
	            // Safari < 3.0
	            oldSafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            },
	            oldEdge : {
	                version : {
	                    '0.1'   : '12.',
	                    '21'    : '13.',
	                    '31'    : '14.',
	                    '39'    : '15.',
	                    '41'    : '16.',
	                    '42'    : '17.',
	                    '44'    : '18.'
	                }
	            }
	        },

	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };


	    //////////////
	    // Regex map
	    /////////////


	    var regexes = {

	        browser : [[

	            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
	            ], [VERSION, [NAME, 'Chrome']], [
	            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
	            ], [VERSION, [NAME, 'Edge']], [
	            // breaking change (reserved for next major release):
	            ///edge\/([\w\.]+)/i                                                  // Old Edge (Trident)
	            //], [[VERSION, mapper.str, maps.browser.oldEdge.version], [NAME, 'Edge']], [

	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,                // Opera Mobi/Tablet
	            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,                         // Opera
	            ], [NAME, VERSION], [
	            /opios[\/\s]+([\w\.]+)/i                                            // Opera mini on iphone >= 8.0
	            ], [VERSION, [NAME, 'Opera Mini']], [
	            /\sopr\/([\w\.]+)/i                                                 // Opera Webkit
	            ], [VERSION, [NAME, 'Opera']], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,     // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	            // Trident based
	            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,             // Avant/IEMobile/SlimBrowser
	            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,                                 // Baidu Browser
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

	            // Webkit/KHTML based
	            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
	                                                                                // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
	            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,         // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
	            /(weibo)__([\d\.]+)/i                                               // Weibo
	            ], [NAME, VERSION], [
	            /(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i           // UCBrowser
	            ], [VERSION, [NAME, 'UCBrowser']], [
	            /(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i      // WeChat Desktop for Windows Built-in Browser
	            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
	            /micromessenger\/([\w\.]+)/i                                        // WeChat
	            ], [VERSION, [NAME, 'WeChat']], [
	            /konqueror\/([\w\.]+)/i                                             // Konqueror
	            ], [VERSION, [NAME, 'Konqueror']], [
	            /trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i                     // IE11
	            ], [VERSION, [NAME, 'IE']], [
	            /yabrowser\/([\w\.]+)/i                                             // Yandex
	            ], [VERSION, [NAME, 'Yandex']], [
	            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
	            ], [[NAME, /(.+)/, '$1 Secure Browser'], VERSION], [
	            /focus\/([\w\.]+)/i                                                 // Firefox Focus
	            ], [VERSION, [NAME, 'Firefox Focus']], [
	            /opt\/([\w\.]+)/i                                                   // Opera Touch
	            ], [VERSION, [NAME, 'Opera Touch']], [
	            /coc_coc_browser\/([\w\.]+)/i                                       // Coc Coc Browser
	            ], [VERSION, [NAME, 'Coc Coc']], [
	            /dolfin\/([\w\.]+)/i                                                // Dolphin
	            ], [VERSION, [NAME, 'Dolphin']], [
	            /coast\/([\w\.]+)/i                                                 // Opera Coast
	            ], [VERSION, [NAME, 'Opera Coast']],
	            [/xiaomi\/miuibrowser\/([\w\.]+)/i                                  // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [
	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [
	            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
	            ], [[NAME, '360 Browser']], [
	            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
	            ], [[NAME, /(.+)/, '$1 Browser'], VERSION], [                       // Oculus/Samsung/Sailfish Browser
	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [
	            /\s(electron)\/([\w\.]+)\ssafari/i,                                 // Electron-based App
	            /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,                // Tesla
	            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i           // QQBrowser/Baidu App/2345 Browser
	            ], [NAME, VERSION], [
	            /(MetaSr)[\/\s]?([\w\.]+)/i,                                        // SouGouBrowser
	            /(LBBROWSER)/i                                                      // LieBao Browser
	            ], [NAME], [

	            // WebView
	            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android with version
	            ], [VERSION, [NAME, 'Facebook']], [
	            /FBAN\/FBIOS|FB_IAB\/FB4A/i                                         // Facebook App for iOS & Android without version
	            ], [[NAME, 'Facebook']], [
	            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
	            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
	            /(chromium|instagram)[\/\s]([\w\.-]+)/i                             // Chromium/Instagram
	            ], [NAME, VERSION], [
	            /\bgsa\/([\w\.]+)\s.*safari\//i                                     // Google Search Appliance on iOS
	            ], [VERSION, [NAME, 'GSA']], [

	            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
	            ], [VERSION, [NAME, 'Chrome Headless']], [

	            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
	            ], [[NAME, 'Chrome WebView'], VERSION], [

	            /droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i         // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [

	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i      // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [

	            /version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i                      // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [
	            /version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i                   // Safari & Safari Mobile
	            ], [VERSION, NAME], [
	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldSafari.version]], [

	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /ile\svr;\srv:([\w\.]+)\).+firefox/i                                // Firefox Reality
	            ], [VERSION, [NAME, 'Firefox Reality']], [
	            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,                       // Other Firefox-based
	            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,                        // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]
	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
	            ], [[ARCHITECTURE, 'ia32']], [

	            /\b(aarch64|armv?8e?l?)\b/i                                         // ARM64
	            ], [[ARCHITECTURE, 'arm64']], [

	            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
	            ], [[ARCHITECTURE, 'armhf']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],

	        device : [[

	            //////////////////////////
	            // MOBILES & TABLETS
	            // Ordered by popularity
	            /////////////////////////

	            // Samsung
	            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i
	            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
	            /\ssamsung[\s-]([\w-]+)/i,
	            /sec-(sgh\w+)/i
	            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, MOBILE]], [

	            // Apple
	            /\((ip(?:hone|od)[\s\w]*);/i                                        // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
	            /\((ipad);[\w\s\),;-]+apple/i,                                      // iPad
	            /applecoremedia\/[\w\.]+\s\((ipad)/i,
	            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

	            // Huawei
	            /\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i,
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [
	            /d\/huawei([\w\s-]+)[;\)]/i,
	            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
	            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i
	            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

	            // Xiaomi
	            /\b(poco[\s\w]+)(?:\sbuild|\))/i,                                   // Xiaomi POCO
	            /\b;\s(\w+)\sbuild\/hm\1/i,                                         // Xiaomi Hongmi 'numeric' models
	            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,                       // Xiaomi Hongmi
	            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,              // Xiaomi Redmi
	            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i  // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
	            /\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i                  // Mi Pad tablets
	            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [

	            // OPPO
	            /;\s(\w+)\sbuild.+\soppo/i,
	            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

	            // Vivo
	            /\svivo\s(\w+)(?:\sbuild|\))/i,
	            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i
	            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

	            // Realme
	            /\s(rmx[12]\d{3})(?:\sbuild|;)/i
	            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

	            // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
	            /\smot(?:orola)?[\s-](\w*)/i,
	            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

	            // LG
	            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
	            /(lm-?f100[nv]?|nexus\s[45])/i,
	            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
	            /\blg(\-?[\d\w]+)\sbuild/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

	            // Lenovo
	            /(ideatab[\w\-\s]+)/i,
	            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i        // Lenovo tablets
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            // Nokia
	            /(?:maemo|nokia).*(n900|lumia\s\d+)/i,
	            /nokia[\s_-]?([\w\.-]*)/i
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

	            // Google
	            /droid.+;\s(pixel\sc)[\s)]/i                                        // Google Pixel C
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [
	            /droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i                    // Google Pixel
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

	            // Sony
	            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /sony\stablet\s[ps]\sbuild\//i,
	            /(?:sony)?sgp\w+(?:\sbuild\/|\))/i
	            ], [[MODEL, 'Xperia Tablet'], [VENDOR, 'Sony'], [TYPE, TABLET]], [

	            // OnePlus
	            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
	            /\ba000(1)\sbuild/i,                                                // OnePlus
	            /\boneplus\s(a\d{4})[\s)]/i
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

	            // Amazon
	            /(alexa)webm/i,
	            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,                                    // Kindle Fire without Silk
	            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i                                 // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i                    // Fire Phone
	            ], [[MODEL, 'Fire Phone'], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

	            // BlackBerry
	            /\((playbook);[\w\s\),;-]+(rim)/i                                   // BlackBerry PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [
	            /((?:bb[a-f]|st[hv])100-\d)/i,
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [

	            // Asus
	            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i
	            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, TABLET]], [
	            /\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i
	            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, MOBILE]], [

	            // HTC
	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
	            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,                    // HTC

	            // ZTE
	            /(zte)-(\w*)/i,
	            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

	            // Acer
	            /droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            // Meizu
	            /droid.+;\s(m[1-5]\snote)\sbuild/i,
	            /\bmz-([\w-]{2,})/i
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

	            // MIXED
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
	                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i,                                                   // Asus
	            /(microsoft);\s(lumia[\s\w]+)/i,                                    // Microsoft Lumia
	            /(lenovo)[_\s-]?([\w-]+)/i,                                         // Lenovo
	            /linux;.+(jolla);/i,                                                // Jolla
	            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i                              // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i,                                 // Dell Streak
	            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,                   // Le Pan Tablets
	            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,                         // Trinity Tablets
	            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,                             // Gigaset Tablets
	            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i                            // Vodafone
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /\s(surface\sduo)\s/i                                               // Surface Duo
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, TABLET]], [
	            /droid\s[\d\.]+;\s(fp\du?)\sbuild/i
	            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
	            /\s(u304aa)\sbuild/i                                                // AT&T
	            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
	            /sie-(\w*)/i                                                        // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
	            /[;\/]\s?(rct\w+)\sbuild/i                                          // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
	            /[;\/\s](venue[\d\s]{2,7})\sbuild/i                                 // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
	            /[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i                                   // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
	            /[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i          // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
	            /[;\/]\s(tm\d{3}\w+)\sbuild/i
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
	            /;\s(k88)\sbuild/i                                                  // ZTE K Series Tablet
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
	            /;\s(nx\d{3}j)\sbuild/i                                             // ZTE Nubia
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	            /[;\/]\s?(gen\d{3})\sbuild.*49h/i                                   // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
	            /[;\/]\s?(zur\d{3})\sbuild/i                                        // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
	            /[;\/]\s?((zeki)?tb.*\b)\sbuild/i                                   // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
	            /[;\/]\s([yr]\d{2})\sbuild/i,
	            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i                   // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
	            /[;\/]\s?(ns-?\w{0,9})\sbuild/i                                     // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
	            /[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i                             // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
	            /[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i
	            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones
	            /[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i                                // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
	            /;\s(ph-1)\s/i
	            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1
	            /[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i                    // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
	            /[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i                                 // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
	            /[;\/]\s?tu_(1491)\sbuild/i                                         // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
	            /(shield[\w\s]+)\sbuild/i                                           // Nvidia Shield Tablets
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
	            /(sprint)\s(\w+)/i                                                  // Sprint Phones
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
	            /droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i     // Zebra
	            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, TABLET]], [
	            /droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i
	            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, MOBILE]], [

	            ///////////////////
	            // CONSOLES
	            ///////////////////

	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3utch]+)/i                                       // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	            /droid.+;\s(shield)\sbuild/i                                        // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
	            /(playstation\s[345portablevi]+)/i                                  // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
	            /[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i                        // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [

	            ///////////////////
	            // SMARTTVS
	            ///////////////////

	            /smart-tv.+(samsung)/i                                              // Samsung
	            ], [VENDOR, [TYPE, SMARTTV]], [
	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [
	            /(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i,              // LG SmartTV
	            ], [[VENDOR, 'LG'], [TYPE, SMARTTV]], [
	            /(apple)\s?tv/i                                                     // Apple TV
	            ], [VENDOR, [MODEL, 'Apple TV'], [TYPE, SMARTTV]], [
	            /crkey/i                                                            // Google Chromecast
	            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [
	            /droid.+aft([\w])(\sbuild\/|\))/i                                   // Fire TV
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [
	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
	            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [
	            /[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i                 // SmartTV from Unidentified Vendors
	            ], [[TYPE, SMARTTV]], [

	            ///////////////////
	            // WEARABLES
	            ///////////////////

	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
	            /droid.+;\s(glass)\s\d/i                                            // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
	            /droid\s[\d\.]+;\s(wt63?0{2,3})\)/i
	            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, WEARABLE]], [

	            ///////////////////
	            // EMBEDDED
	            ///////////////////

	            /(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i                   // Tesla
	            ], [VENDOR, [TYPE, EMBEDDED]], [

	            ////////////////////
	            // MIXED (GENERIC)
	            ///////////////////

	            /droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i    // Android Phones from Unidentified Vendors
	            ], [MODEL, [TYPE, MOBILE]], [
	            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i  // Android Tablets from Unidentified Vendors
	            ], [MODEL, [TYPE, TABLET]], [
	            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
	            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize]], [
	            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']], [
	            /(phone)/i
	            ], [[TYPE, MOBILE]]
	        ],

	        engine : [[

	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [

	            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
	            ], [VERSION, [NAME, 'Blink']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
	            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
	            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

	            // iOS/macOS
	            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,          // iOS
	            /cfnetwork\/.+darwin/i
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
	            /(mac\sos\sx)\s?([\w\s\.]*)/i,
	            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i                         // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Mobile OSes                                                      // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
	            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
	            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
	            /\((series40);/i                                                    // Series 40
	            ], [NAME, VERSION], [
	            /\(bb(10);/i                                                        // BlackBerry 10
	            ], [VERSION, [NAME, 'BlackBerry']], [
	            /(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i       // Symbian
	            ], [VERSION, [NAME, 'Symbian']], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS']], [
	            /web0s;.+rt(tv)/i,
	            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
	            ], [VERSION, [NAME, 'webOS']], [

	            // Google Chromecast
	            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
	            ], [VERSION, [NAME, 'Chromecast']], [
	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Console
	            /(nintendo|playstation)\s([wids345portablevuch]+)/i,                // Nintendo/Playstation
	            /(xbox);\s+xbox\s([^\);]+)/i,                                       // Microsoft Xbox (360, One, X, S, Series X, Series S)

	            // GNU/Linux based
	            /(mint)[\/\s\(\)]?(\w*)/i,                                          // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
	            /(gnu)\s?([\w\.]*)/i,                                               // GNU

	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,  // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            /(haiku)\s(\w+)/i                                                   // Haiku
	            ], [NAME, VERSION], [

	            // Other
	            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [
	            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,  // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
	            /(unix)\s?([\w\.]*)/i                                               // UNIX
	            ], [NAME, VERSION]
	        ]
	    };


	    /////////////////
	    // Constructor
	    ////////////////
	    var UAParser = function (ua, extensions) {

	        if (typeof ua === 'object') {
	            extensions = ua;
	            ua = undefined$1;
	        }

	        if (!(this instanceof UAParser)) {
	            return new UAParser(ua, extensions).getResult();
	        }

	        var _ua = ua || ((typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var _rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var _browser = { name: undefined$1, version: undefined$1 };
	            mapper.rgx.call(_browser, _ua, _rgxmap.browser);
	            _browser.major = util.major(_browser.version); // deprecated
	            return _browser;
	        };
	        this.getCPU = function () {
	            var _cpu = { architecture: undefined$1 };
	            mapper.rgx.call(_cpu, _ua, _rgxmap.cpu);
	            return _cpu;
	        };
	        this.getDevice = function () {
	            var _device = { vendor: undefined$1, model: undefined$1, type: undefined$1 };
	            mapper.rgx.call(_device, _ua, _rgxmap.device);
	            return _device;
	        };
	        this.getEngine = function () {
	            var _engine = { name: undefined$1, version: undefined$1 };
	            mapper.rgx.call(_engine, _ua, _rgxmap.engine);
	            return _engine;
	        };
	        this.getOS = function () {
	            var _os = { name: undefined$1, version: undefined$1 };
	            mapper.rgx.call(_os, _ua, _rgxmap.os);
	            return _os;
	        };
	        this.getResult = function () {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return _ua;
	        };
	        this.setUA = function (ua) {
	            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? util.trim(ua, UA_MAX_LENGTH) : ua;
	            return this;
	        };
	        this.setUA(_ua);
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };

	    ///////////
	    // Export
	    //////////


	    // check js environment
	    {
	        // nodejs env
	        if (module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    }

	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = typeof window !== 'undefined' && (window.jQuery || window.Zepto);
	    if ($ && !$.ua) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function () {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : commonjsGlobal$1);
	});

	var global$1 = typeof global$1 !== "undefined"
	    ? global$1
	    : typeof globalThis !== "undefined"
	        ? globalThis
	        : {};
	/**
	 * Used to evaluate whether or not to render a component
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} options.props - Props to test comparison values against, usually Object.assign(jsonx.props,jsonx.asyncprops,jsonx.thisprops,jsonx.windowprops)
	 * @returns {Boolean} returns true if all comparisons are true or if using or comparisons, at least one condition is true
	 * @example
	 const sampleJSONX = {
	  component: 'div',
	  props: {
	    id: 'generatedJSONX',
	    className: 'jsonx',
	    bigNum: 1430931039,
	    smallNum: 0.425,
	    falsey: false,
	    truthy: true,
	  },
	  children: 'some div',
	};
	const testJSONX = Object.assign({}, sampleJSONX, {
	  comparisonprops: [{
	    left: ['truthy',],
	    operation:'==',
	    right:['falsey',],
	  }],
	});
	displayComponent({ jsonx: testJSONX, props: testJSONX2.props, }) // => false
	 */
	function displayComponent$1(options = {}) {
	    const { jsonx = {}, props } = options;
	    const propsToCompare = jsonx.comparisonprops;
	    const comparisons = Array.isArray(propsToCompare)
	        ? propsToCompare.map(comp => {
	            const compares = {};
	            if (Array.isArray(comp.left)) {
	                compares.left = comp.left;
	            }
	            if (Array.isArray(comp.right)) {
	                compares.right = comp.right;
	            }
	            const propcompares = traverse(compares, props || jsonx.props);
	            const opscompares = Object.assign({}, comp, propcompares);
	            // console.debug({ opscompares, compares, renderedCompProps });
	            switch (opscompares.operation) {
	                case "eq":
	                case "==":
	                    // return opscompares.left == opscompares.right;
	                    // eslint-disable-next-line
	                    return opscompares.left == opscompares.right;
	                case "dneq":
	                case "!=":
	                case "!":
	                    // return opscompares.left != opscompares.right;
	                    return opscompares.left !== opscompares.right;
	                case "dnseq":
	                case "!==":
	                    return opscompares.left !== opscompares.right;
	                case "seq":
	                case "===":
	                    return opscompares.left === opscompares.right;
	                case "lt":
	                case "<":
	                    return opscompares.left < opscompares.right;
	                case "lte":
	                case "<=":
	                    return opscompares.left <= opscompares.right;
	                case "gt":
	                case ">":
	                    return opscompares.left > opscompares.right;
	                case "gte":
	                case ">=":
	                    return opscompares.left >= opscompares.right;
	                case "dne":
	                case "undefined":
	                case "null":
	                    return opscompares.left === undefined || opscompares.left === null;
	                case "!null":
	                case "!undefined":
	                case "exists":
	                default:
	                    //'exists'
	                    return opscompares.left !== undefined && opscompares.left !== null;
	            }
	            // }
	            // if (opscompares.operation === 'eq') {
	            //   // return opscompares.left == opscompares.right;
	            //   // eslint-disable-next-line
	            //   return opscompares.left == opscompares.right;
	            // } else if (opscompares.operation === 'dneq') {
	            //   // return opscompares.left != opscompares.right;
	            //   return opscompares.left !== opscompares.right;
	            // } else if (opscompares.operation === 'dnseq') {
	            //   return opscompares.left !== opscompares.right;
	            // } else if (opscompares.operation === 'seq') {
	            //   return opscompares.left === opscompares.right;
	            // } else if (opscompares.operation === 'lt') {
	            //   return opscompares.left < opscompares.right;
	            // } else if (opscompares.operation === 'lte') {
	            //   return opscompares.left <= opscompares.right;
	            // } else if (opscompares.operation === 'gt') {
	            //   return opscompares.left > opscompares.right;
	            // } else if (opscompares.operation === 'gte') {
	            //   return opscompares.left >= opscompares.right;
	            // } else if (opscompares.operation === 'dne') {
	            //   return opscompares.left === undefined || opscompares.left === null;
	            // } else { //'exists'
	            //   return opscompares.left !== undefined && opscompares.left !== null;
	            // }
	        })
	        : [];
	    const validProps = comparisons.filter(comp => comp === true);
	    if (!jsonx.comparisonprops) {
	        return true;
	    }
	    else if (jsonx.comparisonorprops && validProps.length < 1) {
	        return false;
	    }
	    else if (validProps.length !== comparisons.length &&
	        !jsonx.comparisonorprops) {
	        return false;
	    }
	    else {
	        return true;
	    }
	}
	/**
	 * Use to test if can bind components this context for react-redux-router
	 * @returns {Boolean} true if browser is not IE or old android / chrome
	 */
	function getAdvancedBinding() {
	    var window = window;
	    if (typeof window === "undefined") {
	        if (this && this.window) {
	            window = this.window;
	        }
	        else if (typeof global$1 !== "undefined" && (typeof global$1!=="undefined" ? global$1 : window).window) {
	            window = (typeof global$1!=="undefined" ? global$1 : window).window;
	        }
	        else if (typeof globalThis !== "undefined" && globalThis.window) {
	            window = globalThis.window;
	        }
	        if (!window || !window.navigator)
	            return false;
	    }
	    try {
	        if (window &&
	            window.navigator &&
	            window.navigator.userAgent &&
	            typeof window.navigator.userAgent === "string") {
	            // console.log('window.navigator.userAgent',window.navigator.userAgent)
	            if (window.navigator.userAgent.indexOf("Trident") !== -1) {
	                return false;
	            }
	            const uastring = window.navigator.userAgent;
	            //@ts-ignore
	            const parser = new uaParser();
	            parser.setUA(uastring);
	            const parseUserAgent = parser.getResult();
	            // console.log({ parseUserAgent, });
	            if ((parseUserAgent.browser.name === "Chrome" ||
	                parseUserAgent.browser.name === "Chrome WebView") &&
	                parseUserAgent.os.name === "Android" &&
	                parseInt(parseUserAgent.browser.version, 10) < 50) {
	                return false;
	            }
	            if (parseUserAgent.browser.name === "Android Browser") {
	                return false;
	            }
	        }
	    }
	    catch (e) {
	        console.error(e);
	        // console.warn('could not detect browser support', e);
	        return false;
	    }
	    return true;
	}
	/**
	 * take an object of array paths to traverse and resolve
	 * @example
	 * const testObj = {
	      user: {
	        name: 'jsonx',
	        description: 'react withouth javascript',
	      },
	      stats: {
	        logins: 102,
	        comments: 3,
	      },
	      authentication: 'OAuth2',
	    };
	const testVals = { auth: ['authentication', ], username: ['user', 'name', ], };

	 traverse(testVals, testObj) // =>{ auth:'OAuth2', username:'jsonx',  }
	 * @param {Object} paths - an object to resolve array property paths
	 * @param {Object} data - object to traverse
	 * @returns {Object} resolved object with traversed properties
	 * @throws {TypeError}
	 */
	function traverse(paths = {}, data = {}) {
	    let keys = Object.keys(paths);
	    if (!keys.length)
	        return paths;
	    return keys.reduce((result, key) => {
	        //@ts-ignore
	        if (typeof paths[key] === "string")
	            result[key] = data[paths[key]];
	        else if (Array.isArray(paths[key])) {
	            let _path = Object.assign([], paths[key]);
	            let value = data;
	            while (_path.length && value && typeof value === "object") {
	                let prop = _path.shift();
	                //@ts-ignore
	                value = value[prop];
	            }
	            result[key] = _path.length ? undefined : value;
	        }
	        else
	            throw new TypeError("dynamic property paths must be a string or an array of strings or numeric indexes");
	        return result;
	    }, {});
	}
	/**
	 * Validates JSONX JSON Syntax
	 * @example
	 * validateJSONX({component:'p',children:'hello world'})=>true
	 * validateJSONX({children:'hello world'})=>throw SyntaxError('[0001] Missing React Component')
	 * @param {Object} jsonx - JSONX JSON to validate
	 * @param {Boolean} [returnAllErrors=false] - flag to either throw error or to return all errors in an array of errors
	 * @returns {Boolean|Error[]} either returns true if JSONX is valid, or throws validation error or returns list of errors in array
	 * @throws {SyntaxError|TypeError|ReferenceError}
	 */
	function validateJSONX(jsonx = {}, returnAllErrors = false) {
	    const dynamicPropsNames = [
	        "asyncprops",
	        "resourceprops",
	        "windowprops",
	        "thisprops",
	        "thisstate",
	        "thiscontext"
	    ];
	    const evalPropNames = [
	        "__dangerouslyEvalProps",
	        "__dangerouslyBindEvalProps"
	    ];
	    const validKeys = [
	        "component",
	        "props",
	        "test",
	        "children",
	        "__spreadComponent",
	        "__inline",
	        "__functionargs",
	        "__dangerouslyInsertComponents",
	        "__dangerouslyInsertComponentProps",
	        "__dangerouslyInsertJSONXComponents",
	        "__functionProps",
	        "__functionparams",
	        "__windowComponents",
	        "__windowComponentProps",
	        "comparisonprops",
	        "comparisonorprops",
	        "passprops",
	        "removeprops",
	        "includeprops",
	        "exposeprops",
	        "useformregister",
	        "debug",
	        "___stringifyChildren",
	        "___toStringChildren",
	        "___toNumeral",
	        "___FromLuxonTimeZone",
	        "___ISOtoLuxonString",
	        "___JSDatetoLuxonString",
	        "___template"
	    ].concat(dynamicPropsNames, evalPropNames);
	    let errors = [];
	    if (!jsonx.component) {
	        errors.push(SyntaxError("[0001] Missing React Component"));
	    }
	    if (jsonx.props) {
	        if (typeof jsonx.props !== "object" || Array.isArray(jsonx.props)) {
	            errors.push(TypeError("[0002] " +
	                jsonx.component +
	                ": props must be an Object / valid React props"));
	        }
	        if (jsonx.props.children &&
	            (typeof jsonx.props.children !== "string" ||
	                !Array.isArray(jsonx.props.children))) {
	            errors.push(TypeError("[0003] " +
	                jsonx.component +
	                ": props.children must be an array of JSONX JSON objects or a string"));
	        }
	        if (jsonx.props._children &&
	            (typeof jsonx.props._children !== "string" ||
	                !Array.isArray(jsonx.props._children))) {
	            errors.push(TypeError("[0004] " +
	                jsonx.component +
	                ": props._children must be an array of JSONX JSON objects or a string"));
	        }
	    }
	    if (jsonx.children) {
	        if (typeof jsonx.children !== "string" && !Array.isArray(jsonx.children)) {
	            errors.push(TypeError("[0005] " +
	                jsonx.component +
	                ": children must be an array of JSONX JSON objects or a string"));
	        }
	        if (Array.isArray(jsonx.children)) {
	            const childrenErrors = jsonx.children
	                .filter(c => typeof c === "object")
	                .map(c => validateJSONX(c, returnAllErrors));
	            errors = errors.concat(...childrenErrors);
	        }
	    }
	    dynamicPropsNames.forEach(dynamicprop => {
	        const jsonxDynamicProps = jsonx[dynamicprop];
	        if (jsonxDynamicProps) {
	            // if (dynamicprop === 'thisprops') {
	            //   console.log({ dynamicprop, jsonxDynamicProps });
	            // }
	            if (typeof jsonxDynamicProps !== "object") {
	                errors.push(TypeError(`[0006] ${dynamicprop} must be an object`));
	            }
	            Object.keys(jsonxDynamicProps).forEach(resolvedDynamicProp => {
	                if (!Array.isArray(jsonxDynamicProps[resolvedDynamicProp])) {
	                    errors.push(TypeError(`[0007] jsonx.${dynamicprop}.${resolvedDynamicProp} must be an array of strings`));
	                }
	                if (Array.isArray(jsonxDynamicProps[resolvedDynamicProp])) {
	                    const allStringArray = jsonxDynamicProps[resolvedDynamicProp].filter((propArrayItem) => typeof propArrayItem === "string");
	                    if (allStringArray.length !==
	                        jsonxDynamicProps[resolvedDynamicProp].length) {
	                        errors.push(TypeError(`[0008] jsonx.${dynamicprop}.${resolvedDynamicProp} must be an array of strings`));
	                    }
	                }
	            });
	        }
	    });
	    const evalProps = jsonx.__dangerouslyEvalProps;
	    const boundEvalProps = jsonx.__dangerouslyBindEvalProps;
	    if (evalProps || boundEvalProps) {
	        if ((evalProps && typeof evalProps !== "object") ||
	            (boundEvalProps && typeof boundEvalProps !== "object")) {
	            errors.push(TypeError("[0009] __dangerouslyEvalProps must be an object of strings to convert to valid javascript"));
	        }
	        evalPropNames
	            .filter(evalProp => jsonx[evalProp])
	            .forEach(eProps => {
	            const evProp = jsonx[eProps];
	            const scopedEval = eval;
	            Object.keys(evProp).forEach(propToEval => {
	                if (typeof evProp[propToEval] !== "string") {
	                    errors.push(TypeError(`[0010] jsonx.${eProps}.${evProp} must be a string`));
	                }
	                try {
	                    // console.log({ eProps });
	                    if (eProps === "__dangerouslyBindEvalProps") {
	                        const funcToBind = scopedEval(`(${evProp[propToEval]})`);
	                        funcToBind.call({ bounded: true });
	                    }
	                    else {
	                        scopedEval(evProp[propToEval]);
	                    }
	                }
	                catch (e) {
	                    errors.push(e);
	                }
	            });
	        });
	    }
	    if (jsonx.__dangerouslyInsertComponents) {
	        Object.keys(jsonx.__dangerouslyInsertComponents).forEach(insertedComponents => {
	            try {
	                if (jsonx.__dangerouslyInsertComponents)
	                    validateJSONX(jsonx.__dangerouslyInsertComponents[insertedComponents]);
	            }
	            catch (e) {
	                errors.push(TypeError(`[0011] jsonx.__dangerouslyInsertComponents.${insertedComponents} must be a valid JSONX JSON Object: ${e.toString()}`));
	            }
	        });
	    }
	    if (jsonx.__functionProps) {
	        if (typeof jsonx.__functionProps !== "object") {
	            errors.push(TypeError("[0012] jsonx.__functionProps  must be an object"));
	        }
	        else {
	            Object.keys(jsonx.__functionProps).forEach(fProp => {
	                if (jsonx.__functionProps &&
	                    jsonx.__functionProps[fProp] &&
	                    (typeof jsonx.__functionProps[fProp] !== "string" ||
	                        jsonx.__functionProps[fProp].indexOf("func:") === -1)) {
	                    errors.push(ReferenceError(`[0013] jsonx.__functionProps.${fProp} must reference a function (i.e. func:this.props.logoutUser())`));
	                }
	            });
	        }
	    }
	    if (jsonx.__windowComponentProps &&
	        (typeof jsonx.__windowComponentProps !== "object" ||
	            Array.isArray(jsonx.__windowComponentProps))) {
	        errors.push(TypeError("[0013] jsonx.__windowComponentProps  must be an object"));
	    }
	    if (jsonx.__windowComponents) {
	        if (typeof jsonx.__windowComponents !== "object") {
	            errors.push(TypeError("[0014] jsonx.__windowComponents must be an object"));
	        }
	        Object.keys(jsonx.__windowComponents).forEach(cProp => {
	            if (typeof jsonx.__windowComponents[cProp] !== "string" ||
	                jsonx.__windowComponents[cProp].indexOf("func:") === -1) {
	                errors.push(ReferenceError(`[0015] jsonx.__windowComponents.${cProp} must reference a window element on window.__jsonx_custom_elements (i.e. func:window.__jsonx_custom_elements.bootstrapModal)`));
	            }
	        });
	    }
	    if (typeof jsonx.comparisonorprops !== "undefined" &&
	        typeof jsonx.comparisonorprops !== "boolean") {
	        errors.push(TypeError("[0016] jsonx.comparisonorprops  must be boolean"));
	    }
	    if (jsonx.comparisonprops) {
	        if (!Array.isArray(jsonx.comparisonprops)) {
	            errors.push(TypeError("[0017] jsonx.comparisonprops  must be an array or comparisons"));
	        }
	        else {
	            jsonx.comparisonprops.forEach(c => {
	                if (typeof c !== "object") {
	                    errors.push(TypeError("[0018] jsonx.comparisonprops  must be an array or comparisons objects"));
	                }
	                else if (typeof c.left === "undefined") {
	                    errors.push(TypeError("[0019] jsonx.comparisonprops  must be have a left comparison value"));
	                }
	            });
	        }
	    }
	    if (typeof jsonx.passprops !== "undefined" &&
	        typeof jsonx.passprops !== "boolean") {
	        errors.push(TypeError("[0020] jsonx.passprops  must be boolean"));
	    }
	    const invalidKeys = Object.keys(jsonx).filter(key => validKeys.indexOf(key) === -1);
	    if (errors.length) {
	        if (returnAllErrors)
	            return errors;
	        throw errors[0];
	    }
	    return invalidKeys.length
	        ? `Warning: Invalid Keys [${invalidKeys.join()}]`
	        : true;
	}
	/**
	 * validates simple JSONX Syntax {[component]:{props,children}}
	 * @param {Object} simpleJSONX - Any valid simple JSONX Syntax
	 * @return {Boolean} returns true if simpleJSONX is valid
	 */
	function validSimpleJSONXSyntax$1(simpleJSONX = {}) {
	    if (Object.keys(simpleJSONX).length !== 1 && !simpleJSONX.component) {
	        return false;
	    }
	    else {
	        const componentName = Object.keys(simpleJSONX)[0];
	        return Object.keys(simpleJSONX).length === 1 &&
	            !simpleJSONX[componentName].component &&
	            (typeof simpleJSONX[componentName] === "object"
	                ||
	                    typeof simpleJSONX[componentName] === "string")
	            ? true
	            : false;
	    }
	}
	/**
	 * Transforms SimpleJSONX to Valid JSONX JSON {[component]:{props,children}} => {component,props,children}
	 * @param {Object} simpleJSONX JSON Object
	 * @return {Object} - returns a valid JSONX JSON Object from a simple JSONX JSON Object
	 */
	function simpleJSONXSyntax$1(simpleJSONX = {}) {
	    if (simpleJSONX.component)
	        return simpleJSONX;
	    const component = Object.keys(simpleJSONX)[0];
	    try {
	        const children = typeof simpleJSONX[component] === 'string' || Array.isArray(simpleJSONX[component])
	            ? simpleJSONX[component]
	            : simpleJSONX[component] && simpleJSONX[component].children && Array.isArray(simpleJSONX[component].children)
	                ? simpleJSONX[component].children.map(simpleJSONXSyntax$1)
	                : simpleJSONX[component].children;
	        const jsonxprops = typeof simpleJSONX[component] === 'object'
	            ? simpleJSONX[component]
	            : undefined;
	        const jsonx = { component, ...jsonxprops, children };
	        return jsonx;
	        // return Object.assign(
	        //   {},
	        //   {
	        //     component
	        //   },
	        //   simpleJSONX[component],
	        //   {
	        //     children:
	        //       simpleJSONX[component] &&
	        //       simpleJSONX[component].children &&
	        //       Array.isArray(simpleJSONX[component].children)
	        //         ? (simpleJSONX[component].children as defs.simpleJsonx[]).map(
	        //             simpleJSONXSyntax
	        //           )
	        //         : simpleJSONX[component].children
	        //   }
	        // );
	    }
	    catch (e) {
	        throw SyntaxError("Invalid Simple JSONX Syntax");
	    }
	}
	/**
	 * Transforms Valid JSONX JSON to SimpleJSONX  {component,props,children} => {[component]:{props,children}}
	 * @param {Object} jsonx Valid JSONX JSON object
	 * @return {Object} - returns a simple JSONX JSON Object from a valid JSONX JSON Object
	 */
	function getSimplifiedJSONX(jsonx = {}) {
	    try {
	        if (!jsonx.component)
	            return jsonx; //already simple
	        const componentName = jsonx.component;
	        jsonx.children = Array.isArray(jsonx.children)
	            ? jsonx.children
	                .filter(child => child) //remove empty children
	                .map(getSimplifiedJSONX)
	            : jsonx.children;
	        delete jsonx.component;
	        return {
	            [componentName]: jsonx
	        };
	    }
	    catch (e) {
	        throw e;
	    }
	}
	/**
	 * Fetches JSON from remote path
	 * @param {String} path - fetch path url
	 * @param {Object} options - fetch options
	 * @return {Object} - returns fetched JSON data
	 */
	async function fetchJSON$1(path = "", options = {}) {
	    try {
	        const response = await fetch(path, options);
	        return await response.json();
	    }
	    catch (e) {
	        throw e;
	    }
	}

	var jsonxUtils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		displayComponent: displayComponent$1,
		getAdvancedBinding: getAdvancedBinding,
		traverse: traverse,
		validateJSONX: validateJSONX,
		validSimpleJSONXSyntax: validSimpleJSONXSyntax$1,
		simpleJSONXSyntax: simpleJSONXSyntax$1,
		getSimplifiedJSONX: getSimplifiedJSONX,
		fetchJSON: fetchJSON$1
	});

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */



	// -- Inlined from fbjs --

	var emptyObject = {};

	function _invariant(condition, format, a, b, c, d, e, f) {

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	// /-- Inlined from fbjs --

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      Constructor.childContextTypes = objectAssign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      Constructor.contextTypes = objectAssign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }

	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;

	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );

	        Constructor[name] = createMergedResultFunction(Constructor[name], property);

	        return;
	      }

	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  objectAssign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	var factory_1 = factory;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */




	if (typeof React__default['default'] === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React__default['default'].Component().updater;

	var createReactClass = factory_1(
	  React__default['default'].Component,
	  React__default['default'].isValidElement,
	  ReactNoopUpdateQueue
	);

	const cache = new Cache_1();
	const ReactHookForm$1 = { ErrorMessage: o, Controller };
	// if (typeof window === 'undefined') {
	//   var window = window || (typeof global!=="undefined" ? global : window).window || {};
	// }
	/**
	 
	 */
	//@ts-ignore
	let advancedBinding = getAdvancedBinding();
	// require;
	/**
	 * object of all react components available for JSONX
	 
	 */
	//@ts-ignore
	let componentMap$1 = Object.assign({ Fragment: React.Fragment, Suspense: React.Suspense }, reactDomFactories, window && typeof window === "object" ? window.__jsonx_custom_elements : {});
	/**
	 * getBoundedComponents returns reactComponents with certain elements that have this bounded to select components in the boundedComponents list
	 
	 * @param {Object} options - options for getBoundedComponents
	 * @param {Object} options.reactComponents - all react components available for JSONX
	 * @param {string[]} boundedComponents - list of components to bind JSONX this context (usually helpful for navigation and redux-router)
	 * @returns {Object} reactComponents object of all react components available for JSONX
	 */
	function getBoundedComponents$1(options = {}) {
	    const { reactComponents, boundedComponents = [] } = options;
	    if ((typeof options.advancedBinding === 'boolean' && options.advancedBinding) || (typeof options.advancedBinding === 'undefined' &&
	        advancedBinding)) {
	        return Object.assign({}, reactComponents, boundedComponents.reduce((result, componentName) => {
	            result[componentName] = reactComponents[componentName].bind(this);
	            return result;
	        }, {}));
	        // reactComponents.ResponsiveLink = ResponsiveLink.bind(this);
	    }
	    else
	        return reactComponents;
	}
	/**
	 * returns a react component from a component library
	 
	 * @param {Object} options - options for getComponentFromLibrary
	 * @param {Object} [options.componentLibraries={}] - react component library like bootstrap
	 * @param {Object} [options.jsonx={}] - any valid JSONX JSON
	 * @returns {function|undefined} react component from react library like bootstrap, material design or bulma
	 */
	function getComponentFromLibrary(options = { jsonx: {} }) {
	    const { componentLibraries = {}, jsonx = {} } = options;
	    const libComponent = Object.keys(componentLibraries)
	        .map(libraryName => {
	        //@ts-ignore
	        const cleanLibraryName = jsonx.component.replace(`${libraryName}.`, "");
	        const libraryNameArray = cleanLibraryName.split(".");
	        if (libraryNameArray.length === 2 &&
	            componentLibraries[libraryName] &&
	            componentLibraries[libraryName][libraryNameArray[0]] &&
	            typeof componentLibraries[libraryName][libraryNameArray[0]][libraryNameArray[1]] !== "undefined") {
	            return componentLibraries[libraryName][libraryNameArray[0]][libraryNameArray[1]];
	        }
	        else if (typeof componentLibraries[libraryName][cleanLibraryName] !== "undefined") {
	            return componentLibraries[libraryName][cleanLibraryName];
	        }
	    })
	        .filter(val => val)[0];
	    return libComponent;
	}
	/**
	 * returns a react element from jsonx.component
	 
	 * @example
	 * // returns react elements
	 * getComponentFromMap({jsonx:{component:'div'}})=>div
	 * getComponentFromMap({jsonx:{component:'MyModal'},reactComponents:{MyModal:MyModal extends React.Component}})=>MyModal
	 * getComponentFromMap({jsonx:{component:'reactBootstap.nav'},componentLibraries:{reactBootstrap,}})=>reactBootstap.nav
	 * @param {Object} options - options for getComponentFromMap
	 * @param {object} [options.jsonx={}] - any valid JSONX JSON object
	 * @param {Object} [options.reactComponents={}] - react components to render
	 * @param {Object} [options.componentLibraries={}] - react components to render from another component library like bootstrap or bulma
	 * @param {function} [options.logError=console.error] - error logging function
	 * @param {boolean} [options.debug=false] - use debug messages
	 * @returns {string|function|class} valid react element
	 */
	function getComponentFromMap$1(options = {}) {
	    //ReactElementLike | ReactComponentLike | ReactElement | ReactComponentLike
	    // eslint-disable-next-line
	    const { jsonx = {}, reactComponents = {}, componentLibraries = {}, logError = console.error, debug } = options;
	    try {
	        if (typeof jsonx.component !== "string" &&
	            typeof jsonx.component === "function") {
	            return jsonx.component;
	            //@ts-ignore
	        }
	        else if (jsonx.component && reactDomFactories[jsonx.component]) {
	            return jsonx.component;
	            //@ts-ignore
	        }
	        else if (reactComponents[jsonx.component]) {
	            //@ts-ignore
	            return reactComponents[jsonx.component];
	        }
	        else if (typeof jsonx.component === "string" &&
	            jsonx.component.indexOf(".") > 0 &&
	            getComponentFromLibrary({ jsonx, componentLibraries })) {
	            return getComponentFromLibrary({ jsonx, componentLibraries });
	        }
	        else {
	            throw new ReferenceError(`Invalid React Component (${jsonx.component})`);
	        }
	    }
	    catch (e) {
	        if (debug)
	            logError(e, e.stack ? e.stack : "no stack");
	        throw e;
	    }
	}
	/**
	 * Returns a new function from an options object
	 
	 * @param {Object} options
	 * @param {String} [options.body=''] - Function string body
	 * @param {String[]} [options.args=[]] - Function arguments
	 * @returns {Function}
	 */
	function getFunctionFromEval(options = {}) {
	    if (typeof options === "function")
	        return options;
	    const { body = "", args = [], name } = options;
	    const argus = [].concat(args);
	    argus.push(body);
	    const evalFunction = Function.prototype.constructor.apply({ name }, argus);
	    if (name) {
	        Object.defineProperty(evalFunction, "name", { value: name });
	    }
	    return evalFunction;
	}
	/**
	 * Returns a new React Component
	 
	 * @param {Boolean} [options.returnFactory=true] - returns a React component if true otherwise returns Component Class
	 * @param {Object} [options.resources={}] - asyncprops for component
	 * @param {String} [options.name ] - Component name
	 * @param {Function} [options.lazy ] - function that resolves {reactComponent,options} to lazy load component for code splitting
	 * @param {Boolean} [options.use_getState=true] - define getState prop
	 * @param {Boolean} [options.bindContext=true] - bind class this reference to render function components
	 * @param {Boolean} [options.passprops ] - pass props to rendered component
	 * @param {Boolean} [options.passstate] - pass state as props to rendered component
	 * @param {Object} [reactComponent={}] - an object of functions used for create-react-class
	 * @param {Object} reactComponent.render.body - Valid JSONX JSON
	 * @param {String} reactComponent.getDefaultProps.body - return an object for the default props
	 * @param {String} reactComponent.getInitialState.body - return an object for the default state
	 * @returns {Function}
	 * @see {@link https://reactjs.org/docs/react-without-es6.html}
	 */
	function getReactClassComponent(reactComponent = {}, options = {}) {
	    // const util = require('util');
	    // console.log(util.inspect({ reactComponent },{depth:20}));
	    if (options.lazy) {
	        //@ts-ignore
	        return React.lazy(() => options
	            .lazy(reactComponent, Object.assign({}, options, { lazy: false }))
	            .then((lazyComponent) => {
	            return {
	                //@ts-ignore
	                default: getReactClassComponent(...lazyComponent)
	            };
	        }));
	    }
	    const context = this || {};
	    const { returnFactory = true, resources = {}, use_getState = true, bindContext = true, disableRenderIndexKey = true } = options;
	    const rjc = {
	        //mounting
	        getDefaultProps: {
	            body: "return {};"
	        },
	        // (unsupported) getDerivedStateFromProps: undefined, // {body:'return null;', args:['props','state',]}
	        getInitialState: {
	            body: "return {};"
	        },
	        componentDidMount: undefined,
	        UNSAFE_componentWillMount: undefined,
	        //updating
	        // (unsupported) getDerivedStateFromProps 
	        shouldComponentUpdate: undefined,
	        getSnapshotBeforeUpdate: undefined,
	        componentDidUpdate: undefined,
	        UNSAFE_componentWillUpdate: undefined,
	        UNSAFE_componentWillReceiveProps: undefined,
	        //unmounting
	        componentWillUnmount: undefined,
	        //error handling
	        // (unsupported) componentDidCatch:undefined, // { body:'return ;', args:['error','info'] }
	        // (unsupported) getDerivedStateFromError: undefined, // {body:' return { hasError:true}', args:['error')',]}
	        //body
	        ...reactComponent
	    };
	    const rjcKeys = Object.keys(rjc);
	    if (rjcKeys.includes("render") === false) {
	        throw new ReferenceError("React components require a render method");
	    }
	    const classOptions = rjcKeys.reduce((result, val) => {
	        if (!rjc[val])
	            return result;
	        if (typeof rjc[val] === "function")
	            rjc[val] = { body: rjc[val] };
	        const args = rjc[val].arguments;
	        const body = rjc[val].body;
	        if (!body) {
	            console.warn({ rjc });
	            throw new SyntaxError(`Function(${val}) requires a function body`);
	        }
	        if (args &&
	            !Array.isArray(args) &&
	            args.length &&
	            args.length &&
	            args.filter((arg) => typeof arg === "string").length) {
	            throw new TypeError(`Function(${val}) arguments must be an array or variable names`);
	        }
	        if (val === "render") {
	            result[val] = function () {
	                //@ts-ignore
	                if (options.passprops && this && this.props)
	                    body.props = Object.assign({}, body.props, this.props);
	                //@ts-ignore
	                if (options.passstate && this.state)
	                    body.props = Object.assign({}, body.props, this.state);
	                return getReactElementFromJSONX.call(Object.assign({}, context, bindContext ? this : { props: {} }, { disableRenderIndexKey }, {
	                    props: use_getState && this && this.props
	                        ? //@ts-ignore
	                            Object.assign({}, this.props, {
	                                getState: () => this.state
	                            })
	                        : //@ts-ignore
	                            this.props
	                }), body, resources);
	            };
	        }
	        else {
	            //@ts-ignore
	            result[val] =
	                typeof body === "function"
	                    ? body
	                    : getFunctionFromEval({
	                        body,
	                        args
	                    });
	        }
	        return result;
	    }, {});
	    const reactComponentClass = createReactClass(classOptions);
	    if (options.name) {
	        Object.defineProperty(reactComponentClass, "name", {
	            value: options.name
	        });
	    }
	    const reactClass = returnFactory
	        ? React__default['default'].createFactory(reactComponentClass)
	        : reactComponentClass;
	    return reactClass;
	}
	/**
	 * A helper component that allows you to create forms with [react-hook-form](https://react-hook-form.com/) without needed to add external form libraries
	 * @param this
	 * @param props
	 */
	function FormComponent$1(props = {}) {
	    function FormComponentFunction(componentProps) {
	        const { hookFormOptions = {}, 
	        // formComponent = { component: "div", children: "empty form" },
	        onSubmit, formWrapperComponent, formKey, formWrapperProps, } = props;
	        const formComponent = {
	            component: "div",
	            children: "empty form",
	            ...props.formComponent,
	        };
	        formComponent.props = { ...formComponent.props, ...componentProps };
	        // const { register, unregister, errors, watch, handleSubmit, reset, setError, clearError, setValue, getValues, triggerValidation, control, formState, } = useForm(hookFormOptions);
	        const reactHookForm = useForm(hookFormOptions);
	        const context = {
	            ...this || {},
	            ...{ reactHookForm, },
	        };
	        if (!context.componentLibraries || !context.componentLibraries.ReactHookForm) {
	            context.componentLibraries = {
	                ...context.componentLibraries,
	                ...{
	                    ReactHookForm: {
	                        Controller, ErrorMessage: o,
	                    }
	                }
	            };
	        }
	        const formWrapperJXM = formWrapperComponent || {
	            component: 'form',
	            props: {
	                onSubmit: onSubmit ? reactHookForm.handleSubmit(onSubmit) : undefined,
	                key: formKey ? `formWrapperJXM-${formKey}` : undefined,
	                ...formWrapperProps,
	            }
	        };
	        formWrapperJXM.children = Array.isArray(formComponent) ? formComponent : [formComponent];
	        const renderJSONX = React.useMemo(() => getReactElementFromJSONX.bind(context), [
	            context
	        ]);
	        return renderJSONX(formWrapperJXM);
	    }
	    if (props.name) {
	        Object.defineProperty(FormComponentFunction, "name", {
	            value: props.name
	        });
	    }
	    return FormComponentFunction.bind(this);
	}
	/**
	 * A helper component that allows you to create components that load data and render asynchronously.
	 * @param this
	 * @param props
	 */
	function DynamicComponent$1(props = {}) {
	    function DynamicComponentFunction(componentProps) {
	        //@ts-ignore
	        const { useCache = true, cacheTimeout = 60 * 60 * 5, loadingJSONX = { component: "div", children: "...Loading" }, 
	        //@ts-ignore
	        loadingErrorJSONX = {
	            component: "div",
	            children: [
	                { component: "span", children: "Error: " },
	                {
	                    component: "span",
	                    resourceprops: { _children: ["error", "message"] }
	                }
	            ]
	        }, cacheTimeoutFunction = () => { }, transformFunction = (data) => data, fetchURL, fetchOptions, fetchFunction } = props;
	        const jsonx = {
	            ...props.jsonx,
	        };
	        jsonx.props = { ...jsonx.props, ...componentProps };
	        const context = this || {};
	        const [state, setState] = React.useState({
	            hasLoaded: false,
	            hasError: false,
	            resources: {},
	            error: undefined
	        });
	        const transformer = React.useMemo(() => getFunctionFromEval(transformFunction), [
	            transformFunction
	        ]);
	        const timeoutFunction = React.useMemo(() => getFunctionFromEval(cacheTimeoutFunction), [cacheTimeoutFunction]);
	        const renderJSONX = React.useMemo(() => getReactElementFromJSONX.bind(context), [
	            context
	        ]);
	        const loadingComponent = React.useMemo(() => renderJSONX(loadingJSONX), [
	            loadingJSONX
	        ]);
	        const loadingError = React.useMemo(() => renderJSONX(loadingErrorJSONX, { error: state.error }), [loadingErrorJSONX, state.error]);
	        React.useEffect(() => {
	            async function getData() {
	                try {
	                    //@ts-ignore
	                    let transformedData;
	                    if (useCache && cache.get(fetchURL)) {
	                        transformedData = cache.get(fetchURL);
	                    }
	                    else {
	                        let fetchedData;
	                        if (fetchFunction) {
	                            fetchedData = await fetchFunction(fetchURL, fetchOptions);
	                        }
	                        else
	                            fetchedData = await fetchJSON$1(fetchURL, fetchOptions);
	                        transformedData = await transformer(fetchedData);
	                        if (useCache)
	                            cache.put(fetchURL, transformedData, cacheTimeout, timeoutFunction);
	                    }
	                    //@ts-ignore
	                    setState(prevState => Object.assign({}, prevState, {
	                        hasLoaded: true,
	                        hasError: false,
	                        resources: { DynamicComponentData: transformedData }
	                    }));
	                }
	                catch (e) {
	                    if (context.debug)
	                        console.warn(e);
	                    //@ts-ignore
	                    setState({ hasError: true, error: e });
	                }
	            }
	            if (fetchURL)
	                getData();
	        }, [fetchURL, fetchOptions]);
	        if (!fetchURL)
	            return null;
	        else if (state.hasError) {
	            return loadingError;
	        }
	        else if (state.hasLoaded === false) {
	            return loadingComponent;
	        }
	        else
	            return renderJSONX(jsonx, state.resources);
	    }
	    if (props.name) {
	        Object.defineProperty(DynamicComponentFunction, "name", {
	            value: props.name
	        });
	    }
	    return DynamicComponentFunction.bind(this);
	}
	/**
	 * Returns new React Function Component
	 
	 * @todo set 'functionprops' to set arguments for function
	 * @param {*} reactComponent - Valid JSONX to render
	 * @param {String} functionBody - String of function component body
	 * @param {String} options.name - Function Component name
	 * @returns {Function}
	 * @see {@link https://reactjs.org/docs/hooks-intro.html}
	 * @example
	  const jsonxRender = {
	   component:'div',
	   passprops:'true',
	   children:[
	     {
	      component:'input',
	      thisprops:{
	          value:['count'],
	        },
	     },
	      {
	        component:'button',
	       __dangerouslyBindEvalProps:{
	        onClick:function(count,setCount){
	          setCount(count+1);
	          console.log('this is inline',{count,setCount});
	        },
	        // onClick:`(function(count,setCount){
	        //   setCount(count+1)
	        //   console.log('this is inline',{count,setCount});
	        // })`,
	        children:'Click me'
	      }
	   ]
	  };
	  const functionBody = 'const [count, setCount] = useState(0); const functionprops = {count,setCount};'
	  const options = { name: IntroHook}
	  const MyCustomFunctionComponent = jsonx._jsonxComponents.getReactFunctionComponent({jsonxRender, functionBody, options});
	   */
	function getReactFunctionComponent(reactComponent = {}, functionBody = "", options = {}) {
	    if (options.lazy) {
	        //@ts-ignore
	        return React.lazy(() => options
	            .lazy(reactComponent, functionBody, Object.assign({}, options, { lazy: false }))
	            .then((lazyComponent) => {
	            return {
	                //@ts-ignore
	                default: getReactFunctionComponent(...lazyComponent)
	            };
	        }));
	    }
	    if (typeof options === "undefined" || typeof options.bind === "undefined")
	        options.bind = true;
	    const { resources = {}, args = [] } = options;
	    //@ts-ignore
	    const props = Object.assign({}, reactComponent.props);
	    const functionArgs = [
	        React__default['default'],
	        React.useState,
	        React.useEffect,
	        React.useContext,
	        React.useReducer,
	        React.useCallback,
	        React.useMemo,
	        React.useRef,
	        React.useImperativeHandle,
	        React.useLayoutEffect,
	        React.useDebugValue,
	        getReactElementFromJSONX,
	        reactComponent,
	        resources,
	        props,
	        useForm,
	        useController,
	        useFieldArray,
	        useWatch,
	    ];
	    //@ts-ignore
	    if (typeof functionBody === "function")
	        functionBody = functionBody.toString();
	    const functionComponent = Function("React", "useState", "useEffect", "useContext", "useReducer", "useCallback", "useMemo", "useRef", "useImperativeHandle", "useLayoutEffect", "useDebugValue", "getReactElementFromJSONX", "reactComponent", "resources", "props", "useForm", "useController", "useFieldArray", "useWatch", `
    'use strict';
    const self = this || {};

    return function ${options.name || "Anonymous"}(props){
      ${functionBody}
      if(typeof exposeprops==='undefined' || exposeprops){
        reactComponent.props = Object.assign({},props,typeof exposeprops==='undefined'?{}:exposeprops);
        if(typeof exposeprops!=='undefined') reactComponent.__functionargs = Object.keys(exposeprops);
      } else{
        reactComponent.props =  props;
      }
      if(!props.children) {
      //  delete props.children;
      }
      const context = ${options.bind ? "Object.assign(self,this||{})" : "this"};
      return getReactElementFromJSONX.call(context, reactComponent);
    }
  `);
	    if (options.name) {
	        Object.defineProperty(functionComponent, "name", {
	            value: options.name
	        });
	    }
	    return options.bind
	        ? functionComponent.call(this, ...functionArgs)
	        : functionComponent(...functionArgs);
	}
	/**
	 * Returns the string of a function, the difference between calling .toString() on a function definition is, the toString method will return the entire function definition (with paramaters and the name, etc)
	 * @param {Function} - The function you want the body string for
	 * @returns {String}
	 * @example
	function myFunc(){
	  const a = 1;
	  const b = 3;
	  return a + b;
	}
	getFunctionBody(myFunc) => `
	  const a = 1;
	  const b = 3;
	  return a + b;
	`
	 */
	function getFunctionBody(func) {
	    const functionString = func.toString();
	    if (functionString.includes('return') === false)
	        throw new EvalError('JSONX Function Components can not use implicit returns');
	    return functionString.substring(functionString.indexOf("{") + 1, functionString.lastIndexOf("}"));
	}
	/**
	 * A helpful function that lets you write a regular JavaScript function and passes the appropriate arguments to getReactFunctionComponent
	 * @param {Function} func - function definition to turn into React Component Function
	 * @property {object} this - options for getReactElementFromJSONX
	 * @returns {Function} - React Component Function
	 */
	function makeFunctionComponent(func, options) {
	    const scopedEval = eval;
	    const fullFunctionBody = getFunctionBody(func);
	    const [functionBody,] = fullFunctionBody.split('return');
	    let reactComponentString = fullFunctionBody.replace(functionBody, '').trim();
	    const reactComponent = scopedEval(`(()=>{${reactComponentString}})()`);
	    const functionOptions = { name: func.name, ...options };
	    return getReactFunctionComponent.call(this, reactComponent, functionBody, functionOptions);
	}
	/**
	 *
	 */
	function getReactContext(options = {}) {
	    return React.createContext(options.value);
	}

	var jsonxComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ReactHookForm: ReactHookForm$1,
		advancedBinding: advancedBinding,
		componentMap: componentMap$1,
		getBoundedComponents: getBoundedComponents$1,
		getComponentFromLibrary: getComponentFromLibrary,
		getComponentFromMap: getComponentFromMap$1,
		getFunctionFromEval: getFunctionFromEval,
		getReactClassComponent: getReactClassComponent,
		FormComponent: FormComponent$1,
		DynamicComponent: DynamicComponent$1,
		getReactFunctionComponent: getReactFunctionComponent,
		getFunctionBody: getFunctionBody,
		makeFunctionComponent: makeFunctionComponent,
		getReactContext: getReactContext
	});

	//https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
	const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
	const ARGUMENT_NAMES = /([^\s,]+)/g;
	/**
	 * returns the names of parameters from a function declaration
	 * @example
	 * const arrowFunctionAdd = (a,b)=>a+b;
	 * function regularFunctionAdd(c,d){return c+d;}
	 * getParamNames(arrowFunctionAdd) // => ['a','b']
	 * getParamNames(regularFunctionAdd) // => ['c','d']
	 * @param {Function} func
	 * @todo write tests
	 */
	function getParamNames(func) {
	    var fnStr = func.toString().replace(STRIP_COMMENTS, "");
	    var result = fnStr
	        .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
	        .match(ARGUMENT_NAMES);
	    if (result === null) {
	        result = [];
	    }
	    return result;
	}
	/**
	 * It uses traverse on a traverseObject to returns a resolved object on propName. So if you're making an ajax call and want to pass properties into a component, you can assign them using asyncprops and reference object properties by an array of property paths
	 * @param {Object} [traverseObject={}] - the object that contains values of propName
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} [options.propName='asyncprops'] - Property on JSONX to resolve values onto, i.e (asyncprops,thisprops,windowprops)
	 * @returns {Object} resolved object
	 * @example
	 const traverseObject = {
	  user: {
	    name: 'jsonx',
	    description: 'react withouth javascript',
	  },
	  stats: {
	    logins: 102,
	    comments: 3,
	  },
	  authentication: 'OAuth2',
	};
	const testJSONX = {
	  component: 'div',
	  props: {
	    id: 'generatedJSONX',
	    className:'jsonx',
	  },
	  asyncprops:{
	    auth: [ 'authentication', ],
	    username: [ 'user', 'name', ],
	  },
	  children: [
	    {
	      component: 'p',
	      props: {
	        style: {
	          color: 'red',
	          fontWeight:'bold',
	        },
	      },
	      children:'hello world',
	    },
	  ],
	};
	const JSONXP = getJSONXProps({ jsonx: testJSONX, traverseObject, });
	// => {
	//   auth: 'OAuth2',
	//   username: 'jsonx'
	// }

	//finally resolves:
	const testJSONX = {
	  component: 'div',
	  props: {
	    id: 'generatedJSONX',
	    className:'jsonx',
	    auth: 'OAuth2',
	    username: 'jsonx',
	  },
	  children: [
	    {
	      component: 'p',
	      props: {
	        style: {
	          color: 'red',
	          fontWeight:'bold',
	        },
	      },
	      children:'hello world',
	    },
	  ],
	};
	 */
	function getJSONXProps(options = {}) {
	    // eslint-disable-next-line
	    let { jsonx = {}, propName = "asyncprops", traverseObject = {} } = options;
	    // return (jsonx.asyncprops && typeof jsonx.asyncprops === 'object')
	    // ? utilities.traverse(jsonx.asyncprops, resources)
	    // : {};
	    return jsonx[propName] && typeof jsonx[propName] === "object"
	        ? traverse(jsonx[propName], traverseObject)
	        : {};
	}
	/**
	 * returns children jsonx components defined on __spreadComponent spread over an array on props.__spread
	 * @param {*} options
	 */
	function getChildrenComponents(options = {}) {
	    const { allProps = {}, jsonx = {} } = options;
	    // const asyncprops = getJSONXProps({ jsonx, propName: 'spreadprops', traverseObject: allProps, });
	    if (Array.isArray(allProps.__spread) === false) {
	        if ((this && this.debug) || jsonx.debug) {
	            return {
	                children: new Error("Using __spreadComponent requires an array prop '__spread'").toString()
	            };
	        }
	        else {
	            return { children: undefined };
	        }
	    }
	    else {
	        return {
	            _children: allProps.__spread.map((__item, __idx) => {
	                const clonedChild = Object.assign({}, jsonx.__spreadComponent);
	                const clonedChildProps = Object.assign({}, clonedChild.props);
	                clonedChildProps.__item = __item;
	                clonedChildProps.__idx = __idx;
	                clonedChild.props = clonedChildProps;
	                return clonedChild;
	            })
	        };
	    }
	}
	function boundArgsReducer(jsonx = {}) {
	    return (args, arg) => {
	        let val;
	        if (this && this.state && typeof this.state[arg] !== "undefined")
	            val = this.state[arg];
	        else if (this && this.props && typeof this.props[arg] !== "undefined")
	            val = this.props[arg];
	        else if (jsonx.props && typeof jsonx.props[arg] !== "undefined")
	            val = jsonx.props[arg];
	        if (typeof val !== "undefined")
	            args.push(val);
	        return args.filter((a) => typeof a !== "undefined");
	    };
	}
	/**
	 * Used to evalute javascript and set those variables as props. getEvalProps evaluates __dangerouslyEvalProps and __dangerouslyBindEvalProps properties with eval, this is used when component properties are functions, __dangerouslyBindEvalProps is used when those functions require that this is bound to the function. For __dangerouslyBindEvalProps it must resolve an expression, so functions should be wrapped in (). I.e. (function f(x){ return this.minimum+x;})
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @returns {Object} returns resolved object with evaluated javascript
	 * @example
	 const testVals = {
	    auth: 'true',
	    username: '(user={})=>user.name',
	  };
	  const testJSONX = Object.assign({}, sampleJSONX, {
	    __dangerouslyEvalProps: testVals, __dangerouslyBindEvalProps: {
	      email: '(function getUser(user={}){ return this.testBound(); })',
	    },
	  });
	  const JSONXP = getEvalProps.call({ testBound: () => 'bounded', }, { jsonx: testJSONX, });
	  const evalutedComputedFunc = JSONXP.username({ name: 'bob', });
	  const evalutedComputedBoundFunc = JSONXP.email({ email:'test@email.domain', });
	  // expect(JSONXP.auth).to.be.true;
	  // expect(evalutedComputedFunc).to.eql('bob');
	  // expect(evalutedComputedBoundFunc).to.eql('bounded');
	 */
	function getEvalProps(options = { jsonx: {} }) {
	    const { jsonx } = options;
	    const scopedEval = eval; //https://github.com/rollup/rollup/wiki/Troubleshooting#avoiding-eval
	    let evAllProps = {};
	    if (jsonx.__dangerouslyEvalAllProps) {
	        let evVal;
	        try {
	            // eslint-disable-next-line
	            evVal =
	                typeof evVal === "function"
	                    ? jsonx.__dangerouslyEvalAllProps
	                    : scopedEval(jsonx.__dangerouslyEvalAllProps);
	        }
	        catch (e) {
	            if (this.debug || jsonx.debug)
	                evVal = e;
	        }
	        evAllProps = evVal.call(this, { jsonx });
	    }
	    const evProps = Object.keys(jsonx.__dangerouslyEvalProps || {}).reduce((eprops, epropName) => {
	        let evVal;
	        let evValString;
	        try {
	            // eslint-disable-next-line
	            //@ts-ignore
	            evVal = scopedEval(jsonx.__dangerouslyEvalProps[epropName]);
	            evValString = evVal.toString();
	        }
	        catch (e) {
	            if (this.debug || jsonx.debug)
	                evVal = e;
	        }
	        //@ts-ignore
	        eprops[epropName] =
	            typeof evVal === "function" ? evVal.call(this, { jsonx }) : evVal;
	        //@ts-ignore
	        if (this.exposeEval)
	            eprops[`__eval_${epropName}`] = evValString;
	        return eprops;
	    }, {});
	    const evBindProps = Object.keys(jsonx.__dangerouslyBindEvalProps || {}).reduce((eprops, epropName) => {
	        let evVal;
	        let evValString;
	        try {
	            let args;
	            //@ts-ignore
	            const functionBody = jsonx.__dangerouslyBindEvalProps[epropName];
	            // InlineFunction = Function.prototype.constructor.apply({}, args);
	            let functionDefinition;
	            if (typeof functionBody === "function") {
	                functionDefinition = functionBody;
	            }
	            else if (jsonx.__dangerouslyBindEvalProps) {
	                functionDefinition = scopedEval(jsonx.__dangerouslyBindEvalProps[epropName]);
	                evValString = functionDefinition.toString();
	            } // eslint-disable-next-line
	            if (jsonx.__functionargs && jsonx.__functionargs[epropName]) {
	                args = [this].concat(jsonx.__functionargs[epropName].reduce(boundArgsReducer.call(this, jsonx), []));
	            }
	            else if (jsonx.__functionparams === false) {
	                args = [this];
	            }
	            else {
	                const functionDefArgs = getParamNames(functionDefinition);
	                args = [this].concat(functionDefArgs.reduce(boundArgsReducer.call(this, jsonx), []));
	            }
	            // eslint-disable-next-line
	            evVal = functionDefinition.bind(...args);
	        }
	        catch (e) {
	            if (this.debug || jsonx.debug)
	                evVal = e;
	        }
	        // eslint-disable-next-line
	        //@ts-ignore
	        eprops[epropName] = evVal;
	        //@ts-ignore
	        if (this.exposeEval)
	            eprops[`__eval_${epropName}`] = evValString;
	        return eprops;
	    }, {});
	    return Object.assign({}, evProps, evBindProps, evAllProps);
	}
	/**
	 * Resolves jsonx.__dangerouslyInsertComponents into an object that turns each value into a React components. This is typically used in a library like Recharts where you pass custom components for chart ticks or plot points.
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} [options.resources={}] - object to use for resourceprops(asyncprops), usually a result of an asynchronous call
	 * @returns {Object} resolved object of React Components
	 */
	function getComponentProps(options = { jsonx: {} }) {
	    const { jsonx, resources } = options;
	    //@ts-ignore
	    return Object.keys(jsonx.__dangerouslyInsertComponents).reduce((cprops, cpropName) => {
	        let componentVal;
	        try {
	            // eslint-disable-next-line
	            if (jsonx.__dangerouslyInsertComponents) {
	                componentVal = getRenderedJSON.call(this, jsonx.__dangerouslyInsertComponents[cpropName], resources);
	            }
	        }
	        catch (e) {
	            if (this.debug || jsonx.debug)
	                componentVal = e;
	        }
	        cprops[cpropName] = componentVal;
	        return cprops;
	    }, {});
	}
	/**
	 * Used to create components from jsonx as props
	 * @param this
	 * @param options
	 */
	function getReactComponents(options) {
	    const { jsonx, resources } = options;
	    const functionComponents = !jsonx.__dangerouslyInsertFunctionComponents
	        ? {}
	        : Object.keys(jsonx.__dangerouslyInsertFunctionComponents).reduce((cprops, cpropName) => {
	            let componentVal;
	            try {
	                const args = jsonx.__dangerouslyInsertFunctionComponents && jsonx.__dangerouslyInsertFunctionComponents[cpropName];
	                if (args) {
	                    args.options = Object.assign({}, args.options, { resources });
	                    // eslint-disable-next-line
	                    componentVal = getReactFunctionComponent.call(this, args.reactComponent, args.functionBody, args.options);
	                }
	            }
	            catch (e) {
	                if (this.debug || jsonx.debug)
	                    componentVal = e;
	            }
	            cprops[cpropName] =
	                cpropName === "_children" ? [componentVal] : componentVal;
	            return cprops;
	        }, {});
	    const classComponents = !jsonx.__dangerouslyInsertClassComponents
	        ? {}
	        : Object.keys(jsonx.__dangerouslyInsertClassComponents).reduce((cprops, cpropName) => {
	            let componentVal;
	            try {
	                const args = jsonx.__dangerouslyInsertClassComponents && jsonx.__dangerouslyInsertClassComponents[cpropName];
	                if (args) {
	                    args.options = Object.assign({}, args.options, { resources });
	                    // eslint-disable-next-line
	                    componentVal = getReactClassComponent.call(this, args.reactComponent, args.options);
	                }
	            }
	            catch (e) {
	                if (this.debug || jsonx.debug)
	                    componentVal = e;
	            }
	            cprops[cpropName] =
	                cpropName === "_children" ? [componentVal] : componentVal;
	            return cprops;
	        }, {});
	    return Object.assign({}, functionComponents, classComponents);
	}
	/**
	 * Resolves jsonx.__dangerouslyInsertReactComponents into an object that turns each value into a React components. This is typically used in a library like Recharts where you pass custom components for chart ticks or plot points.
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	//  * @param {Object} [options.resources={}] - object to use for asyncprops, usually a result of an asynchronous call
	 * @returns {Object} resolved object of React Components
	 */
	function getReactComponentProps(options = { jsonx: {} }) {
	    const { jsonx } = options;
	    const customComponents = this && this.reactComponents ? this.reactComponents : {};
	    const customLibraries = this && this.componentLibraries ? this.componentLibraries : {};
	    if (jsonx.__dangerouslyInsertJSONXComponents &&
	        Object.keys(jsonx.__dangerouslyInsertJSONXComponents).length) {
	        return Object.keys(jsonx.__dangerouslyInsertJSONXComponents).reduce((cprops, cpropName) => {
	            let componentVal;
	            try {
	                componentVal = getComponentFromMap$1({
	                    jsonx: jsonx.__dangerouslyInsertJSONXComponents && jsonx.__dangerouslyInsertJSONXComponents[cpropName],
	                    reactComponents: customComponents,
	                    componentLibraries: customLibraries
	                });
	            }
	            catch (e) {
	                if (this.debug || jsonx.debug)
	                    componentVal = e;
	            }
	            // eslint-disable-next-line
	            cprops[cpropName] = componentVal;
	            return cprops;
	        }, {});
	    }
	    else if (jsonx.__dangerouslyInsertReactComponents && Object.keys(jsonx.__dangerouslyInsertReactComponents).length) {
	        return Object.keys(jsonx.__dangerouslyInsertReactComponents).reduce((cprops, cpropName) => {
	            let componentVal;
	            try {
	                componentVal = getComponentFromMap$1({
	                    jsonx: {
	                        component: jsonx.__dangerouslyInsertReactComponents && jsonx.__dangerouslyInsertReactComponents[cpropName],
	                        props: jsonx.__dangerouslyInsertComponentProps
	                            ? jsonx.__dangerouslyInsertComponentProps[cpropName]
	                            : {}
	                    },
	                    reactComponents: customComponents,
	                    componentLibraries: customLibraries
	                });
	            }
	            catch (e) {
	                if (this.debug || jsonx.debug)
	                    componentVal = e;
	            }
	            // eslint-disable-next-line
	            cprops[cpropName] = componentVal;
	            return cprops;
	        }, {});
	    }
	}
	/**
	 * Takes a function string and returns a function on either this.props or window. The function can only be 2 levels deep
	 * @param {Object} options
	 * @param {String} [options.propFunc='func:'] - function string, like func:window.LocalStorage.getItem or func:this.props.onClick  or func:inline.myInlineFunction
	 * @param {Object} [options.allProps={}] - merged computed props, Object.assign({ key: renderIndex, }, thisprops, jsonx.props, resourceprops, asyncprops, windowprops, evalProps, insertedComponents);
	 * @returns {Function} returns a function from this.props or window functions
	 * @example
	 * getFunctionFromProps({ propFunc='func:this.props.onClick', }) // => this.props.onClick
	 */
	function getFunctionFromProps(options = { jsonx: {}, propBody: "" }) {
	    const { propFunc = "func:", propBody, jsonx, functionProperty = "" } = options;
	    // eslint-disable-next-line
	    const { logError = console.error, debug } = this;
	    let windowObject = {};
	    if (this.window)
	        windowObject = this.window;
	    //@ts-ignore
	    else if (typeof global$2 !== "undefined" && (typeof global$2!=="undefined" ? global$2 : window).window)
	        windowObject = (typeof global$2!=="undefined" ? global$2 : window).window;
	    try {
	        const functionNameString = propFunc.split(":")[1] || "";
	        const functionNameArray = functionNameString.split(".");
	        const functionName = functionNameArray.length
	            ? functionNameArray[functionNameArray.length - 1]
	            : "";
	        if (propFunc.includes("func:inline")) {
	            // eslint-disable-next-line
	            let InlineFunction;
	            if (jsonx.__functionargs) {
	                const args = [].concat(jsonx.__functionargs[functionProperty]);
	                args.push(propBody);
	                InlineFunction = Function.prototype.constructor.apply({}, args);
	            }
	            else {
	                InlineFunction = Function("param1", "param2", '"use strict";' + propBody);
	            }
	            const [propFuncName, funcName] = propFunc.split(".");
	            Object.defineProperty(InlineFunction, "name", {
	                value: funcName
	            });
	            if (jsonx.__functionargs) {
	                const boundArgs = [this].concat(jsonx.__functionargs[functionProperty].map((arg) => jsonx.props[arg]));
	                return InlineFunction.bind(...boundArgs);
	            }
	            else {
	                return InlineFunction.bind(this);
	            }
	        }
	        else if (propFunc.indexOf("func:window") !== -1) {
	            if (functionNameArray.length === 3) {
	                try {
	                    return windowObject[functionNameArray[1]][functionName].bind(this);
	                }
	                catch (e) {
	                    if (debug) {
	                        logError(e);
	                    }
	                    return windowObject[functionNameArray[1]][functionName];
	                }
	            }
	            else {
	                try {
	                    return windowObject[functionName].bind(this);
	                }
	                catch (e) {
	                    if (debug) {
	                        logError(e);
	                    }
	                    return windowObject[functionName];
	                }
	            }
	        }
	        else if (functionNameArray.length === 4) {
	            return this.props
	                ? this.props[functionNameArray[2]][functionName]
	                : jsonx.props[functionNameArray[2]][functionName];
	        }
	        else if (functionNameArray.length === 3) {
	            return this.props
	                ? this.props[functionName].bind(this)
	                : jsonx.props[functionName].bind(this);
	        }
	        else {
	            return function () { };
	        }
	    }
	    catch (e) {
	        if (this.debug) {
	            logError(e);
	            if (jsonx && jsonx.debug)
	                return e;
	        }
	        return function () { };
	    }
	}
	/**
	 * Returns a resolved object from function strings that has functions pulled from jsonx.__functionProps
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} [options.allProps={}] - merged computed props, Object.assign({ key: renderIndex, }, thisprops, jsonx.props, asyncprops, windowprops, evalProps, insertedComponents);
	 * @returns {Object} resolved object of functions from function strings
	 */
	function getFunctionProps(options = { jsonx: {} }) {
	    const { allProps = {}, jsonx = {} } = options;
	    const getFunction = getFunctionFromProps.bind(this);
	    const funcProps = jsonx.__functionProps;
	    //Allowing for window functions
	    if (funcProps) {
	        Object.keys(funcProps).forEach(key => {
	            if (typeof funcProps[key] === "string" &&
	                funcProps[key].indexOf("func:") !== -1) {
	                allProps[key] = getFunction({
	                    propFunc: funcProps[key],
	                    propBody: jsonx.__inline ? jsonx.__inline[key] : "",
	                    jsonx,
	                    functionProperty: key
	                });
	            }
	        });
	    }
	    return allProps;
	}
	/**
	 * Returns a resolved object that has React Components pulled from window.__jsonx_custom_elements
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} [options.allProps={}] - merged computed props, Object.assign({ key: renderIndex, }, thisprops, jsonx.props, asyncprops, windowprops, evalProps, insertedComponents);
	 * @returns {Object} resolved object of with React Components from a window property window.__jsonx_custom_elements
	 */
	function getWindowComponents(options = { jsonx: {} }) {
	    const { allProps, jsonx } = options;
	    const windowComponents = jsonx.__windowComponents;
	    //@ts-ignore
	    const window = this.window || (typeof global$2!=="undefined" ? global$2 : window).window || {};
	    const windowFuncPrefix = "func:window.__jsonx_custom_elements";
	    // if (jsonx.hasWindowComponent && window.__jsonx_custom_elements) {
	    Object.keys(windowComponents).forEach(key => {
	        const windowKEY = typeof windowComponents[key] === "string"
	            ? windowComponents[key].replace(`${windowFuncPrefix}.`, "")
	            : "";
	        if (typeof windowComponents[key] === "string" &&
	            windowComponents[key].indexOf(windowFuncPrefix) !== -1 &&
	            typeof window.__jsonx_custom_elements[windowKEY] === "function") {
	            const windowComponentElement = window.__jsonx_custom_elements[windowKEY];
	            const windowComponentProps = allProps["__windowComponentProps"]
	                ? allProps["__windowComponentProps"]
	                : this.props;
	            allProps[key] = React__default['default'].createElement(windowComponentElement, windowComponentProps, null);
	        }
	    });
	    return allProps;
	}
	/**
	 * Returns computed properties for React Components and any property that's prefixed with __ is a computedProperty
	 * @param {Object} options
	 * @param {Object} options.jsonx - Valid JSONX JSON
	 * @param {Object} [options.resources={}] - object to use for asyncprops, usually a result of an asynchronous call
	 * @param {Number} options.renderIndex - number used for React key prop
	 * @param {function} [options.logError=console.error] - error logging function
	 * @param {Object} [options.componentLibraries] - react components to render with JSONX
	 * @param {Boolean} [options.useReduxState=true] - use redux props in this.props
	 * @param {Boolean} [options.ignoreReduxPropsInComponentLibraries=true] - ignore redux props in this.props for component libraries, this is helpful incase these properties collide with component library element properties
	 * @param {boolean} [options.debug=false] - use debug messages
	 * @example
	const testJSONX = { component: 'div',
	  props: { id: 'generatedJSONX', className: 'jsonx' },
	  children: [ [Object] ],
	  asyncprops: { auth: [Array], username: [Array] },
	  __dangerouslyEvalProps: { getUsername: '(user={})=>user.name' },
	  __dangerouslyInsertComponents: { myComponent: [Object] }
	const resources = {
	  user: {
	    name: 'jsonx',
	    description: 'react withouth javascript',
	  },
	  stats: {
	    logins: 102,
	    comments: 3,
	  },
	  authentication: 'OAuth2',
	};
	const renderIndex = 1;
	getComputedProps.call({}, {
	        jsonx: testJSONX,
	        resources,
	        renderIndex,
	      });
	computedProps = { key: 1,
	     id: 'generatedJSONX',
	     className: 'jsonx',
	     auth: 'OAuth2',
	     username: 'jsonx',
	     getUsername: [Function],
	     myComponent:
	      { '$$typeof': Symbol(react.element),
	        type: 'p',
	        key: '8',
	        ref: null,
	        props: [Object],
	        _owner: null,
	        _store: {} } } }
	 *
	 */
	function getComputedProps$1(options = {}) {
	    // eslint-disable-next-line
	    const { jsonx = {}, resources = {}, renderIndex, logError = console.error, useReduxState = true, ignoreReduxPropsInComponentLibraries = true, disableRenderIndexKey = true, debug, componentLibraries = {} } = options;
	    try {
	        const componentThisProp = jsonx.thisprops
	            ? Object.assign({
	                __jsonx: {
	                    _component: jsonx,
	                    _resources: resources
	                }
	            }, this.props, jsonx.props, 
	            //@ts-ignore
	            useReduxState &&
	                !jsonx.ignoreReduxProps &&
	                ignoreReduxPropsInComponentLibraries &&
	                jsonx.component &&
	                !componentLibraries[jsonx.component]
	                ? this.props && this.props.getState
	                    ? this.props.getState()
	                    : {}
	                : {})
	            : undefined;
	        if (jsonx.useformregister) {
	            jsonx.thiscontext = {
	                ref: ['reactHookForm', 'register'],
	                ...jsonx.thiscontext,
	            };
	        }
	        const windowTraverse = typeof window !== "undefined" ? window : {};
	        const asyncprops = jsonx.asyncprops
	            ? getJSONXProps({
	                jsonx,
	                propName: "asyncprops",
	                traverseObject: resources
	            })
	            : {};
	        const resourceprops = jsonx.resourceprops
	            ? getJSONXProps({
	                jsonx,
	                propName: "resourceprops",
	                traverseObject: resources
	            })
	            : {};
	        const windowprops = jsonx.windowprops
	            ? getJSONXProps({
	                jsonx,
	                propName: "windowprops",
	                traverseObject: windowTraverse
	            })
	            : {};
	        const thisprops = jsonx.thisprops
	            ? getJSONXProps({
	                jsonx,
	                propName: "thisprops",
	                traverseObject: componentThisProp
	            })
	            : {};
	        const thisstate = jsonx.thisstate
	            ? getJSONXProps({
	                jsonx,
	                propName: "thisstate",
	                traverseObject: this.state
	            })
	            : {};
	        const thiscontext = jsonx.thiscontext
	            ? getJSONXProps({
	                jsonx,
	                propName: "thiscontext",
	                traverseObject: this || {}
	            })
	            : {};
	        //allowing javascript injections
	        const evalProps = jsonx.__dangerouslyEvalProps || jsonx.__dangerouslyBindEvalProps
	            ? getEvalProps.call(this, { jsonx })
	            : {};
	        const insertedComponents = jsonx.__dangerouslyInsertComponents
	            ? getComponentProps.call(this, { jsonx, resources, debug })
	            : {};
	        const insertedReactComponents = jsonx.__dangerouslyInsertReactComponents ||
	            jsonx.__dangerouslyInsertJSONXComponents
	            ? getReactComponentProps.call(this, { jsonx, debug })
	            : {};
	        const insertedComputedComponents = jsonx.__dangerouslyInsertFunctionComponents ||
	            jsonx.__dangerouslyInsertClassComponents
	            ? getReactComponents.call(this, { jsonx, debug })
	            : {};
	        const evalAllProps = jsonx.__dangerouslyEvalAllProps
	            ? getEvalProps.call(this, { jsonx })
	            : {};
	        const allProps = Object.assign({}, this.disableRenderIndexKey || disableRenderIndexKey
	            ? {}
	            : { key: renderIndex }, jsonx.props, thisprops, thisstate, thiscontext, resourceprops, asyncprops, windowprops, evalProps, insertedComponents, insertedReactComponents, insertedComputedComponents);
	        const computedProps = Object.assign({}, allProps, jsonx.__functionProps
	            ? getFunctionProps.call(this, { allProps, jsonx })
	            : {}, jsonx.__windowComponents
	            ? getWindowComponents.call(this, { allProps, jsonx })
	            : {}, jsonx.__spreadComponent
	            ? getChildrenComponents.call(this, { allProps, jsonx })
	            : {}, evalAllProps);
	        if (jsonx.useremoveprops && Array.isArray(jsonx.useremoveprops)) {
	            for (const prop of jsonx.useremoveprops) {
	                computedProps[prop] = undefined;
	                delete computedProps[prop];
	            }
	        }
	        if (jsonx.debug)
	            console.debug({ jsonx, computedProps });
	        return (jsonx.useincludeprops && Array.isArray(jsonx.useincludeprops))
	            ? jsonx.useincludeprops.concat(['key'], Object.keys(thisprops), Object.keys(thisstate), Object.keys(thiscontext), Object.keys(resourceprops), Object.keys(asyncprops), Object.keys(windowprops), Object.keys(evalProps), Object.keys(insertedComponents), Object.keys(insertedReactComponents), Object.keys(insertedComputedComponents)).reduce((includedProps, prop) => {
	                includedProps[prop] = computedProps[prop];
	                return includedProps;
	            }, {})
	            : computedProps;
	    }
	    catch (e) {
	        debug && logError(e, e.stack ? e.stack : "no stack");
	        return null;
	    }
	}

	var jsonxProps = /*#__PURE__*/Object.freeze({
		__proto__: null,
		STRIP_COMMENTS: STRIP_COMMENTS,
		ARGUMENT_NAMES: ARGUMENT_NAMES,
		getParamNames: getParamNames,
		getJSONXProps: getJSONXProps,
		getChildrenComponents: getChildrenComponents,
		boundArgsReducer: boundArgsReducer,
		getEvalProps: getEvalProps,
		getComponentProps: getComponentProps,
		getReactComponents: getReactComponents,
		getReactComponentProps: getReactComponentProps,
		getFunctionFromProps: getFunctionFromProps,
		getFunctionProps: getFunctionProps,
		getWindowComponents: getWindowComponents,
		getComputedProps: getComputedProps$1
	});

	/*! @preserve
	 * numeral.js
	 * version : 2.0.6
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */

	var numeral = createCommonjsModule(function (module) {
	(function (global, factory) {
	    if (module.exports) {
	        module.exports = factory();
	    } else {
	        (typeof global!=="undefined" ? global : window).numeral = factory();
	    }
	}(commonjsGlobal$1, function () {
	    /************************************
	        Variables
	    ************************************/

	    var numeral,
	        _,
	        VERSION = '2.0.6',
	        formats = {},
	        locales = {},
	        defaults = {
	            currentLocale: 'en',
	            zeroFormat: null,
	            nullFormat: null,
	            defaultFormat: '0,0',
	            scalePercentBy100: true
	        },
	        options = {
	            currentLocale: defaults.currentLocale,
	            zeroFormat: defaults.zeroFormat,
	            nullFormat: defaults.nullFormat,
	            defaultFormat: defaults.defaultFormat,
	            scalePercentBy100: defaults.scalePercentBy100
	        };


	    /************************************
	        Constructors
	    ************************************/

	    // Numeral prototype object
	    function Numeral(input, number) {
	        this._input = input;

	        this._value = number;
	    }

	    numeral = function(input) {
	        var value,
	            kind,
	            unformatFunction,
	            regexp;

	        if (numeral.isNumeral(input)) {
	            value = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            value = 0;
	        } else if (input === null || _.isNaN(input)) {
	            value = null;
	        } else if (typeof input === 'string') {
	            if (options.zeroFormat && input === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                for (kind in formats) {
	                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

	                    if (regexp && input.match(regexp)) {
	                        unformatFunction = formats[kind].unformat;

	                        break;
	                    }
	                }

	                unformatFunction = unformatFunction || numeral._.stringToNumber;

	                value = unformatFunction(input);
	            }
	        } else {
	            value = Number(input)|| null;
	        }

	        return new Numeral(input, value);
	    };

	    // version number
	    numeral.version = VERSION;

	    // compare numeral object
	    numeral.isNumeral = function(obj) {
	        return obj instanceof Numeral;
	    };

	    // helper functions
	    numeral._ = _ = {
	        // formats numbers separators, decimals places, signs, abbreviations
	        numberToFormat: function(value, format, roundingFunction) {
	            var locale = locales[numeral.options.currentLocale],
	                negP = false,
	                optDec = false,
	                leadingCount = 0,
	                abbr = '',
	                trillion = 1000000000000,
	                billion = 1000000000,
	                million = 1000000,
	                thousand = 1000,
	                decimal = '',
	                neg = false,
	                abbrForce, // force abbreviation
	                abs,
	                int,
	                precision,
	                signed,
	                thousands,
	                output;

	            // make sure we never format a null value
	            value = value || 0;

	            abs = Math.abs(value);

	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (numeral._.includes(format, '(')) {
	                negP = true;
	                format = format.replace(/[\(|\)]/g, '');
	            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
	                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
	                format = format.replace(/[\+|\-]/g, '');
	            }

	            // see if abbreviation is wanted
	            if (numeral._.includes(format, 'a')) {
	                abbrForce = format.match(/a(k|m|b|t)?/);

	                abbrForce = abbrForce ? abbrForce[1] : false;

	                // check for space before abbreviation
	                if (numeral._.includes(format, ' a')) {
	                    abbr = ' ';
	                }

	                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

	                if (abs >= trillion && !abbrForce || abbrForce === 't') {
	                    // trillion
	                    abbr += locale.abbreviations.trillion;
	                    value = value / trillion;
	                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
	                    // billion
	                    abbr += locale.abbreviations.billion;
	                    value = value / billion;
	                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
	                    // million
	                    abbr += locale.abbreviations.million;
	                    value = value / million;
	                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
	                    // thousand
	                    abbr += locale.abbreviations.thousand;
	                    value = value / thousand;
	                }
	            }

	            // check for optional decimals
	            if (numeral._.includes(format, '[.]')) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }

	            // break number and format
	            int = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');
	            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

	            if (precision) {
	                if (numeral._.includes(precision, '[')) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
	                } else {
	                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
	                }

	                int = decimal.split('.')[0];

	                if (numeral._.includes(decimal, '.')) {
	                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
	                } else {
	                    decimal = '';
	                }

	                if (optDec && Number(decimal.slice(1)) === 0) {
	                    decimal = '';
	                }
	            } else {
	                int = numeral._.toFixed(value, 0, roundingFunction);
	            }

	            // check abbreviation again after rounding
	            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
	                int = String(Number(int) / 1000);

	                switch (abbr) {
	                    case locale.abbreviations.thousand:
	                        abbr = locale.abbreviations.million;
	                        break;
	                    case locale.abbreviations.million:
	                        abbr = locale.abbreviations.billion;
	                        break;
	                    case locale.abbreviations.billion:
	                        abbr = locale.abbreviations.trillion;
	                        break;
	                }
	            }


	            // format number
	            if (numeral._.includes(int, '-')) {
	                int = int.slice(1);
	                neg = true;
	            }

	            if (int.length < leadingCount) {
	                for (var i = leadingCount - int.length; i > 0; i--) {
	                    int = '0' + int;
	                }
	            }

	            if (thousands > -1) {
	                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
	            }

	            if (format.indexOf('.') === 0) {
	                int = '';
	            }

	            output = int + decimal + (abbr ? abbr : '');

	            if (negP) {
	                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
	            } else {
	                if (signed >= 0) {
	                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
	                } else if (neg) {
	                    output = '-' + output;
	                }
	            }

	            return output;
	        },
	        // unformats numbers separators, decimals places, signs, abbreviations
	        stringToNumber: function(string) {
	            var locale = locales[options.currentLocale],
	                stringOriginal = string,
	                abbreviations = {
	                    thousand: 3,
	                    million: 6,
	                    billion: 9,
	                    trillion: 12
	                },
	                abbreviation,
	                value,
	                regexp;

	            if (options.zeroFormat && string === options.zeroFormat) {
	                value = 0;
	            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
	                value = null;
	            } else {
	                value = 1;

	                if (locale.delimiters.decimal !== '.') {
	                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
	                }

	                for (abbreviation in abbreviations) {
	                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

	                    if (stringOriginal.match(regexp)) {
	                        value *= Math.pow(10, abbreviations[abbreviation]);
	                        break;
	                    }
	                }

	                // check for negative number
	                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

	                // remove non numbers
	                string = string.replace(/[^0-9\.]+/g, '');

	                value *= Number(string);
	            }

	            return value;
	        },
	        isNaN: function(value) {
	            return typeof value === 'number' && isNaN(value);
	        },
	        includes: function(string, search) {
	            return string.indexOf(search) !== -1;
	        },
	        insert: function(string, subString, start) {
	            return string.slice(0, start) + subString + string.slice(start);
	        },
	        reduce: function(array, callback /*, initialValue*/) {
	            if (this === null) {
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }

	            if (typeof callback !== 'function') {
	                throw new TypeError(callback + ' is not a function');
	            }

	            var t = Object(array),
	                len = t.length >>> 0,
	                k = 0,
	                value;

	            if (arguments.length === 3) {
	                value = arguments[2];
	            } else {
	                while (k < len && !(k in t)) {
	                    k++;
	                }

	                if (k >= len) {
	                    throw new TypeError('Reduce of empty array with no initial value');
	                }

	                value = t[k++];
	            }
	            for (; k < len; k++) {
	                if (k in t) {
	                    value = callback(value, t[k], k, t);
	                }
	            }
	            return value;
	        },
	        /**
	         * Computes the multiplier necessary to make x >= 1,
	         * effectively eliminating miscalculations caused by
	         * finite precision.
	         */
	        multiplier: function (x) {
	            var parts = x.toString().split('.');

	            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
	        },
	        /**
	         * Given a variable number of arguments, returns the maximum
	         * multiplier that must be used to normalize an operation involving
	         * all of them.
	         */
	        correctionFactor: function () {
	            var args = Array.prototype.slice.call(arguments);

	            return args.reduce(function(accum, next) {
	                var mn = _.multiplier(next);
	                return accum > mn ? accum : mn;
	            }, 1);
	        },
	        /**
	         * Implementation of toFixed() that treats floats more like decimals
	         *
	         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	         * problems for accounting- and finance-related software.
	         */
	        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
	            var splitValue = value.toString().split('.'),
	                minDecimals = maxDecimals - (optionals || 0),
	                boundedPrecision,
	                optionalsRegExp,
	                power,
	                output;

	            // Use the smallest precision value possible to avoid errors from floating point representation
	            if (splitValue.length === 2) {
	              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
	            } else {
	              boundedPrecision = minDecimals;
	            }

	            power = Math.pow(10, boundedPrecision);

	            // Multiply up by precision, round accurately, then divide and use native toFixed():
	            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

	            if (optionals > maxDecimals - boundedPrecision) {
	                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
	                output = output.replace(optionalsRegExp, '');
	            }

	            return output;
	        }
	    };

	    // avaliable options
	    numeral.options = options;

	    // avaliable formats
	    numeral.formats = formats;

	    // avaliable formats
	    numeral.locales = locales;

	    // This function sets the current locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    numeral.locale = function(key) {
	        if (key) {
	            options.currentLocale = key.toLowerCase();
	        }

	        return options.currentLocale;
	    };

	    // This function provides access to the loaded locale data.  If
	    // no arguments are passed in, it will simply return the current
	    // global locale object.
	    numeral.localeData = function(key) {
	        if (!key) {
	            return locales[options.currentLocale];
	        }

	        key = key.toLowerCase();

	        if (!locales[key]) {
	            throw new Error('Unknown locale : ' + key);
	        }

	        return locales[key];
	    };

	    numeral.reset = function() {
	        for (var property in defaults) {
	            options[property] = defaults[property];
	        }
	    };

	    numeral.zeroFormat = function(format) {
	        options.zeroFormat = typeof(format) === 'string' ? format : null;
	    };

	    numeral.nullFormat = function (format) {
	        options.nullFormat = typeof(format) === 'string' ? format : null;
	    };

	    numeral.defaultFormat = function(format) {
	        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
	    };

	    numeral.register = function(type, name, format) {
	        name = name.toLowerCase();

	        if (this[type + 's'][name]) {
	            throw new TypeError(name + ' ' + type + ' already registered.');
	        }

	        this[type + 's'][name] = format;

	        return format;
	    };


	    numeral.validate = function(val, culture) {
	        var _decimalSep,
	            _thousandSep,
	            _currSymbol,
	            _valArray,
	            _abbrObj,
	            _thousandRegEx,
	            localeData,
	            temp;

	        //coerce val to string
	        if (typeof val !== 'string') {
	            val += '';

	            if (console.warn) {
	                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
	            }
	        }

	        //trim whitespaces from either sides
	        val = val.trim();

	        //if val is just digits return true
	        if (!!val.match(/^\d+$/)) {
	            return true;
	        }

	        //if val is empty return false
	        if (val === '') {
	            return false;
	        }

	        //get the decimal and thousands separator from numeral.localeData
	        try {
	            //check if the culture is understood by numeral. if not, default it to current locale
	            localeData = numeral.localeData(culture);
	        } catch (e) {
	            localeData = numeral.localeData(numeral.locale());
	        }

	        //setup the delimiters and currency symbol based on culture/locale
	        _currSymbol = localeData.currency.symbol;
	        _abbrObj = localeData.abbreviations;
	        _decimalSep = localeData.delimiters.decimal;
	        if (localeData.delimiters.thousands === '.') {
	            _thousandSep = '\\.';
	        } else {
	            _thousandSep = localeData.delimiters.thousands;
	        }

	        // validating currency symbol
	        temp = val.match(/^[^\d]+/);
	        if (temp !== null) {
	            val = val.substr(1);
	            if (temp[0] !== _currSymbol) {
	                return false;
	            }
	        }

	        //validating abbreviation symbol
	        temp = val.match(/[^\d]+$/);
	        if (temp !== null) {
	            val = val.slice(0, -1);
	            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
	                return false;
	            }
	        }

	        _thousandRegEx = new RegExp(_thousandSep + '{2}');

	        if (!val.match(/[^\d.,]/g)) {
	            _valArray = val.split(_decimalSep);
	            if (_valArray.length > 2) {
	                return false;
	            } else {
	                if (_valArray.length < 2) {
	                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
	                } else {
	                    if (_valArray[0].length === 1) {
	                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    } else {
	                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    }
	                }
	            }
	        }

	        return false;
	    };


	    /************************************
	        Numeral Prototype
	    ************************************/

	    numeral.fn = Numeral.prototype = {
	        clone: function() {
	            return numeral(this);
	        },
	        format: function(inputString, roundingFunction) {
	            var value = this._value,
	                format = inputString || options.defaultFormat,
	                kind,
	                output,
	                formatFunction;

	            // make sure we have a roundingFunction
	            roundingFunction = roundingFunction || Math.round;

	            // format based on value
	            if (value === 0 && options.zeroFormat !== null) {
	                output = options.zeroFormat;
	            } else if (value === null && options.nullFormat !== null) {
	                output = options.nullFormat;
	            } else {
	                for (kind in formats) {
	                    if (format.match(formats[kind].regexps.format)) {
	                        formatFunction = formats[kind].format;

	                        break;
	                    }
	                }

	                formatFunction = formatFunction || numeral._.numberToFormat;

	                output = formatFunction(value, format, roundingFunction);
	            }

	            return output;
	        },
	        value: function() {
	            return this._value;
	        },
	        input: function() {
	            return this._input;
	        },
	        set: function(value) {
	            this._value = Number(value);

	            return this;
	        },
	        add: function(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);

	            function cback(accum, curr, currI, O) {
	                return accum + Math.round(corrFactor * curr);
	            }

	            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

	            return this;
	        },
	        subtract: function(value) {
	            var corrFactor = _.correctionFactor.call(null, this._value, value);

	            function cback(accum, curr, currI, O) {
	                return accum - Math.round(corrFactor * curr);
	            }

	            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

	            return this;
	        },
	        multiply: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
	            }

	            this._value = _.reduce([this._value, value], cback, 1);

	            return this;
	        },
	        divide: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = _.correctionFactor(accum, curr);
	                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
	            }

	            this._value = _.reduce([this._value, value], cback);

	            return this;
	        },
	        difference: function(value) {
	            return Math.abs(numeral(this._value).subtract(value).value());
	        }
	    };

	    /************************************
	        Default Locale && Format
	    ************************************/

	    numeral.register('locale', 'en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function(number) {
	            var b = number % 10;
	            return (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });

	    

	(function() {
	        numeral.register('format', 'bps', {
	            regexps: {
	                format: /(BPS)/,
	                unformat: /(BPS)/
	            },
	            format: function(value, format, roundingFunction) {
	                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
	                    output;

	                value = value * 10000;

	                // check for space before BPS
	                format = format.replace(/\s?BPS/, '');

	                output = numeral._.numberToFormat(value, format, roundingFunction);

	                if (numeral._.includes(output, ')')) {
	                    output = output.split('');

	                    output.splice(-1, 0, space + 'BPS');

	                    output = output.join('');
	                } else {
	                    output = output + space + 'BPS';
	                }

	                return output;
	            },
	            unformat: function(string) {
	                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
	            }
	        });
	})();


	(function() {
	        var decimal = {
	            base: 1000,
	            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        },
	        binary = {
	            base: 1024,
	            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
	        };

	    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
	            return decimal.suffixes.indexOf(item) < 0;
	        }));
	        var unformatRegex = allSuffixes.join('|');
	        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
	        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

	    numeral.register('format', 'bytes', {
	        regexps: {
	            format: /([0\s]i?b)/,
	            unformat: new RegExp(unformatRegex)
	        },
	        format: function(value, format, roundingFunction) {
	            var output,
	                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
	                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
	                power,
	                min,
	                max;

	            // check for space before
	            format = format.replace(/\s?i?b/, '');

	            for (power = 0; power <= bytes.suffixes.length; power++) {
	                min = Math.pow(bytes.base, power);
	                max = Math.pow(bytes.base, power + 1);

	                if (value === null || value === 0 || value >= min && value < max) {
	                    suffix += bytes.suffixes[power];

	                    if (min > 0) {
	                        value = value / min;
	                    }

	                    break;
	                }
	            }

	            output = numeral._.numberToFormat(value, format, roundingFunction);

	            return output + suffix;
	        },
	        unformat: function(string) {
	            var value = numeral._.stringToNumber(string),
	                power,
	                bytesMultiplier;

	            if (value) {
	                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
	                    if (numeral._.includes(string, decimal.suffixes[power])) {
	                        bytesMultiplier = Math.pow(decimal.base, power);

	                        break;
	                    }

	                    if (numeral._.includes(string, binary.suffixes[power])) {
	                        bytesMultiplier = Math.pow(binary.base, power);

	                        break;
	                    }
	                }

	                value *= (bytesMultiplier || 1);
	            }

	            return value;
	        }
	    });
	})();


	(function() {
	        numeral.register('format', 'currency', {
	        regexps: {
	            format: /(\$)/
	        },
	        format: function(value, format, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                symbols = {
	                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
	                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
	                },
	                output,
	                symbol,
	                i;

	            // strip format of spaces and $
	            format = format.replace(/\s?\$\s?/, '');

	            // format the number
	            output = numeral._.numberToFormat(value, format, roundingFunction);

	            // update the before and after based on value
	            if (value >= 0) {
	                symbols.before = symbols.before.replace(/[\-\(]/, '');
	                symbols.after = symbols.after.replace(/[\-\)]/, '');
	            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
	                symbols.before = '-' + symbols.before;
	            }

	            // loop through each before symbol
	            for (i = 0; i < symbols.before.length; i++) {
	                symbol = symbols.before[i];

	                switch (symbol) {
	                    case '$':
	                        output = numeral._.insert(output, locale.currency.symbol, i);
	                        break;
	                    case ' ':
	                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
	                        break;
	                }
	            }

	            // loop through each after symbol
	            for (i = symbols.after.length - 1; i >= 0; i--) {
	                symbol = symbols.after[i];

	                switch (symbol) {
	                    case '$':
	                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
	                        break;
	                    case ' ':
	                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
	                        break;
	                }
	            }


	            return output;
	        }
	    });
	})();


	(function() {
	        numeral.register('format', 'exponential', {
	        regexps: {
	            format: /(e\+|e-)/,
	            unformat: /(e\+|e-)/
	        },
	        format: function(value, format, roundingFunction) {
	            var output,
	                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
	                parts = exponential.split('e');

	            format = format.replace(/e[\+|\-]{1}0/, '');

	            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

	            return output + 'e' + parts[1];
	        },
	        unformat: function(string) {
	            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
	                value = Number(parts[0]),
	                power = Number(parts[1]);

	            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

	            function cback(accum, curr, currI, O) {
	                var corrFactor = numeral._.correctionFactor(accum, curr),
	                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
	                return num;
	            }

	            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
	        }
	    });
	})();


	(function() {
	        numeral.register('format', 'ordinal', {
	        regexps: {
	            format: /(o)/
	        },
	        format: function(value, format, roundingFunction) {
	            var locale = numeral.locales[numeral.options.currentLocale],
	                output,
	                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

	            // check for space before
	            format = format.replace(/\s?o/, '');

	            ordinal += locale.ordinal(value);

	            output = numeral._.numberToFormat(value, format, roundingFunction);

	            return output + ordinal;
	        }
	    });
	})();


	(function() {
	        numeral.register('format', 'percentage', {
	        regexps: {
	            format: /(%)/,
	            unformat: /(%)/
	        },
	        format: function(value, format, roundingFunction) {
	            var space = numeral._.includes(format, ' %') ? ' ' : '',
	                output;

	            if (numeral.options.scalePercentBy100) {
	                value = value * 100;
	            }

	            // check for space before %
	            format = format.replace(/\s?\%/, '');

	            output = numeral._.numberToFormat(value, format, roundingFunction);

	            if (numeral._.includes(output, ')')) {
	                output = output.split('');

	                output.splice(-1, 0, space + '%');

	                output = output.join('');
	            } else {
	                output = output + space + '%';
	            }

	            return output;
	        },
	        unformat: function(string) {
	            var number = numeral._.stringToNumber(string);
	            if (numeral.options.scalePercentBy100) {
	                return number * 0.01;
	            }
	            return number;
	        }
	    });
	})();


	(function() {
	        numeral.register('format', 'time', {
	        regexps: {
	            format: /(:)/,
	            unformat: /(:)/
	        },
	        format: function(value, format, roundingFunction) {
	            var hours = Math.floor(value / 60 / 60),
	                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
	                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

	            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	        },
	        unformat: function(string) {
	            var timeArray = string.split(':'),
	                seconds = 0;

	            // turn hours and minutes into seconds and add them all up
	            if (timeArray.length === 3) {
	                // hours
	                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
	                // minutes
	                seconds = seconds + (Number(timeArray[1]) * 60);
	                // seconds
	                seconds = seconds + Number(timeArray[2]);
	            } else if (timeArray.length === 2) {
	                // minutes
	                seconds = seconds + (Number(timeArray[0]) * 60);
	                // seconds
	                seconds = seconds + Number(timeArray[1]);
	            }
	            return Number(seconds);
	        }
	    });
	})();

	return numeral;
	}));
	});

	var fs = {};

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	function resolve() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}
	// path.normalize(path)
	// posix version
	function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');

	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isPathAbsolute ? '/' : '') + path;
	}
	// posix version
	function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}

	// posix version
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}


	// path.relative(from, to)
	// posix version
	function relative(from, to) {
	  from = resolve(from).substr(1);
	  to = resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	}

	var sep = '/';
	var delimiter = ':';

	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	}

	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}


	function extname(path) {
	  return splitPath(path)[3];
	}
	var path = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	const scopedEval$1 = eval;
	const templateCache = new Map();
	/**
	 * returns a valid jsonx.children property
	 * @param {Object} options
	 * @param {Object} [options.jsonx ={}]- Valid JSONX JSON
	 * @param {Object} [options.props=options.jsonx.children] - Props to pull children  Object.assign(jsonx.props,jsonx.asyncprops,jsonx.thisprops,jsonx.windowprops)
	 * @returns {Object[]|String} returns a valid jsonx.children property that's either an array of JSONX objects or a string
	 * @example
	 * const sampleJSONX = {
	  component: 'div',
	  props: {
	    id: 'generatedJSONX',
	    className:'jsonx',
	  },
	  children: [
	    {
	      component: 'p',
	      props: {
	        style: {
	          color: 'red',
	        },
	      },
	      children:'hello world',
	    },
	    {
	      component: 'div',
	      children: [
	        {
	          component: 'ul',
	          children: [
	            {
	              component: 'li',
	              children:'list',
	            },
	          ],
	        },
	      ],
	    },
	  ],
	};
	const JSONXChildren = getChildrenProperty({ jsonx: sampleJSONX, }); //=> [ [jsonx Object],[jsonx Object]]
	const JSONXChildrenPTag = getChildrenProperty({ jsonx: sampleJSONX.children[ 0 ], }); //=>hello world
	 */
	function getChildrenProperty(options = {}) {
	    const { jsonx = {} } = options;
	    const props = options.props || jsonx.props || {};
	    if (typeof props._children !== "undefined" /* && !jsonx.children */) {
	        if (Array.isArray(props._children) ||
	            typeof props._children === "string" ||
	            typeof props._children === "number") {
	            return props._children;
	        }
	        else {
	            return jsonx.children;
	        }
	    }
	    else if (typeof jsonx.children === "undefined") {
	        if (props &&
	            props.children &&
	            (typeof props.children !== "undefined" || Array.isArray(props.children))) {
	            return props.children;
	        }
	        else {
	            return null;
	        }
	    }
	    else {
	        return jsonx.children;
	    }
	}
	/**
	 * Used to pass properties down to child components if passprops is set to true
	 * @param {Object} options
	 * @param {Object} [options.jsonx ={}] - Valid JSONX JSON
	 * @param {Object} [options.childjsonx ={}] - Valid JSONX JSON
	 * @param {Number} options.renderIndex - React key property
	 * @param {Object} [options.props=options.jsonx.props] - Props to pull children  Object.assign(jsonx.props,jsonx.asyncprops,jsonx.thisprops,jsonx.windowprops)
	 * @returns {Object|String} returns a valid  Valid JSONX Child object or a string
	 */
	function getChildrenProps(options = {}) {
	    const { jsonx = {}, childjsonx, renderIndex } = options;
	    const props = options.props || jsonx.props || {};
	    if (jsonx.passprops && childjsonx && typeof childjsonx === "object") {
	        const passedChildJsonx = Object.assign({}, childjsonx, {
	            props: Object.assign({}, Array.isArray(jsonx.passprops)
	                ? jsonx.passprops.reduce((passedProps, prop) => {
	                    passedProps[prop] = props[prop];
	                    return passedProps;
	                }, {})
	                : props, (childjsonx.thisprops && childjsonx.thisprops.style) || // this is to make sure when you bind props, if you've defined props in a dynamic property, to not use bind props to  remove passing down styles
	                (childjsonx.asyncprops && childjsonx.asyncprops.style) ||
	                (childjsonx.windowprops && childjsonx.windowprops.style)
	                ? {}
	                : {
	                // style: {}
	                }, childjsonx.props, 
	            //@ts-ignore
	            typeof this !== "undefined" || (this && this.disableRenderIndexKey)
	                ? {}
	                : { key: typeof renderIndex !== "undefined"
	                        ? renderIndex + Math.random()
	                        : Math.random()
	                })
	        });
	        return passedChildJsonx;
	    }
	    else
	        return childjsonx;
	}
	function fetchJSONSync(path, options) {
	    try {
	        const config = {
	            method: "GET",
	            headers: [],
	            ...options
	        };
	        const request = new XMLHttpRequest();
	        request.open(config && config.method || "GET", path, false); // `false` makes the request synchronous
	        if (config.headers) {
	            Object.keys(config.headers).forEach(header => {
	                request.setRequestHeader(header, config.headers[header]);
	            });
	        }
	        request.send(config.body ? JSON.stringify(config.body) : undefined);
	        if (request.status !== 200) {
	            throw new Error(request.responseText);
	        }
	        else
	            return request.responseText;
	    }
	    catch (e) {
	        throw e;
	    }
	}
	function getChildrenTemplate(template) {
	    console.log('template', template);
	    const cachedTemplate = templateCache.get(template);
	    if (cachedTemplate) {
	        return cachedTemplate;
	    }
	    else if (typeof window !== "undefined" &&
	        typeof window.XMLHttpRequest === "function" &&
	        !fs.readFileSync) {
	        const jsFile = fetchJSONSync(template);
	        const jsonxModule = scopedEval$1(`(${jsFile})`);
	        templateCache.set(template, jsonxModule);
	        return jsonxModule;
	    }
	    else if (typeof template === "string") {
	        const jsFile = fs.readFileSync(path.resolve(template)).toString();
	        const jsonxModule = scopedEval$1(`(${jsFile})`);
	        templateCache.set(template, jsonxModule);
	        return jsonxModule;
	    }
	    return null;
	}
	function clearTemplateCache() {
	    templateCache.clear();
	}
	/**
	 * returns React Child Elements via JSONX
	 * @param {*} options
	 * @property {object} this - options for getReactElementFromJSONX
	 * @property {Object} [this.componentLibraries] - react components to render with JSONX
	 * @property {boolean} [this.debug=false] - use debug messages
	 * @property {function} [this.logError=console.error] - error logging function
	 * @property {string[]} [this.boundedComponents=[]] - list of components that require a bound this context (usefult for redux router)
	 */
	function getJSONXChildren$1(options = { jsonx: {} }) {
	    // eslint-disable-next-line
	    const { jsonx, resources, renderIndex, logError = console.error } = options;
	    try {
	        const context = this || {};
	        const props = options && options.props
	            ? options.props
	            : jsonx && jsonx.props
	                ? jsonx.props
	                : {};
	        if (!jsonx)
	            return null;
	        jsonx.children = getChildrenProperty({ jsonx, props });
	        props._children = undefined;
	        delete props._children;
	        if (jsonx.___template)
	            jsonx.children = [getChildrenTemplate(jsonx.___template)];
	        else if (typeof jsonx.children === 'undefined' || jsonx.children === null)
	            return undefined;
	        else if (jsonx.children && jsonx.___stringifyChildren && Array.isArray(jsonx.___stringifyChildren)) {
	            const args = [jsonx.children, ...jsonx.___stringifyChildren];
	            jsonx.children = JSON.stringify.apply(null, args);
	        }
	        else if (jsonx.children && jsonx.___stringifyChildren)
	            jsonx.children = JSON.stringify.apply(null, [jsonx.children, null, 2]);
	        //TODO: fix passing applied params
	        else if (jsonx.children && jsonx.___toStringChildren)
	            jsonx.children = jsonx.children.toString();
	        else if (jsonx.children && jsonx.___toNumeral)
	            jsonx.children = numeral(jsonx.children).format(jsonx.___toNumeral);
	        else if (jsonx.children && jsonx.___JSDatetoLuxonString)
	            jsonx.children = luxon__namespace.DateTime.fromJSDate(jsonx.children).toFormat(jsonx.___JSDatetoLuxonString);
	        else if (jsonx.children && jsonx.___ISOtoLuxonString)
	            jsonx.children = luxon__namespace.DateTime.fromISO(jsonx.children, {
	                zone: jsonx.___FromLuxonTimeZone
	            }).toFormat(jsonx.___ISOtoLuxonString);
	        if (typeof jsonx.children === 'string')
	            return jsonx.children;
	        const children = jsonx.children && Array.isArray(jsonx.children)
	            ? jsonx.children
	                .map(childjsonx => getReactElementFromJSONX.call(context, getChildrenProps.call(this, { jsonx, childjsonx, props, renderIndex }), resources))
	                .filter(child => child !== null)
	            : jsonx.children;
	        return children;
	    }
	    catch (e) {
	        this && this.debug && logError(e, e.stack ? e.stack : "no stack");
	        return null;
	    }
	}

	var jsonxChildren = /*#__PURE__*/Object.freeze({
		__proto__: null,
		templateCache: templateCache,
		getChildrenProperty: getChildrenProperty,
		getChildrenProps: getChildrenProps,
		fetchJSONSync: fetchJSONSync,
		getChildrenTemplate: getChildrenTemplate,
		clearTemplateCache: clearTemplateCache,
		getJSONXChildren: getJSONXChildren$1
	});

	const scopedEval = eval;
	/**
	 * Use JSONX for express view rendering
	 * @param {string} filePath - path to jsonx express view
	 * @param {object} options - property used for express view {locals}
	 * @param {object} options.__boundConfig - property used to bind this object for JSONX, can be used to add custom components
	 * @param {string} [options.__DOCTYPE="<!DOCTYPE html>"] - html doctype string
	 * @param {*} callback
	 */
	function __express(filePath, options, callback) {
	    try {
	        let jsonxModule = options?.__jsonx;
	        let isJSON = false;
	        if (filePath) {
	            isJSON = (path.extname(filePath) === ".json");
	            const jsFile = fs.readFileSync(filePath).toString();
	            jsonxModule = (isJSON)
	                ? scopedEval(`(${jsFile})`)
	                : scopedEval(jsFile);
	        }
	        const resources = Object.assign({}, options);
	        delete resources.__boundConfig;
	        delete resources.__DOCTYPE;
	        delete resources.__jsonx;
	        const context = Object.assign({ disableRenderIndexKey: false }, options?.__boundConfig);
	        // if (isJSON) context.useJSON = true;
	        const jsonxRenderedString = outputHTML.call(context, {
	            jsonx: jsonxModule,
	            resources
	        });
	        const template = `${options?.__DOCTYPE || "<!DOCTYPE html>"}
${jsonxRenderedString}`;
	        if (typeof callback === "function")
	            callback(null, template);
	        else
	            return template;
	    }
	    catch (e) {
	        if (typeof callback === "function")
	            callback(e);
	        else
	            throw e;
	    }
	}

	// import React, { createElement, } from 'react';
	const createElement = React__default['default'].createElement;
	const { componentMap, getComponentFromMap, getBoundedComponents, DynamicComponent, FormComponent, ReactHookForm, } = jsonxComponents;
	const { getComputedProps } = jsonxProps;
	const { getJSONXChildren } = jsonxChildren;
	const { displayComponent, validSimpleJSONXSyntax, simpleJSONXSyntax } = jsonxUtils;
	let renderIndex = 0;
	/**
	 * Use JSONX without any configuration to render JSONX JSON to HTML and insert JSONX into querySelector using ReactDOM.render
	 * @example
	 * // Uses react to create <!DOCTYPE html><body><div id="myApp"><div class="jsonx-generated"><p style="color:red;">hello world</p></div></div></body>
	 * jsonx.jsonxRender({ jsonx: { component: 'div', props:{className:'jsonx-generated',children:[{ component:'p',props:{style:{color:'red'}}, children:'hello world' }]}}, querySelector:'#myApp', });
	 * @param {object} config - options used to inject html via ReactDOM.render
	 * @param {object} config.jsonx - any valid JSONX JSON object
	 * @param {object} config.resources - any additional resource used for asynchronous properties
	 * @param {string} config.querySelector - selector for document.querySelector
	 * @property {object} this - options for getReactElementFromJSONX
	 */
	function jsonxRender(config = { jsonx: { component: "" }, querySelector: "" }) {
	    const { jsonx, resources, querySelector, DOM, portal } = config;
	    const Render = portal ? ReactDOM__default['default'].createPortal : ReactDOM__default['default'].render;
	    const RenderDOM = DOM || document.querySelector(querySelector);
	    const JSONXReactElement = getReactElementFromJSONX.call(this || {}, jsonx, resources);
	    if (!JSONXReactElement)
	        throw ReferenceError("Invalid React Element");
	    else if (!RenderDOM)
	        throw ReferenceError("Invalid Render DOM Element");
	    Render(JSONXReactElement, RenderDOM);
	}
	/**
	 * Use ReactDOMServer.renderToString to render html from JSONX
	 * @example
	 * // Uses react to create <div class="jsonx-generated"><p style="color:red;">hello world</p></div>
	 * jsonx.outputHTML({ jsonx: { component: 'div', props:{className:'jsonx-generated',children:[{ component:'p',props:{style:{color:'red'}}, children:'hello world' }]}}, });
	 * @param {object} config - options used to inject html via ReactDOM.render
	 * @param {object} config.jsonx - any valid JSONX JSON object
	 * @param {object} config.resources - any additional resource used for asynchronous properties
	 * @property {object} this - options for getReactElementFromJSONX
	 * @returns {string} React genereated html via JSONX JSON
	 */
	function outputHTML(config = { jsonx: { component: "" } }) {
	    const { jsonx, resources, type, props, children } = config;
	    return this && this.useJSON
	        ? server.renderToString(getReactElementFromJSON.call(this || {}, { type: (type || jsonx.type || jsonx.component || 'Fragment'), props: props || jsonx.props, children: children || jsonx.children }))
	        : server.renderToString(getReactElementFromJSONX.call(this || {}, jsonx, resources));
	}
	/**
	 * Use React.createElement and JSONX JSON to create React elements
	 * @example
	 * // Uses react to create the equivalent JSX <myComponent style={{color:blue}}>hello world</myComponent>
	 * jsonx.getReactElementFromJSONX({component:'myCompnent',props:{style:{color:'blue'}},children:'hello world'})
	 * @param {object} jsonx - any valid JSONX JSON object
	 * @param {object} resources - any additional resource used for asynchronous properties
	 * @property {object} this - options for getReactElementFromJSONX
	 * @property {Object} [this.componentLibraries] - react components to render with JSONX
	 * @property {boolean} [this.debug=false] - use debug messages
	 * @property {boolean} [this.returnJSON=false] - return json object of {type,props,children} instead of react element
	 * @property {boolean} [this.disableRenderIndexKey=false] - disables auto assign a key prop
	 * @property {function} [this.logError=console.error] - error logging function
	 * @property {string[]} [this.boundedComponents=[]] - list of components that require a bound this context (usefult for redux router)
	 * @returns {function} React element via React.createElement
	 */
	function getReactElementFromJSONX(jsonx, resources = {}) {
	    // eslint-disable-next-line
	    const { componentLibraries = {}, debug = false, returnJSON = false, logError = console.error, boundedComponents = [], disableRenderIndexKey = true } = this || {};
	    componentLibraries.ReactHookForm = ReactHookForm;
	    if (!jsonx)
	        return null;
	    if (jsonx.type)
	        jsonx.component = jsonx.type;
	    if (!jsonx.component && validSimpleJSONXSyntax(jsonx)) {
	        jsonx = simpleJSONXSyntax(jsonx);
	    }
	    if (!jsonx || !jsonx.component)
	        return createElement("span", {}, debug ? "Error: Missing Component Object" : "");
	    try {
	        const components = Object.assign({ DynamicComponent: DynamicComponent.bind(this) }, { FormComponent: FormComponent.bind(this) }, componentMap, this?.reactComponents);
	        const reactComponents = boundedComponents.length
	            ? getBoundedComponents.call(this, {
	                boundedComponents,
	                reactComponents: components
	            })
	            : components;
	        renderIndex++;
	        const element = getComponentFromMap({
	            jsonx,
	            reactComponents,
	            componentLibraries,
	            debug,
	            logError
	        });
	        const props = getComputedProps.call(this, {
	            jsonx,
	            resources,
	            renderIndex,
	            componentLibraries,
	            debug,
	            logError,
	            disableRenderIndexKey
	        });
	        const displayElement = jsonx.comparisonprops
	            ? displayComponent.call(this, {
	                jsonx,
	                props,
	                renderIndex,
	                componentLibraries,
	                debug
	            })
	            : true;
	        if (displayElement) {
	            const children = getJSONXChildren.call(this, {
	                jsonx,
	                props,
	                resources,
	                renderIndex
	            });
	            //@ts -ignore
	            if (returnJSON)
	                return { type: element, props, children };
	            else if (jsonx.test)
	                return JSON.stringify({ element, props, children }, null, 2);
	            //TODO: Fix
	            else
	                return createElement(element, props, children);
	        }
	        else {
	            return null;
	        }
	    }
	    catch (e) {
	        if (debug) {
	            logError({ jsonx, resources }, "getReactElementFromJSONX this", this);
	            logError(e, e.stack ? e.stack : "no stack");
	        }
	        throw e;
	    }
	}
	const getRenderedJSON = getReactElementFromJSONX;
	const getReactElement = getReactElementFromJSONX;
	/** converts a json object {type,props,children} into a react element
	 * @example
	 * jsonx.getReactElementFromJSON({type:'div',props:{title:'some title attribute'},children:'inner html text'})
	 * @param {Object|String} options.type - 'div' or react component
	 * @param {Object} options.props - props for react element
	 * @param {String|[Object]} options.children - children elements
	 * @returns {function} React element via React.createElement
	 */
	function getReactElementFromJSON({ type, props, children }) {
	    return createElement(type, props, children && Array.isArray(children)
	        ? children.map(getReactElementFromJSON)
	        : children);
	}
	/** converts a jsonx json object into a react function component
	 * @example
	 * jsonx.compile({jsonx:{component:'div',props:{title:'some title attribute'},children:'inner html text'}}) //=>React Function Component
	 * @param {Object} jsonx - valid JSONX JSON
	 * @param {Object} resources - props for react element
	 * @returns {function} React element via React.createElement
	 */
	function compile$2(jsonx, resources = {}) {
	    const context = Object.assign({}, this, { returnJSON: true });
	    const json = getReactElementFromJSONX.call(context, jsonx, resources);
	    const func = function compiledJSONX(props) {
	        json.props = Object.assign({}, json.props, props);
	        return getReactElementFromJSON(json);
	    };
	    Object.defineProperty(func, "name", { value: this.name });
	    return func;
	}
	/**
	 * converts JSONX JSON IR to JSX
	 * @example
	 * jsonx.jsonToJSX({ type: 'div', props: { key: 5, title: 'test' }, children: 'hello' }) // => '<div key={5} title="test">hello</div>'
	 * @param {Object} json - {type,props,children}
	 * @returns {String} jsx string
	 */
	function outputJSX(jsonx, resources = {}) {
	    const context = Object.assign({}, this, { returnJSON: true });
	    const json = getReactElementFromJSONX.call(context, jsonx, resources);
	    return jsonToJSX(json);
	}
	/**
	 * Compiles JSONX into JSON IR format for react create element
	 * @example
	 * jsonx.outputJSON({ component: 'div', props: { title: 'test', }, children: 'hello', }); //=> { type: 'div',
	 props: { key: 5, title: 'test' },
	 children: 'hello' }
	 * @property {object} this - options for getReactElementFromJSONX
	 * @param {object} jsonx - any valid JSONX JSON object
	 * @param {object} resources - any additional resource used for asynchronous properties
	 * @returns {Object} json - {type,props,children}
	 */
	function outputJSON(jsonx, resources = {}) {
	    //@ts-ignore
	    const context = Object.assign({}, this, { returnJSON: true });
	    return getReactElementFromJSONX.call(context, jsonx, resources);
	}
	const jsonxHTMLString = outputHTML;
	/**
	 * converts JSONX JSON IR to JSX
	 * @example
	 * jsonx.jsonToJSX({ type: 'div', props: { key: 5, title: 'test' }, children: 'hello' }) // => '<div key={5} title="test">hello</div>'
	 * @param {Object} json - {type,props,children}
	 * @returns {String} jsx string
	 */
	function jsonToJSX(json) {
	    const propsString = json.props
	        ? Object.keys(json.props)
	            .filter(prop => prop.includes("__eval_") === false)
	            .reduce((propString, prop) => {
	            propString += ` ${prop.toString()}=${typeof json.props[prop] === "string"
                ? `"${json.props[prop].toString()}"`
                : `{${(json.props[`__eval_${prop}`] || json.props[prop]).toString()}}`}`;
	            return propString;
	        }, "")
	        : "";
	    return Array.isArray(json.children)
	        ? `<${json.type} ${propsString}>
  ${json.children.map(jsonToJSX).join('\r\n')}
</${json.type}>`
	        : `<${json.type}${propsString}>${json.children}</${json.type}>`;
	}
	/**
	 * Exposes react module used in JSONX
	 * @returns {Object} React
	 */
	function __getReact() {
	    return React__default['default'];
	}
	/**
	 * Exposes react dom module used in JSONX
	 * @returns {Object} ReactDOM
	 */
	function __getReactDOM() {
	    return ReactDOM__default['default'];
	}
	const _jsonxChildren = jsonxChildren;
	const _jsonxComponents = jsonxComponents;
	const _jsonxProps = jsonxProps;
	const _jsonxUtils = jsonxUtils;
	const _jsonxHelpers = { numeral, luxon: luxon__namespace };

	var index = /*#__PURE__*/Object.freeze({
		__proto__: null,
		get renderIndex () { return renderIndex; },
		jsonxRender: jsonxRender,
		outputHTML: outputHTML,
		getReactElementFromJSONX: getReactElementFromJSONX,
		getRenderedJSON: getRenderedJSON,
		getReactElement: getReactElement,
		getReactElementFromJSON: getReactElementFromJSON,
		compile: compile$2,
		outputJSX: outputJSX,
		outputJSON: outputJSON,
		jsonxHTMLString: jsonxHTMLString,
		jsonToJSX: jsonToJSX,
		__getReact: __getReact,
		__getReactDOM: __getReactDOM,
		_jsonxChildren: _jsonxChildren,
		_jsonxComponents: _jsonxComponents,
		_jsonxProps: _jsonxProps,
		_jsonxUtils: _jsonxUtils,
		_jsonxHelpers: _jsonxHelpers,
		'default': getReactElementFromJSONX,
		__express: __express,
		renderFile: __express
	});

	/**
	 * Expose `pathToRegexp`.
	 */
	var pathToRegexp_1 = pathToRegexp;
	var match_1 = match$1;
	var regexpToFunction_1 = regexpToFunction;
	var parse_1 = parse$2;
	var compile_1 = compile$1;
	var tokensToFunction_1 = tokensToFunction$1;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * Default configs.
	 */
	var DEFAULT_DELIMITER = '/';

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
	  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
	  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse$2 (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
	  var whitelist = (options && options.whitelist) || undefined;
	  var pathEscaped = false;
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) !== null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      pathEscaped = true;
	      continue
	    }

	    var prev = '';
	    var name = res[2];
	    var capture = res[3];
	    var group = res[4];
	    var modifier = res[5];

	    if (!pathEscaped && path.length) {
	      var k = path.length - 1;
	      var c = path[k];
	      var matches = whitelist ? whitelist.indexOf(c) > -1 : true;

	      if (matches) {
	        prev = c;
	        path = path.slice(0, k);
	      }
	    }

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	      pathEscaped = false;
	    }

	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var pattern = capture || group;
	    var delimiter = prev || defaultDelimiter;

	    tokens.push({
	      name: name || key++,
	      prefix: prev,
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: pattern
	        ? escapeGroup(pattern)
	        : '[^' + escapeString$1(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'
	    });
	  }

	  // Push any remaining characters.
	  if (path || index < str.length) {
	    tokens.push(path + str.substr(index));
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile$1 (str, options) {
	  return tokensToFunction$1(parse$2(str, options), options)
	}

	/**
	 * Create path match function from `path-to-regexp` spec.
	 */
	function match$1 (str, options) {
	  var keys = [];
	  var re = pathToRegexp(str, keys, options);
	  return regexpToFunction(re, keys)
	}

	/**
	 * Create a path match function from `path-to-regexp` output.
	 */
	function regexpToFunction (re, keys) {
	  return function (pathname, options) {
	    var m = re.exec(pathname);
	    if (!m) return false

	    var path = m[0];
	    var index = m.index;
	    var params = {};
	    var decode = (options && options.decode) || decodeURIComponent;

	    for (var i = 1; i < m.length; i++) {
	      if (m[i] === undefined) continue

	      var key = keys[i - 1];

	      if (key.repeat) {
	        params[key.name] = m[i].split(key.delimiter).map(function (value) {
	          return decode(value, key)
	        });
	      } else {
	        params[key.name] = decode(m[i], key);
	      }
	    }

	    return { path: path, index: index, params: params }
	  }
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction$1 (tokens, options) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags$1(options));
	    }
	  }

	  return function (data, options) {
	    var path = '';
	    var encode = (options && options.encode) || encodeURIComponent;
	    var validate = options ? options.validate !== false : true;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;
	        continue
	      }

	      var value = data ? data[token.name] : undefined;
	      var segment;

	      if (Array.isArray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
	        }

	        if (value.length === 0) {
	          if (token.optional) continue

	          throw new TypeError('Expected "' + token.name + '" to not be empty')
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j], token);

	          if (validate && !matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	        segment = encode(String(value), token);

	        if (validate && !matches[i].test(segment)) {
	          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
	        }

	        path += token.prefix + segment;
	        continue
	      }

	      if (token.optional) continue

	      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString$1 (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$/()])/g, '\\$1')
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags$1 (options) {
	  return options && options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {Array=}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  if (!keys) return path

	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      });
	    }
	  }

	  return path
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array=}  keys
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  return new RegExp('(?:' + parts.join('|') + ')', flags$1(options))
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {Array=}  keys
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse$2(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Array=}  keys
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  options = options || {};

	  var strict = options.strict;
	  var start = options.start !== false;
	  var end = options.end !== false;
	  var delimiter = options.delimiter || DEFAULT_DELIMITER;
	  var endsWith = [].concat(options.endsWith || []).map(escapeString$1).concat('$').join('|');
	  var route = start ? '^' : '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString$1(token);
	    } else {
	      var capture = token.repeat
	        ? '(?:' + token.pattern + ')(?:' + escapeString$1(token.delimiter) + '(?:' + token.pattern + '))*'
	        : token.pattern;

	      if (keys) keys.push(token);

	      if (token.optional) {
	        if (!token.prefix) {
	          route += '(' + capture + ')?';
	        } else {
	          route += '(?:' + escapeString$1(token.prefix) + '(' + capture + '))?';
	        }
	      } else {
	        route += escapeString$1(token.prefix) + '(' + capture + ')';
	      }
	    }
	  }

	  if (end) {
	    if (!strict) route += '(?:' + escapeString$1(delimiter) + ')?';

	    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
	  } else {
	    var endToken = tokens[tokens.length - 1];
	    var isEndDelimited = typeof endToken === 'string'
	      ? endToken[endToken.length - 1] === delimiter
	      : endToken === undefined;

	    if (!strict) route += '(?:' + escapeString$1(delimiter) + '(?=' + endsWith + '))?';
	    if (!isEndDelimited) route += '(?=' + escapeString$1(delimiter) + '|' + endsWith + ')';
	  }

	  return new RegExp(route, flags$1(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {Array=}                keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys)
	  }

	  if (Array.isArray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), keys, options)
	}
	pathToRegexp_1.match = match_1;
	pathToRegexp_1.regexpToFunction = regexpToFunction_1;
	pathToRegexp_1.parse = parse_1;
	pathToRegexp_1.compile = compile_1;
	pathToRegexp_1.tokensToFunction = tokensToFunction_1;
	pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

	// const ROUTE_MAP = new Map();
	const ROUTE_MAP = new Map();
	/**
	 * Generates a express style regexp for a given route and stores in a Map
	 * @param  {string} route The route that should be converted into a regexp
	 * @return {Object}       Returns an object with param keys and a path regexp
	 */
	function getParameterizedPath(route, options = { useMap: true, }) {
	    if (ROUTE_MAP.has(route) && options.useMap) {
	        return ROUTE_MAP.get(route);
	    }
	    else {
	        let keys = [];
	        //@ts-ignore
	        let result = new pathToRegexp_1(route, keys);
	        // console.log({ route, }, {
	        //   re: result,
	        //   keys,
	        // });
	        ROUTE_MAP.set(route, {
	            re: result,
	            keys,
	        });
	        return { keys, re: result, };
	    }
	}
	/**
	 * Finds a matching dynamic route from manifest
	 * @param  {Object|Array} routes   The manifest configuration object
	 * @param  {string} location The window location that should be resolved
	 * @return {string}          A matching dynamic route
	 */
	function findMatchingRoutePath(routes, location, options = {}) {
	    const { return_matching_keys, } = options;
	    let matching;
	    let params;
	    let re;
	    location = (/\?[^\s]+$/.test(location)) ? location.replace(/^([^\s\?]+)\?[^\s]+$/, '$1') : location;
	    const routeArray = Array.isArray(routes) ? routes : Object.keys(routes);
	    routeArray.forEach(function (key) {
	        var result = getParameterizedPath(key, options);
	        if (result.re.test(location) && !matching) {
	            matching = key;
	            re = result.re;
	            if (return_matching_keys) {
	                const matchingParams = result.re.exec(matching);
	                const matchingVals = location.match(result.re);
	                if (matchingVals && matchingParams) {
	                    params = matchingVals.reduce((result, val, idx) => {
	                        if (idx !== 0 && typeof val === 'string')
	                            result[matchingParams[idx].replace(':', '')] = val;
	                        return result;
	                    }, {});
	                }
	            }
	        }
	    });
	    // console.log({ routes, location, matching, });
	    return return_matching_keys && matching ? {
	        route: matching,
	        location,
	        params,
	        re,
	    }
	        : matching;
	}

	/*! store2 - v2.12.0 - 2020-08-12
	* Copyright (c) 2020 Nathan Bubna; Licensed (MIT OR GPL-3.0) */

	var store2 = createCommonjsModule(function (module) {
	(function(window, define) {
	    var _ = {
	        version: "2.12.0",
	        areas: {},
	        apis: {},

	        // utilities
	        inherit: function(api, o) {
	            for (var p in api) {
	                if (!o.hasOwnProperty(p)) {
	                    Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
	                }
	            }
	            return o;
	        },
	        stringify: function(d) {
	            return d === undefined || typeof d === "function" ? d+'' : JSON.stringify(d);
	        },
	        parse: function(s, fn) {
	            // if it doesn't parse, return as is
	            try{ return JSON.parse(s,fn||_.revive); }catch(e){ return s; }
	        },

	        // extension hooks
	        fn: function(name, fn) {
	            _.storeAPI[name] = fn;
	            for (var api in _.apis) {
	                _.apis[api][name] = fn;
	            }
	        },
	        get: function(area, key){ return area.getItem(key); },
	        set: function(area, key, string){ area.setItem(key, string); },
	        remove: function(area, key){ area.removeItem(key); },
	        key: function(area, i){ return area.key(i); },
	        length: function(area){ return area.length; },
	        clear: function(area){ area.clear(); },

	        // core functions
	        Store: function(id, area, namespace) {
	            var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
	                if (arguments.length === 0){ return store.getAll(); }
	                if (typeof data === "function"){ return store.transact(key, data, overwrite); }// fn=data, alt=overwrite
	                if (data !== undefined){ return store.set(key, data, overwrite); }
	                if (typeof key === "string" || typeof key === "number"){ return store.get(key); }
	                if (typeof key === "function"){ return store.each(key); }
	                if (!key){ return store.clear(); }
	                return store.setAll(key, data);// overwrite=data, data=key
	            });
	            store._id = id;
	            try {
	                var testKey = '__store2_test';
	                area.setItem(testKey, 'ok');
	                store._area = area;
	                area.removeItem(testKey);
	            } catch (e) {
	                store._area = _.storage('fake');
	            }
	            store._ns = namespace || '';
	            if (!_.areas[id]) {
	                _.areas[id] = store._area;
	            }
	            if (!_.apis[store._ns+store._id]) {
	                _.apis[store._ns+store._id] = store;
	            }
	            return store;
	        },
	        storeAPI: {
	            // admin functions
	            area: function(id, area) {
	                var store = this[id];
	                if (!store || !store.area) {
	                    store = _.Store(id, area, this._ns);//new area-specific api in this namespace
	                    if (!this[id]){ this[id] = store; }
	                }
	                return store;
	            },
	            namespace: function(namespace, singleArea) {
	                if (!namespace){
	                    return this._ns ? this._ns.substring(0,this._ns.length-1) : '';
	                }
	                var ns = namespace, store = this[ns];
	                if (!store || !store.namespace) {
	                    store = _.Store(this._id, this._area, this._ns+ns+'.');//new namespaced api
	                    if (!this[ns]){ this[ns] = store; }
	                    if (!singleArea) {
	                        for (var name in _.areas) {
	                            store.area(name, _.areas[name]);
	                        }
	                    }
	                }
	                return store;
	            },
	            isFake: function(){ return this._area.name === 'fake'; },
	            toString: function() {
	                return 'store'+(this._ns?'.'+this.namespace():'')+'['+this._id+']';
	            },

	            // storage functions
	            has: function(key) {
	                if (this._area.has) {
	                    return this._area.has(this._in(key));//extension hook
	                }
	                return !!(this._in(key) in this._area);
	            },
	            size: function(){ return this.keys().length; },
	            each: function(fn, fill) {// fill is used by keys(fillList) and getAll(fillList))
	                for (var i=0, m=_.length(this._area); i<m; i++) {
	                    var key = this._out(_.key(this._area, i));
	                    if (key !== undefined) {
	                        if (fn.call(this, key, this.get(key), fill) === false) {
	                            break;
	                        }
	                    }
	                    if (m > _.length(this._area)) { m--; i--; }// in case of removeItem
	                }
	                return fill || this;
	            },
	            keys: function(fillList) {
	                return this.each(function(k, v, list){ list.push(k); }, fillList || []);
	            },
	            get: function(key, alt) {
	                var s = _.get(this._area, this._in(key)),
	                    fn;
	                if (typeof alt === "function") {
	                    fn = alt;
	                    alt = null;
	                }
	                return s !== null ? _.parse(s, fn) :
	                    alt != null ? alt : s;
	            },
	            getAll: function(fillObj) {
	                return this.each(function(k, v, all){ all[k] = v; }, fillObj || {});
	            },
	            transact: function(key, fn, alt) {
	                var val = this.get(key, alt),
	                    ret = fn(val);
	                this.set(key, ret === undefined ? val : ret);
	                return this;
	            },
	            set: function(key, data, overwrite) {
	                var d = this.get(key);
	                if (d != null && overwrite === false) {
	                    return data;
	                }
	                return _.set(this._area, this._in(key), _.stringify(data), overwrite) || d;
	            },
	            setAll: function(data, overwrite) {
	                var changed, val;
	                for (var key in data) {
	                    val = data[key];
	                    if (this.set(key, val, overwrite) !== val) {
	                        changed = true;
	                    }
	                }
	                return changed;
	            },
	            add: function(key, data) {
	                var d = this.get(key);
	                if (d instanceof Array) {
	                    data = d.concat(data);
	                } else if (d !== null) {
	                    var type = typeof d;
	                    if (type === typeof data && type === 'object') {
	                        for (var k in data) {
	                            d[k] = data[k];
	                        }
	                        data = d;
	                    } else {
	                        data = d + data;
	                    }
	                }
	                _.set(this._area, this._in(key), _.stringify(data));
	                return data;
	            },
	            remove: function(key, alt) {
	                var d = this.get(key, alt);
	                _.remove(this._area, this._in(key));
	                return d;
	            },
	            clear: function() {
	                if (!this._ns) {
	                    _.clear(this._area);
	                } else {
	                    this.each(function(k){ _.remove(this._area, this._in(k)); }, 1);
	                }
	                return this;
	            },
	            clearAll: function() {
	                var area = this._area;
	                for (var id in _.areas) {
	                    if (_.areas.hasOwnProperty(id)) {
	                        this._area = _.areas[id];
	                        this.clear();
	                    }
	                }
	                this._area = area;
	                return this;
	            },

	            // internal use functions
	            _in: function(k) {
	                if (typeof k !== "string"){ k = _.stringify(k); }
	                return this._ns ? this._ns + k : k;
	            },
	            _out: function(k) {
	                return this._ns ?
	                    k && k.indexOf(this._ns) === 0 ?
	                        k.substring(this._ns.length) :
	                        undefined : // so each() knows to skip it
	                    k;
	            }
	        },// end _.storeAPI
	        storage: function(name) {
	            return _.inherit(_.storageAPI, { items: {}, name: name });
	        },
	        storageAPI: {
	            length: 0,
	            has: function(k){ return this.items.hasOwnProperty(k); },
	            key: function(i) {
	                var c = 0;
	                for (var k in this.items){
	                    if (this.has(k) && i === c++) {
	                        return k;
	                    }
	                }
	            },
	            setItem: function(k, v) {
	                if (!this.has(k)) {
	                    this.length++;
	                }
	                this.items[k] = v;
	            },
	            removeItem: function(k) {
	                if (this.has(k)) {
	                    delete this.items[k];
	                    this.length--;
	                }
	            },
	            getItem: function(k){ return this.has(k) ? this.items[k] : null; },
	            clear: function(){ for (var k in this.items){ this.removeItem(k); } }
	        }// end _.storageAPI
	    };

	    var store =
	        // safely set this up (throws error in IE10/32bit mode for local files)
	        _.Store("local", (function(){try{ return localStorage; }catch(e){}})());
	    store.local = store;// for completeness
	    store._ = _;// for extenders and debuggers...
	    // safely setup store.session (throws exception in FF for file:/// urls)
	    store.area("session", (function(){try{ return sessionStorage; }catch(e){}})());
	    store.area("page", _.storage("page"));

	    if (typeof define === 'function' && define.amd !== undefined) {
	        define('store2', [], function () {
	            return store;
	        });
	    } else if (module.exports) {
	        module.exports = store;
	    } else {
	        // expose the primary store fn to the global object and save conflicts
	        if (window.store){ _.conflict = window.store; }
	        window.store = store;
	    }

	})(commonjsGlobal$1, commonjsGlobal$1 && commonjsGlobal$1.define);
	});

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};
	function stringifyPrimitive(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	}

	function stringify (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	}
	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};

	function parse$1(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	}var qs = {
	  encode: stringify,
	  stringify: stringify,
	  decode: parse$1,
	  parse: parse$1
	};

	/**
	 * Tokenize input string.
	 */
	function lexer(str) {
	    var tokens = [];
	    var i = 0;
	    while (i < str.length) {
	        var char = str[i];
	        if (char === "*" || char === "+" || char === "?") {
	            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "\\") {
	            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
	            continue;
	        }
	        if (char === "{") {
	            tokens.push({ type: "OPEN", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === "}") {
	            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
	            continue;
	        }
	        if (char === ":") {
	            var name = "";
	            var j = i + 1;
	            while (j < str.length) {
	                var code = str.charCodeAt(j);
	                if (
	                // `0-9`
	                (code >= 48 && code <= 57) ||
	                    // `A-Z`
	                    (code >= 65 && code <= 90) ||
	                    // `a-z`
	                    (code >= 97 && code <= 122) ||
	                    // `_`
	                    code === 95) {
	                    name += str[j++];
	                    continue;
	                }
	                break;
	            }
	            if (!name)
	                throw new TypeError("Missing parameter name at " + i);
	            tokens.push({ type: "NAME", index: i, value: name });
	            i = j;
	            continue;
	        }
	        if (char === "(") {
	            var count = 1;
	            var pattern = "";
	            var j = i + 1;
	            if (str[j] === "?") {
	                throw new TypeError("Pattern cannot start with \"?\" at " + j);
	            }
	            while (j < str.length) {
	                if (str[j] === "\\") {
	                    pattern += str[j++] + str[j++];
	                    continue;
	                }
	                if (str[j] === ")") {
	                    count--;
	                    if (count === 0) {
	                        j++;
	                        break;
	                    }
	                }
	                else if (str[j] === "(") {
	                    count++;
	                    if (str[j + 1] !== "?") {
	                        throw new TypeError("Capturing groups are not allowed at " + j);
	                    }
	                }
	                pattern += str[j++];
	            }
	            if (count)
	                throw new TypeError("Unbalanced pattern at " + i);
	            if (!pattern)
	                throw new TypeError("Missing pattern at " + i);
	            tokens.push({ type: "PATTERN", index: i, value: pattern });
	            i = j;
	            continue;
	        }
	        tokens.push({ type: "CHAR", index: i, value: str[i++] });
	    }
	    tokens.push({ type: "END", index: i, value: "" });
	    return tokens;
	}
	/**
	 * Parse a string for the raw tokens.
	 */
	function parse(str, options) {
	    if (options === void 0) { options = {}; }
	    var tokens = lexer(str);
	    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
	    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
	    var result = [];
	    var key = 0;
	    var i = 0;
	    var path = "";
	    var tryConsume = function (type) {
	        if (i < tokens.length && tokens[i].type === type)
	            return tokens[i++].value;
	    };
	    var mustConsume = function (type) {
	        var value = tryConsume(type);
	        if (value !== undefined)
	            return value;
	        var _a = tokens[i], nextType = _a.type, index = _a.index;
	        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
	    };
	    var consumeText = function () {
	        var result = "";
	        var value;
	        // tslint:disable-next-line
	        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
	            result += value;
	        }
	        return result;
	    };
	    while (i < tokens.length) {
	        var char = tryConsume("CHAR");
	        var name = tryConsume("NAME");
	        var pattern = tryConsume("PATTERN");
	        if (name || pattern) {
	            var prefix = char || "";
	            if (prefixes.indexOf(prefix) === -1) {
	                path += prefix;
	                prefix = "";
	            }
	            if (path) {
	                result.push(path);
	                path = "";
	            }
	            result.push({
	                name: name || key++,
	                prefix: prefix,
	                suffix: "",
	                pattern: pattern || defaultPattern,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        var value = char || tryConsume("ESCAPED_CHAR");
	        if (value) {
	            path += value;
	            continue;
	        }
	        if (path) {
	            result.push(path);
	            path = "";
	        }
	        var open = tryConsume("OPEN");
	        if (open) {
	            var prefix = consumeText();
	            var name_1 = tryConsume("NAME") || "";
	            var pattern_1 = tryConsume("PATTERN") || "";
	            var suffix = consumeText();
	            mustConsume("CLOSE");
	            result.push({
	                name: name_1 || (pattern_1 ? key++ : ""),
	                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
	                prefix: prefix,
	                suffix: suffix,
	                modifier: tryConsume("MODIFIER") || ""
	            });
	            continue;
	        }
	        mustConsume("END");
	    }
	    return result;
	}
	/**
	 * Compile a string to a template function for the path.
	 */
	function compile(str, options) {
	    return tokensToFunction(parse(str, options), options);
	}
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens, options) {
	    if (options === void 0) { options = {}; }
	    var reFlags = flags(options);
	    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
	    // Compile all the tokens into regexps.
	    var matches = tokens.map(function (token) {
	        if (typeof token === "object") {
	            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
	        }
	    });
	    return function (data) {
	        var path = "";
	        for (var i = 0; i < tokens.length; i++) {
	            var token = tokens[i];
	            if (typeof token === "string") {
	                path += token;
	                continue;
	            }
	            var value = data ? data[token.name] : undefined;
	            var optional = token.modifier === "?" || token.modifier === "*";
	            var repeat = token.modifier === "*" || token.modifier === "+";
	            if (Array.isArray(value)) {
	                if (!repeat) {
	                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
	                }
	                if (value.length === 0) {
	                    if (optional)
	                        continue;
	                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
	                }
	                for (var j = 0; j < value.length; j++) {
	                    var segment = encode(value[j], token);
	                    if (validate && !matches[i].test(segment)) {
	                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                    }
	                    path += token.prefix + segment + token.suffix;
	                }
	                continue;
	            }
	            if (typeof value === "string" || typeof value === "number") {
	                var segment = encode(String(value), token);
	                if (validate && !matches[i].test(segment)) {
	                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
	                }
	                path += token.prefix + segment + token.suffix;
	                continue;
	            }
	            if (optional)
	                continue;
	            var typeOfMessage = repeat ? "an array" : "a string";
	            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
	        }
	        return path;
	    };
	}
	/**
	 * Escape a regular expression string.
	 */
	function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
	}
	/**
	 * Get the flags for a regexp from the options.
	 */
	function flags(options) {
	    return options && options.sensitive ? "" : "i";
	}

	// import pluralize from 'pluralize';
	// import { insertScriptParams } from '../../internal_types/config';
	const cacheKeyPrefix = 'exp@';
	const cacheKeySuffix = ';';
	const fetchProtocol_replace_str = '__|_/_/';
	const fetchProtocol_str = '://';
	function getNSKey(namespace, key) {
	    return `${namespace}${cacheKeySuffix}${key}`;
	}
	function getKeyElements(cacheKey) {
	    const [, timeoutSuffixKey] = cacheKey.split(cacheKeyPrefix);
	    const [timeout, key] = timeoutSuffixKey.split(cacheKeySuffix);
	    return { timeout, key };
	}
	function getExpKey(key, timeout) {
	    return `${cacheKeyPrefix}${(new Date().valueOf() + timeout)}${cacheKeySuffix}${key}`;
	}
	function removeKeys(namespace, keys) {
	    keys.forEach(key => {
	        const nsKey = getNSKey(namespace, key);
	        const nsStore = store2.namespace(nsKey);
	        nsStore.clearAll();
	    });
	}
	function getFromCacheStore(namespace, key) {
	    const nsKey = getNSKey(namespace, key);
	    const nsStore = store2.namespace(nsKey);
	    const keyArray = nsStore.keys();
	    const cacheKey = (keyArray.length) ? keyArray[0] : undefined;
	    if (cacheKey) {
	        const timeoutData = getKeyElements(cacheKey);
	        const currentTime = new Date().valueOf();
	        if (Number(timeoutData.timeout) < currentTime) {
	            nsStore.remove(cacheKey);
	            return undefined;
	        }
	        else {
	            return nsStore.get(cacheKey);
	        }
	    }
	    else
	        return undefined;
	}
	function setCacheStore(namespace, key, value, timeout) {
	    const nsKey = getNSKey(namespace, key);
	    const nsStore = store2.namespace(nsKey);
	    const keyArray = nsStore.keys();
	    const cacheKey = (keyArray.length) ? keyArray[0] : getExpKey(key, timeout);
	    nsStore.set(cacheKey, value, true);
	}
	function getPath(path, options) {
	    path = `${path}${path.includes('?') ? '&' : '?'}${qs.stringify(JSON.parse(options.body))}`;
	    options.body = undefined;
	    delete options.body;
	    return { path, options };
	}
	/**
	 * Return JSON from remote path
	 * @property this - function context
	 * @param path - fetch path
	 * @param options  - fetch options
	 * @param options.method - fetch options
	 */
	async function fetchJSON(path, options = {}) {
	    const userAccessToken = (this.props.user.token) ? {
	        [this.settings?.accessTokenProperty || "x-access-token"]: this.props.user.token,
	    } : {};
	    options.headers = {
	        ...options.headers,
	        ...this.settings?.fetchHeaders,
	        ...this.props.user.fetchHeaders,
	        ...userAccessToken,
	    };
	    if (this.settings?.useWindowRequestQuery && window.location.search) ;
	    if (options.method === 'GET' && options.body) {
	        const getPathBody = getPath(path, options);
	        path = getPathBody.path;
	        options = getPathBody.options;
	    }
	    if (options.method === 'socket')
	        return await fetchJSONViaSocket.call(this, path, options);
	    else {
	        const response = await fetch(path, options);
	        if (typeof response.ok === 'boolean' && !response.ok)
	            throw new Error(`${response.status}: ${response.statusText}`);
	        else if (response.status < 200 || response.status >= 300)
	            throw new Error(`${response.status}: ${response.statusText}`);
	        return await response.json();
	    }
	}
	async function fetchJSONViaSocket(path, options) {
	    try {
	        this.props.socket.emit(path, options, (successData) => {
	            return successData;
	        });
	    }
	    catch (e) {
	        throw e;
	    }
	}
	/**
	 * Returns template resources for a vxt template. Resources are passed as resource props into the JSONX components
	 * @property this - function context
	 * @param options.resources - resourceprops for JSONX
	 * @param options.templateRoute - template route properties
	 */
	async function fetchResources({ resources = {}, templateRoute }) {
	    const results = {};
	    const resourceProperties = Object.keys(resources);
	    const context = this;
	    if (resourceProperties.length) {
	        await Promise.all(resourceProperties.map(prop => (async function (prop) {
	            const resource = resources[prop];
	            const fetchPath = typeof resource === "string" ? resource : resource.fetchPath;
	            const toPath = compile(fetchPath.replace(fetchProtocol_str, fetchProtocol_replace_str), templateRoute.params);
	            const basePath = toPath(templateRoute.params).replace(fetchProtocol_replace_str, fetchProtocol_str);
	            const fetchURL = `${basePath}${basePath.includes('?') ? window.location.search.replace('?', '') : window.location.search}`;
	            const fetchOptions = typeof resource === "string" ? {} : resource.fetchOptions;
	            results[prop] = await fetchJSON.call(context, fetchURL, fetchOptions);
	            return true;
	        })(prop)));
	    }
	    return results;
	}

	// import React, { ReactElement } from "react";
	/**
	 * add class to html element
	 * @param options.element - html element to modify
	 * @param options.className - css class to add
	 */
	function setHTMLElementClass({ element, className }) {
	    if (element && element.classList && element.classList.add) {
	        element.classList.add(className);
	    }
	    else if (element && element.className) {
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
	function setBodyPathnameId(pathname) {
	    if (document && document.body && document.body.setAttribute) {
	        document.body.setAttribute("id", encodeURIComponent(pathname).replace(new RegExp(/%2F|%2/, "g"), "_"));
	    }
	}
	function insertJavaScript({ src, name, async = true, onload }) {
	    (function (d, s, id) {
	        const tagId = `viewx-script-${id}`;
	        if (d.getElementById(id))
	            return;
	        const s0 = d.getElementsByTagName(s)[0];
	        const j = d.createElement(s);
	        j.setAttribute("async", async.toString());
	        j.id = tagId;
	        j.setAttribute("type", "text/javascript");
	        j.setAttribute("src", src);
	        if (src.includes('://')) {
	            const a = document.createElement('a');
	            a.setAttribute('ref', src);
	            if (a.origin !== window.location.origin)
	                j.setAttribute('crossorigin', 'true');
	        }
	        if (onload)
	            j.onload = onload;
	        // @ts-ignore
	        if (s0)
	            s0.parentNode.insertBefore(j, s0);
	        else
	            document.head.prepend(j);
	    })(document || window.document, "script", name);
	}
	function insertStyleSheet({ src, name, onload }) {
	    (function (d, l, id) {
	        const tagId = `viewx-style-${id}`;
	        if (d.getElementById(id))
	            return;
	        const s0 = d.getElementsByTagName(l)[0];
	        const ss = d.createElement(l);
	        ss.id = tagId;
	        ss.setAttribute("rel", "stylesheet");
	        ss.setAttribute("type", "text/css");
	        ss.setAttribute("href", src);
	        if (onload)
	            ss.onload = onload;
	        if (s0 && s0.parentNode)
	            s0.parentNode.insertBefore(ss, s0);
	        else
	            document.head.prepend(ss);
	    })(document || window.document, "link", name);
	}
	function createLayer({ layer, app, querySelector, }) {
	    const { name, type, order, idSelector, } = layer;
	    const selector = `#${idSelector || name}`;
	    const layerName = idSelector || name;
	    const baseElement = querySelector && querySelector !== 'root'
	        ? document.querySelector(querySelector) || document.body
	        : document.body;
	    // const baseElement= document.body;
	    let layerDOM = document.querySelector(selector);
	    if (!layerDOM) {
	        const domEl = document.createElement("div");
	        domEl.setAttribute("id", layerName);
	        domEl.setAttribute('class', `vxa_layer vxa_layer_name_${name} vxa_layer_type_${type}`);
	        baseElement.appendChild(domEl);
	        domEl.style.zIndex = String(order);
	        layerDOM = domEl;
	    }
	    if (type === "applicationRoot" && app) {
	        ReactDOM__default['default'].render(app, layerDOM);
	    }
	}
	function getElementSelector({ tagName, attributes = {} }) {
	    return `${tagName}${Object.keys(attributes)
        .map(attr => `[${attr}="${attributes[attr]}"]`)
        .join()}`;
	}
	async function setPageAttributes({ pageData = [] }) {
	    pageData.forEach((pageDatum) => {
	        const { attributes, tagName, innerHTML } = pageDatum;
	        const selector = getElementSelector(pageDatum);
	        const el = document.querySelector(selector);
	        const element = el || document.createElement(tagName);
	        // if(!el) el.setAttribute()
	        if (innerHTML)
	            element.innerHTML = innerHTML;
	        if (attributes && Object.keys(attributes).length) {
	            Object.keys(attributes).forEach(attr => {
	                element.setAttribute(attr, attributes[attr]);
	            });
	        }
	        if (!el)
	            document.head.appendChild(element);
	    });
	}

	/**
	 * Convert path to route object
	 *
	 * A string or RegExp should be passed,
	 * will return { re, src, keys} obj
	 *
	 * @param  {String / RegExp} path
	 * @return {Object}
	 */

	var Route = function(path){
	  //using 'new' is optional

	  var re, keys = [];

	  if(path instanceof RegExp){
	    re = path;
	    path.toString();
	  }else {
	    re = pathToRegExp(path, keys);
	  }

	  return {
	  	 re: re,
	  	 src: path.toString(),
	  	 keys: keys
	  }
	};

	/**
	 * Normalize the given path string,
	 * returning a regular expression.
	 *
	 * An empty array should be passed,
	 * which will contain the placeholder
	 * key names. For example "/user/:id" will
	 * then contain ["id"].
	 *
	 * @param  {String} path
	 * @param  {Array} keys
	 * @return {RegExp}
	 */
	var pathToRegExp = function (path, keys) {
		path = path
			.concat('/?')
			.replace(/\/\(/g, '(?:/')
			.replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function(_, slash, format, key, capture, optional){
				if (_ === "*"){
					keys.push(undefined);
					return _;
				}

				keys.push(key);
				slash = slash || '';
				return ''
					+ (optional ? '' : slash)
					+ '(?:'
					+ (optional ? slash : '')
					+ (format || '') + (capture || '([^/]+?)') + ')'
					+ (optional || '');
			})
			.replace(/([\/.])/g, '\\$1')
			.replace(/\*/g, '(.*)');
		return new RegExp('^' + path + '$', 'i');
	};

	/**
	 * Attempt to match the given request to
	 * one of the routes. When successful
	 * a  {fn, params, splats} obj is returned
	 *
	 * @param  {Array} routes
	 * @param  {String} uri
	 * @return {Object}
	 */
	var match = function (routes, uri, startAt) {
		var captures, i = startAt || 0;

		for (var len = routes.length; i < len; ++i) {
			var route = routes[i],
			    re = route.re,
			    keys = route.keys,
			    splats = [],
			    params = {};

			if (captures = uri.match(re)) {
				for (var j = 1, len = captures.length; j < len; ++j) {
					var key = keys[j-1],
						val = typeof captures[j] === 'string'
							? unescape(captures[j])
							: captures[j];
					if (key) {
						params[key] = val;
					} else {
						splats.push(val);
					}
				}
				return {
					params: params,
					splats: splats,
					route: route.src,
					next: i + 1
				};
			}
		}
	};

	/**
	 * Default "normal" router constructor.
	 * accepts path, fn tuples via addRoute
	 * returns {fn, params, splats, route}
	 *  via match
	 *
	 * @return {Object}
	 */

	var Router$1 = function(){
	  //using 'new' is optional
	  return {
	    routes: [],
	    routeMap : {},
	    addRoute: function(path, fn){
	      if (!path) throw new Error(' route requires a path');
	      if (!fn) throw new Error(' route ' + path.toString() + ' requires a callback');

	      if (this.routeMap[path]) {
	        throw new Error('path is already defined: ' + path);
	      }

	      var route = Route(path);
	      route.fn = fn;

	      this.routes.push(route);
	      this.routeMap[path] = fn;
	    },

	    removeRoute: function(path) {
	      if (!path) throw new Error(' route requires a path');
	      if (!this.routeMap[path]) {
	        throw new Error('path does not exist: ' + path);
	      }
	      var newRoutes = [];

	      // copy the routes excluding the route being removed
	      for (var i = 0; i < this.routes.length; i++) {
	        var route = this.routes[i];
	        if (route.src !== path) {
	          newRoutes.push(route);
	        }
	      }
	      this.routes = newRoutes;
	      delete this.routeMap[path];
	    },

	    match: function(pathname, startAt){
	      var route = match(this.routes, pathname, startAt);
	      if(route){
	        route.fn = this.routeMap[route.route];
	        route.next = this.match.bind(this, pathname, route.next);
	      }
	      return route;
	    }
	  }
	};

	Router$1.Route = Route;
	Router$1.pathToRegExp = pathToRegExp;
	Router$1.match = match;
	// back compat
	Router$1.Router = Router$1;

	var routes = Router$1;

	// @ts-ignore
	const Router = routes;
	/**
	 * Catches all events on event emitter passed to the function
	 * @param {Event Emitter} emitter - websocket/socket.io(client/server)/event emitter to intercept all incoming events
	 * @param {Function} handler - socket.io like middleware (calls handler with packet and next)
	 */
	function patchEmitter(emitter, handler) {
	    emitter._onevent = emitter.onevent;
	    const next = () => { };
	    // Replace the onevent function with a handler that captures all messages
	    emitter.onevent = function (packet) {
	        handler(packet.data, next);
	        // DO NOT USE https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	        // emitter._onevent.apply(emitter, Array.prototype.slice.call(arguments));
	        const args = new Array(arguments.length);
	        for (var i = 0; i < args.length; ++i) {
	            args[i] = arguments[i];
	        }
	        if (emitter._onevent)
	            emitter._onevent.apply(emitter, args);
	    };
	}
	/**
	 * Returns socket.io like middleware function to handle incoming events based on their path
	 * @param {Event emitter} options.socket - websocket/socket.io(client/server)/event emitter
	 * @param {object} options.router - routes object
	 * @see https://www.npmjs.com/package/routes
	 * @return {function} router handler middleware function
	 */
	function routerMiddleware({ socket, router, }) {
	    return function routeHandler(packet, next) {
	        // console.log({ packet, socket });
	        const [path, body,] = packet;
	        const match = router.match(path);
	        const req = { path, body, socket, };
	        let cb = (data) => data;
	        const res = {
	            send(data) {
	                try {
	                    socket.emit(path, cb(data));
	                    cb = null;
	                }
	                catch (e) {
	                    socket.emit('error', new Error('Response already sent'));
	                }
	            },
	        };
	        if (match) {
	            req.params = match.params;
	            req.splats = match.splats;
	            match.fn(req, res, match);
	        }
	        next();
	    };
	}
	/**
	 * Responds to events based on their route and a router
	 * @param {Event emitter} options.socket - websocket/socket.io(client/server)/event emitter
	 * @param {object} options.router - routes object
	 * @see https://www.npmjs.com/package/routes
	 */
	function EventRouter({ socket, router, }) {
	    if (socket.use) {
	        socket.use(routerMiddleware({ socket, router, }));
	    }
	    else {
	        patchEmitter(socket, routerMiddleware({ socket, router, }));
	    }
	}

	// import { insertScriptParams } from '../../internal_types/config';
	let once = false;
	function initSockets(settings = {}) {
	    const { useWebSocketsAuth, socket_server_options, socket_server, socket_disconnect_message } = settings;
	    const createNotification = this.viewx.Functions.log;
	    const getSocketFunction = ({ propFunc }) => getFunctionFromNameString({
	        Functions: this.viewx.Functions,
	        functionContext: this,
	        functionName: propFunc
	    });
	    // @ts-ignore
	    const router = Router();
	    router.addRoute("*", (req) => {
	        const propFunc = req.body.function || req.path;
	        const props = req.body && req.body.props && Array.isArray(req.body.props)
	            ? req.body.props
	            : [req.body];
	        // console.debug({ propFunc, props, once, req, });
	        const reduxFunction = getSocketFunction({ propFunc });
	        if (reduxFunction)
	            reduxFunction.call(this, ...props);
	        else
	            this.viewx.Functions.log({
	                type: "error",
	                error: new Error("Invalid Live Update")
	            });
	    });
	    const socketOptions = Object.assign({
	        // transports: [ 'websocket', ],
	        reconnectionAttempts: 10
	    }, socket_server_options);
	    if (window.io) {
	        const socket = socket_server
	            ? window.io(socket_server, socketOptions)
	            : window.io("", socketOptions);
	        this.props.dispatch({
	            type: "setSocket",
	            socket
	        });
	        this.props.setSocket(socket);
	        socket.once("connect", () => {
	            EventRouter({ socket, router });
	            socket.emit("authentication", {
	                user: useWebSocketsAuth ? this.props.user : false,
	                reconnection: true
	            });
	        });
	        socket.on("error", (e) => createNotification({ type: "error", error: e }));
	        socket.on("connect_error", (e) => console.debug(e));
	        socket.on("disconnect", (reason) => {
	            if (once === false && socket_disconnect_message) {
	                createNotification({
	                    data: `Live Updated Disconnected: ${reason}. Refresh for live updates`
	                });
	                once = true;
	            }
	        });
	        socket.on("reconnect", (attemptNumber) => {
	            socket.emit("authentication", {
	                user: useWebSocketsAuth ? this.props.user : false,
	                reconnection: true
	            });
	            createNotification({
	                type: "info",
	                data: "Reconnected to Live",
	                meta: { attemptNumber }
	            });
	        });
	        socket.on("reconnecting", (attemptNumber) => {
	            createNotification({
	                type: "error",
	                data: "reconnecting socket",
	                meta: { attemptNumber }
	            });
	            // console.debug('reconnecting', );
	        });
	        if (useWebSocketsAuth) {
	            // console.debug('REAUTH',this.state.user)
	            socket.emit("authentication", {
	                user: this.props.user,
	                reconnection: true
	            });
	        }
	        socket.on("authenticated", () => {
	            // use the socket as usual
	            socket.emit("/user/createrepl", {
	                user: useWebSocketsAuth ? this.props.user : false,
	                reconnection: true,
	                authSend: 0
	            });
	        });
	    }
	    //   // this.previousRoute = {};
	}

	/**
	 * initial one time setup call
	 * @property this
	 * @param options.settings - vxa settings
	 */
	async function setup({ settings }) {
	    initSockets.call(this, settings);
	    if (settings.useBodyLoadedClass)
	        setHTMLElementClass({
	            element: document.body,
	            className: settings.bodyLoadedClass
	        });
	    if (settings.useHTMLLoadedClass)
	        setHTMLElementClass({
	            element: document.querySelector("html"),
	            className: settings.htmlLoadedClass
	        });
	}
	/**
	 * load vxt templates
	 * @param options
	 */
	async function loadTemplates({ config, viewxTemplates, templates, setTemplates, setUI, ui, layers, Functions, functionContext }) {
	    // const fetchFunctionObject = Functions.fetchJSON.bind(functionContext) || fetchJSON.bind(functionContext);
	    const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(functionContext);
	    const loadedTemplates = config.settings.hasPreloadedTemplates
	        ? {}
	        : await fetchFunction(config.settings.templatePath, config.settings.templateFetchOptions);
	    viewxTemplates = layers.reduce((result, layer) => {
	        const { name } = layer;
	        result[name] = {
	            ...loadedTemplates[name],
	            ...templates[name]
	        };
	        return result;
	    }, {});
	    const templatePaths = getTemplatePaths(viewxTemplates);
	    const updatedUI = {
	        ...ui,
	        templatePaths,
	        hasLoadedInitialProcess: true
	    };
	    setTemplates(viewxTemplates);
	    setUI(updatedUI);
	    return {
	        viewxTemplates,
	        updatedUI,
	    };
	}
	function getTemplatePaths(viewxTemplates) {
	    const allPathNames = Object.keys(viewxTemplates).reduce((result, layerName) => {
	        //@ts-ignore
	        const pathnames = Object.keys(viewxTemplates[layerName] || {});
	        result = result.concat(pathnames);
	        return result;
	    }, []);
	    const pathnames = new Set(allPathNames);
	    return Array.from(pathnames);
	}
	async function loadDynamicTemplate({ config, viewxTemplates, templates, setTemplates, setUI, ui, layers, Functions, functionContext, pathname, }) {
	    const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(functionContext);
	    const templateURL = (config.settings.dynamicTemplatePathRequestMethod === 'path')
	        ? config.settings.dynamicTemplatePath + pathname
	        : config.settings.dynamicTemplatePath + `?pathname=${pathname}`;
	    try {
	        const loadedTemplates = config.settings.hasPreloadedTemplates
	            ? {}
	            : await fetchFunction(templateURL, config.settings.templateFetchOptions);
	        viewxTemplates = layers.reduce((result, layer) => {
	            const { name } = layer;
	            result[name] = {
	                ...loadedTemplates[name],
	                ...templates[name]
	            };
	            return result;
	        }, viewxTemplates);
	        const templatePaths = getTemplatePaths(viewxTemplates);
	        const updatedUI = {
	            ...ui,
	            templatePaths,
	            hasLoadedInitialProcess: true
	        };
	        setTemplates(viewxTemplates);
	        setUI(updatedUI);
	        return {
	            viewxTemplates,
	            updatedUI,
	        };
	    }
	    catch (e) {
	        throw new Error(`Could not load: ${templateURL}`);
	    }
	}
	function hasMatchingDynamicTemplateRoutePathFallback({ viewxTemplates, layers, pathname, }) {
	    const hasLayers = layers.filter((layer) => {
	        const { name } = layer;
	        const viewxTemplateLayer = viewxTemplates[name];
	        const templateRoute = findMatchingRoutePath(viewxTemplateLayer, pathname, {
	            return_matching_keys: true
	        });
	        return templateRoute && templateRoute.route.includes('*') === false;
	    });
	    return hasLayers.length > 0;
	}
	/**
	 * get template route layer map function
	 * @param options.viewxTemplates - object of vxtTemplates
	 * @param options.pathname - vxtRoutePath
	 */
	function getTemplateRouteLayer({ viewxTemplates, pathname, }) {
	    let hasOverlayLayer = false;
	    return (layer) => {
	        let vxtObject;
	        const { name, type } = layer;
	        const viewxTemplateLayer = viewxTemplates[name];
	        const templateRoute = viewxTemplateLayer ? findMatchingRoutePath(viewxTemplateLayer, pathname, {
	            return_matching_keys: true
	        }) : undefined;
	        if (type === "overlay" && templateRoute)
	            hasOverlayLayer = true;
	        if (!templateRoute &&
	            viewxTemplateLayer && viewxTemplateLayer.__error_404 &&
	            !hasOverlayLayer) {
	            vxtObject = viewxTemplateLayer.__error_404;
	        }
	        else if (templateRoute) {
	            vxtObject = viewxTemplateLayer[templateRoute.route];
	        }
	        if (vxtObject) {
	            return {
	                name,
	                type,
	                vxtObject,
	                templateRoute,
	                ui: {
	                    [`isRouteLayer_${name}_Matched`]: true
	                },
	                hasOverlayLayer
	            };
	        }
	        else
	            return undefined;
	    };
	}
	async function loadRoute({ ui, viewxTemplates, pathname, dispatcher, layers, Functions, functionContext, resourceprops = {} }) {
	    let applicationRootName = "root";
	    try {
	        const fetchResourcesFunction = Functions.fetchResources || fetchResources;
	        const templateRouteLayers = layers
	            .map(getTemplateRouteLayer({
	            viewxTemplates,
	            pathname
	        }))
	            .filter((layer) => layer);
	        // @ts-ignore
	        const preFunctions = await invokeWebhooks({
	            Functions,
	            functionContext,
	            property: "preRenderFunctions",
	            templateRouteLayers
	        });
	        // @ts-ignore
	        if (shortCircutPromiseArray(preFunctions, "preRenderFunctions"))
	            return false;
	        // @ts-ignore
	        const templateViewPromises = templateRouteLayers.map(templateRouteLayer => fetchResourcesFunction.call(functionContext, {
	            resources: templateRouteLayer.vxtObject.resources,
	            templateRoute: templateRouteLayer.templateRoute
	        }));
	        const templateViewData = await Promise.all(templateViewPromises);
	        const action = templateViewData.reduce((result, templateViewDatum, i) => {
	            const { name, type, vxtObject, ui, hasOverlayLayer, templateRoute, } = templateRouteLayers[i];
	            if (hasOverlayLayer)
	                result.ui.hasOverlayLayer = true;
	            if (["applicationRoot", "overlay", "view"].includes(type)) {
	                if (type === "applicationRoot")
	                    applicationRootName = name;
	                result.ui.templateRoute = templateRoute;
	            }
	            setPageAttributes(vxtObject);
	            // @ts-ignore
	            result.view[name] = vxtObject;
	            // @ts-ignore
	            result.viewdata[name] = {
	                ...templateViewDatum,
	                ...resourceprops
	            };
	            // @ts-ignore
	            result.ui = { ...result.ui, ...ui };
	            // result
	            return result;
	        }, {
	            type: "setView",
	            view: {},
	            viewdata: {},
	            ui: {
	                ...ui,
	                hasOverlayLayer: false
	            }
	        });
	        // console.log({ action });
	        dispatcher(action);
	        invokeWebhooks({
	            Functions,
	            functionContext,
	            templateViewData,
	            property: "postRenderFunctions",
	            templateRouteLayers
	        });
	        return action;
	    }
	    catch (e) {
	        Functions.log({ type: "error", error: e });
	        dispatcher({
	            type: "setView",
	            view: {
	                [applicationRootName]: viewxTemplates[applicationRootName].__error_500
	            },
	            viewdata: {
	                [applicationRootName]: {
	                    error: e
	                }
	            }
	        });
	    }
	}
	// @ts-ignore
	function shortCircutPromiseArray(promiseArrayResult, name) {
	    // @ts-ignore
	    const results = promiseArrayResult.map(
	    // @ts-ignore
	    arrayResult => arrayResult[Object.keys(arrayResult)[0]]);
	    //  // @ts-ignore
	    //  console.log({ promiseArrayResult,results }, ' promiseArrayResult.filter(result => !result).length', promiseArrayResult.filter(result => !result).length);
	    // @ts-ignore
	    if (promiseArrayResult.length &&
	        // @ts-ignore
	        results.filter(result => result === false).length) {
	        // return true;
	        throw new Error(`There was an error processing: ${name}. [${JSON.stringify(promiseArrayResult, null, 2)}]`);
	    }
	    else if (promiseArrayResult.length &&
	        // @ts-ignore
	        results.filter(result => result === undefined).length) {
	        return true;
	    }
	    else
	        return false;
	}
	// @ts-ignore
	async function invokeWebhooks({ 
	// @ts-ignore
	Functions, 
	// @ts-ignore
	functionContext, 
	// @ts-ignore
	templateViewData, 
	// @ts-ignore
	property = "preRenderFunctions", 
	// @ts-ignore
	templateRouteLayers }) {
	    // @ts-ignore
	    const promises = [];
	    // @ts-ignore
	    const promiseNames = [];
	    // @ts-ignore
	    templateRouteLayers.forEach(async (templateRouteLayer) => {
	        const functionNames = templateRouteLayer.vxtObject[property] || [];
	        // @ts-ignore
	        const funcs = functionNames.map(functionName => getFunctionFromNameString({
	            Functions,
	            functionContext,
	            functionName
	        })(templateViewData));
	        promiseNames.push(...functionNames);
	        promises.push(...funcs);
	    });
	    // @ts-ignore
	    const results = await promiseSeries(
	    // @ts-ignore
	    promises.map(func => () => enforcePromise(func)));
	    // @ts-ignore
	    return results.map((result, i) => ({
	        // @ts-ignore
	        [promiseNames[i]]: result
	    }));
	}
	function enforcePromise(val) {
	    return val instanceof Promise ? val : Promise.resolve(val);
	}
	// @ts-ignore
	function promiseSeries(providers) {
	    // console.log('promiseSeries',{providers})
	    const ret = Promise.resolve(null);
	    // @ts-ignore
	    const results = [];
	    // @ts-ignore
	    return (providers
	        // @ts-ignore
	        .reduce(function (result, provider, index) {
	        return result.then(function () {
	            // @ts-ignore
	            return provider().then(function (val) {
	                results[index] = val;
	            });
	        });
	    }, ret)
	        .then(function () {
	        // @ts-ignore
	        // console.log('promiseSeries', { results });
	        // @ts-ignore
	        return results;
	    }));
	}
	/**
	 * return bound function from function name string, e.g. func:this.props.debug
	 * @param options.Functions - VXA Functions
	 * @param options.functionContext - VXA Function Context
	 * @param options.functionName - function name string
	 */
	function getFunctionFromNameString({ Functions, functionContext, functionName }) {
	    let func;
	    try {
	        if (typeof functionName === "string") {
	            const name = getDynamicFunctionName(functionName);
	            if (functionName.includes("func:this.props") &&
	                typeof functionContext.props[name] === "function") {
	                func = functionContext.props[name].bind(functionContext);
	            }
	            else if (functionName.includes("func:viewx.Functions") &&
	                typeof Functions[name] === "function") {
	                func = Functions[name].bind(functionContext);
	            }
	            else if (functionName.includes("func:window") &&
	                typeof window[name] === "function") {
	                func = window[name].bind(functionContext);
	            }
	        }
	        if (func)
	            return func;
	        else
	            return () => {
	                console.warn("Invalid Function Name: " + functionName);
	            };
	    }
	    catch (e) {
	        return () => {
	            console.error("Invalid Function", e);
	        };
	    }
	}
	//func:this.props.login, func:window.alert, func:viewx.Functions.logout
	/* eslint-disable */
	const FUNCTION_NAME_REGEXP = /func:(?:this\.props|window|viewx)(?:\.Functions)?\.(\D.+)*/;
	/* eslint-enable */
	/**
	 * get function name from function name string i.e. func:viewx.Functions.logout => logout
	 * @param function_name - function name string
	 */
	function getDynamicFunctionName(function_name) {
	    return function_name.replace(FUNCTION_NAME_REGEXP, "$1");
	}

	/**
	 * bound default vxa functions to the vxafunctioncontext object
	 */
	function bindFunctionContext({ Functions, functionContext }) {
	    Functions.fetchJSON = fetchJSON.bind(functionContext);
	    Functions.loadUser = Functions.loadUser.bind(functionContext);
	    Functions.loginUser = Functions.loginUser.bind(functionContext);
	    Functions.getUserProfile = Functions.getUserProfile.bind(functionContext);
	    Functions.validateMFA = Functions.validateMFA.bind(functionContext);
	    Functions.logoutUser = Functions.logoutUser.bind(functionContext);
	}
	function ViewXComponent(props) {
	    const { layer, views, viewdata, ctx, layerStates, settings, } = props;
	    const { name, type, idSelector, } = layer;
	    const el = document.querySelector(`#${idSelector || name}`);
	    const layerState = React.useMemo(() => {
	        const layerStateData = layerStates ? layerStates[name] : {};
	        return layerStateData;
	    }, [layerStates, name]);
	    const [state, setState] = React.useState(layerState);
	    ctx[`viewx_layer_${name}_state`] = state;
	    ctx[`viewx_layer_${name}_setState`] = setState;
	    const getReactElement = getReactElementFromJSONX.bind(ctx);
	    if (settings.exposeVXAToWindow) {
	        window.__ViewXContext = ctx;
	        window.__ViewXContext.getReactElement = getReactElement;
	    }
	    const jsonxChildren = getReactElement(views[name] ? views[name].jsonx : null, viewdata[name] ? viewdata[name] : {});
	    return (jsxRuntime.jsx(React.Fragment, { children: (type === "applicationRoot")
	            ? jsonxChildren
	            : el ? ReactDOM__default['default'].createPortal(jsonxChildren, el) : null }, "viewx"));
	}
	function getMainComponent(options) {
	    if (!options)
	        throw ReferenceError("invalid VXA Options");
	    else if (!options.config)
	        throw ReferenceError("invalid VXA Options");
	    const { dispatch, useGlobalState, config, application, layerStates, } = options;
	    const { Functions, settings } = config;
	    const dispatcher = (action) => dispatch(action);
	    function Main(appProps) {
	        const [templates] = useGlobalState("templates");
	        // const [templates, setTemplates] = useGlobalState("templates");
	        const setTemplates = (templates) => dispatch({ type: 'setTemplates', templates });
	        const [views] = useGlobalState("views");
	        const [user] = useGlobalState("user");
	        const [viewdata] = useGlobalState("viewdata");
	        const [ui] = useGlobalState("ui");
	        // const [ui, setUI] = useGlobalState("ui");
	        const setUI = (ui) => dispatch({ type: 'setUI', ui });
	        const [state, setState] = React.useState(application ? application.state : {});
	        const { pathname } = appProps.location;
	        const props = Object.assign({
	            dispatch,
	            templates,
	            views,
	            viewdata,
	            ui,
	            user,
	            setUI,
	            setTemplates,
	            updateState: (applicationState) => setState(applicationState),
	            setApplicationState: (applicationState) => dispatch({ type: "setApplicationState", state: applicationState })
	        }, appProps);
	        const functionContext = {
	            props,
	            state,
	            setState,
	            settings,
	            viewx: { Functions, settings }
	        };
	        if (settings.debug) {
	            window.VXAcontext = functionContext;
	        }
	        // eslint-disable-line
	        const loadView = React.useMemo(() => {
	            return function _loadView({ layerName, view, resourceprops, pathname }) {
	                const loadViewPathname = pathname || `_loadView_${layerName}`;
	                return loadRoute({
	                    ui,
	                    viewxTemplates: Object.assign({}, templates, typeof layerName === 'string'
	                        ? {
	                            [layerName]: {
	                                ...templates[layerName],
	                                [loadViewPathname]: view
	                            }
	                        }
	                        : {}),
	                    pathname: loadViewPathname,
	                    dispatcher,
	                    layers: layerName
	                        ? config
	                            ? config.layers.filter(layer => layer.name === layerName)
	                            : []
	                        : config.layers,
	                    Functions,
	                    resourceprops,
	                    functionContext
	                });
	            };
	            /* eslint-disable */
	        }, [templates, functionContext]);
	        /* eslint-enable */
	        Functions.loadView = loadView;
	        bindFunctionContext({ Functions, functionContext });
	        const ctx = {
	            props,
	            state,
	            setState,
	            viewx: { Functions, settings },
	            // state:{counter, setCounter},
	            debug: settings.debug,
	            componentLibraries: Object.assign({}, config.componentLibraries),
	            reactComponents: Object.assign({ Link }, config.reactComponents)
	        };
	        // if (settings.exposeVXAToWindow) window.__ViewXContext = ctx;
	        const getReactElement = getReactElementFromJSONX.bind(ctx);
	        ctx.getReactElement = getReactElement;
	        React.useEffect(() => {
	            Functions.onLaunch.call(functionContext);
	            return () => Functions.onShutdown.call(functionContext);
	            /* eslint-disable */
	        }, []);
	        /* eslint-enable */
	        React.useEffect(() => {
	            let viewxTemplates = templates;
	            let action;
	            async function initialize() {
	                Functions.showLoader.call(functionContext, { ui, setUI });
	                try {
	                    setup.call(functionContext, { settings });
	                    let updatedUI = ui;
	                    if (ui.hasLoadedInitialProcess === false) {
	                        await Functions.loadUser.call(functionContext);
	                        const updatedTemplates = await loadTemplates({
	                            config,
	                            viewxTemplates,
	                            templates,
	                            setTemplates,
	                            setUI,
	                            ui,
	                            layers: config.layers,
	                            Functions,
	                            functionContext
	                        });
	                        viewxTemplates = updatedTemplates.viewxTemplates;
	                        updatedUI = updatedTemplates.updatedUI;
	                    }
	                    if (config.settings.dynamicTemplatePath && updatedUI.templatePaths.includes(pathname) === false && hasMatchingDynamicTemplateRoutePathFallback({ viewxTemplates, layers: config.layers, pathname }) === false) {
	                        const dynamicTemplates = await loadDynamicTemplate({
	                            config,
	                            viewxTemplates,
	                            templates,
	                            setTemplates,
	                            setUI,
	                            ui,
	                            layers: config.layers,
	                            Functions,
	                            functionContext,
	                            pathname,
	                        });
	                        viewxTemplates = dynamicTemplates.viewxTemplates;
	                        updatedUI = dynamicTemplates.updatedUI;
	                    }
	                    action = await loadRoute({
	                        ui: updatedUI,
	                        viewxTemplates,
	                        pathname,
	                        dispatcher,
	                        layers: config.layers,
	                        Functions,
	                        functionContext
	                    });
	                    if (settings.setBodyPathnameID)
	                        setBodyPathnameId(pathname);
	                }
	                catch (e) {
	                    try {
	                        loadView({
	                            resourceprops: { error: e },
	                            pathname: (e.message.includes('Could not load:')) ? '__error_400' : '__error_500',
	                        });
	                    }
	                    catch (e) {
	                    }
	                    Functions.log({ type: "error", error: e });
	                }
	                Functions.hideLoader.call(functionContext, { ui: typeof action !== 'undefined' && action.ui ? action.ui : ui, setUI });
	            }
	            initialize();
	            //   // return function cleanup(){}
	            /* eslint-disable */
	        }, [pathname /* templates*/]);
	        /* eslint-enable */
	        return (jsxRuntime.jsx(React.Fragment, { children: config.layers.map(layer => {
	                return (jsxRuntime.jsx(ViewXComponent, { layer: layer, views: views, viewdata: viewdata, ctx: ctx, layerStates: layerStates, settings: settings }, void 0));
	            }) }, "viewx"));
	    }
	    return Main;
	}

	const c=Symbol(),a=(a,l)=>{const u=Object.keys(l);let i=l,d=null;const p={};u.forEach(e=>{p[e]=new Set;});const E=(e,t)=>t.type===c?t.r?t.r(e):t.e:a(e,t),f=(e,t)=>{const r=r=>{return {...r,[e]:(o=r[e],n=t,"function"==typeof n?n(o):n)};var o,n;};if(d)d({type:c,r});else {i=r(i);const t=i[e];p[e].forEach(e=>e(t));}},S=(e,t)=>{u.forEach(r=>{const o=t[r];e[r]!==o&&p[r].forEach(e=>e(o));});};return {useGlobalStateProvider:()=>{const[o,n]=React.useReducer(E,i);React.useEffect(()=>{if(d)throw new Error("Only one global state provider is allowed");return d=n,n({type:c,e:i}),()=>{d=null;}},[]);const s=React.useRef(o);S(s.current,o),s.current=o,React.useEffect(()=>{i=o;},[o]);},useGlobalState:e=>{const[r,c]=React.useState(i[e]);return React.useEffect(()=>(p[e].add(c),c(i[e]),()=>{p[e].delete(c);}),[e]),[r,React.useCallback(t=>f(e,t),[e])]},getGlobalState:e=>(i[e]),setGlobalState:f,getState:()=>i,setState:e=>{if(d)d({type:c,e});else {const t=i;i=e,S(t,i);}},dispatch:e=>{if(d)d(e);else {const t=i;i=a(i,e),S(t,i);}return e}}},u=(e,t=e(void 0,{type:void 0}),r)=>r?r(u)(e,t):a(e,t);

	async function getGlobalStateHooks(options = {}) {
	    const settings = options.config.settings;
	    const layers = options.config.layers;
	    // const layerNames = layers.map((layer:any) => layer.name);
	    const layerOpenState = layers.reduce((result, layer) => {
	        const { name, type } = layer;
	        result[`isRouteLayer_${name}_Matched`] =
	            type === "applicationRoot" ? true : false;
	        return result;
	    }, {});
	    const reducer = (state, action) => {
	        switch (action.type) {
	            case "viewxUILoadingStart":
	                return {
	                    ...state,
	                    ...{
	                        ui: {
	                            ...state.ui,
	                            isLoading: true
	                        }
	                    }
	                };
	            case "viewxUILoadingComplete":
	                return {
	                    ...state,
	                    ...{
	                        ui: {
	                            ...state.ui,
	                            isLoading: false
	                        }
	                    }
	                };
	            case "setView":
	                // console.warn('setting setView', { action },state.ui);
	                return {
	                    ...state,
	                    views: {
	                        ...state.views,
	                        ...action.view
	                    },
	                    viewdata: {
	                        ...state.viewdata,
	                        ...action.viewdata
	                    },
	                    ui: {
	                        ...state.ui,
	                        ...action.ui
	                    }
	                };
	            case "setReturnURL":
	                // console.warn('setting RETURN URL', { action },state.ui);
	                return {
	                    ...state,
	                    ui: {
	                        ...state.ui,
	                        returnURL: action.returnURL
	                    }
	                };
	            case "setUser":
	                if (settings.cacheLoggedInUser || action.rememberMe) {
	                    // @ts-ignore
	                    Object.keys(action.user)
	                        .filter(prop => prop !== "type")
	                        .forEach(prop => {
	                        setCacheStore("user", prop, action.user[prop], settings.cacheUserTimeout);
	                    });
	                }
	                return {
	                    ...state,
	                    user: {
	                        ...state.user,
	                        ...action.user
	                    }
	                };
	            case "setSocket":
	                return {
	                    ...state,
	                    socker: action.socket
	                };
	            case "setUI": {
	                return {
	                    ...state,
	                    ui: {
	                        ...state.ui,
	                        ...action.ui,
	                    }
	                };
	            }
	            case "setTemplates": {
	                return {
	                    ...state,
	                    templates: {
	                        ...state.templates,
	                        ...action.templates,
	                    }
	                };
	            }
	            case "setApplicationState":
	                return {
	                    ...state,
	                    ...action.state
	                };
	            default:
	                if (action.type.includes("toggleMatchedRouteLayer")) {
	                    const [, layerName] = action.type.split("_");
	                    const uiLayerName = `isRouteLayer_${layerName}_Matched`;
	                    return {
	                        ...state,
	                        ui: {
	                            ...state.ui,
	                            [uiLayerName]: !state.ui[uiLayerName]
	                        }
	                    };
	                }
	                return state;
	        }
	    };
	    const initialState = {
	        ...options.application.state,
	        views: {
	            ...options.vxaState.views
	        },
	        viewdata: {
	            ...options.vxaState.viewdata
	        },
	        templates: {
	            ...options.templates
	        },
	        socket: {},
	        ui: {
	            templateRoute: {
	                route: '',
	                location: '',
	                params: {},
	                re: undefined,
	            },
	            templatePaths: [],
	            isLoading: true,
	            isModalOpen: false,
	            hasOverlayLayer: false,
	            hasLoadedInitialProcess: false,
	            hasPreloadedTemplates: settings.hasPreloadedTemplates || false,
	            returnURL: undefined,
	            ...layerOpenState,
	            ...options.vxaState.ui
	        },
	        user: {
	            token: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "token")
	                : undefined,
	            tokenData: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "tokenData")
	                : undefined,
	            expires: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "expires")
	                : undefined,
	            timeout: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "timeout")
	                : undefined,
	            profile: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "profile") || {}
	                : {},
	            fetchHeaders: {},
	            loggedIn: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "loggedIn") || false
	                : false,
	            loggedInMFA: settings.cacheLoggedInUser
	                ? getFromCacheStore("user", "loggedInMFA") || false
	                : false,
	            ...options.vxaState.user
	        }
	    };
	    const { 
	    // GlobalStateProvider,
	    dispatch, useGlobalState } = u(reducer, initialState);
	    return {
	        // GlobalStateProvider,
	        dispatch,
	        useGlobalState
	    };
	}

	async function getJSONA(options) {
	    // console.log("getJSONA options", options);
	    const { settings } = options.config;
	    const { 
	    // GlobalStateProvider,
	    dispatch, useGlobalState } = await getGlobalStateHooks(options);
	    options.dispatch = dispatch;
	    options.useGlobalState = useGlobalState;
	    // @ts-ignore
	    const MainApp = getMainComponent(options);
	    let Router;
	    switch (settings.router) {
	        case "static":
	            Router = StaticRouter;
	            break;
	        case "hash":
	            Router = HashRouter;
	            break;
	        case "memory":
	            Router = MemoryRouter;
	            break;
	        default:
	            Router = BrowserRouter;
	            break;
	    }
	    //  = settings.router === "hash" ? HashRouter : BrowserRouter;
	    const app = (
	    // <GlobalStateProvider>
	    jsxRuntime.jsx(Router, { children: jsxRuntime.jsx(Route$1, { path: "*", component: MainApp }, void 0) }, void 0)
	    // </GlobalStateProvider>
	    );
	    return { app, options, };
	}

	const config = {
	    componentLibraries: {},
	    reactComponents: {},
	    querySelector: "#root",
	    settings: {
	        name: "VXA-SPA",
	        version: "0.0.1",
	        addReactToWindow: true,
	        addReactDOMToWindow: true,
	        addJSONXToWindow: true,
	        debug: true,
	        exposeVXAToWindow: false,
	        router: "browser",
	        cacheTemplatesOffline: false,
	        cacheLoggedInUser: true,
	        cacheUserTimeout: 1000 * 60 * 24 * 30,
	        templatePath: undefined,
	        templateFetchOptions: {},
	        fetchHeaders: {},
	        dynamicTemplatePath: undefined,
	        dynamicTemplatePathRequestMethod: 'path',
	        dynamicTemplateFetchOptions: {},
	        useBodyLoadedClass: true,
	        useHTMLLoadedClass: true,
	        setBodyPathnameID: true,
	        hasPreloadedTemplates: true,
	        bodyLoadedClass: "__viewx_body_loaded",
	        htmlLoadedClass: "__viewx_html_loaded",
	        uiLoadedClass: "__viewx_ui_loaded",
	        uiLoadingClass: "__viewx_ui_loading",
	        useWindowRequestQuery: true,
	        useWebSockets: false,
	        useWebSocketsAuth: false,
	        socket_server_options: {},
	        socket_disconnect_message: {},
	        socket_server: undefined,
	        accessTokenProperty: "x-access-token",
	        routes: {
	            user_login: "/auth/user/login",
	            user_login_METHOD: "POST",
	            user_login_mfa: "/auth/user/mfa",
	            user_login_mfa_METHOD: "POST",
	            user_profile: "/auth/user/profile",
	            user_profile_METHOD: "POST",
	            login: "/login",
	            login_mfa: "/login_mfa",
	            logged_in_homepage: "/home",
	            logged_out_homepage: "/"
	        }
	    },
	    Functions: {
	        // @ts-ignore
	        log({ type, data, error, meta }) {
	            switch (type) {
	                case "error":
	                    console.error(error, { data, meta });
	                    break;
	                case "warning":
	                    console.warn(data, { meta });
	                    break;
	                case "info":
	                    console.info(data, { meta });
	                    break;
	                default:
	                    console.log(data, { meta });
	            }
	        },
	        // @ts-ignore
	        debug(input) {
	            console.info("DEBUG", {
	                input
	            });
	        },
	        // @ts-ignore
	        showLoader({ ui, setUI }) {
	            const el = document.querySelector("#loading");
	            if (el) {
	                el.style.height = "100%";
	                el.style.width = "100%";
	                el.style.position = "absolute";
	                el.style.background = "whitesmoke";
	                el.style.textAlign = "center";
	                el.style.display = "block";
	                el.style.opacity = "0.8";
	            }
	            setUI({
	                ...ui,
	                isLoading: true
	            });
	        },
	        // @ts-ignore
	        hideLoader({ ui, setUI }) {
	            const el = document.querySelector("#loading");
	            if (el)
	                el.style.display = "none";
	            setUI({
	                ...ui,
	                isLoading: false
	            });
	        },
	        onPageChange() { },
	        onLaunch() {
	            // console.warn('default onlaunch')
	        },
	        onShutdown() {
	            // console.warn('default onshutdown')
	        },
	        requireAuth: async function requireAuth() {
	            // @ts-ignore
	            if (this.props.user.loggedIn === false) {
	                let returnURL;
	                // @ts-ignore
	                if (this.props.location.pathname !== this.settings.routes.login) {
	                    // @ts-ignore
	                    this.props.dispatch({
	                        type: "setReturnURL",
	                        // @ts-ignore
	                        returnURL: this.props.location.pathname
	                    });
	                    // @ts-ignore
	                    returnURL = "?returnURL=" + this.props.location.pathname;
	                }
	                // @ts-ignore
	                this.props.history.push(this.settings.routes.login + returnURL);
	                return undefined;
	            }
	            else
	                return true;
	        },
	        requireMFA: async function requireMFA() {
	            // @ts-ignore
	            if (this.props.user.loggedIn === false) {
	                // @ts-ignore
	                this.props.history.push(this.settings.routes.login);
	            }
	            else if (
	            // @ts-ignore
	            this.props.user.loggedInMFA === false &&
	                // @ts-ignore
	                this.props.user.loggedIn)
	                // @ts-ignore
	                this.props.history.push(this.settings.routes.login_mfa);
	        },
	        loadUser: async function () {
	            // try {
	            //   if (results[results.length - 1] === 'true') {
	            //     this.props.authenticatedMFA();
	            //   }
	            //   let jwt_token = results[ 0 ];
	            //   let jwt_token_data = JSON.parse(results[ 1 ]);
	            //   let jwt_user_profile = {};
	            //   try {
	            //     jwt_user_profile = JSON.parse(results[ 2 ]);
	            //   } catch (e) {
	            //     this.props.getUserProfile(jwt_token);
	            //     this.props.initializeAuthenticatedUser(jwt_token, false);
	            //     this.props.errorNotification(new Error('Invalid User Profile'));
	            //   }
	            //   if (jwt_token_data && jwt_user_profile) {
	            //     let url = '/api/jwt/token';
	            //     let response = {};
	            //     let json = {
	            //       token: jwt_token_data.token,
	            //       expires: jwt_token_data.expires,
	            //       timeout: jwt_token_data.timeout,
	            //       user: jwt_user_profile,
	            //     };
	            //     let currentTime = new Date();
	            //     if (moment(jwt_token_data.expires).isBefore(currentTime)) {
	            //       let expiredTokenError = new Error(`Access Token Expired ${moment(jwt_token_data.expires).format('LLLL')}`);
	            //       this.props.logoutUser();
	            //       throw expiredTokenError;
	            //     } else {
	            //       this.props.saveUserProfile(url, response, json);
	            //       this.props.initializeAuthenticatedUser(json.token, false);
	            //     }
	            //   } else if (jwt_token) {
	            //     this.props.getUserProfile(jwt_token);
	            //     this.props.initializeAuthenticatedUser(jwt_token, false);
	            //     this.props.createNotification({ text: 'welcome back', timeout:4000,  });
	            return true;
	        },
	        // @ts-ignore
	        getSocketUser({ token, expires, timeout, profile }) {
	            return {
	                email: profile.email,
	                username: profile.name || profile.username,
	                jwt_token: token,
	                jwt_token_expires: expires,
	                jwt_token_timeout: timeout,
	                userdata: profile
	            };
	        },
	        // @ts-ignore
	        loginUser: async function ({ username, password, remember_me }) {
	            try {
	                const queryParams = qs.parse(window.location.search);
	                console.log("loginUser", { username, password, queryParams }, this);
	                // @ts-ignore
	                const tokenData = await this.viewx.Functions.fetchJSON(
	                // @ts-ignore
	                this.settings.routes.user_login, {
	                    // @ts-ignore
	                    method: this.settings.routes.user_login_METHOD,
	                    headers: {
	                        Accept: "application/json",
	                        "Content-Type": "application/json"
	                    },
	                    body: JSON.stringify({
	                        username,
	                        password
	                    })
	                });
	                // console.log({ tokenData });
	                const { token, expires, timeout } = tokenData;
	                // console.log({ token, expires, timeout, } )
	                if (!token)
	                    throw new ReferenceError("Invalid login token");
	                const userLoginAction = {
	                    type: "setUser",
	                    user: {
	                        token,
	                        tokenData,
	                        expires,
	                        timeout,
	                        loggedIn: true,
	                        rememberMe: typeof remember_me !== "undefined" ? remember_me : true
	                        // loggedInMFA: false,
	                    }
	                };
	                // @ts-ignore
	                this.viewx.Functions.showLoader.call(this, {
	                    // @ts-ignore
	                    ui: this.props.ui,
	                    // @ts-ignore
	                    setUI: this.props.setUI
	                });
	                // @ts-ignore
	                this.props.dispatch(userLoginAction);
	                // @ts-ignore
	                const profile = await this.viewx.Functions.getUserProfile({ token });
	                // @ts-ignore
	                this.props.dispatch({ type: "setUser", user: { profile } });
	                //send welcome message
	                // @ts-ignore
	                if (this.settings.useWebSockets) {
	                    // @ts-ignore
	                    const user = this.viewx.Functions.getSocketUser({
	                        token,
	                        expires,
	                        timeout,
	                        profile
	                    });
	                    // @ts-ignore
	                    this.props.socket.emit("authentication", {
	                        user,
	                        reconnection: true
	                    });
	                }
	                // @ts-ignore
	                console.log("this.props.ui.returnURL", this.props.ui.returnURL);
	                // @ts-ignore
	                this.props.history.push(
	                // @ts-ignore
	                this.props.ui.returnURL || this.settings.routes.logged_in_homepage);
	                // this.props.dispatch({ type: 'setReturnURL', returnURL:undefined, });
	            }
	            catch (e) {
	                // @ts-ignore
	                this.viewx.Functions.log({ type: "error", error: e });
	            }
	        },
	        // @ts-ignore
	        getUserProfile: async function ({ token }) {
	            // @ts-ignore
	            return await this.viewx.Functions.fetchJSON(
	            // @ts-ignore
	            this.settings.routes.user_profile, {
	                // @ts-ignore
	                method: this.settings.routes.user_profile_METHOD,
	                // @ts-ignore
	                headers: { [this.settings.accessTokenProperty]: token }
	            });
	        },
	        // @ts-ignore
	        validateMFA: async function ({ code }) {
	            try {
	                // @ts-ignore
	                const response = await this.viewx.Functions.fetchJSON(
	                // @ts-ignore
	                this.settings.routes.user_login, {
	                    // @ts-ignore
	                    method: this.settings.routes.user_login_mfa_METHOD,
	                    headers: { Accept: "application/json" },
	                    body: JSON.stringify({
	                        code
	                    })
	                });
	                if (response && response.data && response.data.authenticated) {
	                    //set auth mfa true
	                    //login or redirect url
	                }
	                else if (response.result === "error") {
	                    throw new Error(response.data.error);
	                    //           return this.enforceMFA()(dispatch, getState);
	                }
	                else
	                    throw Error("Invalid Repsonse");
	            }
	            catch (e) {
	                // @ts-ignore
	                this.viewx.Functions.log({ type: "error", error: e });
	            }
	        },
	        logoutUser() {
	            const userLoginProps = [
	                "token",
	                "tokenData",
	                "expires",
	                "timeout",
	                "profile",
	                "loggedIn",
	                "loggedInMFA"
	            ];
	            //remove cache keys
	            // @ts-ignore
	            if (this.settings.cacheLoggedInUser)
	                removeKeys("user", userLoginProps);
	            //remove from state
	            const userLogoutAction = userLoginProps.reduce((result, prop) => {
	                // @ts-ignore
	                result.user[prop] = false;
	                return result;
	            }, {
	                type: "setUser",
	                user: {}
	            });
	            // @ts-ignore
	            this.viewx.Functions.showLoader.call(this, {
	                // @ts-ignore
	                ui: this.props.ui,
	                // @ts-ignore
	                setUI: this.props.setUI
	            });
	            // @ts-ignore
	            this.props.dispatch(userLogoutAction);
	            // @ts-ignore
	            this.props.history.push(this.settings.routes.logged_out_homepage);
	        }
	    },
	    layers: [
	        {
	            order: 100,
	            name: "loading",
	            system: true,
	            type: "loadingView"
	        },
	        {
	            order: 200,
	            name: "modal",
	            system: true,
	            type: "overlay"
	        },
	        // overlay
	        {
	            order: 400,
	            name: "header",
	            system: true,
	            type: "view"
	        },
	        // nav
	        // footer
	        // error
	        {
	            order: 900,
	            name: "root",
	            system: true,
	            type: "applicationRoot"
	        }
	    ]
	};

	var customFileType;
	(function (customFileType) {
	    customFileType["script"] = "script";
	    customFileType["style"] = "style";
	})(customFileType || (customFileType = {}));

	// @ts-ignore
	let addedReact = false;
	function getFilePromise({ type, file, i, name }) {
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
	            }
	            else if (type === "style") {
	                insertStyleSheet({
	                    src: file,
	                    name: `${name}-${i}`,
	                    onload
	                });
	            }
	            else
	                resolve(true);
	        }
	        catch (e) {
	            console.error(e);
	            reject(e);
	        }
	    });
	}
	function getComponentPromise(customComponent) {
	    return new Promise((resolve, reject) => {
	        let returnedFile = false;
	        try {
	            const { 
	            // type,
	            umdFilePath, name, stylesheets = [] } = customComponent;
	            if (umdFilePath) {
	                let t = setTimeout(() => {
	                    clearTimeout(t);
	                    if (returnedFile === false)
	                        throw new Error("Timeout loading file: " + umdFilePath);
	                }, 60000);
	            }
	            if (stylesheets.length) {
	                stylesheets.forEach((stylesheet, i) => insertStyleSheet({
	                    src: stylesheet,
	                    name: `${name}-${i}`
	                }));
	            }
	            if (umdFilePath) {
	                if (addedReact === false) {
	                    if (!window.React)
	                        window.React = __getReact();
	                    if (!window.ReactDOM)
	                        window.ReactDOM = __getReactDOM();
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
	            }
	            else
	                resolve(true);
	        }
	        catch (e) {
	            console.error(e);
	            reject(e);
	        }
	    });
	}
	async function getReactLibrariesAndComponents({ customComponents }) {
	    const componentLibraries = {};
	    const reactComponents = {};
	    if (customComponents && customComponents.length) {
	        await Promise.all(customComponents.map(getComponentPromise));
	        customComponents.forEach(customComponent => {
	            const { type, name, jsonx, options, functionBody } = customComponent;
	            if (type === "library") {
	                if (jsonx) {
	                    componentLibraries[name] = Object.keys(jsonx).reduce((result, prop) => {
	                        const libraryComponent = jsonx[prop];
	                        const { type, name, jsonxComponent, options, functionBody } = libraryComponent;
	                        if (type === "component") {
	                            result[name] = _jsonxComponents.getReactClassComponent(jsonxComponent, options);
	                        }
	                        else {
	                            result[name] = _jsonxComponents.getReactFunctionComponent(jsonxComponent, functionBody, options);
	                        }
	                        return result;
	                    }, {});
	                }
	                else
	                    componentLibraries[name] = window[name];
	            }
	            else if (type === "component") {
	                if (jsonx) {
	                    reactComponents[name] = _jsonxComponents.getReactClassComponent(jsonx, options);
	                }
	                else
	                    reactComponents[name] = window[name];
	            }
	            else if (type === "function") {
	                if (jsonx) {
	                    reactComponents[name] = _jsonxComponents.getReactFunctionComponent(jsonx, functionBody, options);
	                }
	                else
	                    reactComponents[name] = window[name];
	            }
	        });
	    }
	    return {
	        componentLibraries,
	        reactComponents
	    };
	}
	async function addCustomFiles({ type, files }) {
	    if (!files || !files.length)
	        return [];
	    return await Promise.all(files.map((file, i) => getFilePromise({
	        type,
	        file,
	        i,
	        name: type
	    })));
	}
	async function configureViewx(options = {}) {
	    let layerMaxOrder = 0;
	    let applicationRootLayerName;
	    const configuration = { ...config };
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
	    const layerObject = allLayers.reduce((result, layerObject) => {
	        const { order, name, type } = layerObject;
	        if (order > layerMaxOrder)
	            layerMaxOrder = order;
	        if (type === "applicationRoot")
	            applicationRootLayerName = name;
	        result[name] = layerObject;
	        return result;
	    }, {});
	    if (!applicationRootLayerName)
	        throw ReferenceError("Invalid/Missing ApplicationRoot Layer");
	    if (layerObject[applicationRootLayerName].order !== layerMaxOrder)
	        layerObject[applicationRootLayerName].order = layerMaxOrder + 1;
	    configuration.layers = Object.keys(layerObject).map((layerName) => layerObject[layerName]);
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

	const options = {
	    customComponents: [
	    // {
	    // name:ComponentName,
	    // format:umd|jsonx,
	    // type:component|library,
	    // umdFilePath:url,
	    // jsonx,
	    // stylesheets:[url,],
	    // }
	    ],
	    customScripts: [
	    /*url,*/
	    ],
	    customStyles: [
	    /*url,*/
	    ],
	    customFunctions: {
	    /*Function, */
	    },
	    // config: {
	    //   Functions: {},
	    //   componentLibraries: {},
	    //   layers: [],
	    //   querySelector: '',
	    //   reactComponents: {},
	    //   // settings: {},
	    // },
	    layers: [
	        // loading,
	        // modal,
	        // overlay,
	        // header,
	        // footer,
	        // nav,
	        // error,
	        // root,
	        {
	            order: 100,
	            name: "root",
	            type: "applicationRoot"
	        }
	    ],
	    querySelector: "#root",
	    settings: {},
	    application: {
	        state: {
	            name: "My Application",
	            version: "0.0.1"
	        }
	    },
	    vxaState: {
	        views: {},
	        viewdata: {},
	        ui: {},
	        user: {}
	    },
	    templates: {
	        loading: {
	            "/:catchall*": {
	                jsonx: {
	                    component: "div",
	                    children: "loading..."
	                }
	            }
	        },
	        root: {
	            __error_404: {
	                jsonx: {
	                    component: "div",
	                    children: [
	                        {
	                            component: "h1",
	                            children: "Not Found"
	                        },
	                        {
	                            component: "div",
	                            thisprops: {
	                                _children: ["location", "pathname"]
	                            }
	                        }
	                    ]
	                },
	                pageData: [
	                    {
	                        tagName: "title",
	                        attributes: {},
	                        innerHTML: "Not Found"
	                    }
	                ]
	            },
	            __error_500: {
	                jsonx: {
	                    component: "div",
	                    children: [
	                        {
	                            component: "h1",
	                            children: "Error"
	                        },
	                        {
	                            component: "div",
	                            props: {
	                                style: {
	                                    padding: "1rem",
	                                    margin: "1rem",
	                                    border: "1px solid lightgrey"
	                                }
	                            },
	                            children: [
	                                {
	                                    component: "pre",
	                                    resourceprops: {
	                                        _children: ["error", "message"]
	                                    }
	                                },
	                                {
	                                    component: "pre",
	                                    resourceprops: {
	                                        _children: ["error", "stack"]
	                                    }
	                                }
	                            ]
	                        }
	                    ]
	                },
	                pageData: [
	                    {
	                        tagName: "title",
	                        attributes: {},
	                        innerHTML: "Error"
	                    }
	                ]
	            },
	            "/about-un-auth-basic": {
	                "jsonx": {
	                    "component": "div",
	                    "children": [{
	                            "component": "p",
	                            "children": "about page"
	                        },
	                        {
	                            "component": "ul",
	                            "children": [{
	                                    "component": "li",
	                                    "children": [{
	                                            "component": "Link",
	                                            "props": {
	                                                "to": "/"
	                                            },
	                                            "children": "index"
	                                        }]
	                                },
	                                {
	                                    "component": "li",
	                                    "children": [{
	                                            "component": "Link",
	                                            "props": {
	                                                "to": "/home"
	                                            },
	                                            "children": "home page"
	                                        }]
	                                },
	                                {
	                                    "component": "li",
	                                    "children": [{
	                                            "component": "Link",
	                                            "props": {
	                                                "to": "/about"
	                                            },
	                                            "children": "about page "
	                                        },
	                                        {
	                                            "component": "Link",
	                                            "props": {
	                                                "to": "/about-un-auth"
	                                            },
	                                            "children": " about page (no auth)"
	                                        }]
	                                },
	                                {
	                                    "component": "li",
	                                    "children": [{
	                                            "component": "Link",
	                                            "props": {
	                                                "to": "/page/2"
	                                            },
	                                            "children": "Page two"
	                                        }]
	                                }
	                            ]
	                        },
	                        {
	                            component: 'ul',
	                            resourceprops: {
	                                __spread: ['photos']
	                            },
	                            __spreadComponent: {
	                                component: 'li',
	                                thisprops: {
	                                    _children: ['__item', 'title']
	                                }
	                            },
	                        }
	                    ]
	                },
	                "resources": {
	                    "album": "https://jsonplaceholder.typicode.com/albums/1",
	                    "photos": "https://jsonplaceholder.typicode.com/albums/1/photos"
	                },
	                "pageData": [
	                    {
	                        "tagName": "title",
	                        "attributes": {},
	                        "innerHTML": "My about Page"
	                    },
	                    {
	                        "tagName": "meta",
	                        "attributes": {
	                            "name": "theme-color",
	                            "content": "#9a1c5e"
	                        },
	                    }
	                ]
	            },
	            "/login": {
	                jsonx: {
	                    component: "div",
	                    props: {
	                        key: 902932
	                    },
	                    children: [
	                        {
	                            component: "h1",
	                            children: "Login",
	                            props: {
	                                key: 31222,
	                            },
	                        },
	                        {
	                            component: 'FormComponent',
	                            props: {
	                                formComponent: {
	                                    component: 'div',
	                                    props: {
	                                        key: 3122,
	                                    },
	                                    children: [
	                                        {
	                                            component: 'div',
	                                            props: {
	                                                key: 312,
	                                            },
	                                            children: [
	                                                {
	                                                    component: 'label',
	                                                    props: {
	                                                        style: {
	                                                            display: 'block'
	                                                        }
	                                                    },
	                                                    children: 'Username'
	                                                },
	                                                {
	                                                    component: "input",
	                                                    props: {
	                                                        key: 31,
	                                                        type: "text",
	                                                        name: "username",
	                                                        placeholder: "username"
	                                                    },
	                                                    // thiscontext:{
	                                                    //   ref:['reactHookForm','register']
	                                                    // },
	                                                    __dangerouslyEvalProps: {
	                                                        ref: `(function(){
                              return this.reactHookForm.register({required:'required username'});
                            })`,
	                                                    }
	                                                },
	                                                {
	                                                    component: "ReactHookForm.ErrorMessage",
	                                                    props: {
	                                                        key: 32,
	                                                        name: "username"
	                                                    },
	                                                    thiscontext: {
	                                                        errors: ['reactHookForm', 'errors']
	                                                    },
	                                                    __dangerouslyInsertFunctionComponents: {
	                                                        children: {
	                                                            functionBody: `let exposeProps={}`,
	                                                            reactComponent: {
	                                                                component: 'p',
	                                                                thisprops: {
	                                                                    _children: ['message']
	                                                                }
	                                                                // children:'test functional component',
	                                                            },
	                                                            options: {
	                                                                name: 'testHookFormError'
	                                                            }
	                                                        }
	                                                    }
	                                                },
	                                            ]
	                                        },
	                                        {
	                                            component: 'div',
	                                            props: {
	                                                key: 412,
	                                            },
	                                            children: [
	                                                {
	                                                    component: 'label',
	                                                    props: {
	                                                        style: {
	                                                            display: 'block'
	                                                        }
	                                                    },
	                                                    children: 'Password'
	                                                },
	                                                {
	                                                    component: "input",
	                                                    props: {
	                                                        key: 41,
	                                                        type: "password",
	                                                        name: "password",
	                                                        placeholder: "password"
	                                                    },
	                                                    __dangerouslyEvalProps: {
	                                                        ref: `(function(){
                              return this.reactHookForm.register({required:'required password'});
                            })`,
	                                                    }
	                                                },
	                                                {
	                                                    component: "ReactHookForm.ErrorMessage",
	                                                    props: {
	                                                        key: 42,
	                                                        name: "password"
	                                                    },
	                                                    thiscontext: {
	                                                        errors: ['reactHookForm', 'errors']
	                                                    },
	                                                    __dangerouslyInsertFunctionComponents: {
	                                                        children: {
	                                                            functionBody: `let exposeProps={}`,
	                                                            reactComponent: {
	                                                                component: 'p',
	                                                                props: { key: 4552 },
	                                                                thisprops: {
	                                                                    _children: ['message']
	                                                                }
	                                                            },
	                                                            options: {
	                                                                name: 'testHookFormError'
	                                                            }
	                                                        }
	                                                    }
	                                                },
	                                            ]
	                                        },
	                                        {
	                                            component: 'div',
	                                            props: {
	                                                key: 512
	                                            },
	                                            children: [
	                                                {
	                                                    component: "button",
	                                                    props: {
	                                                        key: 5432,
	                                                        type: "submit"
	                                                    },
	                                                    children: "Submit"
	                                                }
	                                            ]
	                                        }
	                                    ],
	                                }
	                            },
	                            __dangerouslyBindEvalProps: {
	                                onSubmit: function (values) {
	                                    console.log({ values }, this);
	                                    this.viewx.Functions.loginUser(values);
	                                    // setTimeout(() => {
	                                    //   alert(JSON.stringify(values, null, 2));
	                                    //   setSubmitting(false);
	                                    // }, 400);
	                                }
	                            }
	                        }
	                    ]
	                },
	                pageData: [
	                    {
	                        tagName: "title",
	                        attributes: {},
	                        innerHTML: "User Login"
	                    }
	                ]
	            },
	            "/": {
	                // '/:catchall*': {
	                preRenderFunctions: [
	                // 'func:viewx.Functions.passOne',
	                // 'func:window.someWindowFunction',
	                // 'func:viewx.Functions.passOne',
	                // 'func:viewx.Functions.passTwo',
	                // 'func:viewx.Functions.requireAuth',
	                // 'func:viewx.Functions.passOne',
	                ],
	                pageData: [
	                    {
	                        tagName: "title",
	                        attributes: {},
	                        innerHTML: "Sample Simple App"
	                    }
	                ],
	                jsonx: {
	                    component: "Fragment",
	                    props: {
	                        key: "catchall"
	                    },
	                    children: [
	                        {
	                            component: "div",
	                            thiscontext: {
	                                _children: ["state", "name"]
	                            }
	                            // children: 'hello world!',
	                        },
	                        {
	                            component: "sayHello"
	                        },
	                        {
	                            component: "h2",
	                            thisstate: {
	                                _children: ["name"]
	                            }
	                        },
	                        {
	                            component: "div",
	                            props: {
	                                style: {
	                                    display: "flex"
	                                }
	                            },
	                            children: [
	                                {
	                                    component: "input",
	                                    props: {
	                                        style: {
	                                            padding: "5px"
	                                        }
	                                    },
	                                    thisstate: {
	                                        value: ["name"]
	                                    },
	                                    __dangerouslyBindEvalProps: {
	                                        onChange: `(function(e){
                      //console.log({e});
                      console.log('this',this)
                      //console.log('e.target.value',e.target.value)
                      this.props.updateState({name:e.target.value})
                      // this.setState({name:e.target.value})
                    })`
	                                    }
	                                },
	                                {
	                                    component: "Link",
	                                    props: {
	                                        to: "/modal/hello",
	                                        style: {
	                                            padding: "5px"
	                                        }
	                                    },
	                                    children: "Hello Modal"
	                                },
	                                {
	                                    component: "Link",
	                                    props: {
	                                        to: "/about",
	                                        style: {
	                                            padding: "5px"
	                                        }
	                                    },
	                                    children: "About Page"
	                                },
	                                {
	                                    component: "Link",
	                                    props: {
	                                        to: "/page/4",
	                                        style: {
	                                            padding: "5px"
	                                        }
	                                    },
	                                    children: "Page 4"
	                                },
	                                {
	                                    component: "button",
	                                    props: {
	                                        style: {
	                                            padding: "5px"
	                                        }
	                                    },
	                                    children: "change header",
	                                    __dangerouslyBindEvalProps: {
	                                        onClick: `(function(){
                      // console.log('onClick this',this);
                      this.viewx.Functions.loadView({
                        layerName:'header',
                        view:{
                          jsonx:{
                            component:'h1',
                            resourceprops:{
                              style:['customStyle']
                            },
                            children:'NEW HEADER',
                          },
                        },
                        resourceprops:{
                          customStyle:{
                            color:'red',
                          }
                        }
                      });
                    })`
	                                    }
	                                }
	                            ]
	                        }
	                    ]
	                }
	            }
	        },
	        modal: {
	            "/modal/hello": {
	                jsonx: {
	                    component: "ReactModal",
	                    props: {
	                        ariaHideApp: false
	                    },
	                    thisprops: {
	                        isOpen: ["ui", "isRouteLayer_modal_Matched"]
	                    },
	                    __dangerouslyBindEvalProps: {
	                        onRequestClose: `(function(){
              // console.log('onRequestClose this',this);
              this.props.dispatch({ type:'toggleMatchedRouteLayer_modal',});
              this.props.history.goBack();
            })`
	                    },
	                    // __functionProps: {
	                    //   onRequestClose:['func:this.props.toggleMatchedRouteLayer_modal']
	                    // },
	                    children: [
	                        {
	                            component: 'div',
	                            children: "SAY HELLO MODAL!!"
	                        }
	                    ]
	                }
	            }
	        }
	    }
	};

	// import React from 'react';
	window.hoistNonReactStatics = hoistNonReactStatics_cjs;
	async function JSONA(options$1 = {}) {
	    const appOptions = { ...options, ...options$1 };
	    appOptions.config = await configureViewx(appOptions);
	    // console.log({ options, appOptions, });
	    const { querySelector, } = appOptions;
	    // console.log({ querySelector });
	    const { app, options: JSONAOptions, } = await getJSONA(appOptions);
	    appOptions.config.layers
	        .sort((a, b) => a.order - b.order)
	        .forEach((layer) => createLayer({ layer, app, querySelector, }));
	    return { app, options: JSONAOptions, };
	    // console.log({app})
	    // ReactDOM.render(app, document.querySelector(querySelector));
	}

	Object.defineProperty(exports, 'React', {
		enumerable: true,
		get: function () {
			return React__default['default'];
		}
	});
	Object.defineProperty(exports, 'ReactDOM', {
		enumerable: true,
		get: function () {
			return ReactDOM__default['default'];
		}
	});
	exports.App = JSONA;
	exports.JSONX = index;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
