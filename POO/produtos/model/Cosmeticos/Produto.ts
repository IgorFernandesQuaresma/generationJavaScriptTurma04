
export abstract class Produto {

    private _numero: number;
    private _nome: string;
    private _tipo: number
    private _preco: number

    constructor (numero: number, nome: string, tipo: number, preco: number){
        this._numero = numero;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
    }

    
    public get numero(){
        return this._numero;
    }

    public set numero(numero: number){
        this._numero = numero;
    }



    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(tipo: number){
        this._tipo = tipo;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }

    public visualizar(): void{
        
        let tipo: string = ""

        switch (this._tipo) {
            case 1:
                tipo = "Cosmeticos";
                break;
            case 2:
                tipo = "Medicamentos";
                break;
            default:
                tipo = "Tipo de produto não Identificado";
                break;
        }

        console.log("***************************************");
        console.log("           Dados do Produt             ");
        console.log("***************************************");
        console.log("Nome do produto é: ", this._nome);
        console.log("Codigo do produto é: ", this._numero);
        console.log("E custa: ", this._preco);
    }
        
    }

    

