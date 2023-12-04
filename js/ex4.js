var pantalla = document.getElementById("pantalla");
var tmp_valor = "";
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

function borrarTodo(){
    tmp_valor = "";
    pantalla.innerHTML = "";
    operador1 = "";
}


function operacion(operacion){ 
    operador1 = pantalla.innerHTML;
    signoOperante = operacion;
}

function resultado(){

    let operador2 = parseFloat(pantalla.innerHTML);

    switch (signoOperante) {
        case "+":
            pantalla.innerHTML = operador1 + operador2;
            break;
            
        case "-":
            pantalla.innerHTML =  operador1 - operador2;
            break;
            
        case "x":
            pantalla.innerHTML =  operador1 * operador2;
            break;
            
        case "/":     
            if (operador2 == 0.0) {
                pantalla.innerHTML="INFINITY";
            }else{
                pantalla.innerHTML =  operador1 / operador2;
            }
            break;
        case "Raiz":  
            if (operador2 > 0.0) {
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

            case "+/-":  
            pantalla.innerHTML = -operador2;
            break;
            
        default:
            System.out.println("Error");
        }
}

function suma(op1, op2) {
    pantalla.innerHTML = op1 + op2;
}
	
function resta(op1, op2) {
	pantalla.innerHTML =  op1 - op2;
}
	
function multiplicacion( op1, op2) {
	pantalla.innerHTML =  op1 * op2;
}
	
function division( op1, op2) {
	pantalla.innerHTML =  op1 / op2;
}

function raiz( op1, op2) {
	pantalla.innerHTML =  op1 / op2;
}