// globals.js

// Inicializamos con el valor de localStorage si existe
let KnowCoins = obtenerKnowCoins();  

// Función para obtener los KnowCoins desde localStorage
function obtenerKnowCoins() {
    const KnowCoinsGuardados = localStorage.getItem('KnowCoins');
    return KnowCoinsGuardados ? parseInt(KnowCoinsGuardados) : 0;  // Si no existe, devolvemos 0
}

// Función para actualizar los KnowCoins en localStorage
function actualizarKnowCoins(nuevaCantidad) {
    KnowCoins = nuevaCantidad;
    localStorage.setItem('KnowCoins', nuevaCantidad);  // Guardamos en localStorage
}

// Esta función actualizará el valor en la página (si es necesario)
function actualizarKnowCoinsEnPagina() {
    // Seleccionamos el elemento de la página donde se mostrarán los KnowCoins
    const KnowCoinsDisplay = document.getElementById("KnowCoins-display");
    if (KnowCoinsDisplay) {
        KnowCoinsDisplay.textContent = `${KnowCoins} `;
    }
}
