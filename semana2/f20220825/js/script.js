// alert("Hola Mundo!!");

/* 
este es un comentario
multilínea
*/

window.addEventListener('DOMContentLoaded', (e) => {
    // con el evento DOMContentLoaded me aseguró que todas las etiquetas HTML 
    // fueron cargadas y procesadas por el browser 
    // más info en: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    console.log("evento DOMContentLoaded");

    // Sintaxis de variables:
    // let nombreVariable = valor;
    // más ejemplos
    //let nombre = "Santiago";
    //let edad   = 34; 

    let boton = document.getElementById("btn-suscribir");
    boton.addEventListener("click", (ev) => {
        try {
            // recuperar los valores del formulario 
            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("correo").value;
            if( nombre.length < 5 ) {
                throw new Error("El nombre es demasiado corto!!!");
            }
            let genero = getGenero();
            let intereses = getIntereses();
            let suscriptor = { // JSON =  JavaScript object notation 
                // clave: valor
                nombre_completo: nombre,  //nombre,
                email, // email: email,
                genero,
                intereses,
                fecha_registro: (new Date()).toISOString()
            };
            console.dir(suscriptor);
            guardarSuscriptor(suscriptor);
            mostrarExito("Se guardó correctamente su suscripción!!!");
        } catch (e) {
            mostrarError(e.message)
        }
    });
}
);

function mostrarExito(mensaje) {
    // aqui aparecera el cuadro verde para desplegar mensaje
    alert(mensaje);
    // TODO
}

async function guardarSuscriptor(suscriptor) {
    const url = "https://curso-frontend-67796-default-rtdb.firebaseio.com/suscriptores.json";
    // alternativas:
    //1) Callback
    /*fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor)
        
    })
        .then( respuesta => respuesta.json() )// esto es(devuelve/retorna/entrega/etc) una promesa
        .then( data => mostrarExito("Se guardó correctamente su suscripción") )
    ;*/

    //2) Async Await
    const respuesta = await fetch(url, {
        method: "POST",
        body:   JSON.stringify(suscriptor) 
    });
    const data = await respuesta.json();
    mostrarExito("Se guardó correctamente su suscripción"); 
}
function getIntereses() {
    let inputIntereses = document.querySelectorAll("input[name='intereses']:checked");
    let arrIntereses = [];
    inputIntereses.forEach(nodoInteres => arrIntereses.push(nodoInteres.value));
    if (inputIntereses.length < 1) {
        throw new Error("Debe seleccionar al menos un tema de interés!!")

    }
    return arrIntereses
}

function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked")
    if (inputSeleccionado == null) {

        throw new Error("Debe seleccionar un género!!!");
    }
    const genero = inputSeleccionado.value;
    return genero;
}

function mostrarError(mensajeDeError) {
    //document.getElementById("form-mensaje-error").style.display = ("block");
    document.getElementById("form-mensaje-error").className = ("d-block alert-danger alert");
    const ul = document.querySelector("#form-mensaje-error ul");
    const li = document.createElement("li");
    const liText = document.createTextNode(mensajeDeError);
    li.appendChild(liText);
    ul.appendChild(li);
}

console.log("Hola Mundo!!");
