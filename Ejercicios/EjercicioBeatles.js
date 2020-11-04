/*let beatles = [['john','george'],['ringo','paul']];

for(let i=0; i<beatles.length ;i++){
  for(let j=0; j<beatles[i].length ;j++){
    for(let z=0; z<beatles[i][j].length; z++){
      console.log(beatles[i][j][z]);
   }
    console.log(" ");
  }
}*/

let beatles = ['john','george', 'ringo', 'paul'];

for(let i=0; i<beatles.length;i++){
  for(let j=0; j<beatles[i].length; j++){
    if(j===beatles[i].length -1){
      console.log(beatles[i][j].toUpperCase());
    } else {
      console.log(beatles[i][j]);
    }
  }
  console.log(" ");
}
