/*
@name Juego Gato
@file botonesTablero.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que gestiona la interacción del usuario con cada botón del tablero de Tic-Tac-Toe.
// Importa las funciones para cambiar el turno visualmente y para validar si hay un ganador.
import turno from "./turno.js";
import validar from "./validar.js";
import { mejorMovimiento } from "./ia.js";
import { vsIA } from "./index.js";

var ganador = 0;

export function jugarIA(matrix, contador_selecciones) {
    setTimeout(() => {
        let movimiento = mejorMovimiento(matrix);
        if (movimiento) {
            let idBoton = "";
            let i = movimiento.i; 
            let j = movimiento.j;
            
            if(i===0 && j===0) idBoton = "button_active1";
            if(i===0 && j===1) idBoton = "button_active2";
            if(i===0 && j===2) idBoton = "button_active3";
            if(i===1 && j===0) idBoton = "button_active4";
            if(i===1 && j===1) idBoton = "button_active5";
            if(i===1 && j===2) idBoton = "button_active6";
            if(i===2 && j===0) idBoton = "button_active7";
            if(i===2 && j===1) idBoton = "button_active8";
            if(i===2 && j===2) idBoton = "button_active9";

            const btn = document.getElementById(idBoton);
            if(btn && !btn.disabled) {
                btn.click();
            }
        }
    }, 600);
}

//Maneja el clic en la casilla (0, 0) del tablero.
function boton00 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active1");
    //Actualiza visualmente el botón con 'X' (Jugador 1) o 'O' (Jugador 2) y su color.
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    //Actualiza la matriz lógica del juego en la posición [0][0].
    matrix[0][0] = player1?"x":"o";
    //Verifica si hay un ganador o un empate después de este movimiento.
    ganador = validar(player1, matrix, contador_selecciones);
    //Si el juego continúa (ganador es 0), cambia el turno al otro jugador y actualiza la interfaz de turno.
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}
//Las  funciones (boton01 a boton22) repiten exactamente la misma lógica,solo cambian el ID del botón HTML y la posición de la matriz que actualizan.
function boton01 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active2");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][1] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton02 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active3");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[0][2] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton10 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active4");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][0] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton11 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active5");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][1] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton12 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active6");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[1][2] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton20 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active7");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][0] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton21 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active8");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][1] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}

function boton22 (player1, matrix, contador_selecciones) {
    const button_selection = document.getElementById("button_active9");
    if(player1){
        button_selection.innerText = "X";
        button_selection.style.color = "tomato";
    }
    else{
        button_selection.innerText = "O";
        button_selection.style.color = "#1E90FF";        
    }
    button_selection.disabled = true;
    button_selection.style.cursor = "default";
    matrix[2][2] = player1?"x":"o";
    ganador = validar(player1, matrix, contador_selecciones);
    if(ganador===0){
        player1 = !player1;
        turno(player1);
        if(vsIA && !player1){
            jugarIA(matrix, contador_selecciones + 1);
        }
    }

    return [player1, matrix, ganador];
}
//Exporta las 9 funciones para que el archivo principal pueda asignarlas a los eventos de clic de los botones.
export {boton00 , boton01 , boton02 , 
        boton10 , boton11 , boton12,
        boton20 , boton21 , boton22
    }