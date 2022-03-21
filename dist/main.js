/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createtodo.js":
/*!***************************!*\
  !*** ./src/createtodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//checklist has not been added yet

function Todo(title, description, dueDate, priority,notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/inputboxes.js":
/*!***************************!*\
  !*** ./src/inputboxes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printToDo */ "./src/printToDo.js");


let content = document.getElementById('content')
let inputContainer = document.createElement('div')
inputContainer.setAttribute('id', 'inputContainer')
function inputBoxes(){


    const title = document.createElement("input");
    title.type = "text";
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    inputContainer.appendChild(titlelabel);
    inputContainer.appendChild(title)

    const desc = document.createElement("input");
    desc.type = 'text'
    desc.name = "Description"
    desc.setAttribute('id', 'desc')
    const desclabel = document.createElement("Label");
    desclabel.setAttribute("for", desc);
    desclabel.innerHTML = "Description: ";
    inputContainer.appendChild(desclabel);
    inputContainer.appendChild(desc)

    const due = document.createElement("input");
    due.type = 'text'
    due.name = "Due"
    due.setAttribute('id', 'due')
    const duelabel = document.createElement("Label");
    duelabel.setAttribute("for", due);
    duelabel.innerHTML = "Due Date: ";
    inputContainer.appendChild(duelabel);
    inputContainer.appendChild(due)

    const priority = document.createElement("input");
    priority.type = 'text'
    priority.name = "Priority"
    priority.setAttribute('id', 'priority')
    const prioritylabel = document.createElement("Label");
    prioritylabel.setAttribute("for", priority);
    prioritylabel.innerHTML = "Priority: ";
    inputContainer.appendChild(prioritylabel);
    inputContainer.appendChild(priority)

    const notes = document.createElement("input");
    notes.type = 'text'
    notes.name = "Notes"
    notes.setAttribute('id', 'notes')
    const noteslabel = document.createElement("Label");
    noteslabel.setAttribute("for", priority);
    noteslabel.innerHTML = "Notes: ";
    inputContainer.appendChild(noteslabel);
    inputContainer.appendChild(notes)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = "Add To-Do"
    submitBtn.setAttribute('id', 'printBtn')
    inputContainer.appendChild(submitBtn)

    content.appendChild(inputContainer)

    submitBtn.addEventListener('click', _printToDo__WEBPACK_IMPORTED_MODULE_0__["default"])

    
     
      }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputBoxes);



/***/ }),

/***/ "./src/printToDo.js":
/*!**************************!*\
  !*** ./src/printToDo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInput */ "./src/todoInput.js");


const content = document.getElementById('content')

function print () {

const newToDo = (0,_todoInput__WEBPACK_IMPORTED_MODULE_0__["default"])()
for (let x in newToDo){
    let y=document.createElement('div')
    y.textContent=newToDo[x]
    content.appendChild(y)
}
}
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (print);

/***/ }),

/***/ "./src/todoInput.js":
/*!**************************!*\
  !*** ./src/todoInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createtodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtodo */ "./src/createtodo.js");
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printToDo */ "./src/printToDo.js");



function collectInputs (){
const title = document.getElementById('title').value
const desc = document.getElementById('desc').value
const due = document.getElementById('due').value
const priority = document.getElementById('priority').value
const notes = document.getElementById('notes').value

const newToDo = new _createtodo__WEBPACK_IMPORTED_MODULE_0__["default"] (title, desc, due, priority, notes,)
return newToDo
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collectInputs);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printToDo */ "./src/printToDo.js");
/* harmony import */ var _inputboxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputboxes */ "./src/inputboxes.js");




let btn = document.createElement('button')
btn.innerHTML = 'push me'
let x = document.getElementById('content')
x.appendChild(btn)


btn.addEventListener('click',_inputboxes__WEBPACK_IMPORTED_MODULE_1__["default"])





 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDWGM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QyxrREFBSzs7QUFFN0M7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVjO0FBQ3ZDOztBQUVBOztBQUVBLGdCQUFnQixzREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDQTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtREFBSTtBQUN4QjtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7O1VDZmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTCtCO0FBQ007O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw2QkFBNkIsbURBQVU7Ozs7OztBQU12QyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRldG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbnB1dGJveGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ByaW50VG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NoZWNrbGlzdCBoYXMgbm90IGJlZW4gYWRkZWQgeWV0XG5cbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxub3Rlcykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICBcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IFRvZG8iLCJpbXBvcnQgcHJpbnQgZnJvbSAnLi9wcmludFRvRG8nXG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxubGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5wdXRDb250YWluZXInKVxuZnVuY3Rpb24gaW5wdXRCb3hlcygpe1xuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGUubmFtZSA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJylcbiAgICBjb25zdCB0aXRsZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIHRpdGxlbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRpdGxlKTtcbiAgICB0aXRsZWxhYmVsLmlubmVySFRNTCA9IFwiVGl0bGU6IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjLnR5cGUgPSAndGV4dCdcbiAgICBkZXNjLm5hbWUgPSBcIkRlc2NyaXB0aW9uXCJcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpXG4gICAgY29uc3QgZGVzY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIGRlc2NsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzYyk7XG4gICAgZGVzY2xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYylcblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkdWUudHlwZSA9ICd0ZXh0J1xuICAgIGR1ZS5uYW1lID0gXCJEdWVcIlxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZScpXG4gICAgY29uc3QgZHVlbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgZHVlbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZSk7XG4gICAgZHVlbGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5LnR5cGUgPSAndGV4dCdcbiAgICBwcmlvcml0eS5uYW1lID0gXCJQcmlvcml0eVwiXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpXG4gICAgY29uc3QgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eSk7XG4gICAgcHJpb3JpdHlsYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vdGVzLnR5cGUgPSAndGV4dCdcbiAgICBub3Rlcy5uYW1lID0gXCJOb3Rlc1wiXG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlcycpXG4gICAgY29uc3Qgbm90ZXNsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBub3Rlc2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eSk7XG4gICAgbm90ZXNsYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc2xhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlcylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIlxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW50QnRuJylcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnQpXG5cbiAgICBcbiAgICAgXG4gICAgICB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBpbnB1dEJveGVzXG5cbiIsIlxuaW1wb3J0IGNvbGxlY3RJbnB1dHMgZnJvbSAnLi90b2RvSW5wdXQnXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG5mdW5jdGlvbiBwcmludCAoKSB7XG5cbmNvbnN0IG5ld1RvRG8gPSBjb2xsZWN0SW5wdXRzKClcbmZvciAobGV0IHggaW4gbmV3VG9Ebyl7XG4gICAgbGV0IHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB5LnRleHRDb250ZW50PW5ld1RvRG9beF1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHkpXG59XG59XG4gZXhwb3J0IGRlZmF1bHQgcHJpbnQiLCJpbXBvcnQgVG9kbyBmcm9tICcuL2NyZWF0ZXRvZG8nXG5pbXBvcnQgcHJpbnQgZnJvbSAnLi9wcmludFRvRG8nXG5cbmZ1bmN0aW9uIGNvbGxlY3RJbnB1dHMgKCl7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG5jb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZVxuY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZScpLnZhbHVlXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG5jb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlXG5cbmNvbnN0IG5ld1RvRG8gPSBuZXcgVG9kbyAodGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGVzLClcbnJldHVybiBuZXdUb0RvXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29sbGVjdElucHV0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgcHJpbnQgZnJvbSAnLi9wcmludFRvRG8nXG5pbXBvcnQgaW5wdXRCb3hlcyBmcm9tICcuL2lucHV0Ym94ZXMnXG5cbmxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuLmlubmVySFRNTCA9ICdwdXNoIG1lJ1xubGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG54LmFwcGVuZENoaWxkKGJ0bilcblxuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGlucHV0Qm94ZXMpXG5cblxuXG5cblxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==