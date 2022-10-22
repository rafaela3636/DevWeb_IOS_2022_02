//*criação da classe carro
class carro {
    constructor(nome, ano, porta, janelas) {
        this.nome = nome;
        this.ano = ano;
        this.porta = porta;
        this.janelas = janelas;
    }
}

//*pegar o ano atual
let dataHoje = new Date();
let ano = dataHoje.getFullYear();


//* metodo que retorna a idade do meu carro
idadecarro(anoAtual){
    return anoatual - this,ano;
};

//* criação de objetos que herda a caracteristicas da classe carro
let carro1 = new carro('celta', 2002, 2, 4);
let carro2 = new carro('veloster', 2016, 3, 4);

//*apresentar os objetos no console.log
console.log(carro1);
console.log(carro1.nome);
