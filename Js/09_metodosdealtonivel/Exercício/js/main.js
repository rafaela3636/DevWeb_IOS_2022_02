var numeros = [17, 43, 8, 4, 97, 31, 56, 29];

numeros.forEach(minhafuncao);

function minhafuncao(num) {
    if (num % 2 == 0) {
        console.log(`numero par ${num}`)
    }else{
        console.log(`numero impar ${num}`)
    }
}
