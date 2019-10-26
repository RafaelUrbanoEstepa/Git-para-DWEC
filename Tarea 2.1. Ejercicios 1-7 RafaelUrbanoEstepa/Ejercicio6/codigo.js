{
    let elementoDni;
    let elementoEnviar;
    let elementoMostrador;

let calculaDni = function(){

const pattern = new RegExp('^([0-9]{8})([A-Z])$'); 
const Letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if(elementoDni.value == "" ){
elementoMostrador.innerHTML = "El Dni no puede estar vacío.";
}else{
if(isNaN(pattern.exec(elementoDni.value)[1])){
    elementoMostrador.innerHTML = "El Dni no es un número.";
}else{
    let Numero = pattern.exec(elementoDni.value.toUpperCase())[1];
if(Numero < 0 || Numero > 99999999){
    elementoMostrador.innerHTML = "El número proporcionado no es válido.";
}else{
    let Letra = pattern.exec(elementoDni.value.toUpperCase())[2];
    let numeroLetra = Numero % 23;
    let letraCalculada = Letras[numeroLetra];
        if(letraCalculada == Letra){
            elementoMostrador.innerHTML = "Tanto el número: "+Numero+" como la letra: "+Letra+" son correctos.";
                }else{
                    elementoMostrador.innerHTML = "La letra introducida no es correcta.";
                };
};
}
}
    }


document.addEventListener("DOMContentLoaded", function init() {
    elementoDni = document.getElementById("dni");
    elementoEnviar = document.getElementById("enviar");
    elementoMostrador = document.getElementById("mostrador");

    elementoEnviar.addEventListener("click", calculaDni);

});

}