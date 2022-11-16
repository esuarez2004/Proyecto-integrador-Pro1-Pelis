let RecuperoStorage = localStorage.getItem("favoritos");    
// llega en un json/ 

let favoritos = JSON.parse(RecuperoStorage)
// lo convierto en un dato manipulable para jv (array) //

let section = document.querySelector(".sectoin")