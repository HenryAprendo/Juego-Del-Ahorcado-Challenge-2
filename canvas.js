//Button de iniciar juego
let pantalla = document.querySelector("#ahorcado");
let pincel = pantalla.getContext("2d");

let iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", function(){

    let palabraSecreta = palabraAleatoria();
    console.log(palabraSecreta);
    let longitud = palabraSecreta.length;
    console.log(longitud);

    dibujarBase();
    dibujarGuiones(longitud);

});

function dibujarBase() {
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fill();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 720);
    pincel.lineTo(100, 760);
    pincel.lineTo(300, 760);
    pincel.fill();
     
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(200, 730);
    pincel.lineTo(150, 750);
    pincel.lineTo(250, 750);
    pincel.fill(); 

}


function dibujarGuiones(longitud) {
    //let pantalla = document.querySelector("#ahorcado");
    //let pincel = pantalla.getContext("2d");

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200, 720);
    pincel.lineTo(100, 760);
    pincel.lineTo(300, 760);
    pincel.fill();
     
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(200, 730);
    pincel.lineTo(150, 750);
    pincel.lineTo(250, 750);
    pincel.fill();    


    let x = 400;

    for (let i = 0; i < longitud; i++) {
        pincel.fillStyle = "black";
        pincel.fillRect(x, 760, 40, 5);
        x = x + 80;
    }
}


















