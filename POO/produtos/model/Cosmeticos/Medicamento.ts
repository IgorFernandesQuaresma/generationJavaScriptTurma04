import { Produto } from "./Produto"


export class Medicamentos extends Produto {
    private _generico: string

    constructor (numero: number, nome: string, tipo: number, preco: number, generico: string) 
    {
            super (numero, nome, tipo, preco)
            this._generico = generico
        }

        public get generico() {
            return this._generico;
        }
    
        public set generico (generico: string) {
            this._generico = generico;
        }           

        public visualizar(): void{
            super.visualizar();
            console.log(`O medicamento é generico? ${this._generico}`)
        }
    
}