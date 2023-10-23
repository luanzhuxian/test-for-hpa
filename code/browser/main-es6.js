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



var react = __webpack_require__(4);
var LuigiClient = __webpack_require__(8);
var reactRouterDom = __webpack_require__(9);

const ENV_DXP = 'dxp';
const ENV_STANDALONE = 'stand_alone';

let globalEnv = '';

const getEnv = () => globalEnv;

const setEnv = (val) => {
  if (val === ENV_DXP || val === ENV_STANDALONE) {
    globalEnv = val;
  } else {
    console.warn(`Illegal enviroment value! Expect to be 'dxp' or 'stand_alone'.`);
  }
};

const isDxp = () => globalEnv === ENV_DXP;

/* eslint-disable no-continue */

const isDxpCtx = isDxp();

const decode = (val) => decodeURIComponent(val.replace(/\+/g, ' '));

const useGetPathParams = (pathInfo = {}) => {
  const [loaded, setLoaded] = react.useState(false);
  const [pathParams, setPathParams] = react.useState();

  const getLocalParams = react.useCallback(() => {
    const { params = {} } = pathInfo;
    setPathParams(params);
    setLoaded(true);
  }, [pathInfo]);

  const getDxpParams = react.useCallback(() => {
    const { path = '' } = pathInfo;
    const pathSegments = path.split('/').filter(Boolean);
    const pathParams = LuigiClient.getPathParams();

    let i = 0;
    let j = 1;
    const len = pathSegments.length;
    let params = {};
    while (i < len) {
      const currentPath = pathSegments[i];
      const vs = Reflect.get(pathParams, `virtualSegment_${j}`);
      if (vs === '#') {
        j++;
        continue;
      }
      if (currentPath.startsWith(':')) {
        const key = currentPath.slice(1);
        if (key && vs) {
          Reflect.set(params, key, decode(vs));
        }
      } else if (currentPath === vs) {
        j++;
      }
      i++;
    }
    params = {
      ...params,
      ...pathParams,
    };
    if (params && Object.keys(params).length) {
      setPathParams(params);
      setLoaded(true);
    }
  }, [pathInfo]);

  react.useEffect(() => {
    if (loaded) {
      return;
    }
    isDxpCtx ? getDxpParams() : getLocalParams();
  }, [loaded, getDxpParams, getLocalParams]);

  return {
    loaded,
    pathParams,
  };
};

var useGetPathParams$1 = useGetPathParams;

const isVoid = (value) => value === undefined || value === null || value === '';

const getCleanObj = (object) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

const getSubset = (obj, keys) => {
  const filteredEntries = Object.entries(obj).filter(([key]) => keys.includes(key));
  return Object.fromEntries(filteredEntries);
};

const createSearchParams = (init = '') => {
  return new URLSearchParams(
    typeof init === 'string' || Array.isArray(init) || init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo, key) => {
          const value = init[key];
          return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
        }, []),
  );
};

const useGetSearchParams$2 = (searchKeys = []) => {
  const location = reactRouterDom.useLocation();
  const [loaded, setLoaded] = react.useState(false);
  const [retry, setRetry] = react.useState(0);
  const [searchParams, setSearchParams] = react.useState({});
  const [iframeParams, setIframeParams] = react.useState({});
  const [localSearchKeys] = react.useState(searchKeys);
  const hasSearchKeys = react.useMemo(() => !!localSearchKeys?.length, [localSearchKeys]);
  const hasIframeParams = react.useMemo(() => !!Object.keys(iframeParams).length, [iframeParams]);

  const getSearchParams = react.useCallback(
    (search) => {
      const searchParams = new URLSearchParams(search);
      const params = Object.fromEntries(searchParams);
      return localSearchKeys?.length ? getSubset(params, localSearchKeys) : params;
    },
    [localSearchKeys],
  );

  const checkParams = react.useCallback(
    (params) => {
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
    },
    [hasSearchKeys],
  );

  // For iframe url
  const getIframeSearchParams = react.useCallback(
    (search = location.search) => {
      const params = getSearchParams(search);
      setSearchParams(params);
      setLoaded(true);
    },
    [getSearchParams, location.search],
  );

  // For DXP url
  const getDxpSearchParams = react.useCallback(() => {
    const params = LuigiClient.getNodeParams(true);
    if (checkParams(params)) {
      setSearchParams({ ...params });
      setLoaded(true);
    } else {
      setRetry((prev) => prev + 1);
    }
  }, [checkParams]);

  react.useEffect(() => {
    const params = getSearchParams(location.search);
    setIframeParams(params);
  }, [location.search, getSearchParams]);

  react.useEffect(() => {
    if (hasIframeParams) {
      getIframeSearchParams();
    } else {
      setLoaded(false);
      setRetry(0);
    }
  }, [hasIframeParams, getIframeSearchParams]);

  react.useEffect(() => {
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
    loaded,
    setLoaded,
    searchParams,
  };
};

var useGetSearchParams$3 = useGetSearchParams$2;

const useSearchParams = (defaultInit) => {
  const location = reactRouterDom.useLocation();
  const history = reactRouterDom.useHistory();
  const defaultSearchParamsRef = react.useRef(createSearchParams(defaultInit));

  const searchParams = react.useMemo(() => {
    const searchParams = createSearchParams(location.search);
    for (const key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    }
    return searchParams;
  }, [location.search]);

  const setSearchParams = react.useCallback(
    (nextInit, navigateOptions) => {
      if (navigateOptions?.replace) {
        history.replace(`?${createSearchParams(nextInit)}`, navigateOptions?.state);
      } else {
        history.push(`?${createSearchParams(nextInit)}`, navigateOptions?.state);
      }
    },
    [history],
  );

  return [searchParams, setSearchParams];
};

var useSearchParams$1 = useSearchParams;

const useGetSearchParams = (keys = []) => {
  const [searchParams, setSearchParams] = useSearchParams$1();
  const [searchKeys] = react.useState(keys);
  return [
    react.useMemo(() => {
      const params = Object.fromEntries(searchParams);
      return searchKeys?.length ? getSubset(params, searchKeys) : params;
    }, [searchParams, searchKeys]),
    react.useCallback(
      (params) => {
        const o = getCleanObj({
          ...Object.fromEntries(searchParams),
          ...params,
        });
        return setSearchParams(o);
      },
      [searchParams, setSearchParams],
    ),
  ];
};

var useGetSearchParams$1 = useGetSearchParams;

const useMixSearchParams = (searchKeys = []) => {
  const location = reactRouterDom.useLocation();
  const [isLoaded, setIsLoaded] = react.useState(false);
  const [params, setParams] = react.useState();
  const { loaded, searchParams: searchParams1 } = useGetSearchParams$3(searchKeys);
  const [searchParams2, setSearchParams] = useGetSearchParams$1(searchKeys);

  react.useEffect(() => {
    if (isLoaded) {
      return;
    }
    if (loaded && searchParams1) {
      setParams(searchParams1);
      setIsLoaded(true);
    }
  }, [isLoaded, loaded, searchParams1]);

  react.useEffect(() => {
    if (isLoaded) {
      return;
    }
    if (searchParams2 && searchParams2.tab) {
      setParams(searchParams2);
      setIsLoaded(true);
    }
  }, [isLoaded, searchParams2]);

  react.useEffect(() => {
    setIsLoaded(false);
  }, [location.search]);

  return {
    isLoaded,
    setIsLoaded,
    searchParams: params,
    setSearchParams,
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

const hpa = {
  hooks,
  getEnv,
  setEnv,
  isDxp,
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