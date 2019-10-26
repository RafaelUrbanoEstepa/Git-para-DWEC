{
  /* 
Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: 
izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.

  @author Rafael Urbano Estepa
  */
  let elementoDiv;

  let informacion = function (evento) {
    // let evento = elEvento || window.event;

    let coordenadaX = evento.clientX;
    let coordenadaY = evento.clientY;

    let [tamanoX, tamanoY] = tamanoVentanaNavegador();

    let posicionHorizontal = (coordenadaX > tamanoX / 2) ? "Derecha" : "Izquierda";
    let posicionVertical = (coordenadaY < tamanoY / 2) ? "Arriba" : "Abajo";

    muestraInformacion([event.type, posicionHorizontal, posicionVertical, "Posición X del click: " + coordenadaX, "Posición Y del click: " + coordenadaY]);
  }

  let muestraInformacion = function (mensaje) {
    let texto = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
      texto += '<p>' + mensaje[i] + '</p>';
    }
    elementoDiv.innerHTML = texto;
  };


  let tamanoVentanaNavegador = function () {
      return [document.body.clientWidth, document.body.clientHeight];
  }

  document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    elementoDiv = document.getElementById("info");

    //manejadores de eventos
    document.addEventListener("click", informacion);
    //document.onclick = informacion;
  });
}