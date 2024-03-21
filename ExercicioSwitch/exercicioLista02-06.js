const readline = require("readline-sync");

let nome, salario, codigoDoCargo;

nome = readline.question("Digite o nome do colaborador");
salario = readline.questionFloat("Digite o salario do seu colaborador");

console.log(
  "Para acessar o código do colaborador use a tabela a seguir: \n (1 para gerente) \n (2 para vendedor) \n (3 para supervisor) \n (4 para motorista) \n (5 para estoquista) \n (6 para Tecnico em TI) "
);

codigoDoCargo = readline.questionInt("Digite o codigo do cargo");

switch (codigoDoCargo) {
  case 1:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 10) / 100}`
    );

    break;

  case 2:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 7) / 100}`
    );

    break;

  case 3:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 9) / 100}`
    );

    break;

  case 4:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 6) / 100}`
    );

    break;

  case 5:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 5) / 100}`
    );

    break;

  case 6:
    console.log(
      `O novo salario de ${nome} e: ${salario + (salario * 8) / 100}`
    );

    break;

  default:
    console.log("Não identificamos o colaborador");
}
