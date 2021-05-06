import require$$0, { useState, useMemo, useEffect, Fragment } from 'react';
export { default as React } from 'react';
import { Route as Route$1 } from 'react-router';
import { Link, BrowserRouter, MemoryRouter, HashRouter, StaticRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
export { default as ReactDOM } from 'react-dom';
import { getReactElementFromJSONX, _jsonxComponents, __getReact, __getReactDOM } from 'jsonx';
import * as jsonx from 'jsonx';
export { jsonx as JSONX };
import { findMatchingRoutePath } from 'test-matching-route';
import * as pathToRegexp from 'path-to-regexp';
import { createStore } from 'react-hooks-global-state';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
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
			if (hasOwnProperty$1.call(from, key)) {
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
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactJsxRuntime_development = createCommonjsModule(function (module, exports) {

{
  (function() {

var React = require$$0;
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_development;
}
});

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

})(commonjsGlobal, commonjsGlobal && commonjsGlobal.define);
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

function parse(qs, sep, eq, options) {
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
  decode: parse,
  parse: parse
};

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
            const toPath = pathToRegexp.compile(fetchPath.replace(fetchProtocol_str, fetchProtocol_replace_str), templateRoute.params);
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
function insertJavaScript({ src, name, async = true, onload, doc, }) {
    (function (HTMLDocument, ElementTagName, id) {
        const tagId = `viewx-script-${id}`;
        if (HTMLDocument.getElementById(id))
            return;
        const firstHTMLDocumentScript = HTMLDocument.getElementsByTagName(ElementTagName)[0];
        const newScript = HTMLDocument.createElement(ElementTagName);
        newScript.setAttribute("async", async.toString());
        newScript.id = tagId;
        newScript.setAttribute("type", "text/javascript");
        newScript.setAttribute("src", src);
        if (src.includes('://')) {
            const a = HTMLDocument.createElement('a');
            a.setAttribute('ref', src);
            if (a.origin !== window.location.origin)
                newScript.setAttribute('crossorigin', 'true');
        }
        if (onload)
            newScript.onload = onload;
        // @ts-ignore
        if (firstHTMLDocumentScript)
            firstHTMLDocumentScript.parentNode.insertBefore(newScript, firstHTMLDocumentScript);
        else
            HTMLDocument.head.prepend(newScript);
    })(doc || document || window.document, "script", name);
}
function insertStyleSheet({ src, name, onload, doc }) {
    (function (HTMLDocument, ElementTagName, id) {
        const tagId = `viewx-style-${id}`;
        if (HTMLDocument.getElementById(id))
            return;
        const firstHTMLDocumentStylesheet = HTMLDocument.getElementsByTagName(ElementTagName)[0];
        const newStyleSheet = HTMLDocument.createElement(ElementTagName);
        newStyleSheet.id = tagId;
        newStyleSheet.setAttribute("rel", "stylesheet");
        newStyleSheet.setAttribute("type", "text/css");
        newStyleSheet.setAttribute("href", src);
        if (onload)
            newStyleSheet.onload = onload;
        if (firstHTMLDocumentStylesheet && firstHTMLDocumentStylesheet.parentNode)
            firstHTMLDocumentStylesheet.parentNode.insertBefore(newStyleSheet, firstHTMLDocumentStylesheet);
        else
            HTMLDocument.head.prepend(newStyleSheet);
    })(doc || document || window.document, "link", name);
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
        ReactDOM.render(app, layerDOM);
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
    // console.log({  config  })
    // const fetchFunctionObject = Functions.fetchJSON.bind(functionContext) || fetchJSON.bind(functionContext);
    const fetchFunction = (Functions.fetchJSON || fetchJSON).bind(functionContext);
    const loadedTemplates = config.settings.hasPreloadedTemplates
        ? {}
        : config.settings.templatePath
            ? await fetchFunction(config.settings.templatePath, config.settings.templateFetchOptions)
            : {};
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
        Functions.onPageChange.call(functionContext, { pathname, templateRouteLayers, });
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
        functionNames.forEach((functionName) => {
            if (typeof functionName === 'function') {
                const func = functionName.bind(functionContext)(templateViewData);
                promiseNames.push(functionName.name);
                promises.push(func);
                // return func;
            }
            else {
                const func = getFunctionFromNameString({
                    Functions,
                    functionContext,
                    functionName
                })(templateViewData);
                promiseNames.push(functionName);
                promises.push(func);
                // return func
            }
        });
        // promiseNames.push(...functionNames);
        // promises.push(...funcs);
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
    const layerState = useMemo(() => {
        const layerStateData = layerStates ? layerStates[name] : {};
        return layerStateData;
    }, [layerStates, name]);
    const [state, setState] = useState(layerState);
    ctx[`viewx_layer_${name}_state`] = state;
    ctx[`viewx_layer_${name}_setState`] = setState;
    const getReactElement = getReactElementFromJSONX.bind(ctx);
    if (settings.exposeVXAToWindow) {
        window.__ViewXContext = ctx;
        window.__ViewXContext.getReactElement = getReactElement;
    }
    const jsonxChildren = getReactElement(views[name] ? views[name].jsonx : null, viewdata[name] ? viewdata[name] : {});
    return (jsxRuntime.jsx(Fragment, { children: (type !== "overlay")
            ? jsonxChildren
            : el ? ReactDOM.createPortal(jsonxChildren, el) : null }, "viewx"));
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
        const [state, setState] = useState(application ? application.state : {});
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
        const loadView = useMemo(() => {
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
        useEffect(() => {
            Functions.onLaunch.call(functionContext);
            return () => Functions.onShutdown.call(functionContext);
            /* eslint-disable */
        }, []);
        /* eslint-enable */
        useEffect(() => {
            let viewxTemplates = templates;
            let action;
            async function initialize() {
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
        return (jsxRuntime.jsx(Fragment, { children: config.layers.map(layer => {
                return (jsxRuntime.jsx(ViewXComponent, { layer: layer, views: views, viewdata: viewdata, ctx: ctx, layerStates: layerStates, settings: settings }, void 0));
            }) }, "viewx"));
    }
    return Main;
}

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
    dispatch, useGlobalState } = createStore(reducer, initialState);
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
        onPageChange({ pathname, templateRouteLayers }) {
            // console.log({pathname, templateRouteLayers})
        },
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

// import * as JSONX from "jsonx/src/index";
let addedReact = false;
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
function getFilePromise({ type, file, i, name, timeoutMilliseconds = 60000, doc, }) {
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
            }
            else if (type === "style") {
                insertStyleSheet({
                    src: file,
                    name: `${name}-${i}`,
                    onload,
                    doc,
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
function getComponentPromise(customComponent) {
    return new Promise((resolve, reject) => {
        let returnedFile = false;
        try {
            const { 
            // type,
            timeoutMilliseconds = 60000, HTMLDocument, umdFilePath, name, stylesheets = [] } = customComponent;
            if (umdFilePath) {
                let t = setTimeout(() => {
                    clearTimeout(t);
                    if (returnedFile === false)
                        throw new Error(`Timeout (${timeoutMilliseconds}ms) loading file:  ${umdFilePath}`);
                }, timeoutMilliseconds);
            }
            if (stylesheets.length) {
                stylesheets.forEach((stylesheet, i) => insertStyleSheet({
                    src: stylesheet,
                    name: `${name}-${i}`,
                    doc: HTMLDocument,
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
                    doc: HTMLDocument,
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
/**
 * Add custom components to jsona's JSONX instance
 * @param {VXAComponent[]} customComponents array of components to add to jsona
 * @returns {librariesAndComponents} reactComponents and componentLibraries to add to JSONX
 */
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
            else if (type === "function" || typeof functionBody === 'function') {
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

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



{
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});

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

export { JSONA as App };
//# sourceMappingURL=index.esm.js.map
