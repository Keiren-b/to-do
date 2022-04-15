import './style.css'
import * as domStuff from './domStuff'

function inputs(){
domStuff.createDomElement('label','titleLabel','Title: ','Title',taskContainer)
domStuff.createDomElement('input','title','','Title', taskContainer)

domStuff.createDomElement('label','descLabel','Description: ','Description',taskContainer)
domStuff.createDomElement('textarea','desc','','Description', taskContainer)

domStuff.createDomElement('label','dueLabel','','Description', taskContainer)
domStuff.createDomElement('input','due','','Due', taskContainer)
let date = domStuff.cacheDOM().date
date.type = 'date'

domStuff.createDomElement('label','priorityLabel','Priority: ','Priority', taskContainer)
domStuff.createDomElement('select','priority','','Priority', taskContainer)
let priority = domStuff.cacheDOM().priority
let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values)
    {           var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                priority.appendChild(option);
            }

domStuff.createDomElement('label','notesLabel','Notes: ','Notes', taskContainer)
domStuff.createDomElement('textarea','notes','','Notes', taskContainer)

domStuff.createDomElement('button','printBtn','Add To-Do','printBtn', taskContainer)







// function createDomElement(type, id, text, name, append){
}


export default inputs


//     const title = document.createElement("input");
//     title.name = "Title";
//     title.setAttribute('id', 'title')
//     const titlelabel = document.createElement("Label");
//     titlelabel.setAttribute("for", title);
//     titlelabel.innerHTML = "Title: ";
//     inputContainer.appendChild(titlelabel);
//     inputContainer.appendChild(title)

//     const desc = document.createElement("textarea");
//     desc.name = "Description"
//     desc.setAttribute('id', 'desc')
//     const desclabel = document.createElement("Label");
//     desclabel.setAttribute("for", desc);
//     desclabel.innerHTML = "Description: ";
//     inputContainer.appendChild(desclabel);
//     inputContainer.appendChild(desc)

//     const due = document.createElement("input");
//     due.type = 'date'
//     due.name = "Due"
//     due.setAttribute('id', 'due')
//     const duelabel = document.createElement("Label");
//     duelabel.setAttribute("for", due);
//     duelabel.innerHTML = "Due Date: ";
//     inputContainer.appendChild(duelabel);
//     inputContainer.appendChild(due)

//     const priority = document.createElement("select");
//     priority.name = "Priority"
//     priority.setAttribute('id', 'priority')
//     let values = ['Low', 'Medium', 'High', 'Ugent']
//     for (const val of values)
//     {           var option = document.createElement("option");
//                 option.value = val;
//                 option.text = val.charAt(0).toUpperCase() + val.slice(1);
//                 priority.appendChild(option);
//             }
//     const prioritylabel = document.createElement("Label");
//     prioritylabel.setAttribute("for", priority);
//     prioritylabel.innerHTML = "Priority: ";
//     inputContainer.appendChild(prioritylabel);
//     inputContainer.appendChild(priority)

       

//     const notes = document.createElement("textarea");

//     notes.name = "Notes"
//     notes.setAttribute('id', 'notes')
//     const noteslabel = document.createElement("Label");
//     noteslabel.setAttribute("for", priority);
//     noteslabel.innerHTML = "Notes: ";
//     inputContainer.appendChild(noteslabel);
//     inputContainer.appendChild(notes)

//     const submitBtn = document.createElement('button')
//     submitBtn.textContent = "Add To-Do"
//     submitBtn.setAttribute('id', 'printBtn')
//     inputContainer.appendChild(submitBtn)

//     content.appendChild(inputContainer)

//     submitBtn.addEventListener('click', collectInputs)

    
     
//       }



// export default createinputBoxes

