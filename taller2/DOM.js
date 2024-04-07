window.onload = function(){
    let $h1 = document.querySelector("h1");
    let $myP = document.querySelector(".myP");
    let $Title = document.querySelector("#Title");
    let $myp = document.querySelector("#myp");

    console.log($h1.textContent, $myP.textContentxtContent);
    console.log($myP.textContent);
    console.log($Title.textContent);
    console.log($myp.textContent);
}

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click",function(){alert("respuesta click DONE")});

let boton1 = document.getElementById("btnPrincipal2")
boton.onclick = function(){
    URL("https://www.google.com;")
}