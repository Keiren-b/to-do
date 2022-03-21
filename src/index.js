
import print from './printToDo'
import inputBoxes from './inputboxes'
import newProjectDOM from './NewProject'

let NewToDoBtn = document.createElement('button')
NewToDoBtn.innerHTML = 'Add New To-Do'
let NewProjectBtn = document.createElement('button')
NewProjectBtn.innerHTML = 'Create New Project'
let x = document.getElementById('content')


x.appendChild(NewToDoBtn)
x.appendChild(NewProjectBtn)


NewToDoBtn.addEventListener('click',inputBoxes)
NewProjectBtn.addEventListener('click', newProjectDOM)





 