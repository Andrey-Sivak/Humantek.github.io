/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showBlocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showBlocks */ \"./app/js/showBlocks.js\");\n/* harmony import */ var _showSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showSlides */ \"./app/js/showSlides.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./app/js/menu.js\");\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  (function () {\n    const switchedBlocks = document.getElementsByClassName('group-list_content__block');\n\n    for (let i = 0; i < switchedBlocks.length; i++) {\n      Object(_showBlocks__WEBPACK_IMPORTED_MODULE_0__[\"showBlocks\"])(switchedBlocks[i]);\n    }\n  })();\n\n  (function () {\n    const slidesBtns = document.getElementsByClassName('group-list_list__item');\n    const slides = document.getElementsByClassName('group-list_content');\n    Object(_showSlides__WEBPACK_IMPORTED_MODULE_1__[\"showSlides\"])(slidesBtns, slides);\n  })();\n\n  (function () {\n    const menuWrap = document.getElementsByClassName('menu')[0];\n    Object(_menu__WEBPACK_IMPORTED_MODULE_2__[\"menu\"])(menuWrap);\n    $('#to-ecosystem').click(function () {\n      $('html, body').animate({\n        scrollTop: $('#ecosystem').offset().top\n      }, 1000);\n      $('.menu').removeClass('act');\n    });\n    $('#to-group-list').click(function () {\n      $('html, body').animate({\n        scrollTop: $('#group-list').offset().top\n      }, 1000);\n      $('.menu').removeClass('act');\n    });\n    $('#to-team').click(function () {\n      $('html, body').animate({\n        scrollTop: $('#team').offset().top\n      }, 1000);\n      $('.menu').removeClass('act');\n    });\n    $('#to-contacts').click(function () {\n      $('html, body').animate({\n        scrollTop: $('#contacts').offset().top\n      }, 1000);\n      $('.menu').removeClass('act');\n    });\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n\n\nfunction menu(menuWrap) {\n  if (!menuWrap) return;\n  const btn = menuWrap.getElementsByClassName('menu_btn')[0];\n  const activeClass = 'act';\n  if (!btn) return;\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    menuWrap.classList.toggle(activeClass);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/js/menu.js?");

/***/ }),

/***/ "./app/js/showBlocks.js":
/*!******************************!*\
  !*** ./app/js/showBlocks.js ***!
  \******************************/
/*! exports provided: showBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showBlocks\", function() { return showBlocks; });\n\n\nfunction showBlocks(wrap) {\n  if (!wrap) return;\n  const activeClass = 'act';\n  const btn = wrap.getElementsByClassName('show-hide')[0];\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    wrap.classList.toggle(activeClass);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./app/js/showBlocks.js?");

/***/ }),

/***/ "./app/js/showSlides.js":
/*!******************************!*\
  !*** ./app/js/showSlides.js ***!
  \******************************/
/*! exports provided: showSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSlides\", function() { return showSlides; });\n\n\nfunction showSlides(buttons, slides) {\n  if (!buttons || !slides) return;\n  const activeClass = 'act';\n\n  for (let k = 0; k < buttons.length; k++) {\n    buttons[k].addEventListener('click', function (e) {\n      e.preventDefault();\n      let slideID = 0;\n\n      for (let j = 0; j < buttons.length; j++) {\n        if (buttons[j] === this) {\n          if (!buttons[j].classList.contains(activeClass)) {\n            buttons[j].classList.add(activeClass);\n            slideID = buttons[j].dataset.content;\n          }\n        } else {\n          if (buttons[j].classList.contains(activeClass)) {\n            buttons[j].classList.remove(activeClass);\n          }\n        }\n      }\n\n      for (let j = 0; j < slides.length; j++) {\n        if (slides[j].id === slideID) {\n          if (!slides[j].classList.contains(activeClass)) {\n            slides[j].classList.add(activeClass);\n          }\n        } else {\n          if (slides[j].classList.contains(activeClass)) {\n            slides[j].classList.remove(activeClass);\n          }\n        }\n      }\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack:///./app/js/showSlides.js?");

/***/ })

/******/ });