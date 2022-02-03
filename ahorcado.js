// Escoger de manera aleatoria una palabra de la lista.
let palabras = ["JAVASCRIPT", "JAVA", "PYTHON", "RUBY", "NODEJS", "HTML", "CSS" ];

function palabraAleatoria() {
    let maximo = palabras.length;
    let aleatorio = Math.random();
    let index = Math.floor(aleatorio * maximo);
    return palabras[index];
    
}

let contador2;      //Control que impide ingresar letras despues del fin del juego
let contador1;      //Control para la impresión del mensaje "ganaste felicidades"
let flagFinal;      //Termina el juego impidiendo el ingreso de mas letras 
let palabraSecreta;
let longitud;

//Button de iniciar juego: Genera una palabra secreta y dibuja el número de guiones.
let iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", function(){

    contador2 = 0;
    contador1 = 0;
    flagFinal = true;
    palabraSecreta = palabraAleatoria();
    console.log(palabraSecreta);
    longitud = palabraSecreta.length;

    dibujarBase();
    dibujarGuiones(longitud);

});


//Detecta la tecla presionada y verifica que este en la palabra secreta.
document.addEventListener("keyup", function(evento){
    let letra = evento.key;
    let mayuscula = letra.toUpperCase();
    let validar = true;
    let limit = 7;  //Indica que ha sido llegado al ultimo intento, y activa el flagFinal.
    
    if (flagFinal){
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] == mayuscula){
                let posicion = i;
                descubrirPalabra(mayuscula, posicion, longitud);
                validar = false;

                contador1 += 1;
            }
        }

        if (validar) {
            mostrarLetraErronea(mayuscula);  
            dibujarHorca();

            if (contador2 > limit) {
                flagFinal = false;
            }
            contador2++;
        }

        if (contador1 === longitud) {
            let mensaje1 = "Ganaste,";
            let mensaje2 = "Felicidades!";
            let x = 850;
            let y = 300;
            imprimirMensaje(mensaje1, x, y);
            imprimirMensaje(mensaje2, x, y + 50);
            flagFinal = false;
        }
    }

});


















































