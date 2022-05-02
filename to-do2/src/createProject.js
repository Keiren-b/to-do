import createDomElement from './createDomElement'
import cacheDOM from './domStuff'

function createProject(){
createDomElement('button','newProject',"Create New Project",'newProject', cacheDOM().taskContainer)
cacheDOM().createProjectBtn.addEventListener('click', displayProjectInput)

function projectPopUp(){}
createDomElement('div','newProjectContainer','','newProjectContainer', cacheDOM().taskContainer)
createDomElement('label','newProjectLabel','New Project Title: ','newProjectLabel', cacheDOM().newProjectContainer)
createDomElement('input','newProjectTitle','','newProjectTitle', cacheDOM().newProjectContainer)
createDomElement('button','addNewProject','Add New Project','addNewProject', cacheDOM().newProjectContainer)
cacheDOM().newProjectContainer.classList.add('hidden')
}

function displayProjectInput(){
    cacheDOM().newProjectContainer.classList.remove('hidden')
}

export default createProject
