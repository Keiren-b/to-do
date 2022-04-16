import './style.css'
import cacheDOM from './domStuff'
import inputs from './inputForm'
import collectInputs from './storage'
import renderCards from './render'





inputs()

//testing functions
    
        let x = document.getElementById('printBtn')
        x.addEventListener('click', collectInputs)


        const clearBtn = document.createElement('button')
        clearBtn.textContent = 'clear'
        clearBtn.addEventListener('click', clear)
        cacheDOM().bodyContainer.appendChild(clearBtn)

        function clear(){
            localStorage.clear()
        }

        const printStorageBtn = document.createElement('button')
        printStorageBtn.textContent = 'printStorage'       
        cacheDOM().bodyContainer.appendChild(printStorageBtn)
        printStorageBtn.addEventListener('click',renderCards)



        
         
//END of testing functions


