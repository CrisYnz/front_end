//alert("Hola mundo!");

/**
 * Este es un comentario mult-linea
 */

window.addEventListener('DOMContentLoaded', (e) => {
    // con el evento DOMContentLoaded me aseguro que todas las etiquetas HTML fueron cargadas y procesadas

    console.log("evento DOMContentLoaded");

    let boton = document.getElementById("btn-suscribir");
    boton.addEventListener("click", (ev) => {
        let nombre = document.getElementById("nombre").value;
        console.log(`El nombre del suscriptor es ${nombre}`)
    })


})

console.log("Hola mundo!");