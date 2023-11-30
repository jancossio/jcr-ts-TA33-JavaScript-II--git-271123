var pantalla = document.getElementById("pantalla");
var tmp_valor = "";
var operador1 = "";
var signoOperante = "";

function agregarValor(valor){
    pantalla.innerHTML += valor;
}

function borrarTodo(){
    tmp_valor = "";
    pantalla.innerHTML = "";
}


function operacion(operacion){ 
    operador1 = pantalla.innerHTML;
    signoOperante = operacion;
    pantalla.innerHTML="";
}

function resultado(){

    let operador2 = pantalla.innerHTML;

    switch (signoOperante) {
        case "+":
            result = suma(operador1, operador2);
            break;
            
        case "-":
            result = resta(operador1, operador2);
            break;
            
        case "x":
            result = multiplicacion(operador1, operador2);
            break;
            
        case "/":
                
            if (operador2 == 0.0) {
                pantalla.innerHTML="INFINITY";
            }
            result = division(operador1, operador2);

            
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