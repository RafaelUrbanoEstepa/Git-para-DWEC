{
let elementoDiv1;
let elementoDiv2;

let mostrar = function(){
    const texto1 = "Hola Mundo!";// Esta alerta se lanzará la primera mostrando el contenido 'Hola Mundo!'.
const texto2 = "Soy el primer script"; // Esta alerta se lanzará después mostrando el contenido 'Soy el primer script', aunque en realidad es el segundo.

elementoDiv1.innerHTML = texto1;
elementoDiv2.innerHTML = texto2;
}


document.addEventListener("DOMContentLoaded", function init() {
    elementoDiv1 = document.getElementById("mostrador1");
    elementoDiv2 = document.getElementById("mostrador2");
    mostrar();

});

}