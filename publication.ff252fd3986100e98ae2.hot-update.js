"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("publication",{

/***/ "./src/assets/scripts/pages/publication_international_journal.js":
/*!***********************************************************************!*\
  !*** ./src/assets/scripts/pages/publication_international_journal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst changeShowTag = (event) => {\n  const timeTag = event.target.textContent;\n\n  const members = document.querySelectorAll(\".members__list\");\n  members.forEach((member) => {\n    const memberRankTag = member.getAttribute(\"rank-tag\");\n\n    if (memberRankTag === timeTag || timeTag === \"All\") {\n      member.style.display = \"block\";\n    } else {\n      member.style.display = \"none\";\n    }\n  });\n\n  const tags = document.querySelectorAll(\".tag__item\");\n  tags.forEach((tag) => {\n    tag.classList.toggle(\"selected\", tag.textContent === timeTag);\n  });\n};\n\nconst sheetName = \"International Journal\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawMembers(data);\n});\n\nconst tags = document.querySelectorAll(\".tag__item\");\n\ntags.forEach((tag) => {\n  tag.addEventListener(\"click\", changeShowTag);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/publication_international_journal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fb1c6e2e2e20cf52839")
/******/ })();
/******/ 
/******/ }
);