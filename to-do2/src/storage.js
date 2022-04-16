import cacheDOM from './domStuff'
import renderCards from './render'


//testing functions
const testPop = document.createElement('button')
cacheDOM().bodyContainer.appendChild(testPop)
testPop.textContent = 'test populate storage'
function testPopulate(){
    for (let i=0; i<11; i++){
        let newToDo = new Todo(`title ${i}`, `description ${i}`, `due date ${i}`, `priority ${i}`, `notes ${i}`)
        populateStorage(newToDo)
        console.log(`success ${i}`)
    }
}
testPop.addEventListener('click', testPopulate)

function Todo(title, description, dueDate, priority,notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
}
function populateStorage(x){
    if (localStorage.getItem(x.title)!=null){
        alert("This Task Already Exists. Choose another name")
        return
    }
    else{
        localStorage.setItem(x.title, JSON.stringify(x))
        // render.render()
    }}

    function collectInputs(){
    
        const title = document.getElementById('title').value
        const desc = document.getElementById('desc').value
        const due = document.getElementById('due').value
        const priority = document.getElementById('priority').value
        const notes = document.getElementById('notes').value
        
        const newToDo = new Todo (title, desc, due, priority, notes)
                     
        populateStorage(newToDo)
        renderCards()

        
    }

    export default collectInputs

    