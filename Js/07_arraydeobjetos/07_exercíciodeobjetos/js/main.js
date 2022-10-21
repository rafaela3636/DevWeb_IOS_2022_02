    var alunos = [
        {
        nome: 'Abigail Santos',
        idade: 18,
        Notas: [7, 8, 9, 6],
        endereco: {
            rua: 'Boa Esperança',
            numero: 120,
            cidade: 'São Paulo',
            estado: 'SP' },
        Escolaridade: 'Ensino Médio',
        sala: 30,
        Turno: 'noite',
        Responsável: 'Marcos andré',
        },
        {
            nome: 'Maria Dayane ',
            idade: 20,
            Notas: [6, 5, 7, 8],
            endereco: {
                rua: 'Bom Sucesso',
                numero: 50,
                cidade: 'Vila Maria',
                estado: 'SP' },
            Escolaridade: 'Ensino Médio',
            sala: 38,
           Turno: 'noite',
           Responsável: 'Carlos Abrel',
        },
 
        {
            nome: 'Antonio Carlos ',
            idade: 22,
            Notas: [7, 4, 5, 8],
            endereco: {
                rua: 'acuruica',
                numero: 30,
                cidade: 'Vila Aurora',
                estado: 'SP' },
            Escolaridade: 'Ensino Médio',
            sala: 40,
           Turno: 'noite' ,
           Responsável: 'Gabriel Azevedo',
        }
    ];

         let soma = 0;
         let media = 0;
         let aprov= " ";

        for(let x = 0; x < alunos.length; x++) {
            soma = 0;
            for( let i = 0; i < alunos[x].notas.length; i++) soma += alunos[x].notas[i];

            media = soma / alunos[x].notas.length;
            console.log(`media ${media}`);
            

           aprov = media >= 7 ? "aprovado" : "reprovado";
           console.log(`Aluno ${aprov}`);

        }
       