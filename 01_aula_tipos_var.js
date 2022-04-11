// tipos numericos

// Declaracao de variaveis
const num1 = 5;
const num2 = 0;
const num3 = 4.;
const num4 = 3.3;
const nomeQualquer = "Jocy";
const animalQualquer = "Urubu";

// Testes iniciais
console.log("Teste de numero 1:");
console.log(num1 + num2);
console.log(num1 + num3);
console.log(num3 + num4);

// Multiplicacao e divisao
console.log("\nTeste de numero 2:");
console.log(num1 * num2);
console.log(num1 * num3);
console.log(num3 * num4);

console.log("\nTeste de numero 3:");
console.log(num1 / num2);
console.log(num1 / num3);
console.log(num3 / num4);

// Arrendodamento de numeros:
const resultado = num3 / num4;
console.log("\nTeste de numero 4:");
console.log(resultado);
console.log(Math.round(resultado))
console.log(Math.ceil(resultado))
console.log(Math.floor(resultado))
console.log(resultado.toFixed(2))

// Padrao monetario
resultadoMonetario = resultado.toLocaleString('pt-BR', {style:"currency", currency:"BRL"});
console.log(resultadoMonetario);


// NAN -> Not a Number

console.log("\nTeste de numero 5:")
console.log(nomeQualquer + animalQualquer);
console.log(nomeQualquer + num1);
console.log(nomeQualquer * num1);

// Strings
console.log("\nTeste de numero 6:");
nome = "Jocy";
idade = 29;

// 1)
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos");
// 2)
console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// 3)
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos e possuo ${1.85}m`)