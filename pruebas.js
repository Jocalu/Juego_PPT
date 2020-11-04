/*var dia = 3;

switch(dia){
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    }






var edad = 66;

//Rango
if (edad > 18 && edad < 65){
    console.log('Edad correcta');
} else {
    console.log('Edad incorrecta');
}
//Limite
if(edad < 18 || edad > 65){
    console.log('Limite alcanzado');
} else {
    console.log('No entra en el limite');
}







var confirmar = confirm('Seguro que desea proceder?');

if(confirmar) {
    alert('Borrando cuenta');
 } else {
     alert('Acción cancelada');
 }






var usuario = prompt('Introduce tu nombre de usuario');

if (usuario && usuario.trim()) {
    //.trim elimina los espacios en blanco al principio y al final
    var confirmar = confirm('¿Es ' + usuario + ' correcto?');

    if (confirmar) {
        alert ('Usuario correcto');
    } else {
        alert ('Usuario incorrecto');
    }
} else  {
    alert ('No has introducido un usuario');
}




var respuesta = 10;

if (typeof respuesta === 'string'){
    console.log('OK');
} else {
    console.log('Error, el tipo de valor es ' + typeof respuesta);
}






function saludar(nombre, profesion) {
    console.log ('Hola, soy ' + nombre + ' y me dedico a ' + profesion);
}

saludar('Juan Andrés','dev');
saludar('desde DOPodcast','podcast');
saludar('Juan','leer');



function mayusculas (texto){
    return texto.toUpperCase();
}

var nombre = mayusculas('Juan');

console.log(nombre);









function sumarCuadrados(a, b) {
    var cuadradoA = a*a;
    var cuadradoB = b*b;
    var sumarCuadrados = cuadradoA + cuadradoB;
    return sumarCuadrados;
}

alert (sumarCuadrados(123, 453));

//misma función pero con return

function sumarCuadrados(a, b) {
    return (a*a) + (b*b);
}

alert (sumarCuadrados(123, 453));










function nombrar() {
    miNombre = 'Jose Cárcamo';
    //si no ponemos 'var' JS crea la variable
    //como si estuviera en el ámbito global
    //con var delante la crea dentro de la funcion
    //y no se puede utilizar desde fuera (console.log daría error)
    console.log(miNombre);
}

nombrar();

console.log(miNombre);




var miNombre = 'Jose Cárcamo';

function nombrar () {

    function seguirNombrando() {
        console.log(miNombre);
    }
    seguirNombrando();
}

nombrar ();






var colores = ['rojo', 'verde', 'blanco', 'azul'];
console.log(colores);

function borrarElementoMatriz(elemento, matriz) {
    var indice = matriz.indexOf(elemento);

    if (indice > -1){
        //el elemento SI existe
        matriz.splice(indice, 1);
    } else {
        //el elemento NO existe
        alert('No se ha encontrado el elemento');
    }
}

borrarElementoMatriz('rojo', colores);
console.log(colores);
*/


var hola = ('Hola que tal')




