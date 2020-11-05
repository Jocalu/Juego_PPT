var carnivores = ['lion', 'shark', 'puma', 'snake'];
var herbivores = ['elephant', 'giraffe', 'gacelle', 'hippo', 'koala'];
var omnivores = ['human', 'monkey', 'dog', 'bear', 'pig'];

var animals = [carnivores, herbivores, omnivores];

for (var i=0 ; i<animals.length; i++) {
    var maxLongitud = 0
    var posicion = 0
    for (var j=0 ; j<animals[i].length; j++) {
      
      var longitud = animals[i][j].length
      
      if (maxLongitud < longitud){
        maxLongitud = longitud
        posicion = j
        animals[i][j] = animals[i][j] + 's'
      } 
    }
    console.log (animals[i][posicion]);
}