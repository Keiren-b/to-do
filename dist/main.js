/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/NewProject.js":
/*!***************************!*\
  !*** ./src/NewProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _newProjectLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectLogic */ "./src/newProjectLogic.js");


function newProjectDOM(){
    const content = document.getElementById('content')
    const projectContainer = document.createElement('div')
    const projectTitle = document.createElement('input')
    const projectAddBtn = document.createElement('button')

    projectTitle.name = 'projectTitle'
    projectTitle.setAttribute('id','projectTitle')
    const projectTitleLabel = document.createElement("Label");
    projectTitleLabel.setAttribute("for", projectTitleLabel);
    projectTitleLabel.innerHTML = "Project Title: ";
    projectAddBtn.innerHTML = 'Add Project'
    projectAddBtn.setAttribute('id', 'projectAddBtn')

    projectContainer.appendChild(projectTitleLabel);
    projectContainer.appendChild(projectTitle)
    projectContainer.appendChild(projectAddBtn)
    content.appendChild(projectContainer)

    const projectAddBtn2 = document.getElementById('projectAddBtn')
    projectAddBtn2.addEventListener('click', new _newProjectLogic__WEBPACK_IMPORTED_MODULE_0__["default"]('keiren'))

    // projectAddBtn.addEventListener('click', new ProjectLogic(projectTitle.value))

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectDOM);

/***/ }),

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
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    inputContainer.appendChild(titlelabel);
    inputContainer.appendChild(title)

    const desc = document.createElement("textarea");
    desc.name = "Description"
    desc.setAttribute('id', 'desc')
    const desclabel = document.createElement("Label");
    desclabel.setAttribute("for", desc);
    desclabel.innerHTML = "Description: ";
    inputContainer.appendChild(desclabel);
    inputContainer.appendChild(desc)

    const due = document.createElement("date");
    due.name = "Due"
    due.setAttribute('id', 'due')
    const duelabel = document.createElement("Label");
    duelabel.setAttribute("for", due);
    duelabel.innerHTML = "Due Date: ";
    inputContainer.appendChild(duelabel);
    inputContainer.appendChild(due)

    const priority = document.createElement("select");
    priority.name = "Priority"
    priority.setAttribute('id', 'priority')
    let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values)
    {           var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                priority.appendChild(option);
            }
    const prioritylabel = document.createElement("Label");
    prioritylabel.setAttribute("for", priority);
    prioritylabel.innerHTML = "Priority: ";
    inputContainer.appendChild(prioritylabel);
    inputContainer.appendChild(priority)

       

    const notes = document.createElement("textarea");

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

/***/ "./src/newProjectLogic.js":
/*!********************************!*\
  !*** ./src/newProjectLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ProjectLogic(title){
        this.title = title;   
        }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectLogic);

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
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject */ "./src/NewProject.js");





let NewToDoBtn = document.createElement('button')
NewToDoBtn.innerHTML = 'Add New To-Do'
let NewProjectBtn = document.createElement('button')
NewProjectBtn.innerHTML = 'Create New Project'
let x = document.getElementById('content')


x.appendChild(NewToDoBtn)
x.appendChild(NewProjectBtn)


NewToDoBtn.addEventListener('click',_inputboxes__WEBPACK_IMPORTED_MODULE_1__["default"])
NewProjectBtn.addEventListener('click', _NewProject__WEBPACK_IMPORTED_MODULE_2__["default"])





 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsd0RBQVk7O0FBRTdEOztBQUVBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNYYzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QyxrREFBSzs7QUFFN0M7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQzlFekI7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDSHdCO0FBQ3ZDOztBQUVBOztBQUVBLGdCQUFnQixzREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDQTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtREFBSTtBQUN4QjtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7O1VDZmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQjtBQUNNO0FBQ0c7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLG9DQUFvQyxtREFBVTtBQUM5Qyx3Q0FBd0MsbURBQWE7Ozs7OztBQU1yRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGV0b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2lucHV0Ym94ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbmV3UHJvamVjdExvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ByaW50VG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExvZ2ljIGZyb20gJy4vbmV3UHJvamVjdExvZ2ljJ1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0RE9NKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBwcm9qZWN0VGl0bGUubmFtZSA9ICdwcm9qZWN0VGl0bGUnXG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0VGl0bGUnKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcm9qZWN0VGl0bGVMYWJlbCk7XG4gICAgcHJvamVjdFRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJQcm9qZWN0IFRpdGxlOiBcIjtcbiAgICBwcm9qZWN0QWRkQnRuLmlubmVySFRNTCA9ICdBZGQgUHJvamVjdCdcbiAgICBwcm9qZWN0QWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEFkZEJ0bicpXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZEJ0bicpXG4gICAgcHJvamVjdEFkZEJ0bjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXcgUHJvamVjdExvZ2ljKCdrZWlyZW4nKSlcblxuICAgIC8vIHByb2plY3RBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXcgUHJvamVjdExvZ2ljKHByb2plY3RUaXRsZS52YWx1ZSkpXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0RE9NIiwiLy9jaGVja2xpc3QgaGFzIG5vdCBiZWVuIGFkZGVkIHlldFxuXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBUb2RvIiwiaW1wb3J0IHByaW50IGZyb20gJy4vcHJpbnRUb0RvJ1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbmxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0Q29udGFpbmVyJylcbmZ1bmN0aW9uIGlucHV0Qm94ZXMoKXtcblxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUubmFtZSA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJylcbiAgICBjb25zdCB0aXRsZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIHRpdGxlbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIHRpdGxlKTtcbiAgICB0aXRsZWxhYmVsLmlubmVySFRNTCA9IFwiVGl0bGU6IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjLm5hbWUgPSBcIkRlc2NyaXB0aW9uXCJcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpXG4gICAgY29uc3QgZGVzY2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIGRlc2NsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZGVzYyk7XG4gICAgZGVzY2xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYylcblxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRlXCIpO1xuICAgIGR1ZS5uYW1lID0gXCJEdWVcIlxuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZScpXG4gICAgY29uc3QgZHVlbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgZHVlbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGR1ZSk7XG4gICAgZHVlbGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZSlcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS5uYW1lID0gXCJQcmlvcml0eVwiXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpXG4gICAgbGV0IHZhbHVlcyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJywgJ1VnZW50J11cbiAgICBmb3IgKGNvbnN0IHZhbCBvZiB2YWx1ZXMpXG4gICAgeyAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gdmFsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgY29uc3QgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eSk7XG4gICAgcHJpb3JpdHlsYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcblxuICAgICAgIFxuXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgICBub3Rlcy5uYW1lID0gXCJOb3Rlc1wiXG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsICdub3RlcycpXG4gICAgY29uc3Qgbm90ZXNsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBub3Rlc2xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcmlvcml0eSk7XG4gICAgbm90ZXNsYWJlbC5pbm5lckhUTUwgPSBcIk5vdGVzOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc2xhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlcylcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIlxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW50QnRuJylcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKVxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnQpXG5cbiAgICBcbiAgICAgXG4gICAgICB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBpbnB1dEJveGVzXG5cbiIsImZ1bmN0aW9uIFByb2plY3RMb2dpYyh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgICBcbiAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TG9naWMiLCJcbmltcG9ydCBjb2xsZWN0SW5wdXRzIGZyb20gJy4vdG9kb0lucHV0J1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuZnVuY3Rpb24gcHJpbnQgKCkge1xuXG5jb25zdCBuZXdUb0RvID0gY29sbGVjdElucHV0cygpXG5mb3IgKGxldCB4IGluIG5ld1RvRG8pe1xuICAgIGxldCB5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgeS50ZXh0Q29udGVudD1uZXdUb0RvW3hdXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh5KVxufVxufVxuIGV4cG9ydCBkZWZhdWx0IHByaW50IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi9jcmVhdGV0b2RvJ1xuaW1wb3J0IHByaW50IGZyb20gJy4vcHJpbnRUb0RvJ1xuXG5mdW5jdGlvbiBjb2xsZWN0SW5wdXRzICgpe1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZVxuY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWVcbmNvbnN0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZVxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZVxuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZVxuXG5jb25zdCBuZXdUb0RvID0gbmV3IFRvZG8gKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5LCBub3RlcywpXG5yZXR1cm4gbmV3VG9Eb1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbGxlY3RJbnB1dHMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHByaW50IGZyb20gJy4vcHJpbnRUb0RvJ1xuaW1wb3J0IGlucHV0Qm94ZXMgZnJvbSAnLi9pbnB1dGJveGVzJ1xuaW1wb3J0IG5ld1Byb2plY3RET00gZnJvbSAnLi9OZXdQcm9qZWN0J1xuXG5sZXQgTmV3VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5OZXdUb0RvQnRuLmlubmVySFRNTCA9ICdBZGQgTmV3IFRvLURvJ1xubGV0IE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuTmV3UHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnQ3JlYXRlIE5ldyBQcm9qZWN0J1xubGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cblxueC5hcHBlbmRDaGlsZChOZXdUb0RvQnRuKVxueC5hcHBlbmRDaGlsZChOZXdQcm9qZWN0QnRuKVxuXG5cbk5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGlucHV0Qm94ZXMpXG5OZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdERPTSlcblxuXG5cblxuXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9