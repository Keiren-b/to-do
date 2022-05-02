function removeCard(element) {
    let rmvObj = element.target.parentElement
    let key = rmvObj.children[0].textContent
    localStorage.removeItem(key)
    rmvObj.remove()
    // assignData()

}

export default removeCard

//let task = document.getElementById('taskContainer')
// undefined
// task[0]
// undefined
// let key = task.childNodes[1].childNodes[0].textContent
// undefined