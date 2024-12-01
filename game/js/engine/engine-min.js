var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
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

var esnext_globalThis = {};

var es_globalThis = {};

'use strict';
var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$e =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var global$f = /*@__PURE__*/getDefaultExportFromCjs(global$e);

var objectGetOwnPropertyDescriptor = {};

'use strict';
var fails$9 = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$a = /*@__PURE__*/getDefaultExportFromCjs(fails$9);

'use strict';
var fails$8 = fails$9;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$8(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

var descriptors$1 = /*@__PURE__*/getDefaultExportFromCjs(descriptors);

'use strict';
var fails$7 = fails$9;

var functionBindNative = !fails$7(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var functionBindNative$1 = /*@__PURE__*/getDefaultExportFromCjs(functionBindNative);

'use strict';
var NATIVE_BIND$1 = functionBindNative;

var call$4 = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$4.bind(call$4) : function () {
  return call$4.apply(call$4, arguments);
};

var functionCall$1 = /*@__PURE__*/getDefaultExportFromCjs(functionCall);

var objectPropertyIsEnumerable = {};

'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f$4 = objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

'use strict';
var createPropertyDescriptor$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var createPropertyDescriptor$3 = /*@__PURE__*/getDefaultExportFromCjs(createPropertyDescriptor$2);

'use strict';
var NATIVE_BIND = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$3 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$3, call$3);

var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$3.apply(fn, arguments);
  };
};

var functionUncurryThis$1 = /*@__PURE__*/getDefaultExportFromCjs(functionUncurryThis);

'use strict';
var uncurryThis$a = functionUncurryThis;

var toString$5 = uncurryThis$a({}.toString);
var stringSlice$1 = uncurryThis$a(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$1(toString$5(it), 8, -1);
};

var classofRaw$2 = /*@__PURE__*/getDefaultExportFromCjs(classofRaw$1);

'use strict';
var uncurryThis$9 = functionUncurryThis;
var fails$6 = fails$9;
var classof$3 = classofRaw$1;

var $Object$3 = Object;
var split = uncurryThis$9(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$6(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$3(it) === 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

var indexedObject$1 = /*@__PURE__*/getDefaultExportFromCjs(indexedObject);

'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$2 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = /*@__PURE__*/getDefaultExportFromCjs(isNullOrUndefined$2);

'use strict';
var isNullOrUndefined$1 = isNullOrUndefined$2;

var $TypeError$5 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (isNullOrUndefined$1(it)) throw new $TypeError$5("Can't call method on " + it);
  return it;
};

var requireObjectCoercible$4 = /*@__PURE__*/getDefaultExportFromCjs(requireObjectCoercible$3);

'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible$2(it));
};

var toIndexedObject$4 = /*@__PURE__*/getDefaultExportFromCjs(toIndexedObject$3);

'use strict';
var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var documentAll$3 = /*@__PURE__*/getDefaultExportFromCjs(documentAll_1);

'use strict';
var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$b = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$c = /*@__PURE__*/getDefaultExportFromCjs(isCallable$b);

'use strict';
var isCallable$a = isCallable$b;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$5 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$a(it);
};

var isObject$6 = /*@__PURE__*/getDefaultExportFromCjs(isObject$5);

'use strict';
var global$d = global$e;
var isCallable$9 = isCallable$b;

var aFunction = function (argument) {
  return isCallable$9(argument) ? argument : undefined;
};

var getBuiltIn$2 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
};

var getBuiltIn$3 = /*@__PURE__*/getDefaultExportFromCjs(getBuiltIn$2);

'use strict';
var uncurryThis$8 = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$8({}.isPrototypeOf);

var objectIsPrototypeOf$1 = /*@__PURE__*/getDefaultExportFromCjs(objectIsPrototypeOf);

'use strict';
var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var engineUserAgent$1 = /*@__PURE__*/getDefaultExportFromCjs(engineUserAgent);

'use strict';
var global$c = global$e;
var userAgent = engineUserAgent;

var process = global$c.process;
var Deno = global$c.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version$1;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version$1 && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version$1 = +match[1];
  }
}

var engineV8Version = version$1;

var engineV8Version$1 = /*@__PURE__*/getDefaultExportFromCjs(engineV8Version);

'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = engineV8Version;
var fails$5 = fails$9;
var global$b = global$e;

var $String$4 = global$b.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$5(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

var symbolConstructorDetection$1 = /*@__PURE__*/getDefaultExportFromCjs(symbolConstructorDetection);

'use strict';
/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var useSymbolAsUid$1 = /*@__PURE__*/getDefaultExportFromCjs(useSymbolAsUid);

'use strict';
var getBuiltIn$1 = getBuiltIn$2;
var isCallable$8 = isCallable$b;
var isPrototypeOf = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$1('Symbol');
  return isCallable$8($Symbol) && isPrototypeOf($Symbol.prototype, $Object$2(it));
};

var isSymbol$3 = /*@__PURE__*/getDefaultExportFromCjs(isSymbol$2);

'use strict';
var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var tryToString$2 = /*@__PURE__*/getDefaultExportFromCjs(tryToString$1);

'use strict';
var isCallable$7 = isCallable$b;
var tryToString = tryToString$1;

var $TypeError$4 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$7(argument)) return argument;
  throw new $TypeError$4(tryToString(argument) + ' is not a function');
};

var aCallable$2 = /*@__PURE__*/getDefaultExportFromCjs(aCallable$1);

'use strict';
var aCallable = aCallable$1;
var isNullOrUndefined = isNullOrUndefined$2;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$1 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

var getMethod$2 = /*@__PURE__*/getDefaultExportFromCjs(getMethod$1);

'use strict';
var call$2 = functionCall;
var isCallable$6 = isCallable$b;
var isObject$4 = isObject$5;

var $TypeError$3 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$6(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
  if (isCallable$6(fn = input.valueOf) && !isObject$4(val = call$2(fn, input))) return val;
  if (pref !== 'string' && isCallable$6(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
  throw new $TypeError$3("Can't convert object to primitive value");
};

var ordinaryToPrimitive$2 = /*@__PURE__*/getDefaultExportFromCjs(ordinaryToPrimitive$1);

var shared$5 = {exports: {}};

'use strict';
var isPure = false;

var isPure$1 = /*@__PURE__*/getDefaultExportFromCjs(isPure);

'use strict';
var global$a = global$e;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$1 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$1(global$a, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var defineGlobalProperty$4 = /*@__PURE__*/getDefaultExportFromCjs(defineGlobalProperty$3);

'use strict';
var global$9 = global$e;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var sharedStore$1 = /*@__PURE__*/getDefaultExportFromCjs(sharedStore);

var shared$3 = shared$5.exports;

'use strict';
var IS_PURE = isPure;
var store$2 = sharedStore;

(shared$5.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedExports = shared$5.exports;
var shared$4 = /*@__PURE__*/getDefaultExportFromCjs(sharedExports);

'use strict';
var requireObjectCoercible$1 = requireObjectCoercible$3;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$1 = function (argument) {
  return $Object$1(requireObjectCoercible$1(argument));
};

var toObject$2 = /*@__PURE__*/getDefaultExportFromCjs(toObject$1);

'use strict';
var uncurryThis$7 = functionUncurryThis;
var toObject = toObject$1;

var hasOwnProperty = uncurryThis$7({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var hasOwnProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(hasOwnProperty_1);

'use strict';
var uncurryThis$6 = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$6(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id + postfix, 36);
};

var uid$3 = /*@__PURE__*/getDefaultExportFromCjs(uid$2);

'use strict';
var global$8 = global$e;
var shared$2 = sharedExports;
var hasOwn$6 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$8.Symbol;
var WellKnownSymbolsStore = shared$2('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$3 = function (name) {
  if (!hasOwn$6(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var wellKnownSymbol$4 = /*@__PURE__*/getDefaultExportFromCjs(wellKnownSymbol$3);

'use strict';
var call$1 = functionCall;
var isObject$3 = isObject$5;
var isSymbol$1 = isSymbol$2;
var getMethod = getMethod$1;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$2 = wellKnownSymbol$3;

var $TypeError$2 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$2('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$3(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$1(exoticToPrim, input, pref);
    if (!isObject$3(result) || isSymbol$1(result)) return result;
    throw new $TypeError$2("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$2 = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive$1);

'use strict';
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var toPropertyKey$3 = /*@__PURE__*/getDefaultExportFromCjs(toPropertyKey$2);

'use strict';
var global$7 = global$e;
var isObject$2 = isObject$5;

var document$1 = global$7.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$2(document$1) && isObject$2(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var documentCreateElement$1 = /*@__PURE__*/getDefaultExportFromCjs(documentCreateElement);

'use strict';
var DESCRIPTORS$6 = descriptors;
var fails$4 = fails$9;
var createElement = documentCreateElement;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$6 && !fails$4(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

var ie8DomDefine$1 = /*@__PURE__*/getDefaultExportFromCjs(ie8DomDefine);

'use strict';
var DESCRIPTORS$5 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$5 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$3 = objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

'use strict';
var DESCRIPTORS$4 = descriptors;
var fails$3 = fails$9;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$3(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

var v8PrototypeDefineBug$1 = /*@__PURE__*/getDefaultExportFromCjs(v8PrototypeDefineBug);

'use strict';
var isObject$1 = isObject$5;

var $String$2 = String;
var $TypeError$1 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$2 = function (argument) {
  if (isObject$1(argument)) return argument;
  throw new $TypeError$1($String$2(argument) + ' is not an object');
};

var anObject$3 = /*@__PURE__*/getDefaultExportFromCjs(anObject$2);

'use strict';
var DESCRIPTORS$3 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var anObject$1 = anObject$2;
var toPropertyKey = toPropertyKey$2;

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$2 = objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey(P);
  anObject$1(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$1(O);
  P = toPropertyKey(P);
  anObject$1(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

'use strict';
var DESCRIPTORS$2 = descriptors;
var definePropertyModule$2 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;

var createNonEnumerableProperty$2 = DESCRIPTORS$2 ? function (object, key, value) {
  return definePropertyModule$2.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var createNonEnumerableProperty$3 = /*@__PURE__*/getDefaultExportFromCjs(createNonEnumerableProperty$2);

var makeBuiltIn$3 = {exports: {}};

'use strict';
var DESCRIPTORS$1 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var functionName$1 = /*@__PURE__*/getDefaultExportFromCjs(functionName);

'use strict';
var uncurryThis$5 = functionUncurryThis;
var isCallable$5 = isCallable$b;
var store$1 = sharedStore;

var functionToString = uncurryThis$5(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$5(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var inspectSource$2 = /*@__PURE__*/getDefaultExportFromCjs(inspectSource$1);

'use strict';
var global$6 = global$e;
var isCallable$4 = isCallable$b;

var WeakMap$1 = global$6.WeakMap;

var weakMapBasicDetection = isCallable$4(WeakMap$1) && /native code/.test(String(WeakMap$1));

var weakMapBasicDetection$1 = /*@__PURE__*/getDefaultExportFromCjs(weakMapBasicDetection);

'use strict';
var shared$1 = sharedExports;
var uid = uid$2;

var keys = shared$1('keys');

var sharedKey$1 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var sharedKey$2 = /*@__PURE__*/getDefaultExportFromCjs(sharedKey$1);

'use strict';
var hiddenKeys$3 = {};

var hiddenKeys$4 = /*@__PURE__*/getDefaultExportFromCjs(hiddenKeys$3);

'use strict';
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$5 = global$e;
var isObject = isObject$5;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
var hasOwn$3 = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey = sharedKey$1;
var hiddenKeys$2 = hiddenKeys$3;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$5.TypeError;
var WeakMap = global$5.WeakMap;
var set, get$1, has;

var enforce = function (it) {
  return has(it) ? get$1(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get$1(it)).type !== TYPE) {
      throw new TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$2[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$3(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$1(it, STATE, metadata);
    return metadata;
  };
  get$1 = function (it) {
    return hasOwn$3(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$3(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get$1,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var internalState$1 = /*@__PURE__*/getDefaultExportFromCjs(internalState);

var makeBuiltIn_1 = makeBuiltIn$3.exports;

'use strict';
var uncurryThis$4 = functionUncurryThis;
var fails$2 = fails$9;
var isCallable$3 = isCallable$b;
var hasOwn$2 = hasOwnProperty_1;
var DESCRIPTORS = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule = internalState;

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String$1 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis$4(''.slice);
var replace$1 = uncurryThis$4(''.replace);
var join = uncurryThis$4([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails$2(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice($String$1(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$1($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$2(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$2(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$3(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

var makeBuiltInExports = makeBuiltIn$3.exports;
var makeBuiltIn$2 = /*@__PURE__*/getDefaultExportFromCjs(makeBuiltInExports);

'use strict';
var isCallable$2 = isCallable$b;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$2(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$1.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var defineBuiltIn$2 = /*@__PURE__*/getDefaultExportFromCjs(defineBuiltIn$1);

var objectGetOwnPropertyNames = {};

'use strict';
var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var mathTrunc$1 = /*@__PURE__*/getDefaultExportFromCjs(mathTrunc);

'use strict';
var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = /*@__PURE__*/getDefaultExportFromCjs(toIntegerOrInfinity$2);

'use strict';
var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toAbsoluteIndex$2 = /*@__PURE__*/getDefaultExportFromCjs(toAbsoluteIndex$1);

'use strict';
var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = /*@__PURE__*/getDefaultExportFromCjs(toLength$1);

'use strict';
var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength(obj.length);
};

var lengthOfArrayLike$2 = /*@__PURE__*/getDefaultExportFromCjs(lengthOfArrayLike$1);

'use strict';
var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var arrayIncludes$1 = /*@__PURE__*/getDefaultExportFromCjs(arrayIncludes);

'use strict';
var uncurryThis$3 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$3;

var push = uncurryThis$3([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

var objectKeysInternal$1 = /*@__PURE__*/getDefaultExportFromCjs(objectKeysInternal);

'use strict';
// IE8- don't enum bug keys
var enumBugKeys$1 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var enumBugKeys$2 = /*@__PURE__*/getDefaultExportFromCjs(enumBugKeys$1);

'use strict';
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$1 = objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f = objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

'use strict';
var getBuiltIn = getBuiltIn$2;
var uncurryThis$2 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$2;

var concat = uncurryThis$2([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var ownKeys$2 = /*@__PURE__*/getDefaultExportFromCjs(ownKeys$1);

'use strict';
var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var copyConstructorProperties$2 = /*@__PURE__*/getDefaultExportFromCjs(copyConstructorProperties$1);

'use strict';
var fails$1 = fails$9;
var isCallable$1 = isCallable$b;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data$1[normalize$1(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable$1(detection) ? fails$1(detection)
    : !!detection;
};

var normalize$1 = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data$1 = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var isForced$2 = /*@__PURE__*/getDefaultExportFromCjs(isForced_1);

'use strict';
var global$4 = global$e;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$2;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var _export$1 = /*@__PURE__*/getDefaultExportFromCjs(_export);

'use strict';
var $$4 = _export;
var global$3 = global$e;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$4({ global: true, forced: global$3.globalThis !== global$3 }, {
  globalThis: global$3
});

'use strict';

'use strict';
// https://github.com/tc39/proposal-global

var global$2 = global$e;

var globalThis$1 = global$2;

var globalThis$2 = /*@__PURE__*/getDefaultExportFromCjs(globalThis$1);

var es_string_trimStart = {};

var es_string_trimLeft = {};

'use strict';
var wellKnownSymbol$1 = wellKnownSymbol$3;

var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var toStringTagSupport$1 = /*@__PURE__*/getDefaultExportFromCjs(toStringTagSupport);

'use strict';
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable = isCallable$b;
var classofRaw = classofRaw$1;
var wellKnownSymbol = wellKnownSymbol$3;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$1 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var classof$2 = /*@__PURE__*/getDefaultExportFromCjs(classof$1);

'use strict';
var classof = classof$1;

var $String = String;

var toString$2 = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var toString$3 = /*@__PURE__*/getDefaultExportFromCjs(toString$2);

'use strict';
// a string of all valid unicode whitespaces
var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespaces$3 = /*@__PURE__*/getDefaultExportFromCjs(whitespaces$2);

'use strict';
var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$3;
var toString$1 = toString$2;
var whitespaces$1 = whitespaces$2;

var replace = uncurryThis$1(''.replace);
var ltrim = RegExp('^[' + whitespaces$1 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$1 + '])[' + whitespaces$1 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

var stringTrim$1 = /*@__PURE__*/getDefaultExportFromCjs(stringTrim);

'use strict';
var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails = fails$9;
var whitespaces = whitespaces$2;

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

var stringTrimForced$1 = /*@__PURE__*/getDefaultExportFromCjs(stringTrimForced);

'use strict';
var $trimStart = stringTrim.start;
var forcedStringTrimMethod$1 = stringTrimForced;

// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
var stringTrimStart = forcedStringTrimMethod$1('trimStart') ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;

var stringTrimStart$1 = /*@__PURE__*/getDefaultExportFromCjs(stringTrimStart);

'use strict';
var $$3 = _export;
var trimStart$3 = stringTrimStart;

// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$$3({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimLeft !== trimStart$3 }, {
  trimLeft: trimStart$3
});

'use strict';
// TODO: Remove this line from `core-js@4`

var $$2 = _export;
var trimStart$2 = stringTrimStart;

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$$2({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart$2 }, {
  trimStart: trimStart$2
});

'use strict';
var global$1 = global$e;
var uncurryThis = functionUncurryThis;

var entryUnbind$2 = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(global$1[CONSTRUCTOR].prototype[METHOD]);
};

var entryUnbind$3 = /*@__PURE__*/getDefaultExportFromCjs(entryUnbind$2);

'use strict';

var entryUnbind$1 = entryUnbind$2;

var trimStart = entryUnbind$1('String', 'trimLeft');

var trimStart$1 = /*@__PURE__*/getDefaultExportFromCjs(trimStart);

var es_string_trimEnd = {};

var es_string_trimRight = {};

'use strict';
var $trimEnd = stringTrim.end;
var forcedStringTrimMethod = stringTrimForced;

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
var stringTrimEnd = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

var stringTrimEnd$1 = /*@__PURE__*/getDefaultExportFromCjs(stringTrimEnd);

'use strict';
var $$1 = _export;
var trimEnd$3 = stringTrimEnd;

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$$1({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd$3 }, {
  trimRight: trimEnd$3
});

'use strict';
// TODO: Remove this line from `core-js@4`

var $ = _export;
var trimEnd$2 = stringTrimEnd;

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd$2 }, {
  trimEnd: trimEnd$2
});

'use strict';

var entryUnbind = entryUnbind$2;

var trimEnd = entryUnbind('String', 'trimRight');

var trimEnd$1 = /*@__PURE__*/getDefaultExportFromCjs(trimEnd);

if (typeof globalThis !== "undefined") {
    if (typeof globalThis.console === "undefined") {
        globalThis.console = {};
        globalThis.console.log = function() {};
        globalThis.console.assert = function() {};
        globalThis.console.warn = function() {};
        globalThis.console.error = function() {
            alert(Array.prototype.slice.call(arguments).join(", "));
        };
    }
}

/*
 * based on https://www.npmjs.com/package/canvas-roundrect-polyfill
 * @version 0.0.1
 */
(() => {

    "use strict";

    /** @ignore */
    function roundRect(x, y, w, h, radii) {

        if (!([x, y, w, h].every((input) => Number.isFinite(input)))) {

            return;

        }

        radii = parseRadiiArgument(radii);

        let upperLeft, upperRight, lowerRight, lowerLeft;

        if (radii.length === 4) {

            upperLeft = toCornerPoint(radii[0]);
            upperRight = toCornerPoint(radii[1]);
            lowerRight = toCornerPoint(radii[2]);
            lowerLeft = toCornerPoint(radii[3]);

        } else if (radii.length === 3) {

            upperLeft = toCornerPoint(radii[0]);
            upperRight = toCornerPoint(radii[1]);
            lowerLeft = toCornerPoint(radii[1]);
            lowerRight = toCornerPoint(radii[2]);

        } else if (radii.length === 2) {

            upperLeft = toCornerPoint(radii[0]);
            lowerRight = toCornerPoint(radii[0]);
            upperRight = toCornerPoint(radii[1]);
            lowerLeft = toCornerPoint(radii[1]);

        } else if (radii.length === 1) {

            upperLeft = toCornerPoint(radii[0]);
            upperRight = toCornerPoint(radii[0]);
            lowerRight = toCornerPoint(radii[0]);
            lowerLeft = toCornerPoint(radii[0]);

        } else {

            throw new Error(radii.length + " is not a valid size for radii sequence.");

        }

        const corners = [upperLeft, upperRight, lowerRight, lowerLeft];
        const negativeCorner = corners.find(({x, y}) => x < 0 || y < 0);
        //const negativeValue = negativeCorner?.x < 0 ? negativeCorner.x : negativeCorner?.y

        if (corners.some(({x, y}) => !Number.isFinite(x) || !Number.isFinite(y))) {

            return;

        }

        if (negativeCorner) {

            throw new Error("Radius value " + negativeCorner + " is negative.");

        }

        fixOverlappingCorners(corners);

        if (w < 0 && h < 0) {

            this.moveTo(x - upperLeft.x, y);
            this.ellipse(x + w + upperRight.x, y - upperRight.y, upperRight.x, upperRight.y, 0, -Math.PI * 1.5, -Math.PI);
            this.ellipse(x + w + lowerRight.x, y + h + lowerRight.y, lowerRight.x, lowerRight.y, 0, -Math.PI, -Math.PI / 2);
            this.ellipse(x - lowerLeft.x, y + h + lowerLeft.y, lowerLeft.x, lowerLeft.y, 0, -Math.PI / 2, 0);
            this.ellipse(x - upperLeft.x, y - upperLeft.y, upperLeft.x, upperLeft.y, 0, 0, -Math.PI / 2);

        } else if (w < 0) {

            this.moveTo(x - upperLeft.x, y);
            this.ellipse(x + w + upperRight.x, y + upperRight.y, upperRight.x, upperRight.y, 0, -Math.PI / 2, -Math.PI, 1);
            this.ellipse(x + w + lowerRight.x, y + h - lowerRight.y, lowerRight.x, lowerRight.y, 0, -Math.PI, -Math.PI * 1.5, 1);
            this.ellipse(x - lowerLeft.x, y + h - lowerLeft.y, lowerLeft.x, lowerLeft.y, 0, Math.PI / 2, 0, 1);
            this.ellipse(x - upperLeft.x, y + upperLeft.y, upperLeft.x, upperLeft.y, 0, 0, -Math.PI / 2, 1);

        } else if (h < 0) {

            this.moveTo(x + upperLeft.x, y);
            this.ellipse(x + w - upperRight.x, y - upperRight.y, upperRight.x, upperRight.y, 0, Math.PI / 2, 0, 1);
            this.ellipse(x + w - lowerRight.x, y + h + lowerRight.y, lowerRight.x, lowerRight.y, 0, 0, -Math.PI / 2, 1);
            this.ellipse(x + lowerLeft.x, y + h + lowerLeft.y, lowerLeft.x, lowerLeft.y, 0, -Math.PI / 2, -Math.PI, 1);
            this.ellipse(x + upperLeft.x, y - upperLeft.y, upperLeft.x, upperLeft.y, 0, -Math.PI, -Math.PI * 1.5, 1);

        } else {

            this.moveTo(x + upperLeft.x, y);
            this.ellipse(x + w - upperRight.x, y + upperRight.y, upperRight.x, upperRight.y, 0, -Math.PI / 2, 0);
            this.ellipse(x + w - lowerRight.x, y + h - lowerRight.y, lowerRight.x, lowerRight.y, 0, 0, Math.PI / 2);
            this.ellipse(x + lowerLeft.x, y + h - lowerLeft.y, lowerLeft.x, lowerLeft.y, 0, Math.PI / 2, Math.PI);
            this.ellipse(x + upperLeft.x, y + upperLeft.y, upperLeft.x, upperLeft.y, 0, Math.PI, Math.PI * 1.5);

        }

        this.closePath();
        this.moveTo(x, y);

        /** @ignore */
        function toDOMPointInit(value) {

            const {x, y, z, w} = value;
            return {x, y, z, w};

        }

        /** @ignore */
        function parseRadiiArgument(value) {

            // https://webidl.spec.whatwg.org/#es-union
            // with 'optional (unrestricted double or DOMPointInit
            //   or sequence<(unrestricted double or DOMPointInit)>) radii = 0'
            const type = typeof value;

            if (type === "undefined" || value === null) {

                return [0];

            }
            if (type === "function") {

                return [NaN];

            }
            if (type === "object") {

                if (typeof value[Symbol.iterator] === "function") {

                    return [...value].map((elem) => {
                        // https://webidl.spec.whatwg.org/#es-union
                        // with '(unrestricted double or DOMPointInit)'
                        const elemType = typeof elem;
                        if (elemType === "undefined" || elem === null) {
                            return 0;
                        }
                        if (elemType === "function") {
                            return NaN;
                        }
                        if (elemType === "object") {
                            return toDOMPointInit(elem);
                        }
                        return toUnrestrictedNumber(elem);
                    });

                }

                return [toDOMPointInit(value)];

            }

            return [toUnrestrictedNumber(value)];

        }

        /** @ignore */
        function toUnrestrictedNumber(value) {

            return +value;

        }

        /** @ignore */
        function toCornerPoint(value) {

            const asNumber = toUnrestrictedNumber(value);
            if (Number.isFinite(asNumber)) {

                return {
                    x: asNumber,
                    y: asNumber
                };

            }
            if (Object(value) === value) {

                return {
                    x: toUnrestrictedNumber(value.x || 0),
                    y: toUnrestrictedNumber(value.y || 0)
                };

            }

            return {
                x: NaN,
                y: NaN
            };

        }

        /** @ignore */
        function fixOverlappingCorners(corners) {
            const [upperLeft, upperRight, lowerRight, lowerLeft] = corners;
            const factors = [
                Math.abs(w) / (upperLeft.x + upperRight.x),
                Math.abs(h) / (upperRight.y + lowerRight.y),
                Math.abs(w) / (lowerRight.x + lowerLeft.x),
                Math.abs(h) / (upperLeft.y + lowerLeft.y)
            ];
            const minFactor = Math.min(...factors);
            if (minFactor <= 1) {
                corners.forEach((radii) => {
                    radii.x *= minFactor;
                    radii.y *= minFactor;
                });
            }
        }
    }

    if (globalThis.CanvasRenderingContext2D) {
        if (typeof globalThis.Path2D.prototype.roundRect === "undefined") {
            globalThis.Path2D.prototype.roundRect = roundRect;
        }
    }
    if (globalThis.CanvasRenderingContext2D) {
        if (typeof globalThis.CanvasRenderingContext2D.prototype.roundRect === "undefined") {
            globalThis.CanvasRenderingContext2D.prototype.roundRect = roundRect;
        }
    }
    if (globalThis.OffscreenCanvasRenderingContext2D) {
        if (typeof globalThis.OffscreenCanvasRenderingContext2D.prototype.roundRect === "undefined") {
            globalThis.OffscreenCanvasRenderingContext2D.prototype.roundRect = roundRect;
        }
    }

})();

// https://github.com/melonjs/melonJS/issues/1092

/**
 * a collection of math utility functions
 * @namespace Math
 */

/**
 * constant to convert from degrees to radians
 * @public
 * @type {number}
 * @name DEG_TO_RAD
 * @memberof Math
 */
const DEG_TO_RAD = Math.PI / 180.0;

/**
 * constant to convert from radians to degrees
 * @public
 * @type {number}
 * @name RAD_TO_DEG
 * @memberof Math
 */
const RAD_TO_DEG = 180.0 / Math.PI;

/**
 * constant equals to 2 times pi
 * @public
 * @type {number}
 * @name TAU
 * @memberof Math
 */
const TAU = Math.PI * 2;

/**
 * constant equals to half pi
 * @public
 * @type {number}
 * @name ETA
 * @memberof Math
 */
const ETA = Math.PI * 0.5;

/**
 * the difference between 1 and the smallest floating point number greater than 1
 * @public
 * @type {number}
 * @name EPSILON
 * @memberof Math
 */
const EPSILON = 0.000001;

/**
 * returns true if the given value is a power of two
 * @public
 * @memberof Math
 * @name isPowerOfTwo
 * @param {number} val
 * @returns {boolean}
 */
function isPowerOfTwo(val) {
    return (val & (val - 1)) === 0;
}

/**
 * returns the next power of two for the given value
 * @public
 * @memberof Math
 * @name nextPowerOfTwo
 * @param {number} val
 * @returns {boolean}
 */
function nextPowerOfTwo(val) {
    val --;
    val |= val >> 1;
    val |= val >> 2;
    val |= val >> 4;
    val |= val >> 8;
    val |= val >> 16;
    val ++;
    return val;
}

/**
 * Converts an angle in degrees to an angle in radians
 * @public
 * @memberof Math
 * @name degToRad
 * @param {number} angle - angle in degrees
 * @returns {number} corresponding angle in radians
 * @example
 * // convert a specific angle
 * me.Math.degToRad(60); // return 1.0471...
 */
function degToRad(angle) {
    return angle * DEG_TO_RAD;
}

/**
 * Converts an angle in radians to an angle in degrees.
 * @public
 * @memberof Math
 * @name radToDeg
 * @param {number} radians - angle in radians
 * @returns {number} corresponding angle in degrees
 * @example
 * // convert a specific angle
 * me.Math.radToDeg(1.0471975511965976); // return 60
 */
function radToDeg(radians) {
    return radians * RAD_TO_DEG;
}

/**
 * clamp the given value
 * @public
 * @memberof Math
 * @name clamp
 * @param {number} val - the value to clamp
 * @param {number} low - lower limit
 * @param {number} high - higher limit
 * @returns {number} clamped value
 */
function clamp(val, low, high) {
    return val < low ? low : val > high ? high : +val;
}

/**
 * return a random integer between min (included) and max (excluded)
 * @public
 * @memberof Math
 * @name random
 * @param {number} min - minimum value.
 * @param {number} max - maximum value.
 * @returns {number} random value
 * @example
 * // Print a random number; one of 5, 6, 7, 8, 9
 * console.log(me.Math.random(5, 10) );
 */
function random$1(min, max) {
    return (~~(Math.random() * (max - min)) + min);
}

/**
 * return a random float between min, max (exclusive)
 * @public
 * @memberof Math
 * @name randomFloat
 * @param {number} min - minimum value.
 * @param {number} max - maximum value.
 * @returns {number} random value
 * @example
 * // Print a random number; one of 5, 6, 7, 8, 9
 * console.log(me.Math.randomFloat(5, 10) );
 */
function randomFloat(min, max) {
    return (Math.random() * (max - min)) + min;
}

/**
 * return a weighted random between min, max (exclusive)
 * @public
 * @memberof Math
 * @name weightedRandom
 * @param {number} min - minimum value.
 * @param {number} max - maximum value.
 * @returns {number} random value
 * @example
 * // Print a random number; one of 5, 6, 7, 8, 9
 * console.log(me.Math.weightedRandom(5, 10) );
 */
function weightedRandom$1(min, max) {
    return (~~(Math.pow(Math.random(), 2) * (max - min)) + min);
}

/**
 * round a value to the specified number of digit
 * @public
 * @memberof Math
 * @name round
 * @param {number} num - value to be rounded.
 * @param {number} [dec=0] - number of decimal digit to be rounded to.
 * @returns {number} rounded value
 * @example
 * // round a specific value to 2 digits
 * me.Math.round(10.33333, 2); // return 10.33
 */
function round(num, dec = 0) {
    // if only one argument use the object value
    const powres = Math.pow(10, dec);
    return (~~(0.5 + num * powres) / powres);
}

/**
 * check if the given value is close to the expected one
 * @public
 * @memberof Math
 * @name toBeCloseTo
 * @param {number} expected - value to be compared with.
 * @param {number} actual - actual value to compare
 * @param {number} [precision=2] - float precision for the comparison
 * @returns {boolean} if close to
 * @example
 * // test if the given value is close to 10
 * if (me.Math.toBeCloseTo(10, value)) {
 *     // do something
 * }
 */
function toBeCloseTo(expected, actual, precision = 2) {
    return Math.abs(expected - actual) < (Math.pow(10, -precision) / 2);
}

var math = {
	__proto__: null,
	DEG_TO_RAD: DEG_TO_RAD,
	EPSILON: EPSILON,
	ETA: ETA,
	RAD_TO_DEG: RAD_TO_DEG,
	TAU: TAU,
	clamp: clamp,
	degToRad: degToRad,
	isPowerOfTwo: isPowerOfTwo,
	nextPowerOfTwo: nextPowerOfTwo,
	radToDeg: radToDeg,
	random: random$1,
	randomFloat: randomFloat,
	round: round,
	toBeCloseTo: toBeCloseTo,
	weightedRandom: weightedRandom$1
};

/**
 * @classdesc
 * Object pooling - a technique that might speed up your game if used properly.<br>
 * If some of your classes will be instantiated and removed a lot at a time, it is a
 * good idea to add the class to this object pool. A separate pool for that class
 * will be created, which will reuse objects of the class. That way they won't be instantiated
 * each time you need a new one (slowing your game), but stored into that pool and taking one
 * already instantiated when you need it.<br><br>
 * This technique is also used by the engine to instantiate objects defined in the map,
 * which means, that on level loading the engine will try to instantiate every object
 * found in the map, based on the user defined name in each Object Properties<br>
 * <img src="images/object_properties.png"/><br>
 * @see {@link pool} the default global instance of ObjectPool
 */
class ObjectPool {

    constructor() {
        this.objectClass = {};
        this.instance_counter = 0;
    }

    /**
     * register an object to the pool. <br>
     * Pooling must be set to true if more than one such objects will be created. <br>
     * (Note: for an object to be poolable, it must implements a `onResetEvent` method)
     * @param {string} className - as defined in the Name field of the Object Properties (in Tiled)
     * @param {object} classObj - corresponding Class to be instantiated
     * @param {boolean} [recycling=false] - enables object recycling for the specified class
     * @example
     * // implement CherryEntity
     * class Cherry extends Sprite {
     *    onResetEvent() {
     *        // reset object mutable properties
     *        this.lifeBar = 100;
     *    }
     * };
     * // add our users defined entities in the object pool and enable object recycling
     * me.pool.register("cherrysprite", Cherry, true);
     */
    register(className, classObj, recycling = false) {
        if (typeof (classObj) !== "undefined") {
            this.objectClass[className] = {
                "class" : classObj,
                "pool" : (recycling ? [] : undefined)
            };
        } else {
            throw new Error("Cannot register object '" + className + "', invalid class");
        }
    }

    /**
     * Pull a new instance of the requested object (if added into the object pool)
     * @param {string} name - as used in {@link pool.register}
     * @param {object} [...arguments] - arguments to be passed when instantiating/reinitializing the object
     * @returns {object} the instance of the requested object
     * @example
     * me.pool.register("bullet", BulletEntity, true);
     * me.pool.register("enemy", EnemyEntity, true);
     * // ...
     * // when we need to manually create a new bullet:
     * let bullet = me.pool.pull("bullet", x, y, direction);
     * // ...
     * // params aren't a fixed number
     * // when we need new enemy we can add more params, that the object construct requires:
     * let enemy = me.pool.pull("enemy", x, y, direction, speed, power, life);
     * // ...
     * // when we want to destroy existing object, the remove
     * // function will ensure the object can then be reallocated later
     * me.game.world.removeChild(enemy);
     * me.game.world.removeChild(bullet);
     */
    pull(name, ...args) {
        let className = this.objectClass[name];
        if (className) {
            let proto = className["class"],
                poolArray = className.pool,
                obj;

            if (poolArray && ((obj = poolArray.pop()))) {
                // poolable object must implement a `onResetEvent` method
                obj.onResetEvent.apply(obj, args);
                this.instance_counter--;
            } else {
                // create a new instance
                obj = new (proto.bind.apply(proto, [ proto, ...args ]))();
                if (poolArray) {
                    obj.className = name;
                }
            }
            return obj;
        }
        throw new Error("Cannot instantiate object of type '" + name + "'");
    }

    /**
     * purge the object pool from any inactive object <br>
     * Object pooling must be enabled for this function to work<br>
     * note: this will trigger the garbage collector
     */
    purge() {
        for (let className in this.objectClass) {
            if (this.objectClass[className]) {
                this.objectClass[className].pool = [];
            }
        }
        this.instance_counter = 0;
    }

    /**
     * Push back an object instance into the object pool <br>
     * Object pooling for the object class must be enabled,
     * and object must have been instantiated using {@link pool#pull},
     * otherwise this function won't work
     * @throws will throw an error if the object cannot be recycled
     * @param {object} obj - instance to be recycled
     * @param {boolean} [throwOnError=true] - throw an exception if the object cannot be recycled
     * @returns {boolean} true if the object was successfully recycled in the object pool
     */
    push(obj, throwOnError = true) {
        if (!this.poolable(obj)) {
            if (throwOnError === true ) {
                throw new Error("me.pool: object " + obj + " cannot be recycled");
            } else {
                return false;
            }
        }

        // store back the object instance for later recycling
        this.objectClass[obj.className].pool.push(obj);
        this.instance_counter++;

        return true;
    }

    /**
     * Check if an object with the provided name is registered
     * @param {string} name - of the registered object class
     * @returns {boolean} true if the classname is registered
     */
    exists(name) {
        return name in this.objectClass;
    }

    /**
     * Check if an object is poolable
     * (was properly registered with the recycling feature enable)
     * @see register
     * @param {object} obj - object to be checked
     * @returns {boolean} true if the object is poolable
     * @example
     * if (!me.pool.poolable(myCherryEntity)) {
     *     // object was not properly registered
     * }
     */
    poolable(obj) {
        let className = obj.className;
        return (typeof className !== "undefined") &&
                (typeof obj.onResetEvent === "function") &&
                (className in this.objectClass) &&
                (typeof this.objectClass[className].pool !== "undefined");

    }

    /**
     * returns the amount of object instance currently in the pool
     * @returns {number} amount of object instance
     */
    getInstanceCount() {
        return this.instance_counter;
    }
}

let pool = new ObjectPool();

// convert a give color component to it hexadecimal value
const charLookup = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function toHex$1(component) {
    return charLookup[(component & 0xF0) >> 4] + charLookup[component & 0x0F];
}

function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
}

const rgbaRx = /^rgba?\((\d+), ?(\d+), ?(\d+)(, ?([\d\.]+))?\)$/;
const hex3Rx = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])$/;
const hex4Rx = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/;
const hex6Rx = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
const hex8Rx = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;

let cssToRGB = new Map();

[
    // CSS1
    [ "black",                  [   0,   0,   0 ] ],
    [ "silver",                 [ 192, 192, 129 ] ],
    [ "gray",                   [ 128, 128, 128 ] ],
    [ "white",                  [ 255, 255, 255 ] ],
    [ "maroon",                 [ 128,   0,   0 ] ],
    [ "red",                    [ 255,   0,   0 ] ],
    [ "purple",                 [ 128,   0, 128 ] ],
    [ "fuchsia",                [ 255,   0, 255 ] ],
    [ "green",                  [   0, 128,   0 ] ],
    [ "lime",                   [   0, 255,   0 ] ],
    [ "olive",                  [ 128, 128,   0 ] ],
    [ "yellow",                 [ 255, 255,   0 ] ],
    [ "navy",                   [   0,   0, 128 ] ],
    [ "blue",                   [   0,   0, 255 ] ],
    [ "teal",                   [   0, 128, 128 ] ],
    [ "aqua",                   [   0, 255, 255 ] ],

    // CSS2
    [ "orange",                 [ 255, 165,   0 ] ],

    // CSS3
    [ "aliceblue",              [ 240, 248, 245 ] ],
    [ "antiquewhite",           [ 250, 235, 215 ] ],
    [ "aquamarine",             [ 127, 255, 212 ] ],
    [ "azure",                  [ 240, 255, 255 ] ],
    [ "beige",                  [ 245, 245, 220 ] ],
    [ "bisque",                 [ 255, 228, 196 ] ],
    [ "blanchedalmond",         [ 255, 235, 205 ] ],
    [ "blueviolet",             [ 138,  43, 226 ] ],
    [ "brown",                  [ 165,  42,  42 ] ],
    [ "burlywood",              [ 222, 184,  35 ] ],
    [ "cadetblue",              [  95, 158, 160 ] ],
    [ "chartreuse",             [ 127, 255,   0 ] ],
    [ "chocolate",              [ 210, 105,  30 ] ],
    [ "coral",                  [ 255, 127,  80 ] ],
    [ "cornflowerblue",         [ 100, 149, 237 ] ],
    [ "cornsilk",               [ 255, 248, 220 ] ],
    [ "crimson",                [ 220,  20,  60 ] ],
    [ "darkblue",               [   0,   0, 139 ] ],
    [ "darkcyan",               [   0, 139, 139 ] ],
    [ "darkgoldenrod",          [ 184, 134,  11 ] ],
    [ "darkgray[*]",            [ 169, 169, 169 ] ],
    [ "darkgreen",              [   0, 100,   0 ] ],
    [ "darkgrey[*]",            [ 169, 169, 169 ] ],
    [ "darkkhaki",              [ 189, 183, 107 ] ],
    [ "darkmagenta",            [ 139,   0, 139 ] ],
    [ "darkolivegreen",         [  85, 107,  47 ] ],
    [ "darkorange",             [ 255, 140,   0 ] ],
    [ "darkorchid",             [ 153,  50, 204 ] ],
    [ "darkred",                [ 139,   0,   0 ] ],
    [ "darksalmon",             [ 233, 150, 122 ] ],
    [ "darkseagreen",           [ 143, 188, 143 ] ],
    [ "darkslateblue",          [  72,  61, 139 ] ],
    [ "darkslategray",          [  47,  79,  79 ] ],
    [ "darkslategrey",          [  47,  79,  79 ] ],
    [ "darkturquoise",          [   0, 206, 209 ] ],
    [ "darkviolet",             [ 148,   0, 211 ] ],
    [ "deeppink",               [ 255,  20, 147 ] ],
    [ "deepskyblue",            [   0, 191, 255 ] ],
    [ "dimgray",                [ 105, 105, 105 ] ],
    [ "dimgrey",                [ 105, 105, 105 ] ],
    [ "dodgerblue",             [  30, 144, 255 ] ],
    [ "firebrick",              [ 178,  34,  34 ] ],
    [ "floralwhite",            [ 255, 250, 240 ] ],
    [ "forestgreen",            [  34, 139,  34 ] ],
    [ "gainsboro",              [ 220, 220, 220 ] ],
    [ "ghostwhite",             [ 248, 248, 255 ] ],
    [ "gold",                   [ 255, 215,   0 ] ],
    [ "goldenrod",              [ 218, 165,  32 ] ],
    [ "greenyellow",            [ 173, 255,  47 ] ],
    [ "grey",                   [ 128, 128, 128 ] ],
    [ "honeydew",               [ 240, 255, 240 ] ],
    [ "hotpink",                [ 255, 105, 180 ] ],
    [ "indianred",              [ 205,  92,  92 ] ],
    [ "indigo",                 [  75,   0, 130 ] ],
    [ "ivory",                  [ 255, 255, 240 ] ],
    [ "khaki",                  [ 240, 230, 140 ] ],
    [ "lavender",               [ 230, 230, 250 ] ],
    [ "lavenderblush",          [ 255, 240, 245 ] ],
    [ "lawngreen",              [ 124, 252,   0 ] ],
    [ "lemonchiffon",           [ 255, 250, 205 ] ],
    [ "lightblue",              [ 173, 216, 230 ] ],
    [ "lightcoral",             [ 240, 128, 128 ] ],
    [ "lightcyan",              [ 224, 255, 255 ] ],
    [ "lightgoldenrodyellow",   [ 250, 250, 210 ] ],
    [ "lightgray",              [ 211, 211, 211 ] ],
    [ "lightgreen",             [ 144, 238, 144 ] ],
    [ "lightgrey",              [ 211, 211, 211 ] ],
    [ "lightpink",              [ 255, 182, 193 ] ],
    [ "lightsalmon",            [ 255, 160, 122 ] ],
    [ "lightseagreen",          [  32, 178, 170 ] ],
    [ "lightskyblue",           [ 135, 206, 250 ] ],
    [ "lightslategray",         [ 119, 136, 153 ] ],
    [ "lightslategrey",         [ 119, 136, 153 ] ],
    [ "lightsteelblue",         [ 176, 196, 222 ] ],
    [ "lightyellow",            [ 255, 255, 224 ] ],
    [ "limegreen",              [  50, 205,  50 ] ],
    [ "linen",                  [ 250, 240, 230 ] ],
    [ "mediumaquamarine",       [ 102, 205, 170 ] ],
    [ "mediumblue",             [   0,   0, 205 ] ],
    [ "mediumorchid",           [ 186,  85, 211 ] ],
    [ "mediumpurple",           [ 147, 112, 219 ] ],
    [ "mediumseagreen",         [  60, 179, 113 ] ],
    [ "mediumslateblue",        [ 123, 104, 238 ] ],
    [ "mediumspringgreen",      [   0, 250, 154 ] ],
    [ "mediumturquoise",        [  72, 209, 204 ] ],
    [ "mediumvioletred",        [ 199,  21, 133 ] ],
    [ "midnightblue",           [  25,  25, 112 ] ],
    [ "mintcream",              [ 245, 255, 250 ] ],
    [ "mistyrose",              [ 255, 228, 225 ] ],
    [ "moccasin",               [ 255, 228, 181 ] ],
    [ "navajowhite",            [ 255, 222, 173 ] ],
    [ "oldlace",                [ 253, 245, 230 ] ],
    [ "olivedrab",              [ 107, 142,  35 ] ],
    [ "orangered",              [ 255,  69,   0 ] ],
    [ "orchid",                 [ 218, 112, 214 ] ],
    [ "palegoldenrod",          [ 238, 232, 170 ] ],
    [ "palegreen",              [ 152, 251, 152 ] ],
    [ "paleturquoise",          [ 175, 238, 238 ] ],
    [ "palevioletred",          [ 219, 112, 147 ] ],
    [ "papayawhip",             [ 255, 239, 213 ] ],
    [ "peachpuff",              [ 255, 218, 185 ] ],
    [ "peru",                   [ 205, 133,  63 ] ],
    [ "pink",                   [ 255, 192, 203 ] ],
    [ "plum",                   [ 221, 160, 221 ] ],
    [ "powderblue",             [ 176, 224, 230 ] ],
    [ "rosybrown",              [ 188, 143, 143 ] ],
    [ "royalblue",              [  65, 105, 225 ] ],
    [ "saddlebrown",            [ 139,  69,  19 ] ],
    [ "salmon",                 [ 250, 128, 114 ] ],
    [ "sandybrown",             [ 244, 164,  96 ] ],
    [ "seagreen",               [  46, 139,  87 ] ],
    [ "seashell",               [ 255, 245, 238 ] ],
    [ "sienna",                 [ 160,  82,  45 ] ],
    [ "skyblue",                [ 135, 206, 235 ] ],
    [ "slateblue",              [ 106,  90, 205 ] ],
    [ "slategray",              [ 112, 128, 144 ] ],
    [ "slategrey",              [ 112, 128, 144 ] ],
    [ "snow",                   [ 255, 250, 250 ] ],
    [ "springgreen",            [   0, 255, 127 ] ],
    [ "steelblue",              [  70, 130, 180 ] ],
    [ "tan",                    [ 210, 180, 140 ] ],
    [ "thistle",                [ 216, 191, 216 ] ],
    [ "tomato",                 [ 255,  99,  71 ] ],
    [ "turquoise",              [  64, 224, 208 ] ],
    [ "violet",                 [ 238, 130, 238 ] ],
    [ "wheat",                  [ 245, 222, 179 ] ],
    [ "whitesmoke",             [ 245, 245, 245 ] ],
    [ "yellowgreen",            [ 154, 205,  50 ] ]
].forEach((value) => {
    cssToRGB.set(value[0], value[1]);
});

/**
 * @classdesc
 * A color manipulation object.
 */
class Color {

    /**
     * @param {number} [r=0] - red component [0 .. 255]
     * @param {number} [g=0] - green component [0 .. 255]
     * @param {number} [b=0] - blue component [0 .. 255]
     * @param {number} [alpha=1.0] - alpha value [0.0 .. 1.0]
     */
    constructor(r = 0, g = 0, b = 0, alpha = 1.0) {
        this.onResetEvent(r, g, b, alpha);
    }

    /**
     * @ignore
     */
    onResetEvent(r = 0, g = 0, b = 0, alpha = 1.0) {
        if (typeof this.glArray === "undefined") {
            // Color components in a Float32Array suitable for WebGL
            this.glArray = new Float32Array([ 0.0, 0.0, 0.0, 1.0 ]);
        }
        this.setColor(r, g, b, alpha);
    }

    /**
     * Color Red Component [0 .. 255]
     * @type {number}
     */
    get r() {
        return ~~(this.glArray[0] * 255);
    }

    set r(value) {
        this.glArray[0] = clamp(~~value || 0, 0, 255) / 255.0;
    }


    /**
     * Color Green Component [0 .. 255]
     * @type {number}
     */
    get g() {
        return ~~(this.glArray[1] * 255);
    }

    set g(value) {
        this.glArray[1] = clamp(~~value || 0, 0, 255) / 255.0;
    }


    /**
     * Color Blue Component [0 .. 255]
     * @type {number}
     */
    get b() {
        return ~~(this.glArray[2] * 255);
    }
    set b(value) {
        this.glArray[2] = clamp(~~value || 0, 0, 255) / 255.0;
    }

    /**
     * Color Alpha Component [0.0 .. 1.0]
     * @type {number}
     */
    get alpha() {
        return this.glArray[3];
    }

    set alpha(value = 1.0) {
        this.glArray[3] = clamp(+value, 0, 1.0);
    }

    /**
     * Set this color to the specified value.
     * @param {number} r - red component [0 .. 255]
     * @param {number} g - green component [0 .. 255]
     * @param {number} b - blue component [0 .. 255]
     * @param {number} [alpha=1.0] - alpha value [0.0 .. 1.0]
     * @returns {Color} Reference to this object for method chaining
     */
    setColor(r, g, b, alpha = 1.0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha;
        return this;
    }

    /**
     * set this color to the specified normalized float values
     * @param {number} r - red component [0.0 .. 1.0]
     * @param {number} g - green component [0.0 .. 1.0]
     * @param {number} b - blue component [0.0 .. 1.0]
     * @param {number} [alpha=1.0] - alpha value [0.0 .. 1.0]
     * @returns {Color} Reference to this object for method chaining
     */
    setFloat(r, g, b, alpha = 1.0) {
        const a = this.glArray;
        a[0] = clamp(+r, 0, 1.0);
        a[1] = clamp(+g, 0, 1.0);
        a[2] = clamp(+b, 0, 1.0);
        a[3] = clamp(+alpha, 0, 1.0);
        return this;
    }

    /**
     * set this color to the specified HSV value
     * @param {number} h - hue (a value from 0 to 1)
     * @param {number} s - saturation (a value from 0 to 1)
     * @param {number} v - value (a value from 0 to 1)
     * @returns {Color} Reference to this object for method chaining
     */
    setHSV(h, s, v) {
        let r, g, b;

        let i = Math.floor(h * 6);
        let f = h * 6 - i;
        let p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);

        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return this.setColor(r * 255, g * 255, b * 255);
    }

    /**
     * set this color to the specified HSL value
     * @param {number} h - hue (a value from 0 to 1)
     * @param {number} s - saturation (a value from 0 to 1)
     * @param {number} l - lightness (a value from 0 to 1)
     * @returns {Color} Reference to this object for method chaining
     */
    setHSL(h, s, l) {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;

            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return this.setColor(r * 255, g * 255, b * 255);
    }

    /**
     * Create a new copy of this color object.
     * @returns {Color} Reference to the newly cloned object
     */
    clone() {
        return pool.pull("Color").copy(this);
    }

    /**
     * Copy a color object or CSS color into this one.
     * @param {Color|string} color
     * @returns {Color} Reference to this object for method chaining
     */
    copy(color) {
        if (typeof color === "string") {
            return this.parseCSS(color);
        } else {
            this.glArray.set(color.glArray);
            return this;
        }
    }

    /**
     * Blend this color with the given one using addition.
     * @param {Color} color
     * @returns {Color} Reference to this object for method chaining
     */
    add(color) {
        this.glArray[0] = clamp(this.glArray[0] + color.glArray[0], 0, 1);
        this.glArray[1] = clamp(this.glArray[1] + color.glArray[1], 0, 1);
        this.glArray[2] = clamp(this.glArray[2] + color.glArray[2], 0, 1);
        this.glArray[3] = (this.glArray[3] + color.glArray[3]) / 2;

        return this;
    }

    /**
     * Darken this color value by 0..1
     * @param {number} scale
     * @returns {Color} Reference to this object for method chaining
     */
    darken(scale) {
        scale = clamp(scale, 0, 1);
        this.glArray[0] *= scale;
        this.glArray[1] *= scale;
        this.glArray[2] *= scale;

        return this;
    }

    /**
     * Linearly interpolate between this color and the given one.
     * @param {Color} color
     * @param {number} alpha - with alpha = 0 being this color, and alpha = 1 being the given one.
     * @returns {Color} Reference to this object for method chaining
     */
    lerp(color, alpha) {
        alpha = clamp(alpha, 0, 1);
        this.glArray[0] += (color.glArray[0] - this.glArray[0]) * alpha;
        this.glArray[1] += (color.glArray[1] - this.glArray[1]) * alpha;
        this.glArray[2] += (color.glArray[2] - this.glArray[2]) * alpha;

        return this;
    }
}