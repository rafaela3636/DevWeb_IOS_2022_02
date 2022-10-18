/*criando array unidimensional*/
var array1 = ['marcelo', 15, 'colin', 47, true];
console.log(array1);
console.log(array1[2]);
console.clear();
array1[3] = 80;
console.log(array1);

/*array bidimensional*/
var array2 = [
    ['pipoca', 10, false],
    ['string', 20, true],
    ['margarina', 12, false],
];
console.log(array2);
console.log(array2[2][0]);
console.clear();
array2[1][0] = 'salsicha';
console.log(array2);

console.clear();
/*array de objeto carro*/
var carro = ['carro', 1998, 'okm', false, 2];
var x = carro.toString();
console.log(typeof x);
console.log(typeof carro);

/*tranform array em string e add um novo separador*/
console.clear();
var y = carro.join(' ?');
console.log(carro);
console.log(x);
console.log(y);

/*retorna o tamanho da array*/
console.log(carro.length);

console.clear;
/*retira o elemento no final do array
var t = carro.pop();
console.log(carro);
console.log(t);*/

/*insere uma informação no final do array */
console.clear();
var u = carro.push('lego');
console.log(carro);
console.log(u);

/* remove elemento no inicio do array*/
console.clear()
var p = carro.shift();
console.log(carro)
console.log(p)

/*insere a informação no inicio do array*/
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

/*apagar um elemento do array em uma posição pré selecionada*/
delete carro[1]
console.log(carro)


