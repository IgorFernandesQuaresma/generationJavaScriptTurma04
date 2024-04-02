import { Queue } from "./Interface";
const readline = require('readline-sync');


const fila = new Queue<string>()

while (true) {

    let opcao:number;
    let nome:string;

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("                Conceito de Fila                     ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Adicionar nome                       ");
    console.log("            2 - Listar todos os nomes                ");
    console.log("            3 - Retirar nome da fila                 ");
    console.log("            0 - Sair                                 ");
    console.log("*****************************************************");
    

    console.log("Digite a opção desejada");

    opcao = readline.questionInt("Digite uma opcao: ");

    switch(opcao) {
        case 1:
            console.log("\nInsira um nome: ");
            nome = readline.question("Digite o nome: ")
            fila.enqueue(nome);
            aguardar() 
            console.log(`O ${ nome} foi adicionado com sucesso`)
            break;
    
        case 2:
            console.log("\nOs elementos da fila são: ");
            aguardar()
            fila.printQueue();
            break;
    
        case 3:
            console.log("\nRetire um nome da fila: ");
            fila.dequeue()
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