import { Stack } from "./InterfacePilha";
const readline = require('readline-sync');

const pilha = new Stack <string> ();

while (true) {

    let opcao:number;
    let livro:string;

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                Conceito de Fila                     ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Adicionar Livro na Fila              ");
    console.log("            2 - Listar todos os livros               ");
    console.log("            3 - Retirar Livro da Fila                ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");
    

    console.log("Digite a opção desejada");

    opcao = readline.questionInt("Digite uma opcao: ");

    switch(opcao) {
        case 1:
            console.log("\nInsira um livro: ");
            livro = readline.question("Digite o livro: ")
           
            aguardar() 
            console.log(`O livro ${livro} foi adicionado com sucesso`)
            break;
    
        case 2:
            console.log("\nOs elementos da pilha são: ");
            aguardar()
           
            break;
    
        case 3:
            console.log("\nRetire um livro da pilha: ");
            pilha.pop()
            aguardar() 
         
            
            break;
    
        case 0: console.log("Saindo do programa...");
        process.exit(0);

        default:

        console.log(`O numero ${opcao} não foi encontrado`)

        break;
            
    }
        

}



export function aguardar(): void {
    console.log("\n*****************************************************");
    console.log("Executando...");
    console.log("*****************************************************");
   }