function ex1() {
  var n = parseFloat(prompt("Digite um número para ver se é par ou ímpar:"));
  if (n % 2 == 0) {
      alert("Seu número é par");
  } else {
      alert("Seu número é ímpar");
  }
}

function ex2() {
  var id = prompt("Digite sua idade:");
  if (id >= 18) {
      alert("Você é maior de idade");
  } else {
      alert("Você é menor de idade");
  }
}

function ex3() {
  for (var i = 1; i < 11; i++) {
      alert(i);
  }
}

function ex4() {
  var i = prompt("Digite um número:");
  while (i > -1) {
      alert(i);
      i--;
  }
}

function ex5() {
  var i = prompt("Digite um número para ser multiplicado de 1 a 10:");
  for (var m = 1; m < 11; m++) {
      var mult = i * m;
      alert(i + " x " + m + " = " + mult);
  }
}

function ex6() {
  var num = parseInt(prompt("Digite um número para ser somado:"));
  var soma = 0;
  for (var s = 1; s <= num; s++) {
      soma = soma + s;
  }
  alert("A soma de 1 até " + num + " é: " + soma);
}

function ex7() {
  var num = parseInt(prompt("Digite um número para ver se é primo:"));
  var primo = true;
  if (num <= 1) {
      primo = false;
  } else {
      for (var i = 2; i < num; i++) {
          if (num % i === 0) {
              primo = false;
              break;
          }
      }
  }
  if (primo) {
      alert("O número é primo.");
  } else {
      alert("O número não é primo.");
  }
}

function ex8() {
  var usuario = prompt("Digite um nome de usuário:");
  var senha = parseInt(prompt("Digite uma senha:"));
  while (true) {
      var entrada1 = prompt("Digite o nome do seu usuário:");
      var entrada2 = parseInt(prompt("Digite sua senha:"));
      if ((entrada1 == usuario) && (entrada2 == senha)) {
          alert("Você logou!");
          break;
      } else {
          alert("Tente novamente");
      }
  }
}

function ex9() {
  var soma = 0;
  while (true) {
      var number = parseFloat(prompt("Digite o número para ser somado (negativo para parar):"));
      if (number < 0) {
          alert("A soma dos números digitados é: " + soma);
          break;
      } else {
          soma = soma + number;
      }
  }
}

function ex10() {
  var alt = Math.floor(Math.random() * 10) + 1;
  var palpite;
  while (true) {
      palpite = parseInt(prompt("Adivinhe o número (1 a 10):"));
      if (palpite == alt) {
          alert("PARABÉNS! VOCÊ ACERTOU O NÚMERO!");
          break;
      } else if (palpite < alt) {
          alert("O número é MAIOR!");
      } else {
          alert("O número é MENOR!");
      }
  }
}

function ex11() {
  var numero = parseInt(prompt("Digite um número:"));
  if (numero < 0) {
      alert("Fatorial não existe para números negativos.");
  } else {
      var fatorial = 1;
      for (var i = 1; i <= numero; i++) {
          fatorial *= i;
      }
      alert("O fatorial de " + numero + " é: " + fatorial);
  }
}

function ex12() {
  var nota;
  while (true) {
      nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));
      if (nota >= 0 && nota <= 10) {
          alert("Nota válida: " + nota);
          break;
      } else {
          alert("Valor inválido, tente novamente.");
      }
  }
}

function ex13() {
  var nota1 = parseFloat(prompt("Digite a primeira nota:"));
  var nota2 = parseFloat(prompt("Digite a segunda nota:"));
  var nota3 = parseFloat(prompt("Digite a terceira nota:"));
  var media = (nota1 + nota2 + nota3) / 3;
  alert("Média: " + media.toFixed(2));
  if (media >= 7) {
      alert("Aprovado!");
  } else {
      alert("Reprovado!");
  }
}

function ex14() {
  var valor = parseInt(prompt("Digite o valor para saque:"));
  var notas100 = Math.floor(valor / 100);
  valor %= 100;
  var notas50 = Math.floor(valor / 50);
  valor %= 50;
  var notas20 = Math.floor(valor / 20);
  valor %= 20;
  var notas10 = Math.floor(valor / 10);
  valor %= 10;
  var notas5 = Math.floor(valor / 5);
  valor %= 5;
  var notas2 = Math.floor(valor / 2);
  valor %= 2;
  var notas1 = valor;

  var resultado = "Cédulas necessárias:\n";
  resultado += "Notas de 100: " + notas100 + "\n";
  resultado += "Notas de 50: " + notas50 + "\n";
  resultado += "Notas de 20: " + notas20 + "\n";
  resultado += "Notas de 10: " + notas10 + "\n";
  resultado += "Notas de 5: " + notas5 + "\n";
  resultado += "Notas de 2: " + notas2 + "\n";
  resultado += "Notas de 1: " + notas1;
  alert(resultado);
}

function ex15() {
  var num = parseInt(prompt("Digite um número:"));
  var impares = "Números ímpares de 1 a " + num + ":\n";
  for (var i = 1; i <= num; i++) {
      if (i % 2 !== 0) {
          impares += i + " ";
      }
  }
  alert(impares);
}