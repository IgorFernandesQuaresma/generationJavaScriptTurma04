const readline = require('readline-sync')

let numero, somaNumeros = 0;



do {
    numero = readline.questionInt("Digite um numero ");

    if ( numero > 0) {

        somaNumeros += numero
        
    }
} while (numero != 0);

console.log(`A soma dos pares é: ${somaNumeros}`);