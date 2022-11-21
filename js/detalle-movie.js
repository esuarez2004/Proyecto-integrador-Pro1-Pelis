let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let fav = document.querySelector(".clicFav")
let imagen = document.querySelector(".img")
let titulo_peli = document.querySelector(".titulo")
let rating = document.querySelector("#rating")
let estreno = document.querySelector("#año-estreno")
let sinopsis = document.querySelector("#sinopsis")
let genero = document.querySelector("#genero")
let duracion = document.querySelector("#duracion")
let plataforma = document.querySelector("#plataforma")


let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`

fetch(url)

.then(function(response) {
    return response.json();
}).then(function (data) {
    console.log(data);
    titulo_peli.innerText = data.title;
    imagen.src= `https://image.tmdb.org/t/p/w500${data.poster_path}`
    rating.innerHTML += date.release_date
    sinopsis.innerHTML += data.overview
    for(let i of data.genres){
        genero.innerHTML += `<a href= "detail-genres.html?id0${i.id}">${i.name}</a>`
    }
    duracion.innerHTML += data.runtime + "minutos"


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