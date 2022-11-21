let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let fav = document.querySelector(".clicFav")
let imagen = document.querySelector(".img")
let titulo_peli = document.querySelector(".titulo")
let rating_peli  = document.querySelector("#rating")
let estreno_peli  = document.querySelector("#estreno")
let sinopsis_peli = document.querySelector("#sinopsis")
let genero_peli = document.querySelector("#genero")
let duracion_peli = document.querySelector("#duracion")
let plataforma_peli = document.querySelector(".plataforma")


let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`

fetch(url)


.then(function(response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    titulo_peli.innerText = data.title
    imagen.src= `https://image.tmdb.org/t/p/w500${data.poster_path}`
    rating_peli.innerHTML += data.vote_average
    estreno_peli.innerHTML += date.title
    sinopsis_peli.innerHTML += data.overview
    for(let i of data.genres){
        genero_peli.innerHTML += `<a href= "detail-genres.html?id0${i.id}">${i.name}</a>`
    }
    duracion_peli.innerHTML += data.runtime + "Minutos"
    plataforma_peli.innerHTML += data.imdb_id
}).catch(function (error) {
    return error;
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