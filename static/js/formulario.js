const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const numero = document.getElementById("number");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{

  let warnings = "";
  let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let entrar = false;
  parrafo.innerHTML = "";
  if(nombre.value.length <3){
    warnings += `• El nombre no es válido debe contener al menos 3 carácteres <br>`;
    entrar = true;
  }
  if(!regexEmail.test(email.value)){
    warnings += `• El email no es válido utilice el @ y el dominio <br>`;
    entrar = true;
  }
  if(numero.value.length <10){
    warnings += `• El número no es válido <br>`;
    entrar = true;
  }
  if(asunto.value.length <6){
    warnings += `• El asunto debe contener al menos 6 carácteres <br>`;
    entrar = true;
  }
  if(mensaje.value.length <50){
    warnings += `• El mensaje debe contener al menos 50 carácteres <br>`;
    entrar = true;
  }
  if(entrar){
    parrafo.innerHTML = warnings;
    e.preventDefault();
  } else{    
    parrafo.innerHTML = "• Enviado";
    // form.submit();
      
  }
})
