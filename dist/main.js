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
//Creates the input boxes when Add New To-Do button is pressed


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

    const due = document.createElement("input");
    due.type = 'date'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsd0RBQVk7O0FBRTdEOztBQUVBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUM3QmY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNYakI7QUFDK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QyxrREFBSzs7QUFFN0M7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGekI7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDSHdCO0FBQ3ZDOztBQUVBOztBQUVBLGdCQUFnQixzREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDQTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtREFBSTtBQUN4QjtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7O1VDZmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQjtBQUNNO0FBQ0c7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLG9DQUFvQyxtREFBVTtBQUM5Qyx3Q0FBd0MsbURBQWE7Ozs7OztBQU1yRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGV0b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2lucHV0Ym94ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbmV3UHJvamVjdExvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3ByaW50VG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdExvZ2ljIGZyb20gJy4vbmV3UHJvamVjdExvZ2ljJ1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0RE9NKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbiAgICBwcm9qZWN0VGl0bGUubmFtZSA9ICdwcm9qZWN0VGl0bGUnXG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0VGl0bGUnKVxuICAgIGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIHByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBwcm9qZWN0VGl0bGVMYWJlbCk7XG4gICAgcHJvamVjdFRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJQcm9qZWN0IFRpdGxlOiBcIjtcbiAgICBwcm9qZWN0QWRkQnRuLmlubmVySFRNTCA9ICdBZGQgUHJvamVjdCdcbiAgICBwcm9qZWN0QWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEFkZEJ0bicpXG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG4pXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKVxuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZEJ0bicpXG4gICAgcHJvamVjdEFkZEJ0bjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXcgUHJvamVjdExvZ2ljKCdrZWlyZW4nKSlcblxuICAgIC8vIHByb2plY3RBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXcgUHJvamVjdExvZ2ljKHByb2plY3RUaXRsZS52YWx1ZSkpXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBuZXdQcm9qZWN0RE9NIiwiLy9jaGVja2xpc3QgaGFzIG5vdCBiZWVuIGFkZGVkIHlldFxuXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBUb2RvIiwiLy9DcmVhdGVzIHRoZSBpbnB1dCBib3hlcyB3aGVuIEFkZCBOZXcgVG8tRG8gYnV0dG9uIGlzIHByZXNzZWRcbmltcG9ydCBwcmludCBmcm9tICcuL3ByaW50VG9EbydcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5sZXQgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dENvbnRhaW5lcicpXG5mdW5jdGlvbiBpbnB1dEJveGVzKCl7XG5cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLm5hbWUgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpXG4gICAgY29uc3QgdGl0bGVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICB0aXRsZWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZSk7XG4gICAgdGl0bGVsYWJlbC5pbm5lckhUTUwgPSBcIlRpdGxlOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzYy5uYW1lID0gXCJEZXNjcmlwdGlvblwiXG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKVxuICAgIGNvbnN0IGRlc2NsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBkZXNjbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGRlc2MpO1xuICAgIGRlc2NsYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpXG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlLnR5cGUgPSAnZGF0ZSdcbiAgICBkdWUubmFtZSA9IFwiRHVlXCJcbiAgICBkdWUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUnKVxuICAgIGNvbnN0IGR1ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIGR1ZWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkdWUpO1xuICAgIGR1ZWxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWUpXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHkubmFtZSA9IFwiUHJpb3JpdHlcIlxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKVxuICAgIGxldCB2YWx1ZXMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCcsICdVZ2VudCddXG4gICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWVzKVxuICAgIHsgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgIGNvbnN0IHByaW9yaXR5bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgcHJpb3JpdHlsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkpO1xuICAgIHByaW9yaXR5bGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG5cbiAgICAgICBcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gICAgbm90ZXMubmFtZSA9IFwiTm90ZXNcIlxuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMnKVxuICAgIGNvbnN0IG5vdGVzbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgbm90ZXNsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkpO1xuICAgIG5vdGVzbGFiZWwuaW5uZXJIVE1MID0gXCJOb3RlczogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXNsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXMpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCJcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmludEJ0bicpXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50KVxuXG4gICAgXG4gICAgIFxuICAgICAgfVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgaW5wdXRCb3hlc1xuXG4iLCJmdW5jdGlvbiBQcm9qZWN0TG9naWModGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7ICAgXG4gICAgICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExvZ2ljIiwiXG5pbXBvcnQgY29sbGVjdElucHV0cyBmcm9tICcuL3RvZG9JbnB1dCdcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbmZ1bmN0aW9uIHByaW50ICgpIHtcblxuY29uc3QgbmV3VG9EbyA9IGNvbGxlY3RJbnB1dHMoKVxuZm9yIChsZXQgeCBpbiBuZXdUb0RvKXtcbiAgICBsZXQgeT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHkudGV4dENvbnRlbnQ9bmV3VG9Eb1t4XVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoeSlcbn1cbn1cbiBleHBvcnQgZGVmYXVsdCBwcmludCIsImltcG9ydCBUb2RvIGZyb20gJy4vY3JlYXRldG9kbydcbmltcG9ydCBwcmludCBmcm9tICcuL3ByaW50VG9EbydcblxuZnVuY3Rpb24gY29sbGVjdElucHV0cyAoKXtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWVcbmNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlXG5jb25zdCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlJykudmFsdWVcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbmNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWVcblxuY29uc3QgbmV3VG9EbyA9IG5ldyBUb2RvICh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgbm90ZXMsKVxucmV0dXJuIG5ld1RvRG9cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb2xsZWN0SW5wdXRzIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCBwcmludCBmcm9tICcuL3ByaW50VG9EbydcbmltcG9ydCBpbnB1dEJveGVzIGZyb20gJy4vaW5wdXRib3hlcydcbmltcG9ydCBuZXdQcm9qZWN0RE9NIGZyb20gJy4vTmV3UHJvamVjdCdcblxubGV0IE5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuTmV3VG9Eb0J0bi5pbm5lckhUTUwgPSAnQWRkIE5ldyBUby1EbydcbmxldCBOZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbk5ld1Byb2plY3RCdG4uaW5uZXJIVE1MID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCdcbmxldCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG5cbnguYXBwZW5kQ2hpbGQoTmV3VG9Eb0J0bilcbnguYXBwZW5kQ2hpbGQoTmV3UHJvamVjdEJ0bilcblxuXG5OZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxpbnB1dEJveGVzKVxuTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3RET00pXG5cblxuXG5cblxuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==