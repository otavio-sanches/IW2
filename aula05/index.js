//Exercicio A
function maior(a, b) {
    return a > b ? a : b;
}

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

console.log("Maior número:", maior(n1, n2));

//Exercicio B
function ePar(n) {
    return n % 2 === 0;
}

let num = Number(prompt("Digite um número:"));

console.log("É par?", ePar(num));

//Exercicio C
function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let num1 = Number(prompt("Digite um número:"));

console.log("Fatorial:", fatorial(num1));

//Exercicio D
function media(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma / lista.length;
}

let quantidade = Number(prompt("Quantos números você quer digitar?"));
let numeros = [];

for (let i = 0; i < quantidade; i++) {
    let n = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(n);
}

console.log("Média:", media(numeros));

//Exercicio E
function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

let temp = Number(prompt("Digite a temperatura em Celsius:"));

console.log("Temperatura em Fahrenheit:", celsiusParaFahrenheit(temp));