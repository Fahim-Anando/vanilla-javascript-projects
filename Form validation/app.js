const name = document.querySelector("#name")
const password = document.querySelector("#password")
const form = document.querySelector("#form")
const errorElement = document.querySelector("#error")
var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value === null){   
  messages.push("Name is required")
    }
    if(password.value.length <= 6){
      messages.push("must be longer than 6")
    }
    if(password.value.length >=20){
      messages.push("Large")
    }
    if(password === "password"){
      messages.push("cant use")
    }
    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerHTML = messages.join(',')
    }
  })