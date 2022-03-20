
import collectInputs from './todoInput'
const content = document.getElementById('content')

function print () {

const newToDo = collectInputs()
for (let x in newToDo){
    let y=document.createElement('div')
    y.textContent=newToDo[x]
    content.appendChild(y)
}
}
 export default print