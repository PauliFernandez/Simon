var Secuencia = [];
var PosicionSecuencia = 0;
var ModoJugador = false;

///////////////////////////////////////////////////////////////////

var BotonRojo = document.getElementById("BotonRojo");

BotonRojo.addEventListener('mousedown', function () {
   PresionarColorRojo();
});
function PresionarColorRojo(){
    // Cambia el color del botón
    BotonRojo.style.backgroundColor = "rgb(255, 112, 112)";
}

function RetomarColorRojo(){
    BotonRojo.style.backgroundColor = "rgb(255, 0, 0)";
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
    // Cambia el color del botón
    BotonVerde.style.backgroundColor = "rgb(66, 117, 66)";
}

function RetomarColorVerde(){
    BotonVerde.style.backgroundColor = "rgb(0, 128, 0)";
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
    // Cambia el color del botón
    BotonAmarillo.style.backgroundColor = "rgb(255, 255, 152)";
}

function RetomarColorAmarillo(){
    BotonAmarillo.style.backgroundColor = "rgb(255, 255, 0)";
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
    // Cambia el color del botón
    BotonAzul.style.backgroundColor = "rgb(82, 82, 255)";
}

function RetomarColorAzul(){
    BotonAzul.style.backgroundColor = "rgb(0, 0, 255)";
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
             PresionarSecuencia(Secuencia[PosicionSecuencia])
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
    }
    else {
        ModoJugador = false;
        alert("Perdiste")
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

function ComenzarJuego(){
    PosicionSecuencia = 0;
    Secuencia = []; 
    ModoJugador = false;
    ElegirColor();
}