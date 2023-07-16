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
/***/ (() => {

eval("function convertName(name) {\n  const nameParts = name.split(\", \");\n  const lastName = nameParts[0];\n  const firstName = nameParts[1];\n  const firstNameInitials = firstName\n    .split(\" \")\n    .map((word) => word[0].toUpperCase() + \".\")\n    .join(\" \");\n  const convertedName = `${firstNameInitials} ${lastName}`;\n  return convertedName;\n}\n\nconst originalName = \"Jo, Hyeonmin\";\nconst convertedName = convertName(originalName);\nconsole.log(convertedName); // 출력: \"H.M. Jo\"\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/pages/publication_international_journal.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f069524bb0d4c156fe7e")
/******/ })();
/******/ 
/******/ }
);