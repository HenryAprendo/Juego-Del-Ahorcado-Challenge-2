let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");
let contador = 0;

function dibujarBase() {
    pincel.fillStyle = "greenyellow";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fill();

    pincel.fillStyle = "darkblue";
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
    let x = 300;
    for (let i = 0; i < longitud; i++) {
        pincel.fillStyle = "black";
        pincel.fillRect(x, 760, 40, 5);
        x = x + 80;
    }
}

//Funcion que dibuja la estructura de la horca.
function dibujarHorca(xInicial, yInicial, xFinal, yFinal) {
    pincel.beginPath();
    pincel.strokeStyle = "darkblue";
    pincel.lineWidth = 9;
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.stroke();
    pincel.closePath();
}

//Funcion que dibuja circulos
function dibujarCirculo(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

//Función para dibujar las letras que se encuentran en la palabra secreta.
function descubrirPalabra(letra, posicion) {
    let separacion = 80;   
    let xInicial = 304;    
    let y = 750;
    let ubicacion = separacion * posicion;   
    let encuentraPosicion = xInicial + ubicacion;

    imprimirLetra(letra, encuentraPosicion, y);

}

//Funcion para dibujar las letras erroneas.
function mostrarLetraErronea(letra) {
    let mensaje = "Fin del Juego¡"
    const limite = 7;
    let y = 450;
    let separacion = 40;
    let xInicial = 800;
    let ubicacion = separacion * contador;
    let encuentraPosicion = xInicial + ubicacion;    

    if (contador <= limite) {
        imprimirLetra(letra, encuentraPosicion, y);
        contador += 1;
    }
    else {
        imprimirMensajeFinal(mensaje, 850, 350, "red");
    }

}  

//Dibuja el mensaje final de acuerdo a si perdió o ganó
function imprimirMensajeFinal(mensaje, x, y, color) {
    pincel.font = "40px Georgia";
    pincel.fillStyle = color;
    pincel.fillText(mensaje, x, y);
    contador = 0;
}

//Dibuja la letra correcta o erronea
function imprimirLetra(mensaje, x, y) {
    pincel.font = "50px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(mensaje, x, y);
}









