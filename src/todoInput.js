import * as render from './render'
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

function populateStorage(x){
    if (localStorage.getItem(x.title)!=null){
        alert("This Task Already Exists. Choose another name")
        return
    }
    else{
        localStorage.setItem(x.title, JSON.stringify(x))
        render.render()
    }}}



export default collectInputs


