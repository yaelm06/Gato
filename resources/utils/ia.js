/*
@name Juego Gato
@file ia.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene el algoritmo Minimax para la IA.
*/

const HUMANO = 'x'; 
const IA = 'o';

export function mejorMovimiento(tablero) {
    // --- CORRECCIÓN: Prioridad absoluta al centro ---
    // Si el centro está vacío, lo tomamos. Es la mejor estrategia inicial.
    if (tablero[1][1] === 0) {
        return { i: 1, j: 1 };
    }

    let mejorPuntaje = -Infinity;
    let movimiento = null;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === 0) {
                tablero[i][j] = IA;
                let puntaje = minimax(tablero, 0, false);
                tablero[i][j] = 0;

                if (puntaje > mejorPuntaje) {
                    mejorPuntaje = puntaje;
                    movimiento = { i, j };
                }
            }
        }
    }
    return movimiento;
}

function minimax(tablero, profundidad, esMaximizando) {
    let resultado = verificarGanador(tablero);
    
    // Heurística: Ganar rápido vale más (10 - profundidad)
    // Perder lento vale "más" (-10 + profundidad)
    if (resultado === 10) return 10 - profundidad;
    if (resultado === -10) return -10 + profundidad;
    if (resultado === 0) return 0;

    if (esMaximizando) {
        let mejorPuntaje = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tablero[i][j] === 0) {
                    tablero[i][j] = IA;
                    let puntaje = minimax(tablero, profundidad + 1, false);
                    tablero[i][j] = 0;
                    mejorPuntaje = Math.max(puntaje, mejorPuntaje);
                }
            }
        }
        return mejorPuntaje;
    } else {
        let mejorPuntaje = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tablero[i][j] === 0) {
                    tablero[i][j] = HUMANO;
                    let puntaje = minimax(tablero, profundidad + 1, true);
                    tablero[i][j] = 0;
                    mejorPuntaje = Math.min(puntaje, mejorPuntaje);
                }
            }
        }
        return mejorPuntaje;
    }
}

function verificarGanador(t) {
    // Filas
    for(let i=0; i<3; i++) {
        if(t[i][0] === t[i][1] && t[i][1] === t[i][2]) {
            if(t[i][0] === IA) return 10;
            if(t[i][0] === HUMANO) return -10;
        }
    }
    // Columnas
    for(let i=0; i<3; i++) {
        if(t[0][i] === t[1][i] && t[1][i] === t[2][i]) {
            if(t[0][i] === IA) return 10;
            if(t[0][i] === HUMANO) return -10;
        }
    }
    // Diagonales
    if(t[0][0] === t[1][1] && t[1][1] === t[2][2]) {
        if(t[0][0] === IA) return 10;
        if(t[0][0] === HUMANO) return -10;
    }
    if(t[0][2] === t[1][1] && t[1][1] === t[2][0]) {
        if(t[0][2] === IA) return 10;
        if(t[0][2] === HUMANO) return -10;
    }

    // Empate
    let espacios = 0;
    for(let i=0; i<3; i++) 
        for(let j=0; j<3; j++) 
            if(t[i][j] === 0) espacios++;
            
    if(espacios === 0) return 0;
    
    return null;
}