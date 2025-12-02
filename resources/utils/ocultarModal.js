/*
@name Juego Gato
@file ocultarModal.js
@copyright © 2025 Equipo 6, Matemáticas Discretas.
@authors Frida Alejandra Mendoza Martínez, Marvin Martínez Ramón, Yael Morales Medina
@date 02/12/2025
@description Archivo que contiene las funcionalidades.
@credits "COMO HACER UN TRIQUI [TIC TAC TOE] CON HTML5, CSS3 Y JAVASCRIPT SIN FRAMEWORKS [VANILLA]", 
Porto Armenia, YouTube, https://www.youtube.com/watch?v=gMrWT7zW6Wo, publicado el 2 de Octubre del 2021
*/
//Módulo que contiene la función responsable de ocultar la ventana modal (emergente) inicial.
//Función que oculta la ventana modal del juego utilizando transiciones CSS.
function ocultarModal(){
    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal.classList.toggle("modal-close");

    setTimeout(
        function () {
            modal_container.style.opacity = "0";
            modal_container.style.visibility = "hidden";
        },
    1000)
}

export default ocultarModal;