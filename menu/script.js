
let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")


menubtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});


let coffeebtn = document.getElementById("coffeebtn")
let teabtn = document.getElementById("teabtn")
let pastrybtn = document.getElementById("pastrybtn")
let coffee = document.getElementById("coffee")
let tea = document.getElementById("tea")
let pastries = document.getElementById("pastries")

coffeebtn.addEventListener("click",function()
{
    coffee.style.display= "block"
    tea.style.display= "none"
    pastries.style.display = "none"

})

teabtn.addEventListener("click",function(){

    coffee.style.display = "none"
    tea.style.display= "block"
    pastries.style.display= "none"

})

pastrybtn.addEventListener("click", function(){
    coffee.style.display ="none"
    tea.style.display= "none"
    pastries.style.display= "block"

});

