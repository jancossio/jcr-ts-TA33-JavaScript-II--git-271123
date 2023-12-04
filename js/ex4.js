var pantalla = document.getElementById("pantalla");
var operador1 = "";
var signoOperante = "";
let escribir = false;

function agregarValor(valor){
    if(signoOperante === ''){
        pantalla.innerHTML += valor;
    }else if(!escribir){
        pantalla.innerHTML = "";
        pantalla.innerHTML += valor;
        escribir=true;
    }else{
        pantalla.innerHTML += valor;
    }
}

function borrar(valor){

    switch (valor) {
        case "DEL":
            signoOperante = "";
            pantalla.innerHTML = "";
            operador1 = "";
            operador2 = "";
            escribir = false;
            break;      
        case "CE":
            let tmp = pantalla.innerHTML;
            tmp = tmp.slice(0, -1);
            pantalla.innerHTML = tmp;
            break;    
        case "C":
            signoOperante = "";
            pantalla.innerHTML = "";
            break;    
        default:
            pantalla.innerHTML="Error";
    }
}

function operacion(operacion){ 
    operador1 = parseFloat(pantalla.innerHTML);
    signoOperante = operacion;
}

function resultado(){

    let operador2 = parseFloat(pantalla.innerHTML);

    switch (signoOperante) {
        case "+":
            pantalla.innerHTML = operador1+operador2;
            break;      
        case "-":
            pantalla.innerHTML =  operador1-operador2;
            break;    
        case "x":
            pantalla.innerHTML =  operador1*operador2;
            break;    
        case "/":     
            if (operador2 == 0.0) {
                pantalla.innerHTML="INFINITY";
            }else{
                pantalla.innerHTML = operador1/operador2;
            }
            break;
        case "Raiz":  
            if (operador2 < 0.0) {
                pantalla.innerHTML="Error";
            }
            pantalla.innerHTML = Math.sqrt(operador2);
            break;
        case "1/x":  
            if (operador2 == 0.0) {
                pantalla.innerHTML="INFINITY";
            }
            pantalla.innerHTML = (1/operador2);
            break;
            case "%":  
            if (operador2 == 0.0) {
                pantalla.innerHTML="INFINITY";
            }
            pantalla.innerHTML = (operador1/100)*operador2;
            break;
        default:
            pantalla.innerHTML="Error";
        }
        escribir = false;
}

function negar(){
    let op =  parseFloat(pantalla.innerHTML);
    pantalla.innerHTML = -op;
}