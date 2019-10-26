{
  let elementoNumero;
  let elementoEnviar;
  let elementoMostrador;

let esPar= function() {

  let numero =elementoNumero.value;

  if(isNaN(numero) === true){
    elementoMostrador.innerHTML = "No ha introducido un número";
  }else{

  if (numero % 2 == 0) {
    elementoMostrador.innerHTML = "El número escrito es par";
  }else{
    elementoMostrador.innerHTML = "El número escrito es impar";
  }
}
};

  document.addEventListener("DOMContentLoaded", function init() {
    elementoNumero = document.getElementById("numero");
    elementoEnviar = document.getElementById("enviar");
    elementoMostrador = document.getElementById("mostrador");

    elementoEnviar.addEventListener("click",   esPar);

});
}






