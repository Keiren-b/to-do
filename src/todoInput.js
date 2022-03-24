
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


export default collectInputs

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