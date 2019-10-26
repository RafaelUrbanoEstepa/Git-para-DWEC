{
    document.addEventListener("DOMContentLoaded", function init() { 

    let elementoMostrador = document.getElementById("mostrador");

    let recuento =  document.getElementsByTagName("a");


    let contador = 0;

    for (let i = 0; i < recuento.length; i++) {
    if (recuento[i].href == "http://prueba/") {    
     contador++
    }
    }
  
    let recuentop =  document.getElementsByTagName("p");
    let parrafo3 = recuentop[2];
    let recuentoa3 = parrafo3.getElementsByTagName("a").length

    elementoMostrador.innerHTML = " <ul><li>Se han contado "+ recuento.length +" enlaces en total.</li><li>La dirección del penúltimo enlace es:"+ recuento[((recuento.length-1)-1)]+"</li><li>Se han contado "+ contador +" enlaces apuntando a http://prueba en total.</li><li>Se han contado "+ recuentoa3 +" enlaces en el tercer párrafo.</li></ul>";
});
}