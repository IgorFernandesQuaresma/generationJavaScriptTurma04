const readline = require('readline-sync')

let numero;

numero = readline.questionInt('\nDigite um numero inteiro de 0 a 100 \n');

if (numero > 0 && numero % 2 == 0) {
    console.log(`O numero ${numero} é par e positivo`)
} else if (numero > 0 && numero % 2 != 0) {
    console.log(`O numero ${numero} é impar e positivo`)
} else if (numero < 0 && numero % 2 != 0) {
    console.log(`O numero ${numero} é impar e negativo`)
} else if (numero < 0 && numero % 2 == 0) {
    console.log(`O numero ${numero} é par e negativo`)
} else {
    console.log(`O numero que vc digitou é ZERO`)
}



