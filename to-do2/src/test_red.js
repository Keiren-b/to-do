import cache from './test_blue_cache'

function createDomElement(type, id, text, name, append){
    const elem = document.createElement(type);
    elem.setAttribute('id', id);
    elem.setAttribute('name', name)
    elem.textContent = text;
    append.appendChild(elem)
}

function test(){
let bodyContainer = document.getElementById('bodyContainer')
createDomElement('div','one','This is the Element 1','', bodyContainer)
createDomElement('button','two','This is the Element 2','', bodyContainer)
createDomElement('input','three','This is the Element 3','', bodyContainer)
createDomElement('div','four','This is the Element 4','', bodyContainer)
}



export default test