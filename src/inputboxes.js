
import collectInputs from './todoInput'
function inputBoxes(){
    let content = document.getElementById('content')
    let inputContainer = document.createElement('div')

    const title = document.createElement("input");
    title.type = "text";
    title.name = "Title";
    title.setAttribute('id', 'title')
    const titlelabel = document.createElement("Label");
    titlelabel.setAttribute("for", title);
    titlelabel.innerHTML = "Title: ";
    inputContainer.appendChild(titlelabel);
    inputContainer.appendChild(title)

    const desc = document.createElement("input");
    desc.type = 'text'
    desc.name = "Description"
    desc.setAttribute('id', 'desc')
    const desclabel = document.createElement("Label");
    desclabel.setAttribute("for", desc);
    desclabel.innerHTML = "Description: ";
    inputContainer.appendChild(desclabel);
    inputContainer.appendChild(desc)

    const due = document.createElement("input");
    due.type = 'text'
    due.name = "Due"
    due.setAttribute('id', 'due')
    const duelabel = document.createElement("Label");
    duelabel.setAttribute("for", due);
    duelabel.innerHTML = "Due Date: ";
    inputContainer.appendChild(duelabel);
    inputContainer.appendChild(due)

    const priority = document.createElement("input");
    priority.type = 'text'
    priority.name = "Priority"
    priority.setAttribute('id', 'priority')
    const prioritylabel = document.createElement("Label");
    prioritylabel.setAttribute("for", priority);
    prioritylabel.innerHTML = "Priority: ";
    inputContainer.appendChild(prioritylabel);
    inputContainer.appendChild(priority)

    const notes = document.createElement("input");
    notes.type = 'text'
    notes.name = "Notes"
    notes.setAttribute('id', 'notes')
    const noteslabel = document.createElement("Label");
    noteslabel.setAttribute("for", priority);
    noteslabel.innerHTML = "Notes: ";
    inputContainer.appendChild(noteslabel);
    inputContainer.appendChild(notes)

    const submitBtn = document.createElement('button')
    submitBtn.textContent = "Add To-Do"
    submitBtn.addEventListener('click', collectInputs)
    inputContainer.appendChild(submitBtn)

      
    content.appendChild(inputContainer)
}

export default inputBoxes

