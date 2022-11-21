let RecuperoStorage = localStorage.getItem("favoritos");    
/* llega en un json */ 

let favoritos = JSON.parse(RecuperoStorage)
/* lo convierto en un dato manipulable para jv (array) */

let section = document.querySelector(".section")

let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"

let PersonajeFavoritos = '';

if (favoritos == null || favoritos.length == 0) {
/*si no hay favoritos*/
section.innerHTML = '<p> NO hay series ni peliculas en favoritos<p/>'
} 

else {
    for (let i = 0; i < favoritos.length; i++) {
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${apiKey}&language=es`
    
    fetch(url)

    .then(function (response) {
    return response.json()
    })

    .then(function (data) {
    console.log(data);
        PersonajeFavoritos += `<article>
                                <div>
                                <img src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="${data.original_title}">
                                </div>
                                <h5 class="Titulo-search">Titulo: ${data.original_title}</h5>
                                <a href="./detail_movie.html?id=${data.id}">Ver mas informacion</a>
                              </article>`
        
    section.innerHTML = PersonajeFavoritos
    /* para cuando termine el for se presentren en el DOM*/
    return data   
    }   
    )

    .catch(function (error) {
    console.log(error);
    return error
    })
    }
    
}