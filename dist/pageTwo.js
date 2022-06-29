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

/***/ "./src/modules/epic/epic.js":
/*!**********************************!*\
  !*** ./src/modules/epic/epic.js ***!
  \**********************************/
/***/ (() => {

eval("// import '/src/styles/style.scss';\n\nlet selectedDate = '';\nlet slideshowPhotos;\nlet namesImages = [];\nlet changedFormatDate;\nlet num;\nlet photo;\n\nconst EPIC_API = {\n  IMAGES: {\n    NAMES_IMAGES:\n      'https://api.nasa.gov/EPIC/api/natural/date/{selectedDate}?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq',\n    SELECTED_IMAGE:\n      'https://api.nasa.gov/EPIC/archive/natural/{changedFormatDate}/png/{selectedNameImage}.png?api_key=AbRivaimagWGLedWpuIBbVuOKrRUxxejodfFWuAq',\n  },\n};\n\nfunction isNullOrEmpty(value) {\n  return value === null || value === undefined || value === '';\n}\n\nfunction formatString(source, args) {\n  if (isNullOrEmpty(source)) return source;\n\n  return Array.isArray(args)\n    ? args.reduce(\n        (accumulator, value, index) =>\n          accumulator.replace(`{${index}}`, value?.toString()),\n        source\n      )\n    : Object.entries(args).reduce(\n        (accumulator, [key, value]) =>\n          accumulator.replace(`{${key}}`, value?.toString()),\n        source\n      );\n}\n\nfunction initEventListeners() {\n  document\n    .getElementById('getNextPage')\n    .addEventListener('click', addRemoveClass);\n  document\n    .getElementById('startSlideshowButton')\n    .addEventListener('click', getImage);\n  document\n    .getElementById('pauseInterval')\n    .addEventListener('click', pauseInterval);\n  document\n    .getElementById('previousPhoto')\n    .addEventListener('click', getPreviousPhoto);\n  document.getElementById('nextPhoto').addEventListener('click', getNextPhoto);\n}\ninitEventListeners();\n\nfunction addRemoveClass() {\n  document.getElementById('epic-info').classList.add('hidden');\n  document.getElementById('selected-photo').classList.remove('hidden');\n  document.querySelector('main').classList.add('changed-size-page-epic');\n}\n\nasync function getNamesImages() {\n  selectedDate = document.getElementById('dateImageInput').value;\n  const response = await fetch(\n    formatString(EPIC_API.IMAGES.NAMES_IMAGES, { selectedDate })\n  );\n  namesImages = [];\n  const datesPhotos = await response.json();\n  datesPhotos.forEach((element) => {\n    namesImages.push(element.image);\n  });\n}\n\nfunction getModal() {\n  // const modal = document.querySelector('[data-modal-window]');\n  const modal = document.querySelector('.modal');\n  modal.classList.add('visible');\n\n  // modal.style.display = 'block';\n  // const close = modal.querySelector('.modal__modal-window');\n  // close.addEventListener('click', () => {\n  // modal.style.display = 'none';\n  // });\n  const close = modal.querySelector('.modal__modal-window');\n  close.addEventListener('click', () => {\n    // modal.style.display = 'none';\n    modal.classList.remove('visible');\n  });\n\n  window.onclick = (event) => {\n    if (event.target.hasAttribute('data-modal-window')) {\n      modal.classList.remove('visible');\n    }\n  };\n}\n\nconst getBase64StringFromDataURL = (dataURL) =>\n  dataURL.replace('data:', '').replace(/^.+,/, '');\n\nfunction downloadImage() {\n  const image = document.getElementById('photoImg');\n  let base64Image = '';\n  // Get the remote image as a Blob with the fetch API\n  fetch(image.src)\n    .then((res) => res.blob())\n    .then((blob) => {\n      // Read the Blob as DataURL using the FileReader API\n      const reader = new FileReader();\n      reader.onloadend = () => {\n        // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...\n        // Convert to Base64 string\n        const base64 = getBase64StringFromDataURL(reader.result);\n        base64Image = base64;\n        // Logs wL2dvYWwgbW9yZ...\n        document\n          .getElementById('a')\n          .setAttribute(\n            'href',\n            `data:application/octet-stream;base64,${base64Image}`\n          );\n      };\n      reader.readAsDataURL(blob);\n    });\n}\n\nfunction setImage() {\n  if (namesImages[num + 1] === undefined) num--;\n  if (namesImages[num - 1] === undefined) num++;\n  const selectedNameImage = namesImages[num];\n  photo = formatString(EPIC_API.IMAGES.SELECTED_IMAGE, {\n    changedFormatDate,\n    selectedNameImage,\n  });\n  document.getElementById('photoImg').setAttribute('src', photo);\n  downloadImage();\n}\n\nfunction pauseInterval() {\n  clearInterval(slideshowPhotos);\n  downloadImage();\n}\n\nfunction getImage() {\n  if (selectedDate !== document.getElementById('dateImageInput').value) {\n    clearInterval(slideshowPhotos);\n    namesImages = [];\n    getNamesImages();\n    num = -1;\n  }\n  setTimeout(() => {\n    if (namesImages.length === 0) {\n      getModal();\n      clearInterval(slideshowPhotos);\n    }\n  }, 1300);\n  // photo = '';\n  changedFormatDate = selectedDate.replace(/-/gi, '/');\n  slideshowPhotos = setInterval(() => {\n    num++;\n    setImage();\n\n    if (namesImages[num + 1] === undefined) {\n      pauseInterval();\n    }\n  }, 3000);\n}\n\nfunction getPreviousPhoto() {\n  clearInterval(slideshowPhotos);\n  num--;\n  setImage();\n}\n\nfunction getNextPhoto() {\n  clearInterval(slideshowPhotos);\n  num++;\n  setImage();\n}\n\n\n//# sourceURL=webpack://universeapp/./src/modules/epic/epic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/epic/epic.js"]();
/******/ 	
/******/ })()
;