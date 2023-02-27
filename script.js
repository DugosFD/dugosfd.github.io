// Declarando variables referidas a elementos del html mediante su ID 

let iconoSobreMi = document.getElementById("sobreMi");
let sobreMiContainer = document.getElementById("sobreMi-container");

let iconoFormacion = document.getElementById("formacion");
let formacionContainer = document.getElementById("formacion-container");

let iconoExperiencias = document.getElementById("experiencias");
let experienciasContainer = document.getElementById("experiencias-container");

let iconoContacto = document.getElementById("contacto");
let contactoContainer = document.getElementById("contacto-container");

//Agregando un objeto de Audio para ser utilizado con el evento click en los íconos del menú 

let sonido = new Audio();
sonido.src = "/Proyecto Final Front End - CV Web/Sonidos/sound-7.mp3";

// Añadiendo los eventos mencionados

iconoSobreMi.addEventListener("click", mostrarSobreMi)
iconoFormacion.addEventListener("click", mostrarFormacion)
iconoExperiencias.addEventListener("click", mostrarExperiencias)
iconoContacto.addEventListener("click", mostrarContacto)

// Creación de funciones para efectuar la transición de los distintos apartados del CV y la aplicación del sonido.

function mostrarSobreMi(){
    sonido.play();
    formacionContainer.style.visibility="hidden";
    experienciasContainer.style.visibility="hidden"
    contactoContainer.style.visibility="hidden";
    sobreMiContainer.style.visibility="visible";
}

function mostrarFormacion(){
    sonido.play();
    experienciasContainer.style.visibility="hidden";
    contactoContainer.style.visibility="hidden";
    sobreMiContainer.style.visibility="hidden";
    formacionContainer.style.visibility="visible";
}

function mostrarExperiencias(){
    sonido.play();
    formacionContainer.style.visibility="hidden";
    contactoContainer.style.visibility="hidden";
    sobreMiContainer.style.visibility="hidden";
    experienciasContainer.style.visibility="visible";
}

function mostrarContacto(){
    sonido.play();
    formacionContainer.style.visibility="hidden";
    experienciasContainer.style.visibility="hidden";
    sobreMiContainer.style.visibility="hidden";
    contactoContainer.style.visibility="visible";
}

// Creación de funciones utilizadas en el Media Query mediante el uso del matchMedia. Además se agregaron eventos con funciones para
// evitar bugs en las transiciones de los apartados al cambiar el tamaño de la pantalla.

const verSobreMi = matchMedia("(max-width: 1069px)");
const mmSobremi = verSobreMi => {
    verSobreMi.matches
    ? sobreMiContainer.style.visibility="visible"
    : sobreMiContainer.style.visibility="visible"
}
addEventListener("DOMContentLoaded", () => mmSobremi(verSobreMi));
addEventListener("resize", () => mmSobremi(verSobreMi));

const verFormacion = matchMedia("(max-width: 1069px)");
const mmFormacion = verFormacion => {
    verFormacion.matches
    ? formacionContainer.style.visibility="visible"
    : formacionContainer.style.visibility="hidden"
}
addEventListener("DOMContentLoaded", () => mmFormacion(verFormacion));
addEventListener("resize", () => mmFormacion(verFormacion));

const verExperiencias = matchMedia("(max-width: 1069px)");
const mmExperiencias = verExperiencias => {
    verExperiencias.matches
    ? experienciasContainer.style.visibility="visible"
    : experienciasContainer.style.visibility="hidden"
}
addEventListener("DOMContentLoaded", () => mmExperiencias(verExperiencias));
addEventListener("resize", () => mmExperiencias(verExperiencias));

const verContacto = matchMedia("(max-width: 1069px)");
const mmContacto = verContacto => {
    verContacto.matches
    ? contactoContainer.style.visibility="visible"
    : contactoContainer.style.visibility="hidden"
}
addEventListener("DOMContentLoaded", () => mmContacto(verContacto));
addEventListener("resize", () => mmContacto(verContacto));

// Fin del script JS