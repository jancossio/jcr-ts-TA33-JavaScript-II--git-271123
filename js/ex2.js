//FECHA
const rgx_fecha = /(\d{2})[\/](\d{2})[\/](\d{4})/;

let dates = ["12/12/2014","07/11/2023","022/012/2022"];

dates.forEach(fecha => {rgx_fecha.test(fecha)? console.log("correo "+fecha+" valido.") : console.log("correo "+fecha+" no valido");});


//EMAIL
const rgx_mail = /^[A-za-z0-9.-]+@[A-Za-z0-9.]+\.[a-zA-Z]{2,3}$/;

let emails =  ["username@gmail.com","eje.-mplo@gma12l.es","username@gmail.nope"]

emails.forEach(mail => {rgx_mail.test(mail)? console.log("correo "+mail+" valido.") : console.log("correo "+mail+" no valido");
});


//Escape HTML
const rgx_chars = /^[&\\<>]*$/;

function escapeHTML(text){
    return text.replace(rgx_chars, function(match) {
        if (match === '&') {
          return '&amp;';
        } else if (match === "\\") {
          return '&quot;';
        } else if (match === '<') {
          return '&lt;';
        } else if (match === '>') {
          return '&gt;';
        }
      });
}

console.log(escapeHTML("&"));
console.log(escapeHTML("\\"));
console.log(escapeHTML("<"));
console.log(escapeHTML(">"));


//Orden nombre apellido
const rgx_names = /^([A-Za-z ]+) ([A-Za-z]+)$/;
var names = "David Tennant";
var resultName = names.replace(rgx_names, "$2, $1");
console.log(resultName);


//Etiquetas peligros
const rgx_tags = /<script[^>]*?>[\s\S]*?<\/script>/gi;
var htmlPrueba= "<p>Aqui va algo</p><script>Esto de aqui se elimina</script>";
var htmlSeguro = htmlPrueba.replace(rgx_tags, '');
console.log(htmlSeguro);