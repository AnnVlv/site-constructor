/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#app {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.content {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    left: 280px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 280px;\\r\\n    z-index: 100;\\r\\n    padding: 10px;\\r\\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\\r\\n    overflow-y: auto;\\r\\n}\\r\\n\\r\\nform {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/1.png":
/*!**************************!*\
  !*** ./src/assets/1.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b185fbb4795c815e8fef3603b3985870.png\");\n\n//# sourceURL=webpack:///./src/assets/1.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"site\", function() { return site; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _site_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site/site */ \"./src/site/site.js\");\n/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar */ \"./src/sidebar/sidebar.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nconst renderSite = () => site.render(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"])\r\n\r\nconst site = new _site_site__WEBPACK_IMPORTED_MODULE_1__[\"Site\"]('#site')\r\nrenderSite()\r\n\r\nconst sidebar = new _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"Sidebar\"]('#panel', {\r\n    next: renderSite\r\n})\r\nsidebar.init()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony import */ var _assets_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/1.png */ \"./src/assets/1.png\");\n/* harmony import */ var _site_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site/classes */ \"./src/site/classes/index.js\");\n\r\n\r\n\r\nconst model = [\r\n    new _site_classes__WEBPACK_IMPORTED_MODULE_1__[\"TitleBlock\"]('JS site\\'s constructor', {\r\n        styles: 'background: darkred; color: white; padding: 20px; text-align: center;',\r\n        tag: 'h1'\r\n    }),\r\n    new _site_classes__WEBPACK_IMPORTED_MODULE_1__[\"TextBlock\"]('Text', {\r\n        styles: 'background: yellow; color: darkred; padding: 5px;'\r\n    }),\r\n    new _site_classes__WEBPACK_IMPORTED_MODULE_1__[\"TextColumnsBlock\"]([\r\n        'Col 1',\r\n        'Col 2',\r\n        'Col 3'\r\n    ], {\r\n        styles: 'padding-top: 10px;'\r\n    }),\r\n    new _site_classes__WEBPACK_IMPORTED_MODULE_1__[\"ImageBlock\"](_assets_1_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n        styles: 'padding: 10px; margin-top: 20px; text-align: center;',\r\n        imgStyles: 'width: 200px; height: auto;',\r\n        alt: 'my-image'\r\n    })\r\n]\r\n\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/sidebar/classes/image.js":
/*!**************************************!*\
  !*** ./src/sidebar/classes/image.js ***!
  \**************************************/
/*! exports provided: ImageForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageForm\", function() { return ImageForm; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types.js\");\n\r\n\r\n\r\nclass ImageForm {\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"form\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].image, 'Image', [\r\n            {\r\n                name: 'value', \r\n                placeholder: 'Value', \r\n                value: 'https://www.google.com/logos/doodles/2020/ukraine-independence-day-2020-6753651837108509-s.png',\r\n            },\r\n            {\r\n                name: 'styles', \r\n                placeholder: 'Styles',\r\n                value: 'padding: 10px;',\r\n            },\r\n            {\r\n                name: 'alt', \r\n                placeholder: 'Alt',\r\n                value: 'test-alt',\r\n            },\r\n            {\r\n                name: 'imageStyles', \r\n                placeholder: 'Image Styles',\r\n                value: 'width: 200px; height: aut0;',\r\n            },\r\n        ])\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/classes/image.js?");

/***/ }),

/***/ "./src/sidebar/classes/index.js":
/*!**************************************!*\
  !*** ./src/sidebar/classes/index.js ***!
  \**************************************/
/*! exports provided: TextForm, TitleForm, TextColumnsForm, ImageForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/sidebar/classes/text.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextForm\", function() { return _text__WEBPACK_IMPORTED_MODULE_0__[\"TextForm\"]; });\n\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ \"./src/sidebar/classes/title.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TitleForm\", function() { return _title__WEBPACK_IMPORTED_MODULE_1__[\"TitleForm\"]; });\n\n/* harmony import */ var _textColumns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textColumns */ \"./src/sidebar/classes/textColumns.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextColumnsForm\", function() { return _textColumns__WEBPACK_IMPORTED_MODULE_2__[\"TextColumnsForm\"]; });\n\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ \"./src/sidebar/classes/image.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImageForm\", function() { return _image__WEBPACK_IMPORTED_MODULE_3__[\"ImageForm\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/sidebar/classes/index.js?");

/***/ }),

/***/ "./src/sidebar/classes/text.js":
/*!*************************************!*\
  !*** ./src/sidebar/classes/text.js ***!
  \*************************************/
/*! exports provided: TextForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextForm\", function() { return TextForm; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types.js\");\n\r\n\r\n\r\nclass TextForm {\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"form\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].text, 'Text', [\r\n            {\r\n                name: 'value', \r\n                placeholder: 'Value',\r\n                value: 'Some text...',\r\n            },\r\n            {\r\n                name: 'styles', \r\n                placeholder: 'Styles',\r\n                value: 'color: darkblue;',\r\n            },\r\n        ])\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/classes/text.js?");

/***/ }),

/***/ "./src/sidebar/classes/textColumns.js":
/*!********************************************!*\
  !*** ./src/sidebar/classes/textColumns.js ***!
  \********************************************/
/*! exports provided: TextColumnsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextColumnsForm\", function() { return TextColumnsForm; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types.js\");\n\r\n\r\n\r\nclass TextColumnsForm {\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"form\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].textColumns, 'Text Columns', [\r\n            {\r\n                name: 'value', \r\n                placeholder: 'Value',\r\n                value: 'Col 1; Col 2',\r\n            },\r\n            {\r\n                name: 'styles', \r\n                placeholder: 'Styles',\r\n                value: 'margin-top: 20px',\r\n            },\r\n        ])\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/classes/textColumns.js?");

/***/ }),

/***/ "./src/sidebar/classes/title.js":
/*!**************************************!*\
  !*** ./src/sidebar/classes/title.js ***!
  \**************************************/
/*! exports provided: TitleForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleForm\", function() { return TitleForm; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types */ \"./src/types.js\");\n\r\n\r\n\r\nclass TitleForm {\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"form\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].title, 'Title', [\r\n            {\r\n                name: 'value', \r\n                placeholder: 'Value',\r\n                value: 'Title Example',\r\n            },\r\n            {\r\n                \r\n                name: 'styles', \r\n                placeholder: 'Styles',\r\n                value: 'color: darkred;',\r\n            },\r\n            {\r\n                name: 'tag', \r\n                placeholder: 'Tag',\r\n                value: 'h2',\r\n            },\r\n        ])\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/classes/title.js?");

/***/ }),

/***/ "./src/sidebar/forms.js":
/*!******************************!*\
  !*** ./src/sidebar/forms.js ***!
  \******************************/
/*! exports provided: FORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FORMS\", function() { return FORMS; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/sidebar/classes/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./src/types.js\");\n\r\n\r\n\r\nconst FORMS = {\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].text]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TextForm\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].title]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TitleForm\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].textColumns]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TextColumnsForm\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].image]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"ImageForm\"]\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/forms.js?");

/***/ }),

/***/ "./src/sidebar/sidebar.js":
/*!********************************!*\
  !*** ./src/sidebar/sidebar.js ***!
  \********************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ \"./src/model.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ \"./src/sidebar/forms.js\");\n/* harmony import */ var _site_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site/blocks */ \"./src/site/blocks.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"./src/types.js\");\n\r\n\r\n\r\n\r\n\r\nclass Sidebar {\r\n    get template() {\r\n        const forms = []\r\n\r\n        for (const key in _forms__WEBPACK_IMPORTED_MODULE_1__[\"FORMS\"]) {\r\n            console.log((new _forms__WEBPACK_IMPORTED_MODULE_1__[\"FORMS\"][key]).toHTML())\r\n            forms.push((new _forms__WEBPACK_IMPORTED_MODULE_1__[\"FORMS\"][key]).toHTML())\r\n        }\r\n\r\n        return forms.join('')\r\n    }\r\n\r\n    constructor(selector, subscriber) {\r\n        this.$el = document.querySelector(selector)\r\n        this.subscriber = subscriber\r\n    }\r\n\r\n    init() {\r\n        this.$el.addEventListener('submit', this.addBlock.bind(this))\r\n        this.$el.innerHTML = this.template\r\n    }\r\n\r\n    addBlock(event) {\r\n        event.preventDefault()\r\n\r\n        const {target} = event\r\n\r\n        let {\r\n            name: type, \r\n            value: {value}, \r\n            styles: {value: styles}\r\n        } = target\r\n\r\n        let tag = ''\r\n        let alt = ''\r\n        let imageStyles = ''\r\n\r\n        switch (type) {\r\n            case _types__WEBPACK_IMPORTED_MODULE_3__[\"TYPES\"].title:\r\n                tag = target.tag.value ? target.tag.value : 'h1'\r\n                break\r\n            case _types__WEBPACK_IMPORTED_MODULE_3__[\"TYPES\"].image:\r\n                alt = target.alt.value\r\n                imageStyles = target.imageStyles.value\r\n                break\r\n            case _types__WEBPACK_IMPORTED_MODULE_3__[\"TYPES\"].textColumns:\r\n                value = value.split(';')\r\n                break\r\n        }\r\n    \r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].push(new _site_blocks__WEBPACK_IMPORTED_MODULE_2__[\"BLOCKS\"][type](value, {styles, tag, alt, imageStyles}))\r\n        this.subscriber.next()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/sidebar/sidebar.js?");

/***/ }),

/***/ "./src/site/blocks.js":
/*!****************************!*\
  !*** ./src/site/blocks.js ***!
  \****************************/
/*! exports provided: BLOCKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BLOCKS\", function() { return BLOCKS; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./src/site/classes/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./src/types.js\");\n\r\n\r\n\r\nconst BLOCKS = {\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].text]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TextBlock\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].title]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TitleBlock\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].textColumns]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"TextColumnsBlock\"],\r\n    [_types__WEBPACK_IMPORTED_MODULE_1__[\"TYPES\"].image]: _classes__WEBPACK_IMPORTED_MODULE_0__[\"ImageBlock\"]\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/blocks.js?");

/***/ }),

/***/ "./src/site/classes/block.js":
/*!***********************************!*\
  !*** ./src/site/classes/block.js ***!
  \***********************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Block\", function() { return Block; });\nclass Block {\r\n    constructor(value, options) {\r\n        this.value = value\r\n        this.options = options\r\n    }\r\n\r\n    toHTML() {\r\n        throw new Error('Error!')\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/classes/block.js?");

/***/ }),

/***/ "./src/site/classes/image.js":
/*!***********************************!*\
  !*** ./src/site/classes/image.js ***!
  \***********************************/
/*! exports provided: ImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageBlock\", function() { return ImageBlock; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/site/classes/block.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass ImageBlock extends _block__WEBPACK_IMPORTED_MODULE_0__[\"Block\"] {\r\n    toHTML() {\r\n        const {alt, styles, imgStyles} = this.options\r\n\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"row\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"col\"])(`\r\n            <img src=${this.value} alt=${alt} style=\"${imgStyles}\"/>\r\n        `), styles)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/classes/image.js?");

/***/ }),

/***/ "./src/site/classes/index.js":
/*!***********************************!*\
  !*** ./src/site/classes/index.js ***!
  \***********************************/
/*! exports provided: TextBlock, TitleBlock, TextColumnsBlock, ImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ \"./src/site/classes/text.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextBlock\", function() { return _text__WEBPACK_IMPORTED_MODULE_0__[\"TextBlock\"]; });\n\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ \"./src/site/classes/title.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TitleBlock\", function() { return _title__WEBPACK_IMPORTED_MODULE_1__[\"TitleBlock\"]; });\n\n/* harmony import */ var _textColumns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textColumns */ \"./src/site/classes/textColumns.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextColumnsBlock\", function() { return _textColumns__WEBPACK_IMPORTED_MODULE_2__[\"TextColumnsBlock\"]; });\n\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ \"./src/site/classes/image.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImageBlock\", function() { return _image__WEBPACK_IMPORTED_MODULE_3__[\"ImageBlock\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/site/classes/index.js?");

/***/ }),

/***/ "./src/site/classes/text.js":
/*!**********************************!*\
  !*** ./src/site/classes/text.js ***!
  \**********************************/
/*! exports provided: TextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBlock\", function() { return TextBlock; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/site/classes/block.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass TextBlock extends _block__WEBPACK_IMPORTED_MODULE_0__[\"Block\"] {\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"row\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"col\"])(`\r\n            <p style=\"${this.options.styles}\">${this.value}</p>\r\n        `), this.options.styles)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/classes/text.js?");

/***/ }),

/***/ "./src/site/classes/textColumns.js":
/*!*****************************************!*\
  !*** ./src/site/classes/textColumns.js ***!
  \*****************************************/
/*! exports provided: TextColumnsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextColumnsBlock\", function() { return TextColumnsBlock; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/site/classes/block.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass TextColumnsBlock extends _block__WEBPACK_IMPORTED_MODULE_0__[\"Block\"] {\r\n    toHTML() {\r\n        const rows = this.value.map(item => Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"col\"])(item))\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"row\"])(rows.join(''), this.options.styles)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/classes/textColumns.js?");

/***/ }),

/***/ "./src/site/classes/title.js":
/*!***********************************!*\
  !*** ./src/site/classes/title.js ***!
  \***********************************/
/*! exports provided: TitleBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleBlock\", function() { return TitleBlock; });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/site/classes/block.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ \"./src/utils.js\");\n\r\n\r\n\r\nclass TitleBlock extends _block__WEBPACK_IMPORTED_MODULE_0__[\"Block\"] {\r\n    toHTML() {\r\n        const {tag, styles} = this.options\r\n\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"row\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"col\"])(`\r\n            <${tag}>${this.value}</${tag}>\r\n        `), styles)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/classes/title.js?");

/***/ }),

/***/ "./src/site/site.js":
/*!**************************!*\
  !*** ./src/site/site.js ***!
  \**************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Site\", function() { return Site; });\nclass Site {\r\n    constructor(selector) {\r\n        this.$el = document.querySelector(selector)\r\n    }\r\n\r\n    render(model) {\r\n        this.$el.innerHTML = ''\r\n        \r\n        model.forEach(item => {\r\n            this.$el.insertAdjacentHTML('beforeend', item.toHTML())\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/site/site.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/*! exports provided: TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TYPES\", function() { return TYPES; });\nconst TYPES = {\r\n    text: 'text',\r\n    title: 'title',\r\n    textColumns: 'textColumns',\r\n    image: 'image'\r\n}\r\n\n\n//# sourceURL=webpack:///./src/types.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: row, col, form, formGroups, formGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"row\", function() { return row; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col\", function() { return col; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formGroups\", function() { return formGroups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formGroup\", function() { return formGroup; });\n/* Site */\r\n\r\nconst row = (text, styles = '') => `\r\n    <div class=\"row\" style=\"${styles}\">\r\n        ${text}\r\n    </div>\r\n`\r\n\r\nconst col = (text, styles = '') => `\r\n    <div class=\"col-sm\" style=\"${styles}\">\r\n        ${text}\r\n    </div>\r\n`\r\n\r\n/* Sidebar */\r\n\r\nconst form = (name, title, controls) => `\r\n    <h3>${title}</h3>\r\n    <form name=\"${name}\">\r\n        ${formGroups(controls)}\r\n        <button type=\"submit\" class=\"btn btn-dark\">Add</button>\r\n    </form>\r\n`\r\n\r\nconst formGroups = controls => {\r\n    let formGroupsHTML = ''\r\n    controls.forEach(control => formGroupsHTML += formGroup(control))\r\n    return formGroupsHTML\r\n}\r\n\r\nconst formGroup = ({name, placeholder = '', value = ''}) => `\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" \r\n                class=\"form-control\" \r\n                name=\"${name}\" \r\n                placeholder=\"${placeholder}\"\r\n                value=\"${value}\">\r\n    </div>\r\n`\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });