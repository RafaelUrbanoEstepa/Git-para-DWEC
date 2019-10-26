{
  let elementoCadena;
  let elementoEnviar;
  let elementoMostrador;

 let mayusculador=function() {
  let cadena = elementoCadena.value;
  if(cadena == ""){
    elementoMostrador.innerHTML = "Introduzca una cadena";
  }else{
  if (cadena == cadena.toLowerCase()) {
    elementoMostrador.innerHTML = "La cadena está enteramente escrita en minúscula";
  }else if(cadena == cadena.toUpperCase()){
    elementoMostrador.innerHTML = "La cadena está enteramente escrita en mayúscula";
  }else{
    elementoMostrador.innerHTML = "La cadena está escrita tanto en minúscula como en mayúscula";
  }
}
};

document.addEventListener("DOMContentLoaded", function init() {
  elementoCadena = document.getElementById("cadena");
  elementoEnviar = document.getElementById("enviar");
  elementoMostrador = document.getElementById("mostrador");

  elementoEnviar.addEventListener("click",   mayusculador);

});
}




