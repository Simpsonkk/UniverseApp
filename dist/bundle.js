/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://universeapp/./src/scss/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _modules_APOD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/APOD */ \"./src/modules/APOD.js\");\n/* harmony import */ var _modules_APOD__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_APOD__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://universeapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/APOD.js":
/*!*****************************!*\
  !*** ./src/modules/APOD.js ***!
  \*****************************/
/***/ (() => {

eval("// function initEventListeners() {\n//   const btns = document.querySelectorAll('button');\n//   btns.forEach((btn) => {\n//     btn.addEventListener('click', setDate);\n//   })\n// }\n// initEventListeners();\n\nasync function setDate() {\n  document.querySelector('.container').classList.add('hidden');\n  document.querySelector('.selected-photo-body').classList.remove('hidden');\n  document.querySelector('main').classList.add('changed-size-page');\n  // document.querySelector('.selected-photo__img').removeAttribute('src')\n  // document.querySelector('.selected-photo__description').textContent = '';\n\n  const selectedDate = document.querySelector('.initial-page__input').value;\n  // const s = document.querySelector('.selected-photo__input').value;\n\n  \n  \n  if (selectedDate == '') {\n    var response = await fetch(\n      'https://api.nasa.gov/planetary/apod?api_key=gn2Lwrt5ugX66tQzW4fN40bcfYdQZWCkrefgN7P4&count=1',\n    );\n    const photo = await response.json();\n    document.querySelector('.selected-photo__img').setAttribute('src', `${photo[0].url}`)\n    document.querySelector('.selected-photo__title').textContent = photo[0].title;\n    document.querySelector('.selected-photo__description').textContent = photo[0].explanation;\n  }\n  else {\n    var response = await fetch(\n      `https://api.nasa.gov/planetary/apod?api_key=gn2Lwrt5ugX66tQzW4fN40bcfYdQZWCkrefgN7P4&date=${selectedDate}`,\n    );\n    const photo = await response.json();\n    document.querySelector('.selected-photo__img').setAttribute('src', `${photo.url}`)\n    document.querySelector('.selected-photo__title').textContent = photo.title;\n    document.querySelector('.selected-photo__description').textContent = photo.explanation;\n  }\n  selectedDate = document.querySelector('.selected-photo__input').value;\n\n  document.querySelector('.initial-page__input').value = '';\n  // document.querySelector('.selected-photo__input').value = ''\n}\n\n\n//# sourceURL=webpack://universeapp/./src/modules/APOD.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;