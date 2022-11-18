// peliculas populares
let Contenedor = document.querySelector(".PeliculasPopulares")
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f2acabc2f1f7dfa29f6493c2fcca003f`) // Api donde se intercambia info. entre aplicacions, mediante archivos de texto
       .then(function(response){
           return response.json(); // Transforma en una cadena de texto para que intercambie los datos 
})  // Se utiliza los dos parentes, luego del JSON porque es un metodo
        .then(function(datos){
             console.log(datos.results);

            for (let i = 0; i < datos.results.length; i++) {
                Contenedor.innerHTML += 
                `<article>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="pelicula">
                    </div>
                    <h5>${datos.results[i].title}</h5>
                    <p>${datos.results[i].release_date}</p>
                    <a href="./detail_movie.html"?id=${datos.results[i].id}">Ver mas informacion</a>
                </article>`
                
            }
            })
        .catch(function (error) {
            return error
        })

// Series mas vistas

// Peliculas mas vistas


