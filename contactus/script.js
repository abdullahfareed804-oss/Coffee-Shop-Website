let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")

menubtn.addEventListener("click", function () {
    menu.classList.toggle("hidden")
})


let form = document.getElementById("form")
let name = document.getElementById("name")
let email = document.getElementById("email")
let message = document.getElementById("message")
let nameerror = document.getElementById("nameerror")
let emailerror = document.getElementById("emailerror")
let messageerror = document.getElementById("messageerror")
let success = document.getElementById("success")

let namePattern = /^[A-Za-z ]+$/
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

form.addEventListener("submit", function(event) {

    event.preventDefault()
    nameerror.innerText = ""
    emailerror.innerText = ""
    messageerror.innerText = ""
    success.innerText = ""
if (name.value === "") {
        nameerror.innerText = "Name is empty"
    }
else if (!namePattern.test(name.value))
     {nameerror.innerText = "Enter valid name"
    }

    if (email.value === "") {
        emailerror.innerText = "Email is empty";
    }
    else if (!emailPattern.test(email.value)) {
     emailerror.innerText = " Enter valid email "
    }
if (message.value === "") 
    {messageerror.innerText = "Message is empty";
    }

    if (nameerror.innerText === "" &&
        emailerror.innerText === "" &&
        messageerror.innerText === "") 
 {
    success.innerText = "Message sent successfully"
    name.value = ""
    email.value = ""
    message.value = ""
    }

})