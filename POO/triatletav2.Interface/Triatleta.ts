import { Ciclista } from "./CiclistaInterface";
import { Corredor } from "./CorredorInterface";
import { Nadador } from "./NadadorInterface";
import {Pessoa} from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor {

    constructor (nome: string) {
        super(nome)
    }

    public aquecer(): void {
        console.log("Aquecendo...")
    }

    public correr(): void {
        console.log("correndo...")
    }

    public nadar(): void {
        console.log("Nadando...")
    }

    public pedalar(): void {
        console.log("pedalando...")
    }
}

let T1 =  new Triatleta ("Igor")

T1.visualizar();
T1.aquecer();
T1.correr();
T1.nadar();


