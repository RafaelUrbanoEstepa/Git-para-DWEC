{

	let elementoCadena;
	let elementoEnviar;
	let elementoMostrador;

 

	let palindromador=function() { // usamos la declaración para evitar la globalidad
  	let cadena = elementoCadena.value.toUpperCase();
  	cadena=cadena.replace(/ /g, "");
  	for (let i=0;i<cadena.length;i++){
		if(cadena[i]!=cadena[cadena.length-i-1]){ //vamos comparando los carácteres del principio con sus homólogos del final, si co coinciden será false, el for se detendrá, y la cadena no será un palídromo 
			return false;
		};
	};
	return true;
};

let comprobador = function(){
	palindromador();
	if(palindromador())	{
	 elementoMostrador.innerHTML = "Esto es un palíndromo";
		}else{
			elementoMostrador.innerHTML = "Esto no es un palíndromo";
	};
} 


document.addEventListener("DOMContentLoaded", function init() {
	elementoCadena = document.getElementById("cadena");
	elementoEnviar = document.getElementById("enviar");
	elementoMostrador = document.getElementById("mostrador");
  
	elementoEnviar.addEventListener("click",   comprobador);
  
  });
}