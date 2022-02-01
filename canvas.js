let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");

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

//Función para dibujar las letras que se encuentran en la palabra secreta

function descubrirPalabra(mayuscula, posicion) {

}
















