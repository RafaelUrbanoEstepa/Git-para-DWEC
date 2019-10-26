{
  /* 
  Completar el código JavaScript proporcionado para que:
  
  1-Al mover el ratón en cualquier punto de la ventana del navegador, se muestre la posición del puntero respecto del navegador y respecto de la página.
  2-Al pulsar cualquier tecla, el mensaje mostrado debe cambiar para indicar el nuevo evento y su información asociada.
  3-Añadir la siguiente característica al script: cuando se pulsa un botón del ratón, el color de fondo del cuadro de mensaje debe ser amarillo (#FFFFCC) 
  y cuando se pulsa una tecla, el color de fondo debe ser azul (#CCE6FF). 
  Al volver a mover el ratón, el color de fondo vuelve a ser blanco.
  @author Rafael Urbano Estepa
  */
  let elementoDiv;

  let apuntador = function (evento) {
    switch (event.type) {
      case 'mousemove':
        elementoDiv.style.backgroundColor = '#FFFFFF';
        let coordenadaXrelativa, coordenadaYrelativa, coordenadaXabsoluta, coordenadaYabsoluta;
        
        coordenadaXabsoluta = evento.pageX;
        coordenadaYabsoluta = evento.pageY;
        
        coordenadaXrelativa = evento.clientX;
        coordenadaYrelativa = evento.clientY;
        
        muestraInformacion(['Ratón', 'Navegador [' + coordenadaXrelativa + ', ' + coordenadaYrelativa + ']', 'Pagina [' + coordenadaXabsoluta + ', ' + coordenadaYabsoluta + ']']);
        break;

      case 'keypress':
        elementoDiv.style.backgroundColor = '#CCE6FF';
        let caracter = evento.charCode || evento.keyCode;
        let letra = String.fromCharCode(caracter);
        let codigo = letra.charCodeAt(0);
        muestraInformacion(['Teclado', 'Carácter [' + letra + ']', 'Código [' + codigo + ']']);
        break;

      case 'click':
        elementoDiv.style.backgroundColor = '#FFFFCC';
        break;
    }
  }

  let muestraInformacion = function (mensaje) {
    let texto = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
      texto += '<p>' + mensaje[i] + '</p>';
    }
    elementoDiv.innerHTML = texto;
  };


  document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    elementoDiv = document.getElementById("info");

    //manejadores de eventos
    document.addEventListener("click", apuntador);
    document.addEventListener("mousemove", apuntador);
    document.addEventListener("keypress", apuntador);

  });

  /* 
  window.onload = function(){
      apuntador();
      muestraInformacion();
      }  */
}