const readline = require('readline-sync')

let numero;
let somaPares = 0
let somaImpares = 0

    for (let contador = 0; contador < 10; contador++) {
        
        numero = readline.question("Digite um numero ");
        if (numero % 2 === 0) {
            somaPares++
        } else {
            somaImpares++
        }
    }

    console.log(`Quantidade de números pares: ${somaPares}`);
    console.log(`Quantidade de números ímpares: ${somaImpares}`)
    
