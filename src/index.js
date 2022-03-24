
import print from './printToDo'
import createinputBoxes from './createinputboxes'
import newProjectDOM from './NewProject'

let NewToDoBtn = document.createElement('button')
NewToDoBtn.innerHTML = 'Add New To-Do'
let NewProjectBtn = document.createElement('button')
NewProjectBtn.innerHTML = 'Create New Project'
let x = document.getElementById('content')


x.appendChild(NewToDoBtn)
x.appendChild(NewProjectBtn)


NewToDoBtn.addEventListener('click',createinputBoxes)
NewProjectBtn.addEventListener('click', newProjectDOM)

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





 