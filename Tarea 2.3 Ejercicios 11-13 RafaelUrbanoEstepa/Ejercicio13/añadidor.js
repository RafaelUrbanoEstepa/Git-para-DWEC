{
  let elementoLista;
  
  let anade= function() {
    let recuento =  document.getElementsByTagName("li");
    let total = recuento.length -4;

    elementoLista.innerHTML += "<li>Este es el elemento "+ total +" que se ha añadido</li>";
  }

  document.addEventListener("DOMContentLoaded", function init() {
    elementoLista = document.getElementById("lista");
    elementoEnviar = document.getElementById("enviar");

    elementoEnviar.addEventListener("click", anade);

});
}
