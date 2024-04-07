function submitForm() {
    var name = document.getElementById("inputName").value.trim();
    var email = document.getElementById("inputEmail").value.trim();

    if (name === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    alert('¡Formulario enviado con éxito!\nNombre: ' + name + '\nEmail: ' + email);
    return true;
}