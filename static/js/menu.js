var menu = document.querySelector(".bar-menu");
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var nav = document.querySelector(".nav")

menu.addEventListener("click", animateBar);

function animateBar(){
    line1.classList.toggle("line1-active");
    line2.classList.toggle("line2-active");
    line3.classList.toggle("line3-active");
    nav.classList.toggle("nav-activo")
}
