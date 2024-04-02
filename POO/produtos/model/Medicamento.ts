import { Produto } from "./produto"


export class Medicamentos extends Produto {
    private _generico: string

    constructor (numero: number, nome: string, tipo: number, preco: number, generico: string) 
    {
            super (numero, nome, tipo, preco)
            this._generico = generico
        }
    

}