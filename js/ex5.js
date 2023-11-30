function establecerImagen(imagen){
    document.getElementById("imgPrincipal").src = imagen.src;
    document.getElementById("pieFoto").innerText = imagen.alt;
}