/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/NewProject.js":
/*!***************************!*\
  !*** ./src/NewProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/createinputboxes.js":
/*!*********************************!*\
  !*** ./src/createinputboxes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printToDo */ "./src/printToDo.js");
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_printToDo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todoInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoInput */ "./src/todoInput.js");
//Creates the input boxes when Add New To-Do button is pressed



let content = document.getElementById('content')
let inputContainer = document.createElement('div')
inputContainer.setAttribute('id', 'inputContainer')
function createinputBoxes(){


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

    submitBtn.addEventListener('click', _todoInput__WEBPACK_IMPORTED_MODULE_1__["default"])

    
     
      }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createinputBoxes);



/***/ }),

/***/ "./src/newProjectLogic.js":
/*!********************************!*\
  !*** ./src/newProjectLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/***/ (() => {


// import collectInputs from './todoInput'
// const content = document.getElementById('content')

// function print () {

// const newToDo = collectInputs()
// for (let x in newToDo){
//     let y=document.createElement('div')
//     y.textContent=newToDo[x]
//     content.appendChild(y)
// }
// }
//  export default print

/***/ }),

/***/ "./src/todoInput.js":
/*!**************************!*\
  !*** ./src/todoInput.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function Todo(title, description, dueDate, priority,notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}



function collectInputs (){
const title = document.getElementById('title').value
const desc = document.getElementById('desc').value
const due = document.getElementById('due').value
const priority = document.getElementById('priority').value
const notes = document.getElementById('notes').value

const newToDo = new Todo (title, desc, due, priority, notes)



populateStorage(newToDo)
console.log(retrieveStorage())


// setStorage()
// localStorage.setItem('New To Do', JSON.stringify(newToDo))
}

function populateStorage(x){
        localStorage.setItem('0', JSON.stringify(x))
    }
function retrieveStorage(){
    let blah = JSON.parse(localStorage.getItem('0'))
}

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// return newToDo
// }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collectInputs);

// function setStorage() {

//     if(!localStorage.getItem('title')||
//     !localStorage.getItem('desc')||
//     !localStorage.getItem('due')||
//     !localStorage.getItem('priority')||
//     !localStorage.getItem('notes')
// ) {
//     populateStorage(newToDo);
//   } else {
//     setStyles(newToDo);
//   }


// function populateStorage(x){
//     localStorage.setItem('0', x)
// }

// function setStyles(x) {
//     var test = localStorage.getItem('0');
//     console.log(test)

// }}  

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printToDo */ "./src/printToDo.js");
/* harmony import */ var _printToDo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_printToDo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createinputboxes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createinputboxes */ "./src/createinputboxes.js");
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject */ "./src/NewProject.js");





let NewToDoBtn = document.createElement('button')
NewToDoBtn.innerHTML = 'Add New To-Do'
let NewProjectBtn = document.createElement('button')
NewProjectBtn.innerHTML = 'Create New Project'
let x = document.getElementById('content')


x.appendChild(NewToDoBtn)
x.appendChild(NewProjectBtn)


NewToDoBtn.addEventListener('click',_createinputboxes__WEBPACK_IMPORTED_MODULE_1__["default"])
NewProjectBtn.addEventListener('click', _NewProject__WEBPACK_IMPORTED_MODULE_2__["default"])

//.... for testing//

let testBtn = document.createElement('button')
testBtn.style.backgroundColor = 'pink'
testBtn.innerHTML='populate test'
testBtn.addEventListener('click', ()=>{
    
  
    document.getElementById('title').value = 'Clean Room'
    document.getElementById('desc').value = 'Vacuum the bedroom and mop the kitchen'
    document.getElementById('due').value = '2022-03-13'
    document.getElementById('priority').value = 'High'
    document.getElementById('notes').value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})
x.appendChild(testBtn)





 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsd0RBQVk7O0FBRTdEOztBQUVBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JmO0FBQytCO0FBQ1E7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdDQUF3QyxrREFBYTs7QUFFckQ7QUFDQTtBQUNBOzs7O0FBSUEsaUVBQWUsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGL0I7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7OztBQ0hmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxpRUFBZSxhQUFhOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTCtCO0FBQ2tCO0FBQ1Q7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLG9DQUFvQyx5REFBZ0I7QUFDcEQsd0NBQXdDLG1EQUFhOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7QUFNQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVpbnB1dGJveGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL25ld1Byb2plY3RMb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcmludFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb0lucHV0LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RMb2dpYyBmcm9tICcuL25ld1Byb2plY3RMb2dpYydcblxuZnVuY3Rpb24gbmV3UHJvamVjdERPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgcHJvamVjdFRpdGxlLm5hbWUgPSAncHJvamVjdFRpdGxlJ1xuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJvamVjdFRpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBwcm9qZWN0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJvamVjdFRpdGxlTGFiZWwpO1xuICAgIHByb2plY3RUaXRsZUxhYmVsLmlubmVySFRNTCA9IFwiUHJvamVjdCBUaXRsZTogXCI7XG4gICAgcHJvamVjdEFkZEJ0bi5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnXG4gICAgcHJvamVjdEFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RBZGRCdG4nKVxuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RBZGRCdG4nKVxuICAgIHByb2plY3RBZGRCdG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3IFByb2plY3RMb2dpYygna2VpcmVuJykpXG5cbiAgICAvLyBwcm9qZWN0QWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3IFByb2plY3RMb2dpYyhwcm9qZWN0VGl0bGUudmFsdWUpKVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdERPTSIsIi8vQ3JlYXRlcyB0aGUgaW5wdXQgYm94ZXMgd2hlbiBBZGQgTmV3IFRvLURvIGJ1dHRvbiBpcyBwcmVzc2VkXG5pbXBvcnQgcHJpbnQgZnJvbSAnLi9wcmludFRvRG8nXG5pbXBvcnQgY29sbGVjdElucHV0cyBmcm9tICcuL3RvZG9JbnB1dCdcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5sZXQgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dENvbnRhaW5lcicpXG5mdW5jdGlvbiBjcmVhdGVpbnB1dEJveGVzKCl7XG5cblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlLm5hbWUgPSBcIlRpdGxlXCI7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpXG4gICAgY29uc3QgdGl0bGVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICB0aXRsZWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCB0aXRsZSk7XG4gICAgdGl0bGVsYWJlbC5pbm5lckhUTUwgPSBcIlRpdGxlOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzYy5uYW1lID0gXCJEZXNjcmlwdGlvblwiXG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKVxuICAgIGNvbnN0IGRlc2NsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcbiAgICBkZXNjbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGRlc2MpO1xuICAgIGRlc2NsYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjbGFiZWwpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpXG5cbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlLnR5cGUgPSAnZGF0ZSdcbiAgICBkdWUubmFtZSA9IFwiRHVlXCJcbiAgICBkdWUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUnKVxuICAgIGNvbnN0IGR1ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xuICAgIGR1ZWxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBkdWUpO1xuICAgIGR1ZWxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZWxhYmVsKTtcbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWUpXG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHkubmFtZSA9IFwiUHJpb3JpdHlcIlxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKVxuICAgIGxldCB2YWx1ZXMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCcsICdVZ2VudCddXG4gICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWVzKVxuICAgIHsgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgIGNvbnN0IHByaW9yaXR5bGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgcHJpb3JpdHlsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkpO1xuICAgIHByaW9yaXR5bGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG5cbiAgICAgICBcblxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gICAgbm90ZXMubmFtZSA9IFwiTm90ZXNcIlxuICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnbm90ZXMnKVxuICAgIGNvbnN0IG5vdGVzbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XG4gICAgbm90ZXNsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgcHJpb3JpdHkpO1xuICAgIG5vdGVzbGFiZWwuaW5uZXJIVE1MID0gXCJOb3RlczogXCI7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXNsYWJlbCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXMpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCJcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmludEJ0bicpXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbGxlY3RJbnB1dHMpXG5cbiAgICBcbiAgICAgXG4gICAgICB9XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVpbnB1dEJveGVzXG5cbiIsImZ1bmN0aW9uIFByb2plY3RMb2dpYyh0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgICBcbiAgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TG9naWMiLCJcbi8vIGltcG9ydCBjb2xsZWN0SW5wdXRzIGZyb20gJy4vdG9kb0lucHV0J1xuLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuLy8gZnVuY3Rpb24gcHJpbnQgKCkge1xuXG4vLyBjb25zdCBuZXdUb0RvID0gY29sbGVjdElucHV0cygpXG4vLyBmb3IgKGxldCB4IGluIG5ld1RvRG8pe1xuLy8gICAgIGxldCB5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgeS50ZXh0Q29udGVudD1uZXdUb0RvW3hdXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZCh5KVxuLy8gfVxuLy8gfVxuLy8gIGV4cG9ydCBkZWZhdWx0IHByaW50IiwiXG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksbm90ZXMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3Rlcztcbn1cblxuXG5cbmZ1bmN0aW9uIGNvbGxlY3RJbnB1dHMgKCl7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlXG5jb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZVxuY29uc3QgZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZScpLnZhbHVlXG5jb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG5jb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlXG5cbmNvbnN0IG5ld1RvRG8gPSBuZXcgVG9kbyAodGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHksIG5vdGVzKVxuXG5cblxucG9wdWxhdGVTdG9yYWdlKG5ld1RvRG8pXG5jb25zb2xlLmxvZyhyZXRyaWV2ZVN0b3JhZ2UoKSlcblxuXG4vLyBzZXRTdG9yYWdlKClcbi8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdOZXcgVG8gRG8nLCBKU09OLnN0cmluZ2lmeShuZXdUb0RvKSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKHgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnMCcsIEpTT04uc3RyaW5naWZ5KHgpKVxuICAgIH1cbmZ1bmN0aW9uIHJldHJpZXZlU3RvcmFnZSgpe1xuICAgIGxldCBibGFoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnMCcpKVxufVxuXG4vLyB2YXIgdGVzdE9iamVjdCA9IHsgJ29uZSc6IDEsICd0d28nOiAyLCAndGhyZWUnOiAzIH07XG5cbi8vIC8vIFB1dCB0aGUgb2JqZWN0IGludG8gc3RvcmFnZVxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3RPYmplY3QnLCBKU09OLnN0cmluZ2lmeSh0ZXN0T2JqZWN0KSk7XG5cbi8vIC8vIFJldHJpZXZlIHRoZSBvYmplY3QgZnJvbSBzdG9yYWdlXG4vLyB2YXIgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RPYmplY3QnKTtcblxuLy8gY29uc29sZS5sb2coJ3JldHJpZXZlZE9iamVjdDogJywgSlNPTi5wYXJzZShyZXRyaWV2ZWRPYmplY3QpKTtcblxuLy8gcmV0dXJuIG5ld1RvRG9cbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBjb2xsZWN0SW5wdXRzXG5cbi8vIGZ1bmN0aW9uIHNldFN0b3JhZ2UoKSB7XG5cbi8vICAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpdGxlJyl8fFxuLy8gICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVzYycpfHxcbi8vICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2R1ZScpfHxcbi8vICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByaW9yaXR5Jyl8fFxuLy8gICAgICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKVxuLy8gKSB7XG4vLyAgICAgcG9wdWxhdGVTdG9yYWdlKG5ld1RvRG8pO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIHNldFN0eWxlcyhuZXdUb0RvKTtcbi8vICAgfVxuXG5cbi8vIGZ1bmN0aW9uIHBvcHVsYXRlU3RvcmFnZSh4KXtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnMCcsIHgpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNldFN0eWxlcyh4KSB7XG4vLyAgICAgdmFyIHRlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnMCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRlc3QpXG5cbi8vIH19ICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgcHJpbnQgZnJvbSAnLi9wcmludFRvRG8nXG5pbXBvcnQgY3JlYXRlaW5wdXRCb3hlcyBmcm9tICcuL2NyZWF0ZWlucHV0Ym94ZXMnXG5pbXBvcnQgbmV3UHJvamVjdERPTSBmcm9tICcuL05ld1Byb2plY3QnXG5cbmxldCBOZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbk5ld1RvRG9CdG4uaW5uZXJIVE1MID0gJ0FkZCBOZXcgVG8tRG8nXG5sZXQgTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5OZXdQcm9qZWN0QnRuLmlubmVySFRNTCA9ICdDcmVhdGUgTmV3IFByb2plY3QnXG5sZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuXG54LmFwcGVuZENoaWxkKE5ld1RvRG9CdG4pXG54LmFwcGVuZENoaWxkKE5ld1Byb2plY3RCdG4pXG5cblxuTmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlaW5wdXRCb3hlcylcbk5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0RE9NKVxuXG4vLy4uLi4gZm9yIHRlc3RpbmcvL1xuXG5sZXQgdGVzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG50ZXN0QnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdwaW5rJ1xudGVzdEJ0bi5pbm5lckhUTUw9J3BvcHVsYXRlIHRlc3QnXG50ZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBcbiAgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSAnQ2xlYW4gUm9vbSdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlID0gJ1ZhY3V1bSB0aGUgYmVkcm9vbSBhbmQgbW9wIHRoZSBraXRjaGVuJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUnKS52YWx1ZSA9ICcyMDIyLTAzLTEzJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gJ0hpZ2gnXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWUgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIlxufSlcbnguYXBwZW5kQ2hpbGQodGVzdEJ0bilcblxuXG5cblxuXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9