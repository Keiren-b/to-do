import Todo from './createtodo'
import print from './printToDo'

function collectInputs (){
const title = document.getElementById('title').value
const desc = document.getElementById('desc').value
const due = document.getElementById('due').value
const priority = document.getElementById('priority').value
const notes = document.getElementById('notes').value

const newToDo = new Todo (title, desc, due, priority, notes,)
return newToDo
}


export default collectInputs