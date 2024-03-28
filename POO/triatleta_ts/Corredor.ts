import { Atleta } from "./Atleta";

export class Corredor extends Atleta {
  
    constructor (nome: string){
        super(nome);
    }

    public aquecer(): void {
        console.log("Aquecendo...");
    }

    public correr(): void{
        console.log("Correndo...");
    }
}