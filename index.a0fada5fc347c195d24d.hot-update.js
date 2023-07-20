/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateneeds_lab_web"]("index",{

/***/ "./src/assets/scripts/main.js":
/*!************************************!*\
  !*** ./src/assets/scripts/main.js ***!
  \************************************/
/***/ (() => {

eval("// Description: Main javascript file for the project\n\n// Scroll Events: 헤더바 hover 이벤트\nconst subMenuContainer = document.querySelector(\".navbar__sub-menu-container\");\n\n// 마우스를 올렸을 때 이벤트 리스너 추가\nsubMenuContainer.parentElement.addEventListener(\"mouseover\", () => {\n  subMenuContainer.classList.add(\"active\");\n});\n\n// 마우스가 메뉴 바깥으로 나갔을 때 이벤트 리스너 추가\nsubMenuContainer.parentElement.addEventListener(\"mouseleave\", () => {\n  subMenuContainer.classList.remove(\"active\");\n});\n\n// Scroll Events: 상단 메뉴바 스크롤 이벤트\nwindow.addEventListener(\"scroll\", function () {\n  const navbar = document.querySelector(\".navbar\");\n  const navbarList = navbar.querySelector(\".navbar__list\");\n  const navbarLogoSubText = navbar.querySelector(\".navbar__logo-text--sub\");\n  if (window.scrollY > 0) {\n    navbar.classList.add(\"scrolled\");\n    navbarList.classList.add(\"scrolled\");\n    navbarLogoSubText.classList.add(\"scrolled\");\n  } else {\n    navbar.classList.remove(\"scrolled\");\n    navbarList.classList.remove(\"scrolled\");\n    navbarLogoSubText.classList.remove(\"scrolled\");\n  }\n});\n\n// Window Resize Events: 가로 크기에 따라 font-size 조절\nwindow.addEventListener(\"resize\", function () {\n  // 가로 크기에 따라 font-size 조절\n  var windowWidth = window.innerWidth;\n\n  if (windowWidth >= 1024) {\n    document.body.style.fontSize = \"16px\"; // 가로 크기가 1024px 이상일 때\n  } else if (windowWidth >= 768) {\n    document.body.style.fontSize = \"14px\"; // 가로 크기가 768px 이상일 때\n  } else {\n    document.body.style.fontSize = \"12px\"; // 가로 크기가 767px 이하일 때\n  }\n});\n\n// 초기 로드 시에도 font-size 설정 적용\nwindow.dispatchEvent(new Event(\"resize\"));\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b4517eb445fd35f3c79")
/******/ })();
/******/ 
/******/ }
);