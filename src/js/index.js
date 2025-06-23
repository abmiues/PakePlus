/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/graph.ts":
/*!**********************!*\
  !*** ./src/graph.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.graph = void 0;\r\nclass graph {\r\n    constructor() {\r\n        console.log(\"ddo\");\r\n    }\r\n    play() {\r\n        console.log(\"play\");\r\n    }\r\n}\r\nexports.graph = graph;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxLQUFLO0lBQ2Q7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sSUFBSTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQVBELHNCQU9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGh0b29sLy4vc3JjL2dyYXBoLnRzP2IwMDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGdyYXBoe1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRkb1wiKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHBsYXkoKTp2b2lke1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheVwiKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graph.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconsole.log(\"aa2\");\r\nconst graph_1 = __webpack_require__(/*! ./graph */ \"./src/graph.ts\");\r\nlet newgra = new graph_1.graph();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNsQixxRUFBK0I7QUFDL0IsSUFBSSxNQUFNLEdBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXBodG9vbC8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiYWEyXCIpXHJcbmltcG9ydCB7IGdyYXBoIH0gZnJvbSBcIi4vZ3JhcGhcIlxyXG5sZXQgbmV3Z3JhPW5ldyBncmFwaCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;