/*var texto = 'Bootcamp'

texto2 = texto.replace(/o/gi,'oo');
texto3 = texto2.replace(/u/gi,'uu');
texto4 = texto3.replace(/[qwrtypsdfghjklzxcvbnm]/gi,'');

var arrayTexto = texto4.split([])
console.log(arrayTexto);*/


var texto ='Bootcamp';

var balleno = '';

for (let i=0; i<texto.length; i++){
    if(texto[i] == 'o' || texto[i] == 'u'){
        balleno += texto[i] + texto[i];
    } else if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i'){
        balleno += texto[i];
    } 
}
console.log(balleno);