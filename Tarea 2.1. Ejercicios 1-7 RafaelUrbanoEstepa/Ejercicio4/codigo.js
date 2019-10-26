{
    let elementoDiv1;
    let elementoDiv2;
    let elementoDiv3;

    let mostrar = function(){
let valores = [true, 5, false, "hola", "adios", 2];
const Texto1 = valores[3];
const Texto2 = valores[4];
const Boolean1 = valores[0];
const Boolean2 = valores[2];
const Numero1 = valores[1];
const Numero2 = valores[5];

if(Texto1 > Texto2){
    elementoDiv1.innerHTML = "Hola es mayor que adios";
}else{
    elementoDiv1.innerHTML = "Adios es mayor que hola";
};

const Booleanoverdadero = Boolean1|| Boolean2;
const Booleanofalso = Boolean1 && Boolean2;

elementoDiv2.innerHTML = "Al usar la operacion or, el resultado es: "+ Booleanoverdadero;

elementoDiv2.innerHTML = "Al usar la operacion and, el resultado es: "+ Booleanofalso;

const Suma = Numero1 + Numero2;
const Resta = Numero1 - Numero2;;
const Multiplicacion = Numero1 * Numero2;
const Division = Numero1 / Numero2;
const Modulo = Numero1 % Numero2;

elementoDiv3.innerHTML = "La suma de los dos números es "+Suma+"<br> La resta de los dos números es "+Resta+"<br> La multiplicacion de los dos números es "+Multiplicacion+"<br> La division de los dos números es "+Division+"<br> El modulo de los dos números es "+Modulo;
    }

document.addEventListener("DOMContentLoaded", function init() {
    elementoDiv1 = document.getElementById("mostrador1");
    elementoDiv2 = document.getElementById("mostrador2");
    elementoDiv3 = document.getElementById("mostrador3");
    mostrar();

});

}