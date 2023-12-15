var boton = document.getElementById("caja-boton")
var cuerpo = document.querySelector(".cuerpo")
boton.onclick = function(){
    boton.classList.toggle('activar')
    cuerpo.classList.toggle("bg-alter")
    if(document.getElementById("caja-boton").classList.contains("activar")){
        localStorage.setItem("boton-oscuro", "true");
    }   else{
        localStorage.setItem("boton-oscuro", "false");
    }
}
if(localStorage.getItem("boton-oscuro") === "true"){
    boton.classList.add('activar')
    cuerpo.classList.add("bg-alter")
} else{
    boton.classList.remove('activar')
    cuerpo.classList.remove("bg-alter")

}
