/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sapper/src/Coords.js":
/*!******************************!*\
  !*** ./sapper/src/Coords.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Coords)\n/* harmony export */ });\nclass Coords {\n  constructor(y, x) {\n    this.y = y;\n    this.x = x;\n  }\n  static init(y, x) {\n    return new Coords(y, x);\n  }\n  getY() {\n    return this.y;\n  }\n  setY(y) {\n    this.y = y;\n  }\n  getX() {\n    return this.x;\n  }\n  setX(y) {\n    this.x = x;\n  }\n}\n\n//# sourceURL=webpack://sappergame/./sapper/src/Coords.js?");

/***/ }),

/***/ "./sapper/src/Event.js":
/*!*****************************!*\
  !*** ./sapper/src/Event.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Event)\n/* harmony export */ });\nclass Event {\n  constructor(sapper, viewer) {\n    this.sapper = sapper;\n    this.viewer = viewer;\n    this.clickHandler;\n    this.clickToogleModeHandler;\n    this.contextmenuHandler;\n  }\n  static init(sapper, viewer) {\n    return new Event(sapper, viewer);\n  }\n  addEvents() {\n    let box = this.viewer.getBox();\n    this.clickHandler = event => {\n      let item = event.target;\n      if (this.sapper.getToogleClickMode()) {\n        this.contextmenuHandler(event);\n      } else {\n        if (item.classList.contains('sapper-box__ceil-inner') && !item.classList.contains('sapper-box__ceil-with-flag') && !item.classList.contains('sapper-box__ceil-opened')) {\n          this.viewer.ceilOpened(item);\n          this.sapper.ceilClickHandler(item);\n        }\n      }\n    };\n    this.contextmenuHandler = event => {\n      let item = event.target;\n      event.preventDefault();\n      if (item.classList.contains('sapper-box__ceil-with-flag')) {\n        this.viewer.removeFlag(item);\n        this.sapper.removeUserMine();\n        return;\n      }\n      if (item.classList.contains('sapper-box__ceil-inner') && !item.classList.contains('sapper-box__ceil-opened') && this.sapper.getUserMineCount() < this.sapper.getMineCount()) {\n        this.viewer.ceilWithFlag(item);\n        this.sapper.setUserMine();\n      }\n    };\n    box.addEventListener('click', this.clickHandler);\n    box.addEventListener('contextmenu', this.contextmenuHandler);\n    this.viewer.getStartButton().addEventListener('click', event => {\n      this.sapper.startNewGame();\n    });\n    this.clickToogleModeHandler = event => {\n      this.sapper.toogleClickModeHandle();\n      this.viewer.toogleClickModeHandle(this.sapper.getToogleClickMode());\n    };\n    this.viewer.getToogleClickMode().addEventListener('click', this.clickToogleModeHandler);\n  }\n  removeEvents() {\n    let box = this.viewer.getBox();\n    box.removeEventListener('click', this.clickHandler);\n    box.removeEventListener('contextmenu', this.contextmenuHandler);\n    this.viewer.getToogleClickMode().removeEventListener('click', this.clickToogleModeHandler);\n  }\n}\n\n//# sourceURL=webpack://sappergame/./sapper/src/Event.js?");

/***/ }),

/***/ "./sapper/src/Mine.js":
/*!****************************!*\
  !*** ./sapper/src/Mine.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mine)\n/* harmony export */ });\nclass Mine {\n  constructor(coords) {\n    this.coords = coords;\n  }\n  static init(coords) {\n    return new Mine(coords);\n  }\n  getCoords() {\n    return this.coords;\n  }\n}\n\n//# sourceURL=webpack://sappergame/./sapper/src/Mine.js?");

/***/ }),

/***/ "./sapper/src/Sapper.js":
/*!******************************!*\
  !*** ./sapper/src/Sapper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sapper)\n/* harmony export */ });\n/* harmony import */ var _Coords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coords.js */ \"./sapper/src/Coords.js\");\n/* harmony import */ var _Mine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mine.js */ \"./sapper/src/Mine.js\");\n/* harmony import */ var _Viewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viewer.js */ \"./sapper/src/Viewer.js\");\n/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Event.js */ \"./sapper/src/Event.js\");\n\n\n\n\nclass Sapper {\n  constructor(elem) {\n    this.greed = 8;\n    this.mineCount = 7;\n    this.viewer = _Viewer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(elem, this.greed);\n    this.event = _Event_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(this, this.viewer);\n    this.mineList = [];\n    this.box = [];\n    this.openedCeilCount = 0;\n    this.userMineCount = 0;\n    this.openedCeils = [];\n    this.toogleClickMode = false;\n  }\n  static init(elem) {\n    return new Sapper(elem);\n  }\n  start() {\n    this.setMineList();\n    this.setBox();\n    this.viewer.renderApp();\n    this.viewer.setFlagCounter(this.getUserMineCount());\n    this.viewer.setMineCounter(this.getMineCount());\n    this.event.addEvents();\n    this.setPlay();\n  }\n  setPlay() {\n    let viewer = this.viewer;\n    this.play = {\n      inProcces: true,\n      message: ''\n    };\n    this.play = new Proxy(this.play, {\n      set(target, prop, value) {\n        if (prop === 'inProcces' && value === false) {\n          viewer.showStartButton();\n        }\n        if (prop === 'message') {\n          viewer.setMessage(value);\n          viewer.showMessage();\n        }\n        return true;\n      }\n    });\n  }\n  getMineCount() {\n    return this.mineCount;\n  }\n  getUserMineCount() {\n    return this.userMineCount;\n  }\n  random(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n  setMineList() {\n    let list = [];\n    let start = true;\n    while (start) {\n      let y = this.random(0, this.greed - 1);\n      let x = this.random(0, this.greed - 1);\n      let value = y + '-' + x;\n      if (!list.includes(value)) {\n        list.push(value);\n        this.mineList.push(_Mine_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(_Coords_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(y, x)));\n      }\n      if (this.mineList.length === this.mineCount) {\n        start = false;\n      }\n    }\n  }\n  setBox() {\n    for (let y = 0; y < this.greed; y++) {\n      this.box[y] = [];\n      for (let x = 0; x < this.greed; x++) {\n        this.box[y][x] = 0;\n      }\n    }\n    this.mineList.forEach(mine => {\n      let coords = mine.getCoords();\n      let y = coords.getY();\n      let x = coords.getX();\n      this.box[y][x] = -1;\n      this.setCountersForSiblingItems(y, x);\n    });\n\n    //console.log(this.box)\n  }\n  stepToLeft(y, x) {\n    if (x !== 0 && this.box[y][x - 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToRight(y, x) {\n    if (x + 1 < this.greed && this.box[y][x + 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToUp(y, x) {\n    if (y !== 0 && this.box[y - 1][x] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToDown(y, x) {\n    if (y + 1 < this.greed && this.box[y + 1][x] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToUpLeft(y, x) {\n    if (y !== 0 && x !== 0 && this.box[y - 1][x - 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToUpRight(y, x) {\n    if (y !== 0 && x + 1 < this.greed && this.box[y - 1][x + 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToDownLeft(y, x) {\n    if (y + 1 < this.greed && x !== 0 && this.box[y + 1][x - 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  stepToDownRight(y, x) {\n    if (y + 1 < this.greed && x + 1 < this.greed && this.box[y + 1][x + 1] !== -1) {\n      return true;\n    }\n    return false;\n  }\n  setCountersForSiblingItems(y, x) {\n    this.stepToLeft(y, x) && ++this.box[y][x - 1];\n    this.stepToRight(y, x) && ++this.box[y][x + 1];\n    this.stepToUp(y, x) && ++this.box[y - 1][x];\n    this.stepToDown(y, x) && ++this.box[y + 1][x];\n    this.stepToUpLeft(y, x) && ++this.box[y - 1][x - 1];\n    this.stepToUpRight(y, x) && ++this.box[y - 1][x + 1];\n    this.stepToDownLeft(y, x) && ++this.box[y + 1][x - 1];\n    this.stepToDownRight(y, x) && ++this.box[y + 1][x + 1];\n  }\n  ceilClickHandler(item) {\n    let y = +item.getAttribute('data-y');\n    let x = +item.getAttribute('data-x');\n    let value = this.box[y][x];\n    if (value === -1) {\n      this.viewer.ceilWithMine(item);\n      this.play.inProcces = false;\n      this.play.message = 'BOOM!';\n      this.event.removeEvents();\n      return;\n    }\n    if (value !== 0) {\n      ++this.openedCeilCount;\n      this.viewer.setValue(item, value);\n    }\n    if (value === 0) {\n      ++this.openedCeilCount;\n      this.openedCeils.push(y + '-' + x);\n      this.openChains(y, x, true);\n    }\n    if (this.openedCeilCount === this.greed * this.greed - this.mineCount) {\n      this.play.inProcces = false;\n      this.play.message = 'You win!';\n      this.event.removeEvents();\n    }\n  }\n  openChains(y, x, isNotcheck) {\n    let value = this.box[y][x];\n    if (!isNotcheck) {\n      if (!this.openedCeils.includes(y + '-' + x)) {\n        this.openedCeils.push(y + '-' + x);\n        this.viewer.setOpenedCeil(y, x, value) && ++this.openedCeilCount;\n      } else {\n        return;\n      }\n    }\n    if (value > 0) {\n      return;\n    }\n    this.stepToLeft(y, x) && this.openChains(y, x - 1);\n    this.stepToRight(y, x) && this.openChains(y, x + 1);\n    this.stepToUp(y, x) && this.openChains(y - 1, x);\n    this.stepToDown(y, x) && this.openChains(y + 1, x);\n    this.stepToUpLeft(y, x) && this.openChains(y - 1, x - 1);\n    this.stepToUpRight(y, x) && this.openChains(y - 1, x + 1);\n    this.stepToDownLeft(y, x) && this.openChains(y + 1, x - 1);\n    this.stepToDownRight(y, x) && this.openChains(y + 1, x + 1);\n  }\n  setUserMine() {\n    ++this.userMineCount;\n    this.viewer.setFlagCounter(this.getUserMineCount());\n  }\n  removeUserMine() {\n    --this.userMineCount;\n    this.viewer.setFlagCounter(this.getUserMineCount());\n  }\n  getToogleClickMode() {\n    return this.toogleClickMode;\n  }\n  toogleClickModeHandle() {\n    if (this.toogleClickMode) {\n      this.toogleClickMode = false;\n    } else {\n      this.toogleClickMode = true;\n    }\n  }\n  startNewGame() {\n    this.mineList = [];\n    this.box = [];\n    this.openedCeils = [];\n    this.openedCeilCount = 0;\n    this.userMineCount = 0;\n    this.toogleClickMode = false;\n    this.viewer.clear();\n    this.start();\n  }\n}\n\n//# sourceURL=webpack://sappergame/./sapper/src/Sapper.js?");

/***/ }),

/***/ "./sapper/src/Viewer.js":
/*!******************************!*\
  !*** ./sapper/src/Viewer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Viewer)\n/* harmony export */ });\nclass Viewer {\n  constructor(app, greed) {\n    this.app = document.querySelector(app);\n    this.greed = greed;\n    this.box;\n    this.flagCounter;\n    this.mineCounter;\n    this.gameMessage;\n    this.startButton;\n    this.toogleClickModeButton;\n  }\n  static init(app, greed) {\n    return new Viewer(app, greed);\n  }\n  createElement(tag, className) {\n    let item = document.createElement(tag);\n    if (className) {\n      item.className = className;\n    }\n    return item;\n  }\n  appendChild(item, childs) {\n    childs.forEach(child => {\n      item.appendChild(child);\n    });\n  }\n  renderApp() {\n    let app = this.createElement('div', 'sapper-app');\n    this.box = this.createElement('div', 'sapper-box');\n    let panel = this.createElement('div', 'sapper-box__panel');\n    this.flagCounter = this.createElement('div', 'sapper-box__panel-flag');\n    this.mineCounter = this.createElement('div', 'sapper-box__panel-mine');\n    this.toogleClickModeButton = this.createElement('div', 'sapper-box__toogle-click-mode');\n    this.appendChild(panel, [this.mineCounter, this.flagCounter, this.toogleClickModeButton]);\n    for (let y = 0; y < this.greed; y++) {\n      let row = this.createElement('div', 'sapper-box__row sapper-box__row-' + y);\n      for (let x = 0; x < this.greed; x++) {\n        let ceil = this.createElement('div', 'sapper-box__ceil sapper-box__ceil-' + x);\n        let ceilInner = this.createElement('div', 'sapper-box__ceil-inner');\n        ceilInner.setAttribute('data-y', y);\n        ceilInner.setAttribute('data-x', x);\n        ceil.appendChild(ceilInner);\n        row.appendChild(ceil);\n      }\n      this.box.appendChild(row);\n    }\n    this.gameMessage = this.createElement('div', 'sapper-box__message');\n    this.startButton = this.createElement('div', 'sapper-box__start-button');\n    this.startButton.textContent = 'Start new game?';\n    this.appendChild(app, [panel, this.box, this.gameMessage, this.startButton]);\n    this.app.appendChild(app);\n  }\n  getBox() {\n    return this.box;\n  }\n  ceilOpened(ceil) {\n    ceil.classList.add('sapper-box__ceil-opened');\n  }\n  setValue(ceil, value) {\n    ceil.textContent = value;\n  }\n  ceilWithMine(ceil) {\n    ceil.classList.add('sapper-box__ceil-with-mine');\n  }\n  ceilWithFlag(ceil) {\n    ceil.classList.add('sapper-box__ceil-with-flag');\n  }\n  removeFlag(ceil) {\n    ceil.classList.remove('sapper-box__ceil-with-flag');\n  }\n  setFlagCounter(count) {\n    this.flagCounter.textContent = count;\n  }\n  setMineCounter(count) {\n    this.mineCounter.textContent = count;\n  }\n  setMessage(message) {\n    this.gameMessage.textContent = message;\n  }\n  showStartButton() {\n    this.startButton.classList.add('sapper-box__start-button--show');\n  }\n  hideStartButton() {\n    this.startButton.classList.remove('sapper-box__start-button--show');\n  }\n  showMessage() {\n    this.gameMessage.classList.add('sapper-box__message--show');\n  }\n  hideMessage() {\n    this.gameMessage.classList.remove('sapper-box__message--show');\n  }\n  getStartButton() {\n    return this.startButton;\n  }\n  clear() {\n    while (this.app.firstChild) {\n      this.app.firstChild.remove();\n    }\n  }\n  setOpenedCeil(y, x, value) {\n    let item = this.app.querySelector('.sapper-box__row-' + y + ' > .sapper-box__ceil-' + x + ' > .sapper-box__ceil-inner');\n    if (!item.classList.contains('sapper-box__ceil-with-flag') && !item.classList.contains('sapper-box__ceil-opened')) {\n      if (value > 0) {\n        this.setValue(item, value);\n      }\n      this.ceilOpened(item);\n      return true;\n    }\n    return false;\n  }\n  getToogleClickMode() {\n    return this.toogleClickModeButton;\n  }\n  toogleClickModeHandle(state) {\n    if (state) {\n      this.toogleClickModeButton.classList.add('sapper-box__toogle-click-mode--active');\n    } else {\n      this.toogleClickModeButton.classList.remove('sapper-box__toogle-click-mode--active');\n    }\n  }\n}\n\n//# sourceURL=webpack://sappergame/./sapper/src/Viewer.js?");

/***/ }),

/***/ "./sapper/src/sapper-init.js":
/*!***********************************!*\
  !*** ./sapper/src/sapper-init.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sapper.js */ \"./sapper/src/Sapper.js\");\n\nwindow.Sapper = _Sapper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack://sappergame/./sapper/src/sapper-init.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./sapper/src/sapper-init.js");
/******/ 	
/******/ })()
;