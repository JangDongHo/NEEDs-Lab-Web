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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = (sheetName, callback) => {\n  const xhr = new XMLHttpRequest();\n  const sheetId = \"1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg\";\n  const apiKey = \"AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo\";\n  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;\n  xhr.open(\"GET\", url, true);\n\n  xhr.onload = function () {\n    if (xhr.status === 200) {\n      var response = xhr.responseText;\n      const result = convertToKeyValue(JSON.parse(response));\n      callback(result);\n    }\n  };\n\n  xhr.onerror = function () {\n    console.error(\"요청 실패\");\n  };\n\n  xhr.send();\n};\n\nconst convertToKeyValue = (data) => {\n  const keys = data.values[0];\n  const result = [];\n\n  for (let i = 1; i < data.values.length; i++) {\n    let obj = {};\n    let row = data.values[i];\n    for (let j = 0; j < keys.length; j++) {\n      obj[keys[j]] = row[j];\n    }\n    result.push(obj);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/getData.js?");

/***/ }),

/***/ "./src/assets/scripts/members.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/members.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/assets/scripts/getData.js\");\n\n\nconst drawMembers = (members) => {\n  const listContainer = document.querySelector(\".members__list-container\");\n\n  members.forEach((member) => {\n    const listItem = document.createElement(\"div\");\n    listItem.classList.add(\"members__list\");\n\n    const content = document.createElement(\"div\");\n    content.classList.add(\"members__list__content\");\n\n    const imageContainer = document.createElement(\"div\");\n    imageContainer.classList.add(\"members__list__content__image-container\");\n\n    const image = document.createElement(\"img\");\n    image.classList.add(\"members__list__content__image\");\n    image.src = member.Image;\n    image.alt = member.Name;\n\n    imageContainer.appendChild(image);\n\n    const textContainer = document.createElement(\"div\");\n    textContainer.classList.add(\"members__list__content__text-container\");\n\n    const rank = document.createElement(\"div\");\n    rank.classList.add(\"members__list__content__text-container__rank\");\n    rank.classList.add(\"font-bold\");\n    rank.textContent = member.Tag;\n\n    const name = document.createElement(\"div\");\n    name.classList.add(\"members__list__content__text-container__name\");\n    name.classList.add(\"font-bold\");\n    name.textContent = member.Name;\n\n    const topicContainer = document.createElement(\"div\");\n    topicContainer.classList.add(\"members__list__content__text-container__topic-container\");\n\n    const researchSubject = document.createElement(\"p\");\n    researchSubject.textContent = \"Research Subject\";\n\n    const researchSubjectDetail = document.createElement(\"span\");\n    researchSubjectDetail.textContent = member[\"Research Subject\"];\n\n    topicContainer.appendChild(researchSubject);\n    topicContainer.appendChild(researchSubjectDetail);\n\n    const contactContainer = document.createElement(\"div\");\n    contactContainer.classList.add(\"members__list__content__text-container__contact-container\");\n\n    const phone = document.createElement(\"div\");\n    phone.classList.add(\"members__list__content__text-container__phone\");\n\n    const phoneIcon = document.createElement(\"i\");\n    phoneIcon.classList.add(\"fa-solid\");\n    phoneIcon.classList.add(\"fa-phone\");\n\n    const phoneNum = document.createElement(\"span\");\n    phoneNum.textContent = member.Phone;\n\n    phone.appendChild(phoneIcon);\n    phone.appendChild(phoneNum);\n\n    const email = document.createElement(\"div\");\n    email.classList.add(\"members__list__content__text-container__email\");\n\n    const emailIcon = document.createElement(\"i\");\n    emailIcon.classList.add(\"fa-solid\");\n    emailIcon.classList.add(\"fa-envelope\");\n\n    const emailAddr = document.createElement(\"span\");\n    emailAddr.textContent = member.Email;\n\n    email.appendChild(emailIcon);\n    email.appendChild(emailAddr);\n\n    contactContainer.appendChild(phone);\n    contactContainer.appendChild(email);\n\n    textContainer.appendChild(rank);\n    textContainer.appendChild(name);\n    textContainer.appendChild(topicContainer);\n    textContainer.appendChild(contactContainer);\n\n    content.appendChild(imageContainer);\n    content.appendChild(textContainer);\n\n    listItem.appendChild(content);\n\n    listContainer.appendChild(listItem);\n  });\n};\n\nconst sheetName = \"Members\";\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\n  // 데이터 활용\n  console.log(data);\n  drawMembers(data);\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/members.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n/* harmony import */ var _assets_scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/main */ \"./src/assets/scripts/main.js\");\n/* harmony import */ var _assets_scripts_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_main__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _people_members__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people_members */ \"./src/people_members.js\");\n/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/logo.png */ \"./src/assets/images/logo.png\");\n/* harmony import */ var _assets_images_representative_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/representative_image.png */ \"./src/assets/images/representative_image.png\");\n/* harmony import */ var _assets_images_professor_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/professor.png */ \"./src/assets/images/professor.png\");\n// Styles\n\n\n// Javascripts\n\n\n\n// Images\n\n\n\n\n\n//# sourceURL=webpack://needs-lab-web/./src/index.js?");

/***/ }),

/***/ "./src/people_members.js":
/*!*******************************!*\
  !*** ./src/people_members.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/getData */ \"./src/assets/scripts/getData.js\");\n/* harmony import */ var _assets_scripts_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/members */ \"./src/assets/scripts/members.js\");\n/* harmony import */ var _assets_images_members_jangdongho_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/members/jangdongho.jpg */ \"./src/assets/images/members/jangdongho.jpg\");\n// Javascripts\n\n\n\n// Images - Mebers\n// Mebers의 이미지는 src/assets/images/members/ 폴더에 저장해주세요.\n\n\n\n//# sourceURL=webpack://needs-lab-web/./src/people_members.js?");

/***/ }),

/***/ "./src/assets/images/members/jangdongho.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/members/jangdongho.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/jangdongho.jpg\";\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/images/members/jangdongho.jpg?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a054600f8992b63a24df")
/******/ })();
/******/ 
/******/ }
);