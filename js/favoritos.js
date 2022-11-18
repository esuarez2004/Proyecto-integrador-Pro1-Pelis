let RecuperoStorage = localStorage.getItem("favoritos");    
// llega en un json/ 

let favoritos = JSON.parse(RecuperoStorage)
// lo convierto en un dato manipulable para jv (array) //

let section = document.querySelector(".section")

let PersonajeFavoritos = '';

if (favoritos == null || favoritos.length == 0) {
/*si no hay favoritos*/
section.innerHTML = '<p> NO hay series ni peliculas en favoritos<p/>'
} 

else {
    for (let i = 0; i < favoritos.length; i++) {
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=<<api_key>>&language=en-US`
    
    fetch(url)

    .then(function (response) {
    return response.json()
    })

    .then(function (data) {
    console.log(data);
        PersonajeFavoritos +=   /*codigo de detalle aca*/


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