"use strict";

var BotonEnviar = document.getElementById("EnviarContacto");
BotonEnviar.addEventListener("click", function () {
  var CampoNombre = document.getElementById("NombreContacto");
  var CampoCorreo = document.getElementById("CorreoContacto");
  var CampoMensaje = document.getElementById("MensajeContacto");

  if (CampoNombre.value.length === 0) {
    MostrarModal("Debe ingresar un nombre.");
    return;
  }

  if (!EsAlfanumerico(CampoNombre.value)) {
    MostrarModal("El nombre debe completarse con valores alfanumericos.");
    return;
  }

  if (CampoCorreo.value.length === 0) {
    MostrarModal("Debe ingresar un correo.");
    return;
  }

  if (!CorreoValido(CampoCorreo.value)) {
    MostrarModal("El formato del correo no es correcto.");
    return;
  }

  if (CampoMensaje.value.length < 5) {
    MostrarModal("El mensaje debe tener al menos 5 caracteres.");
    return;
  }

  location.href =
    "mailto:contacto@simon.com?subject=Contacto de " +
    CampoNombre.value +
    "&body=" +
    "Nombre: " +
    CampoNombre.value +
    ". Correo: " +
    CampoCorreo.value +
    ". Mensaje: " +
    CampoMensaje.value;
});

function EsAlfanumerico(Cadena) {
  var Tamaño;

  for (var i = 0, Tamaño = Cadena.length; i < Tamaño; i++) {
    var CodigoLetra = Cadena.charCodeAt(i);
    if (
      !(CodigoLetra > 47 && CodigoLetra < 58) && // Numero (0-9)
      !(CodigoLetra > 64 && CodigoLetra < 91) && // Letras Mayusculas (A-Z)
      !(CodigoLetra > 96 && CodigoLetra < 123)
    ) {
      // Letras Minusculas (a-z)
      return false;
    }
  }

  return true;
}

function CorreoValido(Correo) {
  var PosicionArroba = Correo.lastIndexOf("@");
  var PosicionUltimoPunto = Correo.lastIndexOf(".");
  return (
    PosicionArroba < PosicionUltimoPunto &&
    PosicionArroba > 0 &&
    Correo.indexOf("@@") == -1 &&
    PosicionUltimoPunto > 2 &&
    Correo.length - PosicionUltimoPunto > 2
  );
}

document.getElementById("CerrarModal").addEventListener("click", function () {
  document
    .getElementsByClassName("ContenedorModal")[0]
    .classList.remove("MostrarModal");
});

function MostrarModal(Mensaje) {
  document.getElementById("ModalMensaje").innerText = Mensaje;
  document
    .getElementsByClassName("ContenedorModal")[0]
    .classList.add("MostrarModal");
}
