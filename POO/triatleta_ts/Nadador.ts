import { Atleta } from "./Atleta";

export class Nadador extends Atleta {
   
    constructor (nome: string){
        super(nome);
    }

    public aquecer(): void {
        console.log("Aquecendo...");
    }
    
    public nadar(): void{
        console.log("Nadando...");
    }
}