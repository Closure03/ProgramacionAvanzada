window.onload = function() {
    var tecla = document.getElementById("Texto");
    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 13) {
        alert("Gracias por clicar")
        }
})

}