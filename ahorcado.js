// Escoger de manera aleatoria una palabra de la lista.

let palabras = ["JAVASCRIPT", "JAVA", "PYTHON", "RUBY", "NODEJS", "HTML", "CSS" ];

function palabraAleatoria() {

    let maximo = palabras.length;
    let aleatorio = Math.random();
    let index = Math.floor(aleatorio * maximo);
    return palabras[index];
    
}

let palabraSecreta;
let longitud;

//Button de iniciar juego: Genera una palabra secreta y dibuja el número de guiones.
let iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", function(){

    palabraSecreta = palabraAleatoria();
    longitud = palabraSecreta.length;

    dibujarBase();
    dibujarGuiones(longitud);

});

//Detecta la tecla presionada y verifica que este en la palabra secreta.
document.addEventListener("keyup", function(evento){
    let letra = evento.key;
    let mayuscula = letra.toUpperCase();
    
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == mayuscula){
            console.log(mayuscula);
            console.log(i);
            let posicion = i;
            descubrirPalabra(mayuscula, posicion);
        }
        else {
            console.log("La letra no esta en la palabra");
        }
    }

});

















































