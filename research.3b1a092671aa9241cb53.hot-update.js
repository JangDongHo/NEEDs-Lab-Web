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

eval("const changeShowTag = (event) => {\n  const targetTag = event.target.textContent;\n\n  researchListContainers.forEach((container) => {\n    const containerResearchTag = container.getAttribute(\"research-tag\");\n\n    if (containerResearchTag === targetTag) {\n      container.style.display = \"block\";\n    } else {\n      container.style.display = \"none\";\n    }\n  });\n\n  tags.forEach((tag) => {\n    tag.classList.toggle(\"selected\", tag.textContent === targetTag);\n  });\n};\n\nconst researchListContainers = document.querySelectorAll(\".research__list-container\");\nconst tags = document.querySelectorAll(\".tag__item\");\n\ntags.forEach((tag) => {\n  tag.addEventListener(\"click\", changeShowTag);\n});\n\n// 첫 번째 research만 보이도록 설정\nresearchListContainers.forEach((container) => {\n  const containerResearchTag = container.getAttribute(\"research-tag\");\n\n  if (containerResearchTag === \"research_1\") {\n    container.style.display = \"block\";\n  } else {\n    container.style.display = \"none\";\n  }\n});\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/research.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("87d0a0aeed4ddc462eea")
/******/ })();
/******/ 
/******/ }
);