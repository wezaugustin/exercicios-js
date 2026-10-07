// ===== FUNÇÕES BÁSICAS =====

// 1. Exibe uma mensagem fixa no console
function mostrarMensagem() {
  console.log("Bem-vindo ao estudo de funções em JavaScript!");
}

// 2. Soma de dois números fixos
function somaSimples() {
  const a = 4;
  const b = 6;
  console.log("Soma:", a + b);
}

// 3. Imprime um nome fixo dentro do código
function imprimirNome() {
  const nome = "Maria";
  console.log(nome);
}

// ===== FUNÇÕES COM RETORNO =====

// 4. Quadrado de um número
function quadrado(numero) {
  return numero * numero;
}

// 5. Fahrenheit -> Celsius: C = (F - 32) * 5 / 9
function converterParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 6. Une duas strings em uma única frase
function concatenaPalavras(primeira, segunda) {
  return primeira + " " + segunda;
}

// ===== FUNÇÕES PARAMETRIZADAS =====

// 7. Média de três notas
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

// 8. Valor final após desconto percentual
function desconto(valor, percentual) {
  return valor - (valor * percentual / 100);
}

// 9. Saudação personalizada
function saudacaoPersonalizada(nome) {
  console.log("Olá, " + nome + "! Seja bem-vindo.");
}

// ===== FUNÇÕES ANÔNIMAS =====

// 10. Multiplicação
const multiplicar = function (a, b) {
  return a * b;
};

// 11. Divisão
const dividir = function (a, b) {
  return a / b;
};

// ===== ARROW FUNCTIONS =====

// 12. Dobro de um número
const dobro = (numero) => numero * 2;

// 13. Verifica se o número é par
const ehPar = (numero) => numero % 2 === 0;

// ===== FUNÇÕES DENTRO DE FUNÇÕES =====

// 14. Calculadora com funções internas soma e subtrair
function calculadora(a, b) {
  function soma(x, y) {
    return x + y;
  }
  function subtrair(x, y) {
    return x - y;
  }

  console.log("Soma:", soma(a, b));
  console.log("Subtração:", subtrair(a, b));
}

// 15. Funções internas de produto e potência; retorna um objeto com os resultados
function operacoesAvancadas(a, b) {
  function produto(x, y) {
    return x * y;
  }
  function potencia(base, expoente) {
    return Math.pow(base, expoente); // ou base ** expoente
  }

  return {
    produto: produto(a, b),
    potencia: potencia(a, b)
  };
}

// ===== TESTES =====
console.log("--- Funções básicas ---");
mostrarMensagem();                                  // 1
somaSimples();                                      // 2
imprimirNome();                                     // 3

console.log("--- Funções com retorno ---");
console.log("Quadrado de 5:", quadrado(5));                          // 25
console.log("212°F em Celsius:", converterParaCelsius(212));         // 100
console.log(concatenaPalavras("Olá", "mundo"));                      // Olá mundo

console.log("--- Funções parametrizadas ---");
console.log("Média:", calcularMedia(7, 8, 9));                       // 8
console.log("Valor com 20% de desconto:", desconto(200, 20));        // 160
saudacaoPersonalizada("Carlos");                                     // Olá, Carlos! Seja bem-vindo.

console.log("--- Funções anônimas ---");
console.log("6 x 7 =", multiplicar(6, 7));                           // 42
console.log("20 / 4 =", dividir(20, 4));                             // 5

console.log("--- Arrow functions ---");
console.log("Dobro de 8:", dobro(8));                                // 16
console.log("10 é par?", ehPar(10));                                 // true
console.log("7 é par?", ehPar(7));                                   // false

console.log("--- Funções dentro de funções ---");
calculadora(10, 3);                                                  // Soma: 13 / Subtração: 7
console.log(operacoesAvancadas(2, 5));                               // { produto: 10, potencia: 32 }
