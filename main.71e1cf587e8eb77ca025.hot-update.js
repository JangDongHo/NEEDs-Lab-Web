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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = (sheetName) => {\n  const xhr = new XMLHttpRequest();\n  const sheetId = \"1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg\";\n  const apiKey = \"AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo\";\n  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;\n  xhr.open(\"GET\", url, true);\n\n  xhr.onload = function () {\n    if (xhr.status === 200) {\n      var response = xhr.responseText;\n      const result = convertToKeyValue(JSON.parse(response));\n      resolve(result);\n    } else {\n      reject(new Error(\"요청 실패\"));\n    }\n  };\n\n  xhr.onerror = function () {\n    // 요청 실패에 대한 처리 로직을 작성합니다.\n    console.error(\"요청 실패\");\n  };\n\n  xhr.send();\n};\n\nconst convertToKeyValue = (data) => {\n  const keys = data.values[0];\n  const result = [];\n\n  for (let i = 1; i < data.values.length; i++) {\n    let obj = {};\n    let row = data.values[i];\n    for (let j = 0; j < keys.length; j++) {\n      obj[keys[j]] = row[j];\n    }\n    result.push(obj);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/getData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a75bd2c2f73d187cf0a0")
/******/ })();
/******/ 
/******/ }
);