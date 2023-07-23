"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("publication_international_journal",{

/***/ "./src/assets/scripts/pages/publication_international_journal.js":
/*!***********************************************************************!*\
  !*** ./src/assets/scripts/pages/publication_international_journal.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst abbreviateNames = (names) => {\n  const namesArr = names.split(\"; \").map((name) => name.trim());\n\n  const result = namesArr.map((name) => {\n    const parts = name.split(\", \");\n    const firstName = parts[1].match(/[A-Z]/g);\n    const lastName = parts[0];\n\n    return `${firstName.join(\". \")}. ${lastName}`;\n  });\n\n  return result.join(\", \");\n};\n\nconst createPublicationContainer = (yearRange) => {\n  const yearContainer = document.createElement(\"div\");\n  yearContainer.classList.add(\"publication__year-container\");\n  yearContainer.setAttribute(\"year-range\", yearRange);\n\n  const yearTitle = document.createElement(\"div\");\n  yearTitle.classList.add(\"publication__year-title\");\n\n  const yearText = document.createElement(\"h3\");\n  yearText.classList.add(\"title\");\n  yearText.textContent = yearRange;\n\n  yearTitle.appendChild(yearText);\n  yearContainer.appendChild(yearTitle);\n\n  const listContainer = document.createElement(\"div\");\n  listContainer.classList.add(\"publication__list-container\");\n  yearContainer.appendChild(listContainer);\n\n  return yearContainer;\n};\n\nconst drawPublications = (data) => {\n  const publicationContainer = document.querySelector(\".publication-container\");\n\n  const yearRanges = {\n    \"2020~\": [],\n    \"2004~2019\": [],\n    \"1999~2003\": [],\n  };\n\n  // 데이터를 년도 범위에 따라 분류\n  data.forEach((item) => {\n    const { Year } = item;\n\n    if (Year >= 2020) {\n      yearRanges[\"2020~\"].push(item);\n    } else if (Year >= 2004) {\n      yearRanges[\"2004~2019\"].push(item);\n    } else {\n      yearRanges[\"1999~2003\"].push(item);\n    }\n  });\n\n  Object.entries(yearRanges).forEach(([yearRange, items]) => {\n    const yearContainer = createPublicationContainer(yearRange);\n    publicationContainer.appendChild(yearContainer);\n\n    const listContainer = yearContainer.querySelector(\".publication__list-container\");\n\n    // 아이템별로 리스트 생성\n    const length = items.length;\n    items.forEach((item, index) => {\n      let { Authors, Title, Publication, Volume, Pages, Year } = item;\n      Authors = abbreviateNames(Authors);\n\n      const listItem = document.createElement(\"div\");\n      listItem.classList.add(\"publication__list\");\n\n      const indexElement = document.createElement(\"div\");\n      indexElement.classList.add(\"publication__list-index\");\n      indexElement.textContent = (length - index).toString();\n\n      const content = document.createElement(\"div\");\n      content.classList.add(\"publication__list-content\");\n\n      const titleElement = document.createElement(\"h4\");\n      titleElement.classList.add(\"title\");\n      titleElement.innerHTML = `${Title}`;\n\n      const descriptionElement = document.createElement(\"p\");\n      descriptionElement.classList.add(\"description\");\n      descriptionElement.innerHTML = `${Authors} (${Year})<br>${Publication}, ${Volume}, ${Pages}`;\n      console.log(Authors);\n\n      content.appendChild(titleElement);\n      content.appendChild(descriptionElement);\n\n      listItem.appendChild(indexElement);\n      listItem.appendChild(content);\n\n      listContainer.appendChild(listItem);\n    });\n  });\n};\n\nconst changeShowTag = (event) => {\n  const selectedYearTag = event.target.textContent;\n\n  const yearRange = document.querySelectorAll(\".publication__year-container\");\n  yearRange.forEach((container) => {\n    const yearTag = container.getAttribute(\"year-range\");\n\n    if (yearTag === selectedYearTag || selectedYearTag === \"All\") {\n      container.style.display = \"block\";\n    } else {\n      container.style.display = \"none\";\n    }\n  });\n\n  const tags = document.querySelectorAll(\".tag__item\");\n  tags.forEach((tag) => {\n    tag.classList.toggle(\"selected\", tag.textContent === selectedYearTag);\n  });\n};\n\nconst sheetName = \"International Journal\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawPublications(data);\n});\n\nconst tags = document.querySelectorAll(\".tag__item\");\n\ntags.forEach((tag) => {\n  tag.addEventListener(\"click\", changeShowTag);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/publication_international_journal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("42987b1cff19a118ca8e")
/******/ })();
/******/ 
/******/ }
);