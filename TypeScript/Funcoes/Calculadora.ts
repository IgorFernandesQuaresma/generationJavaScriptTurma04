import readline = require('readline-sync');

let num1: number, num2: number;


num1 = readline.questionFloat("Digite o primeiro numero: ");
num2 = readline.questionFloat("Digite o segundo numero: ");

console.log(soma(num1, num2))

function soma(num1:number, num2:number): number {
    return num1 + num2;
}

