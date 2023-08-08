var Secuencia = [];
var PosicionSecuencia = 0;
var ModoJugador = false;
var Puntaje = 0;
///////////////////////////////////////////////////////////////////

var BotonRojo = document.getElementById("BotonRojo");

BotonRojo.addEventListener('mousedown', function () {
   PresionarColorRojo();
});
function PresionarColorRojo(){
    // Cambia el color del botón
    if (!ModoJugador){
        BotonRojo.classList.add('show');
    }
}

function RetomarColorRojo(){
    BotonRojo.classList.remove('show');
}

BotonRojo.addEventListener('mouseup', function () {
    RetomarColorRojo();
 });

 BotonRojo.addEventListener('click', function () {
    VerificarSecuencia(1);
 });

//////////////////////////////////////////////////////////////////

var BotonVerde = document.getElementById("BotonVerde");

BotonVerde.addEventListener('mousedown', function () {
   PresionarColorVerde();
});
function PresionarColorVerde(){
    if (!ModoJugador){
    // Cambia el color del botón
    BotonVerde.classList.add('show');
    }
}

function RetomarColorVerde(){
    BotonVerde.classList.remove('show');
}

BotonVerde.addEventListener('mouseup', function () {
    RetomarColorVerde();
 });

 BotonVerde.addEventListener('click', function () {
    VerificarSecuencia(2);
 });

//////////////////////////////////////////////////////////////

var BotonAmarillo = document.getElementById("BotonAmarillo");

BotonAmarillo.addEventListener('mousedown', function () {
   PresionarColorAmarillo();
});
function PresionarColorAmarillo(){
    if (!ModoJugador){
    // Cambia el color del botón
    BotonAmarillo.classList.add('show');
    }
}

function RetomarColorAmarillo(){
    BotonAmarillo.classList.remove('show');
}

BotonAmarillo.addEventListener('mouseup', function () {
    RetomarColorAmarillo();
 });

 BotonAmarillo.addEventListener('click', function () {
    VerificarSecuencia(3);
 });

///////////////////////////////////////////////////////////////////

var BotonAzul = document.getElementById("BotonAzul");

BotonAzul.addEventListener('mousedown', function () {
   PresionarColorAzul();
});
function PresionarColorAzul(){
    if (!ModoJugador){
    // Cambia el color del botón
    BotonAzul.classList.add('show');
    }
}

function RetomarColorAzul(){
    BotonAzul.classList.remove('show');
}

BotonAzul.addEventListener('mouseup', function () {
    RetomarColorAzul();
 });

 BotonAzul.addEventListener('click', function () {
    VerificarSecuencia(4);
 });

/////////////////////////////////////////////////////////////////

function ElegirColor(){
    setTimeout(function(){
        if (PosicionSecuencia == Secuencia.length) { //Llegas al final de la secuencia y selecciono un nuevo color  
            var NumeroElegido = Math.floor(Math.random() * (4 - 1) + 1);
            Secuencia.push(NumeroElegido);
            PresionarSecuencia(NumeroElegido);
            PosicionSecuencia = PosicionSecuencia + 1;
        }
        else if (PosicionSecuencia < Secuencia.length) { //aun esta ejecutando la secuencia, presiono el de la posicion actual
             PresionarSecuencia(Secuencia[PosicionSecuencia]);
        }
        else{ //se recorrio la secuencia, empieza el turno del jugadador
            PosicionSecuencia = 0;
            ModoJugador = true;
            return;
        }
        PosicionSecuencia = PosicionSecuencia + 1;
    }, 1000);
}

function VerificarSecuencia(NumeroElegido){
    if (!ModoJugador){
        return;
    }
    if (Secuencia[PosicionSecuencia] == NumeroElegido){
        if (PosicionSecuencia == Secuencia.length -1){
             PosicionSecuencia = 0;
             ModoJugador = false;
             ElegirColor();
        }
        else{
            PosicionSecuencia = PosicionSecuencia + 1;
        }
        Puntaje = Puntaje + 1;
        document.getElementById("Puntuacion").innerHTML = Puntaje;
    }
    else {
        ModoJugador = false;
        document.querySelector('.ContendorPuntuacion').classList.remove('show');
        var NombreJugador = document.getElementById("Nombre").value;
        document.getElementById("ModalMensaje").innerText = `Perdiste ${NombreJugador}`; 
        document.querySelector("#PuntuacionAnterior").innerText = `Tu puntuación fue: ${Puntaje}`;
        document.getElementsByClassName("ContenedorModal")[0].classList.add("MostrarModal");
        // MostrarInscripcion()
    }
}

function PresionarSecuencia(NumeroElegido){
    switch (NumeroElegido) {
        case 1: 
            PresionarColorRojo()
            setTimeout(function(){
                RetomarColorRojo()
                ElegirColor()
            }, 1000);
            break;
        case 2: 
            PresionarColorVerde()
            setTimeout(function(){
                RetomarColorVerde()
                ElegirColor()
            }, 1000);
            break;
        case 3: 
            PresionarColorAmarillo()
            setTimeout(function(){
                RetomarColorAmarillo()
                ElegirColor()
            }, 1000);
            break;
        case 4: 
            PresionarColorAzul()
            setTimeout(function(){
                RetomarColorAzul()
                ElegirColor()
            }, 1000);
            break;
    
        default:
            break;
    }
}

var BotonInicio = document.getElementById("BotonInicio");

function ComenzarJuego(){
    PosicionSecuencia = 0;
    Secuencia = []; 
    ModoJugador = false;
    ElegirColor();
}


function MostrarInscripcion() {
    document.querySelector(".MenuContenedor").classList.add('show');
 }

BotonInicio.addEventListener('click', function () {
    BotonInicio.style.display = "none"
    document.querySelector('.ContendorPuntuacion').classList.add('show')
    MostrarInscripcion()
});

document.getElementById("BotonNombre").addEventListener("click", function(event) {
    var NombreJugador = document.getElementById("Nombre").value;
    // Comprobar si el valor ingresado cumple con el patrón
    if (NombreJugador.length < 3) {
        MostrarModal("Ingrese mínimo 3 letras");
        return;
    }
    document.querySelector(".MenuContenedor").classList.remove('show');
    ComenzarJuego();
});

document.getElementById("CerrarModal").addEventListener("click", function(event) {
    document.getElementsByClassName("ContenedorModal")[0].classList.remove("MostrarModal");
    MostrarInscripcion();
});

function MostrarModal(Mensaje) {
    document.getElementById("ModalMensaje").innerText = Mensaje; 
    document.getElementsByClassName("ContenedorModal")[0].classList.add("MostrarModal");
}