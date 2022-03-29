import * as cacheDOM from './cacheDOM'

// const cardContainer = document.createElement('div')
// cardContainer.setAttribute('id', 'cardContainer')

// const content = document.getElementById('content')
cacheDOM.content.appendChild(cacheDOM.cardContainer)

const inputContainer = document.getElementById('inputContainer')


export function clearDivs(element){

    while(element.firstChild){
    element.removeChild(element.lastChild)
}
}

export function hide(input){
    cacheDOM.inputContainer
    input.classList.add('hidden')
}

export function show(element){
    // const inputContainer = document.getElementById('inputContainer')
    element.classList.remove('hidden')
}

export function render(){
// let inputContainer = document.getElementById('inputContainer')

clearDivs(cardContainer)
hide(inputContainer)


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
            cardContainer.appendChild(card)
            }
    }}

    export default render


