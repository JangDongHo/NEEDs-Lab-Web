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

/***/ "./src/assets/scripts/members.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/members.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst drawMembers = (data) => {\n  const listContainer = document.querySelector(\".members__list-container\");\n\n  members.forEach((member) => {\n    const listItem = document.createElement(\"div\");\n    listItem.classList.add(\"members__list\");\n\n    const content = document.createElement(\"div\");\n    content.classList.add(\"members__list__content\");\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"members__list__content__image-container\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"members__list__content__image\");\n    image.src = member.Image;\n    image.alt = member.Name;\n\n    imageContainer.appendChild(image);\n\n    const textContainer = document.createElement(\"div\");\n    textContainer.classList.add(\"members__list__content__text-container\");\n\n    const rank = document.createElement(\"div\");\n    rank.classList.add(\"members__list__content__text-container__rank\");\n    rank.classList.add(\"font-bold\");\n    rank.textContent = member.Tag;\n\n    const name = document.createElement(\"div\");\n    name.classList.add(\"members__list__content__text-container__name\");\n    name.classList.add(\"font-bold\");\n    name.textContent = member.Name;\n\n    const topicContainer = document.createElement(\"div\");\n    topicContainer.classList.add(\"members__list__content__text-container__topic-container\");\n\n    const researchSubject = document.createElement(\"p\");\n    researchSubject.textContent = \"Research Subject\";\n\n    const researchSubjectDetail = document.createElement(\"span\");\n    researchSubjectDetail.textContent = member[\"Research Subject\"];\n\n    topicContainer.appendChild(researchSubject);\n    topicContainer.appendChild(researchSubjectDetail);\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"members__list__content__text-container__contact-container\");\n\n    const phone = document.createElement(\"div\");\n    phone.classList.add(\"members__list__content__text-container__phone\");\n\n    const phoneIcon = document.createElement(\"i\");\n    phoneIcon.classList.add(\"fa-solid\");\n    phoneIcon.classList.add(\"fa-phone\");\n\n    const phoneNum = document.createElement(\"span\");\n    phoneNum.textContent = member.Phone;\n\n    phone.appendChild(phoneIcon);\n    phone.appendChild(phoneNum);\n\n    const email = document.createElement(\"div\");\n    email.classList.add(\"members__list__content__text-container__email\");\n\n    const emailIcon = document.createElement(\"i\");\n    emailIcon.classList.add(\"fa-solid\");\n    emailIcon.classList.add(\"fa-envelope\");\n\n    const emailAddr = document.createElement(\"span\");\n    emailAddr.textContent = member.Email;\n\n    email.appendChild(emailIcon);\n    email.appendChild(emailAddr);\n\n    contactContainer.appendChild(phone);\n    contactContainer.appendChild(email);\n\n    textContainer.appendChild(rank);\n    textContainer.appendChild(name);\n    textContainer.appendChild(topicContainer);\n    textContainer.appendChild(contactContainer);\n\n    content.appendChild(imageContainer);\n    content.appendChild(textContainer);\n\n    listItem.appendChild(content);\n\n    listContainer.appendChild(listItem);\n  });\n};\n\nconst sheetName = \"Members\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  // 데이터 활용\n  console.log(data);\n  drawMembers(data);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/members.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e518972c644170e9ccdd")
/******/ })();
/******/ 
/******/ }
);