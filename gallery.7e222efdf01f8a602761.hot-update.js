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

eval("// Assuming 'wr_id' is a query parameter with the gallery ID, you can get it like this:\nconst params = new URLSearchParams(window.location.search);\nconst galleryId = params.get(\"title\");\nconst galleryContainer = document.querySelector(\".gallery__list-container\");\nconst boardContainer = document.querySelector(\".board__list-container\");\n\n// 갤러리\nif (galleryId) {\n  boardContainer.style.display = \"block\";\n  galleryContainer.style.display = \"none\";\n}\n// 갤러리 리스트\nelse {\n  const galleryLists = galleryContainer.querySelectorAll(\".gallery__list\");\n\n  // 클릭 이벤트 핸들러\n  galleryLists.forEach((galleryList) => {\n    galleryList.addEventListener(\"click\", (e) => {\n      const targetGalleryList = e.target.closest(\".gallery__list\");\n      const titleElement = targetGalleryList.querySelector(\".gallery__list__title\");\n      const title = titleElement.innerText.replace(/\\s+/g, \"-\");\n\n      // 클릭한 게시글의 wr_id를 가지고 detail 페이지로 이동\n      targetGalleryList.href = `./gallery?title=${title}`;\n    });\n  });\n}\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("41f1cb24f7e69fb3fc9c")
/******/ })();
/******/ 
/******/ }
);