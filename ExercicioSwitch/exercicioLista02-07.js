const readline = require("readline-sync");

let num01, num02, operacao

num01 = readline.questionInt("Digite um numero inteiro");
num02 = readline.questionInt("Digite outro numero inteiro");

console.log(
  "Para digitar a operacao use a tabela a seguir: \n (1 para soma) \n (2 para subtracao) \n (3 para divisao) \n (4 para multiplicacao)\n "
);

operacao = readline.questionInt("Digite o codigo da operacao");

switch (operacao) {
  case 1:
    console.log(`O resultado da operacao é: ${num01 + num02}`);

    break;

  case 2:
    console.log(`O resultado da operacao é: ${num01 - num02}`);

    break;

  case 3:
    console.log(`O resultado da operacao é: ${num01 / num02}`);

    break;
  case 4:
    console.log(`O resultado da operacao é: ${num01 * num02}`);

    break;

  default:
    console.log("Não foi possivel realizar a operacao");
}