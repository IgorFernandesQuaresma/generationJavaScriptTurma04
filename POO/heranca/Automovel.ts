import { Terrestre } from "./Terrestre"

export class Automovel extends Terrestre {
    private _cor: string;
    private _numPortas: number;
    private _placa: number;
    private _marcha: number;

constructor (capacidade: number, numRodas: number, velocidade: number, cor: string, numPortas:number, placa:number, marcha:number  ) {
    super (capacidade, numRodas, velocidade)
    this._cor = cor
    this._marcha = marcha
    this._numPortas = numPortas
    this._placa = placa

}
}


function criarVeiculos(capacidade: number, numRodas: number, velocidade: number, cor: string, numPortas:number, placa:number, marcha:number ): string {
    return (`O veiculo tem capacidade ${capacidade}, ${numRodas} rodas, é da cor ${cor} chega até ${velocidade} km/h, tem ${numPortas} portas, possui a placa ${placa}} , e tem  ${marcha} marchas`)    
}


console.log(criarVeiculos(4, 4, 180, "preto", 4, 12345, 5))