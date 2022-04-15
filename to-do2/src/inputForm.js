import './style.css'
import * as domStuff from './domStuff'

function inputs(){
domStuff.createDomElement('label','titleLabel','Title: ','Title',inputContainer)
domStuff.createDomElement('input','title','','Title', inputContainer)

domStuff.createDomElement('label','descLabel','Description: ','Description',inputContainer)
domStuff.createDomElement('textarea','desc','','Description', inputContainer)

domStuff.createDomElement('label','dueLabel','','Description', inputContainer)
domStuff.createDomElement('input','due','','Due', inputContainer)
let date = domStuff.cacheDOM().date
date.type = 'date'

domStuff.createDomElement('label','priorityLabel','Priority: ','Priority', inputContainer)
domStuff.createDomElement('select','priority','','Priority', inputContainer)
let priority = domStuff.cacheDOM().priority
let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values)
    {           var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                priority.appendChild(option);
            }

domStuff.createDomElement('label','notesLabel','Notes: ','Notes', inputContainer)
domStuff.createDomElement('textarea','notes','','Notes', inputContainer)

domStuff.createDomElement('button','printBtn','Add To-Do','printBtn', inputContainer)
}

export default inputs
