import createinputBoxes from './createinputboxes'
import * as render from './render'

function newToDoBtn(){
    let NewToDoBtn = document.createElement('button')
    const inputContainer = document.getElementById('inputContainer')
    NewToDoBtn.innerHTML = 'Add New To-Do'
    NewToDoBtn.addEventListener('click', function(){
        const inputContainer = document.getElementById('inputContainer')
        render.show(inputContainer)
    })
    let NewProjectBtn = document.createElement('button')
    NewProjectBtn.innerHTML = 'Create New Project'
    let x = document.getElementById('content')
    
    
    x.appendChild(NewToDoBtn)
    // x.appendChild(NewProjectBtn)
    
    
    
    // NewProjectBtn.addEventListener('click', newProjectDOM)
    }

    export default newToDoBtn