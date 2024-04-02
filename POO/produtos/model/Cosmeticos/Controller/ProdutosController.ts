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
            console.log(`O produto é ${produto.numero}`); 
   
        } else {
            console.log(`Nenhum produto encontrado com o ID ${numero}`);
        }
    }


    atualizarProduto(produto: Produto): void {
        let buscarProdutos = this.buscarNoArray(produto.numero);

        if (buscarProdutos != null) {

            this.listaProdutos[this.listaProdutos.indexOf(buscarProdutos)] //passa o indice, o codigo dentro das chaves é só para retornar o numero do indice
            // o que esta escrito acima é basicamente isso thi.listaProdutos[1]

            console.log(`O produto ${produto.nome} foi atualizado com sucesso`)  
        } else {
            console.log(`O produto ${produto.nome} não foi encontrado`)
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

   


