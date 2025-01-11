"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("gallery",{

/***/ "./src/assets/scripts/pages/gallery.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/pages/gallery.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\nconst sheetName = \"Gallery\";\n\nconst params = new URLSearchParams(window.location.search);\nconst galleryId = params.get(\"title\");\nconst galleryContainer = document.querySelector(\".gallery__list-container\");\nconst boardContainer = document.querySelector(\".board__list-container\");\n\nconst drawGallerys = (gallery) => {\n  let { ImageID, Title, Date } = gallery;\n  ImageID = ImageID.split(\",\");\n\n  const galleryList = document.createElement(\"a\");\n  galleryList.classList.add(\"gallery__list\");\n  const titleLink = Title.replace(/\\s+/g, \"-\");\n  galleryList.href = `./gallery?title=${titleLink}`;\n\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"gallery__list__image\");\n  const image = document.createElement(\"img\");\n  image.src = ImageID[0] ? `https://drive.google.com/uc?export=view&id=${ImageID[0]}` : \"./images/empty.png\";\n  image.alt = Title;\n\n  const infoContainer = document.createElement(\"div\");\n  infoContainer.classList.add(\"gallery__list__info\");\n  const title = document.createElement(\"div\");\n  title.classList.add(\"gallery__list__title\");\n  title.textContent = Title;\n  const date = document.createElement(\"div\");\n  date.classList.add(\"gallery__list__date\");\n  date.textContent = Date;\n\n  infoContainer.appendChild(title);\n  infoContainer.appendChild(date);\n\n  imageContainer.appendChild(image);\n\n  galleryList.appendChild(imageContainer);\n  galleryList.appendChild(infoContainer);\n\n  galleryContainer.appendChild(galleryList);\n};\n\nconst drawGalleryDetail = (gallery) => {\n  let { ImageID, Title, Text, Date } = gallery;\n  ImageID = ImageID.split(\",\");\n\n  const boardTitle = document.createElement(\"h2\");\n  boardTitle.classList.add(\"board__list__title\");\n  boardTitle.classList.add(\"font-bold\");\n  boardTitle.textContent = Title;\n\n  const boardDate = document.createElement(\"div\");\n  boardDate.classList.add(\"board__list__date\");\n  boardDate.textContent = Date;\n\n  const boardContents = document.createElement(\"div\");\n  boardContents.classList.add(\"board__list__contents\");\n  ImageID.forEach((imageID, index) => {\n    const image = document.createElement(\"img\");\n    image.src = imageID ? `https://drive.google.com/uc?export=view&id=${imageID}` : \"./images/empty.png\";\n    image.alt = `${Title} ${index + 1}`;\n    boardContents.appendChild(image);\n  });\n  const contents = document.createElement(\"p\");\n  contents.innerHTML = Text;\n  boardContents.appendChild(contents);\n\n  boardContainer.appendChild(boardTitle);\n  boardContainer.appendChild(boardDate);\n  boardContainer.appendChild(boardContents);\n};\n\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, (gallerys) => {\n  // 갤러리\n  if (galleryId) {\n    boardContainer.style.display = \"block\";\n    galleryContainer.style.display = \"none\";\n\n    const result = gallerys.find((gallery) => gallery.Title.replace(/\\s+/g, \"-\") === galleryId);\n    drawGalleryDetail(result);\n  }\n  // 갤러리 리스트\n  else {\n    gallerys.forEach((gallery) => {\n      drawGallerys(gallery);\n    });\n  }\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ae3e82b5970f2fe4af31")
/******/ })();
/******/ 
/******/ }
);