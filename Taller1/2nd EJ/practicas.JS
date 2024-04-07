// 5. Usando el método querySelector muestra tu h1 y tu ID o CLASS en consola.
const encabezadoH1 = document.querySelector('h1');
const parrafo = document.querySelector('#parrafoClase');

console.log(encabezadoH1); // Muestra el elemento <h1>
console.log(parrafo); // Muestra el elemento <p> con el id "parrafoClase"

// 6. Muestra en consola el texto dentro de la etiqueta h1.
console.log(encabezadoH1.textContent); // Muestra el texto dentro del elemento <h1>
