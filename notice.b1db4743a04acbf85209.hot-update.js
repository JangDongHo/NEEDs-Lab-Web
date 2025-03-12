"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("notice",{

/***/ "./src/assets/scripts/pages/notice.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/pages/notice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n// \"getExcelData\" 함수로 데이터를 가져옵니다.\n\n\n// 알림 (Notice) 데이터를 생성하고 화면에 표시하는 함수\nconst drawNotice = (data) => {\n  // 알림을 표시할 부모 컨테이너 요소를 선택합니다.\n  const noticeContainer = document.querySelector(\".news-notice-container .news-container\");\n\n  // 데이터를 순회하며 각 알림 아이템을 생성합니다.\n  data.forEach((item) => {\n    const { Url, Title, Content, Date } = item;\n\n    // Date를 날짜와 월, 년도로 분리합니다.\n    const [year, month, day] = Date.split(\".\").map((str) => str.trim());\n\n    // 알림 아이템 컨테이너를 생성합니다.\n    const noticeItem = document.createElement(\"a\");\n    noticeItem.href = Url;\n    noticeItem.target = \"_blank\";\n    noticeItem.classList.add(\"news-item\");\n\n    // 날짜 컨테이너를 생성합니다.\n    const dateContainer = document.createElement(\"div\");\n    dateContainer.classList.add(\"news-item__date-container\");\n\n    // 날짜를 나타내는 요소를 생성하고 설정합니다.\n    const dateD = document.createElement(\"div\");\n    dateD.classList.add(\"news-item__date-d\", \"font-bold\");\n    dateD.textContent = day; // 날짜를 표시\n\n    const dateYM = document.createElement(\"div\");\n    dateYM.classList.add(\"news-item__date-ym\");\n    dateYM.textContent = `${year}. ${month}`; // 년도와 월을 표시\n\n    // 날짜 컨테이너에 날짜 요소를 추가합니다.\n    dateContainer.appendChild(dateD);\n    dateContainer.appendChild(dateYM);\n\n    // 알림 내용 컨테이너를 생성하고 설정합니다.\n    const contentContainer = document.createElement(\"div\");\n    contentContainer.classList.add(\"news-item__content\");\n\n    const titleElement = document.createElement(\"p\");\n    titleElement.classList.add(\"news-item__title\", \"font-bold\");\n    titleElement.textContent = Title; // 알림 제목 설정\n\n    const descriptionElement = document.createElement(\"p\");\n    descriptionElement.classList.add(\"news-item__description\");\n    descriptionElement.textContent = Content; // 알림 내용 설정\n\n    // 알림 내용 컨테이너에 제목과 내용을 추가합니다.\n    contentContainer.appendChild(titleElement);\n    contentContainer.appendChild(descriptionElement);\n\n    // 알림 아이콘을 생성합니다.\n    const iconElement = document.createElement(\"p\");\n    iconElement.classList.add(\"news-item__icon\");\n    const icon = document.createElement(\"i\");\n    icon.classList.add(\"fa-solid\", \"fa-circle-plus\");\n    iconElement.appendChild(icon);\n\n    // 알림 아이템 컨테이너에 날짜, 내용, 아이콘을 추가합니다.\n    noticeItem.appendChild(dateContainer);\n    noticeItem.appendChild(contentContainer);\n    noticeItem.appendChild(iconElement);\n\n    // 알림 컨테이너에 알림 아이템을 추가합니다.\n    noticeContainer.appendChild(noticeItem);\n  });\n};\n\n// 알림 데이터를 가져오고 화면에 표시합니다.\nconst sheetName = \"Notice\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawNotice(data);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/notice.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c9188c009aea1d2d030f")
/******/ })();
/******/ 
/******/ }
);