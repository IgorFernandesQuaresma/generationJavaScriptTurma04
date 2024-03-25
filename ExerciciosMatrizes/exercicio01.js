const readline = require("readline-sync");
/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, 
onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. 
Veja os exemplos abaixo: */

let arrNum = [0,1,2,3,4,5,6,7,8,9];

let num;
num = readline.questionInt("Digite um numero inteiro: "); 

let posicao = arrNum.indexOf(num)

if(posicao > -1){
    console.log(` ${num} esta no array na posicao ${posicao}`);
 } else {
    console.log(`${num} não esta no array`)
 }


    


    






