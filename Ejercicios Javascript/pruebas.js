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












var outputResults = [];

function toFixedDecimals(result){
    if(Number.isInteger(result)){
        return result.toFixed();
    }else{
        return result.toFixed(3);
    }
}

function calculator(a, b){  

    if((typeof a === 'number' && typeof b === 'number') || (typeof a === 'number' && b === undefined)){
        
        if(b === undefined){
            var resultSqrt = Math.sqrt(a);
            console.log(`${a}½ = ${toFixedDecimals(resultSqrt)}`.toString());
        }else{
            var results = [];
            var resultSum = a + b;            
            var resultRest = a - b;
            var resultMult = a * b;
            var resultDiv = a / b;

            results.push(resultSum);
            results.push(resultRest);
            results.push(resultMult);
            results.push(resultDiv);

            for(var i = 0; i < results.length; i++){
                switch(i){
                    case 0:
                        outputResults.push(`${a} + ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 1:
                        outputResults.push(`${a} - ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 2:
                        outputResults.push(`${a} × ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                    case 3:
                        outputResults.push(`${a} ÷ ${b} = ${toFixedDecimals(results[i])}`.toString());
                        break;
                }
            }
        }

        for(var i = 0; i < outputResults.length; i++){
            console.log(outputResults[i]);
        }

    }else{
        console.log('No te entiendo. Introduce valores numéricos');
    }
}






function calculator() {
    var results = [];
    var sum;
    var txtSum = 'Addition: ';
    var sub;
    var txtSub = 'Substraction: ';
    var mul;
    var txtMul = 'Multiplication: ';
    var div;
    var txtDiv = 'Division: ';
    if (!checkNumber(arguments)) {
      console.log('No calculation because no valid argument');
    } else if (arguments.length === 0) {
      console.log('No input');
    } else if (arguments.length === 1) {
      results.push(
        'Square root ' + arguments[0] + ' = ' + Math.sqrt(arguments[0]).toFixed(3)
      );
    } else {
      for (num in arguments) {
        if (num === '0') {
          sum = arguments[num];
          sub = arguments[num];
          mul = arguments[num];
          div = arguments[num];
        } else {
          sum += arguments[num];
          sub -= arguments[num];
          mul *= arguments[num];
          div /= arguments[num];
        }
        txtSum += arguments[num] + ' + ';
        txtSub += arguments[num] + ' - ';
        txtMul += arguments[num] + ' * ';
        txtDiv += arguments[num] + ' / ';
      }
      txtSum = txtSum.substring(0, txtSum.length - 2) + ' = ' + sum.toFixed(3);
      txtSub = txtSub.substring(0, txtSub.length - 2) + ' =' + sub.toFixed(3);
      txtMul = txtMul.substring(0, txtMul.length - 2) + ' = ' + mul.toFixed(3);
      txtDiv = txtDiv.substring(0, txtDiv.length - 2) + ' = ' + div.toFixed(3);
      results.push(txtSum);
      results.push(txtSub);
      results.push(txtMul);
      results.push(txtDiv);
    }
    console.log(results.join('\n'));
  }
  
  function checkNumber(arguments) {
    for (num in arguments) {
      if (typeof arguments[num] !== 'number' || Number.isNaN(arguments[num])) {
        console.log(arguments[num] + ' is not a number.');
        return false;
      }
    }
    return true;
  }


  */
 


  