const readline = require("readline-sync");

let idade,
  continua,
  menoresVinteUm = 0,
  maioresCinquenta = 0;

continua = readline.question("Digite S para continuar: ").toLowerCase();

while (continua === "s") {
  idade = readline.questionInt("Digite uma idade ");

  if (idade < 21) {
    menoresVinteUm++;
  }
  if (idade >= 50) {
    maioresCinquenta++;
  }

  continua = readline.question("Digite S para continuar ou E para sair: ").toLowerCase();

  while (continua !== "s" && continua !== "e") {
    console.log(`Digite a opções correta!`);
    continua = readline.question("Digite S para continuar ou E para sair: ").toLowerCase();
  }
}

console.log(`Quantidade de menores de 21 é: ${menoresVinteUm}`);
console.log(`Quantidade de maiores de 50 é: ${maioresCinquenta}`);
