/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("research",{

/***/ "./src/assets/scripts/research.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/research.js ***!
  \****************************************/
/***/ (() => {

eval("const changeShowTag = (event) => {\n  const targetTag = event.target.textContent;\n  const researchListContainers = document.querySelectorAll(\".research__list-container\");\n\n  researchListContainers.forEach((container) => {\n    const containerResearchTag = container.getAttribute(\"research-tag\");\n    const isSelectedTag = containerResearchTag === targetTag;\n\n    container.style.display = isSelectedTag ? \"block\" : \"none\";\n  });\n\n  tags.forEach((tag) => {\n    const isCurrentTag = tag.textContent === targetTag;\n    tag.classList.toggle(\"selected\", isCurrentTag);\n  });\n};\n\nconst tags = document.querySelectorAll(\".tag__item\");\nconst initialTag = \"Research 1\"; // 처음에 보여줄 태그\n\ntags.forEach((tag) => {\n  tag.addEventListener(\"click\", changeShowTag);\n});\n\n// 초기에 선택된 태그에 해당하는 컨테이너를 보여줍니다.\nconst initialTagContainer = document.querySelector(`[research-tag='${initialTag}']`);\nif (initialTagContainer) {\n  initialTagContainer.style.display = \"block\";\n}\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/research.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf321275dc67d0c5d2ae")
/******/ })();
/******/ 
/******/ }
);