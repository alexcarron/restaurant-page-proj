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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Alexander Carron - INSERT DATE */\\n:root {\\n\\t--most-light-color: #FFFFFF;\\n\\t--very-light-color: #E6E6E6;\\n\\t--call-to-action-color: #ffbf00;\\n\\t--bright-color: #2957c2;\\n\\t--light-color: #3055aa;\\n\\t--dark-color: #265471;\\n\\t--very-dark-color: #343434;\\n\\t--most-dark-color: #000000;\\n}\\n\\nhtml {\\n\\tbackground: var(--very-light-color);\\n\\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n}\\n\\nbody\\n\\n/* ^ HEADER */\\nheader {\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tpadding: 20px;\\n\\t\\n\\tbackground: var(--very-dark-color);\\n\\t\\n\\ttext-align: center;\\n\\tcolor: var(--very-light-color);\\n}\\n\\t\\t\\n\\theader h1 {\\n\\t\\tfont-weight: bold;\\n\\t\\tfont-size: 48pt;\\n\\t}\\n\\t\\n\\theader img {\\n\\t\\tmargin-right: 20px;\\n\\t\\theight: 80px;\\n\\t}\\n\\t\\n/* ^ NAV */\\nnav {\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tjustify-content: flex-start;\\n\\talign-items: center;\\n\\tpadding: 10px;\\n\\t\\n\\tbox-shadow: 0 0 2vw #000000;\\n\\t\\n\\tbackground: #000000A0;\\n\\tpadding-left: 20px;\\t\\n\\t\\n\\tz-index: 1;\\n}\\n\\t\\t\\n\\t/* ! NAVIGATION MENU LINKS */\\n\\tnav>* {\\n\\t\\tbox-sizing: border-box;\\n\\t\\t\\n\\t\\tpadding: 0 15px;\\n\\t\\t\\n\\t\\tcolor: var(--very-light-color);\\n\\t\\ttext-decoration: none;\\n\\t\\tfont-size: 16pt;\\n\\t\\tfont-weight: bold;\\n\\t\\t\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: filter 150ms ease;\\n\\t}\\n\\n\\tnav>*:hover {\\n\\t\\tfilter: brightness(150%);\\n\\t}\\n\\t\\n\\n/* ^ MAIN */\\n\\t/* @ SECTIONS */\\n\\tmain>section {\\n\\t\\tbox-sizing: border-box;\\n\\t\\t\\n\\t\\tpadding: 60px 50px;\\n\\t\\t\\n\\t\\tbackground: var(--most-light-color);\\n\\t\\tcolor: var(--most-dark-color);\\n\\t}\\n\\n\\t\\t/* ! Every Other Section */\\n\\t\\tmain>section:nth-child(2n) {\\n\\t\\t\\tbackground: var(--very-light-color);\\n\\t\\t}\\n\\t\\t\\n\\t\\t/* ! Section Header */\\n\\t\\tmain>section h2 {\\n\\t\\t\\tfont-size: 36pt;\\n\\t\\t\\tcolor: var(--dark-color);\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t}\\n\\n\\t\\t/* ! Section Sub-Headers */\\n\\t\\tmain>section h3 {\\n\\t\\t\\tfont-size: 28pt;\\n\\t\\t\\tmargin-top: 20px;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t}\\n\\n\\t\\t/* ! Section Body Paragraph Text */\\n\\t\\tmain>section p {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t\\tmargin-top: 10px;\\n\\t\\t}\\n\\t\\t\\n/* ^ FOOTER */\\nfooter {\\n\\tbox-sizing: border-box;\\n\\t\\n\\tdisplay: flex;\\n\\tflex-wrap: wrap;\\n\\tjustify-content: space-around;\\n\\talign-items: flex-start;\\n\\t\\n\\tbackground-color: var(--most-dark-color);\\n\\tcolor: var(--most-light-color);\\n\\ttext-align: center;\\n}\\n\\t\\n\\t/* @ Footer Sections */\\n\\tfooter section {\\n\\t\\tmargin: 20px 10px;\\n\\t}\\n\\n\\t\\t/* ! Footer Links */\\n\\t\\tfooter a {\\n\\t\\t\\tcolor: var(--call-to-action-color);\\n\\t\\t\\tfont-weight: normal;\\n\\t\\t}\\n\\n\\t\\t/* ! Footer Headers */\\n\\t\\tfooter h2 {\\n\\t\\t\\tfont-size: 18pt;\\n\\t\\t\\tfont-weight: bold;\\n\\n\\t\\t\\tmargin-bottom: 10px;\\n\\t\\t}\\n\\n\\t\\t/* ! Footer Body Paragraph Text */\\n\\t\\tfooter p {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\t\\n\\t\\t\\tfont-size: 13pt;\\n\\t\\t\\tfont-weight: normal;\\n\\t\\t}\\n\\t\\t\\n\\t\\t/* ! Footer Tiny Icons */\\n\\t\\tfooter img {\\n\\t\\t\\theight: 13pt;\\n\\t\\t\\tmargin: 0 5px;\\n\\t\\t}\\n\\n\\n\\n/* * Font Styling */\\nem {\\n\\tfont-style: italic;\\n}\\nstrong {\\n\\tfont-weight: 800;\\n}\\n\\n/* * Flex Templates */\\n.flex-column {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n/* * Grid Templates */\\n.grid-contianer {\\n\\tdisplay: grid;\\n\\tgrid-template: \\n\\t\\t1fr / \\n\\t\\t\\t1fr;\\n\\tgrid-auto-rows: 1fr;\\n\\tgrid-auto-columns: 1fr;\\n\\tgap: 0px;\\n}\\n\\n/* * Inputs */\\ndiv.input{\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n/* * Input Labels */\\nlabel {\\n\\tfont-weight: 550;\\n\\ttext-transform: uppercase;\\n\\tletter-spacing: 1px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/styles/meyer-reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/meyer-reset.css":
/*!************************************!*\
  !*** ./src/styles/meyer-reset.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./meyer-reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/meyer-reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/styles/meyer-reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-proj/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/element_constructor.js":
/*!************************************!*\
  !*** ./src/element_constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createElement = function(name, content, attributes) {\n\tlet element = document.createElement(name);\n\t\n\tif (typeof content !== 'undefined') {\n\t\telement.textContent = content;\n\t}\n\t\n\tif (typeof attributes !== 'undefined') {\n\t\tfor (let attribute in attributes) {\n\t\t\tlet attribute_content = attributes[attribute];\n\t\t\telement.setAttribute(attribute, attribute_content);\n\t\t}\n\t}\n\t\n\treturn element\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://restaurant-page-proj/./src/element_constructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_builders_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_builders/home */ \"./src/page_builders/home.js\");\n/* harmony import */ var _page_builders_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_builders/menu */ \"./src/page_builders/menu.js\");\n/* harmony import */ var _page_builders_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_builders/contact */ \"./src/page_builders/contact.js\");\n/* harmony import */ var _page_builders_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_builders/header */ \"./src/page_builders/header.js\");\n/* harmony import */ var _styles_meyer_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/meyer-reset.css */ \"./src/styles/meyer-reset.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\n\n\n\n\n\n\ndocument.body.onload = function() {\n\tlet webpage_content_container = document.createElement(\"main\"),\n\t\tpages = {\n\t\t\t[_page_builders_home__WEBPACK_IMPORTED_MODULE_0__.home_page.name]: _page_builders_home__WEBPACK_IMPORTED_MODULE_0__.home_page.getPage(),\n\t\t\t[_page_builders_menu__WEBPACK_IMPORTED_MODULE_1__.menu_page.name]: _page_builders_menu__WEBPACK_IMPORTED_MODULE_1__.menu_page.getPage(),\n\t\t\t[_page_builders_contact__WEBPACK_IMPORTED_MODULE_2__.contact_page.name]: _page_builders_contact__WEBPACK_IMPORTED_MODULE_2__.contact_page.getPage(),\n\t\t};\t\t\n\t\n\tfunction displayPage(page_name) {\n\t\twebpage_content_container.innerHTML = pages[page_name].innerHTML\n\t}\n\t\n\tdocument.body.append((0,_page_builders_header__WEBPACK_IMPORTED_MODULE_3__.createNav)());\n\tdocument.body.append((0,_page_builders_header__WEBPACK_IMPORTED_MODULE_3__.createHeader)());\n\tdocument.body.append(webpage_content_container);\n\tdisplayPage(\"home\");\n\t\n\tfor (let nav_link of document.querySelectorAll(\".nav_link\")) {\n\t\tnav_link.addEventListener(\"click\", function() {\n\t\t\tlet page_name = nav_link.getAttribute(\"data-page-name\").toLowerCase()\n\t\t\tdisplayPage(page_name);\n\t   \t})\n\t}\n}\n\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/index.js?");

/***/ }),

/***/ "./src/page_builders/contact.js":
/*!**************************************!*\
  !*** ./src/page_builders/contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact_page\": () => (/* binding */ contact_page)\n/* harmony export */ });\n/* harmony import */ var _element_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element_constructor */ \"./src/element_constructor.js\");\n\n\nconst contact_page = (function() {\n\tlet name = \"contact\"\n\n\tfunction getPage() {\n\t\tlet main_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"main\"),\n\t\t\t\tphone_num_section_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", \"\", {id: \"phone_num_section\"}),\n\t\t\t\t\tphone_num_h2_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", \"Phone Number\"),\n\t\t\t\t\tphone_num_p_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", \"(291) 193-0123\"),\n\t\t\t\temail_section_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\", \"\", {id: \"email_section_elm\"}),\n\t\t\t\t\temail_h2_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", \"Email\"),\n\t\t\t\t\temail_num_p_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", \"fake@email.com\");\n\t\t\n\t\tphone_num_section_elm.append(phone_num_h2_elm);\n\t\tphone_num_section_elm.append(phone_num_p_elm);\n\t\t\n\t\temail_section_elm.append(email_h2_elm);\n\t\temail_section_elm.append(email_num_p_elm);\n\t\t\n\t\tmain_elm.append(phone_num_section_elm);\n\t\tmain_elm.append(email_section_elm);\n\t\t\n\t\treturn main_elm\n\t}\n\t\n\treturn {name, getPage};\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/page_builders/contact.js?");

/***/ }),

/***/ "./src/page_builders/header.js":
/*!*************************************!*\
  !*** ./src/page_builders/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"createNav\": () => (/* binding */ createNav)\n/* harmony export */ });\n/* harmony import */ var _element_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element_constructor */ \"./src/element_constructor.js\");\n\n\nfunction createHeader() {\n\tlet header_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"header\"),\n\t\t\tlogo_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"\", {src: \"../src/images/restaurant-logo.png\", alt: \"Restaurant Logo\"}),\n\t\t\th1_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\", \"The Best Restaurant\");\n\t\n\theader_elm.append(logo_elm);\n\theader_elm.append(h1_elm);\n\t\n\treturn header_elm;\n}\n\nfunction createNav() {\n\tlet nav_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\"),\n\t\tpages = [\"Home\", \"Menu\", \"Contact\"];\n\t\t\n\tfor (let page of pages) {\n\t\tlet nav_link = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n\t\t\t\"p\", \n\t\t\tpage, \n\t\t\t{\n\t\t\t\tclass: `nav_link`,\n\t\t\t\t[\"data-page-name\"]: page.toLowerCase(),\n\t\t\t}\n\t\t)\n\t\t\n\t\tnav_elm.append(nav_link);\n\t}\n\t\n\treturn nav_elm;\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/page_builders/header.js?");

/***/ }),

/***/ "./src/page_builders/home.js":
/*!***********************************!*\
  !*** ./src/page_builders/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home_page\": () => (/* binding */ home_page)\n/* harmony export */ });\n/* harmony import */ var _element_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element_constructor */ \"./src/element_constructor.js\");\n\n\nconst home_page = (function() {\n\tlet name = \"home\",\n\t\theading_text = \"Introducing the BEST Restaurant\",\n\t\trestaurant_description = \"Welcome to the most wonderful restaurant in the world. Our restaurant is above all others with the best food in the country and most quality service. Dining here is an expierence you can never forget.\";\n\t\n\tfunction getPage() {\n\t\tlet main_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"main\"),\n\t\t\t\tsection_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\"),\n\t\t\t\t\th2_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", heading_text),\n\t\t\t\t\tdescription_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", restaurant_description);\n\t\t\n\t\tsection_elm.append(h2_elm);\n\t\tsection_elm.append(description_elm);\n\t\t\n\t\tmain_elm.append(section_elm);\n\t\t\n\t\treturn main_elm;\n\t}\n\t\n\treturn {name, getPage}\n})();\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/page_builders/home.js?");

/***/ }),

/***/ "./src/page_builders/menu.js":
/*!***********************************!*\
  !*** ./src/page_builders/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu_page\": () => (/* binding */ menu_page)\n/* harmony export */ });\n/* harmony import */ var _element_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element_constructor */ \"./src/element_constructor.js\");\n\n\nconst menu_page = (function() {\n\tlet name = \"menu\",\n\t\theading_text = \"Menu\",\n\t\tmenu = [\"Spaghetti\", \"Chicken and Cheese Tortillia\", \"Red beans & Rice\"];\n\t\n\tfunction getPage() {\n\t\tlet main_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"main\"),\n\t\t\t\tsection_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\"),\n\t\t\t\t\th2_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h2\", heading_text),\n\t\t\t\t\tmenu_container_elm = (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"\", {id: \"menu\"});\n\t\t\t\n\t\tfor (let item of menu) {\n\t\t\tmenu_container_elm.append( (0,_element_constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\", item) )\n\t\t}\n\t\t\n\t\tsection_elm.append(h2_elm);\n\t\tsection_elm.append(menu_container_elm);\n\t\t\n\t\tmain_elm.append(section_elm);\n\t\t\n\t\treturn main_elm\n\t}\n\t\n\treturn {name, getPage};\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page-proj/./src/page_builders/menu.js?");

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