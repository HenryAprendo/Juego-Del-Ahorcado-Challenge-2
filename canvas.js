let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");
let contador = 0;

function dibujarBase() {
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fill();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(150, 720);
    pincel.lineTo(50, 760);
    pincel.lineTo(250, 760);
    pincel.fill();
     
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(150, 730);
    pincel.lineTo(100, 750);
    pincel.lineTo(200, 750);
    pincel.fill(); 

}

function dibujarGuiones(longitud) {
    //let pantalla = document.querySelector("#ahorcado");
    //let pincel = pantalla.getContext("2d");  

    let x = 300;

    for (let i = 0; i < longitud; i++) {
        pincel.fillStyle = "black";
        pincel.fillRect(x, 760, 40, 5);
        x = x + 80;
    }
}

//Función para dibujar las letras que se encuentran en la palabra secreta.

function descubrirPalabra(letra, posicion, longitud) {
    let separacion = 80;    // 80px es la separación entre letras
    let xInicial = 304;    //Posicion de la primera letra
    let y = 750;
    let ubicacion = separacion * posicion;   
    let encuentraPosicion = xInicial + ubicacion;

    pincel.font = "50px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(letra, encuentraPosicion, y);

}

//Funcion para dibujar las letras erroneas.
function mostrarLetraErronea(letra) {
    let mensaje = "Fin del Juego¡"
    const limite = 7;
    let y = 400;
    let separacion = 40;
    let xInicial = 800;
    let ubicacion = separacion * contador;
    let encuentraPosicion = xInicial + ubicacion;

    if (contador <= limite) {
        pincel.font = "50px Georgia";
        pincel.fillStyle = "red";
        pincel.fillText(letra, encuentraPosicion, y);
        contador += 1;
    }
    else {
        pincel.font = "40px Georgia";
        pincel.fillStyle = "blue";
        pincel.fillText(mensaje, 850, 300);
        contador = 0;
    }

}  

//Impresion de mensajes Ganar y fin del juego.
function imprimirMensaje(mensaje, x, y) {
    pincel.font = "40px Georgia";
    pincel.fillStyle = "blue";
    pincel.fillText(mensaje, x, y);
    contador = 0;
}


//Funcion que dibuja la estructura de la horca.
function dibujarHorca() {
    pincel.beginPath();
    pincel.strokeStyle = "darkblue";
    pincel.lineWidth = 9;
    pincel.moveTo(150, 725);
    pincel.lineTo(150, 100);
    pincel.stroke();
    pincel.closePath();
}



/*var x = 100;
var y = 100;

dibujarlinea("blue", x-1, y-1, x+1, y+1);

    function dibujarlinea(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    }*/








