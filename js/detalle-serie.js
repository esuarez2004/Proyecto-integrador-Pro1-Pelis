let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let fav = document.querySelector(".clicFav")
let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"

const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es`


fetch(url)
.then(function(response) {
    return response.json();

})
.then(function(datos){

        console.log(datos);

        document.querySelector('.Contenedorpadre').innerHTML = `
            <article class=d-pelicula>
                <div class="foto-pelicula-popular">
                <img src="https://image.tmdb.org/t/p/w342${datos.poster_path}" alt="pelicula">
                </div>
                <h5 class="titulo"> Titulo: ${datos.name}</h5>
                <p>Rating: ${datos.vote_average}</P>
                <p>Fecha de lanzamiento: ${datos.first_air_date}</p>
                <p> Duracion:${datos.number_of_seasons} temporadas</p>
                <p>Sinopsis:${datos.overview}</p>
                <p>Genero:${datos.genres[0].name}</p>
                
            `

}).catch(function (error) {
    return error;
})
let url_plataformas = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${apiKey}`

fetch(url_plataformas)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        let plataformas = document.querySelector(".plataforma");
        
        if (data.results.AR == null){
            plataformas.innerHTML += "No se encontraron plataformas en Argentina"
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

const recomen_url = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
let ver_recom = document.querySelector(".peli-recom")
let btn_recom = document.querySelector(".btn_recomendaciones")
btn_recom.addEventListener("click", function(){
    if (ver_recom.style.display == "flex"){
        ver_recom.sytle.display == "none"
        btn_recom.innerText = "Ver las recomendaciones"
    } else{
        ver_recom.style.display = "flex"
        btn_recom.style.display = "Esconder las recomendaciones"    
    }
})
fetch(recomen_url)
.then(function(response){
    return response.json();
})
.then(function(data){
        console.log(data);
        let conteinerRecomendaciones = document.querySelector('.btn_recomendaciones')
        info = data.results
        console.log(info.name)

        recomendaciones = '';
        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[0].id}'>
                                <h3 class='titulo_recomendados'>${info[0].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[0].poster_path}' alt=''>
                                </a>
                            </article>`
        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[1].id}'>
                                <h3 class='titulo_recomendados'>${info[1].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[1].poster_path}' alt=''>
                                </a>
                            </article>`

        recomendaciones += `<article class='pelis_recomendadas'>
                                <a class ='conteinerrecomendados' href='detalle_series.html?id=${info[2].id}'>
                                <h3 class='titulo_recomendados'>${info[2].name}</h3>
                                <img class = 'foto_recomendaciones' src='https://image.tmdb.org/t/p/w500/${info[2].poster_path}' alt=''>
                                </a>
                            </article>`

    conteinerRecomendaciones.innerHTML = recomendaciones
})
.catch(function(error){
        console.log('El error es: ' + error);
})