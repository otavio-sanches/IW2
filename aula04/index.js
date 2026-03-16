//1. Par ou Ímpar
console.log("Exercicio 1");
var num = prompt("Escolha um numero: ");

if (num % 2 === 0 ) {
    console.log("Esse numero é par");
} else {
    console.log("Esse numero é impar");
}

//2. Verificação de Maioridade
console.log("Exercicio 2");
var idade = prompt("Qual a sua idade?");

if (idade<18) {
    console.log("você é menor de idade");
} else {
    console.log("você é maior de idade");
}

//3. Contagem de 1 a 10
console.log("Exercicio 3");
for (var i = 1; i < 11; i++) {
    console.log(i);
}

//4. Contagem Regressiva
console.log("Exercicio 4");
var k = prompt("Escolha um número");
while (k>-1){
    console.log(k);
    k--;
}

//5. Tabuada
console.log("Exercicio 5");
var num2 = prompt("Me diga um numero para mostrar sua tabuada: ");
for (var m = 1; m < 11; m++){
    mult = num2 * m;
    console.log(mult);
}

//6. Somatório

console.log("Exercicio 6")

var num3 = prompt("Me diga um numero: ");
