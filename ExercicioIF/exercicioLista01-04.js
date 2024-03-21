const readline = require('readline-sync')

let vertebra, tipo, alimentacao

vertebra = readline.question('\nDigite se seu animal é vertebrado ou invertebrado: \n -Vertebrado \n -Invertebrado \n').toLowerCase();
tipo = readline.question('\n Digite qual o tipo do seu animal: \n -Ave \n -Mamifero \n -Inseto \n -Anelideo \n').toLowerCase()
alimentacao = readline.question('\n Digite o tipo de alimentacao do seu animal: \n -Carnivoro \n -Onivoro \n -Herbivoro \n -Hematofago \n').toLowerCase()

if (vertebra === "vertebrado" && tipo === "ave" && alimentacao === "carnivoro" ) {

    console.log("Seu animal é a Águia" )
    
} else if (vertebra === "vertebrado" && tipo === "ave" && alimentacao === "onivoro" ) {

    console.log("Seu animal é a Pomba" )
    
} else if (vertebra === "vertebrado" && tipo === "mamifero" && alimentacao === "onivoro" ) {

    console.log("Seu animal é a Homem" )
    
} else if (vertebra === "vertebrado" && tipo === "mamifero" && alimentacao === "herbivoro" ) {

    console.log("Seu animal é a Vaca" )
    
} else if (vertebra === "invertebrado" && tipo === "inseto" && alimentacao === "hematofago" ) {

    console.log("Seu animal é a Pulga" )
    
} else if (vertebra === "invertebrado" && tipo === "inseto" && alimentacao === "herbivoro" ) {

    console.log("Seu animal é a Lagarta" )
    
} else if (vertebra === "invertebrado" && tipo === "anelideo" && alimentacao === "hematofago" ) {

    console.log("Seu animal é a Sanguessuga" )
    
} else if (vertebra === "invertebrado" && tipo === "anelideo" && alimentacao === "onivoro" ) {

    console.log("Minhoca" )
    
} else {
    console.log('Seu animal não foi cadastrado')
}


