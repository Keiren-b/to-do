let inputContainer = document.getElementById('inputContainer')
   
   function test(){

    const submitBtn = document.createElement('button')
    submitBtn.textContent = "Add To-Do"
    submitBtn.setAttribute('id', 'printBtn')
    inputContainer.appendChild(submitBtn)
   }

   export default test