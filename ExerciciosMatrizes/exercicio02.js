let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(`Matriz principal: ${matriz[0][0]}`);
console.table(`Matriz principal: ${matriz[1][1]}`);
console.table(`Matriz principal: ${matriz[2][2]}`);
console.table(`Matriz secundaria: ${matriz[0][2]}`);
console.table(`Matriz secundaria: ${matriz[1][1]}`);
console.table(`Matriz secundaria: ${matriz[2][0]}`);

let contadorPrincipal = 0;
let contadorSecundario = 0;

for (let indexLinha = 0; indexLinha < matriz.length; indexLinha++) {

  for (let indexColuna = 0; indexColuna < matriz.length; indexColuna++) {

    if 
      ((indexLinha == 0 && indexColuna == 0) ||
      (indexLinha == 1 && indexColuna == 1) ||
      (indexLinha == 2 && indexColuna == 2)
    ) {
      contadorPrincipal += matriz[indexLinha][indexColuna];
    }
    if
      ((indexLinha == 0 && indexColuna == 2) ||
      (indexLinha == 1 && indexColuna == 1) ||
      (indexLinha == 2 && indexColuna == 0)) {
      contadorSecundario += matriz[indexLinha][indexColuna];
    }
  }
}

console.log(`A soma da diagonal principal é ${contadorPrincipal}`);
console.log(`A soma da diagonal principal é ${contadorSecundario}`);
