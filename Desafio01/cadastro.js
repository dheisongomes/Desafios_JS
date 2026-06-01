// Desafio 01  - Cadastro de Pessoa

/* 
 Crie um objeto chamado pessoa contendo:
 - nome
 - idade
 - cidade

 Após a criação:
 - Altere a idade
 - Adiciione uma profissão
 - Remova a cidade
  
 No fim, exiba o objeto final.

*/

const pessoa = {
    nome: "Dheison",
    idade: 21,
    cidade: "Capanema",
}
console.log(pessoa);

pessoa.idade = 12;

pessoa.profissao = "Faturista"

delete pessoa.cidade;

console.log(`Nome:${pessoa.nome},
Idade:${pessoa.idade},
Profissao:${pessoa.profissao},`);    
