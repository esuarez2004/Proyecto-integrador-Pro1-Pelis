  // Array para almacenar ids de favoritos
    let favoritoss = [];
    
    // Acceder a la Query String
    let queryString = location.search;
    let objetoQueryString = new URLSearchParams(queryString);
    let x = objetoQueryString.get('id');
    console.log(x);

fetch(`https://api.themoviedb.org/3/tv/${x}?api_key=f2acabc2f1f7dfa29f6493c2fcca003f&language=es`)
.then(function(response){
    return response.json();
})
.then(function(datos){

    console.log(datos);

    document.querySelector('main').innerHTML = `
        <article class=d-series>
            <div>
            <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
            </div>
            <h5>${datos.original_name}</h5>
            <p>${datos.vote_average}</p>
            <p>${datos.first_air_date}</p>
            <p>${datos.overview}</p>
            <p>${datos.genres[0].name}</p>
            <button class="fav">Agregar a favoritos</button>
        </article>
            
            `

}).catch(function (error) {
    return error;
})
let url_plataformas = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`

fetch(url_plataformas)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        let plataformas = document.querySelector(".plataforma");
        
        if (data.results.AR == null){
            plataformas.innerHTML += "No se encontraron plataformas"
        }else{
            for(let i = 0; i<data.results.AR.flatrate.length; i ++){
                plataformas.innerHTML += data.results.AR.flatrate[i].provider_name + ", "
            }
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })

let favoritos = []

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de Favoritos";
}
fav.addEventListener("click",function(e) {
    e.preventDefault();

    if (favoritos.includes(id)){
        let indice = favoritos.indexOf(id)
        favoritos.splice(indice, 1);
        fav.innerText = "Agregar a Favoritos"
    }else{
        favoritos.push(id)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})