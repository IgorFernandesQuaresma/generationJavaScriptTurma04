let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let contadorPrincipal = 0;
let contadorSecundario = 0;

for (let index = 0; index < matriz.length; index++) {
  console.table(`Matriz principal: ${matriz[index][index]}`);
  console.table(`Matriz secundaria: ${matriz[index][matriz.length - 1 - index]}`)
}



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
