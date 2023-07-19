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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst createPublicationContainer = (year) => {\n  const yearContainer = document.createElement(\"div\");\n  yearContainer.classList.add(\"publication__year-container\");\n\n  const yearTitle = document.createElement(\"div\");\n  yearTitle.classList.add(\"publication__year-title\");\n\n  const yearText = document.createElement(\"h3\");\n  yearText.classList.add(\"title\");\n  yearText.textContent = year + \"~\";\n\n  yearTitle.appendChild(yearText);\n  yearContainer.appendChild(yearTitle);\n\n  const listContainer = document.createElement(\"div\");\n  listContainer.classList.add(\"publication__list-container\");\n  yearContainer.appendChild(listContainer);\n\n  return yearContainer;\n};\n\nconst drawPublications = (data) => {\n  const publicationContainer = document.querySelector(\".publication__container\");\n\n  data.forEach((item) => {\n    const { Year, Authors, Title, Publication, Volume, Pages } = item;\n\n    let yearContainer = publicationContainer.querySelector(`[data-year=\"${Year}\"]`);\n    if (!yearContainer) {\n      yearContainer = createPublicationContainer(Year);\n      yearContainer.setAttribute(\"data-year\", Year);\n      publicationContainer.appendChild(yearContainer);\n    }\n\n    const listItem = document.createElement(\"div\");\n    listItem.classList.add(\"publication__list\");\n\n    const index = document.createElement(\"div\");\n    index.classList.add(\"publication__list-index\");\n    index.textContent = \"1\";\n\n    const content = document.createElement(\"div\");\n    content.classList.add(\"publication__list-content\");\n\n    const titleElement = document.createElement(\"h4\");\n    titleElement.classList.add(\"title\");\n    titleElement.textContent = Title;\n\n    const descriptionElement = document.createElement(\"p\");\n    descriptionElement.classList.add(\"description\");\n    descriptionElement.textContent = `${Authors} (${Year}), ${Publication}, ${Volume}, ${Pages}`;\n\n    content.appendChild(titleElement);\n    content.appendChild(descriptionElement);\n\n    listItem.appendChild(index);\n    listItem.appendChild(content);\n\n    yearContainer.querySelector(\".publication__list-container\").appendChild(listItem);\n  });\n};\n\nconst changeShowTag = (event) => {\n  const timeTag = event.target.textContent;\n\n  const members = document.querySelectorAll(\".members__list\");\n  members.forEach((member) => {\n    const memberRankTag = member.getAttribute(\"rank-tag\");\n\n    if (memberRankTag === timeTag || timeTag === \"All\") {\n      member.style.display = \"block\";\n    } else {\n      member.style.display = \"none\";\n    }\n  });\n\n  const tags = document.querySelectorAll(\".tag__item\");\n  tags.forEach((tag) => {\n    tag.classList.toggle(\"selected\", tag.textContent === timeTag);\n  });\n};\n\nconst sheetName = \"International Journal\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawPublications(data);\n});\n\nconst tags = document.querySelectorAll(\".tag__item\");\n\ntags.forEach((tag) => {\n  tag.addEventListener(\"click\", changeShowTag);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/publication_international_journal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31ec8f2026fe1bf04d97")
/******/ })();
/******/ 
/******/ }
);