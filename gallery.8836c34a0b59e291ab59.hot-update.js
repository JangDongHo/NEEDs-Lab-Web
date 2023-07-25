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

eval("// Assuming 'wr_id' is a query parameter with the gallery ID, you can get it like this:\nconst params = new URLSearchParams(window.location.search);\nconst galleryId = params.get(\"wr_id\");\n\nconsole.log(baseURL);\n\nconst galleryLists = document.querySelectorAll(\".gallery__list\");\n\n// 클릭 이벤트 핸들러\ngalleryLists.forEach((galleryList) => {\n  galleryList.addEventListener(\"click\", (e) => {\n    const targetGalleryList = e.target.closest(\".gallery__list\");\n    const wrId = targetGalleryList.getAttribute(\"wr_id\");\n\n    // 클릭한 게시글의 wr_id를 가지고 detail 페이지로 이동\n    targetGalleryList.href = `./gallery?wr_id=${wrId}`;\n  });\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dd63df8f70a13c44981b")
/******/ })();
/******/ 
/******/ }
);