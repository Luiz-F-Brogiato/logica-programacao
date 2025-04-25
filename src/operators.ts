//Operador de atribuição
let nameCompany = "Hcode";
console.log(nameCompany)


//Operador aritmetico
let price = 1500;
let porcento = 0.1;
 
console.log(Number(price * (1 + porcento)).toFixed(2));

let startValue = 2;

console.log(startValue ** 6);

console.log(startValue % 2);

//Operador de comparação

if (price == 1000) {
    console.log("Está caro");
}

if (price < 1000) {
    console.log("Está barato");
}

if (price > 1000) {
    console.log("Está caro ou caro demais");
}

if (price !== 1000) {
    console.log("O valor é dirente de mil ou o tipo de dado é diferente");
}
/* 
if (price === "100") {
    console.log("Está caro");
} === compara o tipo também  */

