{
  let elementoEnlace;
  let elementoEnlaceTextoOculto;

 let muestra=function() {

  elementoEnlaceTextoOculto.className = "visible";
  elementoEnlace.className = "oculto";
  
}

document.addEventListener("DOMContentLoaded", function init() {
  elementoEnlace = document.getElementById("enlace");
  elementoEnlaceTextoOculto = document.getElementById("adicional");
  elementoEnlace.addEventListener("click", muestra);

});
}