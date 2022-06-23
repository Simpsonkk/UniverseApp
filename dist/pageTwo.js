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

/***/ "./src/modules/epic/epic.js":
/*!**********************************!*\
  !*** ./src/modules/epic/epic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/styles/style.scss */ \"./src/styles/style.scss\");\n\n\nlet selectedDate = '';\nlet slideshowPhotos;\nlet namesImages = [];\nlet changedFormatDate;\nlet num;\nlet photo;\n\nfunction initEventListeners() {\n  document\n    .getElementById('getNextPage')\n    .addEventListener('click', changesClass);\n  document\n    .getElementById('startSlideshowButton')\n    .addEventListener('click', getImage);\n  document\n    .getElementById('pauseInterval')\n    .addEventListener('click', pauseInterval);\n  document\n    .getElementById('previousPhoto')\n    .addEventListener('click', getPreviousPhoto);\n  document.getElementById('nextPhoto').addEventListener('click', getNextPhoto);\n}\ninitEventListeners();\n\nfunction changesClass() {\n  document.getElementById('page-information').classList.add('hidden');\n  document.getElementById('selected-photo').classList.remove('hidden');\n  document.querySelector('main').classList.add('changed-size-page-epic');\n}\n\nasync function getNamesImages() {\n  selectedDate = document.getElementById('epicDateInput').value;\n  const response = await fetch(\n    `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`\n  );\n  namesImages = [];\n  const datesPhotos = await response.json();\n  datesPhotos.forEach((element) => {\n    namesImages.push(element.image);\n  });\n  if (namesImages.length === 0) {\n    getModal();\n    clearInterval(slideshowPhotos);\n  }\n}\n\nfunction getImage() {\n  if (selectedDate !== document.getElementById('epicDateInput').value) {\n    clearInterval(slideshowPhotos);\n    namesImages = [];\n    getNamesImages();\n    num = -1;\n  }\n  // photo = '';\n  changedFormatDate = selectedDate.replace(/-/gi, '/');\n  slideshowPhotos = setInterval(() => {\n    num++;\n    setImage();\n    if (namesImages[num + 1] === undefined) {\n      pauseInterval();\n    }\n  }, 3000);\n}\n\nfunction getModal() {\n  const modal = document.querySelector('[data-modal-window]');\n  modal.style.display = 'block';\n  const close = modal.querySelector('.modal__modal-window');\n  close.addEventListener('click', () => {\n    modal.style.display = 'none';\n  });\n\n  window.onclick = (event) => {\n    if (event.target.hasAttribute('data-modal-window')) {\n      modal.style.display = 'none';\n    }\n  };\n}\n\nfunction pauseInterval() {\n  clearInterval(slideshowPhotos);\n  downloadImage();\n}\n\nconst getBase64StringFromDataURL = (dataURL) =>\n  dataURL.replace('data:', '').replace(/^.+,/, '');\n\nfunction downloadImage() {\n  const image = document.getElementById('photoImg');\n  let base64Image = '';\n  // Get the remote image as a Blob with the fetch API\n  fetch(image.src)\n    .then((res) => res.blob())\n    .then((blob) => {\n      // Read the Blob as DataURL using the FileReader API\n      const reader = new FileReader();\n      reader.onloadend = () => {\n        // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...\n        // Convert to Base64 string\n        const base64 = getBase64StringFromDataURL(reader.result);\n        base64Image = base64;\n        // Logs wL2dvYWwgbW9yZ...\n        document\n          .getElementById('a')\n          .setAttribute(\n            'href',\n            `data:application/octet-stream;base64,${base64Image}`\n          );\n      };\n      reader.readAsDataURL(blob);\n    });\n}\n\nfunction getPreviousPhoto() {\n  clearInterval(slideshowPhotos);\n  num--;\n  setImage();\n}\n\nfunction getNextPhoto() {\n  clearInterval(slideshowPhotos);\n  num++;\n  setImage();\n}\n\nfunction setImage() {\n  if (namesImages[num + 1] === undefined) num--;\n  if (namesImages[num - 1] === undefined) num++;\n  photo = `https://api.nasa.gov/EPIC/archive/natural/${changedFormatDate}/png/${namesImages[num]}.png?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq`;\n  document.getElementById('photoImg').setAttribute('src', photo);\n  downloadImage();\n}\n\n\n//# sourceURL=webpack://universeapp/./src/modules/epic/epic.js?");

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
/******/ 			"pageTwo": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkuniverseapp"] = self["webpackChunkuniverseapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_styles_style_scss"], () => (__webpack_require__("./src/modules/epic/epic.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;