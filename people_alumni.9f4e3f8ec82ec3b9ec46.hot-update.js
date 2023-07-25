"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("people_alumni",{

/***/ "./src/assets/scripts/pages/alumni.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/pages/alumni.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst drawMembers = (members) => {\n  const listContainer = document.querySelector(\".members__list-container\");\n\n  members.forEach((member) => {\n    if (member.Tag !== \"Alumni\") return;\n    const listItem = document.createElement(\"div\");\n    listItem.classList.add(\"members__list\");\n\n    const content = document.createElement(\"div\");\n    content.classList.add(\"members__list__content\");\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"members__list__content__image-container\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"members__list__content__image\");\n    const imageUrl = member.ImageID ? `https://drive.google.com/uc?export=view&id=${member.ImageID}` : \"./images/empty.png\";\n    image.src = imageUrl;\n    image.alt = member.Name;\n\n    imageContainer.appendChild(image);\n\n    const textContainer = document.createElement(\"div\");\n    textContainer.classList.add(\"members__list__content__text-container\");\n\n    const rank = document.createElement(\"div\");\n    rank.classList.add(\"members__list__content__text-container__rank\");\n    rank.classList.add(\"font-bold\");\n    rank.textContent = member.Rank;\n\n    const name = document.createElement(\"div\");\n    name.classList.add(\"members__list__content__text-container__name\");\n    name.classList.add(\"font-bold\");\n    name.textContent = member.Name;\n\n    const topicContainer = document.createElement(\"div\");\n    topicContainer.classList.add(\"members__list__content__text-container__topic-container\");\n    if (!member[\"Research Topic\"]) {\n      console.log(member[\"Research Topic\"]);\n      const researchSubject = document.createElement(\"p\");\n      researchSubject.textContent = \"Research Subject\";\n\n      const researchSubjectDetail = document.createElement(\"span\");\n      researchSubjectDetail.textContent = member[\"Research Subject\"];\n\n      topicContainer.appendChild(researchSubject);\n      topicContainer.appendChild(researchSubjectDetail);\n    }\n\n    if (!member[\"Department\"]) {\n      const department = document.createElement(\"p\");\n      department.textContent = \"Department\";\n\n      const departmentDetail = document.createElement(\"span\");\n      departmentDetail.textContent = member[\"Department\"];\n\n      topicContainer.appendChild(department);\n      topicContainer.appendChild(departmentDetail);\n    }\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"members__list__content__text-container__contact-container\");\n\n    const email = document.createElement(\"div\");\n    email.classList.add(\"members__list__content__text-container__email\");\n\n    const emailIcon = document.createElement(\"i\");\n    emailIcon.classList.add(\"fa-solid\");\n    emailIcon.classList.add(\"fa-envelope\");\n\n    const emailAddr = document.createElement(\"span\");\n    emailAddr.textContent = member.Email;\n\n    email.appendChild(emailIcon);\n    email.appendChild(emailAddr);\n\n    contactContainer.appendChild(email);\n\n    textContainer.appendChild(rank);\n    textContainer.appendChild(name);\n    textContainer.appendChild(topicContainer);\n    textContainer.appendChild(contactContainer);\n\n    content.appendChild(imageContainer);\n    content.appendChild(textContainer);\n\n    listItem.appendChild(content);\n\n    listContainer.appendChild(listItem);\n  });\n};\n\nconst sheetName = \"Members\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  drawMembers(data);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/alumni.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fea7bddcfc8970b01d99")
/******/ })();
/******/ 
/******/ }
);