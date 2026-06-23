/*DESAFIO 07 - RANKING DE JOGADORES

Uma competição precisa exibir a classificação dos participantes.

Crie um array contendo o nome de 4 jogadores.

Utilize uma estrutura de repetição para mostrar:

1° Jogador
2° Jogador
3° Jogador
4° Jogador

A posicão deve ser gerada automaticamente pelo sistema.
 */

let jogadores = ["Luiz", "Gabriel", "Lucas", "Pâmela"];

for (let posicao = 0; posicao < jogadores.lenght; posicao++) {
    console.log(`${jogadores[posicao + 1]}° Jogador: ${jogadores[posicao]}`);
}
