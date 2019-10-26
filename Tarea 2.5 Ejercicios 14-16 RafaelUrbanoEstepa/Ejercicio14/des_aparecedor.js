{ 
/* 
A partir de la página web proporcionada, completar el código JavaScript para que:

-Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
-Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
-Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
-Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)

@author Rafael Urbano Estepa
*/

    let elementoContenido1;
    let elementoEnlace1;
    let elementoContenido2;
    let elementoEnlace2;
    let elementoContenido3;
    let elementoEnlace3;




 let des_aparecedor1 = function() {
    if(elementoContenido1.style.display == "" || elementoContenido1.style.display == "block") {
      elementoContenido1.style.display = "none";
      elementoEnlace1.innerHTML = "Mostrar contenido";
        }
    else {
      elementoContenido1.style.display = "block";
      elementoEnlace1.innerHTML = "Ocultar contenido";
        }
    };

    let des_aparecedor2 = function() {
      if(elementoContenido2.style.display == "" || elementoContenido2.style.display == "block") {
        elementoContenido2.style.display = "none";
        elementoEnlace2.innerHTML = "Mostrar contenido";
          }
      else {
        elementoContenido2.style.display = "block";
        elementoEnlace2.innerHTML = "Ocultar contenido";
          }
      };

      let des_aparecedor3 = function() {
        if(elementoContenido3.style.display == "" || elementoContenido3.style.display == "block") {
          elementoContenido3.style.display = "none";
          elementoEnlace3.innerHTML = "Mostrar contenido";
            }
        else {
          elementoContenido3.style.display = "block";
          elementoEnlace3.innerHTML = "Ocultar contenido";
            }
        };

document.addEventListener("DOMContentLoaded", function init() {
    elementoContenido1 = document.getElementById("contenidos_1");
    elementoEnlace1 = document.getElementById("enlace_1");
    elementoContenido2 = document.getElementById("contenidos_2");
    elementoEnlace2 = document.getElementById("enlace_2");
    elementoContenido3 = document.getElementById("contenidos_3");
    elementoEnlace3 = document.getElementById("enlace_3");

    elementoEnlace1.addEventListener("click", des_aparecedor1);
    elementoEnlace2.addEventListener("click", des_aparecedor2);
    elementoEnlace3.addEventListener("click", des_aparecedor3);
});

}