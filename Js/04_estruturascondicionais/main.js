//Primeiro Exercício 

var acucar = 'R$7';
var cafe = 'R$28';
var pao = 'R$17';

if(acucar>cafe){
if(acucar>pao){
console.log("R$7 pao é o menor!");
}else
console.log("R$28 cafe é o menor!");
}else if(cafe>acucar){
if(acucar>pao){
console.log("R$17 pao é o menor!");
}else
console.log("R$7 acucar é o menor!");
}

// Exercicio 2

var a = 2;
var b = 1;
var c = 3;
if (b < a < c) console.log('1,2,3');

// Exercicio 3

let ano = 2020
if (ano % 100 == 0) {
    console.log(ano + ' Não é um ano bissexto');
} else if (ano % 400 == 0 || ano % 4 ==0) {
    console.log(ano + ' É um ano bissexto');
}


