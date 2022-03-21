import ProjectLogic from './newProjectLogic'

function newProjectDOM(){
    const content = document.getElementById('content')
    const projectContainer = document.createElement('div')
    const projectTitle = document.createElement('input')
    const projectAddBtn = document.createElement('button')

    projectTitle.name = 'projectTitle'
    projectTitle.setAttribute('id','projectTitle')
    const projectTitleLabel = document.createElement("Label");
    projectTitleLabel.setAttribute("for", projectTitleLabel);
    projectTitleLabel.innerHTML = "Project Title: ";
    projectAddBtn.innerHTML = 'Add Project'
    projectAddBtn.setAttribute('id', 'projectAddBtn')

    projectContainer.appendChild(projectTitleLabel);
    projectContainer.appendChild(projectTitle)
    projectContainer.appendChild(projectAddBtn)
    content.appendChild(projectContainer)

    const projectAddBtn2 = document.getElementById('projectAddBtn')
    projectAddBtn2.addEventListener('click', new ProjectLogic('keiren'))

    // projectAddBtn.addEventListener('click', new ProjectLogic(projectTitle.value))

}


export default newProjectDOM