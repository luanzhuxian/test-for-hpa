/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


console.log(_a__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var a = 123456;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eureka_hybrid_portal_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _eureka_hybrid_portal_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eureka_hybrid_portal_adapter__WEBPACK_IMPORTED_MODULE_0__);

console.log((_eureka_hybrid_portal_adapter__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @eureka/hybrid-portal-adapter v1.0.0
 * Copyright (c) 2023 I566470 <zhuxian.luan@sap.com>
 * @license MIT
 */



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var react = __webpack_require__(4);
var LuigiClient = __webpack_require__(8);
var reactRouterDom = __webpack_require__(9);
var ENV_DXP = 'dxp';
var ENV_STANDALONE = 'stand_alone';
var globalEnv = '';
var getEnv = function getEnv() {
  return globalEnv;
};
var setEnv = function setEnv(val) {
  if (val === ENV_DXP || val === ENV_STANDALONE) {
    globalEnv = val;
  } else {
    console.warn("Illegal enviroment value! Expect to be 'dxp' or 'stand_alone'.");
  }
};
var isDxp = function isDxp() {
  return globalEnv === ENV_DXP;
};

/* eslint-disable no-continue */

var isDxpCtx = isDxp();
var decode = function decode(val) {
  return decodeURIComponent(val.replace(/\+/g, ' '));
};
var useGetPathParams = function useGetPathParams() {
  var pathInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _react$useState = react.useState(false),
    _react$useState2 = _slicedToArray(_react$useState, 2),
    loaded = _react$useState2[0],
    setLoaded = _react$useState2[1];
  var _react$useState3 = react.useState(),
    _react$useState4 = _slicedToArray(_react$useState3, 2),
    pathParams = _react$useState4[0],
    setPathParams = _react$useState4[1];
  var getLocalParams = react.useCallback(function () {
    var _pathInfo$params = pathInfo.params,
      params = _pathInfo$params === void 0 ? {} : _pathInfo$params;
    setPathParams(params);
    setLoaded(true);
  }, [pathInfo]);
  var getDxpParams = react.useCallback(function () {
    var _pathInfo$path = pathInfo.path,
      path = _pathInfo$path === void 0 ? '' : _pathInfo$path;
    var pathSegments = path.split('/').filter(Boolean);
    var pathParams = LuigiClient.getPathParams();
    var i = 0;
    var j = 1;
    var len = pathSegments.length;
    var params = {};
    while (i < len) {
      var currentPath = pathSegments[i];
      var vs = Reflect.get(pathParams, "virtualSegment_".concat(j));
      if (vs === '#') {
        j++;
        continue;
      }
      if (currentPath.startsWith(':')) {
        var key = currentPath.slice(1);
        if (key && vs) {
          Reflect.set(params, key, decode(vs));
        }
      } else if (currentPath === vs) {
        j++;
      }
      i++;
    }
    params = _objectSpread(_objectSpread({}, params), pathParams);
    if (params && Object.keys(params).length) {
      setPathParams(params);
      setLoaded(true);
    }
  }, [pathInfo]);
  react.useEffect(function () {
    if (loaded) {
      return;
    }
    isDxpCtx ? getDxpParams() : getLocalParams();
  }, [loaded, getDxpParams, getLocalParams]);
  return {
    loaded: loaded,
    pathParams: pathParams
  };
};
var useGetPathParams$1 = useGetPathParams;
var isVoid = function isVoid(value) {
  return value === undefined || value === null || value === '';
};
var getCleanObj = function getCleanObj(object) {
  if (!object) {
    return {};
  }
  var result = _objectSpread({}, object);
  Object.keys(result).forEach(function (key) {
    var value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
var getSubset = function getSubset(obj, keys) {
  var filteredEntries = Object.entries(obj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];
    return keys.includes(key);
  });
  return Object.fromEntries(filteredEntries);
};
var createSearchParams = function createSearchParams() {
  var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new URLSearchParams(typeof init === 'string' || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce(function (memo, key) {
    var value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(function (v) {
      return [key, v];
    }) : [[key, value]]);
  }, []));
};
var useGetSearchParams$2 = function useGetSearchParams$2() {
  var searchKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var location = reactRouterDom.useLocation();
  var _react$useState5 = react.useState(false),
    _react$useState6 = _slicedToArray(_react$useState5, 2),
    loaded = _react$useState6[0],
    setLoaded = _react$useState6[1];
  var _react$useState7 = react.useState(0),
    _react$useState8 = _slicedToArray(_react$useState7, 2),
    retry = _react$useState8[0],
    setRetry = _react$useState8[1];
  var _react$useState9 = react.useState({}),
    _react$useState10 = _slicedToArray(_react$useState9, 2),
    searchParams = _react$useState10[0],
    setSearchParams = _react$useState10[1];
  var _react$useState11 = react.useState({}),
    _react$useState12 = _slicedToArray(_react$useState11, 2),
    iframeParams = _react$useState12[0],
    setIframeParams = _react$useState12[1];
  var _react$useState13 = react.useState(searchKeys),
    _react$useState14 = _slicedToArray(_react$useState13, 1),
    localSearchKeys = _react$useState14[0];
  var hasSearchKeys = react.useMemo(function () {
    return !!(localSearchKeys !== null && localSearchKeys !== void 0 && localSearchKeys.length);
  }, [localSearchKeys]);
  var hasIframeParams = react.useMemo(function () {
    return !!Object.keys(iframeParams).length;
  }, [iframeParams]);
  var getSearchParams = react.useCallback(function (search) {
    var searchParams = new URLSearchParams(search);
    var params = Object.fromEntries(searchParams);
    return localSearchKeys !== null && localSearchKeys !== void 0 && localSearchKeys.length ? getSubset(params, localSearchKeys) : params;
  }, [localSearchKeys]);
  var checkParams = react.useCallback(function (params) {
    if (!params || !Object.keys(params).length) {
      return false;
    }
    if (hasSearchKeys) {
      // let result = true;
      // for (const key of localSearchKeys) {
      //   if (!Reflect.has(params, key)) {
      //     result = false;
      //   }
      // }
      return true;
    }
    return true;
  }, [hasSearchKeys]);

  // For iframe url
  var getIframeSearchParams = react.useCallback(function () {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.search;
    var params = getSearchParams(search);
    setSearchParams(params);
    setLoaded(true);
  }, [getSearchParams, location.search]);

  // For DXP url
  var getDxpSearchParams = react.useCallback(function () {
    var params = LuigiClient.getNodeParams(true);
    if (checkParams(params)) {
      setSearchParams(_objectSpread({}, params));
      setLoaded(true);
    } else {
      setRetry(function (prev) {
        return prev + 1;
      });
    }
  }, [checkParams]);
  react.useEffect(function () {
    var params = getSearchParams(location.search);
    setIframeParams(params);
  }, [location.search, getSearchParams]);
  react.useEffect(function () {
    if (hasIframeParams) {
      getIframeSearchParams();
    } else {
      setLoaded(false);
      setRetry(0);
    }
  }, [hasIframeParams, getIframeSearchParams]);
  react.useEffect(function () {
    if (loaded) {
      return;
    }
    if (retry >= 5) {
      setLoaded(true);
      return;
    }
    getDxpSearchParams();
  }, [loaded, retry, getDxpSearchParams]);

  // useEffect(() => {
  //   const id = helper.addEventListener('hashchange', (evt) => {
  //     const search = evt.location.hash.split('?')[1];
  //     if (search) {
  //       const params = getSearchParams(search);
  //       setSearchParams(params);
  //     }
  //   });
  //   return () => {
  //     helper.removeEventListener(id);
  //   };
  // }, [getSearchParams]);

  return {
    loaded: loaded,
    setLoaded: setLoaded,
    searchParams: searchParams
  };
};
var useGetSearchParams$3 = useGetSearchParams$2;
var useSearchParams = function useSearchParams(defaultInit) {
  var location = reactRouterDom.useLocation();
  var history = reactRouterDom.useHistory();
  var defaultSearchParamsRef = react.useRef(createSearchParams(defaultInit));
  var searchParams = react.useMemo(function () {
    var searchParams = createSearchParams(location.search);
    var _iterator = _createForOfIteratorHelper(defaultSearchParamsRef.current.keys()),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!searchParams.has(key)) {
          defaultSearchParamsRef.current.getAll(key).forEach(function (value) {
            searchParams.append(key, value);
          });
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return searchParams;
  }, [location.search]);
  var setSearchParams = react.useCallback(function (nextInit, navigateOptions) {
    if (navigateOptions !== null && navigateOptions !== void 0 && navigateOptions.replace) {
      history.replace("?".concat(createSearchParams(nextInit)), navigateOptions === null || navigateOptions === void 0 ? void 0 : navigateOptions.state);
    } else {
      history.push("?".concat(createSearchParams(nextInit)), navigateOptions === null || navigateOptions === void 0 ? void 0 : navigateOptions.state);
    }
  }, [history]);
  return [searchParams, setSearchParams];
};
var useSearchParams$1 = useSearchParams;
var useGetSearchParams = function useGetSearchParams() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _useSearchParams$ = useSearchParams$1(),
    _useSearchParams$2 = _slicedToArray(_useSearchParams$, 2),
    searchParams = _useSearchParams$2[0],
    setSearchParams = _useSearchParams$2[1];
  var _react$useState15 = react.useState(keys),
    _react$useState16 = _slicedToArray(_react$useState15, 1),
    searchKeys = _react$useState16[0];
  return [react.useMemo(function () {
    var params = Object.fromEntries(searchParams);
    return searchKeys !== null && searchKeys !== void 0 && searchKeys.length ? getSubset(params, searchKeys) : params;
  }, [searchParams, searchKeys]), react.useCallback(function (params) {
    var o = getCleanObj(_objectSpread(_objectSpread({}, Object.fromEntries(searchParams)), params));
    return setSearchParams(o);
  }, [searchParams, setSearchParams])];
};
var useGetSearchParams$1 = useGetSearchParams;
var useMixSearchParams = function useMixSearchParams() {
  var searchKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var location = reactRouterDom.useLocation();
  var _react$useState17 = react.useState(false),
    _react$useState18 = _slicedToArray(_react$useState17, 2),
    isLoaded = _react$useState18[0],
    setIsLoaded = _react$useState18[1];
  var _react$useState19 = react.useState(),
    _react$useState20 = _slicedToArray(_react$useState19, 2),
    params = _react$useState20[0],
    setParams = _react$useState20[1];
  var _useGetSearchParams$ = useGetSearchParams$3(searchKeys),
    loaded = _useGetSearchParams$.loaded,
    searchParams1 = _useGetSearchParams$.searchParams;
  var _useGetSearchParams$2 = useGetSearchParams$1(searchKeys),
    _useGetSearchParams$3 = _slicedToArray(_useGetSearchParams$2, 2),
    searchParams2 = _useGetSearchParams$3[0],
    setSearchParams = _useGetSearchParams$3[1];
  react.useEffect(function () {
    if (isLoaded) {
      return;
    }
    if (loaded && searchParams1) {
      setParams(searchParams1);
      setIsLoaded(true);
    }
  }, [isLoaded, loaded, searchParams1]);
  react.useEffect(function () {
    if (isLoaded) {
      return;
    }
    if (searchParams2 && searchParams2.tab) {
      setParams(searchParams2);
      setIsLoaded(true);
    }
  }, [isLoaded, searchParams2]);
  react.useEffect(function () {
    setIsLoaded(false);
  }, [location.search]);
  return {
    isLoaded: isLoaded,
    setIsLoaded: setIsLoaded,
    searchParams: params,
    setSearchParams: setSearchParams
  };
};
var useMixSearchParams$1 = useMixSearchParams;
var hooks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useGetPathParams: useGetPathParams$1,
  useGetSearchParams: useGetSearchParams$3,
  useMixSearchParams: useMixSearchParams$1,
  useSearchParams: useGetSearchParams$1
});

// import components from './src/components';

var hpa = {
  hooks: hooks,
  getEnv: getEnv,
  setEnv: setEnv,
  isDxp: isDxp
};
module.exports = hpa;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest_for_hpa"] = self["webpackChunktest_for_hpa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [1], () => (__webpack_require__(0)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;