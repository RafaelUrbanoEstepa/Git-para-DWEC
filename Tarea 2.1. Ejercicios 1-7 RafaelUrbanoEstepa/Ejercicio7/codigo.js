{

    let elementoNumero;
    let elementoEnviar;
    let elementoMostrador;

let calculaFactorial = function(){
const Numero = elementoNumero.value;
let contador = Numero -1;
let factorial = Numero;

if(isNaN(Numero) === true){
    elementoMostrador.innerHTML = "No ha introducido un número";
}else{

if(Numero <= 0){ // comprobamos que se introduzca un valor válido
    elementoMostrador.innerHTML = "El numero introducido no es válido";
}else{
 for(Numero;  contador > 1; contador--){
factorial = factorial * contador; // multiplicamos el total de la multiplicación actual por el siguiente número en la lista
};
elementoMostrador.innerHTML = factorial; // mostramos el factorial
};
}
}

document.addEventListener("DOMContentLoaded", function init() {
    elementoNumero = document.getElementById("numero");
    elementoEnviar = document.getElementById("enviar");
    elementoMostrador = document.getElementById("mostrador");

    elementoEnviar.addEventListener("click", calculaFactorial);

});

}




