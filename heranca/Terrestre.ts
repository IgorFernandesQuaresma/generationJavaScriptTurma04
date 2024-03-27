import {Transporte} from "./Transporte";

export class Terrestre extends Transporte {

    private _numRodas: number;
	private _velocidade: number;


    constructor (capacidade: number, numRodas: number, velocidade:number) {
        super (capacidade)
        this._numRodas = numRodas; 
        this._velocidade = velocidade;
    }

    public get numRodas() {
        return this._numRodas
    }

    public set numRodas(numRodas: number) {
        this._numRodas = numRodas;

    }

    public get velocidade() {
        return this._velocidade
    }

    public set velocidade(velocidade: number) {
        this._velocidade = velocidade;

    }
}

function criarVeiculo(capacidade:number, numRodas: number, velocidade: number): string {

    return ` O veiculo possui ${capacidade} de capacidade ${numRodas} rodas e vai até ${velocidade} km/h`
    
}





