function actualizarHora(){
    var areaReloj = document.getElementById("reloj")
    var ahora = new Date();

    var horas = ahora.getHours().toString();
    var minutos = ahora.getMinutes().toString();
    var segundos = ahora.getSeconds().toString();

    areaReloj.innerHTML = formato_reloj(horas)+":"+formato_reloj(minutos)+":"+formato_reloj(segundos);
}

let formato_reloj = (tiempo) => { return parseInt(tiempo)<10 ? "0" + tiempo : tiempo.toString();}
var cronometro = setInterval(actualizarHora,1000);