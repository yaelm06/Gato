/*
@name Juego Gato
@file turno.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que contiene la función que actualiza visualmente la interfaz de usuario
//Función para indicar a qué jugador le corresponde el turno actual.
function turno(player1){

    if(player1 === true){
        const img_player1 = document.getElementById("img_player1");
        img_player1.src = "./images/play.png";
        img_player1.style.width = '120%';

        const img_player2 = document.getElementById("img_player2");
        img_player2.src = "./images/wait.png";
        img_player2.style.width = '80%';

        document.getElementById("player1_title").style.fontSize = '30px';
        document.getElementById("player2_title").style.fontSize = '18px';
    }
    else {
        const img_player1 = document.getElementById("img_player1");
        img_player1.src = "./images/wait.png";
        img_player1.style.width = '80%';

        const img_player2 = document.getElementById("img_player2");
        img_player2.src = "./images/play.png";
        img_player2.style.width = '120%';

        document.getElementById("player1_title").style.fontSize = '18px';
        document.getElementById("player2_title").style.fontSize = '30px';
    }
}
//Exporta la función para ser llamada al cambiar de jugador.
export default turno;