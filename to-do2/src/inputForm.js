import './style.css'
import createDomElement from './createDomElement'
import cacheDOM from './domStuff'

function inputs(){
createDomElement('label','titleLabel','Title: ','Title',inputContainer)
createDomElement('input','title','','Title', inputContainer)

createDomElement('label','descLabel','Description: ','Description',inputContainer)
createDomElement('textarea','desc','','Description', inputContainer)

createDomElement('label','dueLabel','','Description', inputContainer)
createDomElement('input','due','','Due', inputContainer)
let date = cacheDOM().date
date.type = 'date'

createDomElement('label','priorityLabel','Priority: ','Priority', inputContainer)
createDomElement('select','priority','','Priority', inputContainer)
let priority = cacheDOM().priority
let values = ['Low', 'Medium', 'High', 'Ugent']
    for (const val of values)
    {           var option = document.createElement("option");
                option.value = val;
                option.text = val.charAt(0).toUpperCase() + val.slice(1);
                priority.appendChild(option);
            }

createDomElement('label','notesLabel','Notes: ','Notes', inputContainer)
createDomElement('textarea','notes','','Notes', inputContainer)

createDomElement('button','printBtn','Add To-Do','printBtn', inputContainer)
}


export default inputs
