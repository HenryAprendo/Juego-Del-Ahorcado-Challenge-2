//Button de iniciar juego

let iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", function(){

    let palabraSecreta = palabraAleatoria();
    console.log(palabraSecreta);
    let longitud = palabraSecreta.length;
    console.log(longitud);

    let pantalla = document.querySelector("#ahorcado");
    let pincel = pantalla.getContext("2d");
    
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fill();

});