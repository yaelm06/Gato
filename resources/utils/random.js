/*
@name Juego Gato
@file random.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que determina aleatoriamente qué jugador comienza la partida y prepara la interfaz.
//Importa la función para habilitar el tablero.
import iniciarJuego from "./iniciarJuego.js";
//Función que realiza el sorteo del jugador inicial y prepara la interfaz de usuario.
function random(nuevoJuego){
    var player1;
    const ranMatch = Math.floor(Math.random()*2) + 1; // 1 o 2
    const playerInit = document.getElementById("playerInit");

    if(ranMatch === 1){
        playerInit.innerText = "Inicia el Jugador 1";
        player1 = true;
    }
    else {
        playerInit.innerText ="Inicia Jugador 2";
        player1 = false;
    }

    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal_container.style.opacity = "1";
    modal_container.style.visibility = "visible";
    modal.classList.toggle("modal-close");

    iniciarJuego(nuevoJuego , player1); /***********/

    const button_ranGame = document.getElementById("ranGame");
    button_ranGame.disable = true;
    button_ranGame.style.backgroundColor = "gray";
    button_ranGame.style.cursor = "default";
    const button_reset = document.getElementById("cleanButton");
    button_reset.disabled = false;
    button_reset.style.backgroundColor = "#f5ce22";
    button_reset.style.cursor = "pointer";
    return player1; 

}
//Exporta la función para que el controlador principal la use.
export default random; 