/* 
DESAFIO 06 - FILME FAVORITO

Crie um objeto chamado filme contendo:
 - titulo
 - genero
 - ano

 crie uma função responsável por receber esse objeto
 e exibir todas as informações formatadas no console
 utilizando template string.

 O objeto é praticar a manipulação de objetos
 e passagem de parâmetros para funções.
*/

let filme = {
    titulo: "Jogos Vorazes",
    genero: "Ficção",
    ano: 2016,
}

function anuncio() {
    console.log(`O título do filme que irei assistir no cinema
 nesse fim de semana é: ${filme.titulo}.
 O Gênero do filme é de: ${filme.genero},
 do ano de ${filme.ano}. `);
}

anuncio()


