//variables declaradas
let dado1 = 0;
let dado2 = 0;

let tiradas = [0,0,0,0,0,0,0,0,0,0,0]

//se declara funcion para tirar dado individual
var tirarDado = () => {return parseInt((Math.random()*6)+1);}

//se tiran los dados 36000 veces y se anotan sus resultados en tiradas segun su valor
for(let i=0; i<36000; i++){
    dado1 = tirarDado();
    dado2 = tirarDado();
    tiradas[(dado1+dado2)-2]++;
}

//se muestran por pantalla los valores del vector tiradas
for(let j=0; j<tiradas.length; j++){
    console.log("Las veces en que la suma de ambos dados ha sido "+(j+2)+" han sido: "+tiradas[j]+" veces.");
}