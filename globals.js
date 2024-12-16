// globals.js

// Inicializamos con el valor de localStorage si existe
let creditos = obtenerCreditos();  

// Función para obtener los créditos desde localStorage
function obtenerCreditos() {
    const creditosGuardados = localStorage.getItem('creditos');
    return creditosGuardados ? parseInt(creditosGuardados) : 0;  // Si no existe, devolvemos 0
}

// Función para actualizar los créditos en localStorage
function actualizarCreditos(nuevaCantidad) {
    creditos = nuevaCantidad;
    localStorage.setItem('creditos', nuevaCantidad);  // Guardamos en localStorage
}

// Esta función actualizará el valor en la página (si es necesario)
function actualizarCreditosEnPagina() {
    // Seleccionamos el elemento de la página donde se mostrarán los créditos
    const creditosDisplay = document.getElementById("creditos-display");
    if (creditosDisplay) {
        creditosDisplay.textContent = `${creditos} `;
    }
}
