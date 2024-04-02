const readline = require('readline-sync');
import { ProdutoController } from "./Controller/ProdutosController";
import { Medicamentos } from "./Medicamento";
import { Cosmeticos } from "./Cosmeticos";
import { ProdutoRepository } from "./Repository/ProdutoRepository";


export function main() {

    let opcao:Number ;
    let numero, tipo, preco, produtoBuscado: number;
    let nome, fragancia: string;
    let generico: string;
    let produto: ProdutoController = new ProdutoController();

while (true) {
console.log("*****************************************************");
console.log("                                                     ");
console.log("               Medicamentos                       ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar Produto                        ");
console.log("            2 - Listar todas os Produtos             ");
console.log("            3 - Buscar produto por ID                ");
console.log("            4 - Atualizar Produto"                    );
console.log("            5 - Apagar Produto                       ");
console.log("            0 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");


console.log("Digite a opção desejada");

opcao = readline.questionInt ("");

switch(opcao) {
    case 1:
    console.log('Vamos criar seu produto')

    console.log("Digite o nome do produto: ")
    nome = readline.question(" ")

    console.log("Escreva 1 para'Cosmetico' ou 2'Medicamento': ")
    console.log("Digite o tipo de produto: ")
    tipo = readline.questionInt(" ")

    console.log("Digite o Preço do Produto: ")
    preco = readline.questionFloat(" ").toFixed(2)

    switch(tipo) {
        case 1:

        console.log("Qual a fragancia do cosmetico: ")
        fragancia = readline.question(" ")
        produto.CriarProduto(new Cosmeticos(produto.gerarNumero(), nome, tipo, preco, fragancia))
        break;

        case 2 :

        console.log("O produto é generico? ")
        generico = readline.question(" ")
        produto.CriarProduto(new Medicamentos (produto.gerarNumero(), nome, tipo, preco, generico))

        break;
    } 


    aguardar()    
    break



    case 2:

    console.log('Vamos listar seus produtos')
        produto.listarTodosProdutos()
        aguardar()  
        break;

    case 3:  
    console.log('Vamos buscar seus produtos')
    produtoBuscado = readline.questionInt("Digite o numero da ID do produto: ")
    produto.consultarProdutoporId(produtoBuscado) 
        aguardar()   
        break;

    case 4:
        
    aguardar()      
    break;
        
     

    case 5:
        produtoBuscado = readline.questionInt("Digite o numero da ID do produto: ")
        produto.deletarProduto(produtoBuscado)
        
    aguardar()      
    break;

    case 6:
    aguardar()    
    break;

    case 7:
        
    aguardar()      
    break;

    case 8:
        
    aguardar()     
    break;

    case 9:  
        console.log("Saindo do programa...");
            sobre()
        process.exit(0);
    default:

        console.log("Opção inválida! Por favor, escolha uma opção válida.");

        break;
}    
    console.log("Pressione Enter para continuar...");
    readline.question("");

}}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Igor Fernandes Quaresma ");
    console.log("Generation Brasil");
    console.log("https://github.com/IgorFernandesQuaresma");
    console.log("*****************************************************");
}

export function aguardar(): void {
    console.log("\n*****************************************************");
    console.log("Executando...");
    console.log("*****************************************************");
}

main()