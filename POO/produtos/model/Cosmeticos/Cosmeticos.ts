import { Produto } from "./Produto"


export class Cosmeticos extends Produto {
    private _fragancia: string

    constructor (numero: number, nome: string, tipo: number, preco: number,  fragancia: string) 
    {
            super (numero, nome, tipo, preco)
            this._fragancia = fragancia
        }

        public get fragancia() {
            return this._fragancia;
        }
    
        public set fragancia (fragancia: string) {
            this._fragancia = fragancia;
        }    
        
        
        public visualizar(): void{
            super.visualizar()
            console.log(`A fragancia do cosmetico é ${this._fragancia}`)
        }


}