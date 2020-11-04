var tamaño = 8;

var tablero ='';

for (var x = 0 ; x <= tamaño; x ++){
    for (var y = 0; y <= tamaño; y ++){
        if ((x + y) % 2 ==0){
            tablero += '#';
        } else {
            tablero += ' ';
        }
    }
    tablero += "\n";
}

console.log(tablero);