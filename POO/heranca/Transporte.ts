export class Transporte {
    private _capacidade:number


	constructor(_capacidade: number) {
        this._capacidade = _capacidade
    }

    public get capacidade() {
        return this._capacidade
    }

    public set capacidade(capacidade: number) {
        this._capacidade = capacidade;

    }
}