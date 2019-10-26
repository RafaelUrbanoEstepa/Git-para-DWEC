{
/* 
Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir.
Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.
@author Rafael Urbano Estepa
*/
let elemento;
let info;
let evento;

    let limita= function() {
    let codigoCaracter = evento.key;
    if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
    }

    if(codigoCaracter == 8 || codigoCaracter == 46) {
    return true;
    }
    else if(elemento.value.length >= 100 ) {
    return false;
    }
    else {
    return true;
  }
}

let mostrador=function() {   
  if(elemento.value.length > 100 ) {
    info.innerHTML = "Se ha pasado "+(elemento.value.length-100)+" carácteres"; 
    info.setAttribute(atribute="maxlength", value = 100);
  }
  else {
    if(elemento.value.length == 100){
        info.innerHTML = "Ha llegado al máximo de carácteres disponibles";
    }else{
        info.innerHTML = "Puedes escribir hasta "+(100-elemento.value.length)+" caracteres adicionales";
    }  
  }
}

document.addEventListener("DOMContentLoaded", function init() {
    elemento = document.getElementById("texto");
    info = document.getElementById("mostrador");
    evento = window.event;
    evento.onKey;
    elemento.onkeypress=function(){limita()};
    elemento.onkeyup=function(){mostrador()};
});
}
