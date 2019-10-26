{

    let elementoDiv1;
    let elementoDiv2;
    let elementoDiv3;
    let elementoDiv4;
    let mostrar = function(){
        let numero1 = 5;
    let numero2 = 8;
    if(numero1 < numero2) {
        elementoDiv1.innerHTML = "numero1 no es mayor que numero2";
    }
    if(numero2 > 0) {
        elementoDiv2.innerHTML = "numero2 es positivo";
    }
    if(numero1 < 0 || numero1 != 0) {
        elementoDiv3.innerHTML = "numero1 es negativo o distinto de cero";
    }
    if(++numero1 < numero2) {
        elementoDiv4.innerHTML = "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2";
    }
    }



document.addEventListener("DOMContentLoaded", function init() {
    elementoDiv1 = document.getElementById("mostrador1");
    elementoDiv2 = document.getElementById("mostrador2");
    elementoDiv3 = document.getElementById("mostrador3");
    elementoDiv4 = document.getElementById("mostrador4");
    mostrar();

});
}