

function buscarCoordenadas(index) {
    let trazos = [
        {
            xInicial: 150,
            yInicial: 725,
            xFinal: 150,
            yFinal: 100
        },
        {
            xInicial: 145,
            yInicial: 95,
            xFinal: 550,
            yFinal: 95
        },
        {
            xInicial: 545,
            yInicial: 95,
            xFinal: 545,
            yFinal: 200
        },
        {
            xInicial: 0,
            yInicial: 0,
            xFinal: 0,
            yFinal: 0
            //Objeto perteneciente al conteo 3, en que se dibuja el circulo.
        },
        {
            xInicial: 545,
            yInicial: 300,
            xFinal: 545,
            yFinal: 550
        },
        {
            xInicial: 545,
            yInicial: 545,
            xFinal: 450,
            yFinal: 600
        },
        {
            xInicial: 545,
            yInicial: 545,
            xFinal: 640,
            yFinal: 600
        },
        {
            xInicial: 545,
            yInicial: 380,
            xFinal: 640,
            yFinal: 300
        },
        {
            xInicial: 545,
            yInicial: 380,
            xFinal: 450,
            yFinal: 300
        }
    ];

    return trazos[index];
}