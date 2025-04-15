//Tipos de dados
//String - texto, "", '', ``, 

let nameUser: string = "João";
let lastNameUser: string = "da Silva"
let fullName: string = `${nameUser} ${lastNameUser}`;
console.log(fullName)

//Number - Inteiros, Decimais, Hexadecimais, Binários

let age: number = 30;
let statusUser: boolean = true;

//Array - Variáveis indexadas. Vetores, Matrizes

let fruits: Array<string> = ["Maça", "Banana", "Uva"]
let fruits2: Array<string|number> = ["Maça", "Banana", "Uva"]

//Object - Objetos, propiedades e funcionalidades

type companyType = {
    name: String,
    adress: String,
    city: String,
    state?: String, //Faz ser opcional
}

let company: object = {
    name: 'Hcode',
    address: "Avenida Jośe Versolato, 101",
    city: "São José dos Campos",
    state: "SP",
}

//Date

let bornDate = new Date('2022-01-01');

//Tuple - Array com tipos de dados já definidos

let address: [string, number] = ["Av. Paulista" , 1000]

//Enum - lista de valores possíveis

enum statusUserEnum  {
    blocked = 0,
    released = 1,
    pending = 2
}

let options:statusUserEnum = statusUserEnum.pending

//Any - qualquer tipo de dado, não recomendadado

let obs:any = true;

//Variáveis

let variavelMutavel = "Esta é uma variável que pode mudar de valor";
console.log(variavelMutavel)

const variavelImutavel = "Esta variável não muda de valor, por isso seu nome é constante"
console.log(variavelImutavel)

