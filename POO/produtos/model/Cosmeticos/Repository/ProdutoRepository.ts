import { Produto } from "../Produto";

export interface ProdutoRepository {

// metodos CRUD
CriarProduto(produto: Produto): void;
listarTodosProdutos(): void
consultarProdutoporId(numero: number): void;
atualizarProduto(produto: Produto): void;
deletarProduto(numero: number): void;

}