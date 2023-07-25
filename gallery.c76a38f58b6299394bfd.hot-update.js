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

eval("const galleryLists = document.querySelectorAll(\".gallery__list\");\n\n// 클릭 이벤트 핸들러\ngalleryLists.forEach((galleryList) => {\n  galleryList.addEventListener(\"click\", (e) => {\n    // Get the value of 'wr_id' attribute\n    const targetGalleryList = e.target.closest(\".gallery__list\");\n\n    // Log the 'wr_id' value to the console\n    console.log(targetGalleryList.getAttribute(\"wr_id\"));\n  });\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a4f4d0ceb1dc23f832b")
/******/ })();
/******/ 
/******/ }
);