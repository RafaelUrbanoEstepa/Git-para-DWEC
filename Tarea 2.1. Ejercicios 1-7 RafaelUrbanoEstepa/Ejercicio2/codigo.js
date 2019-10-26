{
   let elementoDiv;

   let mostrar = function(){
    const mensaje1 = "Hola Mundo! \n Qué facil es incluir 'comillas simples' \n y \" comillas dobles \""
    elementoDiv.innerHTML = mensaje1;// Se lanzará  mostrando el contenido guardado en la primera variable'.
   }


document.addEventListener("DOMContentLoaded", function init() {
    elementoDiv = document.getElementById("mostrador");
    mostrar();

});
}