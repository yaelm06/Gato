/*
@name Juego Gato
@file iniciarJuego.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que prepara y habilita el tablero de juego para que los jugadores puedan empezar a hacer movimientos.
//Importa la función para indicar visualmente a quién le toca jugar.
import turno from "./turno.js";
//Función que prepara el tablero de juego para una nueva ronda.
function iniciarJuego(nuevoJuego, player1){
    var i;

    if(!nuevoJuego){
        for(i=1 ; i<10 ; i++){
            let string = "button_active" + i; 
            document.getElementById(string).style.display = 'block';
        }
    }

    else {
        for(i=1 ; i<10 ; i++){
            let string = "button_active" + i;
            document.getElementById(string).disabled = false; 
            document.getElementById(string).style.cursor = 'pointer';
        }

        nuevoJuego = false; 
    }

    turno(player1);
}

export default iniciarJuego; 