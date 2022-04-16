function createDomElement(type, id, text, name, append){
    const elem = document.createElement(type);
    elem.setAttribute('id', id);
    elem.setAttribute('name', name)
    elem.textContent = text;
    append.appendChild(elem)
}
export default createDomElement