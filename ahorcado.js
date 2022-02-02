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
    console.log(palabraSecreta);
    longitud = palabraSecreta.length;

    dibujarBase();
    dibujarGuiones(longitud);

});

let contar = 0;    //Control para la impresión del mensaje "ganaste felicidades"

//Detecta la tecla presionada y verifica que este en la palabra secreta.
document.addEventListener("keyup", function(evento){
    let letra = evento.key;
    let mayuscula = letra.toUpperCase();
    let validar = true;
    
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == mayuscula){
            let posicion = i;
            descubrirPalabra(mayuscula, posicion);
            validar = false;

            contar += 1;
            console.log(contar);
        }
    }

    if (validar) {
        mostrarLetraErronea(mayuscula);  
    }

    if (contar === longitud) {
        let mensaje1 = "Ganaste,";
        let mensaje2 = "Felicidades!";
        let x = 850;
        let y = 300;
        imprimirMensaje(mensaje1, x, y);
        imprimirMensaje(mensaje2, x, y + 50);
        console.log("Ganaste");
        console.log(contar);
        console.log(longitud);

    }

});


















































