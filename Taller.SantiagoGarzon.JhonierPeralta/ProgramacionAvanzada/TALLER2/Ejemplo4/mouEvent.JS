function mouseDownEvent() {
    document.getElementById("eventBox").style.backgroundColor = "#ffaaaa";
    document.getElementById("eventBox").innerText = "¡Botón del ratón presionado!";
}

function mouseUpEvent() {
    document.getElementById("eventBox").style.backgroundColor = "#aaffaa";
    document.getElementById("eventBox").innerText = "Has soltado el botón del ratón";
}