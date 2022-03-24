if(!localStorage.getItem('firstname')) {
    populateStorage();
  } else {
    setStyles();
  }

  if(!localStorage.getItem('lastname')) {
    populateStorage();
  } else {
    setStyles();
  }

function populateStorage() {
    localStorage.setItem('firstname', document.getElementById('fname').value);
    localStorage.setItem('lastname', document.getElementById('lname').value);
}

const pushBtn = document.getElementById('push')
pushBtn.addEventListener('click', populateStorage)

const pushBtn2 = document.getElementById('push2')
pushBtn2.addEventListener('click', setStyles)

function setStyles() {
    var firstName = localStorage.getItem('firstname');
    var lastName = localStorage.getItem('lastname');
      
    document.getElementById('fname').value = firstName;
    document.getElementById('lname').value = lastName

    const result1 = document.getElementById('firstnameresult')
    const result2 = document.getElementById('lastnameresult')

    result1.textContent = firstName
    result2.textContent = lastName

}

const delBtn = document.getElementById('delBtn')
delBtn.addEventListener('click', clear)

function clear(){
    localStorage.clear()
}