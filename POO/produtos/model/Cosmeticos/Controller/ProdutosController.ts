import { Produto } from "../Produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public numero:number = 0;

    public buscarNoArray(numero: number): Produto | null {  //metodo auxiliar buscarNumero
        for (let produto of this.listaProdutos) {
            if(produto.numero === numero)

            return produto
        }

        return null
    }

    public gerarNumero(): number { //metodo auxiliar Gerar numero
        return ++ this.numero
    }


    CriarProduto(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(`Produto cadastrado com sucesso`);
    }


    listarTodosProdutos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar()
        }
    }

    consultarProdutoporId(numero: number): void {
        let produto = this.listaProdutos.find(produto => produto.numero === numero);
        if (produto) {
            console.log(`O produto é ${produto.numero} e o seu nome é ${produto.nome}`); 
   
        } else {
            console.log(`Nenhum produto encontrado com o ID ${numero}`);
        }
    }


    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.numero);
    
        if (buscaProduto != null) {
            const index = this.listaProdutos.indexOf(buscaProduto);
            this.listaProdutos[index] = produto; // Atualiza o produto na lista de produtos
            console.log(`O produto ${produto.numero} foi atualizado com sucesso`);
        } else {
            console.log(`O produto com o ID: ${produto.numero} não foi encontrado`);
        }
    }
    


    deletarProduto(numero: number): void {
        let buscarProdutos = this.buscarNoArray(numero);
        if (buscarProdutos != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProdutos), 1)
            console.log(`O produto do ID: ${numero} foi apagado com sucesso`)
        } else {
            console.log(`Produto não identificado`)
        }

    } }

   


