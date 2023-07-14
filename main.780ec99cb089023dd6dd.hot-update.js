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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst drawMembers = (data) => {\n  var membersListContainer = document.querySelector(\".members__list\");\n\n  // 멤버 요소 생성\n  var memberElement = document.createElement(\"div\");\n  memberElement.classList.add(\"members__list__content\");\n\n  // 이미지 컨테이너 생성\n  var imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"members__list__content__image-container\");\n  var image = document.createElement(\"img\");\n  image.classList.add(\"members__list__content__image\");\n  image.src = data.Image;\n  image.alt = \"Profile Image\";\n  imageContainer.appendChild(image);\n  memberElement.appendChild(imageContainer);\n\n  // 텍스트 컨테이너 생성\n  var textContainer = document.createElement(\"div\");\n  textContainer.classList.add(\"members__list__content__text-container\");\n\n  // 멤버 정보 추가\n  var rank = document.createElement(\"div\");\n  rank.classList.add(\"members__list__content__text-container__rank\");\n  rank.textContent = data.Tag;\n  textContainer.appendChild(rank);\n\n  var name = document.createElement(\"div\");\n  name.classList.add(\"members__list__content__text-container__name\");\n  name.textContent = data.Name;\n  textContainer.appendChild(name);\n\n  var researchSubject = document.createElement(\"div\");\n  researchSubject.classList.add(\"members__list__content__text-container__topic-container\");\n  researchSubject.textContent = \"Research Subject\";\n  var researchSubjectValue = document.createElement(\"span\");\n  researchSubjectValue.textContent = data[\"Research Subject\"];\n  researchSubject.appendChild(researchSubjectValue);\n  textContainer.appendChild(researchSubject);\n\n  var contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"members__list__content__text-container__contact-container\");\n\n  var phone = document.createElement(\"div\");\n  phone.classList.add(\"members__list__content__text-container__phone\");\n  var phoneIcon = document.createElement(\"i\");\n  phoneIcon.classList.add(\"fa-solid\", \"fa-phone\");\n  var phoneValue = document.createElement(\"span\");\n  phoneValue.textContent = data.Phone;\n  phone.appendChild(phoneIcon);\n  phone.appendChild(phoneValue);\n  contactContainer.appendChild(phone);\n\n  var email = document.createElement(\"div\");\n  email.classList.add(\"members__list__content__text-container__email\");\n  var emailIcon = document.createElement(\"i\");\n  emailIcon.classList.add(\"fa-solid\", \"fa-envelope\");\n  var emailValue = document.createElement(\"span\");\n  emailValue.textContent = data.Email;\n  email.appendChild(emailIcon);\n  email.appendChild(emailValue);\n  contactContainer.appendChild(email);\n\n  textContainer.appendChild(contactContainer);\n\n  memberElement.appendChild(textContainer);\n\n  membersListContainer.appendChild(memberElement);\n};\n\nconst sheetName = \"Members\";\nconst data = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName);\ndrawMembers(data);\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/members.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74f26ebe2eddbf4fe65a")
/******/ })();
/******/ 
/******/ }
);