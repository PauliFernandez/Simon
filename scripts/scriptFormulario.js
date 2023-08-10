"use strict";

var BotonEnviar = document.getElementById("EnviarContacto");
// Cuando se reaiza click en el boton "enviar" trae los campos nombre, correo y msj
BotonEnviar.addEventListener("click", function () {
  var CampoNombre = document.getElementById("NombreContacto");
  var CampoCorreo = document.getElementById("CorreoContacto");
  var CampoMensaje = document.getElementById("MensajeContacto");

  // Valido si ingreso nombre
  if (CampoNombre.value.length === 0) {
    MostrarModal("Debe ingresar un nombre.");
    return;
  }

  // Valido si es alfanumerico
  if (!EsAlfanumerico(CampoNombre.value)) {
    MostrarModal("El nombre debe completarse con valores alfanumericos.");
    return;
  }

  // Valido el ingreso del correo
  if (CampoCorreo.value.length === 0) {
    MostrarModal("Debe ingresar un correo.");
    return;
  }

  // Valido el formato del correo
  if (!CorreoValido(CampoCorreo.value)) {
    MostrarModal("El formato del correo no es correcto.");
    return;
  }

  // Valida que la longitud del mensaje sea < 5
  if (CampoMensaje.value.length < 5) {
    MostrarModal("El mensaje debe tener al menos 5 caracteres.");
    return;
  }

  // Redirecciona a mailto(abre la app de correo)
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

// Funcion para validar que sea alfanumerico
function EsAlfanumerico(Cadena) {
  var Tamaño;

  // Recorre los caracteres para verificar que sean numeros o letras
  for (var i = 0, Tamaño = Cadena.length; i < Tamaño; i++) {
    var CodigoLetra = Cadena.charCodeAt(i);
    if (
      // Numero (0-9)
      !(CodigoLetra > 47 && CodigoLetra < 58) && 
      // Letras Mayusculas (A-Z)
      !(CodigoLetra > 64 && CodigoLetra < 91) && 
       // Letras Minusculas (a-z)
      !(CodigoLetra > 96 && CodigoLetra < 123)
    ) {
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

// Cierra el modal del validador
document.getElementById("CerrarModal").addEventListener("click", function () {
  document
    .querySelector(".ContenedorModal")
    .classList.remove("MostrarModal");
});

// Muestra el modal del validador
function MostrarModal(Mensaje) {
  document.getElementById("ModalMensaje").innerText = Mensaje;
  document
    .querySelector(".ContenedorModal")
    .classList.add("MostrarModal");
}
