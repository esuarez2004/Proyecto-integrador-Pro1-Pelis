let RecuperoStorage = localStorage.getItem("favoritos");    
// llega en un json/ 

let favoritos = JSON.parse(RecuperoStorage)
// lo convierto en un dato manipulable para jv (array) //

let section = document.querySelector(".sectoin")

let PersonajeFavoritos = ""
for (let i = 0; i < favoritos.length; i++) {
    let url = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US"
    fetch(Url)

    .then(function (response) {
    return response.json()
    })

    .then(function (data) {
   
    return data   
    }   
    )

    .catch(function (error) {
    return error
    })
    }