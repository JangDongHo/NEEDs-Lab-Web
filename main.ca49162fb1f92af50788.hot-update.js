"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("main",{

/***/ "./src/assets/scripts/getData.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/getData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = (sheetName) => {\n  const xhr = new XMLHttpRequest();\n  const sheetId = \"1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg\";\n  const apiKey = \"AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo\";\n  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;\n  xhr.open(\"GET\", url, true);\n\n  xhr.onload = function () {\n    if (xhr.status === 200) {\n      var response = xhr.responseText;\n      // 요청에 대한 처리 로직을 작성합니다.\n      convertToKeyValue(JSON.parse(response));\n    }\n  };\n\n  xhr.onerror = function () {\n    // 요청 실패에 대한 처리 로직을 작성합니다.\n    console.error(\"요청 실패\");\n  };\n\n  xhr.send();\n};\n\nconst convertToKeyValue = (data) => {\n  const keys = data.values[0];\n  const result = [];\n\n  for (let i = 1; i < data.values.length; i++) {\n    let obj = {};\n    let row = data.values[i];\n    for (let j = 0; j < keys.length; j++) {\n      obj[keys[j]] = row[j];\n    }\n    result.push(obj);\n  }\n  console.log(result);\n  return result;\n};\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/getData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/main */ \"./src/assets/scripts/main.js\");\n/* harmony import */ var _assets_scripts_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_main__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_scripts_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/getData */ \"./src/assets/scripts/getData.js\");\n/* harmony import */ var _assets_scripts_members__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/members */ \"./src/assets/scripts/members.js\");\n/* harmony import */ var _assets_scripts_members__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_members__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/logo.png */ \"./src/assets/images/logo.png\");\n/* harmony import */ var _assets_images_representative_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/representative_image.png */ \"./src/assets/images/representative_image.png\");\n/* harmony import */ var _assets_images_professor_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/professor.png */ \"./src/assets/images/professor.png\");\n/* harmony import */ var _assets_images_members_jangdongho_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/members/jangdongho.jpg */ \"./src/assets/images/members/jangdongho.jpg\");\n// Styles\n\n\n// Javascripts\n\n\n\n\n// Images\n\n\n\n// Images - Mebers\n// Mebers의 이미지는 src/assets/images/members/ 폴더에 저장해주세요.\n\n\n\n//# sourceURL=webpack://needs-lab-web/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("037d568d4899192ab42b")
/******/ })();
/******/ 
/******/ }
);