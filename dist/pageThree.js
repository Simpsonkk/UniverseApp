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

/***/ "./src/modules/earth/earth.js":
/*!************************************!*\
  !*** ./src/modules/earth/earth.js ***!
  \************************************/
/***/ (() => {

eval("// import '/src/styles/style.scss';\n\n// function initMap() {\n//   const myLatlng = { lat: -25.363, lng: 131.044 };\n\n//   const map = new google.maps.Map(document.getElementById(\"map\")!, {\n//     zoom: 4,\n//     center: myLatlng,\n//   });\n\n//   // Create the initial InfoWindow.\n//   let infoWindow = new google.maps.InfoWindow({\n//     content: \"Click the map to get Lat/Lng!\",\n//     position: myLatlng,\n//   });\n\n//   infoWindow.open(map);\n\n//   // Configure the click listener.\n//   map.addListener(\"click\", (mapsMouseEvent) => {\n//     // Close the current InfoWindow.\n//     infoWindow.close();\n\n//     // Create a new InfoWindow.\n//     infoWindow = new google.maps.InfoWindow({\n//       position: mapsMouseEvent.latLng,\n//     });\n//     infoWindow.setContent(\n//       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)\n//     );\n//     infoWindow.open(map);\n//   });\n// }\n\n// declare global {\n//   interface Window {\n//     initMap: () => void;\n//   }\n// }\n// window.initMap = initMap;\n// export {};\n// import { Loader } from '@googlemaps/js-api-loader';\n\n// const loader = new Loader({\n//   apiKey: \"\",\n//   version: \"weekly\",\n//   libraries: [\"places\"]\n// });\n\n// const mapOptions = {\n//   center: {\n//     lat: 0,\n//     lng: 0\n//   },\n//   zoom: 4\n// };\n// loader\n//   .load()\n//   .then((google) => {\n//     new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n//   })\n//   .catch(e => {\n//     // do something\n//   });\n\n// loader.loadCallback(e => {\n//   if (e) {\n//     console.log(e);\n//   } else {\n//     new google.maps.Map(document.getElementById(\"map\"), mapOptions);\n//   }\n// });\n\nfunction initMap() {\n  const mapDiv = document.getElementById('map');\n  const map = new google.maps.Map(mapDiv, {\n    zoom: 8,\n    center: new google.maps.LatLng(-34.397, 150.644),\n  });\n\n  // We add a DOM event here to show an alert if the DIV containing the\n  // map is clicked.\n  google.maps.event.addDomListener(mapDiv, 'click', () => {\n    window.alert('Map was clicked!');\n  });\n}\n\nwindow.initMap = initMap;\n\n// function initMap() {\n//   const myLatlng = { lat: -25.363, lng: 131.044 };\n//   const map = new google.maps.Map(document.getElementById('map'), {\n//     zoom: 4,\n//     center: myLatlng,\n//   });\n//   // Create the initial InfoWindow.\n//   let infoWindow = new google.maps.InfoWindow({\n//     content: 'Click the map to get Lat/Lng!',\n//     position: myLatlng,\n//   });\n\n//   infoWindow.open(map);\n//   // Configure the click listener.\n//   map.addListener('click', (mapsMouseEvent) => {\n//     // Close the current InfoWindow.\n//     infoWindow.close();\n//     // Create a new InfoWindow.\n//     infoWindow = new google.maps.InfoWindow({\n//       position: mapsMouseEvent.latLng,\n//     });\n//     infoWindow.setContent(\n//       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),\n//     );\n//     infoWindow.open(map);\n//   });\n// }\n\n// window.initMap = initMap;\n\n\n//# sourceURL=webpack://universeapp/./src/modules/earth/earth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/earth/earth.js"]();
/******/ 	
/******/ })()
;