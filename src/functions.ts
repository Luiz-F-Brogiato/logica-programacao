function exibe(nomeCarro: string, nomeMarca:string = "Volkswagen", anoFabricacao:number) {
    if (nomeCarro) {
        console.log(`${nomeCarro} ${nomeCarro ? nomeMarca: ""}!!`)
    }   else{
        console.log("Poxa, cadê o fusca? :C")
    }
    if (anoFabricacao <= 1970 ) {
        console.log("Seu carro é bem antigo")
    } if (anoFabricacao >= 1990) {
        console.log("Seu carro ainda é antigo, mas não tanto")
    } else {
        console.log("Vocẽ é um nuttella com carro de plástico XD")
    }
    console.log(`${nomeCarro}!!`)
}

exibe("Fusca", "Volkswagen", 1971)