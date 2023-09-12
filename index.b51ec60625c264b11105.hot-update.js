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

eval("// Description: Main javascript file for the project\r\n\r\n// Hover Events: 헤더바 서브 메뉴 표시 이벤트\r\nlet activeSubMenu = null;\r\n\r\nconst navbarListItems = document.querySelectorAll(\".navbar__item\");\r\n\r\nnavbarListItems.forEach((item) => {\r\n  const subMenuContainer = item.querySelector(\".navbar__sub-menu-container\");\r\n  if (!subMenuContainer) return;\r\n  item.addEventListener(\"mouseenter\", () => {\r\n    if (activeSubMenu) {\r\n      activeSubMenu.classList.remove(\"active\");\r\n      activeSubMenu = null;\r\n    }\r\n    subMenuContainer.classList.add(\"active\");\r\n    activeSubMenu = subMenuContainer;\r\n  });\r\n  item.addEventListener(\"mouseleave\", () => {\r\n    subMenuContainer.classList.remove(\"active\");\r\n    activeSubMenu = null;\r\n  });\r\n});\r\n\r\n// Mobile Events: 모바일 메뉴 표시 이벤트\r\nconst navbarOpenMenuBtn = document.querySelector(\".navbar__menu-icon--bars\");\r\nnavbarMenuBtn.addEventListener(\"click\", () => {\r\n  const navbarMenu = document.querySelector(\".navbar__mobile-menu\");\r\n  navbarMenu.classList.add(\"active\");\r\n});\r\n\r\n// Scroll Events: 상단 메뉴바 스크롤 이벤트\r\nwindow.addEventListener(\"scroll\", function () {\r\n  const navbar = document.querySelector(\".navbar\");\r\n  const navbarList = navbar.querySelector(\".navbar__list\");\r\n  const navbarLogoSubText = navbar.querySelector(\".navbar__logo-text--sub\");\r\n  if (window.scrollY > 0) {\r\n    navbar.classList.add(\"scrolled\");\r\n    navbarList.classList.add(\"scrolled\");\r\n    navbarLogoSubText.classList.add(\"scrolled\");\r\n  } else {\r\n    navbar.classList.remove(\"scrolled\");\r\n    navbarList.classList.remove(\"scrolled\");\r\n    navbarLogoSubText.classList.remove(\"scrolled\");\r\n  }\r\n});\r\n\r\n// Window Resize Events: 가로 크기에 따라 font-size 조절\r\nwindow.addEventListener(\"resize\", function () {\r\n  // 가로 크기에 따라 font-size 조절\r\n  var windowWidth = window.innerWidth;\r\n\r\n  if (windowWidth >= 1024) {\r\n    document.body.style.fontSize = \"16px\"; // 가로 크기가 1024px 이상일 때\r\n  } else if (windowWidth >= 768) {\r\n    document.body.style.fontSize = \"14px\"; // 가로 크기가 768px 이상일 때\r\n  } else {\r\n    document.body.style.fontSize = \"12px\"; // 가로 크기가 767px 이하일 때\r\n  }\r\n});\r\n\r\n// 초기 로드 시에도 font-size 설정 적용\r\nwindow.dispatchEvent(new Event(\"resize\"));\r\n\n\n//# sourceURL=webpack://needs-lab-web/./src/assets/scripts/main.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f18166611031801f9937")
/******/ })();
/******/ 
/******/ }
);