window.onload = function(){//capa adicional para asegurar que esta cargado en el Dom 
    
    let $h1 = document.querySelector(".titulo");//El Signo pesos indica que esto viene cargado del DOM
    let $p = document.querySelector('#Parrafo');//
   
    console.log($h1)
    console.log($p)
    console.log($h1.textContent)
}
