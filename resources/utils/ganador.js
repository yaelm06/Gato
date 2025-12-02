/*
@name Juego Gato
@file ganador.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que se encarga de actualizar la interfaz de usuario (UI) cuando una ronda finaliza.
function winPlayer1 (score1){
    //Actualiza las imágenes de perfil para mostrar "Ganador" (Player 1) y "Perdedor" (Player 2).
    const img_player1 =  document.getElementById("img_player1");
    img_player1.src = "./images/win.png";
    img_player1.style.width = '80%';
    const img_player2 =  document.getElementById("img_player2");
    img_player2.src = "./images/lose.png";
    img_player2.style.width = '80%';
    document.getElementById("player1_title").style.fontSize = '18px';
    document.getElementById("player2_title").style.fontSize = '18px';
    //Actualiza los elementos de la interfaz que muestran la puntuación del Jugador 1.
    const score_1 = document.getElementById("score_1"); 
    const score_1m = document.getElementById("score_1m");
    score_1.innerText = score1;
    score_1m.innerText = score1;

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";

    for(var i = 1; i < 10 ; i++){
        let string = "button_active"+i; 
        document.getElementById(string).disabled = true; 
    }

}

function winPlayer2 (score2){
    //Actualiza las imágenes de perfil: "Perdedor" (Player 1) y "Ganador" (Player 2).
    const img_player1 =  document.getElementById("img_player1");
    img_player1.src = "./images/lose.png";
    img_player1.style.width = '80%';
    const img_player2 =  document.getElementById("img_player2");
    img_player2.src = "./images/win.png";
    img_player2.style.width = '80%';
    document.getElementById("player1_title").style.fontSize = '18px';
    document.getElementById("player2_title").style.fontSize = '18px';
    //Actualiza los elementos de la interfaz que muestran la puntuación del Jugador 2.
    const score_2 = document.getElementById('score_2'); 
    const score_2m = document.getElementById('score_2m');
    score_2.innerText = score2;
    score_2m.innerText = score2;

    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";

    for(var i = 1; i < 10 ; i++){
        let string = "button_active"+i; 
        document.getElementById(string).disabled = true; 
    }

}
//Exporta las funciones para que el archivo principal pueda llamarlas al determinar un ganador.
export {winPlayer1 , winPlayer2};