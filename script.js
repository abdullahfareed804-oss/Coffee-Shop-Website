let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")

menubtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});
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

