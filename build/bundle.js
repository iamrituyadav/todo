/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/index.js":
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /***/ () => {
        eval(
          'document.getElementById("btn").addEventListener("click", save);\r\ndocument.addEventListener("DOMContentLoaded", function () {\r\n  console.log("page loaded");\r\n  addLogo();\r\n  display();\r\n});\r\n\r\nfunction save() {\r\n  var x = document.getElementById("text").value;\r\n  let savedData = JSON.parse(localStorage.getItem("descData")) || [];\r\n\r\n  // display(savedData);\r\n\r\n  let data = {\r\n    desc: x,\r\n  };\r\n\r\n  savedData.push(data);\r\n\r\n  localStorage.setItem("descData", JSON.stringify(savedData));\r\n  display();\r\n}\r\n\r\nfunction display() {\r\n  let savedData = JSON.parse(localStorage.getItem("descData")) || [];\r\n\r\n  const container = document.getElementById("notes");\r\n  container.innerHTML = null;\r\n\r\n  savedData.map(function (item) {\r\n    // console.log(item);\r\n    let div = document.createElement("div");\r\n    div.innerText = item.desc;\r\n    \r\n    container.append(div);\r\n  });\r\n}\r\n\r\nfunction addLogo() {\r\n  let img = document.createElement("img");\r\n  img.src = "./static/image/icons8-bbb.svg";\r\n  document.getElementById("logo-container").append(img);\r\n}\r\n\n\n//# sourceURL=webpack://day-1-to-do-app/./src/js/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/js/index.js"]();
  /******/
  /******/
})();
