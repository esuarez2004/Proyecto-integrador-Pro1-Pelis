let forms = document.querySelector("form");
let buscar = document.querySelector("[name=Buscador]");
// Agregamos evento
// Tipo de evento = submit
forms.addEventListener("submit",function (event) { // function= callback, event= parametro
    event.preventDefault(); // Detiene la informacion para poder evaluarla
    
    if (buscar.value == "") {
        alert("No escribio nada en el formulario, porfavor ingrese un texto");
    } else if (buscar.value.length <3){ 
        alert("Porfavor, ingrese mas de dos letras en el formulario")
    }
    else {
        this.submit() // "Submit" para que busque la informacion
    }


})