
import print from './printToDo'
import inputBoxes from './inputboxes'

let btn = document.createElement('button')
btn.innerHTML = 'push me'
let x = document.getElementById('content')
x.appendChild(btn)


btn.addEventListener('click',inputBoxes)





 