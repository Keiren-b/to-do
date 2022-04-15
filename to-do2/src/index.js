import './style.css'
import * as domStuff from './domStuff'
import inputs from './inputForm'
import * as storage from './storage'
import renderCards from './render'





inputs()

//testing functions
    
        let x = document.getElementById('printBtn')
        x.addEventListener('click', storage.collectInputs)


        const clearBtn = document.createElement('button')
        clearBtn.textContent = 'clear'
        clearBtn.addEventListener('click', clear)
        domStuff.cacheDOM().bodyContainer.appendChild(clearBtn)

        function clear(){
            localStorage.clear()
        }

        const printStorageBtn = document.createElement('button')
        printStorageBtn.textContent = 'printStorage'       
        domStuff.cacheDOM().bodyContainer.appendChild(printStorageBtn)
        printStorageBtn.addEventListener('click',renderCards)



        
         
//END of testing functions


