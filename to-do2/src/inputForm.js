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
}

export default inputs
