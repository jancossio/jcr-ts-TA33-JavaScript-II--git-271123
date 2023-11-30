var parrafosPagina = document.querySelectorAll('p');
parrafosPagina.forEach(function(parrafo) {
    parrafo.addEventListener("click", function(){
        alert("Se presiono un parrafo del documento.");
    });
});

var parrafosSegundaTabla = document.querySelectorAll('#parf4, #parf5');
parrafosSegundaTabla.forEach(function(parrafo) {
    parrafo.addEventListener("click", function(){
        alert("Se presiono un parrafo contenido en la segunda tabla.");
    });
});