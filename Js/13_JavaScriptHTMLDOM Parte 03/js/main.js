//Metodo querySelector('nome da tag 'p' ou class '.' ou id '#'')

let paragrafo = document.querySelector('p');
paragrafo.style.backgroundColor = '#FBBEBA';

let parClass = (document.querySelector('p.exemplo').innerHTML =
    'Mudei o texto aqui');

let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

//Metodo querySelectorAll

let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}

//Acessando o array de li utilizando apenas o Id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui'));
