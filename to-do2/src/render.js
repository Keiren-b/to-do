import createDomElement from './createDomElement'
import cacheDOM from './domStuff'

function renderCards(){
    clearDivs(cacheDOM().taskContainer)
    cacheDOM().taskContainer.textContent='this is the task container'
    //

    for (let i=0; i<localStorage.length; i++){
        let card = document.createElement('div')
        card.setAttribute('id', 'card')
        card.style.border = "thick solid black"
        
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        let parse = JSON.parse(item)
            for (let x in parse) {
            const info = document.createElement('div')
            info.textContent = parse[x]
            card.appendChild(info)
            
            taskContainer.appendChild(card)
            }
    }
    for (let j=0; j<localStorage.length;j++){
        createDomElement('button','deleteBtn','Delete Task','delete',taskContainer.children[j])
    }
}





function clearDivs(element){

    while(element.firstChild){
    element.removeChild(element.lastChild)
}
}
export default renderCards