import * as domStuff from './domStuff'


//testing functions
const testPop = document.createElement('button')
domStuff.cacheDOM().bodyContainer.appendChild(testPop)
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
    
        const title = domStuff.cacheDOM.title
        const desc = cacheDOM().desc.value
        const due = cacheDOM().date.value
        const priority = cacheDOM().priority.valuee
        const notes = cacheDOM().notes.value
        
        const newToDo = new Todo (title, desc, due, priority, notes)
        
        
        
        populateStorage(newToDo)
        
    }

    export default collectInputs

    