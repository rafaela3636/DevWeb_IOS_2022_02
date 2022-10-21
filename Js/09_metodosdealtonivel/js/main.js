//*metodo forEach()
var frutas = ['banana', 'maca', 'kiwi', 'melancia'];

//* metodo forEach() é utilizado para percorrer uma array e aplicar alguma mudança ou configuração
frutas.forEach(minhafuncao);

function minhafuncao(valor, indice) {
    console.log(`o indice é ${valor}`);
    console.log(`o indice é ${indice}`);
}

//* metodo forEach() com array de objetos utilizando arrow function
const alunos = [
    {
        id: 1,
        nome: 'marcelo',
        passou: true,
    },

    {
        id: 2,
        nome: 'Agatha',
        passou: 'False',
    },

    {
        id: 3,
        nome: 'vitor',
        passou: 'false',
    },
];
alunos.forEach((aprovados) => console.log(aprovados.passou));

//*metodo map()
const numeros = [2, 7, 8, 50, 34];
const novosnumeros = numeros.map(Math.sqrt);
console.log(novosnumeros);

console.clear();
const cachorro = [
    {
        id: 1,
        nome: 'bololinho',
        idade: 11,
    },

    {
        id: 2,
        nome: 'toby',
        idade: 7,
    },

    {
        id: 3,
        nome: 'pingo',
        idade: 16,
    },
];

const mapcahorro = cachorro.map((nomeDog) => {
    return nomeDog.nome;
    /*return nomeDog.idade retorna só a idade*/
});
console.log(cachorro);
console.log(mapcahorro);

//*metodo filter() percorre o array e retorna as informações que passam no filtro

const idade = [5, 9, 10, 15, 25, 35, 45, 89];
//* percorre o array e retorna apenas as idades abaixo de 30
let filtraIdade = idade.filter((idade) => {
    return idade < 30;
});

console.log(filtraIdade);

console.count;
//*metodo find() Semelhante ao método filter(), porém o find() não cria um novo array.

console.log(
    cachorro.find((procuraNome) => {
        return procuraNome.nome === 'pingo';
    })
);

/*return por id return procurandoNome.id =='1'
