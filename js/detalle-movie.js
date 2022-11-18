let favorito = document.querySelector(".clicFav")
let qs = location.search
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("buscador");

const url = `https://api.themoviedb.org/3/movie/${id}?api_key=%3C%3Capi_key%3E%3E&language=en-US`

fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data.response);
}).catch(function (error) {
    return error;
})
