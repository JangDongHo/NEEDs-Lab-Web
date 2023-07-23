"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("lab_facilities",{

/***/ "./src/assets/scripts/pages/lab_facilities.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/pages/lab_facilities.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst drawLabFacilities = (facilities) => {\n  const listContainer = document.querySelector(\".lab_facilities__list-container\");\n\n  facilities.forEach((facility) => {\n    const listItem = document.createElement(\"div\");\n    listItem.classList.add(\"lab_facilities__list\");\n\n    const content = document.createElement(\"div\");\n    content.classList.add(\"lab_facilities__list__content\");\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"lab_facilities__list__content__image-container\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"lab_facilities__list__content__image\");\n    const imageUrl = facility.ImageID ? `https://drive.google.com/uc?export=view&id=${facility.ImageID}` : \"./images/empty.png\";\n    image.src = imageUrl;\n    image.alt = facility.Name;\n\n    imageContainer.appendChild(image);\n\n    const textContainer = document.createElement(\"div\");\n    textContainer.classList.add(\"lab_facilities__list__content__text-container\");\n\n    const name = document.createElement(\"div\");\n    name.classList.add(\"lab_facilities__list__content__text-container__name\");\n    name.classList.add(\"font-bold\");\n    name.textContent = facility.Name;\n\n    const infoContainer = document.createElement(\"div\");\n    infoContainer.classList.add(\"lab_facilities__list__content__text-container__info-container\");\n\n    const model = document.createElement(\"div\");\n    model.classList.add(\"lab_facilities__list__content__text-container__model\");\n    model.textContent = \"모델 : \" + facility.Model;\n\n    const company = document.createElement(\"div\");\n    company.classList.add(\"lab_facilities__list__content__text-container__company\");\n    company.textContent = \"제조사 : \" + facility.Company;\n\n    const task = document.createElement(\"div\");\n    task.classList.add(\"lab_facilities__list__content__text-container__task\");\n    task.textContent = \"기능 : \" + facility.Task;\n\n    infoContainer.appendChild(model);\n    infoContainer.appendChild(company);\n    infoContainer.appendChild(task);\n\n    textContainer.appendChild(name);\n    textContainer.appendChild(infoContainer);\n\n    content.appendChild(imageContainer);\n    content.appendChild(textContainer);\n\n    listItem.appendChild(content);\n\n    listContainer.appendChild(listItem);\n  });\n};\n\nconst sheetName = \"Lab Facilities\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawLabFacilities(data);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/lab_facilities.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10ff8d9e8d7db2b3963f")
/******/ })();
/******/ 
/******/ }
);