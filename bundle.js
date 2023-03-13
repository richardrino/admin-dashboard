/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  background-color: rgb(245, 245, 245);\\n  font-family: Arial, Helvetica, sans-serif;\\n  color: rgb(211, 211, 211);\\n}\\n\\nul {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin: 0;\\n}\\n\\np {\\n  margin: 0;\\n}\\n\\n.page-container {\\n  display: grid;\\n  height: 100vh;\\n  grid-template-columns: [nav-start] 20% [header-start] 1fr [header-end];\\n  grid-template-rows: [page-top] auto [header-bottom] 1fr [page-bottom];\\n  max-width: 1600px;\\n  margin-inline: auto;\\n}\\n\\n.nav__container {\\n  display: grid;\\n  grid-template-rows: auto repeat(3, 1fr);\\n  max-width: 300px;\\n  padding: 1.5em;\\n  background-color: #438fd0;\\n  grid-column: nav-start/header-start;\\n  grid-row: page-top/page-bottom;\\n  font-size: 1.2rem;\\n  color: white;\\n}\\n.nav__heading-container {\\n  margin-bottom: 4rem;\\n}\\n.nav__icon {\\n  width: 1.2em;\\n  padding-right: 0.8rem;\\n  vertical-align: middle;\\n  filter: invert(1);\\n}\\n.nav__item {\\n  margin-bottom: 1.5rem;\\n  font-weight: 600;\\n  list-style: none;\\n}\\n\\n.header__container {\\n  display: grid;\\n  grid-column: header-start/header-end;\\n  grid-template-columns: 2fr 1fr;\\n  grid-template-rows: auto auto;\\n  row-gap: 1.5rem;\\n  position: relative;\\n  padding: 1.2rem 4rem;\\n  background-color: white;\\n  box-shadow: 0px 5px 10px -5px rgb(184, 184, 184);\\n  color: black;\\n}\\n\\n.search-bar__container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.2rem;\\n}\\n.search-bar__container .nav__icon {\\n  filter: none;\\n}\\n.search-bar__form {\\n  width: 100%;\\n}\\n.search-bar__input {\\n  height: 1.5rem;\\n  width: 100%;\\n  background-color: #e3e8ef;\\n  border: none;\\n  border-radius: 10px;\\n}\\n\\n.user-info__container {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  column-gap: 1rem;\\n  font-size: 1.1rem;\\n}\\n.user-info__container .nav__icon {\\n  filter: none;\\n}\\n.user-info__profile-icon {\\n  width: 2rem;\\n  aspect-ratio: 1/1;\\n  background-size: contain;\\n  background-position: center;\\n  border: 1px solid black;\\n  border-radius: 2rem;\\n}\\n.user-info__profile-icon--trending {\\n  grid-column: 1/2;\\n  grid-row: 1/3;\\n  width: 2rem;\\n  aspect-ratio: 1/1;\\n  border: 1px solid black;\\n  border-radius: 2rem;\\n}\\n.user-info__name {\\n  font-weight: 600;\\n}\\n\\n.user-intro__container {\\n  display: grid;\\n  grid-template-columns: auto 2fr;\\n  grid-template-rows: 1fr 1fr;\\n  column-gap: 1rem;\\n}\\n.user-intro__profile-icon {\\n  grid-row: 1/3;\\n  width: 4rem;\\n  aspect-ratio: 1/1;\\n  background-size: contain;\\n  background-position: center;\\n  border: 1px solid black;\\n  border-radius: 4rem;\\n}\\n.user-intro__line {\\n  display: flex;\\n  align-items: center;\\n}\\n.user-intro__name {\\n  display: flex;\\n  align-items: center;\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n}\\n\\n.button {\\n  width: 7em;\\n  padding: 0.7rem 0rem;\\n  background-color: #438fd0;\\n  border: none;\\n  border-radius: 1.5rem;\\n  color: white;\\n  font-size: 0.9rem;\\n}\\n.button__container {\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  column-gap: 1rem;\\n}\\n\\n.main__container {\\n  display: grid;\\n  grid-column: header-start/page-end;\\n  grid-row: header-bottom/page-bottom;\\n  grid-template-columns: 2fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n  column-gap: 1rem;\\n  row-gap: 2rem;\\n  padding: 2rem 0rem 2rem 1rem;\\n  background-color: #e3e8ef;\\n  color: black;\\n}\\n\\n.project__container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: auto 1fr 1fr 1fr;\\n  grid-row: 1/3;\\n  gap: 1rem;\\n}\\n.project__heading {\\n  grid-column: 1/3;\\n}\\n.project__item {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  row-gap: 0.5rem;\\n  padding: 0rem 1rem;\\n  background-color: white;\\n  border-left: 8px solid #e7b742;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 5px rgb(179, 179, 179);\\n}\\n.project__description {\\n  margin-bottom: 1rem;\\n  color: grey;\\n}\\n.project__button-container {\\n  display: flex;\\n  justify-content: end;\\n  column-gap: 0.4rem;\\n}\\n.project__button-container .nav__icon {\\n  filter: none;\\n}\\n\\n.announcement__container {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-template-rows: auto 1fr;\\n}\\n.announcement__heading {\\n  margin-bottom: 1rem;\\n}\\n.announcement__inner-container {\\n  display: grid;\\n  row-gap: 1rem;\\n  padding: 2em;\\n  background-color: white;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 5px rgb(179, 179, 179);\\n}\\n.announcement__item {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 0.5rem;\\n}\\n.announcement__title {\\n  font-weight: 600;\\n}\\n.announcement__info {\\n  color: grey;\\n}\\n.announcement__line {\\n  margin-left: 0;\\n  margin-right: 0;\\n}\\n\\n.trending__container {\\n  display: grid;\\n  grid-template-rows: auto 1fr;\\n}\\n.trending__heading {\\n  margin-bottom: 1rem;\\n}\\n.trending__inner-container {\\n  display: grid;\\n  padding: 2em;\\n  background-color: white;\\n  border-radius: 1rem;\\n  box-shadow: 0 0 5px rgb(179, 179, 179);\\n}\\n.trending__item {\\n  display: flex;\\n  align-items: center;\\n  column-gap: 1rem;\\n}\\n.trending__username {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  align-items: center;\\n  font-weight: 600;\\n}\\n.trending__project-name {\\n  display: block;\\n  color: grey;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://admin-dashboard/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://admin-dashboard/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://admin-dashboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/home.svg */ \"./src/assets/home.svg\");\n/* harmony import */ var _assets_profile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/profile.svg */ \"./src/assets/profile.svg\");\n/* harmony import */ var _assets_message_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/message.svg */ \"./src/assets/message.svg\");\n/* harmony import */ var _assets_clock_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/clock.svg */ \"./src/assets/clock.svg\");\n/* harmony import */ var _assets_notes_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/notes.svg */ \"./src/assets/notes.svg\");\n/* harmony import */ var _assets_people_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/people.svg */ \"./src/assets/people.svg\");\n/* harmony import */ var _assets_cog_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/cog.svg */ \"./src/assets/cog.svg\");\n/* harmony import */ var _assets_question_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/question.svg */ \"./src/assets/question.svg\");\n/* harmony import */ var _assets_shield_check_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/shield-check.svg */ \"./src/assets/shield-check.svg\");\n/* harmony import */ var _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/magnify.svg */ \"./src/assets/magnify.svg\");\n/* harmony import */ var _assets_bell_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/bell.svg */ \"./src/assets/bell.svg\");\n/* harmony import */ var _assets_star_plus_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/star-plus.svg */ \"./src/assets/star-plus.svg\");\n/* harmony import */ var _assets_eye_plus_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/eye-plus.svg */ \"./src/assets/eye-plus.svg\");\n/* harmony import */ var _assets_share_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/share.svg */ \"./src/assets/share.svg\");\n/* harmony import */ var _assets_penguin_profile_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/penguin-profile.png */ \"./src/assets/penguin-profile.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Sidebar\r\nconst homeIcon = document.querySelector('.nav__icon[data-icon=\"home\"]');\r\nhomeIcon.src = _assets_home_svg__WEBPACK_IMPORTED_MODULE_1__;\r\nconst profileIcon = document.querySelector('.nav__icon[data-icon=\"profile\"]');\r\nprofileIcon.src = _assets_profile_svg__WEBPACK_IMPORTED_MODULE_2__;\r\nconst messageIcon = document.querySelector('.nav__icon[data-icon=\"messages\"]');\r\nmessageIcon.src = _assets_message_svg__WEBPACK_IMPORTED_MODULE_3__;\r\nconst clockIcon = document.querySelector('.nav__icon[data-icon=\"history\"]');\r\nclockIcon.src = _assets_clock_svg__WEBPACK_IMPORTED_MODULE_4__;\r\nconst notesIcon = document.querySelector('.nav__icon[data-icon=\"tasks\"]');\r\nnotesIcon.src = _assets_notes_svg__WEBPACK_IMPORTED_MODULE_5__;\r\nconst peopleIcon = document.querySelector(\r\n\t'.nav__icon[data-icon=\"communities\"]'\r\n);\r\npeopleIcon.src = _assets_people_svg__WEBPACK_IMPORTED_MODULE_6__;\r\nconst cogIcon = document.querySelector('.nav__icon[data-icon=\"settings\"]');\r\ncogIcon.src = _assets_cog_svg__WEBPACK_IMPORTED_MODULE_7__;\r\nconst questionIcon = document.querySelector('.nav__icon[data-icon=\"support\"]');\r\nquestionIcon.src = _assets_question_svg__WEBPACK_IMPORTED_MODULE_8__;\r\nconst shieldIcon = document.querySelector('.nav__icon[data-icon=\"privacy\"]');\r\nshieldIcon.src = _assets_shield_check_svg__WEBPACK_IMPORTED_MODULE_9__;\r\n\r\n// Header\r\nconst magnifyIcon = document.querySelector('.nav__icon[data-icon=\"magnify\"]');\r\nmagnifyIcon.src = _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_10__;\r\nconst bellIcon = document.querySelector('.nav__icon[data-icon=\"bell\"]');\r\nbellIcon.src = _assets_bell_svg__WEBPACK_IMPORTED_MODULE_11__;\r\nlet profilePic = document.querySelector('.user-info__profile-icon');\r\nprofilePic.style.backgroundImage = `url(\"${_assets_penguin_profile_png__WEBPACK_IMPORTED_MODULE_15__}\")`;\r\nprofilePic = document.querySelector('.user-intro__profile-icon');\r\nprofilePic.style.backgroundImage = `url(\"${_assets_penguin_profile_png__WEBPACK_IMPORTED_MODULE_15__}\")`;\r\n\r\n// Projects section\r\nconst starIconList = document.querySelectorAll('.nav__icon[data-icon=\"star\"]');\r\nconst starIcons = [...starIconList];\r\nstarIcons.forEach((starIcon) => (starIcon.src = _assets_star_plus_svg__WEBPACK_IMPORTED_MODULE_12__));\r\nconst eyeIconList = document.querySelectorAll('.nav__icon[data-icon=\"eye\"]');\r\nconst eyeIcons = [...eyeIconList];\r\neyeIcons.forEach((eyeIcon) => (eyeIcon.src = _assets_eye_plus_svg__WEBPACK_IMPORTED_MODULE_13__));\r\nconst shareIconList = document.querySelectorAll(\r\n\t'.nav__icon[data-icon=\"share\"]'\r\n);\r\nconst shareIcons = [...shareIconList];\r\nshareIcons.forEach((shareIcon) => (shareIcon.src = _assets_share_svg__WEBPACK_IMPORTED_MODULE_14__));\r\n\n\n//# sourceURL=webpack://admin-dashboard/./src/index.js?");

/***/ }),

/***/ "./src/assets/bell.svg":
/*!*****************************!*\
  !*** ./src/assets/bell.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bell.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/bell.svg?");

/***/ }),

/***/ "./src/assets/clock.svg":
/*!******************************!*\
  !*** ./src/assets/clock.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"clock.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/clock.svg?");

/***/ }),

/***/ "./src/assets/cog.svg":
/*!****************************!*\
  !*** ./src/assets/cog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cog.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/cog.svg?");

/***/ }),

/***/ "./src/assets/eye-plus.svg":
/*!*********************************!*\
  !*** ./src/assets/eye-plus.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eye-plus.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/eye-plus.svg?");

/***/ }),

/***/ "./src/assets/home.svg":
/*!*****************************!*\
  !*** ./src/assets/home.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"home.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/home.svg?");

/***/ }),

/***/ "./src/assets/magnify.svg":
/*!********************************!*\
  !*** ./src/assets/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"magnify.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/magnify.svg?");

/***/ }),

/***/ "./src/assets/message.svg":
/*!********************************!*\
  !*** ./src/assets/message.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"message.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/message.svg?");

/***/ }),

/***/ "./src/assets/notes.svg":
/*!******************************!*\
  !*** ./src/assets/notes.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"notes.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/notes.svg?");

/***/ }),

/***/ "./src/assets/penguin-profile.png":
/*!****************************************!*\
  !*** ./src/assets/penguin-profile.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"penguin-profile.png\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/penguin-profile.png?");

/***/ }),

/***/ "./src/assets/people.svg":
/*!*******************************!*\
  !*** ./src/assets/people.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"people.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/people.svg?");

/***/ }),

/***/ "./src/assets/profile.svg":
/*!********************************!*\
  !*** ./src/assets/profile.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"profile.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/profile.svg?");

/***/ }),

/***/ "./src/assets/question.svg":
/*!*********************************!*\
  !*** ./src/assets/question.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"question.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/question.svg?");

/***/ }),

/***/ "./src/assets/share.svg":
/*!******************************!*\
  !*** ./src/assets/share.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"share.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/share.svg?");

/***/ }),

/***/ "./src/assets/shield-check.svg":
/*!*************************************!*\
  !*** ./src/assets/shield-check.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"shield-check.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/shield-check.svg?");

/***/ }),

/***/ "./src/assets/star-plus.svg":
/*!**********************************!*\
  !*** ./src/assets/star-plus.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"star-plus.svg\";\n\n//# sourceURL=webpack://admin-dashboard/./src/assets/star-plus.svg?");

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/admin-dashboard/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;