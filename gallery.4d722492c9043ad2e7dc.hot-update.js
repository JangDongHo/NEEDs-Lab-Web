/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("gallery",{

/***/ "./src/assets/scripts/pages/gallery.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/pages/gallery.js ***!
  \*********************************************/
/***/ (() => {

eval("const galleryLists = document.querySelectorAll(\".gallery__list\");\n\n// 클릭 이벤트 핸들러\ngalleryLists.forEach((galleryList) => {\n  galleryList.addEventListener(\"click\", (e) => {\n    // Get the current URL\n    const currentURL = window.location.href;\n    // Extract the base URL without the query parameters\n    const baseURL = currentURL.split(\"?\")[0];\n\n    // Assuming 'wr_id' is a query parameter with the gallery ID, you can get it like this:\n    const params = new URLSearchParams(window.location.search);\n    const galleryId = params.get(\"wr_id\");\n\n    console.log(baseURL, galleryId);\n  });\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("83bfb7917c9250081ed9")
/******/ })();
/******/ 
/******/ }
);