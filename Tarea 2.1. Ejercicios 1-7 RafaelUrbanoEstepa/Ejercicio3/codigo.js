{
    let elementoDiv;

    let mostrar = function(){
const Meses = ["Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Septiembre", " Octubre", " Noviembre", " Diciembre"];
for(i=0; i < Meses.length; i++) { // este bucle recorrerá el array Meses y mostrará uno por uno los meses mediante su índice.
    elementoDiv.innerHTML += i+1+": "+ Meses[i]+"<br>";
    };
}
    document.addEventListener("DOMContentLoaded", function init() {
        elementoDiv = document.getElementById("mostrador");
        mostrar();
    
    });
}

