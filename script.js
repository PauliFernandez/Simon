var Secuencia = [];
var PosicionSecuencia = 0;

var BotonRojo = document.getElementById("BotonRojo");

function PresionarColorRojo(){
    BotonRojo.style.backgroundColor = "rgb(255, 112, 112)";
}

function RetomarColorRojo(){
    BotonRojo.style.backgroundColor = "red";
}

//////////////////////////////////////////////////////////////////

var BotonVerde = document.getElementById("BotonVerde");

function PresionarColorVerde(){
    BotonVerde.style.backgroundColor = "rgb(66, 117, 66)";
}

function RetomarColorVerde(){
    BotonVerde.style.backgroundColor = "green";
}


//////////////////////////////////////////////////////////////


var BotonAmarillo = document.getElementById("BotonAmarillo");

function PresionarColorAmarillo(){
    BotonAmarillo.style.backgroundColor = "rgb(255, 255, 152)";
}

function RetomarColorAmarillo(){
    BotonAmarillo.style.backgroundColor = "yellow";
}

///////////////////////////////////////////////////////////////////

var BotonAzul = document.getElementById("BotonAzul");

function PresionarColorAzul(){
    BotonAzul.style.backgroundColor = "rgb(82, 82, 255)";
}

function RetomarColorAzul(){
    BotonAzul.style.backgroundColor = "blue";
}

/////////////////////////////////////////////////////////////////

function PresionarColorAzul(){
    BotonAzul.style.backgroundColor = "rgb(82, 82, 255)";
}

function RetomarColorAzul(){
    BotonAzul.style.backgroundColor = "blue";
}

/////////////////////////////////////////////////////////////////

function ElegirColor(){
    setTimeout(function(){
        if (PosicionSecuencia == Secuencia.length) {
            var NumeroElegido = Math.floor(Math.random() * (4 - 1) + 1);
            Secuencia.push(NumeroElegido);
            PresionarSecuencia(NumeroElegido);
            PosicionSecuencia = PosicionSecuencia + 1;
        }
        else if (PosicionSecuencia < Secuencia.length) {
             PresionarSecuencia(Secuencia[PosicionSecuencia])
        }
        else{
            PosicionSecuencia = 0;
            alert("Empezar");
            return;
        }
        PosicionSecuencia = PosicionSecuencia + 1;
    }, 1000);
}

function VerificarSecuencia(NumeroElegido){
    if (Secuencia[PosicionSecuencia] == NumeroElegido){
        if (PosicionSecuencia == Secuencia.length -1){
             PosicionSecuencia = 0;
             ElegirColor();
        }
        else{
            PosicionSecuencia = PosicionSecuencia + 1;
        }
    }
    else {
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
    
        default:
            break;
    }

    switch (NumeroElegido) {
        case 2: 
            PresionarColorVerde()
            setTimeout(function(){
                RetomarColorVerde()
                ElegirColor()
            }, 1000);
            break;
    
        default:
            break;
    }
    switch (NumeroElegido) {
        case 3: 
            PresionarColorAmarillo()
            setTimeout(function(){
                RetomarColorAmarillo()
                ElegirColor()
            }, 1000);
            break;
    
        default:
            break;
    }
    switch (NumeroElegido) {
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
    ElegirColor();
}