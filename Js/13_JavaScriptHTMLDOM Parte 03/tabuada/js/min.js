let tabuada = document.querySelector('.my-span'); //Pega o span
let pegarCaminho = document.querySelector('#numero');

const CalcularTabuada = () => {
    let guardarValor = pegarCaminho.value;
    // innerHTML acessa ao html para alterar o valor
    tabuada.innerHTML = `
    ${guardarValor} x 0 = ${guardarValor * 0}<br>
    ${guardarValor} x 1 = ${guardarValor * 1}<br>
    ${guardarValor} x 2 = ${guardarValor * 2}<br>
    ${guardarValor} x 3 = ${guardarValor * 3}<br>
    ${guardarValor} x 4 = ${guardarValor * 4}<br>
    ${guardarValor} x 5 = ${guardarValor * 5}<br>
    ${guardarValor} x 6 = ${guardarValor * 6}<br>
    ${guardarValor} x 7 = ${guardarValor * 7}<br>
    ${guardarValor} x 8 = ${guardarValor * 8}<br>
    ${guardarValor} x 9 = ${guardarValor * 9}<br>
    ${guardarValor} x 10 = ${guardarValor * 10}
    `;
    console.log(guardarValor);
};
