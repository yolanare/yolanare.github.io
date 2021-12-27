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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./app/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n//# Scripts #//\n//- Setup -\n // - LOADING SCREEN\n\nvar FontsLoaded = false,\n    loadingScreenEl = document.createElement(\"loading-screen\");\nloadingScreenEl.setAttribute(\"class\", \"on-normal on-assets\");\ndocument.body.appendChild(loadingScreenEl);\n\nfunction removeLoadingScreen(on) {\n  document.querySelector(\"loading-screen\").classList.remove(\"on\" + on);\n  console.log('page loaded', on);\n} // -- ASSETS TO LOAD\n\n\nconst srcP = '/src/patterns/',\n      assetsToLoad = [srcP + 'p1.png'];\n\n(function loadAssets() {\n  var assetsLoader = document.createElement(\"assets-loader\");\n  assetsLoader.classList.add(\"dummy\");\n  document.body.appendChild(assetsLoader); // stackoverflow.com/a/37826698 - dividing array by chunks\n\n  var perChunk = 4,\n      // items per chunk\n  assetsByChunks = assetsToLoad.reduce((all, one, i) => {\n    const ch = Math.floor(i / perChunk);\n    all[ch] = [].concat(all[ch] || [], one);\n    return all;\n  }, []);\n  var delay = 0,\n      assetsChunkCount = 0;\n\n  (function loadThemAll() {\n    // load every assets four by four\n    setTimeout(() => {\n      // delaying and separating by chunks helps browser performances\n      delay = 100;\n      var items = '',\n          chunk = assetsByChunks[assetsChunkCount],\n          assetLoaded = 0;\n      chunk.forEach(asset => {\n        items += '<img src=' + asset + '>';\n      });\n      assetsLoader.innerHTML = items; // load next chunk when every asset here has been loaded\n\n      assetsLoader.querySelectorAll(\"img\").forEach(item => {\n        item.addEventListener('load', () => {\n          // load event on every of them\n          ++assetLoaded; // +1 when loaded\n\n          if (assetLoaded >= chunk.length) {\n            // when all assets are loaded\n            if (assetsChunkCount < assetsByChunks.length) {\n              // if not the last chunk\n              loadThemAll();\n            } else {\n              // when is the last chunk : clean & finish\n              assetsLoader.remove();\n              removeLoadingScreen(\"-assets\");\n            }\n          }\n        });\n      });\n      ++assetsChunkCount;\n    }, 0 + delay);\n  })();\n})(); // -- NORMAL LOAD\n\n\nwindow.addEventListener(\"load\", () => {\n  // to be sure the loading screen goes out at some point\n  if (!FontsLoaded) {\n    removeLoadingScreen(\"-normal\");\n  }\n});\n\ndocument.fonts.onloadingdone = () => {\n  // fonts are not too fast and not too long to load, seems good enough\n  removeLoadingScreen(\"-normal\");\n  FontsLoaded = true;\n}; //- Variables -\n//- Scripts -\n\n\nfunction WelcomeSpawnAnimation() {\n  // Step 1\n  console.log('spawn');\n}\n\nfunction WelcomeInteractionAnimation() {\n  // Step 2\n  console.log('click');\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", WelcomeSpawnAnimation);\nwindow.addEventListener(\"click\", WelcomeInteractionAnimation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz9mMTYxIl0sIm5hbWVzIjpbIkZvbnRzTG9hZGVkIiwibG9hZGluZ1NjcmVlbkVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlTG9hZGluZ1NjcmVlbiIsIm9uIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJzcmNQIiwiYXNzZXRzVG9Mb2FkIiwibG9hZEFzc2V0cyIsImFzc2V0c0xvYWRlciIsImFkZCIsInBlckNodW5rIiwiYXNzZXRzQnlDaHVua3MiLCJyZWR1Y2UiLCJhbGwiLCJvbmUiLCJpIiwiY2giLCJNYXRoIiwiZmxvb3IiLCJjb25jYXQiLCJkZWxheSIsImFzc2V0c0NodW5rQ291bnQiLCJsb2FkVGhlbUFsbCIsInNldFRpbWVvdXQiLCJpdGVtcyIsImNodW5rIiwiYXNzZXRMb2FkZWQiLCJmb3JFYWNoIiwiYXNzZXQiLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJ3aW5kb3ciLCJmb250cyIsIm9ubG9hZGluZ2RvbmUiLCJXZWxjb21lU3Bhd25BbmltYXRpb24iLCJXZWxjb21lSW50ZXJhY3Rpb25BbmltYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Q0FJQTs7QUFDQSxJQUFJQSxXQUFXLEdBQUcsS0FBbEI7QUFBQSxJQUNJQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FEdEI7QUFFSUYsZUFBZSxDQUFDRyxZQUFoQixDQUE2QixPQUE3QixFQUFzQyxxQkFBdEM7QUFDQUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLGVBQTFCOztBQUVKLFNBQVNNLG1CQUFULENBQTZCQyxFQUE3QixFQUFpQztBQUM3Qk4s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QTs7O0FBQ0EsU0FBUzhDLHFCQUFULEdBQWlDO0FBQUU7QUFDL0JsQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7O0FBRUQsU0FBU2tDLDJCQUFULEdBQXVDO0FBQUU7QUFDckNuQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0g7O0FBRUQ4QixNQUFNLENBQUNGLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0Q0sscUJBQTVDO0FBRUFILE1BQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNNLDJCQUFqQyIsImZpbGUiOiIuL2FwcC9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8jIFNjcmlwdHMgIy8vXG5cbi8vLSBTZXR1cCAtXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cblxuLy8gLSBMT0FESU5HIFNDUkVFTlxudmFyIEZvbnRzTG9hZGVkID0gZmFsc2UsXG4gICAgbG9hZGluZ1NjcmVlbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxvYWRpbmctc2NyZWVuXCIpO1xuICAgIGxvYWRpbmdTY3JlZW5FbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9uLW5vcm1hbCBvbi1hc3NldHNcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkaW5nU2NyZWVuRWwpO1xuXG5mdW5jdGlvbiByZW1vdmVMb2FkaW5nU2NyZWVuKG9uKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxvYWRpbmctc2NyZWVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiICsgb24pO1xuICAgIGNvbnNvbGUubG9nKCdwYWdlIGxvYWRlZCcsIG9uKTtcbn1cblxuLy8gLS0gQVNTRVRTIFRPIExPQURcbmNvbnN0IHNyY1AgPSAnL3NyYy9wYXR0ZXJucy8nLFxuYXNzZXRzVG9Mb2FkID0gW1xuICAgIHNyY1AgKyAncDEucG5nJyxcbl07XG4oZnVuY3Rpb24gbG9hZEFzc2V0cygpIHtcbiAgICB2YXIgYXNzZXRzTG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzc2V0cy1sb2FkZXJcIik7XG4gICAgICAgIGFzc2V0c0xvYWRlci5jbGFzc0xpc3QuYWRkKFwiZHVtbXlcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXNzZXRzTG9hZGVyKTtcblxuICAgIC8vIHN0YWNrb3ZlcmZsb3cuY29tL2EvMzc4MjY2OTggLSBkaXZpZGluZyBhcnJheSBieSBjaHVua3NcbiAgICB2YXIgcGVyQ2h1bmsgPSA0LCAvLyBpdGVtcyBwZXIgY2h1bmtcbiAgICAgICAgYXNzZXRzQnlDaHVua3MgPSBhc3NldHNUb0xvYWQucmVkdWNlKChhbGwsb25lLGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gTWF0aC5mbG9vcihpL3BlckNodW5rKTsgXG4gICAgICAgICAgICBhbGxbY2hdID0gW10uY29uY2F0KChhbGxbY2hdfHxbXSksb25lKTsgXG4gICAgICAgICAgICByZXR1cm4gYWxsXG4gICAgICAgIH0sIFtdKTtcbiAgICBcbiAgICB2YXIgZGVsYXkgPSAwLCBhc3NldHNDaHVua0NvdW50ID0gMDtcbiAgICAoZnVuY3Rpb24gbG9hZFRoZW1BbGwoKSB7IC8vIGxvYWQgZXZlcnkgYXNzZXRzIGZvdXIgYnkgZm91clxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gZGVsYXlpbmcgYW5kIHNlcGFyYXRpbmcgYnkgY2h1bmtzIGhlbHBzIGJyb3dzZXIgcGVyZm9ybWFuY2VzXG4gICAgICAgICAgICBkZWxheSA9IDEwMDtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9ICcnLFxuICAgICAgICAgICAgICAgIGNodW5rID0gYXNzZXRzQnlDaHVua3NbYXNzZXRzQ2h1bmtDb3VudF0sXG4gICAgICAgICAgICAgICAgYXNzZXRMb2FkZWQgPSAwO1xuXG4gICAgICAgICAgICBjaHVuay5mb3JFYWNoKGFzc2V0ID0+IHsgaXRlbXMgKz0gJzxpbWcgc3JjPScrIGFzc2V0ICsnPic7IH0pO1xuICAgICAgICAgICAgYXNzZXRzTG9hZGVyLmlubmVySFRNTCA9IGl0ZW1zO1xuXG4gICAgICAgICAgICAvLyBsb2FkIG5leHQgY2h1bmsgd2hlbiBldmVyeSBhc3NldCBoZXJlIGhhcyBiZWVuIGxvYWRlZFxuICAgICAgICAgICAgYXNzZXRzTG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIikuZm9yRWFjaChpdGVtID0+IHsgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4geyAvLyBsb2FkIGV2ZW50IG9uIGV2ZXJ5IG9mIHRoZW1cbiAgICAgICAgICAgICAgICArK2Fzc2V0TG9hZGVkOyAvLyArMSB3aGVuIGxvYWRlZFxuICAgICAgICAgICAgICAgIGlmKGFzc2V0TG9hZGVkID49IGNodW5rLmxlbmd0aCkgeyAvLyB3aGVuIGFsbCBhc3NldHMgYXJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBpZihhc3NldHNDaHVua0NvdW50IDwgYXNzZXRzQnlDaHVua3MubGVuZ3RoKXsgLy8gaWYgbm90IHRoZSBsYXN0IGNodW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGhlbUFsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyB3aGVuIGlzIHRoZSBsYXN0IGNodW5rIDogY2xlYW4gJiBmaW5pc2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c0xvYWRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdTY3JlZW4oXCItYXNzZXRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7fSk7XG5cbiAgICAgICAgICAgICsrYXNzZXRzQ2h1bmtDb3VudDtcbiAgICAgICAgfSwgMCArIGRlbGF5KTtcbiAgICB9KSgpO1xufSkoKTtcblxuLy8gLS0gTk9STUFMIExPQURcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7IC8vIHRvIGJlIHN1cmUgdGhlIGxvYWRpbmcgc2NyZWVuIGdvZXMgb3V0IGF0IHNvbWUgcG9pbnRcbiAgICBpZighRm9udHNMb2FkZWQpIHsgcmVtb3ZlTG9hZGluZ1NjcmVlbihcIi1ub3JtYWxcIik7IH1cbn0pO1xuZG9jdW1lbnQuZm9udHMub25sb2FkaW5nZG9uZSA9ICgpID0+IHsgLy8gZm9udHMgYXJlIG5vdCB0b28gZmFzdCBhbmQgbm90IHRvbyBsb25nIHRvIGxvYWQsIHNlZW1zIGdvb2QgZW5vdWdoXG4gICAgcmVtb3ZlTG9hZGluZ1NjcmVlbihcIi1ub3JtYWxcIik7IEZvbnRzTG9hZGVkID0gdHJ1ZTtcbn07XG5cblxuLy8tIFZhcmlhYmxlcyAtXG5cblxuLy8tIFNjcmlwdHMgLVxuZnVuY3Rpb24gV2VsY29tZVNwYXduQW5pbWF0aW9uKCkgeyAvLyBTdGVwIDFcbiAgICBjb25zb2xlLmxvZygnc3Bhd24nKTtcbn1cblxuZnVuY3Rpb24gV2VsY29tZUludGVyYWN0aW9uQW5pbWF0aW9uKCkgeyAvLyBTdGVwIDJcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFdlbGNvbWVTcGF3bkFuaW1hdGlvbik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgV2VsY29tZUludGVyYWN0aW9uQW5pbWF0aW9uKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ }),

/***/ "./app/style.scss":
/*!************************!*\
  !*** ./app/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGUuc2Nzcz8zMmI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXBwL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/style.scss\n");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map