 // Función para actualizar el texto cuando se pierde el foco del campo de entrada
 function updateText() {
    var inputVal = document.getElementById("inputText").value;
    // Actualiza el contenido del párrafo con el valor ingresado
    document.getElementById("displayText").innerHTML = "Valor ingresado: " + inputVal;
}