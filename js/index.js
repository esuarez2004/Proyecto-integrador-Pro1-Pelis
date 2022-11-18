// peliculas populares
let Contenedor = document.querySelector(".PeliculasPopulares")
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US`) // Api donde se intercambia info. entre aplicacions, mediante archivos de texto
       .then(function(response){
           return response.json(); // Transforma en una cadena de texto para que intercambie los datos 
})  // Se utiliza los dos parentes, luego del JSON porque es un metodo
        .then(function(datos){
             console.log(datos.results);
            })
        .catch(function (error) {
            return error
        })

// Series mas vistas

// Peliculas mas vistas


