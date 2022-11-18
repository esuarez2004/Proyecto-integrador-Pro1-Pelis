let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");


let apiKey = "f2acabc2f1f7dfa29f6493c2fcca003f"
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es`

fetch(url)

.then(function(response) {
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    return error;
})

let favoritos = []

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage)
}
if (favoritos.includes(id)) {
    clicFav.innerText = "Quitar de Favoritos";
}
clicFav.addEventListener("click",function(e) {
    e.preventDefault();

    if (favoritos.includes(id)){
        let indice = favoritos.indexOf(id)
        favoritos.splice(indice, 1);
        clicFav.innerText = "Agregar a Favoritos"
    }else{
        favoritos.push(id)
        clicFav.innerText = "Quitar de favoritos"
    }
})