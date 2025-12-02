/*
@name Juego Gato
@file index.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que es el punto de entrada (main) del juego de Tic-Tac-Toe.
//Inicializa variables, gestiona eventos de click y coordina el flujo del juego.
//Importaciones de módulos
import random from "./random.js";
import ocultarModal from "./ocultarModal.js";
import { winPlayer1 , winPlayer2 } from "./ganador.js";
import { boton00 , boton01, boton02,
         boton10 , boton11 , boton12,
         boton20 , boton21, boton22,
         jugarIA
        } from "./botonesTablero.js";

//Variables de estado Global del Juego
var player1; //True o False
var nuevoJuego = false; //Primer Juego
var contador_selecciones = 0; 
var ganador = 0; //0 1 2 3
var score1 = 0;
var score2  = 0; 

export var vsIA = false;

//Matriz 3x3 que almacena el estado interno del juego (ej. 'x', 'o', o 0 para vacío).
var matrix = [
    [0 , 0, 0],
    [0 , 0, 0],
    [0 , 0, 0]
];
//Obtiene referencias a todos los elementos interactivos del HTML.
const sortearPartida = document.querySelector("#ranGame"); 
const comenzar = document.querySelector('#start');
const activeBoton00 = document.querySelector("#button_active1");
const activeBoton01 = document.querySelector("#button_active2");
const activeBoton02 = document.querySelector("#button_active3");
const activeBoton10 = document.querySelector("#button_active4");
const activeBoton11 = document.querySelector("#button_active5");
const activeBoton12 = document.querySelector("#button_active6");
const activeBoton20 = document.querySelector("#button_active7");
const activeBoton21 = document.querySelector("#button_active8");
const activeBoton22 = document.querySelector("#button_active9");
const siguienteJuego = document.querySelector("#nextButton");
const botonReinicio = document.querySelector("#cleanButton");
const btnMode = document.querySelector("#btnMode");

//Incrementa el contador de movimientos, se llama después de cada jugada.
function contadorClicks(){
    contador_selecciones +=1;
    if(contador_selecciones===9){
        contador_selecciones = 0; 
    } 
    console.log(matrix);
    console.log(ganador);
}
//Actualiza la puntuación total y llama a la función de victoria/empate si es necesario.
function puntaje(){
    if(ganador===1){
        score1 += 1; 
        winPlayer1(score1); 
        contador_selecciones = 0; 
    }
    else if(ganador === 2){
        score2 += 1;
        winPlayer2(score2);
        contador_selecciones = 0; 
    }

    else if(ganador === 3){
        contador_selecciones = 0; 
    }
}

btnMode.onclick = () => {
    vsIA = !vsIA;
    if(vsIA){
        btnMode.innerText = "Modo: Vs IA 🤖";
        btnMode.style.backgroundColor = "orange";
        alert("¡Modo IA Activado! La computadora usará un Árbol de Decisiones.");
    } else {
        btnMode.innerText = "Modo: 2 Jugadores";
        btnMode.style.backgroundColor = "#f5ce22";
        alert("Modo 2 Jugadores Activado. Juega con un amigo.");
    }
    botonReinicio.click();
}

//Asigna la función 'random' al botón de sorteo para elegir quién empieza.
sortearPartida.onclick = () => {
    player1 = random(nuevoJuego); 
    if (vsIA && !player1) {
        jugarIA(matrix, 0);
    }
}

comenzar.onclick = () => {
    ocultarModal();
}
//Maneja el cierre del modal inicial si el usuario hace clic fuera de su contenido.
window.addEventListener("click",
    function (e){
        let modal = document.querySelectorAll(".modal")[0];
        let modal_container = document.querySelectorAll(".modal-container")[0];

        if(e.target === modal_container){
            modal.classList.toggle("modal-close"); 
            setTimeout(
                function () {
                    modal_container.style.opacity = "0";
                    modal_container.style.visibility = "hidden";
                },
            1000)
        }
    }
);
//La lógica es la misma para los 9 botones:
activeBoton00.onclick = () => {
    //Llama a la función de lógica de la casilla (importada), actualizando el estado de la matriz y el tablero visual.
    var resultado = boton00(player1, matrix , contador_selecciones);
    //Actualiza las variables globales del estado del juego con el resultado devuelto por la función del botón.
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    //Incrementa el contador y verifica si alguien ganó o si hay empate.
    contadorClicks();
    puntaje(); 
}

activeBoton01.onclick = () => {
    var resultado = boton01(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton02.onclick = () => {
    var resultado = boton02(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton10.onclick = () => {
    var resultado = boton10(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton11.onclick = () => {
    var resultado = boton11(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton12.onclick = () => {
    var resultado = boton12(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton20.onclick = () => {
    var resultado = boton20(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton21.onclick = () => {
    var resultado = boton21(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}

activeBoton22.onclick = () => {
    var resultado = boton22(player1, matrix , contador_selecciones);
    player1 = resultado[0];
    matrix = resultado[1];
    ganador = resultado[2];
    contadorClicks();
    puntaje(); 
}
//Evento del Botón de Siguiente Ronda
siguienteJuego.onclick = () => {
    ganador = 0;
    contador_selecciones = 0;
    nuevoJuego = true;

    matrix = [
        [0 , 0, 0],
        [0 , 0, 0],
        [0 , 0, 0]
    ];

    const button_ranGame = document.getElementById("ranGame");
    button_ranGame.disabled = false;
    button_ranGame.style.backgroundColor = "#f5ce22";
    button_ranGame.style.cursor = "pointer";
    const button_next = document.getElementById("nextButton");
    button_next.disabled = true;
    button_next.style.backgroundColor = "gray";
    button_next.style.cursor = "default";

    const img_player1 = document.getElementById("img_player1");
    img_player1.src = "./images/wait.png";
    img_player1.style.width = '80%';

    const img_player2 = document.getElementById("img_player2");
    img_player2.src = "./images/wait.png";
    img_player2.style.width = '80%';

    for(var i=1; i<10 ; i++){
        let string = "button_active"+i;
        document.getElementById(string).innerText = null;
        document.getElementById(string).disabled = true;
        document.getElementById(string).style.cursor = "default";
    }

}
//Evento del Botón de Reinicio Total
botonReinicio.onclick = () => {
    // CAMBIO: Texto actualizado
    let option = confirm("¿Reiniciar puntuaciones y tablero?")
    if(option){
        ganador = 0;
        contador_selecciones = 0;
        nuevoJuego = true;
        score1 = 0;
        score2 = 0;
        matrix = [[0,0,0],[0,0,0],[0,0,0]];

        document.getElementById("score_1").innerText = "0";
        document.getElementById("score_2").innerText = "0";
        document.getElementById("score_1m").innerText = "0";
        document.getElementById("score_2m").innerText = "0";

        document.getElementById("img_player1").src = "./images/init.png";
        document.getElementById("img_player2").src = "./images/init.png";
        document.getElementById("img_player1").style.width = '80%';
        document.getElementById("img_player2").style.width = '80%';

        const button_ranGame = document.getElementById("ranGame");
        button_ranGame.disabled = false;
        button_ranGame.style.backgroundColor = "#f5ce22";
        button_ranGame.style.cursor = "pointer";
        
        const button_next = document.getElementById("nextButton");
        button_next.disabled = true;
        button_next.style.backgroundColor = "gray";
        button_next.style.cursor = "default";

        for(var i=1; i<10 ; i++){
            let string = "button_active"+i;
            let btn = document.getElementById(string);
            btn.innerText = null;
            btn.disabled = true;
            btn.style.cursor = "default";
            btn.style.backgroundColor = "transparent";
        }
    }
}