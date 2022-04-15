export function cacheDOM(){
    return{
    bodyContainer: document.getElementById('bodyContainer'),
    headerContainer: document.getElementById('headerContainer'),
    displayContainer: document.getElementById('displayContainer'),
    menuContainer:document.getElementById('menuContainer'),
    taskContainer: document.getElementById('taskContainer'),
    title: document.getElementById('title'),
    titleLabel: document.getElementById('titleLabel'),
    date: document.getElementById('due'),
    priority: document.getElementById('priority')
    }
}
console.log(cacheDOM.date)

export function createDomElement(type, id, text, name, append){
    const elem = document.createElement(type);
    elem.setAttribute('id', id);
    elem.setAttribute('name', name)
    elem.textContent = text;
    append.appendChild(elem)
}

