
//Función que genera una palabra aleatoria 
let palabras = ["JAVASCRIPT", "JAVA", "PYTHON", "RUBY", "NODEJS", "HTML", "CSS" ];

function palabraAleatoria() {
    let maximo = palabras.length;
    let aleatorio = Math.random();
    let index = Math.floor(aleatorio * maximo);
    return palabras[index];
    
}

//Ingresar una nueva palabra a la lista.
let boton = document.querySelector("#nueva-palabra");
boton.addEventListener("click", function(){

    let textoInput = document.querySelector("#input-nueva-palabra");
    let texto = textoInput.value;
    validarNuevaPalabra(texto.toUpperCase());
    textoInput.value = "";          
});

//Verificar que la palabra no esté repetida en la lista, ni tenga caracteres especiales.
function validarNuevaPalabra(texto) {
    let palabraValida = "";
    let repetida = palabras.includes(texto);
    if (!repetida) {
        for (let letra of texto) {
            if (texto.charCodeAt(letra) >= 65 && texto.charCodeAt(letra) <= 90) {
                palabraValida = palabraValida.concat(letra);
            }
        }
        if (palabraValida === texto){
            palabras.push(texto);
        }
    }
}

//Declaracion de variables utilizadas como banderas o flag para controlar la ejecución del codigo en puntos claves

let caracteresIngresados = [];
let contador2;      //Control que impide ingresar letras despues del fin del juego
let contador1;      //Control para la impresión del mensaje "ganaste felicidades"
let flagFinal;      //Termina el juego impidiendo el ingreso de mas letras 
let palabraSecreta;
let longitud;
let coordenadas;

//Button de iniciar juego: Genera una palabra secreta y dibuja el número de guiones.
let iniciarJuego = document.querySelector("#iniciar-juego");
iniciarJuego.addEventListener("click", function(){

    caracteresIngresados = [];
    contador2 = 0;
    contador1 = 0;
    flagFinal = true;
    palabraSecreta = palabraAleatoria();
    longitud = palabraSecreta.length;
    dibujarBase();
    dibujarGuiones(longitud);

});

//Detecta la tecla presionada y verifica que esté en la palabra secreta.
document.addEventListener("keyup", function(evento){
    let letra = evento.key;
    let codigoAsc = letra.charCodeAt(letra);

    if (codigoAsc >= 97 && codigoAsc <= 122) {
        let mayuscula = letra.toUpperCase();
        let validar = true;
        let limit = 7; 
        let valor = caracteresIngresados.includes(mayuscula);
                
        if (flagFinal && !valor){
            caracteresIngresados.push(mayuscula);  

            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] == mayuscula){
                    let posicion = i;
                    descubrirPalabra(mayuscula, posicion);
                    validar = false;
                    contador1 += 1;
                }
            }

            if (validar) {
                mostrarLetraErronea(mayuscula);  

                if (contador2 !== 3) {
                    coordenadas = buscarCoordenadas(contador2);
                    let {xInicial, yInicial, xFinal, yFinal} = coordenadas;
                    dibujarHorca(xInicial, yInicial, xFinal, yFinal);
                }
                else {
                    let x = 545
                    let y = 250
                    dibujarCirculo(x, y, 50, "darkblue");
                    dibujarCirculo(x, y, 40, "white");
                }

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
                imprimirMensajeFinal(mensaje1, x, y, "darkblue");
                imprimirMensajeFinal(mensaje2, x, y + 50, "darkblue");
                flagFinal = false;
            }
        }
    }

});






























































