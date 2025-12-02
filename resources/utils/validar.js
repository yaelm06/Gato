/*
@name Juego Gato
@file validar.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/

// Función que verifica todas las posibles condiciones de victoria y empate.
function validar(player1 , matrix , contador_selecciones){
    let ganador = 0; 
    let simbolo = player1 ? 'x' : 'o';

    //Filas
    if(simbolo === matrix[0][0] && simbolo === matrix[0][1] && simbolo === matrix[0][2]) ganador = (simbolo === 'x') ? 1 : 2;
    else if(simbolo === matrix[1][0] && simbolo === matrix[1][1] && simbolo === matrix[1][2]) ganador = (simbolo === 'x') ? 1 : 2;
    else if(simbolo === matrix[2][0] && simbolo === matrix[2][1] && simbolo === matrix[2][2]) ganador = (simbolo === 'x') ? 1 : 2;
    //Columnas
    else if(simbolo === matrix[0][0] && simbolo === matrix[1][0] && simbolo === matrix[2][0]) ganador = (simbolo === 'x') ? 1 : 2;
    else if(simbolo === matrix[0][1] && simbolo === matrix[1][1] && simbolo === matrix[2][1]) ganador = (simbolo === 'x') ? 1 : 2;
    else if(simbolo === matrix[0][2] && simbolo === matrix[1][2] && simbolo === matrix[2][2]) ganador = (simbolo === 'x') ? 1 : 2; 
    //Diagonales 
    else if(simbolo === matrix[0][0] && simbolo === matrix[1][1] && simbolo === matrix[2][2]) ganador = (simbolo === 'x') ? 1 : 2; 
    else if(simbolo === matrix[0][2] && simbolo === matrix[1][1] && simbolo === matrix[2][0]) ganador = (simbolo === 'x') ? 1 : 2; 

    // --- CORRECCIÓN EMPATE ---
    // Contamos cuántos espacios vacíos (0) quedan en la matriz
    let espaciosVacios = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(matrix[i][j] === 0) espaciosVacios++;
        }
    }

    // Si nadie ganó (ganador 0) Y ya no hay espacios vacíos...
    if(ganador === 0 && espaciosVacios === 0){
        const nextButton = document.getElementById("nextButton");
        // Activamos el botón de Siguiente Juego
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "#f5ce22"; 
        nextButton.style.cursor = "pointer";
        ganador = 3; // Marcamos empate
    }

    return ganador; 
}

export default validar;