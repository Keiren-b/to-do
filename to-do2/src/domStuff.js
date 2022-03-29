export function cacheDOM(){
    return{
    bodyContainer: document.getElementById('bodyContainer'),
    headerContainer: document.getElementById('headerContainer'),
    displayContainer: document.getElementById('displayContainer'),
    menuContainer:document.getElementById('menuContainer'),
    taskContainer: document.getElementById('taskContainer')
    }
}


export function createDomElement(type, id, text, append){
    const elem = document.createElement(type);
    elem.setAttribute('id', id);
    elem.textContent = text;
    append.appendChild(elem)
}