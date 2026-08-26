let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")

menubtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});


let popupbtn = document.getElementById("popupbtn")
let popup = document.getElementById("popup");
let closebtn = document.getElementById("closebtn")

popupbtn.addEventListener("click", function() {
    popup.style.display = "flex"
});

closebtn.addEventListener("click", function() {
    popup.style.display = "none"
})


let questionbtn = document.querySelectorAll(".questionbtn")
let answers = document.querySelectorAll(".answer")
answers.forEach(function(answer) {
    answer.style.display = "none"
})

questionbtn.forEach(function(button, index) 
{
button.addEventListener("click", function() 
{ if (answers[index].style.display === "none") 
        {
        answers[index].style.display = "block"
        }
         else
        {
         answers[index].style.display = "none"
        }  
    })
});

