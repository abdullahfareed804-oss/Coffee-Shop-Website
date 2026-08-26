let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")

menubtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});


let image = document.getElementById("image")
let next = document.getElementById("next")
let previous = document.getElementById("previous")

let images = [
    "image/oms-photo-brent-taylor-coffee-010 (1).jpg",
    "image/images (1).jpg",
    "image/cup-coffee-with-leaf-top_1099697-268.avif"
]

let index = 0;
next.addEventListener("click", function() {
    index = index + 1
    if (index > 2) {
        index = 0;
    }
    image.src = images[index];
})

previous.addEventListener("click", function() {
    index = index - 1
    if (index < 0) {
        index = 2
    }
    image.src = images[index]

})


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

