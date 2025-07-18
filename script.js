const contadorElemento = document.getElementById("contador");
const botonIncrementar = document.getElementById("incrementar");
const botonDecrementar = document.getElementById("decrementar");

let contador = 0;

function actualizarContador() {
    contadorElemento.textContent = contador;
    contadorElemento.classList.remove('maximo');
    if (contador >= 10) {
        contadorElemento.classList.add('maximo'); // Cambia el color a verde si el contador es mayor o igual a 10
    } else if (contador <= -10) {
        contadorElemento.classList.remove('maximo'); // Cambia el color a rojo si el contador es menor o igual a -10
    }
}

botonIncrementar.addEventListener("click", () => { // add event listener es una función que se usa para escuchar eventos en un elemento en este caso dar click al botón
    contador++;
    actualizarContador();
});

botonDecrementar.addEventListener("click", () => {
    contador--;
    actualizarContador();
});

actualizarContador(); // Llamada inicial para mostrar el contador al cargar la página