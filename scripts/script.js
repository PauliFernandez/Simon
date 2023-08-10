"use strict";

var Secuencia = [];
var PosicionSecuencia = 0;
var ModoJugador = false;
var Puntaje = 0;

// Obtiene el elemento BotonInicio
var BotonInicio = document.getElementById("BotonInicio");

// Escucha al evento cuando el mouse hace click
BotonInicio.addEventListener("click", function () {
  // Oculta el BotonInicio
  BotonInicio.style.display = "none";
  // Muestra modal de inscripcion
  MostrarInscripcion();
});

document.getElementById("BotonNombre").addEventListener("click", function () {
  // Se obtiene el campo "Nombre"
  var NombreJugador = document.getElementById("Nombre").value;
  // Comprueba si el nombre ingresado tiene al menos 3 caracteres
  if (NombreJugador.length < 3) {
    // Sino muestra un alerta advirtiendo
    MostrarModal("Ingrese mínimo 3 letras");
    return;
  }
  // Oculta el menu de inscripcion
  document.querySelector(".MenuInscripcion").classList.remove("show");
  // Llama el metodo para comenzar el juego
  ComenzarJuego();
});

// Obtiene el elemento del botón rojo
var BotonRojo = document.getElementById("BotonRojo");

// Escucha el evento de presión del boton del mouse
BotonRojo.addEventListener("mousedown", function () {
  // Si el modo jugador esta activo
  if (ModoJugador) {
    // Ejecuta la función de presionar boton color rojo
    PresionarColorRojo();
  }
});

function PresionarColorRojo() {
  // Cambia el color del botón agregando la clase css
  BotonRojo.classList.add("show");
}

function RetomarColorRojo() {
  // Vuelve al color incial removiendo la clase de css
  BotonRojo.classList.remove("show");
}

// Escucha el evento cuando se deja de presionar el boton del mouse
BotonRojo.addEventListener("mouseup", function () {
  RetomarColorRojo();
});

// Escucha el evento cuando el mouse hace clcik
BotonRojo.addEventListener("click", function () {
  // Ejecuta la función "Verificar secuencia"
  VerificarSecuencia(1);
});

var BotonVerde = document.getElementById("BotonVerde");

BotonVerde.addEventListener("mousedown", function () {
  if (ModoJugador) {
    PresionarColorVerde();
  }
});

function PresionarColorVerde() {
  BotonVerde.classList.add("show");
}

function RetomarColorVerde() {
  BotonVerde.classList.remove("show");
}

BotonVerde.addEventListener("mouseup", function () {
  RetomarColorVerde();
});

BotonVerde.addEventListener("click", function () {
  VerificarSecuencia(2);
});

var BotonAmarillo = document.getElementById("BotonAmarillo");

BotonAmarillo.addEventListener("mousedown", function () {
  if (ModoJugador) {
    PresionarColorAmarillo();
  }
});

function PresionarColorAmarillo() {
  // Cambia el color del botón
  BotonAmarillo.classList.add("show");
}

function RetomarColorAmarillo() {
  BotonAmarillo.classList.remove("show");
}

BotonAmarillo.addEventListener("mouseup", function () {
  RetomarColorAmarillo();
});

BotonAmarillo.addEventListener("click", function () {
  VerificarSecuencia(3);
});

var BotonAzul = document.getElementById("BotonAzul");

BotonAzul.addEventListener("mousedown", function () {
  if (ModoJugador) {
    PresionarColorAzul();
  }
});

function PresionarColorAzul() {
  // Cambia el color del botón
  BotonAzul.classList.add("show");
}

function RetomarColorAzul() {
  BotonAzul.classList.remove("show");
}

BotonAzul.addEventListener("mouseup", function () {
  RetomarColorAzul();
});

BotonAzul.addEventListener("click", function () {
  VerificarSecuencia(4);
});

function ComenzarJuego() {
  // Inicializa variables del juego
  PosicionSecuencia = 0;
  Secuencia = [];
  ModoJugador = false;
  Puntaje = 0;
  // Inicializa tablero de puntaje y lo muestra
  document.getElementById("Puntuacion").innerText = Puntaje;
  // Obtiene el contenedor del tablero de puntuacion y lo muestra
  document.querySelector(".ContendorPuntuacion").classList.add("show");
  ElegirColor();
}

function ElegirColor() {
  setTimeout(function () {
    if (PosicionSecuencia === Secuencia.length) {
      // Llegas al final de la secuencia y selecciono un nuevo color
      var NumeroElegido = Math.floor(Math.random() * 3 + 1);
      // Agrega el numero elegido al arreglo de secuencia
      Secuencia.push(NumeroElegido);
      // Llama el metodo presionar secuencia y ensciende el botón que corresponde al nro elegido
      // y llama el metodo elegir color
      SeguirSecuencia(NumeroElegido);
      // Incrementa la posicion de la secuencia en 1, para que la condicion del if sea false
      PosicionSecuencia = PosicionSecuencia + 1;
    } else if (PosicionSecuencia < Secuencia.length) {
      // aun esta ejecutando la secuencia, presiono el de la posicion actual
      SeguirSecuencia(Secuencia[PosicionSecuencia]);
    } else {
      // se recorrio la secuencia, se vuelve la posicion de la secuencia a 0, para que empiece la secuencia el jugador
      PosicionSecuencia = 0;
      // Activa el modo jugadador
      ModoJugador = true;
      return;
    }
    PosicionSecuencia = PosicionSecuencia + 1;
  }, 1000);
}

function VerificarSecuencia(NumeroElegido) {
  // Si el modo jugador es falso sale de la funcion
  if (!ModoJugador) {
    return;
  }

  // Si la secuencia en la posicionsecuencia es igual al numero elegido por el usuario
  if (Secuencia[PosicionSecuencia] === NumeroElegido) {
    if (PosicionSecuencia === Secuencia.length - 1) {
      // Llega al final de la secuencia y vuelve la posicion a 0 para que jeugue el ordenador
      PosicionSecuencia = 0;
      // Deshabilita el modo jugador
      ModoJugador = false;
      // Inicia de nuevo la secuencia el ordenador
      ElegirColor();
    } else {
      // Si no llego al final de la secuencia, se posiciona en la siguiente y el jugador vuelve a elegir color
      PosicionSecuencia = PosicionSecuencia + 1;
    }
    // Suma 1 punto
    Puntaje = Puntaje + 1;
    // Lo muestra en la puntuacion
    document.getElementById("Puntuacion").innerText = Puntaje;
  } else {
    // Jugador perdio se desactiva el modo jugador
    ModoJugador = false;
    // Oculta la puntuacion
    document.querySelector(".ContendorPuntuacion").classList.remove("show");
    var NombreJugador = document.getElementById("Nombre").value;
    // Muestra el mensaje de que el usuario perdiò, con la puntaucion
    document.getElementById(
      "ModalMensaje"
    ).innerText = `Perdiste ${NombreJugador}`;
    document.querySelector(
      "#PuntuacionAnterior"
    ).innerText = `Tu puntuación fue: ${Puntaje}`;
    document
      .querySelector(".ContenedorModal")
      .classList.add("MostrarModal");
  }
}

function SeguirSecuencia(NumeroElegido) {
  switch (NumeroElegido) {
    case 1:
      PresionarColorRojo();
      setTimeout(function () {
        RetomarColorRojo();
        ElegirColor();
      }, 1000);
      break;
    case 2:
      PresionarColorVerde();
      setTimeout(function () {
        RetomarColorVerde();
        ElegirColor();
      }, 1000);
      break;
    case 3:
      PresionarColorAmarillo();
      setTimeout(function () {
        RetomarColorAmarillo();
        ElegirColor();
      }, 1000);
      break;
    case 4:
      PresionarColorAzul();
      setTimeout(function () {
        RetomarColorAzul();
        ElegirColor();
      }, 1000);
      break;

    default:
      break;
  }
}

// Funcion para mostrar el nombre y el boton comenzar
function MostrarInscripcion() {
  document.querySelector(".MenuInscripcion").classList.add("show");
}

// Cuando realiza click en cerrar modal, oculta el modal de perdedor y muestra la inscripcion
document
  .getElementById("CerrarModal")
  .addEventListener("click", function (event) {
    document
      .querySelector(".ContenedorModal")
      .classList.remove("MostrarModal");
    MostrarInscripcion();
  });

// Funcion para mostrar el modal de perdedor
function MostrarModal(Mensaje) {
  document.getElementById("ModalMensaje").innerText = Mensaje;
  document
    .querySelector(".ContenedorModal")
    .classList.add("MostrarModal");
}
