/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var sum = __webpack_require__(2);

	var numbers = [1, 2, 3];
	var result = sum(numbers);

	var outputElement = document.getElementById("output")
	outputElement.innerHTML = result;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var addList = __webpack_require__(3);

	 function sum(list){
	        return addList(list, 0);
	      }
		  
	module.exports = sum;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var add = __webpack_require__(4);

	 function addList(list, memo){
	        list.forEach(function (item){
	          memo = add(item, memo);
	        });
	        return memo;
	      }
		  
	module.exports = addList;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function add(a, b){
	  return a + b;
	}

	module.exports = add;

/***/ }
/******/ ]);