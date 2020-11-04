var bobsFollowers = ['Alex', 'Arlette', 'My', 'Jr'];
var tinasFollowers = ['Alex', 'Arlette', 'Steve'];

var mutualFollowers = []

for (var i = 0; i < bobsFollowers.length; i++){
    for (var j = 0; j < tinasFollowers.length; j++)
    if (bobsFollowers[i] == tinasFollowers[j]){
        mutualFollowers.push (bobsFollowers[i])
    }
}
console.log (mutualFollowers);
