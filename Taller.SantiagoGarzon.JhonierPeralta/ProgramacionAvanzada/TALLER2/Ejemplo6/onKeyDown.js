function showKeyPressed(event) {
    // Para compatibilidad y simplicidad se usa keyCode, pero lo recomendable sería event.code para nuevos proyectos
    var keyPressed = event.keyCode;
    alert("Tecla presionada. Código de tecla: " + keyPressed);
}