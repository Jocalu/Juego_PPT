let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const piedra_div= document.getElementById('piedra');
const papel_div= document.getElementById('papel');
const tijera_div= document.getElementById('tijera');

function movidaComp(){
    const opciones= ['piedra','papel','tijera'];
    const random= Math.floor(Math.random() *3);
    const movida= opciones[random];
    return movida;
}
function convertirLetra(opcion){
    if (opcion == 'piedra'){
        return 'Piedra ✊';
    } else if (opcion == 'papel'){
        return 'Papel ✋';
    } else {
        return 'Tijeras ✌';
    }
}

function ganar(opcionUser, opcionPC){
    userScore++;
    userScore_span.innerHTML= userScore;
    const smallUser= '(USER)'.fontsize(2);
    const smallPC= '(PC)'.fontsize(2);
    result_div.innerHTML= convertirLetra(opcionUser)+smallUser+' le gana a '+convertirLetra(opcionPC)+smallPC+'<br>Ganaste';
    const userChoice_div= document.getElementById(opcionUser);
    const pcChoice_div= document.getElementById(opcionPC);
    userChoice_div.classList.add('verde');
    pcChoice_div.classList.add('rojo');
    setTimeout(function(){
        userChoice_div.classList.remove('verde');
        pcChoice_div.classList.remove('rojo');
    }, 500);
}
function perder(opcionUser, opcionPC){
    compScore++;
    compScore_span.innerHTML= compScore;
    const smallUser= '(USER)'.fontsize(2);
    const smallPC= '(PC)'.fontsize(2);
    result_div.innerHTML= convertirLetra(opcionPC)+smallPC+' le gana a '+convertirLetra(opcionUser)+smallUser+'<br>Perdiste';
    const userChoice_div= document.getElementById(opcionUser);
    const pcChoice_div= document.getElementById(opcionPC);
    userChoice_div.classList.add('rojo');
    pcChoice_div.classList.add('verde');
    setTimeout(function(){
        userChoice_div.classList.remove('rojo');
        pcChoice_div.classList.remove('verde');
    }, 500);
}
function empatar(opcionUser, opcionPC){
    result_div.innerHTML= 'Ambos habéis elegido '+convertirLetra(opcionUser)+' <br>Empate';
    const opcion_div= document.getElementById(opcionUser);
    opcion_div.classList.add('gris');
    setTimeout(function(){
        opcion_div.classList.remove('gris');
    }, 500);
}

function game(opcion){
    const movidaPc= movidaComp();
    const movidaUser= opcion;
    switch(movidaUser+movidaPc){
        case "piedratijera":
        case "papelpiedra":
        case "tijerapapel":
            ganar (movidaUser, movidaPc);
        break;
        case "piedrapapel":
        case "papeltijera":
        case "tijerapiedra":
            perder (movidaUser, movidaPc);
        break;
        case 'piedrapiedra':
        case 'tijeratijera':
        case 'papelpapel':
            empatar (movidaUser);
        break;
    }
}

function main(){
    piedra_div.addEventListener('click', () => game('piedra'));
    papel_div.addEventListener('click', () => game('papel'));
    tijera_div.addEventListener('click', () => game('tijera'));
}
main();

