function cacheDOM(){
        return{
    bodyContainer: document.getElementById('bodyContainer'),
    headerContainer: document.getElementById('headerContainer'),
    displayContainer: document.getElementById('displayContainer'),
    menuContainer:document.getElementById('menuContainer'),
    taskContainer: document.getElementById('taskContainer'),
    title: document.getElementById('title'),
    titleLabel: document.getElementById('titleLabel'),
    desc: document.getElementById('desc'),
    date: document.getElementById('due'),
    priority: document.getElementById('priority'),
    notes: document.getElementById('notes'),
    printBtn: document.getElementById('printBtn'),
    card: document.getElementById('card'),
    createProjectBtn: document.getElementById('newProject'),
    newProjectContainer: document.getElementById('newProjectContainer'),
        }
    }
    export default cacheDOM
