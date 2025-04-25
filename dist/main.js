"use strict";
//Tipos de dados
//String - texto, "", '', ``, 
let nameUser = "João";
let lastNameUser = "da Silva";
let fullName = `${nameUser} ${lastNameUser}`;
console.log(fullName);
//Number - Inteiros, Decimais, Hexadecimais, Binários
let age = 30;
let statusUser = true;
//Array - Variáveis indexadas. Vetores, Matrizes
let fruits = ["Maça", "Banana", "Uva"];
let fruits2 = ["Maça", "Banana", "Uva"];
let company = {
    name: 'Hcode',
    address: "Avenida Jośe Versolato, 101",
    city: "São José dos Campos",
    state: "SP",
};
//Date
let bornDate = new Date('2022-01-01');
//Tuple - Array com tipos de dados já definidos
let address = ["Av. Paulista", 1000];
//Enum - lista de valores possíveis
var statusUserEnum;
(function (statusUserEnum) {
    statusUserEnum[statusUserEnum["blocked"] = 0] = "blocked";
    statusUserEnum[statusUserEnum["released"] = 1] = "released";
    statusUserEnum[statusUserEnum["pending"] = 2] = "pending";
})(statusUserEnum || (statusUserEnum = {}));
let options = statusUserEnum.pending;
//Any - qualquer tipo de dado, não recomendadado
let obs = true;
//---------------------------------------------------------------------
//Variáveis
let variavelMutavel = "Esta é uma variável que pode mudar de valor";
console.log(variavelMutavel);
const variavelImutavel = "Esta variável não muda de valor, por isso seu nome é constante";
console.log(variavelImutavel);
//---------------------------------------------------------------------
//Variáveis indexadas
let fusca = ['1300L', '1600', 'Pé de boi', 'Split Windows', '1500', '1300'];
console.log(fusca[2].length);
console.log(fusca[fusca.length - 1]);
console.log(fusca.at(-1));
//---------------------------------------------------------------------
//Variáveis indexadas
/*     let fusca = ['1300L', '1600', 'Pé de boi', 'Split Windows', '1500', '1300']
    console.log(fusca[2].length);
    console.log(fusca[fusca.length - 1]);
    console.log(fusca.at(-1)); */
//---------------------------------------------------------------------
let montadoras = [
    ["Volkswagen", "Fusca", "Gol", "Golf", "Passat", "Jetta", "Tiguan", "Polo", "Up!", "T-Cross", "Amarok"],
    ["Porsche", "911", "Cayman", "Boxster", "Panamera", "Macan", "Cayenne", "Taycan", "718", "Carrera", "Spyder"],
    ["Audi", "A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7"],
    ["Mercedes-Benz", "Classe A", "Classe B", "Classe C", "Classe E", "Classe S", "CLA", "GLA", "GLC", "GLE", "GLS"]
];
montadoras.forEach((m, index) => {
    console.log(montadoras[index][0]);
    let carros = "";
    m.forEach((modelo, index) => {
        if (index > 0) {
            carros += modelo + ", ";
        }
    });
});
//Desafio das empresas aéreas
let nacionaisAereas = [
    ["Gol"],
    ["Latam"],
    ["Azul"],
];
nacionaisAereas.forEach((n, index) => {
    console.log(n[index]);
});
