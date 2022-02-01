// Escoger de manera aleatoria una palabra de la lista.

let palabras = ["JAVASCRIPT", "JAVA", "PYTHON", "RUBY", "NODEJS", "HTML", "CSS" ];

function palabraAleatoria() {

    let maximo = palabras.length;
    let aleatorio = Math.random();
    let index = Math.floor(aleatorio * maximo);
    return palabras[index];
    
}








