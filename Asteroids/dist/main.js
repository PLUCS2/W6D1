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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// debugger \n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid (arg) {\n  // constructor () {\n  //   super({color: this.color, radius: this.radius, pos: arg.pos, vel: Util.randomVec(1)})\n  // }\n  this.COLOR = \"#eeeeee\";\n  this.RADIUS = 30;\n\n  return movingObject = new MovingObject({\n    color: this.COLOR,\n    radius: this.RADIUS,\n    pos: arg,\n    vel: Util.scale(Util.randomVec(1), 10)\n  });\n}\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Game (num) {\n  this.DIM_X = 700;\n  this.DIM_Y = 500;\n  this.ASTEROIDS = []; \n  this.NUM_ASTEROIDS = num;\n}\n\nGame.prototype.addAsteroids = function() {\n  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.ASTEROIDS.push( new Asteroid([Math.random()*this.DIM_X, Math.random()*this.DIM_Y]));\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, 700, 500);\n  ctx.fillStyle = \"#ada8e9\";\n  ctx.fillRect(0, 0, 700, 500);\n  this.ASTEROIDS.forEach(function(asteroid) {\n    asteroid.draw(ctx);\n  })\n}\n\nGame.prototype.moveObjects = function(ctx) {\n  this.ASTEROIDS.forEach(function(asteroid) {\n    asteroid.move();\n  })\n  this.draw(ctx);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView (ctx) {\n  this.game = new Game(100);\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  this.game.addAsteroids(); \n  setInterval(this.game.moveObjects.bind(this.game, this.ctx), 100);\n}\n\nmodule.exports = GameView; \n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\nwindow.Util = Util;\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \nwindow.MovingObject = MovingObject; \n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid; \n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\"); \nwindow.Game = Game;\n\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\n\n//  debugger\n\nconst dcl = document.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  canvas.width = 700;\n  canvas.height = 500;\n  const ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"#ada8e9\";\n  ctx.fillRect(0, 0, 700, 500);\n  window.ctx = ctx; \n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options) {\n  this.pos = options.pos; \n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI, true);\n  ctx.fillStyle = this.color;\n  ctx.stroke();\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  // debugger\n  this.pos[0] += this.vel[0]; \n  this.pos[1] += this.vel[1]; \n  // debugger \n}\n\nmodule.exports = MovingObject; \n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util =  {\n  inherits: function(childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype; \n    childClass.prototype = new Surrogate (); \n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });