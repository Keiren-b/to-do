import './style.css'
import * as domStuff from './domStuff'
import inputs from './inputForm'
import collectInputs from './storage'
import * as storage from './storage'





inputs()

//testing functions

        let x = domStuff.cacheDOM().printBtn
        x.addEventListener('click', collectInputs)


        const clearBtn = document.createElement('button')
        clearBtn.textContent = 'clear'
        clearBtn.addEventListener('click', clear)
        domStuff.cacheDOM().bodyContainer.appendChild(clearBtn)

        function clear(){
            localStorage.clear()
        }

        const printStorage = document.createElement('button')
        printStorage.textContent = 'printStorage'
        printStorage.addEventListener('click', function(){
            console.log(localStorage)

        })
        domStuff.cacheDOM().bodyContainer.appendChild(printStorage)

//END of testing functions


